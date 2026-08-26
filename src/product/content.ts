import type { Locale } from '@/features/i18n/locale'
import { FACTS, MOQ_SHORT, COLLABORATION_MODES } from './facts'

/**
 * Marketing content for the Neptunor site, localized en/es.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is bilingual so both locale routes
 * render the same structure.
 */

export interface Localized<T> extends Record<string, T> {
  en: T
  es: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  if (locale in d) return d[locale as keyof Localized<T>]
  return d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  ctaTertiary: string
  ctaQuartiary: string
  ctaMicro: string
  stats: { value: string; label: string }[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'Qingdao, China Factory · OEM / ODM / Private Label · Samples to Batch Production',
    titlePre: 'Custom RIB & Inflatable Boat Manufacturing for',
    titleAccent: 'Boat Brands, Distributors & Fleets',
    titlePost: '',
    sub: 'OEM, ODM and private-label RIB and inflatable boats — from specification review and sample development to quality-controlled batch production in Qingdao, China.',
    ctaPrimary: 'Start Your Boat Project',
    ctaSecondary: 'View Factory, MOQ & Quality Evidence',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Reply within 1 business day · NDA signed within 4 business hours · MOQ confirmed after specification review',
    stats: [
      { value: '18,000 m²', label: 'In-house factory — Qingdao, China' },
      { value: '60,000+', label: 'Boats produced annually' },
      { value: '40+', label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature RIB',
    mockupBrand: 'Neptunor Alloy 430',
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote: FACTS.moqNote,
    float1: { value: '1–2 units', label: 'Sample & approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fábrica en Qingdao, China · OEM / ODM / Marca privada · Muestras a producción en serie',
    titlePre: 'Fabricación de botes RIB e inflables a medida para',
    titleAccent: 'marcas náuticas, distribuidores y flotas',
    titlePost: '',
    sub: 'Botes RIB e inflables OEM, ODM y marca privada — desde la revisión de especificaciones y el desarrollo de muestras hasta la producción en serie con control de calidad en Qingdao, China.',
    ctaPrimary: 'Inicia tu proyecto náutico',
    ctaSecondary: 'Ver fábrica, MOQ y evidencia de calidad',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Respuesta en 1 día hábil · NDA firmado en 4 horas laborables · MOQ confirmado tras revisar la especificación',
    stats: [
      { value: '18.000 m²', label: 'Fábrica propia — Qingdao, China' },
      { value: '60.000+', label: 'Botes producidos anualmente' },
      { value: '40+', label: 'Países de exportación' },
      { value: '4 horas laborables', label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'RIB insignia',
    mockupBrand: 'Neptunor Alloy 430',
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    heroNote: FACTS.moqNoteEs,
    float1: { value: '1–2 uds.', label: 'Muestra y aprobación (antes de compromiso de volumen)' },
    float2: { value: '30–45 días', label: 'Plazo de producción (tras PO)' },
  },
}

/* ─────────────────────────── home: why us (Neptunor advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'The Manufacturing Brand',
    title: 'Built by Neptunor',
    sub: 'Neptunor Marine Co., Ltd. is an independent OEM/ODM manufacturer of RIB and inflatable boats, based in Qingdao, Shandong, China. Our 18,000 m² plant runs four specialized workshops and four automated lines with 300+ workers, building 60,000+ boats a year for brands, dealers and fleet operators in 40+ countries.',
    image: 'https://neptunor.com/assets/images/boats/factory/neptunor-production-hall.webp',
    imageCaption: 'Neptunor manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: '18,000 m² plant',
        body: 'In-house from aluminum sheet and PVC roll to finished boat, in Qingdao, Shandong.',
      },
      {
        title: '60,000+ boats a year',
        body: 'Four automated production lines running daily across RIBs and inflatables.',
      },
      {
        title: '300+ workers',
        body: 'Across hull fabrication, tube welding, console outfitting and quality control.',
      },
      {
        title: '40+ export markets',
        body: 'Serving boat brands, dealers and fleets across the EU, US, AU and Asia.',
      },
    ],
  },
  es: {
    kicker: 'La marca de fabricación',
    title: 'Fabricado por Neptunor',
    sub: 'Neptunor Marine Co., Ltd. es un fabricante independiente OEM/ODM de botes RIB e inflables con sede en Qingdao, provincia de Shandong, China. Nuestra planta de 18.000 m² opera cuatro talleres especializados y cuatro líneas automatizadas con más de 300 trabajadores, produciendo más de 60.000 botes al año para marcas, distribuidores y operadores de flota en más de 40 países.',
    image: 'https://neptunor.com/assets/images/boats/factory/neptunor-production-hall.webp',
    imageCaption: 'Instalaciones de fabricación de Neptunor, Qingdao, China',
    bullets: [
      {
        title: 'Planta de 18.000 m²',
        body: 'De la chapa de aluminio y el rollo de PVC al bote terminado, en Qingdao, Shandong.',
      },
      {
        title: '+60.000 botes al año',
        body: 'Cuatro líneas de producción automatizadas entre RIB e inflables.',
      },
      {
        title: '+300 operarios',
        body: 'Entre fabricación de cascos, soldadura de tubos, montaje de consolas y control de calidad.',
      },
      {
        title: '+40 mercados de exportación',
        body: 'Marcas náuticas, distribuidores y flotas en la UE, EE. UU., Australia y Asia.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Hull & Tube Engineering', 'QC on every run', 'Worldwide export'],
  es: ['OEM y ODM', 'Marca privada', 'Servicio de muestras', 'Ingeniería de cascos y tubos', 'QC en cada lote', 'Exportación mundial'],
}

/* ─────────────────────────── home: trust bar ─────────────────────────── */

export interface TrustStat {
  value: string
  label: string
}

export interface TrustBarContent {
  stats: TrustStat[]
}

export const trustBar: Localized<TrustBarContent> = {
  en: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'for volume production; pilot runs from 20–50 boats' },
      { value: FACTS.sampleTime, label: 'sample boats to your desk after specification approval' },
      { value: FACTS.leadTime, label: 'batch production after confirmed PO and deposit' },
      { value: FACTS.annualCapacity, label: 'annual in-house capacity at the Qingdao plant' },
      { value: FACTS.warehouseM2, label: 'owned plant, from aluminum sheet and PVC roll to finished boat' },
      { value: FACTS.workers, label: 'factory workers and engineers on site' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certified; REACH/RoHS compliant materials' },
      { value: FACTS.exportCountries, label: 'export markets across the EU, US, AU and Asia' },
      { value: '0.35 bar / 24 h', label: '100% pressure-hold test on every tube chamber before packing' },
      { value: 'Node 01–07', label: 'seven documented quality gates from fabric intake to container loading' },
    ],
  },
  es: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'para volumen; pilotos desde 20–50 botes' },
      { value: FACTS.sampleTime, label: 'muestras en tu escritorio tras aprobar la especificación' },
      { value: FACTS.leadTime, label: 'producción en serie tras PO y depósito confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidad anual interna en la planta de Qingdao' },
      { value: FACTS.warehouseM2, label: 'planta propia, de la chapa de aluminio y el PVC al bote terminado' },
      { value: FACTS.workers, label: 'operarios e ingenieros de planta' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certificada; materiales conformes a REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'mercados de exportación en la UE, EE. UU., Australia y Asia' },
      { value: '0,35 bar / 24 h', label: 'prueba de presión al 100% en cada cámara antes del embalaje' },
      { value: 'Node 01–07', label: 'siete puertas de calidad documentadas, del tejido entrante a la carga del contenedor' },
    ],
  },
}

/* ─────────────────────────── home: Manufacturing Scope (OEM/ODM/Private Label/Volume) ─────────────────────────── */

export interface ScopeCard {
  title: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: ScopeCard[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'Manufacturing Scope',
    title: 'Four Ways Brands and Buyers Work With Our Yard',
    sub: 'OEM, ODM, private label or volume supply — the same in-house hull engineering and quality system behind every program.',
    cta: 'Request a Manufacturing Quote',
    items: [
      {
        title: 'OEM — Build to Your Specification',
        body: COLLABORATION_MODES.oem.full,
      },
      {
        title: 'ODM — Develop the Boat with Our Engineering Team',
        body: COLLABORATION_MODES.odm.full,
      },
      {
        title: 'Private Label — Your Brand on a Proven Hull',
        body: COLLABORATION_MODES.privateLabel.full,
      },
      {
        title: 'Volume Supply — Repeat and Fleet Orders',
        body: 'Large-run production for dealers, rental operators, marinas and rescue organizations, with locked specifications, batch traceability and consistent construction across reorders.',
      },
    ],
  },
  es: {
    kicker: 'Alcance de fabricación',
    title: 'Cuatro formas de trabajar con nuestro astillero',
    sub: 'OEM, ODM, marca privada o suministro por volumen — los mismos estándares de ingeniería de cascos y calidad en cada programa.',
    cta: 'Solicita un presupuesto de fabricación',
    items: [
      {
        title: 'OEM — Fabrica según tu especificación',
        body: 'Fabricamos según tu especificación aprobada: planos, dimensiones, materiales, construcción y embalaje. Tú eres propietario del diseño, las matrices y la propiedad intelectual.',
      },
      {
        title: 'ODM — Desarrolla el bote con nuestro equipo de ingeniería',
        body: 'Nuestro equipo de ingeniería desarrolla el casco, el juego de tubos, la consola, los gráficos y el embalaje a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de una plataforma probada. La fábrica propone el diseño; el comprador lo aprueba antes de la producción.',
      },
      {
        title: 'Marca privada — Tu marca sobre un casco probado',
        body: 'Tu marca, gráficos y embalaje sobre una plataforma validada existente — sin desarrollo de matrices ni cambios estructurales. La vía más rápida del concepto a la entrega.',
      },
      {
        title: 'Suministro por volumen — pedidos repetidos y de flota',
        body: 'Producción en volumen para distribuidores, operadores de alquiler, marinas y organismos de rescate, con especificaciones fijadas, trazabilidad por lote y construcción homogénea entre reposiciones.',
      },
    ],
  },
}
/* ─────────────────────────── home: Inside the Plant (manufacturing capability) ─────────────────────────── */

export interface CapabilityBlock {
  name: string
  body: string
}

export interface CapabilityContent {
  kicker: string
  title: string
  sub: string
  items: CapabilityBlock[]
}

export const capability: Localized<CapabilityContent> = {
  en: {
    kicker: 'Manufacturing Capability',
    title: 'Inside the Plant',
    sub: 'Every process below runs in-house. Nothing critical is subcontracted.',
    items: [
      {
        name: 'Aluminum Hull Fabrication',
        body: 'Marine-grade aluminum alloy is cut to 0.1 mm accuracy on CNC tables, press-formed over dedicated jigs and welded by certified fabricators — hull shells for our Alloy RIB range, built start to finish in-house.',
      },
      {
        name: 'Fiberglass Hull Lamination',
        body: 'GRP hulls are laminated in temperature-controlled bays with controlled gelcoat thickness and documented layup schedules, from 3.8 m tenders to 6.4 m deep-V hulls.',
      },
      {
        name: 'RF & Thermal Tube Welding',
        body: '25 kW RF dielectric presses fuse PVC tube seams airtight, while thermal welding joins CR/Hypalon® assemblies. Multi-chamber tube sets with overpressure relief valves are specified per model.',
      },
      {
        name: 'Consoles, Seating & Outfitting',
        body: 'Fiberglass and aluminum consoles are molded and built in-house — steering, seats, fuel systems, cleats, tow points and electronics prep fitted to your specification.',
      },
      {
        name: 'Assembly and Rigging',
        body: 'Each boat follows a 120-point assembly checklist signed off by the line lead — transom, console, valves, rub strake, drain plugs and hardware fitment.',
      },
      {
        name: 'Quality Lab & Export Packing',
        body: 'Pressure-hold testing at 0.35 bar for 24 hours, dimensional checks against the golden sample, then crated or shrink-wrapped export packing with printed retail cartons available.',
      },
    ],
  },
  es: {
    kicker: 'Capacidad de fabricación',
    title: 'Dentro de la planta',
    sub: 'Todos los procesos siguientes se realizan en casa. Nada crítico se subcontrata.',
    items: [
      {
        name: 'Fabricación de cascos de aluminio',
        body: 'Aleación de aluminio de grado marino cortada con precisión de 0,1 mm en mesas CNC, conformada en prensa sobre utillajes dedicados y soldada por soldadores cualificados — cascos para nuestra gama de RIB de aluminio, de principio a fin en casa.',
      },
      {
        name: 'Laminación de cascos de fibra de vidrio',
        body: 'Los cascos de PRFV se laminan en naves con temperatura controlada, con espesor de gelcoat controlado y esquemas de laminado documentados, desde neumáticas de 3,8 m hasta cascos profundos en V de 6,4 m.',
      },
      {
        name: 'Soldadura RF y térmica de tubos',
        body: 'Prensas dieléctricas de 25 kW fusionan de forma hermética las costuras de los tubos de PVC, mientras que la soldadura térmica une conjuntos de caucho CR/Hypalon®. Cada modelo lleva tubos multicámara con válvulas de alivio.',
      },
      {
        name: 'Consolas, asientos y equipamiento',
        body: 'Consolas de fibra de vidrio y aluminio moldeadas y construidas en casa: dirección, asientos, sistemas de combustible, cornetas, puntos de remolque y preparación electrónica según tu especificación.',
      },
      {
        name: 'Montaje y aprestado',
        body: 'Cada bote sigue un checklist de ensamblado de 120 puntos firmado por el responsable de línea: espejo de popa, consola, válvulas, roda de frotamiento, tapones de desagüe y herrajes.',
      },
      {
        name: 'Laboratorio de calidad y embalaje de exportación',
        body: 'Ensayo de retención de presión a 0,35 bar durante 24 horas, verificación dimensional contra la muestra dorada y embalaje enjaulado o filmado para exportación, con cartones minoristas impresos disponibles.',
      },
    ],
  },
}

/* ─────────────────────────── home: quality control (Node 01–07) ─────────────────────────── */

export interface QualityStep {
  title: string
  body: string
}

export interface QualityContent {
  kicker: string
  title: string
  sub: string
  steps: QualityStep[]
}

export const quality: Localized<QualityContent> = {
  en: {
    kicker: 'Quality Control',
    title: 'Seven Gates. Node 01 to Node 07.',
    sub: 'Quality is a documented process, not a promise. Here is what happens to your order before it ships.',
    steps: [
      {
        title: 'Node 01 · Incoming Material QC',
        body: 'PVC and CR fabric rolls, hull alloy, resins, valves, adhesives and hardware are quarantined until QC sign-off. Fabrics undergo tensile, tear-propagation and UV-resistance testing before any batch enters the line.',
      },
      {
        title: 'Node 02 · Hull Weld & Lamination Inspection',
        body: 'Welded seams on aluminum hulls and laminate thickness and gelcoat quality on fiberglass hulls are inspected before the hull is mated to the tube set.',
      },
      {
        title: 'Node 03 · Tube Leak & Pressure Hold Test',
        body: 'Every chamber is inflated to 0.35 bar and held for 24 hours with continuous sensor logging. Any chamber exceeding 0.02 bar of pressure drop over 24 hours is automatically rejected and returned for seam re-inspection.',
      },
      {
        title: 'Node 04 · Fitting & Torque Checks',
        body: 'Transom bolts, console fasteners, valve cores and davit/tow points are torque-checked against the specification before assembly closes.',
      },
      {
        title: 'Node 05 · 120-Point Assembly Checklist',
        body: 'A 120-point checklist per boat — hardware, valves, console, rigging and accessories — signed off by the line lead and archived with the build record.',
      },
      {
        title: 'Node 06 · Final Survey & Batch Release',
        body: 'Dimensional and weight verification against the approved golden sample, released under ISO 2859-1 Level II sampling. Third-party inspectors (SGS, TÜV, BV, Intertek) are welcome at this gate. Every material lot carries a unique ERP number with 10-year batch traceability.',
      },
      {
        title: 'Node 07 · Container Loading Check',
        body: 'Loading supervision with photo and video records, packing-list verification and container seal before handover to the forwarder.',
      },
    ],
  },
  es: {
    kicker: 'Control de calidad',
    title: 'Siete puertas. Del Node 01 al Node 07.',
    sub: 'La calidad es un proceso documentado, no una promesa. Esto es lo que le ocurre a tu pedido antes de enviarlo.',
    steps: [
      {
        title: 'Node 01 · Control de calidad de entrada',
        body: 'Los rollos de tejido PVC y CR, la aleación del casco, las resinas, válvulas, adhesivos y herrajes quedan en cuarentena hasta la validación. Los tejidos pasan ensayos de tracción, propagación del desgarro y resistencia UV antes de entrar en la línea.',
      },
      {
        title: 'Node 02 · Inspección de soldadura y laminado del casco',
        body: 'Las costuras soldadas de los cascos de aluminio y el espesor del laminado y la calidad del gelcoat en los de fibra se inspeccionan antes de acoplar el casco al juego de tubos.',
      },
      {
        title: 'Node 03 · Ensayo de fugas y retención de presión',
        body: 'Cada cámara se infla a 0,35 bar y se mantiene durante 24 horas con registro de sensores continuo. Cualquier cámara que supere una caída de 0,02 bar en 24 horas se rechaza automáticamente y vuelve a revisar las costuras.',
      },
      {
        title: 'Node 04 · Verificación de herrajes y pares',
        body: 'Pernos del espejo de popa, tornillería de consola, núcleos de válvula y puntos de izado y remolque se verifican con llave dinamométrica contra la especificación antes de cerrar el montaje.',
      },
      {
        title: 'Node 05 · Checklist de ensamblado de 120 puntos',
        body: 'Un checklist de 120 puntos por bote — herrajes, válvulas, consola, aprestado y accesorios — firmado por el responsable de línea y archivado con el expediente de fabricación.',
      },
      {
        title: 'Node 06 · Inspección final y liberación del lote',
        body: 'Verificación dimensional y de peso contra la muestra dorada aprobada, liberada bajo muestreo ISO 2859-1 Nivel II. Los inspectores de terceros (SGS, TÜV, BV, Intertek) son bienvenidos en esta puerta. Cada lote de material lleva un número ERP único con trazabilidad de 10 años.',
      },
      {
        title: 'Node 07 · Control de carga del contenedor',
        body: 'Supervisión de la carga con registro fotográfico y de vídeo, verificación de la lista de embalaje y precinto del contenedor antes de la entrega al transitario.',
      },
    ],
  },
}
/* ─────────────────────────── home: commercial terms ─────────────────────────── */

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface MoqTier {
  stage: string
  quantity: string
  purpose: string
  note: string
}

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  moqTiers: MoqTier[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'Standard MOQ, sampling, production and delivery terms are listed below. Projects involving new tooling, specialized materials, compliance testing or custom packaging are quoted separately.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          FACTS.moqExplanation.coBrand,
          FACTS.moqExplanation.pilot,
          FACTS.moqExplanation.standard,
        ],
      },
      {
        label: 'Lead time',
        lines: [
          'Samples ship in 10–15 days',
          'Production 30–45 days from confirmed PO and deposit',
          'New hull or console tooling adds 20–35 days',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Prototype samples ship in 10–15 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Export documentation handled in-house',
          'Export-grade crating; printed retail cartons available',
        ],
      },
    ],
    certs:
      'ISO 9001 quality management · CE under the EU Recreational Craft Directive 2013/53/EU for models destined for EU markets, design category (C/D) confirmed per project · ISO 6185 inflatable-boat safety · BSCI social compliance (audit report available on request) · REACH and RoHS documentation with every order.',
    moqTiers: [
      {
        stage: 'Sample & approval',
        quantity: FACTS.moqExplanation.sample,
        purpose: 'Confirm hull, tubes, colors, graphics and packaging before any production run',
        note: '10–15 days; a physical boat, not a rendering',
      },
      {
        stage: 'Co-branding small bulk',
        quantity: FACTS.moqExplanation.coBrand,
        purpose: 'Test new graphics on a proven hull platform with logo overlay',
        note: 'Fastest way to validate a new livery',
      },
      {
        stage: 'Pilot batch / initial stock',
        quantity: FACTS.moqExplanation.pilot,
        purpose: 'Validate the market or stock your dealership with real inventory',
        note: 'Lowest volume on existing platforms',
      },
      {
        stage: 'Standard volume production',
        quantity: FACTS.moqExplanation.standard,
        purpose: 'Regular production runs at the best unit price',
        note: FACTS.moqExplanation.customMould,
      },
    ],
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Los términos estándar de MOQ, muestreo, producción y entrega se indican a continuación. Los proyectos con utillaje nuevo, materiales especiales, ensayos de cumplimiento o packaging a medida se presupuestan por separado.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          'Co-branding: desde 5–10 unidades sobre plataformas existentes seleccionadas',
          'Lote piloto: 20–50 unidades sobre plataformas existentes',
          'Volumen estándar: 90–100+ unidades por configuración aprobada',
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          'Las muestras salen en 10–15 días',
          'Producción en 30–45 días desde el PO confirmado y el depósito',
          'Utillaje nuevo de casco o consola: +20–35 días',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de prototipo salen en 10–15 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Exportación y documentación',
        lines: [
          'Documentación de exportación gestionada en casa',
          'Embalaje enjaulado para exportación; cartones minoristas impresos disponibles',
        ],
      },
    ],
    certs:
      'ISO 9001 de gestión de calidad · CE según la Directiva Europea de Embarcaciones Deportivas 2013/53/EU para modelos destinados al mercado de la UE, con categoría de diseño (C/D) confirmada por proyecto · ISO 6185 de seguridad en botes inflables · BSCI de cumplimiento social (informe de auditoría disponible) · Documentación REACH y RoHS con cada pedido.',
    moqTiers: [
      {
        stage: 'Muestra y aprobación',
        quantity: '1–2 unidades para aprobación',
        purpose: 'Confirmar casco, tubos, colores, gráficos y packaging antes de cualquier producción',
        note: '10–15 días; un bote físico, no un render',
      },
      {
        stage: 'Co-branding en pequeño lote',
        quantity: 'Desde 5–10 unidades en plataformas existentes seleccionadas',
        purpose: 'Probar nuevos gráficos sobre un casco probado con impresión de logo',
        note: 'La vía más rápida para validar una nueva libré',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: '20–50 unidades sobre plataformas existentes',
        purpose: 'Validar el mercado o abastecer tu concesionario con inventario real',
        note: 'El volumen más bajo sobre plataformas existentes',
      },
      {
        stage: 'Producción de volumen estándar',
        quantity: '90–100+ unidades por configuración aprobada',
        purpose: 'Producción regular al mejor precio unitario',
        note: '50–100+ unidades; un casco o consola nueva exige utillaje dedicado (+20–35 días)',
      },
    ],
  },
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Built for Businesses Creating Their Own Boats',
    sub: 'Whether you are launching a new boat brand or expanding an existing marine product line, our manufacturing solutions can be adapted to your business.',
    segments: [
      {
        slug: 'boat-brands',
        title: 'Boat Brands & Startups',
        body: 'Develop custom RIBs and inflatable boats that match your brand positioning, target market and product strategy.',
        points: ['Custom designs', 'Brand liveries', 'ODM development', 'Private label'],
        cta: 'Explore Custom ODM',
        href: '/odm-development',
      },
      {
        slug: 'distributors-dealers',
        title: 'Distributors & Dealers',
        body: 'Stock differentiated boat lines instead of competing on the same standard catalog models.',
        points: ['Private label', 'Exclusive territories', 'Retail-ready programs'],
        cta: 'View OEM Program',
        href: '/oem-manufacturing',
      },
      {
        slug: 'marinas-rental-fleets',
        title: 'Marinas, Resorts & Rental Fleets',
        body: 'High-cycle boats engineered for daily commercial use, with spare parts kits and batch consistency across reorders.',
        points: ['Fleet specifications', 'Spare parts kits', 'Batch consistency'],
        cta: 'Plan a Fleet Order',
        href: '/oem-boat-moq',
      },
      {
        slug: 'rescue-professional',
        title: 'Rescue & Professional Agencies',
        body: 'Mission-configured boats for rescue, patrol and dive teams, with reinforcement zones and full CE documentation.',
        points: ['Mission configurations', 'CE documentation', 'Volume contracts'],
        cta: 'Configure a Rescue Fleet',
        href: '/inflatable-boat-certification',
      },
      {
        slug: 'yacht-tender-programs',
        title: 'Yacht Builders & Tender Programs',
        body: 'Custom tenders built to garage-fit dimensions and premium finish levels, badged to your yard’s brand book.',
        points: ['Custom tenders', 'Garage-fit dimensions', 'Yard branding'],
        cta: 'Start a Tender Project',
        href: '/research/oem-buyer-guide',
      },
    ],
  },
  es: {
    kicker: 'A quién servimos',
    title: 'Hecho para empresas que crean sus propios botes',
    sub: 'Ya sea que estés lanzando una nueva marca de embarcaciones o ampliando una línea náutica existente, nuestras soluciones de fabricación se adaptan a tu negocio.',
    segments: [
      {
        slug: 'boat-brands',
        title: 'Marcas náuticas y emergentes',
        body: 'Desarrolla RIB e inflables personalizados que coincidan con el posicionamiento de tu marca, tu mercado objetivo y tu estrategia de producto.',
        points: ['Diseños personalizados', 'Librés de marca', 'Desarrollo ODM', 'Marca privada'],
        cta: 'Explorar ODM personalizado',
        href: '/odm-development',
      },
      {
        slug: 'distributors-dealers',
        title: 'Distribuidores y concesionarios',
        body: 'Stockea líneas de embarcaciones diferenciadas en lugar de competir con los mismos modelos estándar de catálogo.',
        points: ['Marca privada', 'Territorios exclusivos', 'Programas listos para retail'],
        cta: 'Ver programa OEM',
        href: '/oem-manufacturing',
      },
      {
        slug: 'marinas-rental-fleets',
        title: 'Marinas, resorts y flotas de alquiler',
        body: 'Botes de alto ciclo diseñados para el uso comercial diario, con kits de repuestos y consistencia de lote entre reposiciones.',
        points: ['Especificaciones de flota', 'Kits de repuestos', 'Consistencia de lote'],
        cta: 'Planifica un pedido de flota',
        href: '/oem-boat-moq',
      },
      {
        slug: 'rescue-professional',
        title: 'Agencias de rescate y profesionales',
        body: 'Embarcaciones configuradas para misión de rescate, patrulla y buceo, con zonas reforzadas y documentación CE completa.',
        points: ['Configuraciones de misión', 'Documentación CE', 'Contratos por volumen'],
        cta: 'Configura una flota de rescate',
        href: '/inflatable-boat-certification',
      },
      {
        slug: 'yacht-tender-programs',
        title: 'Astilleros y programas de tender',
        body: 'Tenders a medida con dimensiones para garaje y acabados superiores, con la marca de tu astillero.',
        points: ['Tenders a medida', 'Dimensiones para garaje', 'Marca del astillero'],
        cta: 'Inicia un proyecto de tender',
        href: '/research/oem-buyer-guide',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Customization Capability',
    title: 'Custom Boat Solutions For Your Business',
    sub: 'From ODM development programs for boat brands to private-label lines for dealers and fleet sourcing teams — every requirement turns into a manufacturable boat.',
    pillars: [
      {
        title: 'Custom ODM Development',
        body: 'Define the boat as your product requires.',
        points: ['Length & beam', 'Hull material', 'Tube layout', 'Performance targets'],
      },
      {
        title: 'Graphics & Branding',
        body: 'Put your identity on every hull.',
        points: ['Logo', 'Colors', 'Artwork', 'Livery & decals'],
      },
      {
        title: 'Fittings & Accessories',
        body: 'Complete the boat with matched equipment.',
        points: ['Console & seats', 'Covers & bags', 'Trailers & cradles', 'Packaging'],
      },
      {
        title: 'Fleet & Professional Programs',
        body: 'Tailor how your program is produced and supported.',
        points: ['Quantity', 'Specification', 'Spare parts kits', 'Batch consistency'],
      },
    ],
  },
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones de embarcaciones personalizadas para tu negocio',
    sub: 'Desde programas de desarrollo ODM para marcas náuticas hasta líneas de marca privada para distribuidores y equipos de compra de flotas — cada requisito se convierte en una embarcación fabricable.',
    pillars: [
      {
        title: 'Desarrollo ODM a medida',
        body: 'Define la embarcación según lo que requiere tu producto.',
        points: ['Eslora y manga', 'Material del casco', 'Configuración de tubos', 'Objetivos de rendimiento'],
      },
      {
        title: 'Gráficos y marca',
        body: 'Pon tu identidad en cada casco.',
        points: ['Logo', 'Colores', 'Arte', 'Libré y vinilos'],
      },
      {
        title: 'Equipamiento y accesorios',
        body: 'Completa la embarcación con equipo a juego.',
        points: ['Consola y asientos', 'Fundas y bolsas', 'Tráilers y gradas', 'Embalaje'],
      },
      {
        title: 'Programas de flota y profesionales',
        body: 'Adapta cómo se produce y se da soporte a tu programa.',
        points: ['Cantidad', 'Especificación', 'Kits de repuestos', 'Consistencia de lote'],
      },
    ],
  },
}

/* ─────────────────────────── custom boat studio ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Configurator',
    title: 'Specification Builder',
    sub: 'Scroll the build — from the hull underneath to the crate it ships in, every layer is specified by you.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Hull and Size',
        body: 'Choose a proven platform or specify a custom hull — length, beam, deadrise, tube diameter and chamber count.',
      },
      {
        title: 'Tube Fabric',
        body: 'PVC or Hypalon®/CR, fabric weight, tube colors, chamber layout and overpressure valves specified per use case.',
      },
      {
        title: 'Console and Layout',
        body: 'Standard or custom-molded console, steering, seating, fuel system and deck layout arranged around your mission.',
      },
      {
        title: 'Colors and Artwork',
        body: 'Hull and tube colors with your livery printed from brand files. Our prepress team converts rough concepts into production-ready data.',
      },
      {
        title: 'Fittings and Packaging',
        body: 'Covers, trailers, pumps, anchors and spare parts kits — customized and bundled. Crated export packing to your spec.',
      },
    ],
  },
  es: {
    kicker: 'Configurador',
    title: 'Constructor de especificaciones',
    sub: 'Desliza por todo el proceso — desde el casco hasta la jaula en la que se envía, cada capa es especificada por ti.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Casco y tamaño',
        body: 'Elige una plataforma probada o especifica un casco propio: eslora, manga, ángulo muerto, diámetro de tubo y número de cámaras.',
      },
      {
        title: 'Tejido del tubo',
        body: 'PVC o Hypalon®/CR, gramaje del tejido, colores del tubo, disposición de cámaras y válvulas de alivio según el uso.',
      },
      {
        title: 'Consola y distribución',
        body: 'Consola estándar o moldeada a medida, dirección, asientos, sistema de combustible y distribución de cubierta según tu misión.',
      },
      {
        title: 'Colores y arte',
        body: 'Colores de casco y tubos con tu libré impresa desde tus archivos de marca. Nuestro equipo de preimpresión convierte ideas en bruto en datos listos para producción.',
      },
      {
        title: 'Equipamiento y embalaje',
        body: 'Fundas, tráilers, bombas, anclas y kits de repuestos — personalizados y empaquetados. Embalaje enjaulado para exportación según tu especificación.',
      },
    ],
  },
}
/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  series: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export interface ProductFilterGroup {
  key: string
  label: string
}

export const productFilters: Localized<{ all: string; groups: ProductFilterGroup[] }> = {
  en: {
    all: 'All Platforms',
    groups: [
      { key: 'aluminum-rib', label: 'Aluminum Hull RIBs' },
      { key: 'fiberglass-rib', label: 'Fiberglass Hull RIBs' },
      { key: 'sport-console', label: 'Sport & Console' },
      { key: 'rescue-pro', label: 'Rescue & Professional' },
      { key: 'inflatable-dinghy', label: 'Dinghies & Tenders' },
      { key: 'inflatable-catamaran', label: 'Inflatable Catamarans' },
      { key: 'inflatable-kayak', label: 'Inflatable Kayaks' },
      { key: 'inflatable-raft', label: 'Inflatable Rafts' },
    ],
  },
  es: {
    all: 'Todas las plataformas',
    groups: [
      { key: 'aluminum-rib', label: 'RIB de aluminio' },
      { key: 'fiberglass-rib', label: 'RIB de fibra de vidrio' },
      { key: 'sport-console', label: 'Deportivas y consola' },
      { key: 'rescue-pro', label: 'Rescate y profesional' },
      { key: 'inflatable-dinghy', label: 'Neumáticas y tenders' },
      { key: 'inflatable-catamaran', label: 'Catamaranes inflables' },
      { key: 'inflatable-kayak', label: 'Kayaks inflables' },
      { key: 'inflatable-raft', label: 'Balsas inflables' },
    ],
  },
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'RIB & Inflatable Boat Platforms Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the hull, tubes, graphics and specs to your program.',
    items: [
      {
        slug: 'rib-alloy-360',
        series: 'aluminum-rib',
        sku: 'NRB-A360',
        name: 'Alloy 360 RIB',
        tagline: 'The compact aluminum classic',
        desc: 'Our most requested aluminum RIB — a 3.6 m welded marine-alloy hull with a three-chamber tube set, light enough to tow and launch easily yet stable enough for daily work duty. The default starting point for tender lines and rental fleets.',
        uses: ['Entry RIB', 'Yacht tender', 'Coastal'],
        for: ['Startups', 'Rental fleets'],
        specs: '3.60 m LOA · 1.70 m beam · 0.42 m tube · 4 persons · 20 HP max',
        artwork: 'Marine-grade alloy hull, press-formed & welded · 3-chamber tubes · self-draining deck',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif',
        hue: 200,
      },
      {
        slug: 'rib-alloy-430',
        series: 'aluminum-rib',
        sku: 'NRB-A430',
        name: 'Alloy 430 RIB',
        tagline: 'The workhorse mid-size',
        desc: 'The 4.3 m flagship of the Alloy range — deeper V for a drier ride, heavier payload for dive gear or cargo, and a reinforced transom rated for 40 HP. Popular with patrol services and resort fleets alike.',
        uses: ['Work duty', 'Dive support', 'Patrol'],
        for: ['Fleet buyers', 'Resorts'],
        specs: '4.30 m LOA · 1.85 m beam · 0.45 m tube · 6 persons · 40 HP max',
        artwork: 'Reinforced transom · 4-chamber tubes · lifting davit points · alloy console option',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-430-01.avif',
        hue: 205,
      },
      {
        slug: 'rib-alloy-470',
        series: 'aluminum-rib',
        sku: 'NRB-A470',
        name: 'Alloy 470 RIB',
        tagline: 'Heavy-duty aluminum platform',
        desc: 'A 4.7 m heavy-duty platform with thickened keel protection, bow locker and space for a jockey console — configured for professional crews who need payload and durability over frills.',
        uses: ['Professional', 'Utility', 'Heavy duty'],
        for: ['Professional agencies', 'Workboat operators'],
        specs: '4.70 m LOA · 1.95 m beam · 0.47 m tube · 8 persons · 50 HP max',
        artwork: 'Thickened keel guard · bow locker · jockey console option · 5-chamber tubes',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-470-01.avif',
        hue: 195,
      },
      {
        slug: 'rib-glass-380',
        series: 'fiberglass-rib',
        sku: 'NRB-G380',
        name: 'Glass 380 RIB',
        tagline: 'Deep-V fiberglass starter',
        desc: 'A 3.8 m GRP deep-V hull that rides soft in chop while staying trailer-friendly. A proven dealer platform: bright gelcoat colors, clean livery surfaces and a price point that opens retail doors.',
        uses: ['Dealer lines', 'Family', 'Coastal'],
        for: ['Dealers', 'Charter startups'],
        specs: '3.80 m LOA · 1.72 m beam · 0.43 m tube · 5 persons · 25 HP max',
        artwork: 'GRP deep-V hull · automotive-grade gelcoat · 3-chamber tubes · bow sun deck option',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif',
        hue: 190,
      },
      {
        slug: 'rib-glass-520',
        series: 'fiberglass-rib',
        sku: 'NRB-G520',
        name: 'Glass 520 RIB',
        tagline: 'The family cruiser',
        desc: 'The 5.2 m best-seller — full-width aft bench, bow sunpad, ski-mast option and a 60 HP rating that keeps the fun fast. The platform most dealer partners customize first.',
        uses: ['Family', 'Watersports', 'Day cruising'],
        for: ['Dealers', 'Charter fleets'],
        specs: '5.20 m LOA · 2.10 m beam · 0.48 m tube · 10 persons · 60 HP max',
        artwork: 'Double-console option · aft boarding ladder · ski tow point · hydraulic steering option',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-520-01.avif',
        hue: 215,
      },
      {
        slug: 'rib-glass-640',
        series: 'fiberglass-rib',
        sku: 'NRB-G640',
        name: 'Glass 640 RIB',
        tagline: 'Flagship fiberglass hull',
        desc: 'Our largest fiberglass platform at 6.4 m — stepped hull for offshore confidence, enclosed console with marine head, and a 115 HP rating for serious coastal range.',
        uses: ['Offshore', 'Charter', 'Flagship'],
        for: ['Charter operators', 'Premium dealers'],
        specs: '6.40 m LOA · 2.35 m beam · 0.52 m tube · 14 persons · 115 HP max',
        artwork: 'Stepped deep-V hull · enclosed console · 6-chamber tubes · twin fuel tank option',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-640-01.avif',
        hue: 185,
      },
      {
        slug: 'sport-wave-450',
        series: 'sport-console',
        sku: 'NRT-W450',
        name: 'Wave 450 Sport',
        tagline: 'Stepped-deck sport console',
        desc: 'A 4.5 m console sport boat with a stepped aft deck, ski tow point and bucket-seat helm — tuned for water skiing, tubing and fast coastal runs, with a young, colorful livery language your brand can own.',
        uses: ['Watersports', 'Day boating', 'Rental premium'],
        for: ['Rental operators', 'Lifestyle brands'],
        specs: '4.50 m LOA · 1.92 m beam · 0.46 m tube · 6 persons · 40 HP max',
        artwork: 'Stepped aft deck · ski tow point · bucket-seat helm · wraparound livery printing',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif',
        hue: 220,
      },
      {
        slug: 'sport-wave-550',
        series: 'sport-console',
        sku: 'NRT-W550',
        name: 'Wave 550 Sport',
        tagline: 'The fast coastal console',
        desc: 'The 5.5 m Wave stretches the platform for offshore-minded buyers — deeper V, larger console with head compartment, aft sunpad and a 90 HP rating for thrilling performance.',
        uses: ['Performance', 'Offshore day runs', 'Premium rental'],
        for: ['Lifestyle brands', 'Premium dealers'],
        specs: '5.50 m LOA · 2.16 m beam · 0.50 m tube · 8 persons · 90 HP max',
        artwork: 'Deep-V hull · console with head compartment · aft sunpad · gelcoat-and-livery color system',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-550-01.avif',
        hue: 230,
      },
      {
        slug: 'rescue-guard-470',
        series: 'rescue-pro',
        sku: 'NRR-RG470',
        name: 'Guard 470 Rescue',
        tagline: 'Fast-response rescue platform',
        desc: 'A 4.7 m fast-response platform with reinforced sponsons, self-righting bag option, casualty recovery zone and rescue-rack mounting — delivered with the documentation agencies need for procurement files.',
        uses: ['Rescue', 'First response', 'Flood ops'],
        for: ['Rescue agencies', 'Civil protection'],
        specs: '4.70 m LOA · 1.98 m beam · 0.50 m tube · 6 crew · 60 HP max',
        artwork: 'Reinforced sponsons · rescue rack mounts · self-righting bag option · grab lines throughout',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif',
        hue: 15,
      },
      {
        slug: 'patrol-line-600',
        series: 'rescue-pro',
        sku: 'NRR-P600',
        name: 'Patrol 600 Line',
        tagline: 'Long-range patrol hull',
        desc: 'A 6.0 m patrol platform with jockey seating for shock reduction, radar-arch provision, twin fuel option and night-operation lighting prep — built for coast guards, port authorities and security contractors.',
        uses: ['Patrol', 'Security', 'Border ops'],
        for: ['Government fleets', 'Security firms'],
        specs: '6.00 m LOA · 2.30 m beam · 0.52 m tube · 10 crew · 115 HP max',
        artwork: 'Jockey console · radar arch provision · twin fuel option · navigation lighting prep',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/patrol-line-600-01.avif',
        hue: 210,
      },
      {
        slug: 'dive-team-420',
        series: 'rescue-pro',
        sku: 'NRR-D420',
        name: 'Dive Team 420',
        tagline: 'Purpose-built dive tender',
        desc: 'A 4.2 m dive-dedicated platform with tank strap points, kit stowage, heavy-duty boarding ladder and a low freeboard recovery zone — the working choice for dive schools and scientific teams.',
        uses: ['Diving', 'Research', 'Dive schools'],
        for: ['Dive operators', 'Research teams'],
        specs: '4.20 m LOA · 1.90 m beam · 0.46 m tube · 6 divers · 40 HP max',
        artwork: 'Tank strap points · heavy-duty ladder · low freeboard recovery zone · stowage lockers',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/dive-team-420-01.avif',
        hue: 175,
      },
      {
        slug: 'airtender-270',
        series: 'inflatable-dinghy',
        sku: 'NRD-T270',
        name: 'Air Tender 270',
        tagline: 'The stow-anywhere tender',
        desc: 'A 2.7 m fully inflatable tender that rolls into a bag — slatted floor, three chambers and a 5 HP rating. The easiest way for yacht owners and campers to get on the water.',
        uses: ['Yacht tender', 'Camping', 'Light utility'],
        for: ['Yacht builders', 'Outdoor retailers'],
        specs: '2.70 m LOA · 1.52 m beam · 3 chambers · 3 persons · 5 HP max',
        artwork: 'Slatted floor · roll-up stow bag · 3 chambers · lifting/tow rings',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif',
        hue: 170,
      },
      {
        slug: 'airdock-330',
        series: 'inflatable-dinghy',
        sku: 'NRD-D330',
        name: 'Air Dock 330',
        tagline: 'Airdeck-floor runabout',
        desc: 'A 3.3 m inflatable with a high-pressure airdeck floor that turns the whole craft rigid — a stable casting or swimming platform for families, with a 9.9 HP rating and true car-boot portability.',
        uses: ['Family', 'Swim platform', 'Portable'],
        for: ['Outdoor retailers', 'Rental fleets'],
        specs: '3.30 m LOA · 1.62 m beam · airdeck floor · 4–5 persons · 9.9 HP max',
        artwork: 'High-pressure airdeck floor · rigid feel at 0.25 bar working pressure · carry bags included',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airdock-330-01.avif',
        hue: 160,
      },
      {
        slug: 'catamaran-speed-470',
        series: 'inflatable-catamaran',
        sku: 'NCA-470',
        name: 'Catamaran Speed 470',
        tagline: 'High-speed twin-hull catamaran',
        desc: 'A 4.7 m twin-hull inflatable catamaran with keel-less dual-sponson design for maximum speed and stability. Open-bow architecture for fast beach landings and rapid rescue deployment.',
        uses: ['Racing', 'Surf rescue', 'Fast patrol'],
        for: ['Racing clubs', 'Rescue agencies'],
        specs: '4.70 m LOA · 2.10 m beam · 0.50 m tube · 6 persons · 40 HP max',
        artwork: 'Twin-hull catamaran · keel-less design · drop-stitch air floor · open bow',
        image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01.avif',
        hue: 180,
      },
      {
        slug: 'kaboat-fish-375',
        series: 'inflatable-catamaran',
        sku: 'NKB-375',
        name: 'KaBoat Fish 375',
        tagline: 'Catamaran kayak for fishing',
        desc: 'A 3.75 m dual-sponson KaBoat combining catamaran stability with kayak portability. Equipped with 4 rod holders, dual aluminum seats and a drop-stitch air floor for mobile fishing.',
        uses: ['Fishing', 'Recreation', 'Rescue'],
        for: ['Fishing brands', 'Rental fleets'],
        specs: '3.75 m LOA · 1.65 m beam · 0.45 m tube · 2+2 persons · 15 HP max',
        artwork: 'Dual-sponson catamaran · 4 rod holders · bow splash guard · drop-stitch floor',
        image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/kaboat-fish-375-01.avif',
        hue: 175,
      },
      {
        slug: 'sport-sib-330',
        series: 'inflatable-dinghy',
        sku: 'NSI-330',
        name: 'Sport SIB 330',
        tagline: 'Foldable sport inflatable boat',
        desc: 'A 3.3 m classic foldable sport inflatable boat with removable aluminum floor boards, inflatable V-keel and self-bailing drain system. The proven SIB platform for fishing, recreation and light utility.',
        uses: ['Fishing', 'Recreation', 'Utility'],
        for: ['Outdoor retailers', 'Fleet buyers'],
        specs: '3.30 m LOA · 1.55 m beam · 0.40 m tube · 4 persons · 15 HP max',
        artwork: 'Aluminum floor boards · V-keel · self-bailing drain · multi-chamber tubes',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/sport-sib-330-01.avif',
        hue: 165,
      },
      {
        slug: 'kayak-tour-365',
        series: 'inflatable-kayak',
        sku: 'NIK-365',
        name: 'Kayak Tour 365',
        tagline: 'Full drop-stitch touring kayak',
        desc: 'A 3.65 m full drop-stitch inflatable kayak with flat-panel sidewalls and V-shaped bow/stern cones. High-pressure rigidity and integrated cockpit rim deliver hard-shell touring performance.',
        uses: ['Touring', 'Performance', 'Expedition'],
        for: ['Specialty retailers', 'Tour operators'],
        specs: '3.65 m LOA · 0.75 m beam · 1 person · 12 kg · 8–10 psi',
        artwork: 'Full drop-stitch sidewalls · PU nose cones · cockpit coaming · embedded bungee',
        image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-tour-365-01.avif',
        hue: 25,
      },
      {
        slug: 'kayak-hybrid-335',
        series: 'inflatable-kayak',
        sku: 'NIH-335',
        name: 'Kayak Hybrid 335',
        tagline: 'Hybrid drop-stitch kayak',
        desc: 'A 3.35 m hybrid inflatable kayak combining thick PVC side tubes with a removable drop-stitch floor. Recessed cockpit, V-hull and bungee system for touring comfort in a rental-friendly platform.',
        uses: ['Recreation', 'Rental', 'Family'],
        for: ['Rental fleets', 'Resorts'],
        specs: '3.35 m LOA · 0.85 m beam · 1–2 persons · 11 kg · 8–10 psi',
        artwork: 'Hybrid tube + drop-stitch floor · splash deck · removable floor · multi-handle',
        image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-hybrid-335-01.avif',
        hue: 170,
      },
      {
        slug: 'raft-white-380',
        series: 'inflatable-raft',
        sku: 'NWR-380',
        name: 'Raft White 380',
        tagline: 'Self-bailing whitewater raft',
        desc: 'A 3.8 m self-bailing inflatable whitewater raft with raised I-Beam floor, flat-bottom zero-keel design and frame-ready modular construction. Built for outfitters, expeditions and private anglers.',
        uses: ['Whitewater', 'Expedition', 'Commercial outfitter'],
        for: ['Outfitters', 'Expedition teams'],
        specs: '3.80 m LOA · 1.80 m beam · 0.50 m tube · 4–6 persons · 5 chambers',
        artwork: 'I-Beam self-bailing floor · flat-bottom zero-keel · frame-ready perimeter · drop-stitch upgrade',
        image: 'https://neptunor.com/assets/products/2026/inflatable-raft/raft-white-380-01.avif',
        hue: 35,
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas de RIB e inflables disponibles para personalización',
    sub: 'Cada serie es una plataforma de fabricación: elige un punto de partida y adaptamos el casco, los tubos, los gráficos y las especificaciones a tu programa.',
    items: [
      {
        slug: 'rib-alloy-360',
        series: 'aluminum-rib',
        sku: 'NRB-A360',
        name: 'Alloy 360 RIB',
        tagline: 'El clásico compacto de aluminio',
        desc: 'Nuestro RIB de aluminio más solicitado: un casco soldado de aleación marina de 3,6 m con juego de tubos de tres cámaras, lo bastante ligero para remolcar y botar con facilidad pero estable para el trabajo diario. El punto de partida por defecto para líneas de tender y flotas de alquiler.',
        uses: ['RIB de iniciación', 'Tender de yate', 'Costero'],
        for: ['Marcas emergentes', 'Flotas de alquiler'],
        specs: '3,60 m de eslora · 1,70 m de manga · tubo de 0,42 m · 4 plazas · 20 CV máx.',
        artwork: 'Casco de aleación marina conformado y soldado · tubos de 3 cámaras · cubierta autovaciante',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif',
        hue: 200,
      },
      {
        slug: 'rib-alloy-430',
        series: 'aluminum-rib',
        sku: 'NRB-A430',
        name: 'Alloy 430 RIB',
        tagline: 'El todoterreno mediano',
        desc: 'El buque insignia de 4,3 m de la gama Alloy — V más pronunciada para una navegación más seca, mayor carga para equipo de buceo o mercancía y espejo de popa reforzado homologado para 40 CV. Popular tanto en servicios de patrulla como en flotas de resorts.',
        uses: ['Trabajo profesional', 'Apoyo a buceo', 'Patrulla'],
        for: ['Compradores de flota', 'Resorts'],
        specs: '4,30 m de eslora · 1,85 m de manga · tubo de 0,45 m · 6 plazas · 40 CV máx.',
        artwork: 'Espejo de popa reforzado · tubos de 4 cámaras · puntos de izado · consola de aluminio opcional',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-430-01.avif',
        hue: 205,
      },
      {
        slug: 'rib-alloy-470',
        series: 'aluminum-rib',
        sku: 'NRB-A470',
        name: 'Alloy 470 RIB',
        tagline: 'Plataforma de aluminio robusta',
        desc: 'Una plataforma resistente de 4,7 m con quilla engrosada, cofre de proa y espacio para consola de jockey — configurada para tripulaciones profesionales que priorizan carga y durabilidad antes que adornos.',
        uses: ['Profesional', 'Utilidad', 'Alta exigencia'],
        for: ['Agencias profesionales', 'Operadores de trabajo'],
        specs: '4,70 m de eslora · 1,95 m de manga · tubo de 0,47 m · 8 plazas · 50 CV máx.',
        artwork: 'Protección de quilla engrosada · cofre de proa · consola jockey opcional · tubos de 5 cámaras',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-470-01.avif',
        hue: 195,
      },
      {
        slug: 'rib-glass-380',
        series: 'fiberglass-rib',
        sku: 'NRB-G380',
        name: 'Glass 380 RIB',
        tagline: 'Profundo en V de fibra de vidrio',
        desc: 'Un casco profundo en V de PRFV de 3,8 m que navega suave con marejada sin perder facilidad de remolque. Una plataforma probada para distribuidores: colores de gelcoat vivos, superficies limpias para libré y un precio que abre puertas en el retail.',
        uses: ['Líneas de distribuidor', 'Familia', 'Costero'],
        for: ['Distribuidores', 'Charters emergentes'],
        specs: '3,80 m de eslora · 1,72 m de manga · tubo de 0,43 m · 5 plazas · 25 CV máx.',
        artwork: 'Casco profundo en V de PRFV · gelcoat de grado automoción · tubos de 3 cámaras · solarium de proa opcional',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif',
        hue: 190,
      },
      {
        slug: 'rib-glass-520',
        series: 'fiberglass-rib',
        sku: 'NRB-G520',
        name: 'Glass 520 RIB',
        tagline: 'El crucero familiar',
        desc: 'El superventas de 5,2 m — banqueta popa a banda y banda, solarium de proa, mástil de esquí opcional y homologación de 60 CV para mantener la diversión a toda velocidad. La plataforma que más personalizan nuestros distribuidores.',
        uses: ['Familiar', 'Deportes náuticos', 'Crucero de día'],
        for: ['Distribuidores', 'Flotas de chárter'],
        specs: '5,20 m de eslora · 2,10 m de manga · tubo de 0,48 m · 10 plazas · 60 CV máx.',
        artwork: 'Opción de doble consola · escalerilla de baño · punto de remolque de esquí · dirección hidráulica opcional',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-520-01.avif',
        hue: 215,
      },
      {
        slug: 'rib-glass-640',
        series: 'fiberglass-rib',
        sku: 'NRB-G640',
        name: 'Glass 640 RIB',
        tagline: 'Casco insignia de fibra de vidrio',
        desc: 'Nuestra mayor plataforma de fibra de vidrio con 6,4 m — casco escalonado para navegar con confianza en alta mar, consola cerrada con aseo marino y homologación de 115 CV para una autonomía seria en costa.',
        uses: ['Alta mar', 'Chárter', 'Insignia'],
        for: ['Operadores de chárter', 'Distribuidores premium'],
        specs: '6,40 m de eslora · 2,35 m de manga · tubo de 0,52 m · 14 plazas · 115 CV máx.',
        artwork: 'Casco escalonado profundo en V · consola cerrada · tubos de 6 cámaras · doble depósito de combustible opcional',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-640-01.avif',
        hue: 185,
      },
      {
        slug: 'sport-wave-450',
        series: 'sport-console',
        sku: 'NRT-W450',
        name: 'Wave 450 Sport',
        tagline: 'Consola deportiva de popa escalonada',
        desc: 'Una deportiva a consola de 4,5 m con plataforma de popa escalonada, punto de remolque de esquí y puesto de gobierno con butacas — afinada para esquí acuático, donuts y salidas rápidas por la costa, con un lenguaje de libré joven y colorido que tu marca puede hacer suyo.',
        uses: ['Deportes náuticos', 'Paseo de día', 'Alquiler premium'],
        for: ['Operadores de alquiler', 'Marcas lifestyle'],
        specs: '4,50 m de eslora · 1,92 m de manga · tubo de 0,46 m · 6 plazas · 40 CV máx.',
        artwork: 'Plataforma de popa escalonada · remolque de esquí · timón con butacas · impresión de libré envolvente',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif',
        hue: 220,
      },
      {
        slug: 'sport-wave-550',
        series: 'sport-console',
        sku: 'NRT-W550',
        name: 'Wave 550 Sport',
        tagline: 'La consola costera rápida',
        desc: 'La Wave de 5,5 m estira la plataforma para compradores de altura — V más profunda, consola ampliada con compartimento de aseo, solarium de popa y homologación de 90 CV para un rendimiento vibrante.',
        uses: ['Rendimiento', 'Salidas en alta mar', 'Alquiler premium'],
        for: ['Marcas lifestyle', 'Distribuidores premium'],
        specs: '5,50 m de eslora · 2,16 m de manga · tubo de 0,50 m · 8 plazas · 90 CV máx.',
        artwork: 'Casco profundo en V · consola con aseo · solarium de popa · sistema de color en gelcoat y libré',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-550-01.avif',
        hue: 230,
      },
      {
        slug: 'rescue-guard-470',
        series: 'rescue-pro',
        sku: 'NRR-RG470',
        name: 'Guard 470 Rescue',
        tagline: 'Plataforma de rescate de respuesta rápida',
        desc: 'Una plataforma de respuesta rápida de 4,7 m con flotadores laterales reforzados, opción de bolsa autoderechante, zona de recuperación de accidentados y anclajes para bastidor de rescate — entregada con la documentación que los organismos exigen en sus expedientes de compra.',
        uses: ['Rescate', 'Primera intervención', 'Inundaciones'],
        for: ['Agencias de rescate', 'Protección civil'],
        specs: '4,70 m de eslora · 1,98 m de manga · tubo de 0,50 m · 6 tripulantes · 60 CV máx.',
        artwork: 'Flotadores reforzados · anclajes de bastidor de rescate · bolsa autoderechante opcional · cablines a toda la embarcación',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif',
        hue: 15,
      },
      {
        slug: 'patrol-line-600',
        series: 'rescue-pro',
        sku: 'NRR-P600',
        name: 'Patrol 600 Line',
        tagline: 'Casco de patrulla de gran autonomía',
        desc: 'Una plataforma de patrulla de 6,0 m con asientos de jockey para reducir impactos, preparación para arco de radar, opción de doble depósito y preparación de iluminación nocturna — construida para guardacostas, autoridades portuarias y contratistas de seguridad.',
        uses: ['Patrulla', 'Seguridad', 'Fronteras'],
        for: ['Flotas gubernamentales', 'Empresas de seguridad'],
        specs: '6,00 m de eslora · 2,30 m de manga · tubo de 0,52 m · 10 tripulantes · 115 CV máx.',
        artwork: 'Consola jockey · preparación para arco de radar · doble depósito opcional · preparación de luces de navegación',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/patrol-line-600-01.avif',
        hue: 210,
      },
      {
        slug: 'dive-team-420',
        series: 'rescue-pro',
        sku: 'NRR-D420',
        name: 'Dive Team 420',
        tagline: 'Tender de buceo de propósito específico',
        desc: 'Una plataforma de 4,2 m dedicada al buceo con anclajes de correas para botellas, estiba de equipo, escalerilla reforzada y zona de recuperación de obra viva baja — la opción de trabajo para centros de buceo y equipos científicos.',
        uses: ['Buceo', 'Investigación', 'Centros de buceo'],
        for: ['Operadores de buceo', 'Equipos de investigación'],
        specs: '4,20 m de eslora · 1,90 m de manga · tubo de 0,46 m · 6 buceadores · 40 CV máx.',
        artwork: 'Anclajes de correas para botellas · escalerilla reforzada · zona de obra viva baja · coffers de estiba',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/dive-team-420-01.avif',
        hue: 175,
      },
      {
        slug: 'airtender-270',
        series: 'inflatable-dinghy',
        sku: 'NRD-T270',
        name: 'Air Tender 270',
        tagline: 'El tender que cabe en cualquier parte',
        desc: 'Un tender totalmente inflable de 2,7 m que se enrolla dentro de una bolsa — suelo de listones, tres cámaras y homologación de 5 CV. La forma más sencilla de salir al agua para propietarios de yates y campistas.',
        uses: ['Tender de yate', 'Campamento', 'Utilidad ligera'],
        for: ['Astilleros', 'Tiendas outdoor'],
        specs: '2,70 m de eslora · 1,52 m de manga · 3 cámaras · 3 plazas · 5 CV máx.',
        artwork: 'Suelo de listones · bolsa de estiba enrollable · 3 cámaras · anillas de izado y remolque',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif',
        hue: 170,
      },
      {
        slug: 'airdock-330',
        series: 'inflatable-dinghy',
        sku: 'NRD-D330',
        name: 'Air Dock 330',
        tagline: 'Neumática con suelo de aire a presión',
        desc: 'Una neumática de 3,3 m con suelo de aire a alta presión que vuelve rígida toda la embarcación — una plataforma estable de pesca o baño para familias, con homologación de 9,9 CV y verdadera portabilidad de maletero.',
        uses: ['Familiar', 'Plataforma de baño', 'Transportable'],
        for: ['Tiendas outdoor', 'Flotas de alquiler'],
        specs: '3,30 m de eslora · 1,62 m de manga · suelo de aire a presión · 4–5 plazas · 9,9 CV máx.',
        artwork: 'Suelo de aire a alta presión · sensación rígida a 0,25 bar de presión de trabajo · bolsas de transporte incluidas',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airdock-330-01.avif',
        hue: 160,
      },
      {
        slug: 'catamaran-speed-470',
        series: 'inflatable-catamaran',
        sku: 'NCA-470',
        name: 'Catamarán Speed 470',
        tagline: 'Catamarán inflable de alta velocidad',
        desc: 'Un catamarán inflable de doble casco de 4,7 m con diseño sin quilla y doble flotador para máxima velocidad y estabilidad. Arquitectura de proa abierta para aterrizajes rápidos y despliegue de rescate.',
        uses: ['Carreras', 'Rescate en surf', 'Patrulla rápida'],
        for: ['Clubes de carreras', 'Agencias de rescate'],
        specs: '4,70 m eslora · 2,10 m manga · 0,50 m tubo · 6 personas · 40 CV máx.',
        artwork: 'Catamarán de doble casco · diseño sin quilla · piso drop-stitch · proa abierta',
        image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01.avif',
        hue: 180,
      },
      {
        slug: 'kaboat-fish-375',
        series: 'inflatable-catamaran',
        sku: 'NKB-375',
        name: 'KaBoat Pesca 375',
        tagline: 'Catamarán kayak para pesca',
        desc: 'Un KaBoat de 3,75 m de doble flotador que combina la estabilidad de catamarán con la portabilidad de kayak. Equipado con 4 portarodillos, doble banco de aluminio y piso drop-stitch.',
        uses: ['Pesca', 'Recreación', 'Rescate'],
        for: ['Marcas de pesca', 'Flotas de alquiler'],
        specs: '3,75 m eslora · 1,65 m manga · 0,45 m tubo · 2+2 personas · 15 CV máx.',
        artwork: 'Doble flotador catamarán · 4 portarodillos · parabrisas de proa · piso drop-stitch',
        image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/kaboat-fish-375-01.avif',
        hue: 175,
      },
      {
        slug: 'sport-sib-330',
        series: 'inflatable-dinghy',
        sku: 'NSI-330',
        name: 'SIB Deportivo 330',
        tagline: 'Embarcación inflable deportiva plegable',
        desc: 'Una embarcación inflable deportiva plegable clásica de 3,3 m con tablas de piso de aluminio removibles, quilla V inflable y sistema de drenaje automático. Plataforma probada para pesca y recreación.',
        uses: ['Pesca', 'Recreación', 'Utilidad'],
        for: ['Tiendas outdoor', 'Compradores de flota'],
        specs: '3,30 m eslora · 1,55 m manga · 0,40 m tubo · 4 personas · 15 CV máx.',
        artwork: 'Tablas de piso de aluminio · quilla V · drenaje automático · tubos multicámara',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/sport-sib-330-01.avif',
        hue: 165,
      },
      {
        slug: 'kayak-tour-365',
        series: 'inflatable-kayak',
        sku: 'NIK-365',
        name: 'Kayak Tour 365',
        tagline: 'Kayak de touring full drop-stitch',
        desc: 'Un kayak inflable full drop-stitch de 3,65 m con paredes planas y conos de proa/popa en forma de V. Rigidez de alta presión y cockpit integrado ofrecen rendimiento de touring de casco duro.',
        uses: ['Touring', 'Rendimiento', 'Expedición'],
        for: ['Tiendas especializadas', 'Operadores de tour'],
        specs: '3,65 m eslora · 0,75 m manga · 1 persona · 12 kg · 8–10 psi',
        artwork: 'Paredes full drop-stitch · conos PU · cockpit coaming · elásticos empotrados',
        image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-tour-365-01.avif',
        hue: 25,
      },
      {
        slug: 'kayak-hybrid-335',
        series: 'inflatable-kayak',
        sku: 'NIH-335',
        name: 'Kayak Híbrido 335',
        tagline: 'Kayak híbrido drop-stitch',
        desc: 'Un kayak inflable híbrido de 3,35 m que combina tubos laterales de PVC con piso drop-stitch removible. Cockpit hundido, casco en V y sistema de elásticos para comodidad de touring en plataforma de alquiler.',
        uses: ['Recreación', 'Alquiler', 'Familiar'],
        for: ['Flotas de alquiler', 'Resorts'],
        specs: '3,35 m eslora · 0,85 m manga · 1–2 personas · 11 kg · 8–10 psi',
        artwork: 'Híbrido tubo + piso drop-stitch · cubierta anti-splash · piso removible · manijas múltiples',
        image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-hybrid-335-01.avif',
        hue: 170,
      },
      {
        slug: 'raft-white-380',
        series: 'inflatable-raft',
        sku: 'NWR-380',
        name: 'Balsa White 380',
        tagline: 'Balsa de aguas bravas con drenaje automático',
        desc: 'Una balsa inflable de aguas bravas de 3,8 m con drenaje automático, piso I-Beam elevado, diseño plano sin quilla y construcción modular lista para marco. Para outfitters, expediciones y pescadores.',
        uses: ['Aguas bravas', 'Expedición', 'Outfitter comercial'],
        for: ['Outfitters', 'Equipos de expedición'],
        specs: '3,80 m eslora · 1,80 m manga · 0,50 m tubo · 4–6 personas · 5 cámaras',
        artwork: 'Piso I-Beam drenaje automático · plano sin quilla · perímetro para marco · upgrade drop-stitch',
        image: 'https://neptunor.com/assets/products/2026/inflatable-raft/raft-white-380-01.avif',
        hue: 35,
      },
    ],
  },
}
/* ─────────────────────────── video showcases ─────────────────────────── */

export interface VideoStep {
  t: string
  d?: string
}

export interface VideoShowcaseContent {
  badge: string
  title: string
  sub: string
  points: VideoStep[]
}

export const videoShowcase: Localized<{
  launch: VideoShowcaseContent
  process: VideoShowcaseContent
}> = {
  en: {
    launch: {
      badge: 'Brand Launch',
      title: 'Dreaming of launching your own boat brand?',
      sub: 'You don\'t need your own factory to launch a boat brand. We are the manufacturing partner behind your line: hull engineering, tube welding, sampling, QC, certification paperwork and export-ready production — all under one contract with one accountable team.',
      points: [
        { t: 'Full OEM/ODM Concept-to-Production', d: 'Custom hulls, RF-welded tubes, consoles, livery graphics and packaging.' },
        { t: 'Low MOQ Flexible Launch', d: 'Small-batch support so you can test the market without tying up massive capital.' },
        { t: 'Fleet & Dealer Programs', d: 'Locked specs, spare parts kits and color management across repeat orders.' },
        { t: 'Enterprise-Grade Quality & Certification', d: 'Node 01–07 quality gates, 0.35 bar pressure holds and CE documentation support.' },
      ],
    },
    process: {
      badge: 'Inside the Factory',
      title: 'How an inflatable boat is born',
      sub: 'Ever wondered how folded fabric and flat alloy become a rigid, sea-worthy hull? Five steps inside our plant.',
      points: [
        { t: 'Precision Cutting & Livery Printing' },
        { t: 'Aluminum & Fiberglass Hull Build' },
        { t: '100% Airtight RF Tube Welding' },
        { t: 'Console, Fittings & Rigging' },
        { t: 'Pressure Test, Survey & Pack' },
      ],
    },
  },
  es: {
    launch: {
      badge: 'Lanzamiento de marca',
      title: '¿Sueñas con lanzar tu propia marca de embarcaciones?',
      sub: 'No necesitas tu propia fábrica para lanzar una marca náutica. Somos el socio de fabricación detrás de tu línea: ingeniería de cascos, soldadura de tubos, muestras, control de calidad, documentación de certificación y producción lista para exportar — todo bajo un solo contrato y un solo equipo responsable.',
      points: [
        { t: 'OEM/ODM completo del concepto a la producción', d: 'Cascos a medida, tubos soldados por RF, consolas, gráficos de libré y embalaje.' },
        { t: 'Lanzamiento flexible con MOQ bajo', d: 'Producción de pequeños lotes para testear el mercado sin inmovilizar capital.' },
        { t: 'Programas de flota y distribuidores', d: 'Especificaciones fijadas, kits de repuestos y gestión de color entre pedidos repetidos.' },
        { t: 'Calidad y certificación de nivel empresarial', d: 'Puertas de calidad Node 01–07, pruebas de presión a 0,35 bar y soporte de documentación CE.' },
      ],
    },
    process: {
      badge: 'Dentro de la fábrica',
      title: 'Cómo nace un bote inflable',
      sub: '¿Alguna vez te preguntaste cómo un tejido plegado y una chapa plana se convierten en un casco rígido y marinero? Cinco pasos dentro de nuestra planta.',
      points: [
        { t: 'Corte de precisión e impresión de libré' },
        { t: 'Construcción del casco de aluminio y fibra de vidrio' },
        { t: 'Soldadura RF de tubos 100% hermética' },
        { t: 'Consola, herrajes y aprestado' },
        { t: 'Prueba de presión, inspección y embalaje' },
      ],
    },
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Boat',
    sub: 'Requirement intake through finished goods — every step inside our own plant.',
    steps: [
      {
        title: 'Inquiry & NDA',
        body: 'We collect your specification, target market, compliance requirements and volume forecast. An NDA is signed within 4 business hours, before any file exchange.',
      },
      {
        title: 'Specification Review',
        body: 'Hull type, dimensions, tube layout, materials and hardware are assessed for manufacturability. You receive a written report with cost drivers identified.',
      },
      {
        title: 'Engineering Proposal',
        body: 'Drawings, bill of materials, construction details and a quotation are returned for your approval — nothing enters production until you sign off.',
      },
      {
        title: 'Sample Build',
        body: 'A physical prototype confirms geometry, weight, finish and fit-out. Ships in 10–15 days.',
      },
      {
        title: 'Pilot Batch (20–50)',
        body: 'A pilot run validates production jigs, artwork match and every QC gate before you commit to scale.',
      },
      {
        title: 'Volume Production',
        body: '30–45 days of batch production under the Node 01–07 QC process, with traceability to material lot level.',
      },
      {
        title: 'Export-Ready Delivery',
        body: 'Crated, documented, container-loaded and sealed — handed over ready for export.',
      },
    ],
    note: 'The approved sample is the contract. Every boat in the batch is measured against it.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al bote terminado',
    sub: 'Desde la recepción de requisitos hasta el producto terminado — cada paso dentro de nuestra propia planta.',
    steps: [
      {
        title: 'Consulta y NDA',
        body: 'Recopilamos tu especificación, mercado objetivo, requisitos de cumplimiento y previsión de volumen. El NDA se firma en 4 horas laborables, antes de cualquier intercambio de archivos.',
      },
      {
        title: 'Revisión de especificación',
        body: 'El tipo de casco, dimensiones, configuración de tubos, materiales y herrajes se evalúan en cuanto a fabricabilidad. Recibes un informe escrito con los factores de coste identificados.',
      },
      {
        title: 'Propuesta de ingeniería',
        body: 'Planos, lista de materiales, detalles constructivos y presupuesto para tu aprobación — nada entra en producción hasta que das el visto bueno.',
      },
      {
        title: 'Construcción de muestra',
        body: 'Un prototipo físico confirma geometría, peso, acabado y equipamiento. Se envía en 10–15 días.',
      },
      {
        title: 'Lote piloto (20–50)',
        body: 'Un piloto valida utillajes, coincidencia de arte y todas las puertas de calidad antes de comprometerte al escalado.',
      },
      {
        title: 'Producción en serie',
        body: '30–45 días de producción bajo el proceso de calidad Node 01–07, con trazabilidad hasta el lote de material.',
      },
      {
        title: 'Entrega lista para exportación',
        body: 'Enjaulado, documentado, cargado en contenedor y precintado — entregado listo para exportar.',
      },
    ],
    note: 'La muestra aprobada es el punto de referencia. Cada bote del lote se mide contra ella.',
  },
}

/* ─────────────────────────── home: boat categories ─────────────────────────── */

export interface BoardCategory {
  id: string
  label: string
  desc: string
  image: string
  href: string
}

export interface BoardCategoriesContent {
  kicker: string
  title: string
  sub: string
  viewLabel: string
  items: BoardCategory[]
}

export const boardCategories: Localized<BoardCategoriesContent> = {
  en: {
    kicker: 'Our Boats',
    title: 'From Tenders to Patrol Fleets',
    sub: 'Every category is a manufacturing platform — choose your starting point and we customize the hull, tubes, graphics and specs to your program.',
    viewLabel: 'View',
    items: [
      { id: 'aluminum-rib', label: 'Aluminum Hull RIBs', desc: 'Welded alloy hulls for work duty, patrol and tender programs.', image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif', href: '/products/rib-alloy-360' },
      { id: 'fiberglass-rib', label: 'Fiberglass Hull RIBs', desc: 'Deep-V GRP hulls from 3.8 to 6.4 m for dealers and charter fleets.', image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif', href: '/products/rib-glass-380' },
      { id: 'sport-console', label: 'Sport & Console Boats', desc: 'Fast console RIBs for watersports and coastal day runs.', image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif', href: '/products/sport-wave-450' },
      { id: 'rescue-pro', label: 'Rescue & Professional', desc: 'Mission-configured boats for rescue, patrol and dive teams.', image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif', href: '/products/rescue-guard-470' },
      { id: 'inflatable-dinghy', label: 'Dinghies & Tenders', desc: 'Compact inflatables for yacht tenders, camping and light utility.', image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif', href: '/products/airtender-270' },
      { id: 'inflatable-catamaran', label: 'Inflatable Catamarans', desc: 'Twin-hull inflatables for speed, fishing and rescue missions.', image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01.avif', href: '/products/catamaran-speed-470' },
      { id: 'inflatable-kayak', label: 'Inflatable Kayaks', desc: 'Full drop-stitch and hybrid kayaks for touring and recreation.', image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-tour-365-01.avif', href: '/products/kayak-tour-365' },
      { id: 'inflatable-raft', label: 'Inflatable Rafts', desc: 'Self-bailing whitewater rafts for outfitters and expeditions.', image: 'https://neptunor.com/assets/products/2026/inflatable-raft/raft-white-380-01.avif', href: '/products/raft-white-380' },
    ],
  },
  es: {
    kicker: 'Nuestros botes',
    title: 'Del tender a la flota de patrulla',
    sub: 'Cada categoría es una plataforma de fabricación: elige tu punto de partida y adaptamos el casco, los tubos, los gráficos y las especificaciones a tu programa.',
    viewLabel: 'Ver',
    items: [
      { id: 'aluminum-rib', label: 'RIB de aluminio', desc: 'Cascos de aleación soldada para trabajo, patrulla y programas de tender.', image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif', href: '/products/rib-alloy-360' },
      { id: 'fiberglass-rib', label: 'RIB de fibra de vidrio', desc: 'Cascos profundos en V de PRFV de 3,8 a 6,4 m para distribuidores y chárter.', image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif', href: '/products/rib-glass-380' },
      { id: 'sport-console', label: 'Deportivas y consola', desc: 'RIB rápidos a consola para deportes náuticos y salidas costeras.', image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif', href: '/products/sport-wave-450' },
      { id: 'rescue-pro', label: 'Rescate y profesional', desc: 'Embarcaciones configuradas para misión de rescate, patrulla y buceo.', image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif', href: '/products/rescue-guard-470' },
      { id: 'inflatable-dinghy', label: 'Neumáticas y tenders', desc: 'Inflables compactos para tenders de yate, campamento y utilidad ligera.', image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif', href: '/products/airtender-270' },
      { id: 'inflatable-catamaran', label: 'Catamaranes inflables', desc: 'Doble casco inflable para velocidad, pesca y misiones de rescate.', image: 'https://neptunor.com/assets/products/2026/inflatable-catamaran/catamaran-speed-470-01.avif', href: '/products/catamaran-speed-470' },
      { id: 'inflatable-kayak', label: 'Kayaks inflables', desc: 'Kayaks full drop-stitch e híbridos para touring y recreación.', image: 'https://neptunor.com/assets/products/2026/inflatable-kayak/kayak-tour-365-01.avif', href: '/products/kayak-tour-365' },
      { id: 'inflatable-raft', label: 'Balsas inflables', desc: 'Balsas de aguas bravas con drenaje automático para outfitters y expediciones.', image: 'https://neptunor.com/assets/products/2026/inflatable-raft/raft-white-380-01.avif', href: '/products/raft-white-380' },
    ],
  },
}

/* ─────────────────────────── home: product platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'Base Platforms',
    sub: 'Base platforms, not catalog products. Every dimension, hull line and graphic is specified per project.',
    items: [
      {
        title: 'Aluminum Hull RIBs',
        body: 'Welded marine-alloy hulls for workboats, tender lines and heavy-use fleets.',
        uses: ['Workboats', 'Tender lines', 'Heavy-use fleets'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Fiberglass Hull RIBs',
        body: 'GRP deep-V hulls from 3.8 to 6.4 m for dealer programs, charter and family recreation.',
        uses: ['Dealer programs', 'Charter operators', 'Family recreation'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Sport & Console',
        body: 'Stepped-deck console boats tuned for watersports and fast coastal runs.',
        uses: ['Watersports', 'Coastal day boats', 'Premium rental'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Dinghies & Tenders',
        body: 'Compact inflatables for yacht tenders, campsites and easy-stow utility duty.',
        uses: ['Yacht tenders', 'Campgrounds', 'Compact storage'],
        cta: 'Request This Platform',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas base',
    sub: 'Plataformas base, no productos de catálogo. Cada dimensión, línea de casco y diseño se especifica por proyecto.',
    items: [
      {
        title: 'RIB de aluminio',
        body: 'Cascos de aleación marina soldada para embarcaciones de trabajo, líneas de tender y flotas de alta exigencia.',
        uses: ['Embarcaciones de trabajo', 'Líneas de tender', 'Flotas de alta exigencia'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'RIB de fibra de vidrio',
        body: 'Cascos profundos en V de PRFV de 3,8 a 6,4 m para programas de distribuidores, chárter y recreo familiar.',
        uses: ['Programas de distribuidor', 'Operadores de chárter', 'Recreo familiar'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Deportivas y consola',
        body: 'Embarcaciones a consola de popa escalonada afinadas para deportes náuticos y salidas costeras rápidas.',
        uses: ['Deportes náuticos', 'Embarcaciones de día', 'Alquiler premium'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Neumáticas y tenders',
        body: 'Inflables compactos para tenders de yate, campamentos y utilidad fácil de estibar.',
        uses: ['Tenders de yate', 'Campamentos', 'Estiba compacta'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
    ],
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Production Projects',
    title: 'Recent Production',
    sub: 'Manufacturing programs delivered from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        tag: 'Batch Traceability',
        title: 'Shipment Release & Traceability Handover',
        body: 'Every batch ships with its quality handover — inspection records, per-boat serial numbers and the signed release transfer, filed under 10-year ERP traceability. The photo shows the actual release & traceability handover record at the plant.',
        hue: 195,
        image: 'https://neptunor.com/assets/images/boats/quality/neptunor-batch-release-handover.webp',
      },
      {
        tag: 'Rescue Fleet',
        title: 'Agency Rescue Fleet — Guard 470',
        body: 'A 40-unit rescue fleet for a civil-protection agency: reinforced hulls, rescue racks and casualty recovery zones, with CE documentation and third-party pre-shipment inspection completed before container loading.',
        hue: 28,
        image: 'https://neptunor.com/assets/images/boats/fleet/neptunor-rescue-fleet-delivery.webp',
      },
      {
        tag: 'Dealer Line Launch',
        title: 'Private-Label RIB Line for a European Dealer',
        body: 'An established marine dealer launched its own RIB line: ODM development of three fiberglass sizes, dedicated tooling and a first production run of 60 boats with artwork-match and pressure-hold verification before scale-up — designs and tooling owned by the dealer.',
        hue: 210,
        image: 'https://neptunor.com/assets/images/boats/factory/neptunor-dealer-line-production.webp',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Programas de fabricación entregados desde nuestra planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Trazabilidad de lotes',
        title: 'Liberación de embarque y traspaso de trazabilidad',
        body: 'Cada lote sale con su traspaso de calidad: registros de inspección, número de serie por bote y el acta de liberación firmada, archivados con trazabilidad ERP de 10 años. La foto muestra el acta real de liberación y trazabilidad en planta.',
        hue: 195,
        image: 'https://neptunor.com/assets/images/boats/quality/neptunor-batch-release-handover.webp',
      },
      {
        tag: 'Flota de rescate',
        title: 'Flota de rescate para agencia — Guard 470',
        body: 'Una flota de rescate de 40 unidades para una agencia de protección civil: cascos reforzados, bastidores de rescate y zonas de recuperación de accidentados, con documentación CE e inspección previa al embarque por terceros completada antes de la carga del contenedor.',
        hue: 28,
        image: 'https://neptunor.com/assets/images/boats/fleet/neptunor-rescue-fleet-delivery.webp',
      },
      {
        tag: 'Lanzamiento de línea de distribuidor',
        title: 'Línea de RIB de marca privada para un distribuidor europeo',
        body: 'Un distribuidor náutico consolidado lanzó su propia línea de RIB: desarrollo ODM de tres tamaños de fibra de vidrio, utillaje dedicado y una primera tirada de 60 botes verificada en arte y retención de presión antes del escalado — con diseños y utillaje en propiedad del distribuidor.',
        hue: 210,
        image: 'https://neptunor.com/assets/images/boats/factory/neptunor-dealer-line-production.webp',
      },
    ],
  },
}
/* ─────────────────────────── buyer's guides (home) ─────────────────────────── */

export interface GuideLink {
  title: string
  body: string
  href: string
}

export interface GuidesContent {
  kicker: string
  title: string
  sub: string
  guides: GuideLink[]
}

export const guides: Localized<GuidesContent> = {
  en: {
    kicker: "Buyer's Guides",
    title: 'Manufacturing Guides',
    sub: 'The questions every boat brand asks before ordering — answered in plain language, with our real terms.',
    guides: [
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new boat brands.',
        href: '/oem-onboarding-guide',
      },
      {
        title: 'OEM Boat MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/oem-boat-moq',
      },
      {
        title: 'CE Certification for RIB & Inflatable Boats',
        body: 'What CE really covers under the Recreational Craft Directive, the documents to demand, and how design categories C and D are assigned.',
        href: '/research/ce-certification-guide',
      },
    ],
  },
  es: {
    kicker: 'Guías del comprador',
    title: 'Guías de fabricación',
    sub: 'Las preguntas que toda marca náutica hace antes de pedir — respondidas con claridad y con nuestras condiciones reales.',
    guides: [
      {
        title: 'Marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas náuticas.',
        href: '/oem-onboarding-guide',
      },
      {
        title: 'MOQ y precios OEM de embarcaciones',
        body: 'Niveles de MOQ desde 1–2 muestras hasta series de 90–100+ unidades, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/oem-boat-moq',
      },
      {
        title: 'Certificación CE para RIB e inflables',
        body: 'Qué cubre realmente el CE según la Directiva de Embarcaciones Deportivas, los documentos que debes exigir y cómo se asignan las categorías de diseño C y D.',
        href: '/research/ce-certification-guide',
      },
    ],
  },
}

/* ─────────────────────── manufacturing guides (knowledge) ─────────────────────── */

export const manufacturingGuides: Localized<GuidesContent> = {
  en: {
    kicker: 'Manufacturing Guides',
    title: 'From Factory to Finished Boat',
    sub: 'The complete sourcing library — every stage of a custom boat program with our real lead times, terms and documentation.',
    guides: [
      {
        title: 'How to Choose a Boat OEM Manufacturer',
        body: 'The audit questions that separate a real factory from a trader: certifications, QC, samples and ownership.',
        href: '/factory-audit-checklist',
      },
      {
        title: 'Boat Product Development Timeline',
        body: 'Samples in 10–15 days, production in 30–45 days, tooling plus 20–35 — the full calendar, stage by stage.',
        href: '/odm-development',
      },
      {
        title: 'Information to Prepare Before Ordering',
        body: 'The five details that let a factory quote accurately on the first pass — and avoid spec rework.',
        href: '/product-development',
      },
      {
        title: 'PVC vs Hypalon®: Choosing Tube Fabric',
        body: 'Cost, weldability, UV and fuel resistance compared — how we help you pick the right tube material for your climate and service life.',
        href: '/research/pvc-vs-hypalon',
      },
      {
        title: 'OEM Boat MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/oem-boat-moq',
      },
      {
        title: 'CE Certification for RIB & Inflatable Boats',
        body: 'What CE really covers under the Recreational Craft Directive, the documents to demand, and how design categories C and D are assigned.',
        href: '/inflatable-boat-certification',
      },
    ],
  },
  es: {
    kicker: 'Guías de fabricación',
    title: 'De la fábrica al bote terminado',
    sub: 'La biblioteca completa de abastecimiento — cada etapa de un programa de embarcaciones a medida con nuestros plazos, condiciones y documentación reales.',
    guides: [
      {
        title: 'Cómo elegir un fabricante OEM de embarcaciones',
        body: 'Las preguntas de auditoría que separan una fábrica real de un intermediario: certificaciones, control de calidad, muestras y propiedad.',
        href: '/factory-audit-checklist',
      },
      {
        title: 'Calendario de desarrollo de producto náutico',
        body: 'Muestras en 10–15 días, producción en 30–45 días, utillaje más 20–35 — el calendario completo, etapa por etapa.',
        href: '/odm-development',
      },
      {
        title: 'Información para preparar antes de pedir',
        body: 'Los cinco detalles que permiten a una fábrica cotizar con precisión a la primera — y evitar rehacer la especificación.',
        href: '/product-development',
      },
      {
        title: 'PVC vs Hypalon®: elegir el tejido del tubo',
        body: 'Coste, soldabilidad y resistencia a UV y combustible comparadas — cómo te ayudamos a elegir el material adecuado para tu clima y vida útil.',
        href: '/research/pvc-vs-hypalon',
      },
      {
        title: 'MOQ y precios OEM de embarcaciones',
        body: 'Niveles de MOQ desde 1–2 muestras hasta series de 90–100+ unidades, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/oem-boat-moq',
      },
      {
        title: 'Certificación CE para RIB e inflables',
        body: 'Qué cubre realmente el CE según la Directiva de Embarcaciones Deportivas, los documentos que debes exigir y cómo se asignan las categorías de diseño C y D.',
        href: '/inflatable-boat-certification',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Manufacturing FAQ',
    sub: 'Questions buyers ask before placing an order — answered with our actual terms.',
    items: [
      {
        q: 'What does Neptunor manufacture?',
        a: 'Neptunor (Neptunor Marine Co., Ltd.) is a professional RIB and inflatable boat manufacturer specializing in customized rigid inflatable boats and inflatables for global brands, dealers and professional buyers — engineered, sampled and produced in our own 18,000 m² plant in Qingdao, China, with 60,000+ boats produced annually.',
      },
      {
        q: 'What is the difference between OEM and ODM?',
        a: `OEM: we manufacture to your approved specification — your drawings, dimensions, materials and packaging. You own the design and intellectual property. ODM: our engineering team develops the hull, tube set, console and graphics from your brief — whether a market concept, performance target or adaptation of a proven platform — and you approve before production. Private label puts your brand on an existing validated hull with no structural changes. Both routes run through the same plant, QC system and export team; ODM is the fastest route to a branded boat line, starting at ${MOQ_SHORT.standardRun} with samples in ${FACTS.sampleTime}.`,
      },
      {
        q: 'What is your minimum order quantity?',
        a: `Samples run at 1–2 units; co-branding small bulk starts at 5–10 units on selected platforms; pilot batches from 20–50 units. Standard volume production starts at ${MOQ_SHORT.standardRun}. New hull or console tooling runs at 50–100+ units and adds 20–35 days.`,
      },
      {
        q: 'How long does production take?',
        a: 'Production takes 30–45 days from confirmed PO and deposit. New hull or console tooling adds 20–35 days. Samples typically ship within 10–15 days of approved specification and artwork.',
      },
      {
        q: 'How fast can I get a sample?',
        a: 'Prototype samples typically ship within 10–15 days of approved artwork and specification.',
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management; CE conformity under the EU Recreational Craft Directive 2013/53/EU for models destined for EU markets, with design category (C or D) confirmed per project; ISO 6185 inflatable-boat safety compliance; and valid BSCI social-compliance certification with the audit report available on request. REACH and RoHS documentation ships with every order.',
      },
      {
        q: 'What do CE design categories C and D mean?',
        a: 'Design categories classify the conditions a boat is certified for. Category C covers inshore coastal waters with winds up to Beaufort 6 and significant wave heights up to about 2 m; category D covers sheltered coastal and inland waters with occasional stronger gusts. We certify each model to the category its hull, stability and freeboard support, and the category is stated on the declaration of conformity.',
      },
      {
        q: 'Should I choose PVC or Hypalon® tubes?',
        a: 'PVC tubes are more economical, can be RF-welded into airtight seams and come in many colors — ideal for most retail and rental programs. Hypalon® (CR rubber) offers superior resistance to UV, fuel and abrasion for long-life professional fleets, assembled with thermal welding. We advise based on budget, climate and expected service life, and both materials are REACH/RoHS compliant.',
      },
      {
        q: 'Aluminum or fiberglass hull — which should I build on?',
        a: 'Aluminum hulls are lighter, impact-tolerant and low-maintenance — ideal for workboats, tenders and beach landings. Fiberglass (GRP) hulls give a softer dry ride, sharper design lines and lower unit cost at volume — ideal for dealer programs, charter and family recreation. Both are fabricated in-house on dedicated jigs, and either can carry your private label.',
      },
      {
        q: 'How do you test for leaks?',
        a: 'Every tube chamber is inflated to 0.35 bar working pressure and held for 24 hours with continuous sensor logging. Any chamber dropping more than 0.02 bar over 24 hours is automatically rejected and returned for seam re-inspection before it can enter assembly.',
      },
      {
        q: 'Do you handle export documentation and shipping?',
        a: 'Yes. Commercial invoice, packing list, certificate of origin and the CE declaration of conformity are handled in-house, together with export-grade crating. We currently supply buyers in 40+ countries across the EU, US, AU and Asia.',
      },
      {
        q: 'Will my design be shown to other clients?',
        a: 'No. Artwork, tooling and specification files remain your property. We sign an NDA within 4 business hours of request, before any file exchange, and we never reuse or resell client tooling or designs.',
      },
      {
        q: 'Do you sell your own boat brand?',
        a: 'No. We manufacture exclusively B2B under our clients’ brands. We do not sell to end consumers and we do not compete with our clients in any market.',
      },
      {
        q: 'Can you manufacture boats with our logo and livery?',
        a: 'Yes. Private label puts your brand, colors, livery graphics and packaging on a proven in-house platform with no tooling development and no structural changes — the fastest route from concept to delivery, starting from 5–10 units on selected platforms.',
      },
      {
        q: 'What information should I provide for an OEM inquiry?',
        a: 'The most useful information: product type and target market, hull preference (aluminum, fiberglass or fully inflatable), length and capacity, intended use, branding requirements, estimated quantity, packaging requirements and launch schedule. Our team returns an engineering assessment and quotation within one business day.',
      },
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Qué fabrica Neptunor?',
        a: 'Neptunor (Neptunor Marine Co., Ltd.) es un fabricante profesional de botes RIB e inflables especializado en embarcaciones semirrígidas e inflables personalizadas para marcas globales, distribuidores y compradores profesionales — diseñadas, muestreadas y producidas en nuestra propia planta de 18.000 m² en Qingdao, China, con más de 60.000 botes producidos al año.',
      },
      {
        q: '¿Cuál es la diferencia entre OEM y ODM?',
        a: `OEM: fabricamos según tu especificación aprobada — planos, dimensiones, materiales y embalaje. Tú eres propietario del diseño y la propiedad intelectual. ODM: nuestro equipo de ingeniería desarrolla el casco, el juego de tubos, la consola y los gráficos a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de una plataforma probada — y tú apruebas antes de la producción. Marca privada pone tu marca sobre un casco validado existente sin cambios estructurales. Ambas rutas pasan por la misma planta, el mismo sistema de QC y el mismo equipo de exportación; ODM es la vía más rápida hacia una línea con tu marca, desde 90–100+ uds. por configuración aprobada y con muestras en 10–15 días.`,
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: 'Las muestras van de 1–2 unidades; el co-branding en pequeño lote parte de 5–10 unidades sobre plataformas seleccionadas; los lotes piloto, de 20–50 unidades. La producción de volumen estándar parte de 90–100+ unidades por configuración aprobada. El utillaje nuevo de casco o consola exige 50–100+ unidades y añade 20–35 días.',
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: 'La producción tarda 30–45 días desde el PO confirmado y el depósito. El utillaje nuevo de casco o consola añade 20–35 días. Las muestras suelen salir entre 10 y 15 días tras aprobar especificación y arte.',
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: 'Las muestras de prototipo salen entre 10 y 15 días tras la aprobación del arte y la especificación.',
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para la gestión de calidad; conformidad CE según la Directiva Europea de Embarcaciones Deportivas 2013/53/EU para modelos destinados al mercado de la UE, con categoría de diseño (C o D) confirmada por proyecto; cumplimiento de seguridad ISO 6185 para botes inflables; y certificación BSCI válida de cumplimiento social con informe de auditoría disponible. La documentación REACH y RoHS se entrega con cada pedido.',
      },
      {
        q: '¿Qué significan las categorías de diseño C y D del CE?',
        a: 'Las categorías de diseño clasifican las condiciones para las que se certifica una embarcación. La categoría C cubre aguas costeras próximas con viento hasta fuerza 6 Beaufort y olas significativas de hasta unos 2 m; la categoría D cubre aguas costeras abrigadas e interiores con rachas ocasionales más fuertes. Certificamos cada modelo en la categoría que su casco, estabilidad y obra viva permiten, y la categoría figura en la declaración de conformidad.',
      },
      {
        q: '¿Qué me conviene: tubos de PVC o Hypalon®?',
        a: 'Los tubos de PVC son más económicos, se sueldan por RF con juntas herméticas y ofrecen muchos colores — ideales para la mayoría de programas de retail y alquiler. El Hypalon® (caucho CR) ofrece mayor resistencia a UV, combustible y abrasión para flotas profesionales de larga vida útil, ensamblado con soldadura térmica. Asesoramos según presupuesto, clima y vida útil esperada; ambos materiales cumplen REACH/RoHS.',
      },
      {
        q: '¿Casco de aluminio o de fibra de vidrio?',
        a: 'Los cascos de aluminio son más ligeros, tolerantes a impactos y de bajo mantenimiento — ideales para embarcaciones de trabajo, tenders y varadas en playa. Los de fibra de vidrio (PRFV) ofrecen una navegación más seca y suave, líneas de diseño más afiladas y menor coste unitario en volumen — ideales para programas de distribuidores, chárter y recreo familiar. Ambos se fabrican en casa sobre utillajes dedicados y admiten tu marca privada.',
      },
      {
        q: '¿Cómo comprobáis las fugas?',
        a: 'Cada cámara se infla a la presión de trabajo de 0,35 bar y se mantiene durante 24 horas con registro continuo de sensores. Toda cámara que caiga más de 0,02 bar en 24 horas se rechaza automáticamente y vuelve a revisar las costuras antes de entrar en montaje.',
      },
      {
        q: '¿Gestionáis la documentación de exportación y el envío?',
        a: 'Sí. Factura comercial, lista de embalaje, certificado de origen y la declaración de conformidad CE se gestionan en casa, junto con embalaje enjaulado para exportación. Actualmente suministramos a compradores en más de 40 países de la UE, EE. UU., Australia y Asia.',
      },
      {
        q: '¿Mostraréis mi diseño a otros clientes?',
        a: 'No. Los archivos de arte, utillaje y especificaciones siguen siendo de tu propiedad. Firmamos un NDA dentro de las 4 horas laborables siguientes a la solicitud, antes de cualquier intercambio de archivos, y nunca reutilizamos ni vendemos utillajes o diseños de clientes.',
      },
      {
        q: '¿Vendéis vuestra propia marca de embarcaciones?',
        a: 'No. Fabricamos exclusivamente bajo las marcas de nuestros clientes, solo B2B. No vendemos a consumidores finales y no competimos con nuestros clientes en ningún mercado.',
      },
      {
        q: '¿Podéis fabricar embarcaciones con nuestro logotipo y libré?',
        a: 'Sí. La marca privada pone tu marca, colores, libré y packaging sobre una plataforma probada existente sin desarrollo de utillaje ni cambios estructurales — la vía más rápida del concepto a la entrega, desde 5–10 unidades en plataformas seleccionadas.',
      },
      {
        q: '¿Qué información debo dar en una consulta OEM?',
        a: 'La información más útil: tipo de producto y mercado objetivo, preferencia de casco (aluminio, fibra de vidrio o totalmente inflable), eslora y capacidad, uso previsto, requisitos de marca, cantidad estimada, requisitos de embalaje y fecha de lanzamiento. Nuestro equipo responde con una evaluación de ingeniería y un presupuesto en un día laborable.',
      },
    ],
  },
}

export const homeFaq: Localized<FaqContent> = {
  en: {
    kicker: faq.en.kicker,
    title: faq.en.title,
    sub: faq.en.sub,
    items: [
      faq.en.items[2],
      faq.en.items[3],
      faq.en.items[6],
      faq.en.items[7],
      {
        q: 'Can buyers audit the factory or use third-party inspection?',
        a: 'Yes. We welcome buyer audits and work regularly with SGS, TÜV, BV and Intertek. Third-party inspection can be arranged at any production stage — incoming material, in-process or final survey — and inspection reports are provided on request.',
      },
    ],
  },
  es: {
    kicker: faq.es.kicker,
    title: faq.es.title,
    sub: faq.es.sub,
    items: [
      faq.es.items[2],
      faq.es.items[3],
      faq.es.items[6],
      faq.es.items[7],
      {
        q: '¿Pueden los compradores auditar la fábrica o usar inspección de terceros?',
        a: 'Sí. Aceptamos auditorías de compradores y trabajamos regularmente con SGS, TÜV, BV e Intertek. La inspección de terceros puede organizarse en cualquier etapa de producción — material entrante, en proceso o inspección final — y los informes de inspección se proporcionan a petición.',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Ready to Start Your Boat Project?',
    body: "Whether you already have a complete product specification or are still developing your concept, our team can help you evaluate the next step. Tell us what you want to build — we'll review your requirements and discuss the most practical path from concept to production.",
    button: 'Start Your Boat Project',
    note: 'Reply within 1 business day · NDA signed within 4 business hours · info@neptunor.com · +86 186 0000 0000',
  },
  es: {
    title: '¿Listo para iniciar tu proyecto náutico?',
    body: 'Ya sea que tengas una especificación de producto completa o estés todavía desarrollando tu concepto, nuestro equipo puede ayudarte a evaluar el siguiente paso. Cuéntanos qué quieres construir — revisaremos tus requisitos y plantearemos la vía más práctica del concepto a la producción.',
    button: 'Inicia tu proyecto náutico',
    note: 'Respuesta en 1 día laborable · NDA firmado en 4 horas laborables · info@neptunor.com · +86 186 0000 0000',
  },
}
/* ─────────────────────────── home: value proposition (More Than a Boat Factory) ─────────────────────────── */

export interface ValuePropCard {
  title: string
  body: string
}

export interface ValuePropContent {
  kicker: string
  title: string
  sub: string
  cards: ValuePropCard[]
}

export const valueProp: Localized<ValuePropContent> = {
  en: {
    kicker: 'Our Role',
    title: 'More Than a Boat Factory',
    sub: 'Many manufacturers can produce a standard hull. Our role is different. Neptunor is a custom RIB and inflatable boat development and manufacturing partner, helping businesses move from an initial idea to a production-ready boat.',
    cards: [
      {
        title: 'Product Development',
        body: 'Turn your concept, sketches, specifications or market requirements into a manufacturable boat.',
      },
      {
        title: 'Custom Manufacturing',
        body: 'Customize hull material, dimensions, tubes, console, graphics, colors, fittings and packaging according to your requirements.',
      },
      {
        title: 'Prototype Development',
        body: 'Evaluate the product before committing to mass production through sample development and testing.',
      },
      {
        title: 'Production Support',
        body: 'Once the design is approved, we manage the transition from prototype to repeatable mass production.',
      },
      {
        title: 'Quality Control',
        body: 'Node 01–07 quality gates throughout production help ensure that finished boats meet the agreed specifications.',
      },
      {
        title: 'Global Supply',
        body: 'Support with export crating and documentation helps simplify the sourcing process for buyers in 40+ countries.',
      },
    ],
  },
  es: {
    kicker: 'Nuestro papel',
    title: 'Más que una fábrica de botes',
    sub: 'Muchos fabricantes pueden producir un casco estándar. Nuestro papel es distinto. Neptunor es un socio de desarrollo y fabricación de RIB e inflables personalizados que ayuda a las empresas a pasar de la idea inicial a una embarcación lista para producir.',
    cards: [
      {
        title: 'Desarrollo de producto',
        body: 'Convierte tu concepto, bocetos, especificaciones o requisitos de mercado en una embarcación fabricable.',
      },
      {
        title: 'Fabricación personalizada',
        body: 'Personaliza material del casco, dimensiones, tubos, consola, gráficos, colores, equipamiento y embalaje según tus requisitos.',
      },
      {
        title: 'Desarrollo de prototipos',
        body: 'Evalúa el producto antes de comprometerte con la producción en serie mediante muestras y pruebas.',
      },
      {
        title: 'Soporte de producción',
        body: 'Una vez aprobado el diseño, gestionamos la transición del prototipo a la producción en serie repetible.',
      },
      {
        title: 'Control de calidad',
        body: 'Las puertas de calidad Node 01–07 a lo largo de la producción aseguran que el bote final cumpla las especificaciones acordadas.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo con embalaje de exportación y documentación para simplificar el proceso de abastecimiento en más de 40 países.',
      },
    ],
  },
}

/* ─────────────────────────── home: role boundary (Where We Stop, You Start) ─────────────────────────── */

export interface BoundaryRow {
  ours: string
  theirs: string
}

export interface BoundaryContent {
  kicker: string
  title: string
  sub: string
  oursTitle: string
  theirsTitle: string
  rows: BoundaryRow[]
  footer: string
}

export const boundary: Localized<BoundaryContent> = {
  en: {
    kicker: 'Who We Are',
    title: 'Built by a Boat Factory, Not a Trading Platform',
    sub: 'We are a manufacturing partner, not a marketplace. Our role is to help customers turn ideas, designs and product requirements into manufacturable boats. You own your brand. You control your market. We support production execution.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Hull engineering, materials selection, console and hull tooling', theirs: 'Pricing, channels and sales' },
      { ours: 'Livery artwork prepress and print production from your brand files', theirs: 'Ownership of all brand and artwork files' },
      { ours: 'Prototyping, sampling and sample approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final survey', theirs: 'Your market, your customers, your data' },
      { ours: 'CE documentation and export-grade crating', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your artwork, tooling and specification files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Construido por una fábrica de botes, no por una plataforma comercial',
    sub: 'Somos un socio de fabricación, no un marketplace. Nuestro papel es ayudar a los clientes a convertir ideas, diseños y requisitos de producto en embarcaciones fabricables. Tú eres dueño de tu marca. Tú controlas tu mercado. Nosotros ejecutamos la producción.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Ingeniería de cascos, selección de materiales y utillaje de casco y consola', theirs: 'Precios, canales y ventas' },
      { ours: 'Preimpresión de libré e impresión desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y arte' },
      { ours: 'Prototipado, muestreo y documentación de aprobación de muestras', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación CE y embalaje de exportación', theirs: 'Relaciones con el cliente final y posventa' },
    ],
    footer:
      'Tus archivos de arte, utillaje y especificación siguen siendo de tu propiedad y nunca se reutilizan, revenden ni muestran a otro cliente.',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  strength: { title: string; body: string }[]
  partnering: { title: string; body: string[] }
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'About Neptunor',
    sub: 'Your Custom RIB & Inflatable Boat Manufacturing Partner',
    story: [
      'Neptunor Marine Co., Ltd. is an independent marine manufacturer based in Qingdao, Shandong, China, focused exclusively on OEM/ODM and private-label production of RIB boats and inflatable boats. From our 18,000 m² plant — four specialized workshops and four automated lines staffed by 300+ workers — we build more than 60,000 boats a year and export to 40+ countries.',
      'We built Neptunor around one kind of customer: brands, dealers and fleet buyers with a clear product vision but no in-house yard to build it. Tiered minimums from 5–10-unit co-branding runs, complete hull and tube engineering support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.',
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every boat passes the Node 01–07 quality gates — materials, hull construction, tube pressure holds, assembly and packing are checked before any batch ships.',
      },
      {
        title: 'Manufacturer, Not Middleman',
        body: 'Design, hull engineering, tooling, prototype, production and testing all happen under one roof — no trading-desk gap between you and the plant.',
      },
      {
        title: 'Flexible by Design',
        body: 'Tiered MOQs, modular options and honest lead times let brands grow from trial orders to container-scale volume runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Aluminum & fiberglass hulls', 'RF-welded tube sets', 'Sample service', '120-point QC', 'Export documentation'],
    stats: [
      { value: '90–100+ pcs', label: 'Standard volume MOQ (per approved configuration)' },
      { value: '10–15 days', label: 'Sample lead time' },
      { value: '30–45 days', label: 'Production lead time' },
      { value: '20–50 pcs', label: 'Pilot order MOQ' },
    ],
    strength: [
      {
        title: 'Product Development',
        body: 'From concept sketches to production drawings — our engineers refine hull lines, deadrise, tube layout and chamber count to hit your target performance and price.',
      },
      {
        title: 'OEM Manufacturing',
        body: 'Build your exact specification: hull material, colors, livery placement, console, fittings and packaging, in standard volume batches from 90–100+ pcs per approved configuration.',
      },
      {
        title: 'ODM Solutions',
        body: 'Start from our proven in-house platforms — aluminum RIBs, fiberglass RIBs, sport consoles, professional craft and dinghies — and customize branding, graphics and trim for a fast, low-risk launch.',
      },
      {
        title: 'Tooling & Engineering Support',
        body: 'Hull jigs, console molds and tube welding fixtures engineered in-house, with visual proofs and artwork approvals at every milestone before mass production.',
      },
      {
        title: 'Quality Management',
        body: 'Seven quality gates across materials, hull construction, pressure holds, assembly and packing, plus on-sample and pre-shipment inspections you can book as a third party.',
      },
      {
        title: 'Global Delivery',
        body: 'Export documentation, export-grade crating and in-house logistics support for brands, dealers and fleets in 40+ markets.',
      },
    ],
    partnering: {
      title: 'Partnering With Global Businesses',
      body: [
        'Neptunor works with boat brands, dealers, marinas, resorts, rental operators and rescue organizations that need a reliable RIB and inflatable boat factory — from a first trial order to container-scale fleet programs.',
        'Tell us your market and target price, and we respond with a spec sheet, MOQ and lead times for your specific business model.',
      ],
    },
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'Sobre Neptunor',
    sub: 'Tu socio de fabricación de RIB e inflables a medida',
    story: [
      'Neptunor Marine Co., Ltd. es un fabricante naval independiente con sede en Qingdao, provincia de Shandong, China, centrado exclusivamente en la producción OEM/ODM y de marca privada de botes RIB e inflables. Desde nuestra planta de 18.000 m² — cuatro talleres especializados y cuatro líneas automatizadas con más de 300 trabajadores — construimos más de 60.000 botes al año y exportamos a más de 40 países.',
      'Construimos Neptunor pensando en un tipo de cliente: marcas, distribuidores y compradores de flota con una visión de producto clara pero sin astillero propio. Pedidos mínimos por tramos desde 5–10 unidades de co-branding, soporte completo de ingeniería de cascos y tubos, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada bote supera las puertas de calidad Node 01–07: material, construcción del casco, pruebas de presión de tubos, montaje y embalaje se revisan antes de que cualquier lote salga de planta.',
      },
      {
        title: 'Fabricante, no intermediario',
        body: 'Diseño, ingeniería de cascos, utillajes, prototipos, producción y ensayos ocurren bajo el mismo techo: sin mesas de negociación entre tú y la planta.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ por tramos, opciones modulares y plazos reales permiten crecer del pedido de prueba a series por volumen de contenedor completo.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'Cascos de aluminio y fibra de vidrio', 'Juegos de tubos soldados por RF', 'Servicio de muestras', 'QC de 120 puntos', 'Documentación de exportación'],
    stats: [
      { value: '90–100+ uds.', label: 'MOQ de volumen estándar (por configuración aprobada)' },
      { value: '10–15 días', label: 'Plazo de muestras' },
      { value: '30–45 días', label: 'Plazo de producción' },
      { value: '20–50 uds.', label: 'MOQ de pedido piloto' },
    ],
    strength: [
      {
        title: 'Desarrollo de producto',
        body: 'Del boceto al plano de producción — nuestros ingenieros afinan líneas de casco, ángulo muerto, configuración de tubos y número de cámaras para alcanzar tu rendimiento y precio objetivo.',
      },
      {
        title: 'Fabricación OEM',
        body: 'Construimos tu especificación exacta: material del casco, colores, colocación de libré, consola, equipamiento y embalaje, en lotes de volumen estándar a partir de 90–100+ uds. por configuración aprobada.',
      },
      {
        title: 'Soluciones ODM',
        body: 'Parte de nuestras plataformas probadas — RIB de aluminio, RIB de fibra de vidrio, deportivas a consola, embarcaciones profesionales y neumáticas — y personaliza marca, gráficos y acabados para un lanzamiento rápido y de bajo riesgo.',
      },
      {
        title: 'Utillajes y soporte de ingeniería',
        body: 'Utillajes de casco, moldes de consola y fijaciones de soldadura de tubos diseñados en casa, con pruebas visuales y aprobaciones de arte en cada hito antes de la producción en serie.',
      },
      {
        title: 'Gestión de calidad',
        body: 'Siete puertas de calidad en materiales, construcción del casco, pruebas de presión, montaje y embalaje, más inspecciones sobre muestra y previas al envío que puedes contratar como tercero.',
      },
      {
        title: 'Entrega global',
        body: 'Documentación de exportación, embalaje enjaulado y soporte logístico interno para marcas, distribuidores y flotas en más de 40 mercados.',
      },
    ],
    partnering: {
      title: 'Colaboramos con empresas de todo el mundo',
      body: [
        'Neptunor trabaja con marcas náuticas, distribuidores, marinas, resorts, operadores de alquiler y organismos de rescate que necesitan una fábrica fiable de RIB e inflables — desde el primer pedido de prueba hasta programas de flota por contenedor.',
        'Cuéntanos tu mercado y tu precio objetivo, y te responderemos con una ficha de especificaciones, MOQ y plazos para tu modelo de negocio.',
      ],
    },
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  mockupBrand: string
  stepLabel: string
  boardLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your Boat',
    title: 'Visualize Your Boat Concept Before Production',
    sub: 'Preview how your brand will look on a real hull — pick a color scheme, watch the mockup update live, then send us your logo for a full design.',
    status: 'Interactive Preview',
    statusBody: 'Try the palette now, then send us your idea — our team will create a free mockup of your full design.',
    steps: [
      { title: 'Choose a boat model', body: 'From compact tenders to aluminum and fiberglass RIB platforms — each with realistic proportions.' },
      { title: 'Select colors', body: 'Pick your hull and tube palette and watch the mockup change instantly.' },
      { title: 'Upload logo', body: 'Place your logo and livery artwork on the hull sides and console — adjust size and position.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom boat to share with your team.' },
    ],
    mockupLabel: 'Live mockup preview',
    mockupBrand: 'Neptunor Alloy 430',
    stepLabel: 'Step',
    boardLabel: 'YOUR BRAND',
    cta: 'Create Your Design',
  },
  es: {
    kicker: 'Diseña tu embarcación',
    title: 'Visualiza tu concepto náutico antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca sobre un casco real: elige una combinación de colores, observa cómo se actualiza el mockup en vivo y envíanos tu logo para un diseño completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba la paleta ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu diseño completo.',
    steps: [
      { title: 'Elige un modelo', body: 'Desde tenders compactos a plataformas RIB de aluminio y fibra de vidrio, cada una con proporciones realistas.' },
      { title: 'Selecciona colores', body: 'Elige la paleta de casco y tubos y observa cómo cambia el mockup al instante.' },
      { title: 'Sube tu logo', body: 'Coloca tu logo y tu libré en los costados del casco y la consola: ajusta tamaño y posición.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu embarcación personalizada para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa del mockup en vivo',
    mockupBrand: 'Neptunor Alloy 430',
    stepLabel: 'Paso',
    boardLabel: 'TU MARCA',
    cta: 'Crea tu diseño',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Boat Platforms',
    title: 'RIB & Inflatable Boat Platforms Available For Customization',
    sub: 'Each model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the hull, tubes, graphics, colors and specs to your program.',
    customTitle: 'Every Boat Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each boat is built for you with your choices at every layer.',
    customPoints: ['Hull material & length', 'Tube fabric & chamber layout', 'Console layout & fittings', 'Colors, graphics & packaging'],
  },
  es: {
    kicker: 'Plataformas náuticas',
    title: 'Plataformas de RIB e inflables disponibles para personalización',
    sub: 'Cada modelo de abajo es una plataforma de fabricación. Elige uno como punto de partida y adaptaremos el casco, los tubos, los gráficos, los colores y las especificaciones a tu programa.',
    customTitle: 'Cada embarcación se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada bote se construye para ti con tus elecciones en cada capa.',
    customPoints: ['Material del casco y eslora', 'Tejido del tubo y disposición de cámaras', 'Consola y equipamiento', 'Colores, gráficos y embalaje'],
  },
}

/* ─────────────────────────── catalog download (email capture) ─────────────────────────── */

export interface CatalogContent {
  kicker: string
  title: string
  body: string
  emailLabel: string
  emailPlaceholder: string
  submit: string
  secure: string
  successTitle: string
  successBody: string
}

export const catalogDownload: Localized<CatalogContent> = {
  en: {
    kicker: 'Product Catalog',
    title: 'Get the full catalog and MOQ sheet',
    body: 'All five series and thirteen models with specs, MOQ tiers, sample timing and packaging — sent to your inbox by our sales team within one business day.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourcompany.com',
    submit: 'Request the Catalog',
    secure: 'No spam. Only the catalog and answers to your project.',
    successTitle: 'Request received',
    successBody: 'Our sales team will send the full product catalog and MOQ sheet to {email} within one business day.',
  },
  es: {
    kicker: 'Catálogo de productos',
    title: 'Recibe el catálogo completo y la ficha de MOQ',
    body: 'Las cinco series y los trece modelos con especificaciones, tramos de MOQ, tiempos de muestreo y embalaje — enviados a tu correo por nuestro equipo comercial en un día laborable.',
    emailLabel: 'Correo de trabajo',
    emailPlaceholder: 'tu@tuempresa.com',
    submit: 'Solicitar el catálogo',
    secure: 'Sin spam. Solo el catálogo y respuestas sobre tu proyecto.',
    successTitle: 'Solicitud recibida',
    successBody: 'Nuestro equipo comercial enviará el catálogo completo y la ficha de MOQ a {email} en un día laborable.',
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Customized Boat Programs',
    title: 'Customized Boat Programs',
    sub: 'A look at how RIB and inflatable boat programs come to life — from client requirements to finished hulls.',
    note: 'Want your program featured here? Start a conversation and let’s design it together.',
  },
  es: {
    kicker: 'Programas náuticos personalizados',
    title: 'Programas náuticos personalizados',
    sub: 'Una mirada a cómo cobran vida los programas de RIB e inflables: de los requisitos del cliente a los cascos terminados.',
    note: '¿Quieres que tu programa aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'Custom Boat Solutions For Your Business',
    sub: 'Whether you need branded boats for your organization or customized RIB and inflatable programs for your business, we help turn requirements into finished products.',
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones náuticas personalizadas para tu negocio',
    sub: 'Ya sea que necesites embarcaciones con marca para tu organización o programas de RIB e inflables personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
  },
}

/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Boat',
    sub: 'Requirement intake, engineering review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your specification, a reference hull or drawings. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al bote terminado',
    sub: 'Recepción de requisitos, revisión de ingeniería, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, un casco de referencia o planos. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
}

/* ─────────────────────────── signature series (home) ─────────────────────────── */

export interface SeriesItem {
  title: string
  sku: string
  body: string
  image: string
  href: string
}

export interface SeriesContent {
  kicker: string
  title: string
  sub: string
  items: SeriesItem[]
}

export const series: Localized<SeriesContent> = {
  en: {
    kicker: 'Signature Series',
    title: 'Five Platforms, One Factory',
    sub: 'From 2.7 m tenders to 6.4 m patrol hulls — every series is a manufacturing platform ready for your private label.',
    items: [
      {
        title: 'Aluminum Hull RIBs',
        sku: 'NRB-A360',
        body: 'Press-formed, welded marine-alloy hulls from 3.6 to 4.7 m — low maintenance, high payload and garage-friendly towing weights for work, patrol and tender duty.',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif',
        href: '/products/rib-alloy-360',
      },
      {
        title: 'Fiberglass Hull RIBs',
        sku: 'NRB-G380',
        body: 'Deep-V GRP hulls from 3.8 to 6.4 m laminated in-house — a soft dry ride, sharp design lines and dealer-friendly price points.',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif',
        href: '/products/rib-glass-380',
      },
      {
        title: 'Sport & Console Boats',
        sku: 'NRT-W450',
        body: 'Console sport boats tuned for watersports and fast coastal runs, with stepped decks, ski tow points and premium trim options.',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif',
        href: '/products/sport-wave-450',
      },
      {
        title: 'Rescue & Professional Boats',
        sku: 'NRR-RG470',
        body: 'Mission-ready platforms for rescue, patrol and dive teams — reinforcement zones, mission racks and complete CE documentation for procurement files.',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif',
        href: '/products/rescue-guard-470',
      },
      {
        title: 'Inflatable Dinghies & Tenders',
        sku: 'NRD-T270',
        body: 'Compact, lightweight inflatables from 2.7 m — yacht tenders, campground runabouts and easy-stow utility craft that roll into a bag.',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif',
        href: '/products/airtender-270',
      },
    ],
  },
  es: {
    kicker: 'Serie insignia',
    title: 'Cinco plataformas, una fábrica',
    sub: 'De tenders de 2,7 m a cascos de patrulla de 6,4 m — cada serie es una plataforma de fabricación lista para tu marca privada.',
    items: [
      {
        title: 'RIB de aluminio',
        sku: 'NRB-A360',
        body: 'Cascos de aleación marina conformados y soldados de 3,6 a 4,7 m — bajo mantenimiento, gran carga y pesos de remolque aptos para garaje en trabajo, patrulla y servicio de tender.',
        image: 'https://neptunor.com/assets/products/2026/aluminum-rib/rib-alloy-360-01.avif',
        href: '/products/rib-alloy-360',
      },
      {
        title: 'RIB de fibra de vidrio',
        sku: 'NRB-G380',
        body: 'Cascos profundos en V de PRFV de 3,8 a 6,4 m laminados en casa — navegación seca y suave, líneas afiladas y precios amables para distribuidores.',
        image: 'https://neptunor.com/assets/products/2026/fiberglass-rib/rib-glass-380-01.avif',
        href: '/products/rib-glass-380',
      },
      {
        title: 'Deportivas y consola',
        sku: 'NRT-W450',
        body: 'Embarcaciones deportivas a consola afinadas para deportes náuticos y salidas costeras rápidas, con popas escalonadas, remolques de esquí y acabados premium.',
        image: 'https://neptunor.com/assets/products/2026/sport-console/sport-wave-450-01.avif',
        href: '/products/sport-wave-450',
      },
      {
        title: 'Embarcaciones de rescate y profesionales',
        sku: 'NRR-RG470',
        body: 'Plataformas listas para misión de rescate, patrulla y buceo — zonas reforzadas, bastidores de misión y documentación CE completa para expedientes de compra.',
        image: 'https://neptunor.com/assets/products/2026/rescue-pro/rescue-guard-470-01.avif',
        href: '/products/rescue-guard-470',
      },
      {
        title: 'Neumáticas y tenders',
        sku: 'NRD-T270',
        body: 'Inflables compactos y ligeros desde 2,7 m — tenders de yate, neumáticas de campamento y utilidades fáciles de estibar que caben enrolladas en una bolsa.',
        image: 'https://neptunor.com/assets/products/2026/inflatable-dinghy/airtender-270-01.avif',
        href: '/products/airtender-270',
      },
    ],
  },
}
