import type { Localized } from './content'
import { FACTS, MOQ_SHORT } from './facts'

/**
 * B2B procurement profiles for the series platform pages (/products/{series}).
 *
 * Backed by Neptunor Marine engineering & sourcing records (SPEC-CAT-2026-V1):
 * hull material, tube fabric, console options, capacity, certification
 * documents and buyer fit per series. MOQ / lead-time figures stay aligned
 * with FACTS (single source of truth); commercial wording follows the site's
 * RFQ triage guidance.
 */

export interface ProcurementRow {
  label: string
  value: string
}

export interface ProcurementProfile {
  bestFor: string
  sizes: string
  construction: string
  customization: string
  moq: string
  leadTime: string
  specRows: ProcurementRow[]
  keyQuestions: string[]
}

const allProcurementProfiles: Localized<Record<string, ProcurementProfile>> = {
  en: {
    'aluminum-rib': {
      bestFor: 'Rental fleets, marinas & resort operations',
      sizes: '3.6–4.7 m LOA · welded marine-grade alloy',
      construction: 'Welded aluminum hull + inflatable collar tubes',
      customization: 'Console type, tube fabric, deck layout, fleet livery & packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Rental fleets, marina operations, resort guest programs, dive schools' },
        { label: 'Hull material', value: 'Marine-grade aluminum alloy panels, CNC-cut and fully welded' },
        { label: 'Tube fabric', value: '1100 g/m² PVC standard · CSM (Hypalon®) upgrade option' },
        { label: 'Console options', value: 'Tiller, center console with windscreen, or jockey console' },
        { label: 'Certification documents', value: 'CE (RCD 2013/53/EU) cat C/D per model · ISO 6185 construction' },
        { label: 'Spares packages', value: 'Valves, repair kits, pumps and rubbing strake sections sized to fleet' },
        { label: 'Standard package', value: 'Oars or steering per config, pump, repair kit, user manual' },
      ],
      keyQuestions: [
        'Fleet size, rotation rate and storage conditions',
        'Hull length mix across the operation',
        'Console type and crew layout per duty',
        'Fleet branding level — logo overlay or full livery',
      ],
    },
    'fiberglass-rib': {
      bestFor: 'Distributors, dealers & retail boat ranges',
      sizes: '2.5–7.6 m LOA · 36 models · molded GRP hulls',
      construction: 'Molded fiberglass hull + inflatable collar tubes',
      customization: 'Gelcoat color matching, upholstery, console, graphics & retail packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Dealer networks, day-cruiser ranges, charter and guest operations' },
        { label: 'Hull material', value: 'Hand-laid fiberglass (GRP) with gelcoat finish, molded tooling' },
        { label: 'Tube fabric', value: 'PVC collar standard · CSM (Hypalon®) for premium lines' },
        { label: 'Console options', value: 'Center console with windscreen, jockey console, custom helm layouts' },
        { label: 'Certification documents', value: 'CE declaration of conformity per model · ISO 6185 references' },
        { label: 'Spares packages', value: 'Dealer start-up spares kit available with first order' },
        { label: 'Retail packaging', value: 'Printed cartons, labels and manuals localized per market' },
      ],
      keyQuestions: [
        'Target market segment and price tier',
        'Gelcoat colors and brand livery scope',
        'Model mix across the range (tender to day-cruiser)',
        'Retail packaging and manual localization needs',
      ],
    },
    'sport-console': {
      bestFor: 'Startup boat brands, premium rental tiers & lifestyle retailers',
      sizes: '4.5–5.5 m LOA · sport platforms',
      construction: 'Fiberglass sport hull + reinforced transom for outboard ratings',
      customization: 'Steering systems, seating layouts, tow points, graphics & trim packages',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Headline retail models, water-sports towing, premium fleet upsell' },
        { label: 'Hull material', value: 'Molded fiberglass sport hull with performance running surface' },
        { label: 'Tube fabric', value: 'Color-matched PVC collars; heavy-duty option for rental duty' },
        { label: 'Console options', value: 'Center console, jockey console, hydraulic or mechanical steering' },
        { label: 'Seating & tow', value: 'Single/double bench seats, bow cushions, tow points specified per model' },
        { label: 'Certification documents', value: 'CE (RCD 2013/53/EU) cat C/D per model · ISO 6185 construction' },
        { label: 'Spares packages', value: 'Valve, steering and upholstery spares matched to fleet usage' },
      ],
      keyQuestions: [
        'Brand positioning: retail headline or fleet upsell',
        'Engine rating range and transom preparation',
        'Seating layout and tow-point requirements',
        'Graphics package complexity and printing method',
      ],
    },
    'rescue-pro': {
      bestFor: 'Rescue services, patrol agencies & government programs',
      sizes: '4.2–6.0 m LOA · mission platforms',
      construction: 'Aluminum or fiberglass hull + heavy-duty collar, self-draining deck',
      customization: 'Mission consoles, electronics prep, certified lifting points, agency livery',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Search & rescue, harbor patrol, dive teams, professional duty cycles' },
        { label: 'Hull material', value: 'Welded aluminum or molded fiberglass, mission-reinforced' },
        { label: 'Tube fabric', value: 'Heavy-duty multi-chamber collars; CSM (Hypalon®) option for extreme climates' },
        { label: 'Console options', value: 'Mission consoles with chart-plotter/radar mounts; jockey positions' },
        { label: 'Mission fit-out', value: 'Rescue ladders, towing posts, certified lifting points, tank racks, oxygen brackets' },
        { label: 'Documentation', value: 'Documented QC file per hull (Node 01–07) · CE cat C/D · batch traceability' },
        { label: 'Spares packages', value: 'Program spares kits plus crew familiarization materials' },
      ],
      keyQuestions: [
        'Mission profile and operating conditions',
        'Electronics and fit-out list to lock at prototype',
        'Procurement documentation requirements',
        'Batch scheduling against operational readiness dates',
      ],
    },
    'inflatable-dinghy': {
      bestFor: 'Yacht tender programs & retail starter lines',
      sizes: '2.7–3.3 m LOA · light packable platforms',
      construction: 'Inflatable tubes + air-deck or slatted floor',
      customization: 'Package contents, tube colors, retail carton design, barcode/manual localization',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Yacht tenders, marina programs, entry-level retail lines' },
        { label: 'Floor types', value: 'High-pressure air-deck (light, packs flat) or slatted wood/aluminum floors' },
        { label: 'Tube fabric', value: 'PVC collars in standard or premium grades' },
        { label: 'Console options', value: 'Tiller-only layouts; bench seat standard across models' },
        { label: 'Certification documents', value: 'CE (RCD 2013/53/EU) cat D per model · ISO 6185 construction' },
        { label: 'Standard package', value: 'Bench seat, hand pump, aluminum oars, repair kit, carry bag, printed carton' },
        { label: 'Retail packaging', value: 'Printed cartons, barcodes and manual versions per destination market' },
      ],
      keyQuestions: [
        'Air-deck or slatted floor for the target price point',
        'Complete package contents vs trimmed budget versions',
        'Private-label branding depth on tubes and cartons',
        'Launch quantity and reorder cadence',
      ],
    },
    'inflatable-catamaran': {
      bestFor: 'Racing clubs, rescue agencies & fishing brands',
      sizes: '3.75–4.70 m LOA · twin-hull catamaran platforms',
      construction: 'Dual-sponson inflatable hulls + drop-stitch air floor',
      customization: 'Hull graphics, rod holder layout, rescue equipment mounts, open-bow configuration',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Racing, surf rescue, fast patrol, fishing, recreation' },
        { label: 'Hull design', value: 'Twin-hull catamaran, keel-less, aerodynamic air cushion' },
        { label: 'Tube fabric', value: 'PVC 1100 dtex standard · CSM/Hypalon premium' },
        { label: 'Floor options', value: 'High-pressure drop-stitch air deck (standard)' },
        { label: 'Certification documents', value: 'CE (RCD 2013/53/EU) cat C/D per model · ISO 6185' },
        { label: 'Styling collections', value: 'Solid, Two-Tone, Racing Stripes, Tactical Camo' },
      ],
      keyQuestions: [
        'Racing, rescue or fishing primary use case',
        'Open-bow vs closed-bow configuration',
        'Rescue equipment mounts and documentation requirements',
        'Styling collection and Pantone color matching',
      ],
    },
    'inflatable-kayak': {
      bestFor: 'Specialty retailers, tour operators & rental fleets',
      sizes: '3.35–3.65 m LOA · full drop-stitch or hybrid platforms',
      construction: 'Drop-stitch sidewalls (tour) or PVC tubes + drop-stitch floor (hybrid)',
      customization: 'Graphics, colorways, cockpit configuration, seat type, bungee layout',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Touring, recreation, rental fleets, expedition' },
        { label: 'Construction', value: 'Full drop-stitch (rigid touring) or hybrid tube + floor (rental comfort)' },
        { label: 'Tube fabric', value: 'PVC standard · CSM/Hypalon premium for UV environments' },
        { label: 'Valve type', value: 'High-pressure recessed valves with dust caps' },
        { label: 'Certification documents', value: 'ISO 6185 construction · CE per model' },
        { label: 'Accessories', value: 'High-back seats, bungee system, carry handles, repair kit' },
      ],
      keyQuestions: [
        'Full drop-stitch performance or hybrid comfort positioning',
        'Single or tandem seating configuration',
        'Rental-durable or premium retail finish',
        'Graphic theme and branding depth',
      ],
    },
    'inflatable-raft': {
      bestFor: 'River outfitters, expedition teams & private anglers',
      sizes: '3.80 m LOA · 5-chamber self-bailing platform',
      construction: 'Multi-chamber inflatable tubes + raised I-Beam self-bailing floor',
      customization: 'Colorway, frame mounts, floor upgrade, accessory rigging, rescue equipment',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Whitewater rafting, commercial outfitters, expedition, fly fishing' },
        { label: 'Floor system', value: 'Raised I-Beam self-bailing (standard) · drop-stitch air deck upgrade' },
        { label: 'Tube fabric', value: 'Heavy-duty PVC · CSM/Hypalon for extreme UV/salt environments' },
        { label: 'Frame compatibility', value: 'Aluminum fishing/rowing frame-ready perimeter tubes' },
        { label: 'Certification documents', value: 'ISO 6185 construction · CE per model' },
        { label: 'Colorways', value: 'Neon accent (commercial), Tactical/Desert (expedition), Tone-on-tone (premium)' },
      ],
      keyQuestions: [
        'Class III, IV or V rapid classification target',
        'Commercial high-turnover or private premium positioning',
        'Fishing frame integration and accessory requirements',
        'Colorway and anti-UV coating specifications',
      ],
    },
    'inflatable-accessories': {
      bestFor: 'Accessory brands, rental fleets & retail programs',
      sizes: 'Universal one-size seat · packs flat · 5–10 psi drop-stitch core',
      construction: 'High-pressure drop-stitch cushion + adjustable backrest · 4-point nylon webbing',
      customization: 'Brand colorways, webbing color, EVA texture, logo printing, retail packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Inflatable kayaks, SUPs, raft thwarts · aftermarket accessory' },
        { label: 'Core structure', value: 'Drop-stitch panels inflating to rigid pressure at 5–10 psi' },
        { label: 'Mounting', value: 'Universal 4-point nylon webbing + marine stainless snap hooks' },
        { label: 'Comfort surface', value: 'Diamond-grid EVA traction top · adjustable backrest' },
        { label: 'Fabric', value: 'Heavy-duty UV-resistant PVC · thermo-welded seams' },
        { label: 'Packaging', value: 'Retail carton or plain kraft · packs flat for low cubic shipping' },
      ],
      keyQuestions: [
        'Target fleet mix (kayaks, SUPs, rafts) and deck D-ring spacing',
        'Brand colorway and logo placement on seat and straps',
        'Retail packaging format and planned retail price tier',
        'Bundling strategy with kayak/SUP boat orders',
      ],
    },
  },
  es: {
    'aluminum-rib': {
      bestFor: 'Flotas de alquiler, marinas y operaciones de resort',
      sizes: '3,6–4,7 m de eslora · aleación naval soldada',
      construction: 'Casco de aluminio soldado + collares de tubo inflable',
      customization: 'Tipo de consola, tela del tubo, distribución de cubierta, librea de flota y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Flotas de alquiler, marinas, programas de resort y escuelas de buceo' },
        { label: 'Material del casco', value: 'Paneles de aleación de aluminio naval, corte CNC y soldadura completa' },
        { label: 'Tela del tubo', value: '1100 g/m² PVC estándar · opción de mejora en CSM (Hypalon®)' },
        { label: 'Opciones de consola', value: 'Caña, consola central con parabrisas o consola jockey' },
        { label: 'Documentación de certificación', value: 'CE (RCD 2013/53/EU) cat. C/D por modelo · construcción ISO 6185' },
        { label: 'Paquetes de repuestos', value: 'Válvulas, kits de reparación, bombas y tramos de rodal según la flota' },
        { label: 'Paquete estándar', value: 'Remos o dirección según configuración, bomba, kit de reparación, manual' },
      ],
      keyQuestions: [
        'Tamaño de flota, rotación y condiciones de almacenamiento',
        'Mezcla de esloras dentro de la operación',
        'Tipo de consola y distribución de tripulación por tarea',
        'Nivel de marca de flota: superposición de logo o librea completa',
      ],
    },
    'fiberglass-rib': {
      bestFor: 'Distribuidores, redes de venta y gamas náuticas minoristas',
      sizes: '2,5–7,6 m de eslora · 36 modelos · cascos GRP moldeados',
      construction: 'Casco de fibra de vidrio moldeado + collares de tubo inflable',
      customization: 'Igualación de gelcoat, tapicería, consola, gráficos y embalaje minorista',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Redes de distribuidores, gamas crucero de día, operaciones de charter y huéspedes' },
        { label: 'Material del casco', value: 'Fibra de vidrio (GRP) laminada a mano con acabado en gelcoat y utillaje de molde' },
        { label: 'Tela del tubo', value: 'Collar PVC estándar · CSM (Hypalon®) para gamas premium' },
        { label: 'Opciones de consola', value: 'Consola central con parabrisas, consola jockey, puestos de mando personalizados' },
        { label: 'Documentación de certificación', value: 'Declaración UE de conformidad por modelo · referencias ISO 6185' },
        { label: 'Paquetes de repuestos', value: 'Kit inicial de repuestos para distribuidor disponible con el primer pedido' },
        { label: 'Embalaje minorista', value: 'Cajas impresas, etiquetas y manuales localizados por mercado' },
      ],
      keyQuestions: [
        'Segmento objetivo y tramo de precio',
        'Colores de gelcoat y alcance de la librea de marca',
        'Mezcla de modelos en la gama (auxiliar a crucero de día)',
        'Necesidades de embalaje minorista y localización de manuales',
      ],
    },
    'sport-console': {
      bestFor: 'Marcas náuticas emergentes, tramos premium de alquiler y retail lifestyle',
      sizes: '4,5–5,5 m de eslora · plataformas deportivas',
      construction: 'Casco deportivo de fibra + espejo de popa reforzado según potencia',
      customization: 'Sistemas de dirección, distribuciones de asientos, puntos de remolque, gráficos y acabados',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Modelos insignia de retail, remolque acuático, escalado premium de flota' },
        { label: 'Material del casco', value: 'Casco deportivo de fibra moldeada con superficie de navegación de rendimiento' },
        { label: 'Tela del tubo', value: 'Collares PVC a juego con el color; opción reforzada para servicio de alquiler' },
        { label: 'Opciones de consola', value: 'Consola central, consola jockey, dirección hidráulica o mecánica' },
        { label: 'Asientos y remolque', value: 'Bancos simples/dobles, cojines de proa y puntos de remolque por modelo' },
        { label: 'Documentación de certificación', value: 'CE (RCD 2013/53/EU) cat. C/D por modelo · construcción ISO 6185' },
        { label: 'Paquetes de repuestos', value: 'Repuestos de válvulas, dirección y tapicería ajustados al uso de flota' },
      ],
      keyQuestions: [
        'Posicionamiento: insignia minorista o escalado de flota',
        'Rango de potencia del motor y preparación del espejo de popa',
        'Distribución de asientos y requisitos de puntos de remolque',
        'Complejidad del paquete gráfico y método de impresión',
      ],
    },
    'rescue-pro': {
      bestFor: 'Servicios de rescate, agencias de patrulla y programas públicos',
      sizes: '4,2–6,0 m de eslora · plataformas de misión',
      construction: 'Casco de aluminio o fibra + collar reforzado, cubierta autovaciante',
      customization: 'Consolas de misión, preparación de electrónica, puntos de izado certificados, librea institucional',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Socorro acuático, patrulla portuaria, equipos de buceo, ciclos profesionales' },
        { label: 'Material del casco', value: 'Aluminio soldado o fibra moldeada, refuerzos de misión' },
        { label: 'Tela del tubo', value: 'Collares multicámara reforzados; opción CSM (Hypalon®) para climas extremos' },
        { label: 'Opciones de consola', value: 'Consolas de misión con anclajes de plotter/radar; puestos jockey' },
        { label: 'Equipamiento de misión', value: 'Escaleras de rescate, postes de remolque, izado certificado, portabombonas y soportes de oxígeno' },
        { label: 'Documentación', value: 'Expediente de calidad por casco (Node 01–07) · CE cat. C/D · trazabilidad por lotes' },
        { label: 'Paquetes de repuestos', value: 'Kits de repuestos de programa más material de familiarización de tripulaciones' },
      ],
      keyQuestions: [
        'Perfil de misión y condiciones operativas',
        'Lista de electrónica y equipamiento que se fija en prototipo',
        'Requisitos documentales de contratación pública',
        'Planificación de lotes contra fechas de disponibilidad operativa',
      ],
    },
    'inflatable-dinghy': {
      bestFor: 'Programas de neumáticas auxiliares y líneas minoristas de entrada',
      sizes: '2,7–3,3 m de eslora · plataformas ligeras y plegables',
      construction: 'Tubos inflables + suelo hinchable o de listones',
      customization: 'Contenido del paquete, colores del tubo, diseño de caja minorista, códigos y manuales por mercado',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Auxiliares de yate, programas de marina, gamas minoristas de entrada' },
        { label: 'Tipos de suelo', value: 'Air-deck de alta presión (ligero, plegable) o suelos de listones de madera/aluminio' },
        { label: 'Tela del tubo', value: 'Collares PVC en grado estándar o premium' },
        { label: 'Opciones de consola', value: 'Distribuciones solo con caña; banco estándar en todos los modelos' },
        { label: 'Documentación de certificación', value: 'CE (RCD 2013/53/EU) cat. D por modelo · construcción ISO 6185' },
        { label: 'Paquete estándar', value: 'Banco, bomba manual, remos de aluminio, kit de reparación, bolsa, caja impresa' },
        { label: 'Embalaje minorista', value: 'Cajas impresas, códigos de barras y versiones de manual por mercado destino' },
      ],
      keyQuestions: [
        'Air-deck o listones según el punto de precio objetivo',
        'Contenido completo del paquete frente a versiones recortadas',
        'Profundidad de marca privada en tubos y cajas',
        'Cantidad de lanzamiento y cadencia de reordenes',
      ],
    },
    'inflatable-catamaran': {
      bestFor: 'Clubes de carreras, agencias de rescate y marcas de pesca',
      sizes: '3,75–4,70 m de eslora · plataformas catamarán de doble casco',
      construction: 'Cascos inflables de doble flotador + suelo drop-stitch',
      customization: 'Gráficos del casco, distribución de portarodillos, montajes de rescate, configuración de proa abierta',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Carreras, rescate en surf, patrulla rápida, pesca, recreación' },
        { label: 'Diseño del casco', value: 'Catamarán de doble casco, sin quilla, almohada aerodinámica' },
        { label: 'Tela del tubo', value: 'PVC 1100 dtex estándar · CSM/Hypalon premium' },
        { label: 'Opciones de suelo', value: 'Suelo de aire drop-stitch de alta presión (estándar)' },
        { label: 'Documentación de certificación', value: 'CE (RCD 2013/53/EU) cat. C/D por modelo · ISO 6185' },
        { label: 'Colecciones de estilo', value: 'Sólido, Bicolor, Rayas de Carrera, Camuflaje Táctico' },
      ],
      keyQuestions: [
        'Carreras, rescate o pesca como caso de uso principal',
        'Configuración de proa abierta vs cerrada',
        'Montajes de equipo de rescate y requisitos de documentación',
        'Colección de estilo y coincidencia de color Pantone',
      ],
    },
    'inflatable-kayak': {
      bestFor: 'Tiendas especializadas, operadores de tour y flotas de alquiler',
      sizes: '3,35–3,65 m de eslora · plataformas full drop-stitch o híbridas',
      construction: 'Paredes drop-stitch (tour) o tubos PVC + suelo drop-stitch (híbrido)',
      customization: 'Gráficos, colores, configuración de cockpit, tipo de asiento, diseño de elásticos',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Touring, recreación, flotas de alquiler, expedición' },
        { label: 'Construcción', value: 'Full drop-stitch (touring rígido) o híbrido tubo + suelo (comodidad de alquiler)' },
        { label: 'Tela del tubo', value: 'PVC estándar · CSM/Hypalon premium para entornos de alta UV' },
        { label: 'Tipo de válvula', value: 'Válvulas de alta presión empotradas con tapas antipolvo' },
        { label: 'Documentación de certificación', value: 'Construcción ISO 6185 · CE por modelo' },
        { label: 'Accesorios', value: 'Asientos de respaldo alto, sistema de elásticos, manijas, kit de reparación' },
      ],
      keyQuestions: [
        'Full drop-stitch de rendimiento o posicionamiento de comodidad híbrida',
        'Configuración de asiento individual o tándem',
        'Acabado de alquiler resistente o retail premium',
        'Tema gráfico y profundidad de marca',
      ],
    },
    'inflatable-raft': {
      bestFor: 'Outfitters fluviales, equipos de expedición y pescadores privados',
      sizes: '3,80 m de eslora · plataforma de 5 cámaras con drenaje automático',
      construction: 'Tubos inflables multicámara + suelo I-Beam elevado con drenaje automático',
      customization: 'Color, montajes de marco, upgrade de suelo, equipamiento de accesorios, equipo de rescate',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Rafting de aguas bravas, outfitters comerciales, expedición, pesca con mosca' },
        { label: 'Sistema de suelo', value: 'I-Beam elevado con drenaje automático (estándar) · upgrade drop-stitch' },
        { label: 'Tela del tubo', value: 'PVC reforzado · CSM/Hypalon para entornos extremos de UV/sal' },
        { label: 'Compatibilidad de marcos', value: 'Perímetro listo para marco de pesca/remo de aluminio' },
        { label: 'Documentación de certificación', value: 'Construcción ISO 6185 · CE por modelo' },
        { label: 'Colores', value: 'Acentos neón (comercial), Táctico/Desierto (expedición), Tono sobre tono (premium)' },
      ],
      keyQuestions: [
        'Clasificación de rápidos III, IV o V objetivo',
        'Posicionamiento comercial de alta rotación o privado premium',
        'Integración de marco de pesca y requisitos de accesorios',
        'Especificaciones de color y recubrimiento anti-UV',
      ],
    },
    'inflatable-accessories': {
      bestFor: 'Marcas de accesorios, flotas de alquiler y programas retail',
      sizes: 'Talla única universal · se pliega plano · núcleo drop-stitch de 5–10 psi',
      construction: 'Cojín drop-stitch de alta presión + respaldo regulable · correas de nailon de 4 puntos',
      customization: 'Colores de marca, color de correas, textura EVA, impresión de logotipo, embalaje retail',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Kayaks inflables, SUPs, bancos de balsas · accesorio posventa' },
        { label: 'Estructura central', value: 'Paneles drop-stitch que se inflan a presión rígida a 5–10 psi' },
        { label: 'Fijación', value: 'Correas de nailon universales de 4 puntos + mosquetones de acero inoxidable' },
        { label: 'Superficie', value: 'Tope EVA de rejilla diamante · respaldo regulable' },
        { label: 'Tejido', value: 'PVC resistente a UV de alta resistencia · costuras termosoldadas' },
        { label: 'Embalaje', value: 'Caja retail o kraft liso · se pliega plano para envío de bajo volumen' },
      ],
      keyQuestions: [
        'Mezcla de flota objetivo (kayaks, SUPs, balsas) y separación de anillos D',
        'Color de marca y ubicación del logotipo en asiento y correas',
        'Formato de embalaje retail y precio minorista previsto',
        'Estrategia de paquetes combinados con pedidos de kayak/SUP',
      ],
    },
  },
}

const SUPPORTED_PROCUREMENT_SERIES = new Set(['aluminum-rib', 'fiberglass-rib', 'sport-console', 'rescue-pro', 'inflatable-dinghy'])

/** Public procurement profiles contain only Neptunor's supported boat series. */
export const procurementProfiles: Localized<Record<string, ProcurementProfile>> = {
  en: Object.fromEntries(Object.entries(allProcurementProfiles.en).filter(([slug]) => SUPPORTED_PROCUREMENT_SERIES.has(slug))),
  es: Object.fromEntries(Object.entries(allProcurementProfiles.es).filter(([slug]) => SUPPORTED_PROCUREMENT_SERIES.has(slug))),
}

/** Common commercial rows (MOQ / samples / pricing) for every category page. */
export const commercialRows: Localized<ProcurementRow[]> = {
  en: [
    { label: 'Sample path', value: 'Sample development available for qualified OEM/ODM projects.' },
    { label: 'Sample MOQ', value: 'Confirmed by boat model, artwork complexity and accessory set.' },
    { label: 'Volume MOQ', value: 'MOQ is confirmed per model, colorway, packaging configuration and order mix.' },
    { label: 'Pricing logic', value: 'Quotation is based on hull material, tube fabric, console configuration, artwork, packaging, order quantity and delivery terms.' },
    { label: 'Sample timing', value: `Samples in ${FACTS.sampleTime} after specification, artwork and payment requirements are confirmed.` },
    { label: 'Production timing', value: `Production in ${FACTS.leadTime} after sample approval, final artwork, deposit and production scheduling are confirmed.` },
    { label: 'Packaging MOQ', value: 'Custom retail packaging may carry separate MOQ requirements.' },
    { label: 'Mixed orders', value: 'Mixed models or colorways are reviewed according to material, printing and packaging requirements.' },
    { label: 'Inspection', value: 'Third-party inspection and buyer-appointed inspection can be discussed before production release.' },
    { label: 'Commercial terms', value: 'Available terms are discussed during quotation based on project scope and order history.' },
  ],
  es: [
    { label: 'Ruta de muestras', value: 'Desarrollo de muestras disponible para proyectos OEM/ODM calificados.' },
    { label: 'MOQ de muestras', value: 'Confirmado según modelo de bote, complejidad del arte y conjunto de accesorios.' },
    { label: 'MOQ de volumen', value: 'El MOQ se confirma por modelo, colorway, configuración de embalaje y mezcla de pedidos.' },
    { label: 'Lógica de precios', value: 'El presupuesto se basa en material del casco, tela del tubo, configuración de consola, arte, embalaje, cantidad de pedido y condiciones comerciales.' },
    { label: 'Tiempo de muestras', value: `Muestras en ${FACTS.sampleTime} tras confirmar especificación, arte y requisitos de pago.` },
    { label: 'Tiempo de producción', value: `Producción en ${FACTS.leadTime} tras aprobación de muestra, arte final, depósito y programación de producción.` },
    { label: 'MOQ de embalaje', value: 'El embalaje minorista personalizado puede tener requisitos de MOQ independientes.' },
    { label: 'Pedidos mixtos', value: 'Modelos o colorways mixtos se revisan según requisitos de material, impresión y embalaje.' },
    { label: 'Inspección', value: 'La inspección de terceros y la inspección designada por el comprador pueden acordarse antes de la liberación de producción.' },
    { label: 'Condiciones comerciales', value: 'Las condiciones disponibles se analizan durante el presupuesto según el alcance del proyecto y el historial de pedidos.' },
  ],
}
