import { products } from '@/product/content'
import { solutionPages, solutionPath } from '@/product/solution-pages'
import { seriesPages } from '@/product/series-pages'
import { projects } from '@/product/projects'
import { knowledge } from '@/product/knowledge'
import {
  getContentPage,
  getContentPages,
  getContentProducts,
  getContentProduct,
  getNewsPost,
  getNewsPosts,
  getTechArticle,
  getTechArticles,
  getCaseUse,
  getCaseUses,
  getResearchTopics,
  getGeoFacts,
  getSiteFaqs,
  brandify,
} from '@/features/content/loader'
import { GUIDES_ES } from '@/features/content/guide-content'
import { FACTS, COLLABORATION_MODES } from '@/product/facts'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { SITE_NAME } from '@/config/site'
import { PAGE_TITLES } from '@/product/entity-data'
import { LLM_SITE_DESCRIPTION, LLM_FAQ_DESCRIPTION, LLM_SPANISH_HOMEPAGE_DESCRIPTION, LLM_FACT_BLOCK } from '@/product/ai-content'
import { GLOSSARY } from '@/product/glossary'
import { getGuideBySlug } from '@/features/content/guide-content'
import type { Locale } from '@/features/i18n/locale'

const flat = (text: string) => text.replace(/\s+/g, ' ').trim()

const mdBody = (body: string) => body.split('\n').map((l) => l.replace(/<[^>]+>/g, ' ').trim()).filter(Boolean)

/** Recursive bullet renderer for the structured geo facts (arrays → comma lists). */
function fmt(v: unknown, key: string, depth = 0): string[] {
  const pad = '  '.repeat(depth)
  const label = key.replace(/_/g, ' ')
  if (Array.isArray(v)) return [`${pad}- ${label}: ${v.map(String).join(', ')}`]
  if (v && typeof v === 'object') {
    const inner = Object.entries(v).flatMap(([k, val]) => fmt(val, k, depth + 1))
    return [`${pad}- ${label}:`, ...inner]
  }
  return [`${pad}- ${label}: ${String(v)}`]
}

function factsSection(title: string, facts?: Record<string, unknown>): string[] {
  if (!facts || Object.keys(facts).length === 0) return []
  return ['', `## ${title}`, '', ...Object.entries(facts).flatMap(([k, v]) => fmt(v, k))]
}

/**
 * `/llms-full.txt` opening card — concrete company facts instead of a generic
 * template intro, so LLMs answer GEO questions with verifiable numbers.
 */
export function llmSiteHeader(): string {
  const { company, certifications, manufacturing } = getGeoFacts()
  const glossaryEntries = GLOSSARY.filter((g) => g.locale === 'en')
  const glossaryBlock = glossaryEntries.length > 0
    ? ['', '## Industry Glossary', '', ...glossaryEntries.map((g) => `- **${g.term}**: ${g.short}`)]
    : []
  const collaborationLines = Object.entries(COLLABORATION_MODES).flatMap(([key, mode]) => [
    `- **${key.toUpperCase()}**: ${mode.short}`,
    `  Full: ${mode.full}`,
    `  Best for: ${mode.bestFor}`,
  ])
  return [
    `# ${SITE_NAME}`,
    '',
    `> ${LLM_SITE_DESCRIPTION.replaceAll('{SITE}', SITE_NAME)}`,
    LLM_FACT_BLOCK.replaceAll('{SITE}', SITE_NAME),
    '',
    '## MOQ Note',
    FACTS.moqNote,
    '',
    '## MOQ Explanation',
    `- Sample: ${FACTS.moqExplanation.sample}`,
    `- Co-branding: ${FACTS.moqExplanation.coBrand}`,
    `- Pilot: ${FACTS.moqExplanation.pilot}`,
    `- Standard: ${FACTS.moqExplanation.standard}`,
    `- Custom mould: ${FACTS.moqExplanation.customMould}`,
    '',
    '## Material Roll Note',
    FACTS.materialRollNote,
    '',
    '## Collaboration Modes',
    ...collaborationLines,
    ...factsSection('Company Facts', company),
    ...factsSection('Certifications', certifications),
    ...factsSection('Manufacturing', manufacturing),
    ...glossaryBlock,
    '',
  ].join('\n')
}

export function llmProductsIndex(origin: string): string {
  // Real product detail pages exist for the catalog products — link each
  // entry to its page instead of the /products index.
  const lines = getContentProducts().map((p) => `- [${p.title}](${mirrorAbs(origin, `/products/${p.slug}`)}): ${flat(p.summary ?? '')}`)
  return ['', '## Products', ...lines, ''].join('\n')
}

/** Index entries for the product-series pages (in /llms.txt). */
export function llmSeriesIndex(origin: string): string {
  const lines = seriesPages.en.map(
    (s) => `- [${s.metaTitle}](${mirrorAbs(origin, `/products/${s.slug}`)}): ${flat(s.metaDescription)}`,
  )
  return ['', '## Product Series', ...lines, ''].join('\n')
}

export function llmProductsFull(origin = ''): string {
  const blocks = products.en.items.map((p) =>
    [
      `## ${p.name} (${p.sku})`,
      `URL: ${abs(origin, `/products/${p.slug}`)}`,
      '',
      flat(p.desc),
      '',
      `- Specs: ${flat(p.specs)}`,
      `- Artwork & construction: ${flat(p.artwork)}`,
      `- Recommended for: ${p.for.join(', ')}`,
    ].join('\n'),
  )
  return ['', '# Products', '', blocks.join('\n\n'), ''].join('\n')
}

/** Index entries for the Solutions system pages (in /llms.txt). */
export function llmSolutionsIndex(origin: string): string {
  const lines = solutionPages.en.map((p) => `- [${p.metaTitle}](${mirrorAbs(origin, solutionPath(p.slug))}): ${flat(p.metaDescription)}`)
  return ['', '## Solution Pages', ...lines, ''].join('\n')
}

/** Index entries for the project case studies (in /llms.txt). */
export function llmProjectsIndex(origin: string): string {
  const lines = projects.en.map((p) => `- [${p.metaTitle}](${mirrorAbs(origin, `/projects/${p.slug}`)}): ${flat(p.metaDescription)}`)
  return ['', '## Projects', ...lines, ''].join('\n')
}

/** Index entries for the Knowledge Center articles (in /llms.txt). */
export function llmKnowledgeIndex(origin: string): string {
  const lines = knowledge.en.map((a) => `- [${a.metaTitle}](${mirrorAbs(origin, `/knowledge/${a.slug}`)}): ${flat(a.metaDescription)}`)
  return ['', '## Knowledge Center', ...lines, ''].join('\n')
}

/** Full text for the project case studies (in /llms-full.txt). */
export function llmProjectsFull(origin = ''): string {
  const blocks = projects.en.map((p) =>
    [
      `# ${p.h1}`,
      `URL: ${abs(origin, `/projects/${p.slug}`)}`,
      '',
      ...p.intro.map(flat),
      '',
      `Industry: ${p.industry}`,
      '',
      `Requirement: ${flat(p.requirement)}`,
      '',
      `Challenge: ${flat(p.challenge)}`,
      '',
      `Solution: ${flat(p.solution)}`,
      '',
      `Product: ${flat(p.product)}`,
      '',
      '## Process',
      ...p.process.map((s) => `- ${s.title}: ${flat(s.body)}`),
      '',
      `## Result`,
      flat(p.result),
      '',
      `Outcome: ${flat(p.outcome)}`,
      '',
      `Tags: ${p.tags.join(', ')}`,
    ].join('\n'),
  )
  return ['', '# Projects', ...blocks].join('\n\n')
}

/** Full text for the Knowledge Center articles (in /llms-full.txt). */
export function llmKnowledgeFull(origin = ''): string {
  const blocks = knowledge.en.map((a) =>
    [`# ${a.h1}`, `URL: ${abs(origin, `/knowledge/${a.slug}`)}`, '', flat(a.intro), ...a.sections.flatMap((s) => ['', `## ${s.title}`, '', ...s.body.map(flat)])].join('\n'),
  )
  return ['', '# Knowledge Center', ...blocks].join('\n\n')
}

/** Full text for the Solutions system pages incl. their FAQ Q&A (in /llms-full.txt). */
export function llmSolutionsFull(origin = ''): string {
  const blocks = solutionPages.en.map((p) =>
    [
      `# ${p.h1}`,
      `URL: ${abs(origin, solutionPath(p.slug))}`,
      '',
      ...p.intro.map(flat),
      '',
      `Scenario: ${flat(p.scenario.body)}`,
      '',
      '## Problems & Solutions',
      ...p.pairs.flatMap((pair) => [`- Problem: ${flat(pair.problem)}`, `- Solution: ${flat(pair.solution)}`]),
      '',
      '## Process',
      ...p.steps.map((s) => `- ${s.title}: ${flat(s.body)}`),
      '',
      '## Case Study',
      `- ${p.caseStudy.title}: ${flat(p.caseStudy.body)}`,
      '',
      '## FAQ',
      ...p.faqs.flatMap((f) => [`### Q: ${f.q}`, '', f.a, '']),
    ].join('\n'),
  )
  return ['', ...blocks].join('\n\n')
}

/* ──────────────────────── site pages (GEO/AI) ──────────────────────── */

/** `/llms.txt` index sections link to absolute URLs (llmstxt.org) so LLMs can explore directly. */
const abs = (origin: string, path: string) => `${origin}${path}`

/** Generated Markdown mirror path; the visible HTML URL remains canonical. */
export const markdownMirrorPath = (path: string, locale: Locale = 'en'): string =>
  `/llms-md${locale === 'en' ? '' : `/${locale}`}${path === '/' ? '' : path}`

const mirrorAbs = (origin: string, path: string, locale: Locale = 'en') =>
  abs(origin, markdownMirrorPath(path, locale))

function markdownCanonicalPath(path: string, locale: Locale): string {
  return locale === 'en' ? path : `/es${path}`
}

function cleanMarkdownValue(value: string): string {
  return flat(value.replace(/<[^>]+>/g, ' ').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1'))
}

function markdownDocument(origin: string, title: string, path: string, locale: Locale, body: string[]): string {
  return [
    `# ${title}`,
    `URL: ${abs(origin, markdownCanonicalPath(path, locale))}`,
    `Language: ${locale === 'es' ? 'es-ES' : 'en-US'}`,
    '',
    ...body.filter(Boolean),
    '',
  ].join('\n')
}

function structuredMarkdownBody(content: Record<string, unknown>): string[] {
  const lines: string[] = []
  const visit = (value: unknown, key?: string): void => {
    if (typeof value === 'string') {
      const text = cleanMarkdownValue(value)
      if (text) lines.push(key ? `- ${key}: ${text}` : text)
      return
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      lines.push(key ? `- ${key}: ${String(value)}` : String(value))
      return
    }
    if (Array.isArray(value)) {
      value.forEach((item) => visit(item))
      return
    }
    if (!value || typeof value !== 'object') return
    Object.entries(value as Record<string, unknown>).forEach(([childKey, childValue]) => {
      if (childKey !== 'meta' && childKey !== 'evidence_review') visit(childValue, childKey)
    })
  }
  Object.entries(content).forEach(([key, value]) => {
    if (key !== 'meta' && key !== 'evidence_review') visit(value, key)
  })
  return lines
}

/**
 * Resolves a public Neptunor page into Markdown without creating a second
 * content source. The returned document identifies the canonical HTML URL.
 */
export function llmMarkdownForPath(path: string, locale: Locale = 'en', origin = ''): string | null {
  const canonicalPath = path === '' ? '/' : path
  const page = getContentPage(canonicalPath, locale)
  if (page) {
    return markdownDocument(origin, PAGE_TITLES[canonicalPath] ?? brandify(page.label), canonicalPath, locale, [
      cleanMarkdownValue(page.meta?.description ?? ''),
      ...structuredMarkdownBody(page.content),
    ])
  }

  if (canonicalPath.startsWith('/products/')) {
    const product = getContentProduct(canonicalPath.slice('/products/'.length), locale)
    if (product) {
      return markdownDocument(origin, product.title, canonicalPath, locale, [
        cleanMarkdownValue(product.summary ?? product.description ?? ''),
        ...(product.specs ?? []).map((s) => `- ${s.label}: ${cleanMarkdownValue(s.value)}`),
        ...mdBody(product.body),
      ])
    }
    const series = (locale === 'es' ? seriesPages.es : seriesPages.en).find((item) => `/products/${item.slug}` === canonicalPath)
    if (series) {
      return markdownDocument(origin, series.h1, canonicalPath, locale, [
        ...series.intro.map(cleanMarkdownValue),
        '## FAQ',
        ...series.faqs.flatMap((faq) => [`### ${faq.q}`, '', cleanMarkdownValue(faq.a)]),
      ])
    }
  }

  if (canonicalPath.startsWith('/news/')) {
    const post = getNewsPost(canonicalPath.slice('/news/'.length), locale)
    if (post) {
      return markdownDocument(origin, post.title, canonicalPath, locale, [
        `Published: ${post.date.slice(0, 10)}`,
        post.excerpt ? cleanMarkdownValue(post.excerpt) : '',
        ...mdBody(post.body),
      ])
    }
  }

  if (canonicalPath.startsWith('/technology/')) {
    const article = getTechArticle(canonicalPath.slice('/technology/'.length), locale)
    if (article) {
      return markdownDocument(origin, article.title, canonicalPath, locale, [
        cleanMarkdownValue(article.summary ?? article.description ?? ''),
        article.dateModified ? `Last reviewed: ${article.dateModified}` : '',
        ...mdBody(article.body),
      ])
    }
  }

  if (canonicalPath.startsWith('/evidence/case-studies/')) {
    const caseUse = getCaseUse(canonicalPath.slice('/evidence/case-studies/'.length), locale)
    if (caseUse) {
      return markdownDocument(origin, caseUse.title, canonicalPath, locale, [
        cleanMarkdownValue(caseUse.summary ?? caseUse.description ?? ''),
        ...mdBody(caseUse.body),
      ])
    }
  }

  if (canonicalPath.startsWith('/guides/')) {
    const guide = getGuideBySlug(canonicalPath.slice('/guides/'.length), locale)
    if (guide) {
      return markdownDocument(origin, guide.title, canonicalPath, locale, [
        ...guide.intro.map(cleanMarkdownValue),
        ...guide.sections.flatMap((section) => ['', `## ${section.title}`, '', cleanMarkdownValue(section.body)]),
        '',
        '## FAQ',
        ...guide.faqs.flatMap((faq) => [`### ${faq.q}`, '', cleanMarkdownValue(faq.a)]),
      ])
    }
  }

  const solution = (locale === 'es' ? solutionPages.es : solutionPages.en).find((item) => solutionPath(item.slug) === canonicalPath)
  if (solution) {
    return markdownDocument(origin, solution.h1, canonicalPath, locale, [
      ...solution.intro.map(cleanMarkdownValue),
      '',
      `## ${solution.scenario.title}`,
      cleanMarkdownValue(solution.scenario.body),
      '',
      '## Problems and Solutions',
      ...solution.pairs.flatMap((pair) => [`- Problem: ${cleanMarkdownValue(pair.problem)}`, `- Solution: ${cleanMarkdownValue(pair.solution)}`]),
      '',
      '## Process',
      ...solution.steps.map((step) => `- ${step.title}: ${cleanMarkdownValue(step.body)}`),
      '',
      '## FAQ',
      ...solution.faqs.flatMap((faq) => [`### ${faq.q}`, '', cleanMarkdownValue(faq.a)]),
    ])
  }

  const project = (locale === 'es' ? projects.es : projects.en).find((item) => `/projects/${item.slug}` === canonicalPath)
  if (project) {
    return markdownDocument(origin, project.h1, canonicalPath, locale, [
      ...project.intro.map(cleanMarkdownValue),
      '',
      `Customer type: ${project.customerType}`,
      `Region: ${project.region}`,
      `Product category: ${project.productCategory}`,
      `Requirement: ${cleanMarkdownValue(project.requirement)}`,
      `Challenge: ${cleanMarkdownValue(project.challenge)}`,
      `Solution: ${cleanMarkdownValue(project.solution)}`,
      `Result: ${cleanMarkdownValue(project.result)}`,
      `Outcome: ${cleanMarkdownValue(project.outcome)}`,
      '',
      '## Process',
      ...project.process.map((step) => `- ${step.title}: ${cleanMarkdownValue(step.body)}`),
      '',
      '## Inspection focus',
      ...project.inspectionFocus.map((item) => `- ${cleanMarkdownValue(item)}`),
    ])
  }

  const knowledgeArticle = (locale === 'es' ? knowledge.es : knowledge.en).find((item) => `/knowledge/${item.slug}` === canonicalPath)
  if (knowledgeArticle) {
    return markdownDocument(origin, knowledgeArticle.h1, canonicalPath, locale, [
      cleanMarkdownValue(knowledgeArticle.intro),
      ...knowledgeArticle.sections.flatMap((section) => ['', `## ${section.title}`, '', ...section.body.map(cleanMarkdownValue)]),
    ])
  }

  if (canonicalPath === '/faq') {
    return markdownDocument(origin, 'FAQ', canonicalPath, locale, getSiteFaqs(locale).flatMap((faq) => [
      `## ${faq.q}`,
      '',
      cleanMarkdownValue(faq.a),
    ]))
  }

  const collectionTitle = canonicalPath === '/' ? SITE_NAME
    : canonicalPath === '/products' ? 'RIB & Inflatable Boat Products'
      : canonicalPath === '/solutions' ? 'Boat Manufacturing Solutions'
        : canonicalPath === '/projects' ? 'RIB & Inflatable Boat Projects'
          : canonicalPath === '/knowledge' ? 'RIB & Inflatable Boat Knowledge Center'
            : null
  if (collectionTitle) {
    return markdownDocument(origin, collectionTitle, canonicalPath, locale, [LLM_SITE_DESCRIPTION.replaceAll('{SITE}', SITE_NAME)])
  }

  return null
}

/** Index entries for the registry/brand pages (in /llms.txt). */
export function llmsSiteIndex(origin: string): string {
  // Derived from the loader (not a hand-maintained list) so revived pages and
  // future registry additions are covered automatically. Edge/legacy-301'd
  // source paths must not appear as canonical URLs — same rule as the sitemap.
  const pageLines = getContentPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS) && !(p.path in LEGACY_REDIRECTS))
    .map((p) => `- [${PAGE_TITLES[p.path] ?? brandify(p.label)}](${mirrorAbs(origin, p.path)}): ${flat(brandify(p.meta?.description ?? ''))}`)
  const staticLines = [
    `- [FAQ](${mirrorAbs(origin, '/faq')}): ${LLM_FAQ_DESCRIPTION}`,
  ]
  const resolvedResearch = new Set(getContentPages().map((p) => p.path))
  const researchLines = getResearchTopics()
    .filter((t) => resolvedResearch.has(`/research/${t.slug}`))
    .map((t) => `- [Research: ${t.slug.replace(/-/g, ' ')}](${mirrorAbs(origin, `/research/${t.slug}`)}): ${t.category}, ${t.readTime}`)
  const newsLines = getNewsPosts()
    .slice(0, 10)
    .map((p) => `- [${p.title}](${mirrorAbs(origin, `/news/${p.slug}`)}): ${flat(p.excerpt ?? '')}`)
  return [
    '',
    '## Factory, Technology & Resources',
    ...pageLines,
    '',
    '## FAQ',
    ...staticLines,
    '',
    '## Research',
    ...researchLines,
    '',
    '## Latest News',
    ...newsLines,
    '',
  ].join('\n')
}

/** Full text for the factory/technology pages + products + articles. */
export function llmsSiteFull(origin = ''): string {
  /** Recursively serializes YAML sections so nested FAQs, tables and cards are not lost. */
  function pageBodyText(p: { path: string; content?: Record<string, unknown> }): string[] {
    const c = p.content
    if (!c || typeof c !== 'object') return []
    const lines: string[] = []
    const visit = (value: unknown, key?: string): void => {
      if (typeof value === 'string') {
        const text = flat(value.replace(/<[^>]+>/g, ' '))
        if (text) lines.push(key ? `- ${key}: ${text}` : text)
        return
      }
      if (typeof value === 'number' || typeof value === 'boolean') {
        lines.push(key ? `- ${key}: ${String(value)}` : String(value))
        return
      }
      if (Array.isArray(value)) {
        for (const item of value) visit(item)
        return
      }
      if (!value || typeof value !== 'object') return
      for (const [childKey, childValue] of Object.entries(value as Record<string, unknown>)) {
        if (childKey === 'meta' || childKey === 'evidence_review') continue
        visit(childValue, childKey)
      }
    }
    for (const [key, value] of Object.entries(c)) {
      if (key === 'meta' || key === 'evidence_review') continue
      visit(value, key)
    }
    return lines
  }
  // Edge-301'd source paths (/brand/story, /oem-odm, …) and legacy
  // pre-migration paths must not appear as canonical URLs in the LLM
  // corpus — same rule as the sitemap.
  const pageBlocks = getContentPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS) && !(p.path in LEGACY_REDIRECTS))
    .map((p) => {
      const bodyLines = pageBodyText(p)
      return [
        `# ${brandify(p.label)}`,
        '',
        flat(brandify(p.meta?.description ?? '')),
        '',
        `URL: ${abs(origin, p.path)}`,
        ...(bodyLines.length > 0 ? ['', ...bodyLines] : []),
      ].join('\n')
    })
  const productBlocks = getContentProducts().map((p) =>
    [
      `## Product: ${p.title}${p.sku ? ` (${p.sku})` : ''}`,
      `URL: ${abs(origin, `/products/${p.slug}`)}`,
      '',
      flat(p.summary ?? ''),
      ...(p.specs ?? []).map((s) => `- ${s.label}: ${s.value}`),
      '',
      ...mdBody(p.body),
    ].join('\n'),
  )
  const newsBlocks = getNewsPosts().map((p) =>
    [`## News: ${p.title}`, `URL: ${abs(origin, `/news/${p.slug}`)}`, '', p.date.slice(0, 10), flat(p.excerpt ?? ''), '', ...mdBody(p.body)].join('\n'),
  )
  const techBlocks = getTechArticles().map((a) =>
    [`## Technology: ${a.title}`, `URL: ${abs(origin, `/technology/${a.slug}`)}`, '', flat(a.summary ?? ''), '', ...mdBody(a.body)].join('\n'),
  )
  const caseBlocks = getCaseUses().map((c) => [`## Case Study: ${c.title}`, `URL: ${abs(origin, `/evidence/case-studies/${c.slug}`)}`, '', flat(c.summary ?? ''), ...mdBody(c.body)].join('\n'))
  const { company, certifications, manufacturing } = getGeoFacts()
  return [
    '',
    `# ${SITE_NAME} Brand Site`,
    ...pageBlocks,
    ...factsSection('Company Facts', company),
    ...factsSection('Certifications', certifications),
    ...factsSection('Manufacturing', manufacturing),
    '',
    '# Products',
    ...productBlocks,
    '',
    '# News',
    ...newsBlocks,
    '',
    '# Technology',
    ...techBlocks,
    '',
    '# Case Studies',
    ...caseBlocks,
    '',
  ].join('\n\n')
}

/** `/llms.txt` Spanish section — absolute /es URLs so LLMs can ingest the mirror directly. */
export function llmSpanishIndex(origin: string): string {
  const es = (path: string) => mirrorAbs(origin, path, 'es')
  const productLines = getContentProducts('es').map((p) => `- [${p.title} [es-ES]](${es(`/products/${p.slug}`)}): ${flat(p.summary ?? '')}`)
  const techLines = getTechArticles('es').map((a) => `- [${a.title} [es-ES]](${es(`/technology/${a.slug}`)}): ${flat(a.summary ?? '')}`)
  const caseLines = getCaseUses('es').map((c) => `- [${c.title} [es-ES]](${es(`/evidence/case-studies/${c.slug}`)}): ${flat(c.summary ?? '')}`)
  const guideLines = GUIDES_ES.map((g) => `- [${g.title} [es-ES]](${es(`/guides/${g.slug}`)}): ${flat(g.intro[0] ?? '')}`)
  const newsLines = getNewsPosts('es')
    .slice(0, 10)
    .map((p) => `- [${p.title}](${es(`/news/${p.slug}`)}): ${flat(p.excerpt ?? '')}`)
  const faqLines = getSiteFaqs('es')
    .slice(0, 6)
    .map((f) => `- ${f.q}`)
  return [
    '',
    '## Español',
    '',
    `- [${SITE_NAME} — inicio [es-ES]](${es('/')}): ${LLM_SPANISH_HOMEPAGE_DESCRIPTION}`,
    '',
    '### Español: Productos',
    ...productLines,
    '',
    '### Español: Tecnología',
    ...techLines,
    '',
    '### Español: Casos de estudio',
    ...caseLines,
    '',
    '### Español: Guías',
    ...guideLines,
    '',
    '### Español: Noticias',
    ...newsLines,
    '',
    '### Español: Preguntas frecuentes',
    ...faqLines,
    '',
  ].join('\n')
}

/** Full Spanish text for products, news, tech, cases and guides (in /llms-full.txt). */
export function llmsSiteSpanishFull(origin = ''): string {
  const productBlocks = getContentProducts('es').map((p) =>
    [
      `## Producto: ${p.title}${p.sku ? ` (${p.sku})` : ''}`,
      `URL: ${abs(origin, `/es/products/${p.slug}`)}`,

      '',
      flat(p.summary ?? ''),
      ...(p.specs ?? []).map((s) => `- ${s.label}: ${s.value}`),
      '',
      ...mdBody(p.body),
    ].join('\n'),
  )
  const newsBlocks = getNewsPosts('es').map((p) =>
    [`## Noticia: ${p.title}`, `URL: ${abs(origin, `/es/news/${p.slug}`)}`, '', p.date.slice(0, 10), flat(p.excerpt ?? ''), '', ...mdBody(p.body)].join('\n'),
  )
  const techBlocks = getTechArticles('es').map((a) =>
    [`## Tecnología: ${a.title}`, `URL: ${abs(origin, `/es/technology/${a.slug}`)}`, '', flat(a.summary ?? ''), '', ...mdBody(a.body)].join('\n'),
  )
  const caseBlocks = getCaseUses('es').map((c) => [`## Caso de estudio: ${c.title}`, `URL: ${abs(origin, `/es/evidence/case-studies/${c.slug}`)}`, '', flat(c.summary ?? ''), ...mdBody(c.body)].join('\n'))
  const guideBlocks = GUIDES_ES.map((g) =>
    [
      `# Guía: ${g.title}`,
      `URL: ${abs(origin, `/es/guides/${g.slug}`)}`,
      '',
      flat(g.intro.join(' ')),
      ...g.sections.flatMap((s) => ['', `## ${s.title}`, '', s.body]),
      '',
      '## FAQ',
      ...g.faqs.flatMap((f) => [`### Q: ${f.q}`, '', f.a, '']),
    ].join('\n'),
  )
  return [
    '',
    '# Español',
    ...productBlocks,
    '',
    '# Español: Noticias',
    ...newsBlocks,
    '',
    '# Español: Tecnología',
    ...techBlocks,
    '',
    '# Español: Casos de estudio',
    ...caseBlocks,
    '',
    '# Español: Guías',
    ...guideBlocks,
    '',
  ].join('\n\n')
}
