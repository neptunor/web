import { test, expect } from 'vitest'
import {
  llmKnowledgeFull,
  llmProductsFull,
  llmProjectsFull,
  llmSolutionsFull,
  llmsSiteFull,
  llmsSiteSpanishFull,
  llmsSiteIndex,
  llmMarkdownForPath,
  markdownMirrorPath,
} from '@/features/site/llm'
import { LLMS_TXT } from '@/product/llms-content'
import companyFacts from '@/product/geo/company-facts.json'
import { getContentPages } from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'

const urlLines = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^URL: (.+)$/gm)) paths.add(m[1])
  return paths
}

const indexPaths = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^- \[[^\]]+\]\(([^)]+)\):/gm)) paths.add(m[1])
  return paths
}

const canonicalIndexPath = (value: string): string => {
  const pathname = value.startsWith('https://') ? new URL(value).pathname : value
  return pathname.replace(/^\/llms-md(?:\/es)?/, '') || '/'
}

const SHADOWED = new Set([...Object.keys(EDGE_REDIRECTS), ...Object.keys(LEGACY_REDIRECTS)])

test('llms.txt follows the required identity-file structure', () => {
  expect(LLMS_TXT).toMatch(/^# Neptunor\n\n> /)
  expect((LLMS_TXT.match(/^# /gm) ?? []).length).toBe(1)
  for (const section of ['## Contact', '## Services', '## What We Do Not Do', '## Key Information', '## AI Discovery Files']) {
    expect(LLMS_TXT).toContain(section)
  }
  const relativeLinks = [...LLMS_TXT.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1])
  expect(relativeLinks.length).toBeGreaterThan(10)
  for (const url of relativeLinks) expect(url).toMatch(/^https:\/\/neptunor\.com\//)
  expect(LLMS_TXT).toContain('We do not offer SUP boards')
})

test('llms-full.txt contains every live site page (no truncation regression)', () => {
  const full = llmsSiteFull()
  const urls = urlLines(full)
  const expected = getContentPages()
    .filter((p) => !SHADOWED.has(p.path))
    .map((p) => p.path)
  for (const path of expected) {
    expect(urls, `llms-full.txt missing live page ${path}`).toContain(path)
  }
  expect(expected.length).toBeGreaterThan(30)
})

test('llms-full.txt never advertises edge-301 or legacy-shadowed paths', () => {
  const urls = urlLines(llmsSiteFull())
  for (const shadowed of SHADOWED) {
    expect(urls, `llms-full.txt must not contain shadowed path ${shadowed}`).not.toContain(shadowed)
  }
})

test('llms.txt index covers every live page and no shadowed paths', () => {
  const origin = 'https://neptunor.com'
  const index = llmsSiteIndex(origin)
  const listed = indexPaths(index)
  const live = getContentPages().map((p) => `${index.includes(origin) ? origin : ''}${p.path}`)

  const listedPaths = new Set([...listed].map(canonicalIndexPath))
  for (const path of live.map((p) => (p.startsWith('https://') ? new URL(p).pathname : p))) {
    if (SHADOWED.has(path)) {
      expect(listedPaths, `llms.txt index must not list shadowed path ${path}`).not.toContain(path)
    } else {
      expect(listedPaths, `llms.txt index missing live page ${path}`).toContain(path)
    }
  }
})

test('full Markdown blocks expose absolute canonical URLs when an origin is supplied', () => {
  const origin = 'https://neptunor.com'
  const full = [
    llmProductsFull(origin),
    llmSolutionsFull(origin),
    llmProjectsFull(origin),
    llmKnowledgeFull(origin),
    llmsSiteFull(origin),
    llmsSiteSpanishFull(origin),
  ].join('\n')
  const urls = [...full.matchAll(/^URL: (.+)$/gm)].map((m) => m[1])
  expect(urls.length).toBeGreaterThan(100)
  expect(urls.every((url) => url.startsWith(`${origin}/`))).toBe(true)
})

test('GEO specialization is limited to boat product lines', () => {
  expect(companyFacts.specialization).not.toContain('Marine accessories')
  expect(companyFacts.specialization).toEqual(expect.arrayContaining(['RIB boats', 'Inflatable boats']))
})

test('Markdown mirrors preserve canonical HTML URLs and locale metadata', () => {
  const origin = 'https://neptunor.com'
  const english = llmMarkdownForPath('/about/neptunor', 'en', origin)
  const spanish = llmMarkdownForPath('/about/neptunor', 'es', origin)

  expect(markdownMirrorPath('/about/neptunor')).toBe('/llms-md/about/neptunor')
  expect(markdownMirrorPath('/about/neptunor', 'es')).toBe('/llms-md/es/about/neptunor')
  expect(english).toContain('# ')
  expect(english).toContain('URL: https://neptunor.com/about/neptunor')
  expect(english).toContain('Language: en-US')
  expect(spanish).toContain('URL: https://neptunor.com/es/about/neptunor')
  expect(spanish).toContain('Language: es-ES')
  expect(english).not.toContain('<')
})

test('Markdown mirror resolver rejects unknown paths', () => {
  expect(llmMarkdownForPath('/does-not-exist', 'en', 'https://neptunor.com')).toBeNull()
})
