import rawManifest from '@/config/responsive-manifest.json'

interface ManifestVariant {
  w: number
  avif: string
  webp?: string
}

interface ManifestEntry {
  intrinsic: number
  variants: ManifestVariant[]
}

const manifest = rawManifest as { version: number; widths: number[]; images: Record<string, ManifestEntry> }

/**
 * Maps a product photo URL to its pre-generated responsive srcset variants.
 *
 * scripts/process-images.mjs scales every committed product photo to a fixed
 * width ladder (AVIF + WebP) at CI time and writes src/config/responsive-manifest.json.
 * Free-tier Cloudflare R2 / worker-static origins cannot resize on the fly, so
 * the browser is given explicit srcset candidates within the image's intrinsic
 * width — requested sizes always exist (no 404s, no upscaling).
 *
 * URLs that do not live under /assets/products/ (legacy CDN, videos, etc.)
 * return null and render as a plain <img>.
 */

const PRODUCT_ASSET_MOUNT = '/assets/products/'

export interface ResponsiveSet {
  avifSrcSet: string
  webpSrcSet: string
}

export function responsiveVariants(url: string): ResponsiveSet | null {
  if (!url) return null
  let parsed: URL
  try {
    parsed = new URL(url, 'https://neptunor.com')
  } catch {
    return null
  }
  const path = parsed.pathname
  if (!path.startsWith(PRODUCT_ASSET_MOUNT)) return null

  const rel = path.slice(PRODUCT_ASSET_MOUNT.length)
  const entry = manifest.images[rel]
  if (!entry || entry.variants.length === 0) return null

  const prefix = `${parsed.origin}${PRODUCT_ASSET_MOUNT}`
  const avifSrcSet = entry.variants.map((v) => `${prefix}${v.avif} ${v.w}w`).join(', ')
  const webpSrcSet = entry.variants
    .filter((v) => v.webp)
    .map((v) => `${prefix}${v.webp} ${v.w}w`)
    .join(', ')
  return { avifSrcSet, webpSrcSet }
}