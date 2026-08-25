import { test, expect } from 'vitest'
import { gatePath, EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { getContentPages } from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'
import { PUBLIC_PATHS } from '@/features/seo/seo'

/** Dedicated/static routes not covered by getContentPages() or PUBLIC_PATHS. */
const TEMPLATE_ROUTES = [
  '/evidence/case-studies', '/faq', '/news', '/partners',
  '/terms', '/privacy',
]

/** Dynamic prefix routes ({-$locale}/knowledge/$slug.tsx etc.) — a legacy key under one of these shadows real pages. */
const DYNAMIC_PREFIXES = ['/knowledge', '/projects', '/evidence/case-studies']

/** Every legacy target must resolve to a live route (not another redirect). */
const LIVE_ROUTES = new Set([
  ...getContentPages().map((p) => p.path),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  ...PUBLIC_PATHS.map((e) => e.path),
  ...TEMPLATE_ROUTES,
])

test('301 merge of duplicate paths (P0-4)', () => {
  expect(gatePath('/oem-odm')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/zh/oem-odm')).toEqual({ action: 'redirect', to: '/es/oem-manufacturing' })
  expect(gatePath('/oem-odm-manufacturer')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
})

test('French-slug doorways 301 to closest live page', () => {
  // /fabricant-sup-gonflable was dropped from the policy entirely — it no
  // longer redirects (and must never resurrect pointing at SUP content).
  expect(gatePath('/fabricant-sup-gonflable').action).toBe('ok')
  expect(gatePath('/bateau-gonflable-fabricant')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/fournisseur-nautique')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
})

test('quote/request and quality duplicates 301 onto their modern keepers', () => {
  expect(gatePath('/request-quotation')).toEqual({ action: 'redirect', to: '/contact' })
  expect(gatePath('/es/request-quotation')).toEqual({ action: 'redirect', to: '/es/contact' })
  expect(gatePath('/custom')).toEqual({ action: 'redirect', to: '/product-development' })
  expect(gatePath('/es/custom')).toEqual({ action: 'redirect', to: '/es/product-development' })
  expect(gatePath('/quality-testing')).toEqual({ action: 'redirect', to: '/quality' })
  expect(gatePath('/es/quality-testing')).toEqual({ action: 'redirect', to: '/es/quality' })
  expect(gatePath('/quality-control')).toEqual({ action: 'redirect', to: '/factory/quality-inspection' })
  expect(gatePath('/es/quality-control')).toEqual({ action: 'redirect', to: '/es/factory/quality-inspection' })
  expect(gatePath('/safety')).toEqual({ action: 'redirect', to: '/quality' })
  expect(gatePath('/trust')).toEqual({ action: 'redirect', to: '/quality' })
})

test('legacy industry pages merge into the five solution pages', () => {
  expect(gatePath('/solutions/resorts-hotels')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
  expect(gatePath('/es/solutions/resorts-hotels')).toEqual({ action: 'redirect', to: '/es/solutions/fleet-rental' })
  expect(gatePath('/solutions/paddle-clubs')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
  expect(gatePath('/solutions/build-your-own-brand')).toEqual({ action: 'redirect', to: '/solutions/private-label-boats' })
  expect(gatePath('/solutions/diving-center-boats')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
  expect(gatePath('/solutions-diving-center-boats')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
  expect(gatePath('/solutions/fishing-boat-solutions')).toEqual({ action: 'redirect', to: '/solutions/yacht-tender-dealers' })
  expect(gatePath('/solutions-yacht-tender-solutions')).toEqual({ action: 'redirect', to: '/solutions/yacht-tender-dealers' })
  expect(gatePath('/solutions/rescue-watercraft')).toEqual({ action: 'redirect', to: '/solutions/rescue-professional' })
})

test('brand pages collapse onto /about and the brand story page', () => {
  expect(gatePath('/brand')).toEqual({ action: 'redirect', to: '/about' })
  expect(gatePath('/es/brand')).toEqual({ action: 'redirect', to: '/es/about' })
  expect(gatePath('/zh/brand')).toEqual({ action: 'redirect', to: '/es/about' })
  expect(gatePath('/brand/story')).toEqual({ action: 'redirect', to: '/about/neptunor' })
  expect(gatePath('/es/brand/story')).toEqual({ action: 'redirect', to: '/es/about/neptunor' })
  expect(gatePath('/zh/brand/story')).toEqual({ action: 'redirect', to: '/es/about/neptunor' })
  expect(gatePath('/brand/global-presence')).toEqual({ action: 'redirect', to: '/about' })
  expect(gatePath('/brand/marine-expertise')).toEqual({ action: 'redirect', to: '/about' })
  expect(gatePath('/brand/team')).toEqual({ action: 'redirect', to: '/about' })
  expect(gatePath('/people')).toEqual({ action: 'redirect', to: '/about' })
  expect(gatePath('/geo-report')).toEqual({ action: 'redirect', to: '/about/neptunor' })
  expect(gatePath('/disclaimer')).toEqual({ action: 'redirect', to: '/terms' })
})

test('retired boat-category and OEM URLs 301 to live pages (spot checks)', () => {
  expect(gatePath('/adventure-boat')).toEqual({ action: 'redirect', to: '/products' })
  expect(gatePath('/fishing-boat')).toEqual({ action: 'redirect', to: '/products' })
  expect(gatePath('/tech-specs')).toEqual({ action: 'redirect', to: '/technology' })
  expect(gatePath('/odm-boat')).toEqual({ action: 'redirect', to: '/odm-development' })
  expect(gatePath('/oem-boat')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/oem-process')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/boat-manufacturer')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/design-powerhouse')).toEqual({ action: 'redirect', to: '/technology' })
  expect(gatePath('/engineering-perfection')).toEqual({ action: 'redirect', to: '/randdcenter' })
  expect(gatePath('/ai-answer-center')).toEqual({ action: 'redirect', to: '/faq' })
  expect(gatePath('/resources/download-catalog')).toEqual({ action: 'redirect', to: '/products' })
  expect(gatePath('/es/resources/download-catalog')).toEqual({ action: 'redirect', to: '/es/products' })
  // use-case hub collapses onto solutions
  expect(gatePath('/use-cases')).toEqual({ action: 'redirect', to: '/solutions' })
  expect(gatePath('/use-cases/search-and-rescue')).toEqual({ action: 'redirect', to: '/solutions/rescue-professional' })
  expect(gatePath('/use-cases/tourism-recreation')).toEqual({ action: 'redirect', to: '/solutions/fleet-rental' })
  // /search is now a live search results page (not a legacy redirect)
  expect(gatePath('/search')).toEqual({ action: 'ok' })
  expect(gatePath('/es/search')).toEqual({ action: 'ok' })
})

test('content hubs 301 onto their keepers, sub-pages stay live (P1-2)', () => {
  const hubs: [string, string][] = [
    ['/learn', '/knowledge'], ['/academy', '/knowledge'], ['/guides', '/knowledge'],
    ['/research', '/knowledge'], ['/resources', '/knowledge'], ['/community', '/knowledge'],
    ['/lifestyle', '/knowledge'], ['/journal', '/news'], ['/media', '/products'], ['/evidence', '/projects'],
    ['/case-studies', '/projects'],
  ]
  for (const [from, to] of hubs) {
    expect(gatePath(from)).toEqual({ action: 'redirect', to })
    expect(gatePath(`/es${from}`)).toEqual({ action: 'redirect', to: `/es${to}` })
  }
  // Real content under the merged hubs remains live.
  expect(gatePath('/guides/how-to-spec-a-rib-for-your-market').action).toBe('ok')
  expect(gatePath('/research/ce-certification-guide').action).toBe('ok')
  expect(gatePath('/evidence/case-studies/water-rescue-training').action).toBe('ok')
  expect(gatePath('/knowledge').action).toBe('ok')
  expect(gatePath('/projects').action).toBe('ok')
  expect(gatePath('/news').action).toBe('ok')
  expect(gatePath('/technology').action).toBe('ok')
  expect(gatePath('/es/knowledge').action).toBe('ok')
})

test('retired zh locale: every unmatched /zh/* URL 301s to its /es mirror', () => {
  expect(gatePath('/zh')).toEqual({ action: 'redirect', to: '/es' })
  expect(gatePath('/zh/solutions')).toEqual({ action: 'redirect', to: '/es/solutions' })
  expect(gatePath('/zh/products/rib-alloy-430')).toEqual({ action: 'redirect', to: '/es/products/rib-alloy-430' })
  expect(gatePath('/zh/knowledge/how-rib-boats-are-built')).toEqual({
    action: 'redirect',
    to: '/es/knowledge/how-rib-boats-are-built',
  })
})

test('410 for removed template pages (P0-2)', () => {
  expect(gatePath('/docs')).toEqual({ action: 'gone' })
  expect(gatePath('/docs/features/auth')).toEqual({ action: 'gone' })
  expect(gatePath('/es/docs')).toEqual({ action: 'gone' })
  expect(gatePath('/es/docs/features/auth')).toEqual({ action: 'gone' })
  expect(gatePath('/zh/docs')).toEqual({ action: 'gone' })
  expect(gatePath('/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/es/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/zh/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/changelog')).toEqual({ action: 'gone' })
  expect(gatePath('/es/changelog')).toEqual({ action: 'gone' })
  expect(gatePath('/zh/changelog')).toEqual({ action: 'gone' })
  // '/docs/' is normalised to '/docs' first (301), then 410 on the next hop
  expect(gatePath('/docs/')).toEqual({ action: 'slash', to: '/docs' })
})

test('trailing slash normalised (P0-6)', () => {
  expect(gatePath('/factory/')).toEqual({ action: 'slash', to: '/factory' })
  expect(gatePath('/es/solutions/')).toEqual({ action: 'slash', to: '/es/solutions' })
  // slash-stripped path that IS a redirect source single-hops to its target
  expect(gatePath('/oem-odm/')).toEqual({ action: 'redirect', to: '/oem-manufacturing' })
  expect(gatePath('/use-cases/')).toEqual({ action: 'redirect', to: '/solutions' })
})

test('api/app/admin and plain paths untouched', () => {
  expect(gatePath('/factory').action).toBe('ok')
  expect(gatePath('/oem-manufacturing').action).toBe('ok')
  expect(gatePath('/odm-development').action).toBe('ok')
  expect(gatePath('/product-development').action).toBe('ok')
  expect(gatePath('/api/v1/waitlist').action).toBe('ok')
  expect(gatePath('/app/dashboard').action).toBe('ok')
  expect(gatePath('/admin/users').action).toBe('ok')
})

test('revived/new data-layer pages are served, not 301d', () => {
  expect(gatePath('/about/neptunor').action).toBe('ok')
  expect(gatePath('/about/neptunor-entity').action).toBe('ok')
  expect(gatePath('/oem-boat-moq').action).toBe('ok')
  expect(gatePath('/inflatable-boat-certification').action).toBe('ok')
  expect(gatePath('/proof-center').action).toBe('ok')
  expect(gatePath('/factory/oem-capability').action).toBe('ok')
  expect(gatePath('/factory/capacity').action).toBe('ok')
  expect(gatePath('/randdcenter/hull-engineering').action).toBe('ok')
  expect(gatePath('/research/drop-stitch-technology').action).toBe('ok')
  expect(gatePath('/start-boat-project').action).toBe('ok')
  expect(gatePath('/solutions/private-label-boats').action).toBe('ok')
  expect(gatePath('/solutions/yacht-tender-dealers').action).toBe('ok')
  expect(gatePath('/evidence/case-studies').action).toBe('ok')
})

test('every legacy URL resolves to a live route', () => {
  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    expect(from, `legacy key must differ from its target`).not.toBe(to)
    if (to.startsWith('https://')) continue // cross-domain handoffs are not part of this site's route set
    expect(LIVE_ROUTES.has(to), `${from} → ${to} is not a live route`).toBe(true)
  }
})

test('no legacy key shadows a live page (P0-5)', () => {
  for (const from of Object.keys(LEGACY_REDIRECTS)) {
    expect(LIVE_ROUTES.has(from), `${from} shadows a live page and must be removed from LEGACY_REDIRECTS`).toBe(false)
    for (const prefix of DYNAMIC_PREFIXES) {
      expect(from.startsWith(`${prefix}/`), `${from} shadows dynamic ${prefix}/* routes`).toBe(false)
    }
  }
})

test('redirect targets never redirect again', () => {
  for (const to of [...Object.values(EDGE_REDIRECTS), ...Object.values(LEGACY_REDIRECTS)]) {
    expect(gatePath(to).action).toBe('ok')
  }
})
