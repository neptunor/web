import React from 'react'
import { ResponsiveImg } from '@/components/ui/responsive-img'
import { SITE_NAME } from '../../config'

interface ProductArtworkProps {
  src?: string
  hue?: number
  label: string
  sku?: string
  className?: string
  imgClassName?: string
  sizes?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'auto' | 'high' | 'low'
  decoding?: 'auto' | 'sync' | 'async'
  alt?: string
}

/** Product photo slot — serves responsive variants when a photo exists, otherwise an on-brand
 *  hue-backed placeholder (used until real photography is uploaded for image-less products). */
function ProductArtworkInner({ src, hue, label, sku, className, imgClassName, sizes, width, height, loading, fetchPriority, decoding, alt }: ProductArtworkProps) {
  if (src) {
    return (
      <div className={className}>
        <ResponsiveImg
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          className={imgClassName}
        />
      </div>
    )
  }
  const h = typeof hue === 'number' && Number.isFinite(hue) && hue >= 0 && hue <= 360 ? hue : 210
  return (
    <div
      className={className}
      style={{ backgroundImage: `linear-gradient(160deg, hsl(${h} 45% 16%), hsl(${h} 42% 7%))` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center">
        <span className="font-display text-2xl font-extrabold uppercase tracking-[0.2em] text-white/85">{SITE_NAME}</span>
        {sku ? <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/60">{sku}</span> : null}
        <span className="max-w-full truncate px-2 text-[13px] font-semibold text-white/55">{label}</span>
      </div>
    </div>
  )
}

export const ProductArtwork = React.memo(ProductArtworkInner)