import { createContext, useContext, type ReactNode } from 'react'
import { setBrandCount } from './brand'

/**
 * Per-page widget index payloads for the content site, resolved
 * server-side.
 *
 * Widgets previously pulled their lists straight from the loader, which forced
 * the whole 900 KB+ content corpus and the YAML parser into the client bundle.
 * The catch-all loader now ships only the lists the current page renders;
 * they are hydrated through this provider and read via useSiteIndex().
 */
export interface SiteIndexNews {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
  category?: string
}

export interface SiteIndexProduct {
  slug: string
  title: string
  image?: string
  sku?: string
  summary?: string
}

export interface SiteIndexTopic {
  slug: string
  category: string
  readTime: string
}

export interface SiteIndexCase {
  slug: string
  title: string
  summary?: string
  category?: string
}

export interface SiteIndexData {
  regionCount: number
  news?: SiteIndexNews[]
  products?: SiteIndexProduct[]
  topics?: SiteIndexTopic[]
  cases?: SiteIndexCase[]
}

const SiteIndexContext = createContext<SiteIndexData>({ regionCount: 6 })

export function SiteIndexProvider({ value, children }: { value: SiteIndexData; children: ReactNode }) {
  setBrandCount(value.regionCount)
  return <SiteIndexContext.Provider value={value}>{children}</SiteIndexContext.Provider>
}

export function useSiteIndex(): SiteIndexData {
  return useContext(SiteIndexContext)
}
