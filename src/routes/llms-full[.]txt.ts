import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import {
  llmSiteHeader,
  llmProductsFull,
  llmSolutionsFull,
  llmProjectsFull,
  llmKnowledgeFull,
  llmsSiteFull,
  llmsSiteSpanishFull,
} from '@/features/site/llm'

// `/llms-full.txt` — the whole marketing site as plain Markdown (company facts
// card + every page body), so an LLM can ingest the full site in one request.
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  return new Response(
    llmSiteHeader() +
      llmProductsFull(origin) +
      llmSolutionsFull(origin) +
      llmProjectsFull(origin) +
      llmKnowledgeFull(origin) +
      llmsSiteFull(origin) +
      llmsSiteSpanishFull(origin),
    {
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    },
  )
}

export const Route = createFileRoute('/llms-full.txt')({
  server: { handlers: { GET: handler } },
})
