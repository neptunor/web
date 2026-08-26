/**
 * Branding configuration — visual identity, social links, and contact info.
 *
 * Every brand-specific string (logo URL, social profile URLs, contact
 * details, company boilerplate) lives here. Code imports from this module
 * instead of hardcoding any of these values.
 *
 * To deploy a new product: replace the values below with the new brand's
 * identity. No other code changes are needed for branding swaps.
 */

import { SITE_NAME, SITE_DOMAIN } from './site'
import { PRODUCT_BOILERPLATE, PRODUCT_BUILD_LINE, PRODUCT_NOT_ROB } from '@/product/brand-constants'

export const BRAND_LOGO_URL = '/Neptunor_Logo.png' as const

export const BRAND_FAVICON_ICO = '/favicon.ico' as const
export const BRAND_FAVICON_SVG = '/favicon.svg' as const

export const BRAND_OG_IMAGE = '/og-image.jpg' as const
export const BRAND_HERO_IMAGE = '/og-image.jpg' as const
export const BRAND_HERO_IMAGE_768 = '/og-image.jpg' as const
export const BRAND_HERO_IMAGE_480 = '/og-image.jpg' as const
export const BRAND_HERO_IMAGE_WEBP = '/og-image.jpg' as const

export const BRAND_ASSETS_CDN = `https://assets.${SITE_DOMAIN}` as const

export const BRAND_SOCIAL = {
  facebook: `https://www.facebook.com/${SITE_NAME.toLowerCase()}`,
  linkedin: `https://www.linkedin.com/company/${SITE_NAME.toLowerCase()}`,
  youtube: `https://www.youtube.com/@${SITE_NAME.toLowerCase()}`,
} as const

export const BRAND_CONTACT = {
  email: `info@${SITE_DOMAIN}`,
  // TODO(launch): replace placeholder phone/WhatsApp with the real business number.
  whatsapp: '+86 192 9532 9680',
  whatsappLink: 'https://wa.me/8619295329680',
  address: 'Qingdao, Shandong, China',
} as const

export const BRAND_BOILERPLATE = PRODUCT_BOILERPLATE as typeof PRODUCT_BOILERPLATE

export const BRAND_BUILD_LINE = PRODUCT_BUILD_LINE as typeof PRODUCT_BUILD_LINE

export const BRAND_NOT_ROB = PRODUCT_NOT_ROB as typeof PRODUCT_NOT_ROB

export const BRAND_COMPANY_NAME = 'Neptunor Marine Co., Ltd.' as const
export const BRAND_PARENT_BRAND = 'Neptunor' as const
export const BRAND_PARENT_DOMAIN: string = SITE_DOMAIN
export const BRAND_PARENT_URL = `https://${BRAND_PARENT_DOMAIN}` as const
