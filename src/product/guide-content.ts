/**
 * Boat buyer guides (/guides/{slug}).
 *
 * Structured buying guidance for B2B boat programs: specifying a RIB for a
 * market, choosing tube fabric, importing from China, fleet maintenance and
 * CE preparation. Internal links point only at surviving content pillars.
 */

export interface GuideSection {
  title: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  intro: string[]
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-spec-a-rib-for-your-market',
    title: 'How to Spec a RIB for Your Market',
    intro: [
      'A RIB specification is a set of trade-offs: hull material, length, tube fabric, console layout and certification category. Spec them against how your buyers actually use the boat — here is the decision sequence that keeps projects on budget.',
    ],
    sections: [
      {
        title: 'Start With Duty, Not Length',
        body: 'Define what the boat does before how big it is: guided rental trips, guest transfers, dive duty, patrol work or private tender use. Duty drives everything else — payload, chamber count, deck layout and how much abuse the hull must shrug off. A 3.6 m aluminum RIB built for rentals outlives a longer recreational model doing the same job.',
      },
      {
        title: 'Aluminum or Fiberglass Hull',
        body: 'Aluminum hulls (welded marine-grade alloy, typically 3.6–4.7 m in standard ranges) win where boats take abuse: docks, trailers, beach landings. Fiberglass hulls (2.5–7.6 m) win where ride comfort, gelcoat finish and retail presentation sell the boat. Many operators run both side by side.',
      },
      {
        title: 'Tube Fabric and Diameter',
        body: 'PVC collars around 1100 g/m² are the working standard; CSM (Hypalon®) costs more but resists UV, fuel and abrasion for hot climates and long service lives. Tube diameter follows boat size and load — bigger diameters add buoyancy and softness in chop, at the cost of weight and windage.',
      },
      {
        title: 'Console, Seating and Deck Layout',
        body: 'Choose between tiller steering (simplest, lightest), center consoles with windscreen (all-round visibility) or jockey consoles (sport and patrol seating positions). Then fix seating, fuel-tank space, lifting points and cleats on drawings before sampling — layout changes after sample approval cost time twice.',
      },
      {
        title: 'Certification Category Early',
        body: 'If boats ship to the EU, design category matters from day one: category C covers inshore conditions, category D covers sheltered waters. Engine ratings, freeboard and flotation are engineered to the target category — retrofitting paperwork later is not an option. Confirm CE scope per model with your manufacturer.',
      },
      {
        title: 'Close With Commercial Realities',
        body: 'Match the spec to tiered minimums: pilot runs from 20–50 pcs validate the configuration, standard volume starts at 90–100+ pcs per approved configuration, and any new hull or console tooling starts at 50–100+ pcs plus roughly 20–35 days of tooling time. Samples take 10–15 days; production 30–45 days after confirmed PO and deposit.',
      },
    ],
    faqs: [
      { q: 'What RIB length fits most markets?', a: 'Most rental and dealer programs center on 3.6–4.7 m aluminum hulls and 3.8–5.2 m fiberglass hulls: big enough for real payloads, small enough for single-trailer handling and davit launch. Above that, 5.5–7.6 m fiberglass console models cover charter, guest and crew programs.' },
      { q: 'Can one factory build both aluminum and fiberglass versions?', a: 'Yes — plants with separate metal and molding workshops produce both through the same tube-welding and QC pipeline, which keeps collar quality consistent across hull materials.' },
      { q: 'When should we freeze the specification?', a: 'Before sampling. The sample proves the frozen spec; changes discovered after approval restart both sample and production scheduling.' },
    ],
    related: [
      { label: 'Aluminum hull RIB platforms', href: '/products/aluminum-rib' },
      { label: 'Fiberglass hull RIB platforms', href: '/products/fiberglass-rib' },
      { label: 'OEM manufacturing overview', href: '/oem-manufacturing' },
      { label: 'OEM buyer guide', href: '/research/oem-buyer-guide' },
      { label: 'MOQ tiers for boat programs', href: '/oem-boat-moq' },
    ],
  },
  {
    slug: 'tube-fabric-selection',
    title: 'Tube Fabric Selection: PVC vs CSM (Hypalon®)',
    intro: [
      'The fabric choice decides how your boats age: color retention in strong sun, resistance to fuel spills, flex life after thousands of beachings. Here is how PVC and CSM (Hypalon®) actually differ for boat programs — beyond brochure claims.',
    ],
    sections: [
      {
        title: 'What the Fabrics Are',
        body: 'Both fabrics are a base cloth coated on both sides. PVC (polyvinyl chloride) welds by high frequency, takes bright colors well and delivers the best price-to-performance for most fleets. CSM (chlorosulfonated polyethylene, known as Hypalon®) is a synthetic rubber coating prized for chemical and UV resistance — it cannot be RF welded, so seams are thermal welded or adhesive bonded by experienced operators.',
      },
      {
        title: 'Climate and Duty Match the Fabric',
        body: 'Hot, high-UV climates and fuel-heavy operations favor CSM: less fading, less surface degradation, longer service life. Temperate climates and high-turnover rental duty usually justify PVC — especially when replacement economics beat refurbishment. Boats stored indoors between sessions stretch PVC life considerably.',
      },
      {
        title: 'Weight Grades Matter More Than Names',
        body: 'Fabric weight (g/m²) predicts durability more than brand names do. Around 1100 g/m² is the common working grade for boat collars; lighter grades suit small tenders, heavier grades serve patrol and rescue duty. Ask every supplier to state the exact weight and coating thickness per surface — vagueness here predicts quality problems later.',
      },
      {
        title: 'Seams Follow the Fabric',
        body: 'RF welding produces consistent, repeatable seams on PVC with parameters logged per run. CSM relies on thermal welding and hand craftsmanship — excellent when done well, variable when rushed. Whichever you choose, confirm the factory\u2019s seam inspection method and reject thresholds in writing.',
      },
      {
        title: 'Cost Picture Over Five Years',
        body: 'CSM typically adds meaningfully to unit cost but can double collar service life in harsh climates. PVC wins when rotation is planned: replace collars on schedule rather than nursing aging tubes. Model both scenarios over five years with your real usage hours before deciding.',
      },
    ],
    faqs: [
      { q: 'Is Hypalon® worth the premium?', a: 'For tropical deployments, professional fleets and long-life programs — usually yes. For seasonal rental duty in temperate climates, quality PVC at the right weight grade is the better economic choice.' },
      { q: 'Which fabric holds colors better?', a: 'Modern pigmented PVC resists fading well for several seasons; CSM degrades slowest under sustained UV. Either way, covered storage extends cosmetic life more than fabric choice alone.' },
      { q: 'Can we mix fabrics across a fleet?', a: 'Yes — many operators run PVC on high-turnover units and CSM on flagship or professional models within the same program, using identical chamber designs.' },
    ],
    related: [
      { label: 'PVC vs Hypalon® research article', href: '/research/pvc-vs-hypalon' },
      { label: 'Inflatable boat certification paths', href: '/inflatable-boat-certification' },
      { label: 'Knowledge Center', href: '/knowledge' },
      { label: 'R&D center articles', href: '/randdcenter' },
    ],
  },
  {
    slug: 'importing-boats-from-china',
    title: 'Importing Boats From China: Step-by-Step Process',
    intro: [
      'Importing RIBs and inflatable boats is a logistics exercise wrapped around a manufacturing exercise. Get the sequencing right and containers arrive sell-ready; get it wrong and stock lands mid-season. This walkthrough follows a typical first order end to end.',
    ],
    sections: [
      {
        title: 'Phase 1: Specification and Sampling',
        body: 'Everything starts from a frozen specification: models, lengths, tube fabric, console options, livery and packaging. A physical sample ships in 10–15 days once requirements are confirmed. Approve the sample against the spec in writing — this document governs the whole order.',
      },
      {
        title: 'Phase 2: PO, Deposit and Production',
        body: 'Production starts on confirmed PO and deposit and runs 30–45 days for standard batches (90–100+ pcs per configuration). New hull or console tooling adds roughly 20–35 days. During production, schedule third-party inspection if you use it — SGS, TÜV, BV and Intertek all operate near Qingdao ports.',
      },
      {
        title: 'Phase 3: Pre-Shipment Verification',
        body: 'Every finished boat should pass documented QC: seven inspection gates with a 120-point checklist and a 0.35 bar / 24-hour pressure hold rejecting drops above 0.02 bar. Request batch test records with the shipment, and reserve the right to reject units failing the agreed protocol.',
      },
      {
        title: 'Phase 4: Freight and Incoterms',
        body: 'Boats ship crated: LCL for mixed trial orders, FCL once volume justifies a full container. Common terms run EXW → FOB → CIF → DAP depending on who controls freight. Sea freight suits bulk production; air freight handles urgent samples. Confirm crate dimensions early — they determine container fill rates and landed-cost math.',
      },
      {
        title: 'Phase 5: Documentation and Customs',
        body: 'The standard pack: commercial invoice, packing list, certificate of origin, final-inspection reports and compliance documents — CE declaration of conformity and ISO 6185 construction references for EU-bound models. Your broker clears customs; the factory supplies the paperwork. Agree the document set before deposit, not after loading.',
      },
    ],
    faqs: [
      { q: 'How long does a first import cycle take?', a: 'Plan 8–12 weeks from frozen specification to port arrival: 10–15 days sampling, 30–45 days production plus ocean transit. First orders carry learning overhead; repeat orders compress.' },
      { q: 'Which incoterm should a first-time importer choose?', a: 'FOB is the usual balance: the factory delivers alongside vessel in China while you control freight and insurance from there. EXW suits buyers with established forwarders; CIF/DAP simplify the first experience.' },
      { q: 'What documents prove EU compliance?', a: 'The CE declaration of conformity per model with design category, supported by construction to ISO 6185 and material declarations (REACH/RoHS) — issued per shipment with traceability records.' },
    ],
    related: [
      { label: 'Factory audit checklist', href: '/factory-audit-checklist' },
      { label: 'OEM onboarding guide', href: '/oem-onboarding-guide' },
      { label: 'Distributor private-label project', href: '/projects/eu-distributor-private-label' },
      { label: 'CE certification guide', href: '/research/ce-certification-guide' },
    ],
  },
  {
    slug: 'boat-fleet-maintenance-planning',
    title: 'Fleet Maintenance Planning for Rental & Resort Operators',
    intro: [
      'Fleets fail quietly: a valve that weeps, a chafe line nobody logged, collars replaced two seasons late at emergency prices. Planned maintenance turns those failures into scheduled line items — here is the framework operators actually follow.',
    ],
    sections: [
      {
        title: 'Build the Spares Package Into the Order',
        body: 'Order spares with the fleet, never after: valves, repair kits, pumps, oars, floor panels and rubbing strake sections. A sensible starting ratio is 5–10% of fleet size in consumables, weighted toward the parts your usage logs show failing most. Parts shipped with production cost a fraction of mid-season airfreight.',
      },
      {
        title: 'Daily and Weekly Routines',
        body: 'Daily: rinse, visual check of collars and transom, pressure glance before first launch. Weekly: valve function check, seam and chafe-point inspection where tubes meet console and strakes, and cleaning of hull bottoms. Log everything — patterns across units reveal spec problems while warranty windows are still open.',
      },
      {
        title: 'Seasonal Overhauls and Storage',
        body: 'End of season: deep clean, full pressure verification, repair anything marginal now, then store deflated or half-inflated away from direct sun. Aluminum hulls want corrosion checks at fastener points; fiberglass wants gelcoat inspection for impact stars. Boats stored dry and shaded routinely outlast neglected twins by seasons.',
      },
      {
        title: 'Track Hours and Rotate Smartly',
        body: 'Log engine hours or trips per unit. Rotating units across duties evens wear, and retirement planning works backward from observed wear rates, not calendar guesses. Operators who track hours replace 10% of fleet annually instead of 40% suddenly in year three.',
      },
      {
        title: 'Contract the Reorder Before You Need It',
        body: 'Lock reorder specifications against approved BOMs so replacements match exactly, and schedule refresh batches ahead of season — production runs 30–45 days after PO and deposit. A supplier relationship with recorded specs turns fleet renewal into a purchase order instead of a project.',
      },
    ],
    faqs: [
      { q: 'What spares ratio should a new fleet start with?', a: 'Start at 5–10% of fleet size concentrated in valves, repair kits and pumps; adjust after the first season\u2019s failure log shows your actual wear pattern.' },
      { q: 'How often should collars be pressure tested?', a: 'A quick check daily before service, a verified hold monthly during season, and a full documented test at each seasonal overhaul.' },
      { q: 'When should a fleet plan its first refresh batch?', a: 'Typically after the second season for high-cycle rental units. Order in late autumn so a spring arrival aligns with reopening.' },
    ],
    related: [
      { label: 'Coastal rental fleet project', href: '/projects/coastal-rental-fleet' },
      { label: 'Inflatable dinghy & tender platforms', href: '/products/inflatable-dinghy' },
      { label: 'Knowledge Center', href: '/knowledge' },
      { label: 'Drop-stitch technology overview', href: '/research/drop-stitch-technology' },
    ],
  },
  {
    slug: 'ce-certification-prep-for-boats',
    title: 'CE Certification Prep for Inflatable Boats & RIBs',
    intro: [
      'Selling boats into the EU means complying with the Recreational Craft Directive 2013/53/EU — and the paperwork goes far smoother when the factory builds toward it from the start. Here is what buyers should prepare and what to expect from the manufacturer.',
    ],
    sections: [
      {
        title: 'Understand the Directive Scope',
        body: 'The RCD applies to recreational craft placed on the EU market, with design categories defining intended conditions: category C for inshore waters, category D for sheltered waters. Most inflatable boats and RIBs up to 24 m fall within scope. Your market positioning decides the target category — and the category drives engineering requirements like freeboard and flotation.',
      },
      {
        title: 'Design Categories Drive Engineering',
        body: 'Decide category before tooling: a boat engineered for C carries different stability, buoyancy and structural expectations than a D-category tender. Changing category after molds exist is expensive or impossible. State the target category on the specification sheet and hold the factory to it during sampling.',
      },
      {
        title: 'What the Factory Provides',
        body: 'Expect conformity support per model: construction aligned to ISO 6185 inflatable-boat requirements, a declaration of conformity naming the responsible party, and technical documentation covering materials (REACH/RoHS declarations) and build records. Certification scope varies by model and configuration — confirmed per project with certificate details available on request.',
      },
      {
        title: 'Quality System Evidence Strengthens Files',
        body: 'An ISO 9001-certified production system with documented inspection gates makes conformity files credible: seven-stage QC (Node 01–07), a 120-point checklist and serial-level traceability give authorities and notified bodies something verifiable. Third-party inspections by SGS, TÜV, BV or Intertek slot neatly into this evidence chain.',
      },
      {
        title: 'Buyer-Side Preparation Checklist',
        body: 'Before ordering EU-bound boats: fix target category and member states; confirm which certificates apply per model in writing; agree the document pack (declaration of conformity, test references, manuals in destination languages); and verify owner-manual and marking requirements per market. Doing this before deposit avoids container-loads of paperwork surprises at customs.',
      },
    ],
    faqs: [
      { q: 'Do all inflatable boats need CE for the EU?', a: 'Craft within RCD scope placed on the EU market need conformity. Some exclusions apply (certain racing or experimental craft); most commercial-range inflatables and RIBs are in scope and need documentation per model.' },
      { q: 'Who issues the CE mark on imported boats?', a: 'The economic operator placing the craft on the EU market carries responsibility, backed by the manufacturer\u2019s declaration of conformity and technical file. Importers must keep documentation available to authorities.' },
      { q: 'Does CE certification delay production?', a: 'Not when planned: certification runs parallel to tooling and sampling. Building to a declared category from the start adds no meaningful lead time versus retrofitting compliance later.' },
    ],
    related: [
      { label: 'Inflatable boat certification', href: '/inflatable-boat-certification' },
      { label: 'CE certification research guide', href: '/research/ce-certification-guide' },
      { label: 'OEM buyer guide', href: '/research/oem-buyer-guide' },
      { label: 'Product development pillar', href: '/product-development' },
    ],
  },
]

/** Spanish variants of the buyer guides (same slugs, translated copy). */
export const GUIDES_ES: Guide[] = [
  {
    slug: 'how-to-spec-a-rib-for-your-market',
    title: 'Cómo especificar un RIB para tu mercado',
    intro: [
      'Una especificación de RIB es una cadena de equilibrios: material del casco, eslora, tela del tubo, distribución de consola y categoría de certificación. Especifícalos según cómo usan el bote tus compradores reales — esta es la secuencia de decisiones que mantiene los proyectos en presupuesto.',
    ],
    sections: [
      {
        title: 'Empieza por el uso, no por la eslora',
        body: 'Define qué hace el bote antes de lo grande que es: salidas guiadas de alquiler, traslados de huéspedes, buceo, patrulla o uso como auxiliar privado. El uso lo determina todo: carga útil, número de cámaras, distribución de cubierta y cuánto abuso debe resistir el casco. Un RIB de aluminio de 3,6 m construido para alquiler supera en vida a un modelo recreativo más largo haciendo el mismo trabajo.',
      },
      {
        title: 'Casco de aluminio o de fibra',
        body: 'Los cascos de aluminio (aleación naval soldada, típicamente 3,6–4,7 m en gamas estándar) ganan donde los botes sufren golpes: pantalanes, remolques, varadas en playa. Los de fibra (2,5–7,6 m) ganan donde la comodidad de navegación, el acabado de gelcoat y la presentación minorista venden el bote. Muchos operadores combinan ambos.',
      },
      {
        title: 'Tela y diámetro del tubo',
        body: 'Los collares de PVC de unos 1100 g/m² son el estándar de trabajo; el CSM (Hypalon®) cuesta más pero resiste UV, combustible y abrasión en climas cálidos y vidas útiles largas. El diámetro del tubo sigue al tamaño del bote y a la carga: más diámetro añade flotabilidad y suavidad en marejada, a costa de peso y superficie expuesta al viento.',
      },
      {
        title: 'Consola, asientos y cubierta',
        body: 'Elige entre dirección de caña (lo más simple y ligero), consola central con parabrisas (visibilidad total) o consola jockey (posiciones deportivas y de patrulla). Después fija asientos, espacio para depósito, puntos de izado y cornamusas en planos antes del muestreo — cambiar la distribución tras aprobar la muestra cuesta tiempo dos veces.',
      },
      {
        title: 'Categoría de certificación desde el inicio',
        body: 'Si los botes van a la UE, la categoría de diseño importa desde el primer día: la categoría C cubre aguas costeras y la D aguas abrigadas. Potencias homologadas, francobordo y flotabilidad se diseñan según la categoría objetivo — el papeleo no se arregla después. Confirma el alcance CE por modelo con tu fabricante.',
      },
      {
        title: 'Cierra con las realidades comerciales',
        body: 'Ajusta la especificación a los mínimos por tramos: los pilotos de 20–50 uds. validan la configuración, el volumen estándar parte de 90–100+ uds. por configuración aprobada, y cualquier utillaje nuevo de casco o consola parte de 50–100+ uds. más unos 20–35 días de utillaje. Muestras en 10–15 días; producción en 30–45 días tras PO confirmado y depósito.',
      },
    ],
    faqs: [
      { q: '¿Qué eslora de RIB encaja en la mayoría de mercados?', a: 'La mayoría de programas de alquiler y distribución se centra en RIB de aluminio de 3,6–4,7 m y de fibra de 3,8–5,2 m: suficiente carga útil real, manejables con un solo remolque e izables con pluma.' },
      { q: '¿Una misma fábrica puede construir versiones de aluminio y fibra?', a: 'Sí — plantas con talleres separados de metal y moldeo producen ambas variantes bajo el mismo proceso de soldadura de tubos y control de calidad, manteniendo la calidad del collar consistente entre materiales.' },
      { q: '¿Cuándo hay que congelar la especificación?', a: 'Antes del muestreo. La muestra demuestra la especificación congelada; los cambios detectados tras la aprobación reinician muestra y calendario de producción.' },
    ],
    related: [
      { label: 'Plataformas RIB de aluminio', href: '/products/aluminum-rib' },
      { label: 'Plataformas RIB de fibra de vidrio', href: '/products/fiberglass-rib' },
      { label: 'Panorama de fabricación OEM', href: '/oem-manufacturing' },
      { label: 'Guía del comprador OEM', href: '/research/oem-buyer-guide' },
      { label: 'Tramos de MOQ para programas náuticos', href: '/oem-boat-moq' },
    ],
  },
  {
    slug: 'tube-fabric-selection',
    title: 'Selección de tela del tubo: PVC frente a CSM (Hypalon®)',
    intro: [
      'La elección de la tela decide cómo envejecen tus botes: retención de color a pleno sol, resistencia a derrames de combustible, vida a la flexión tras miles de varadas. Así se diferencian de verdad el PVC y el CSM (Hypalon®) para programas náuticos — más allá de folletos.',
    ],
    sections: [
      {
        title: 'Qué son estas telas',
        body: 'Ambas son una tela base recubierta por ambas caras. El PVC (policloruro de vinilo) se suelda por alta frecuencia, admite colores vivos y ofrece la mejor relación precio-rendimiento para la mayoría de flotas. El CSM (polietileno clorosulfonado, conocido como Hypalon®) es un recubrimiento de caucho sintético valorado por su resistencia química y a UV — no admite soldadura RF, así que sus costuras son termofusionadas o pegadas por operarios experimentados.',
      },
      {
        title: 'El clima y el uso eligen la tela',
        body: 'Climas calurosos de alta radiación y operaciones con mucho combustible favorecen el CSM: menos desvanecimiento, menos degradación superficial, vida útil más larga. Los climas templados y el alquiler de alta rotación suelen justificar el PVC — sobre todo cuando la reposición programada vence a la restauración. Guardar los botes bajo techo entre sesiones alarga notablemente la vida del PVC.',
      },
      {
        title: 'El gramaje importa más que la marca',
        body: 'El gramaje (g/m²) predice la durabilidad mejor que las marcas comerciales. Unos 1100 g/m² son el grado de trabajo habitual para collares náuticos; los grados ligeros sirven a neumáticas pequeñas y los pesados al servicio de patrulla y rescate. Pide a cada proveedor el gramaje exacto y el espesor de recubrimiento por cara — la vaguedad aquí predice problemas de calidad después.',
      },
      {
        title: 'Las costuras siguen a la tela',
        body: 'La soldadura RF genera costuras consistentes y repetibles sobre PVC con parámetros registrados por lote. El CSM depende de soldadura térmica y trabajo artesanal — excelente cuando se hace bien, variable cuando se hace con prisa. Elijas cual elijas, confirma por escrito cómo inspecciona la fábrica las costuras y qué umbrales de rechazo aplica.',
      },
      {
        title: 'El coste real a cinco años',
        body: 'El CSM suele añadir un extra significativo al coste unitario pero puede duplicar la vida del collar en climas duros. El PVC gana cuando la rotación está planificada: sustituir collares según calendario en lugar de arrastrar tubos envejecidos. Modeliza ambos escenarios a cinco años con tus horas de uso reales antes de decidir.',
      },
    ],
    faqs: [
      { q: '¿Merece la pena la prima del Hypalon®?', a: 'Para despliegues tropicales, flotas profesionales y programas de larga vida — normalmente sí. Para alquiler estacional en climas templados, un PVC de calidad con el gramaje correcto es la mejor decisión económica.' },
      { q: '¿Qué tela conserva mejor el color?', a: 'El PVC pigmentado moderno resiste bien el desvanecimiento varias temporadas; el CSM se degrada más lentamente bajo UV sostenido. En cualquier caso, el almacenamiento cubierto extiende la vida cosmética más que la elección de tela por sí sola.' },
      { q: '¿Podemos mezclar telas dentro de una flota?', a: 'Sí — muchos operadores llevan PVC en unidades de alta rotación y CSM en modelos insignia o profesionales dentro del mismo programa, con diseños de cámaras idénticos.' },
    ],
    related: [
      { label: 'Artículo de investigación PVC vs Hypalon®', href: '/research/pvc-vs-hypalon' },
      { label: 'Certificación de botes inflables', href: '/inflatable-boat-certification' },
      { label: 'Centro de conocimiento', href: '/knowledge' },
      { label: 'Artículos del centro de I+D', href: '/randdcenter' },
    ],
  },
  {
    slug: 'importing-boats-from-china',
    title: 'Importar botes de China: proceso paso a paso',
    intro: [
      'Importar RIB y botes inflables es un ejercicio de logística envuelto en otro de fabricación. Con la secuencia correcta llegan contenedores listos para vender; sin ella, la mercancía aterriza a mitad de temporada. Este recorrido sigue un primer pedido típico de principio a fin.',
    ],
    sections: [
      {
        title: 'Fase 1: especificación y muestreo',
        body: 'Todo parte de una especificación congelada: modelos, esloras, tela del tubo, opciones de consola, librea y embalaje. Una muestra física sale en 10–15 días una vez confirmados los requisitos. Aprueba la muestra contra la especificación por escrito — ese documento rige todo el pedido.',
      },
      {
        title: 'Fase 2: PO, depósito y producción',
        body: 'La producción arranca con PO confirmado y depósito y tarda 30–45 días en lotes estándar (90–100+ uds. por configuración). El utillaje nuevo de casco o consola añade unos 20–35 días. Durante la producción, programa la inspección de terceros si la usas — SGS, TÜV, BV e Intertek operan cerca de los puertos de Qingdao.',
      },
      {
        title: 'Fase 3: verificación previa al envío',
        body: 'Cada bote terminado debe pasar control de calidad documentado: siete puertas de inspección con lista de 120 puntos y prueba de presión de 0,35 bar / 24 horas con rechazo por caídas superiores a 0,02 bar. Solicita los registros de prueba del lote junto al envío y reserva el derecho a rechazar unidades que incumplan el protocolo acordado.',
      },
      {
        title: 'Fase 4: transporte e incoterms',
        body: 'Los botes viajan encajados: LCL para pedidos de prueba mixtos, FCL cuando el volumen justifica el contenedor completo. Los términos habituales van de EXW → FOB → CIF → DAP según quién controla el flete. El mar sirve a la producción en volumen; el aire, a muestras urgentes. Confirma las dimensiones de caja pronto — determinan el llenado del contenedor y el coste puesto en destino.',
      },
      {
        title: 'Fase 5: documentación y aduanas',
        body: 'El paquete estándar: factura comercial, packing list, certificado de origen, informes de inspección final y documentos de conformidad — declaración UE de conformidad y referencias de construcción ISO 6185 para modelos con destino a la UE. Tu agente despacha en aduana; la fábrica aporta el papeleo. Acuerda el conjunto documental antes del depósito, no tras la carga.',
      },
    ],
    faqs: [
      { q: '¿Cuánto dura un primer ciclo completo de importación?', a: 'Calcula 8–12 semanas desde la especificación congelada hasta la llegada a puerto: 10–15 días de muestra, 30–45 días de producción más tránsito marítimo. Los primeros pedidos arrastran curva de aprendizaje; los reordenes se comprimen.' },
      { q: '¿Qué incoterm conviene a un importador primerizo?', a: 'FOB es el equilibrio habitual: la fábrica entrega junto al buque en China mientras tú controlas flete y seguro desde ahí. EXW sirve a compradores con transitarios propios; CIF/DAP simplifican la primera experiencia.' },
      { q: '¿Qué documentos acreditan la conformidad UE?', a: 'La declaración de conformidad CE por modelo con categoría de diseño, apoyada en construcción según ISO 6185 y declaraciones de materiales (REACH/RoHS) — emitidas por envío con registros de trazabilidad.' },
    ],
    related: [
      { label: 'Lista de auditoría de fábrica', href: '/factory-audit-checklist' },
      { label: 'Guía de incorporación OEM', href: '/oem-onboarding-guide' },
      { label: 'Proyecto de marca privada de distribuidor', href: '/projects/eu-distributor-private-label' },
      { label: 'Guía de certificación CE', href: '/research/ce-certification-guide' },
    ],
  },
  {
    slug: 'boat-fleet-maintenance-planning',
    title: 'Planificación de mantenimiento para flotas de alquiler y resorts',
    intro: [
      'Las flotas fallan en silencio: una válvula que pierde, una línea de roce que nadie registró, collares sustituidos dos temporadas tarde a precios de urgencia. El mantenimiento planificado convierte esos fallos en partidas presupuestadas — este es el marco que siguen los operadores.',
    ],
    sections: [
      {
        title: 'Incluye los repuestos en el pedido original',
        body: 'Pide repuestos con la flota, nunca después: válvulas, kits de reparación, bombas, remos, paneles de suelo y tramos de rodal de frotamiento. Una proporción inicial razonable es el 5–10% de la flota en consumibles, ponderada según las piezas que tu registro muestre más castigadas. Los repuestos enviados con producción cuestan una fracción de un envío aéreo en plena temporada.',
      },
      {
        title: 'Rutinas diarias y semanales',
        body: 'Diario: aclaramiento, inspección visual de collares y espejo de popa, vistazo a la presión antes de la primera salida. Semanal: comprobación de válvulas, revisión de costuras y puntos de roce donde el tubo toca consola y rodales, y limpieza de fondos. Regístralo todo — los patrones entre unidades revelan problemas de especificación mientras la garantía sigue abierta.',
      },
      {
        title: 'Revisiones de temporada y almacenamiento',
        body: 'Fin de temporada: limpieza profunda, verificación completa de presión, reparación de todo lo dudoso ya, y guardado desinflado o semihinchado lejos del sol directo. Los cascos de aluminio piden revisión de corrosión en puntos de fijación; los de fibra, inspección del gelcoat en estrellas de impacto. Los botes guardados secos y en sombra superan sistemáticamente por temporadas a sus gemelos abandonados.',
      },
      {
        title: 'Registra horas y rota con criterio',
        body: 'Anota horas de motor o salidas por unidad. Rotar unidades entre tareas reparte el desgaste, y la planificación de bajas funciona hacia atrás desde tasas de desgaste observadas, no desde supuestos de calendario. Los operadores que registran horas renuevan el 10% anual en lugar del 40% de golpe en el año tres.',
      },
      {
        title: 'Contrata el reorden antes de necesitarlo',
        body: 'Fija las especificaciones de reorden contra BOM aprobados para que los reemplazos coincidan exactamente, y agenda lotes de renovación antes de temporada — la producción tarda 30–45 días tras PO y depósito. Una relación de proveedor con especificaciones registradas convierte la renovación de flota en una orden de compra en lugar de un proyecto.',
      },
    ],
    faqs: [
      { q: '¿Qué proporción de repuestos conviene a una flota nueva?', a: 'Empieza con un 5–10% de la flota concentrado en válvulas, kits de reparación y bombas; ajusta tras el registro de fallos de la primera temporada.' },
      { q: '¿Con qué frecuencia probar la presión de los collares?', a: 'Un chequeo rápido diario antes del servicio, una prueba verificada mensual durante la temporada y una prueba documentada completa en cada revisión estacional.' },
      { q: '¿Cuándo debe planificar una flota su primera renovación?', a: 'Normalmente tras la segunda temporada en unidades de alto ciclo. Pide a finales de otoño para que la llegada en primavera coincida con la reapertura.' },
    ],
    related: [
      { label: 'Proyecto de flota de alquiler costera', href: '/projects/coastal-rental-fleet' },
      { label: 'Plataformas de neumáticas y auxiliares', href: '/products/inflatable-dinghy' },
      { label: 'Centro de conocimiento', href: '/knowledge' },
      { label: 'Tecnología drop-stitch', href: '/research/drop-stitch-technology' },
    ],
  },
  {
    slug: 'ce-certification-prep-for-boats',
    title: 'Preparación de certificación CE para botes inflables y RIB',
    intro: [
      'Vender botes en la UE implica cumplir la Directiva de Embarcaciones Deportivas 2013/53/EU — y el papeleo va mucho mejor cuando la fábrica construye hacia él desde el principio. Esto es lo que debe preparar el comprador y qué esperar del fabricante.',
    ],
    sections: [
      {
        title: 'Entiende el alcance de la directiva',
        body: 'La Directiva aplica a embarcaciones deportivas puestas en el mercado de la UE, con categorías de diseño que definen las condiciones previstas: categoría C para aguas costeras y D para aguas abrigadas. La mayoría de botes inflables y RIB de hasta 24 m entra en el alcance. Tu posicionamiento de mercado decide la categoría objetivo — y la categoría condiciona requisitos de ingeniería como francobordo y flotabilidad.',
      },
      {
        title: 'Las categorías de diseño dirigen la ingeniería',
        body: 'Decide la categoría antes del utillaje: un bote diseñado para C lleva expectativas distintas de estabilidad, flotabilidad y estructura que un auxiliar de categoría D. Cambiar de categoría tras crear moldes es caro o imposible. Declara la categoría objetivo en la hoja de especificaciones y haz cumplir esa meta durante el muestreo.',
      },
      {
        title: 'Qué aporta la fábrica',
        body: 'Espera apoyo de conformidad por modelo: construcción alineada con los requisitos ISO 6185 para botes inflables, una declaración de conformidad que nombre a la parte responsable y documentación técnica que cubra materiales (declaraciones REACH/RoHS) y registros de construcción. El alcance de certificación varía por modelo y configuración — se confirma por proyecto y los detalles de certificado están disponibles a petición.',
      },
      {
        title: 'La evidencia del sistema de calidad refuerza el expediente',
        body: 'Un sistema productivo certificado ISO 9001 con puertas de inspección documentadas da credibilidad al expediente: control en siete etapas (Node 01–07), lista de 120 puntos y trazabilidad por número de serie ofrecen algo verificable ante autoridades y organismos notificados. Las inspecciones de terceros de SGS, TÜV, BV o Intertek encajan naturalmente en esa cadena de evidencias.',
      },
      {
        title: 'Lista de preparación del comprador',
        body: 'Antes de pedir botes para la UE: fija la categoría objetivo y los estados miembros; confirma por escrito qué certificados aplican por modelo; acuerda el paquete documental (declaración de conformidad, referencias de ensayo, manuales en los idiomas de destino); y verifica los requisitos de manual y marcado por mercado. Hacerlo antes del depósito evita sorpresas de papeleo en aduana con contenedores encima.',
      },
    ],
    faqs: [
      { q: '¿Todos los botes inflables necesitan CE para la UE?', a: 'Las embarcaciones dentro del alcance de la Directiva puestas en el mercado de la UE necesitan conformidad. Existen exclusiones (ciertas embarcaciones de competición o experimentales); la mayoría de inflables y RIB de gama comercial están dentro y requieren documentación por modelo.' },
      { q: '¿Quién emite el marcado CE en los botes importados?', a: 'El operador económico que pone la embarcación en el mercado de la UE asume la responsabilidad, respaldado por la declaración de conformidad y el expediente técnico del fabricante. Los importadores deben tener la documentación disponible para las autoridades.' },
      { q: '¿La certificación CE retrasa la producción?', a: 'No si está planificada: la certificación corre en paralelo al utillaje y al muestreo. Construir según una categoría declarada desde el inicio no añade plazo relevante frente a improvisar la conformidad después.' },
    ],
    related: [
      { label: 'Certificación de botes inflables', href: '/inflatable-boat-certification' },
      { label: 'Guía de investigación sobre certificación CE', href: '/research/ce-certification-guide' },
      { label: 'Guía del comprador OEM', href: '/research/oem-buyer-guide' },
      { label: 'Pilar de desarrollo de producto', href: '/product-development' },
    ],
  },
]

const GUIDES_BY_LOCALE: Record<string, Guide[]> = { en: GUIDES, es: GUIDES_ES }

export function localizedGuides(locale: string): Guide[] {
  return GUIDES_BY_LOCALE[locale] ?? GUIDES
}

export function getGuide(path: string, locale?: string): Guide | undefined {
  const slug = path.split('/').filter(Boolean).pop()
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

export function getGuideBySlug(slug: string, locale?: string): Guide | undefined {
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

/** Localized card copy for the /knowledge hub (guide pages stay English). */
export interface GuideCard {
  slug: string
  title: string
  intro: string
}

export const GUIDE_CARDS: Record<string, GuideCard[]> = {
  en: GUIDES.map((g) => ({ slug: g.slug, title: g.title, intro: g.intro[0] })),
  es: [
    {
      slug: 'how-to-spec-a-rib-for-your-market',
      title: 'Cómo especificar un RIB para tu mercado',
      intro:
        'Una especificación de RIB es una cadena de equilibrios: material del casco, eslora, tela del tubo, consola y categoría de certificación.',
    },
    {
      slug: 'tube-fabric-selection',
      title: 'Selección de tela del tubo',
      intro:
        'PVC frente a CSM (Hypalon®): clima, gramaje, costuras y el coste real a cinco años para programas náuticos.',
    },
    {
      slug: 'importing-boats-from-china',
      title: 'Importar botes de China',
      intro:
        'Del requisito al puerto: muestreo, producción, inspección previa al envío, flete, incoterms y documentación de aduanas.',
    },
    {
      slug: 'boat-fleet-maintenance-planning',
      title: 'Mantenimiento de flotas',
      intro:
        'Paquetes de repuestos, rutinas diarias y de temporada, registro de horas y reordenes planificados para operadores de alquiler.',
    },
    {
      slug: 'ce-certification-prep-for-boats',
      title: 'Preparación de certificación CE',
      intro:
        'Directiva 2013/53/EU, categorías de diseño C/D, documentación del fabricante y la lista de preparación del comprador.',
    },
  ],
}

export function guideCard(locale: 'en' | 'es', slug: string): GuideCard | undefined {
  return GUIDE_CARDS[locale].find((c) => c.slug === slug)
}
