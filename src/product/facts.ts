import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = '2026-08-24' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '18,000 m²',
  workers: '300+',
  annualCapacity: '60,000+ boats',
  moq: {
    existingPlatform: '5–10 pcs (logo-only on existing hull/tube set, same material batch)',
    pilotBatch: '20–50 pcs (custom graphics or minor spec change)',
    standardRun: '90–100+ pcs per approved configuration, subject to fabric-roll and packaging requirements',
    customMould: '50–100+ pcs (new hull or console requires dedicated tooling; tooling adds 20–35 days)',
    multiSku: 'Each SKU (length/color/console combo) on a separate fabric batch has its own MOQ',
  },
  moqNote: 'MOQ is confirmed after specification review, because hull type, tube construction, fabric weight, console tooling, artwork, packaging and accessories affect material usage.',
  moqNoteEs: 'El MOQ se confirma tras la revisión de especificaciones, ya que el tipo de casco, la construcción del tubo, el peso de la tela, la consola, el arte, el embalaje y los accesorios afectan el uso de material.',
  moqExplanation: {
    sample: '1–2 units for approval',
    coBrand: 'from 5–10 units on selected existing platforms',
    pilot: '20–50 units on existing platforms',
    standard: '90–100+ units per approved configuration, subject to fabric-roll and packaging requirements',
    customMould: '50–100+ units; new hull/console requires dedicated tooling (+20–35 days)',
  },
  materialRollNote: 'Fabric yield depends on boat length, tube diameter and nesting layout. The 90–100+ MOQ represents the minimum batch per configuration, not a fixed per-roll count.',
  moqDecisionTree: [
    { scenario: 'Existing platform, logo overlay only', min: '5–10 pcs', unit: 'per design', condition: 'Same hull, same fabric batch, same colorway' },
    { scenario: 'Custom graphics / tubes / packaging on existing platform', min: '20–50 pcs', unit: 'pilot batch', condition: 'Same hull; new artwork requires visual proof approval' },
    { scenario: 'Standard volume production (any platform)', min: '90–100+ pcs', unit: 'per approved configuration', condition: 'Per fabric batch; multiple SKUs = separate batches' },
    { scenario: 'New hull or console mould', min: '50–100+ pcs', unit: 'production run', condition: 'Tooling 20–35 extra days; one-time tooling fee applies' },
  ] as const,
  leadTime: '30–45 days',
  leadTimeDetail: '30–45 days from confirmed PO and deposit; new hull or console tooling adds 20–35 days.',
  sampleTime: '10–15 days',
  cncAccuracy: '0.1 mm',
  rfPower: '25 kW',
  dropStitchPsi: '0.25 bar working pressure',
  evaHardness: '45–55 Shore C',
  assemblyChecklist: '120-point',
  pressureTest: '0.35 bar · 24h hold',
  pressureReject: '>0.02 bar/24h pressure drop (auto-reject)',
  traceabilityRet: '10 years',
  certifications: [
    { name: 'CE (RCD)', scope: 'EU Recreational Craft Directive 2013/53/EU conformity', authority: 'EU notified body', appliesTo: 'Models destined for EU market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'ISO 6185', scope: 'Inflatable boats safety requirements', authority: 'ISO', appliesTo: 'Applicable inflatable models per market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'ISO 9001', scope: 'Quality management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'BSCI', scope: 'Social responsibility audit', authority: 'amfori BSCI', appliesTo: 'Manufacturing facility', verifiedSource: 'audit-report' as VerifiedSource },
    { name: 'REACH', scope: 'EU chemical safety', authority: 'ECHA', appliesTo: 'Materials used in production', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'RoHS', scope: 'Restriction of hazardous substances', authority: 'EU directive', appliesTo: 'Electronic accessories (pumps, electronics)', verifiedSource: 'certificate' as VerifiedSource },
  ] as const,
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request. CE certification under the Recreational Craft Directive applies to models destined for EU markets; design category (C/D) and scope vary by model and configuration — confirmed per project.',
  exportCountries: '40+',
  workshops: '4 specialized workshops',
  productionLines: '4 automated lines',
  monthlyCapacity: '5,000 boats/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'TÜV', 'BV', 'Intertek'],
  samplingStandard: 'ISO 2859-1 Level II',
  peakSeason: 'October–April',
  social: BRAND_SOCIAL,
  contact: BRAND_CONTACT,
  boilerplate: BRAND_BOILERPLATE,
  buildLine: BRAND_BUILD_LINE,
  notRob: BRAND_NOT_ROB,
  tagline:
    'Engineering, tooling, sampling and production for RIB boat and inflatable boat brands, distributors and sourcing teams. You bring the brand — we build the boats.',
  taglineEs:
    'Ingeniería, utillaje, muestras y producción para marcas de botes RIB e inflables, distribuidores y equipos de compra. Tú traes la marca — nosotros fabricamos los botes.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]

export const CERTIFICATION_NAMES = FACTS.certifications.map((c) => c.name) as readonly string[]

export const MOQ_SHORT = {
  trialStandard: FACTS.moq.pilotBatch,
  standardRun: FACTS.moq.standardRun,
  customMould: FACTS.moq.customMould,
  existingPlatform: FACTS.moq.existingPlatform,
} as const

export const COLLABORATION_MODES = {
  oem: {
    short: 'Manufacture to your approved specification',
    full: 'OEM (Original Equipment Manufacturing): We manufacture to your approved specification — your drawings, dimensions, materials, construction and packaging. You own the design, moulds and intellectual property.',
    bestFor: 'Buyers with existing designs, reference boats or detailed specifications',
  },
  odm: {
    short: 'Develop the boat with our engineering team',
    full: 'ODM (Original Design Manufacturing): Our engineering team develops the hull, tube set, console, graphics and packaging from your brief — whether that is a market concept, performance target or adaptation of a proven platform. Factory proposes the design; buyer approves before production.',
    bestFor: 'Buyers with product ideas, market requirements or performance targets but no detailed specification',
  },
  privateLabel: {
    short: 'Brand a proven boat platform with your graphics',
    full: 'Private Label: Your brand, graphics and packaging on an existing validated platform — no tooling development, no structural changes. Fastest route from concept to delivery.',
    bestFor: 'Buyers who need branded boats quickly without product development',
  },
  commercial: {
    short: 'Configure durable fleet packages',
    full: 'Commercial Fleet Program: High-frequency-use boat packages for rental operators, resorts, marinas, dive schools and rescue organizations — with durability specs, spare parts, color management and batch consistency.',
    bestFor: 'Resort, rental, marina, dive-school and rescue operators',
  },
} as const
