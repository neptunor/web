/**
 * Batch-generates responsive image variants with sharp.
 *
 * Free-tier Cloudflare R2 (and worker-static origins) cannot resize images on
 * the fly, so product photos are pre-scaled at build/CI time to a fixed width
 * ladder in AVIF + WebP, and a manifest is emitted that the runtime
 * `<ResponsiveImg>` helper consumes to wire up `srcset`/`sizes`.
 *
 * Source files are left untouched. Variants are written next to them as
 * `<stem>-w<W>.<fmt>`; the manifest lands at src/config/responsive-manifest.json
 * so Vite can bundle it as typed JSON. The largest candidate in each entry is
 * the original file itself, so the browser never requests a size that does not
 * exist (no 404s, no upscaling).
 *
 * Idempotent: existing variants newer than their source are skipped, so reruns
 * in CI are cheap. Use --force to regenerate, or delete the variant files.
 *
 * Usage:
 *   node scripts/process-images.mjs                                   # default public/assets/products
 *   node scripts/process-images.mjs --src public/assets/products --widths 320,480,720,960,1280
 *   node scripts/process-images.mjs --dry-run                         # print plan without writing
 *   node scripts/process-images.mjs --quality-avif 60 --quality-webp 75
 */

import { readdir, stat, writeFile } from 'node:fs/promises'
import { basename, extname, join, relative, dirname } from 'node:path'
import sharp from 'sharp'

const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const flagNumber = (name, fallback) => {
  const raw = flagValue(name, '')
  if (!raw) return fallback
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

const DRY_RUN = args.includes('--dry-run')
const FORCE = args.includes('--force')
const SRC = flagValue('src', 'public/assets/products')
const WIDTHS = String(flagValue('widths', '320,480,720,960,1280'))
  .split(',')
  .map((n) => Number(n))
  .filter((n) => Number.isFinite(n) && n > 0)
  .sort((a, b) => a - b)
const QUALITY_AVIF = flagNumber('quality-avif', 72)
const QUALITY_WEBP = flagNumber('quality-webp', 82)
const MANIFEST_PATH = flagValue('manifest', join('src', 'config', 'responsive-manifest.json'))
const CONCURRENCY = Math.max(1, flagNumber('concurrency', 4))

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'])
const VARIANT_RE = /^(?<stem>.+)-w(?<width>\d+)\.(avif|webp)$/i

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, out)
    } else {
      out.push(full)
    }
  }
  return out
}

function isVariantOutput(file) {
  return VARIANT_RE.test(basename(file))
}

async function collectSources() {
  const files = await walk(SRC)
  const sources = []
  for (const f of files) {
    if (isVariantOutput(f)) continue
    if (!IMAGE_EXTS.has(extname(f).toLowerCase())) continue
    sources.push(f)
  }
  return sources
}

function outputPath(source, width, fmt) {
  const dir = dirname(source)
  const stem = basename(source, extname(source))
  return join(dir, `${stem}-w${width}.${fmt}`)
}

function variantRel(rel, width, fmt) {
  const ext = rel.slice(rel.lastIndexOf('.'))
  const stem = rel.slice(0, rel.lastIndexOf('.'))
  return `${stem}-w${width}.${fmt}`
}

async function isUpToDate(output, source) {
  if (FORCE) return false
  try {
    const [o, s] = await Promise.all([stat(output), stat(source)])
    return o.mtimeMs >= s.mtimeMs
  } catch {
    return false
  }
}

async function processSource(source, manifest, stats) {
  const meta = await sharp(source).metadata()
  const width = meta.width
  if (!width) return
  const rel = relative(SRC, source).split(/[\\/]/).join('/')
  const ladder = WIDTHS.filter((w) => w < width)
  const variants = []

  for (const w of ladder) {
    const avifPath = outputPath(source, w, 'avif')
    const webpPath = outputPath(source, w, 'webp')
    const avifReady = await isUpToDate(avifPath, source)
    const webpReady = await isUpToDate(webpPath, source)
    const write = []
    if (!avifReady) write.push(() => sharp(source).resize({ width: w, withoutEnlargement: true }).avif({ quality: QUALITY_AVIF }).toFile(avifPath))
    if (!webpReady) write.push(() => sharp(source).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY_WEBP }).toFile(webpPath))
    if (write.length > 0) {
      if (DRY_RUN) {
        stats.planned += write.length
      } else {
        for (const job of write) {
          const out = await job()
          stats.written += out.size
          stats.files += 1
        }
      }
    } else {
      stats.skipped += 2 - (avifReady ? 1 : 0) - (webpReady ? 1 : 0)
    }
    variants.push({ w, avif: variantRel(rel, w, 'avif'), webp: variantRel(rel, w, 'webp') })
  }

  variants.push({ w: width, avif: rel })
  manifest.images[rel] = { intrinsic: width, variants }
  stats.images += 1
}

async function main() {
  const manifest = { version: 1, widths: WIDTHS, images: {} }
  const stats = { images: 0, files: 0, written: 0, skipped: 0, planned: 0 }
  const sources = await collectSources()

  console.log(`[images] ${sources.length} sources in ${SRC}, ladder [${WIDTHS.join(', ')}], avif=${QUALITY_AVIF} webp=${QUALITY_WEBP}${DRY_RUN ? ' (dry-run)' : ''}`)

  const queue = [...sources]
  async function worker() {
    while (queue.length > 0) {
      const source = queue.shift()
      try {
        await processSource(source, manifest, stats)
        if (DRY_RUN) console.log(`  would process ${relative(SRC, source)}`)
      } catch (err) {
        console.error(`  FAILED ${relative(SRC, source)}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, sources.length || 1) }, worker))

  if (DRY_RUN) {
    console.log(`[images] ${stats.images} images, ${stats.planned} variants would be written`)
    return
  }

  const manifestRel = join(process.cwd(), MANIFEST_PATH)
  await writeFile(manifestRel, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`[images] wrote ${stats.images} manifest entries -> ${MANIFEST_PATH}`)
  console.log(`[images] wrote ${stats.files} variants (${(stats.written / 1024 / 1024).toFixed(1)} MiB), skipped ${stats.skipped} up-to-date`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})