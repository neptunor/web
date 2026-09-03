/**
 * Site configuration – centralized business constants.
 *
 * 此文件仅作抽象层，不删减原有 `facts.ts` 与 `content.ts` 的任何导出。
 * 所有原有通过 `FACTS` / `hero` 导入的方式均可继续使用，本模块提供
 * 相同数据的只读视图，便于框架化与多站点派生。
 */
import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES, COLLABORATION_MODES } from './facts'

/** 从 facts.ts 导出的全部字段（逐一映射，防止任何遗漏） */
export const SITE_FACTS = {
  warehouseM2: FACTS.warehouseM2,
  workers: FACTS.workers,
  annualCapacity: FACTS.annualCapacity,
  moq: {
    trialStandard: MOQ_SHORT.trialStandard,
    standardRun: MOQ_SHORT.standardRun,
    customMould: MOQ_SHORT.customMould,
    existingPlatform: MOQ_SHORT.existingPlatform,
  },
  moqNote: FACTS.moqNote,
  moqExplanation: FACTS.moqExplanation,
  materialRollNote: FACTS.materialRollNote,
  collaborationModes: COLLABORATION_MODES,
  leadTime: FACTS.leadTime,
  leadTimeDetail: FACTS.leadTimeDetail,
  sampleTime: FACTS.sampleTime,
  cncAccuracy: FACTS.cncAccuracy,
  rfPower: FACTS.rfPower,
  dropStitchPsi: FACTS.dropStitchPsi,
  evaHardness: FACTS.evaHardness,
  assemblyChecklist: FACTS.assemblyChecklist,
  pressureTest: FACTS.pressureTest,
  pressureReject: FACTS.pressureReject,
  traceabilityRet: FACTS.traceabilityRet,
  certifications: CERTIFICATION_NAMES,
  exportCountries: FACTS.exportCountries,
  workshops: FACTS.workshops,
  productionLines: FACTS.productionLines,
  monthlyCapacity: FACTS.monthlyCapacity,
  ndaWindow: FACTS.ndaWindow,
  qualityGates: FACTS.qualityGates,
  thirdPartyInspectors: FACTS.thirdPartyInspectors,
  samplingStandard: FACTS.samplingStandard,
  peakSeason: FACTS.peakSeason,
  social: FACTS.social,
  contact: FACTS.contact,
  boilerplate: FACTS.boilerplate,
  tagline: FACTS.tagline,
  taglineEs: FACTS.taglineEs,
  notRob: FACTS.notRob,
}

/** 从 content.ts hero 区块导出的全部字段 */
export const HERO_CONTENT = {
  en: {
    kicker: 'Qingdao, China Factory · OEM / ODM / Private Label · Samples to Batch Production',
    titlePre: 'RIB & Inflatable Boat OEM/ODM Manufacturer for',
    titleAccent: 'Brands, Distributors & Commercial Fleets',
    titlePost: '',
    sub: 'Factory-direct manufacturing for marine brands, distributors, resorts and commercial operators — from specification review and sampling to quality-controlled batch production and export documentation.',
    ctaPrimary: 'Request an OEM/ODM Quote',
    ctaSecondary: 'Download B2B Product Catalog',
    ctaTertiary: 'Schedule a Factory Video Tour',
    ctaQuartiary: '',
    ctaMicro: 'Reply within 1 business day · NDA support before file exchange · MOQ confirmed after specification review',
    stats: [
      { value: '18,000 m²', label: 'In-house factory — Qingdao, China' },
      { value: '60,000+', label: 'Boats produced annually' },
      { value: '40+', label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: "Alloy 430 RIB",
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote: FACTS.moqNote,
    float1: { value: '1–2 units', label: 'Sample & approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fábrica en Qingdao, China · OEM / ODM / Marca privada · Muestras a producción en serie',
    titlePre: 'Fabricante OEM/ODM de RIB y embarcaciones inflables para',
    titleAccent: 'marcas, distribuidores y flotas comerciales',
    titlePost: '',
    sub: 'Fabricación directa de fábrica para marcas náuticas, distribuidores, resorts y operadores comerciales — desde la revisión de especificaciones y las muestras hasta la producción por lotes y la documentación de exportación.',
    ctaPrimary: 'Solicitar presupuesto OEM/ODM',
    ctaSecondary: 'Descargar catálogo B2B',
    ctaTertiary: 'Programar visita virtual a fábrica',
    ctaQuartiary: '',
    ctaMicro: 'Respuesta en 1 día laborable · NDA antes de compartir archivos · MOQ confirmado tras revisar la especificación',
    stats: [
      { value: '18.000 m²', label: 'Fábrica propia — Qingdao, China' },
      { value: '60.000+', label: 'Botes producidos anualmente' },
      { value: '40+', label: 'Países de exportación' },
      { value: '4 horas laborables', label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: "RIB Alloy 430'",
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    heroNote: FACTS.moqNoteEs,
    float1: { value: '1–2 uds.', label: 'Muestra y aprobación (antes de compromiso de volumen)' },
    float2: { value: '30–45 días', label: 'Plazo de producción (tras PO)' },
  },
}

/** 供 Seo 模块使用的简化映射（仅读，不修改 PUBLIC_PATHS/HREFLANG/OG_*） */
export const siteConfig = {
  facts: SITE_FACTS,
  hero: HERO_CONTENT,
}

/**
 * 保持全局兼容：确保原有 import 仍然有效。
 * 此处仅作演示；实际使用时 seo.ts 可根据需要引入 siteConfig.facts / siteConfig.hero
 * 而非直接依赖 facts.ts / content.ts 的原始导出，以实现未来的框架化改动。
 */
export type { Locale } from '@/features/i18n/locale'