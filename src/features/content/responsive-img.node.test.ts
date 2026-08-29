import { test, expect, describe } from 'vitest'
import { responsiveVariants } from '@/features/content/responsive-img'

describe('responsiveVariants', () => {
  test('builds avif/webp srcsets for a known product asset', () => {
    const set = responsiveVariants('https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01.avif')
    expect(set).not.toBeNull()
    expect(set!.avifSrcSet).toContain('https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01-w320.avif 320w')
    expect(set!.avifSrcSet).toContain('1280w')
    expect(set!.webpSrcSet).toContain('catamaran-speed-470-01-w480.webp 480w')
    const widths = set!.avifSrcSet.match(/\d+w/g)!.map((s) => parseInt(s)).sort((a, b) => a - b)
    expect(widths[0]).toBeLessThan(widths[widths.length - 1])
  })

  test('falls back to null for non-product URLs', () => {
    expect(responsiveVariants('https://assets.neptunor.com/site/videos/foo.mp4')).toBeNull()
  })

  test('falls back to null for unknown paths', () => {
    expect(responsiveVariants('https://neptunor.com/assets/products/2026/inflatable-catamaran/dog.avif')).toBeNull()
  })
})
