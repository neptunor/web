/**
 * Product-specific route configuration for the content loader.
 *
 * SHADOWED_PATHS: route paths owned by static route handlers; registry
 * entries under these paths are never rendered from the content system.
 *
 * EXTRA_PATHS: dedicated-route pages served outside the registry,
 * mapping URL path → YAML slug.
 *
 * When deploying a new product, replace these with the new site's
 * route structure. The loader mechanism itself is framework-level.
 */

import { ENTITY_PAGE_PATH } from '@/config/navigation'

export const SHADOWED_PATHS: Set<string> = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/terms', '/privacy',
  '/projects', '/projects/marina-tender-fleet', '/projects/coastal-patrol-fleet',
  '/projects/resort-water-sports', '/projects/dive-school-expansion',
  '/knowledge', '/knowledge/how-rib-boats-are-built',
  '/knowledge/inflatable-tube-construction-explained',
  '/knowledge/how-to-choose-rib-oem-manufacturer',
  '/inflatable-boat-certification',
  '/oem-boat-moq',
  ENTITY_PAGE_PATH,
])

export const EXTRA_PATHS: Record<string, string> = {
  '/research/drop-stitch-technology': 'research-drop-stitch',
  '/research/pvc-vs-hypalon': 'research-pvc-vs-hypalon',
  '/research/ce-certification-guide': 'research-ce-certification',
  '/research/oem-buyer-guide': 'research-oem-buyer-guide',
  '/randdcenter/hull-engineering': 'hull-engineering',
  '/randdcenter/hydrodynamic-test-tank': 'hydrodynamic-test-tank',
  '/randdcenter/prototype-workshop': 'prototype-workshop',
  '/randdcenter/pvc-fabric-lab': 'pvc-fabric-lab',
  '/randdcenter/quality-inspection-lab': 'quality-inspection-lab',
  '/randdcenter/rf-welding': 'rf-welding',
  '/oem-odm': 'oem-manufacturing',
  '/oem-manufacturing': 'oem-manufacturing',
  '/odm-development': 'odm-development',
  '/product-development': 'product-development',
  '/b2b-solutions-matrix': 'b2b-solutions-matrix',
  '/oem-odm-private-label-comparison': 'oem-odm-private-label-comparison',
  '/start-boat-project': 'start-boat-project',
  '/oem-onboarding-guide': 'oem-onboarding-guide',
  '/factory-audit-checklist': 'factory-audit-checklist',
  '/resources/rib-buyer-resource-center': 'rib-buyer-resource-center',
  '/resources/rib-compliance-documentation': 'rib-compliance-documentation',
  '/resources/rib-ga-cad-planning': 'rib-ga-cad-planning',
  '/resources/rib-rfq-qualification': 'rib-rfq-qualification',
  '/resources/rib-distributor-application': 'rib-distributor-application',
  '/resources/rib-export-packing': 'rib-export-packing',
  '/resources/rib-traceability-evidence': 'rib-traceability-evidence',
  '/resources/rib-tube-material-testing': 'rib-tube-material-testing',
  '/resources/rib-cad-access-request': 'rib-cad-access-request',
  '/resources/rib-win-hin-iso-10087': 'rib-win-hin-iso-10087',
  '/resources/rib-manufacturer-identification-code': 'rib-manufacturer-identification-code',
  '/resources/rib-after-sales-spares': 'rib-after-sales-spares',
  '/about/identity': 'about-identity',
}
