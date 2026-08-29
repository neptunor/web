import * as React from 'react'
import { responsiveVariants } from '@/features/content/responsive-img'

interface ResponsiveImgProps extends Omit<React.ComponentProps<'img'>, 'srcSet' | 'src'> {
  src?: string
}

/**
 * `<img>` that serves pre-generated AVIF/WebP responsive variants for product
 * photos (see src/features/content/responsive-img.ts). Falls back to a plain
 * `<img>` when the URL has no generated variants.
 */
export function ResponsiveImg({ src, sizes, ...imgProps }: ResponsiveImgProps) {
  if (!src) return null
  const set = React.useMemo(() => responsiveVariants(src), [src])
  if (!set) return <img src={src} sizes={sizes} {...imgProps} />
  return (
    <picture>
      <source srcSet={set.avifSrcSet} sizes={sizes} type="image/avif" />
      <source srcSet={set.webpSrcSet} sizes={sizes} type="image/webp" />
      <img src={src} sizes={sizes} {...imgProps} />
    </picture>
  )
}