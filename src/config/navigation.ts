/**
 * Navigation configuration — site structure and page hierarchy.
 *
 * Defines the navigation tree, footer links, and page metadata that
 * previously were hardcoded across multiple marketing components.
 * Content-driven routes (products, solutions, news) are resolved by
 * the Content Registry and are not listed here.
 *
 * To deploy a new product: adjust the navigation items below.
 * The actual route handlers are generated from this structure.
 */

export const ENTITY_PAGE_PATH = '/about/neptunor-entity' as const

export const ABOUT_BRAND_PATH = '/about/neptunor' as const

export const LEGACY_REDIRECTS: Record<string, string> = {
  '/about/neptunor-brand': '/about',
  '/brand-global-presence': '/about',
  '/brand-marine-expertise': '/about',
  '/people': '/about',
  '/geo-report': ABOUT_BRAND_PATH,
  '/disclaimer': '/terms',
  '/adventure-boat': '/products',
  '/bundles': '/products',
  '/rescue-boat': '/products',
  '/inflatable-boat': '/products',
  '/kids-boat': '/products',
  '/lightweight-boat': '/products',
  '/performance-boat': '/products',
  '/boat-accessories': '/products',
  '/touring-boat': '/products',
  '/travel-boat': '/products',
  '/ultra-stable-boat': '/products',
  '/fishing-boat': '/products',
  '/tech-specs': '/technology',
  '/odm-boat': '/odm-development',
  '/oem-boat': '/oem-manufacturing',
  '/oem-process': '/oem-manufacturing',
  '/boat-manufacturer': '/oem-manufacturing',
  '/solutions/by-industry': '/solutions',
  '/solutions/by-use-case': '/solutions',
  '/solutions/oem-brands': '/oem-manufacturing',
  '/solutions/diving-center-boats': '/solutions/fleet-rental',
  '/solutions/fishing-boat-solutions': '/solutions/yacht-tender-dealers',
  '/solutions/marine-tourism-equipment': '/solutions/fleet-rental',
  '/solutions/rescue-watercraft': '/solutions/rescue-professional',
  '/solutions/yacht-tender-solutions': '/solutions/yacht-tender-dealers',
  '/solutions-diving-center-boats': '/solutions/fleet-rental',
  '/solutions-fishing-boat-solutions': '/solutions/yacht-tender-dealers',
  '/solutions-marine-tourism-equipment': '/solutions/fleet-rental',
  '/solutions-rescue-watercraft': '/solutions/rescue-professional',
  '/solutions-yacht-tender-solutions': '/solutions/yacht-tender-dealers',
  '/buyer-center': '/solutions',
  '/marine-industry': '/solutions',
  '/v2': '/products',
  '/use-cases': '/solutions',
  '/use-cases/commercial-workboats': '/solutions/rescue-professional',
  '/use-cases/disaster-relief': '/solutions/rescue-professional',
  '/use-cases/fishing': '/solutions/yacht-tender-dealers',
  '/use-cases/maritime-safety-defense': '/solutions/rescue-professional',
  '/use-cases/search-and-rescue': '/solutions/rescue-professional',
  '/use-cases/tourism-recreation': '/solutions/fleet-rental',
  '/design-powerhouse': '/technology',
  '/engineering-perfection': '/randdcenter',
  '/engineering-team': '/randdcenter',
  '/knowledge-graph': '/knowledge',
  '/ai-answer-center': '/faq',
  '/learn/inflatable-boat': '/knowledge',
  '/learn/materials': '/knowledge',
  '/learn/water-safety': '/knowledge',
  '/guides/choosing-engine': '/knowledge',
  '/guides/inflatable-repair': '/knowledge',
  '/guides/boat-launching': '/knowledge',
  '/guides/multi-day-trip': '/knowledge',
  '/guides/boat-maintenance': '/knowledge',
  '/guides/understanding-specs': '/knowledge',
  '/guides/weather-conditions': '/knowledge',
  '/research/hull-design': '/knowledge',
  '/research/tube-fabric-technology': '/knowledge',
  '/research/quality-testing-standards': '/knowledge',
  '/resources/download-catalog': '/products',
}

export const GONE_PATHS: string[] = [
  '/waitlist', '/changelog', '/es/waitlist', '/es/changelog', '/zh/waitlist', '/zh/changelog',
]
