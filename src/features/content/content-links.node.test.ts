import { test, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import {
  getPublicPaths,
  getNewsPosts,
  getContentProducts,
  getTechArticles,
  getCaseUses,
  getResearchTopics,
} from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'
import { PUBLIC_PATHS } from '@/features/seo/seo'
import { gatePath } from '@/features/seo/edge-gate'
import { knowledge } from '@/product/knowledge'
import { projects } from '@/product/projects'
import { seriesPages } from '@/product/series-pages'
import { solutionPath, solutionPages } from '@/product/solution-pages'

/* ───────────────────────── live route set ───────────────────────── */

const contentRoot = resolve(process.cwd(), 'src/content/site')
const routesRoot = resolve(process.cwd(), 'src/routes')

/** Dedicated root routes (`factory.tsx` → `/factory`). */
const rootRoutes = readdirSync(routesRoot)
  .filter((f) => f.endsWith('.tsx') && !f.endsWith('.lazy.tsx') && !f.slice(0, -4).includes('.') && !f.includes('$'))
  .map((f) => `/${f.slice(0, -4)}`)

const LIVE = new Set([
  ...rootRoutes,
  ...PUBLIC_PATHS.map((p) => p.path),
  ...getPublicPaths(),
  '/', '/about', '/contact', '/how-it-works', '/news', '/products', '/projects', '/knowledge',
  '/solutions', '/faq', '/partners', '/terms', '/privacy', '/search', '/evidence/case-studies',
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  ...getNewsPosts().map((p) => `/news/${p.slug}`),
  ...getContentProducts().map((p) => `/products/${p.slug}`),
  ...getTechArticles().map((a) => `/technology/${a.slug}`),
  ...getCaseUses().map((c) => `/evidence/case-studies/${c.slug}`),
  ...getResearchTopics().map((t) => `/research/${t.slug}`),
  ...knowledge.en.map((a) => `/knowledge/${a.slug}`),
  ...projects.en.map((p) => `/projects/${p.slug}`),
  ...seriesPages.en.map((s) => `/products/${s.slug}`),
  ...solutionPages.en.map((s) => solutionPath(s.slug)),
])

const LIVE_ES = new Set([...LIVE].map((p) => (p === '/' ? '/es' : `/es${p}`)))

/* ───────────────────────── link extraction ───────────────────────── */

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = join(dir, e.name)
    return e.isDirectory()
      ? walk(full)
      : e.name.endsWith('.md') || e.name.endsWith('.mdx') || e.name.endsWith('.yaml')
        ? [full]
        : []
  })
}

/** walk content + the tsx routes that hardcode CDN media links (about / how-it-works videos). */
function walkWithRoutes(): string[] {
  return [...walk(contentRoot), ...walk(routesRoot).filter((f) => f.endsWith('.tsx'))]
}

function extractLinks(raw: string): string[] {
  const out: string[] = []
  for (const m of raw.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) out.push(m[1])
  for (const m of raw.matchAll(/(?:href|url|link):\s*['"]([^'"]+)['"]/g)) out.push(m[1])
  for (const m of raw.matchAll(/(?:href|url|link):\s*(\/[^\s'"]+)/g)) out.push(m[1])
  for (const m of raw.matchAll(/\bhref="([^"]+)"/g)) out.push(m[1])
  return out
}

function normalize(u: string): string | null {
  const clean = u.split(/[?#]/)[0]
  if (!clean.startsWith('/')) return null
  if (clean.startsWith('/zh')) return null
  const stripped = clean.replace(/\/+$/, '') || '/'
  // Legacy content hrefs remapped to their live targets (mirrors HREF_REMAP
  // in render/sections.tsx — the final content YAML still references a few).
  return LEGACY_HREFS[stripped] ?? stripped
}

const LEGACY_HREFS: Record<string, string> = {
  '/guides/safety-tips': '/quality',
  '/guides/how-to-choose-your-boat': '/knowledge/how-to-choose-rib-oem-manufacturer',
}

const downloadsDir = resolve(process.cwd(), 'public/downloads')
const assetsDir = resolve(process.cwd(), 'public/assets')

/** Local source dir each R2 CDN site/* prefix maps to (kept in sync with upload-site-assets.mjs). */
const CDN_SOURCE: Record<string, string> = {
  downloads: downloadsDir,
  quality: resolve(assetsDir, 'quality'),
  images: resolve(assetsDir, 'images'),
  videos: resolve(assetsDir, 'videos'),
}

interface BrokenLink {
  file: string
  link: string
  reason: string
}

const broken: BrokenLink[] = []

for (const file of walk(contentRoot)) {
  const raw = readFileSyncSafe(file)
  if (!raw) continue
  for (const link of extractLinks(raw)) {
    const path = normalize(link)
    if (!path) continue
    if (path.startsWith('/api') || path.startsWith('/app') || path.startsWith('/admin')) continue
    if (path.startsWith('/assets/')) {
      const target = join(assetsDir, path.slice('/assets/'.length))
      if (!existsSync(target)) broken.push({ file, link, reason: 'missing asset file' })
      continue
    }
    if (path.startsWith('/downloads/')) {
      const target = join(downloadsDir, path.slice('/downloads/'.length))
      if (!existsSync(target)) broken.push({ file, link, reason: `missing download file` })
      continue
    }
    const es = path.startsWith('/es')
    if (es ? LIVE_ES.has(path) : LIVE.has(path)) continue
    const gate = gatePath(path)
    broken.push({
      file,
      link,
      reason: gate.action === 'ok' ? 'no live route' : `edge-gate: ${gate.action}${'to' in gate ? ` → ${gate.to}` : ''}`,
    })
  }
}

function readFileSyncSafe(file: string): string | null {
  try {
    return statSync(file).size < 4 * 1024 * 1024 ? readFileSync(file, 'utf8') : null
  } catch {
    return null
  }
}

test('every internal link in site content resolves to a live route', () => {
  const failing = broken.filter((b) => b.reason.startsWith('no live route'))
  expect(
    failing.map((b) => `${b.file}: ${b.link} (${b.reason})`),
    `content links pointing at non-existent routes:\n${failing.map((b) => `${b.file}: ${b.link}`).join('\n')}`,
  ).toEqual([])
})

test('no content link points at an edge-gate redirect or 410 (link directly to the target)', () => {
  const redirects = broken.filter((b) => !b.reason.startsWith('no live route') && !b.reason.startsWith('missing asset'))
  expect(
    redirects.map((b) => `${b.file}: ${b.link} (${b.reason})`),
    `content links that should point at their final target instead of a redirect/410:\n${redirects.map((b) => `${b.file}: ${b.link} → ${b.reason}`).join('\n')}`,
  ).toEqual([])
})

test('every /assets/ link in site content resolves to a real file', () => {
  const missing = broken.filter((b) => b.reason.startsWith('missing asset'))
  expect(
    missing.map((b) => `${b.file}: ${b.link} (${b.reason})`),
    `content links pointing at missing asset files:\n${missing.map((b) => `${b.file}: ${b.link}`).join('\n')}`,
  ).toEqual([])
})

test('absolute media links use the R2 CDN, never the leftover static hosts', () => {
  const LEGACY_HOST = 'https://neptunor.com/assets/'
  const BAD_SUBDIRS = ['downloads/', 'quality/', 'videos/', 'images/']
  const CDN_PREFIX = 'https://assets.neptunor.com/site/'
  const violations: { file: string; link: string }[] = []
  for (const file of walk(contentRoot)) {
    const raw = readFileSyncSafe(file)
    if (!raw) continue
    for (const link of extractLinks(raw)) {
      if (!link.startsWith(LEGACY_HOST)) continue
      if (BAD_SUBDIRS.some((d) => link.startsWith(LEGACY_HOST + d))) {
        violations.push({ file, link })
      }
    }
  }
  expect(
    violations.map((v) => `${v.file}: ${v.link}`),
    `site media must be referenced via the R2 CDN (${CDN_PREFIX}...) — the worker static host never contains downloads/quality/videos/images:\n${violations.map((v) => `${v.file}: ${v.link}`).join('\n')}`,
  ).toEqual([])
})

test('every absolute CDN media link has a committed local source file', () => {
  const missing: { file: string; link: string }[] = []
  const CDN_PREFIX = 'https://assets.neptunor.com/site/'
  const records = new Map<string, string>()
  for (const file of walkWithRoutes()) {
    const raw = readFileSyncSafe(file)
    if (!raw) continue
    for (const link of extractLinks(raw)) {
      records.set(link, file)
    }
    for (const m of raw.matchAll(/\/site\/(downloads|quality|images|videos)\/[A-Za-z0-9_./-]+\.(pdf|avif|webp|mp4|jpg)/g)) {
      records.set(`https://assets.neptunor.com${m[0]}`, file)
    }
  }
  for (const [link, file] of records) {
    const clean = link.split(/[?#]/)[0]
    if (!clean.startsWith(CDN_PREFIX)) continue
    const rest = clean.slice(CDN_PREFIX.length)
    const slash = rest.indexOf('/')
    if (slash === -1) continue
    const prefix = rest.slice(0, slash)
    const source = CDN_SOURCE[prefix]
    if (!source) continue
    if (!existsSync(join(source, rest.slice(slash + 1)))) {
      missing.push({ file, link })
    }
  }
  expect(
    missing.map((m) => `${m.file}: ${m.link}`),
    `CDN media links with no committed local source (CI upload would skip them → broken CDN objects):\n${missing
      .map((m) => `${m.file}: ${m.link}`)
      .join('\n')}`,
  ).toEqual([])
})
