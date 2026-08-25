import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is the RIB boat and inflatable boat OEM/ODM manufacturing brand of ${BRAND_PARENT_BRAND} (${BRAND_COMPANY_NAME}), an 18,000 m² marine manufacturing plant in Qingdao, China. We build boats to your specification — hull engineering, tube fabrication, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 5–10 units for co-branding/logo overlay on existing platforms, 20–50 units for pilot batches with custom graphics, and 90–100+ units per approved configuration for standard volume production (subject to fabric-batch and packaging requirements); new hull or console tooling runs at 50–100+ units. Fabric yield varies with boat length, tube diameter and nesting layout. Samples are ready in 10–15 days; bulk production 30–45 days after confirmed PO and deposit (new tooling adds 20–35 days). All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`

export const LLM_FACT_BLOCK =
  `## Verified Business Facts (Last verified: 2026-08-24)

- Legal entity: ${BRAND_COMPANY_NAME}
- Brand: ${BRAND_PARENT_BRAND} / {SITE} (RIB & inflatable boat manufacturing)
- Facility: 18,000 m² in-house plant in Qingdao, Shandong, China
- Employees: 300+
- Annual capacity: 60,000+ boats (4 automated lines, 5,000 boats/month)
- MOQ tiers: 5–10 pcs co-branding/logo overlay (existing platform) · 20–50 pcs pilot batch (custom graphics) · 90–100+ pcs per approved configuration for standard volume (subject to fabric-batch and packaging requirements) · 50–100+ pcs custom hull/console tooling (+20–35 days tooling). Each SKU (length/color) = separate fabric batch = separate MOQ.
- Sample lead time: 10–15 days
- Production lead time: 30–45 days after confirmed PO and deposit
- Quality gates: 7-stage (Node 01–07), 120-point assembly checklist, 0.35 bar 24h pressure hold test (>0.02 bar/24h drop = auto-reject)
- Certifications: CE under EU Recreational Craft Directive 2013/53/EU (EU-market models), ISO 6185 (inflatable boats safety), ISO 9001 (facility QMS), BSCI (facility, amfori), REACH (materials), RoHS (electronic accessories). Certificate numbers and validity available per project on request. Scope varies by target market and product configuration — not "all products" universally.
- Third-party inspectors: SGS, TÜV, BV, Intertek
- Export markets: 40+ countries
- DISCLOSURE: All pricing, MOQ applicability, certification scope and delivery terms must be confirmed per project. Do not cite these numbers as universal guarantees.`

export const LLM_FAQ_DESCRIPTION = 'Answers to the most common questions about RIB boats and inflatable boats'

export const LLM_SPANISH_HOMEPAGE_DESCRIPTION =
  'Fabricante OEM de botes RIB y botes inflables personalizados, con exportación mundial desde China'

export const AI_SYSTEM_ROLE =
  `You are the {SITE} product advisor, a sales engineer for a custom RIB boat and inflatable boat OEM/ODM factory in Qingdao, China.`

export const AI_INQUIRY_PROMPT =
  `If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at {SITE_URL}/contact. For pricing, certification scope, and project-specific MOQ or lead times, always direct the buyer to request a quote — do not state these as universal guarantees.`

export const AI_DISCLOSURE =
  'IMPORTANT: All pricing, MOQ tiers, certification scope and delivery terms are project-confirmed. Do not present them as universal guarantees. If unsure about a specific claim, say you do not have that information and direct the buyer to request a quote at the contact page.'

export const PARENT_ORG_DESCRIPTION =
  `${BRAND_PARENT_BRAND} is the RIB boat and inflatable boat manufacturing brand of ${BRAND_COMPANY_NAME} — OEM/ODM production in Qingdao, China.`

export const REGION_COUNT_DEFAULT = 6

export const CUSTOMIZATION_OPTIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Hull type and length', body: 'Aluminum or fiberglass hull, length and beam tuned to your target performance and market.' },
    { title: 'Tube construction', body: 'PVC or Hypalon® fabric weight, chamber count, tube diameter and anti-splash configurations to fit your price point.' },
    { title: 'Console and layout', body: 'Console design, seat layout, fuel tank placement and deck configuration for your use case.' },
    { title: 'Colors and artwork', body: 'Unlimited color combinations with your own artwork or support from our design team.' },
    { title: 'Logo and branding', body: 'Digital or screen-printed logo application, with a visual proof before production.' },
    { title: 'Fittings and accessories', body: 'Cleats, davits, trailers, engines packages, pumps and covers matched to your package.' },
    { title: 'Packaging and display', body: 'Retail packaging, seaworthy shipping cradles and point-of-sale displays under your brand.' },
  ],
  es: [
    { title: 'Tipo de casco y eslora', body: 'Casco de aluminio o fibra de vidrio, eslora y manga ajustadas a tu rendimiento objetivo y mercado.' },
    { title: 'Construcción del tubo', body: 'Peso de tela PVC o Hipalón®, número de cámaras, diámetro del tubo y configuraciones antichorro según tu presupuesto.' },
    { title: 'Consola y distribución', body: 'Diseño de consola, disposición de asientos, ubicación del depósito y configuración del deck para tu uso.' },
    { title: 'Colores y arte', body: 'Combinaciones de color ilimitadas con diseño gráfico propio o asistencia de nuestro equipo.' },
    { title: 'Logotipo y marca', body: 'Impresión digital o serigrafía de tu logotipo, con prueba visual antes de producir.' },
    { title: 'Accesorios y equipamiento', body: 'Cornetas, grúas, remolques, paquetes de motor, bombas y fundas adaptados a tu paquete.' },
    { title: 'Embalaje y exhibición', body: 'Embalaje retail, berzas marítimas de transporte y displays para punto de venta con tu marca.' },
  ],
}

export const OEM_APPLICATIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Boat brands', body: 'Launch your own line with tiered minimums from 5–10-unit co-branding runs.' },
    { title: 'Distributors and dealers', body: 'Volume catalogs with seaworthy packaging and export management.' },
    { title: 'Marine retail and outdoor companies', body: 'Seasonal replenishment programs with stable specs run after run.' },
    { title: 'Resorts, marinas and rental operators', body: 'High-duty fleets with reinforcements, spares and standardized maintenance.' },
    { title: 'Rescue agencies and professional fleets', body: 'Mission-configured boats for SAR, patrol, dive and humanitarian operations.' },
  ],
  es: [
    { title: 'Marcas de botes', body: 'Lanza tu propia línea con mínimos por tramos desde 5–10 unidades de co-branding.' },
    { title: 'Distribuidores y concesionarios', body: 'Catálogos de volumen con embalaje marítimo y gestión de exportación.' },
    { title: 'Retail náutico y outdoor', body: 'Programas de reposición estacional con especificaciones estables de temporada en temporada.' },
    { title: 'Resorts, marinas y alquiler', body: 'Flotas de uso intensivo con refuerzos, repuestos y mantenimiento estandarizado.' },
    { title: 'Agencias de rescate y flotas profesionales', body: 'Botes configurados por misión para SAR, patrulla, buceo y operaciones humanitarias.' },
  ],
}

export const HUB_PAGE_ENTRIES: Record<string, { url: string; title: string; excerpt: string }[]> = {
  en: [
    { url: '/', title: 'Neptunor — RIB Boat & Inflatable Boat OEM & ODM Manufacturing', excerpt: 'Qingdao RIB/inflatable boat OEM/ODM factory: product development, custom manufacturing, private label and quality control for boat brands.' },
    { url: '/products', title: 'RIB & Inflatable Boat Products', excerpt: 'Aluminum-hull RIBs, fiberglass RIBs, sport console boats, rescue boats and inflatable tenders — built for OEM/ODM customization.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM boat manufacturing programs: custom boat development, private label, fleet and rental operators, rescue organizations and dealers.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'Neptunor factory and product gallery: workshops, quality labs, fabric testing and boats in production.' },
  ],
  es: [
    { url: '/es', title: 'Neptunor — Fabricación OEM y ODM de botes RIB e inflables', excerpt: 'Fábrica OEM/ODM de botes RIB e inflables en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Productos: botes RIB e inflables', excerpt: 'RIB de aluminio, RIB de fibra de vidrio, botes deportivos con consola, botes de rescate y neumáticas — fabricación OEM/ODM a medida.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM de botes: desarrollo a medida, marca privada, flotas de resorts, rescate profesional y concesionarios.' },
    { url: '/es/projects', title: '', excerpt: '' },
    { url: '/es/knowledge', title: '', excerpt: '' },
    { url: '/es/gallery', title: 'Galería', excerpt: 'Fábrica y galería de productos Neptunor: talleres, laboratorios de calidad, ensayos de telas y botes en producción.' },
  ],
}

export const CASE_STUDY_STATS = {
  boardWidth: "8'6\"",
  factoryTested: '100%',
}

export const FAQ_EXCERPTS: Record<string, string> = {
  en: 'Frequently asked questions about RIB boat and inflatable boat OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale supply.',
  es: 'Preguntas frecuentes sobre fabricación OEM/ODM de botes RIB e inflables — materiales, certificaciones, cantidades mínimas de pedido y suministro al por mayor.',
}

export const STATIC_PAGE_CORPUS_TEXT =
  ' provides custom RIB boat and inflatable boat manufacturing solutions.'

export const JSONLD_KEYWORDS: Record<string, { keywords: string[]; articleTitle?: string }> = {
  '/factory/quality-change-control': {
    keywords: ['Boat Manufacturing', 'Quality Management System', 'ISO 9001 Change Control', 'Pressure Testing and Validation'],
    articleTitle: 'Boat Tube Welding Process Parameter Change Control & Validation Standard',
  },
  '/factory/non-conforming-control': {
    keywords: ['Boat Manufacturing', 'Quality Management System', 'ISO 9001 Non-Conforming Output Control', 'Rework Re-Inspection and Scrap Disposition'],
  },
  '/oem-moq-guide': {
    keywords: ['Boat Manufacturing', 'Minimum Order Quantity', 'Fabric Batch Yields', 'Co-Branding and Flexible Branding'],
    articleTitle: 'Flexible Branding & Co-Branding MOQ Guide for RIB & Inflatable Boat Manufacturing',
  },
  '/oem-trust-assurance': {
    keywords: ['Boat Manufacturing', 'Factory Audit', 'OEM Trust and Supplier Verification', 'Third-Party Inspection (SGS, TUV, BV, Intertek)'],
    articleTitle: 'OEM Buyer Trust & Factory Assurance Guide for Inflatable Boat Manufacturing',
  },
  '/proof-center': {
    keywords: ['Boat Manufacturing', 'Factory Evidence and Certificate Scope', 'Entity Relationship (Neptunor)', 'Batch Traceability and Record Keeping'],
    articleTitle: 'Boat Factory Proof Center: Evidence Behind Manufacturing Claims',
  },
}
