/**
 * Compresses PDFs with Ghostscript (AGPL) before they are uploaded to R2.
 *
 * R2 free tier has no server-side PDF processing, so large attachments are
 * compressed in CI. Runs Ghostscript's pdfwrite device with the selected
 * -dPDFSETTINGS profile, and only replaces the original when the output is at
 * least --min-pct percent smaller. Repeated runs converge (already-compressed
 * files are not rewritten).
 *
 * Usage:
 *   node scripts/compress-pdfs.mjs                       # compress public/downloads/*.pdf
 *   node scripts/compress-pdfs.mjs --src public/downloads --settings screen|ebook|printer|prepress
 *   node scripts/compress-pdfs.mjs --min-pct 10          # only replace when >=10% smaller
 *   node scripts/compress-pdfs.mjs --dry-run             # preview savings without writing
 *   node scripts/compress-pdfs.mjs --require             # exit 1 when Ghostscript is missing
 */

import { spawnSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { basename, extname, join } from 'node:path'

const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}

const DRY_RUN = args.includes('--dry-run')
const REQUIRE = args.includes('--require')
const SRC = flagValue('src', 'public/downloads')
const SETTINGS = flagValue('settings', 'ebook')
const MIN_PCT = Number(flagValue('min-pct', '5'))
const SETTINGS_ALLOWED = new Set(['screen', 'ebook', 'printer', 'prepress', 'default'])

const GS_CANDIDATES = ['gs', 'gswin64c', 'gswin32c']

function findGs() {
  for (const name of GS_CANDIDATES) {
    const probe = spawnSync(name, ['--version'], { stdio: 'ignore' })
    if (probe.status === 0) return name
  }
  return null
}

async function walk(dir, out = []) {
  let entries = []
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, out)
    } else if (extname(entry.name).toLowerCase() === '.pdf') {
      out.push(full)
    }
  }
  return out
}

async function compressOne(gs, input, tmp) {
  const run = spawnSync(
    gs,
    [
      '-q',
      '-dNOPAUSE',
      '-dBATCH',
      '-sDEVICE=pdfwrite',
      '-dCompatibilityLevel=1.4',
      `-dPDFSETTINGS=/${SETTINGS}`,
      '-dDetectDuplicateImages=true',
      '-dCompressFonts=true',
      '-dSubsetFonts=true',
      '-dEmbedAllFonts=true',
      '-dPreserveAnnots=false',
      '-o',
      tmp,
      input,
    ],
    { stdio: 'ignore' },
  )
  if (run.status !== 0) return null
  try {
    const [inStat, outStat] = await Promise.all([fs.stat(input), fs.stat(tmp)])
    return outStat.size
  } catch {
    return null
  }
}

async function main() {
  if (!SETTINGS_ALLOWED.has(SETTINGS)) {
    console.error(`Invalid --settings "${SETTINGS}". Use one of: screen, ebook, printer, prepress, default.`)
    process.exit(1)
  }

  const gs = findGs()
  if (!gs) {
    if (REQUIRE) {
      console.error('Ghostscript not found. Install it (apt: "apt-get install -y ghostscript") or pass --require off to skip.')
      process.exit(1)
    }
    console.error('[pdfs] Ghostscript not found — skipping PDF compression. CI installs it via apt before this step.')
    return
  }

  const inputs = await walk(SRC)
  let totalIn = 0
  let totalSaved = 0
  let compressed = 0
  let skipped = 0

  if (inputs.length === 0) {
    console.log(`[pdfs] no PDFs under ${SRC}`)
    return
  }

  console.log(`[pdfs] Ghostscript (${gs}), settings=${SETTINGS}, min-pct=${MIN_PCT}, ${inputs.length} PDFs in ${SRC}${DRY_RUN ? ' (dry-run)' : ''}`)

  for (const input of inputs) {
    const inSize = (await fs.stat(input)).size
    totalIn += inSize
    if (DRY_RUN) {
      console.log(`  would compress ${basename(input)} (${(inSize / 1024).toFixed(0)} KiB)`)
      skipped += 1
      continue
    }
    const tmp = join(process.cwd(), `__gs-${process.pid}-${basename(input)}.tmp.pdf`)
    const outSize = await compressOne(gs, input, tmp)
    const reduction = outSize != null ? inSize - outSize : 0
    if (outSize != null && reduction >= (inSize * MIN_PCT) / 100) {
      await fs.rm(input, { force: true })
      await fs.rename(tmp, input)
      compressed += 1
      totalSaved += reduction
      console.log(`  ok ${basename(input)} ${(inSize / 1024).toFixed(0)} -> ${(outSize / 1024).toFixed(0)} KiB (${((reduction / inSize) * 100).toFixed(0)}% smaller)`)
    } else {
      await fs.rm(tmp, { force: true })
      skipped += 1
      console.log(`  keep ${basename(input)} ${(inSize / 1024).toFixed(0)} KiB (no ${MIN_PCT}%+ saving)`)
    }
  }

  console.log(`[pdfs] done: ${compressed} compressed, ${skipped} skipped, saved ${(totalSaved / 1024 / 1024).toFixed(2)} MiB from ${(totalIn / 1024 / 1024).toFixed(2)} MiB input`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})