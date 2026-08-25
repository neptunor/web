import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Brand', value: `${BRAND_PARENT_BRAND} — RIB boat & inflatable boat OEM/ODM manufacturer` },
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Brand relationship', value: `${BRAND_PARENT_BRAND} is the B2B boat manufacturing brand of ${BRAND_COMPANY_NAME}. The brand focuses exclusively on RIB boats and inflatable boats — OEM, ODM and private-label manufacturing for boat brands, fleet operators and rescue organizations.` },
    { label: 'Product focus', value: 'RIB & inflatable boat manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '18,000 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 5–10 co-branding · 20–50 pilot · 90–100+ volume per approved configuration' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Oceania' },
    { label: 'Business model', value: 'B2B development & manufacturing only — no end-consumer sales' },
  ],
  es: [
    { label: 'Marca', value: `${BRAND_PARENT_BRAND} — fabricante OEM/ODM de botes RIB e inflables` },
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Relación de marca', value: `${BRAND_PARENT_BRAND} es la marca de fabricación B2B de botes de ${BRAND_COMPANY_NAME}. La marca se enfoca exclusivamente en botes RIB e inflables: fabricación OEM, ODM y de marca privada para marcas de botes, operadores de flotas y organizaciones de rescate.` },
    { label: 'Enfoque de producto', value: 'Fabricación de botes RIB e inflables: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 18.000 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 5–10 co-branding · 20–50 prueba · 90–100+ volumen por configuración aprobada' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, Oceanía' },
    { label: 'Modelo de negocio', value: 'Desarrollo y fabricación B2B — sin venta al consumidor final' },
  ],
}

export const ENTITY_SAME_AS = [
  `https://www.youtube.com/@neptunor`,
  `https://www.facebook.com/neptunor`,
  `https://www.linkedin.com/company/neptunor`,
] as const

export const ENTITY_SERVICES = ['custom-boats', 'private-label', 'fleet-rental', 'rescue-professional', 'yacht-tender-dealers']

export const ENTITY_KNOWS_ABOUT = [
  'RIB boat manufacturing',
  'inflatable boat manufacturing',
  'rigid inflatable boats',
  'boat product development',
  'boat prototyping',
  'private label boats',
  'custom boat design',
  'OEM manufacturing',
  'rescue boat equipment',
  'commercial workboats',
  'yacht tenders',
  'boat MOQ tiers',
  'boat production lead time',
  'boat quality control',
  'factory audit',
]

export const ENTITY_SUBJECT_OF = [
  { type: 'WebPage', name: 'Company entity', path: '/about/neptunor-entity' },
  { type: 'WebPage', name: 'Proof Center — factory evidence', path: '/proof-center' },
  { type: 'WebPage', name: 'Factory & manufacturing capability', path: '/factory' },
  { type: 'WebPage', name: 'Quality, testing & certifications', path: '/quality' },
  { type: 'WebPage', name: 'Custom boat MOQ & lead time', path: '/oem-boat-moq' },
  { type: 'WebPage', name: 'New-brand trial order', path: '/new-brand-trial-order' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'OEM Manufacturing',
  '/odm-development': 'ODM Product Development',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/new-brand-trial-order': 'New-Brand Trial Order',
  '/oem-moq-guide': 'MOQ & Flexible Branding Guide',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance',
  '/inflatable-boat-certification': 'Boat Certification Guide',
  '/oem-boat-moq': 'Custom Boat MOQ & Lead Time',
}
