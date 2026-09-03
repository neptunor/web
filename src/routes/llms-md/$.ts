import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { llmMarkdownForPath } from '@/features/site/llm'
import { isLocale, type Locale } from '@/features/i18n/locale'

/**
 * `/llms-md/*` — generated Markdown mirrors for AI crawlers. The visible HTML
 * route remains canonical; this endpoint is a read-only representation of the
 * same YAML/MDX/product sources and is linked from `/llms.txt`.
 */
const handler = ({ request }: { request: Request }) => {
  const pathname = new URL(request.url).pathname.replace(/^\/llms-md\/?/, '')
  let decoded: string
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    return new Response('Not found', { status: 404 })
  }

  const segments = decoded.split('/').filter(Boolean)
  const locale = segments[0] && isLocale(segments[0]) ? (segments.shift() as Locale) : 'en'
  const path = `/${segments.join('/')}`.replace(/\/$/, '') || '/'
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const markdown = llmMarkdownForPath(path, locale, origin)
  if (!markdown) return new Response('Not found', { status: 404 })

  return new Response(markdown, {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=3600',
      'x-robots-tag': 'noindex, follow',
    },
  })
}

export const Route = createFileRoute('/llms-md/$')({
  server: { handlers: { GET: handler } },
})
