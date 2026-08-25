import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Series-level platform pages (/products/{series}).
 *
 * Five product-series categories (aluminum hull RIBs → inflatable dinghies),
 * each targeting a buyer-facing long-tail query ("custom aluminum RIB
 * manufacturer", "inflatable dinghy OEM", …). The pages aggregate every
 * product of the series, add series-level B2B context (MOQ, lead time,
 * customization) and funnel to /contact with the series prefilled.
 *
 * Facts referenced in the FAQ answers stay in sync with FACTS (moq tiers,
 * sample/production lead times, QC points) — keep them identical.
 */

export interface SeriesPageData {
  /** Product-series key, must match productFilters groups. */
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  faqs: { q: string; a: string }[]
}

export const seriesPages: Localized<SeriesPageData[]> = {
  en: [
    {
      slug: 'aluminum-rib',
      navLabel: 'Aluminum Hull RIBs',
      metaTitle: 'Custom Aluminum Hull RIBs — OEM Manufacturer | Neptunor',
      metaDescription:
        'Custom aluminum hull RIB boats manufactured under your brand — welded marine-grade hulls from 3.6 m to 4.7 m, OEM/ODM volume from 90–100+ pcs, samples in 10–15 days. Factory direct from Qingdao, China.',
      kicker: 'Series · Aluminum Hull RIBs',
      h1: 'Custom Aluminum Hull RIBs — The Workhorse Platform For Demanding Fleets',
      intro: [
        'An aluminum RIB pairs a welded, marine-grade metal hull with inflatable collar tubes: tough enough to work against docks and trailers all season, light enough to launch by hand or davit, and simple to maintain. It is the default choice for rental fleets, marinas, dive schools and patrol programs.',
        'We manufacture aluminum RIBs under your brand from 90–100+ pcs per configuration (volume), with pilot runs from 20–50 pcs. Three base lengths — rib-alloy-360 (3.6 m), rib-alloy-430 (4.3 m) and rib-alloy-470 (4.7 m) — cover tender, utility and dive/patrol duties; console type, tube fabric, colors and graphics are specified per project.',
      ],
      faqs: [
        {
          q: 'Can I customize an aluminum RIB for my brand?',
          a: 'Yes. Every model is a manufacturing base — you specify hull length, console type (center or jockey), tube fabric and colors, deck layout, lifting points, graphics and packaging. Configurations on existing hulls start at 20–50 pcs (pilot) and scale to 90–100+ pcs per configuration; runs that require new hull or console tooling start at 50–100+ pcs and add 20–35 days of tooling time.',
        },
        {
          q: 'What is the MOQ and lead time for aluminum RIBs?',
          a: 'Samples ship in 10–15 days so you can verify weld quality and finish before committing. Standard volume batches run 90–100+ pcs per configuration with production in 30–45 days after confirmed PO and deposit; co-branded runs are possible from 5–10 pcs on current hulls.',
        },
        {
          q: 'How is hull quality verified?',
          a: 'Hull panels are CNC-cut to 0.1 mm before welding, and every boat passes our seven-stage QC gates (Node 01–07) with a 120-point assembly checklist. Collar tube sets hold 0.35 bar over 24 hours — any drop above 0.02 bar means the boat is rejected — and serial-level records keep each hull traceable for 10 years.',
        },
        {
          q: 'Which certifications apply?',
          a: 'Boats are certified to CE under the Recreational Craft Directive 2013/53/EU (design categories C and D as applicable) and built to ISO 6185, under an ISO 9001 quality system. Third-party inspections (SGS, TÜV, BV, Intertek) are welcome before shipment.',
        },
      ],
    },
    {
      slug: 'fiberglass-rib',
      navLabel: 'Fiberglass Hull RIBs',
      metaTitle: 'Custom Fiberglass Hull RIBs — OEM Manufacturer | Neptunor',
      metaDescription:
        'Custom fiberglass hull RIB boats manufactured under your brand — molded hulls from 3.8 m to 6.4 m, gelcoat color matching, OEM/ODM volume from 90–100+ pcs. Factory direct from Qingdao, China.',
      kicker: 'Series · Fiberglass Hull RIBs',
      h1: 'Custom Fiberglass Hull RIBs — Molded Hulls From 3.8 m To 6.4 m',
      intro: [
        'A fiberglass RIB trades some abuse tolerance for ride comfort and finish: molded hulls plane smoothly, cut through chop with a drier ride, and accept gelcoat colors and fine detailing that make a retail range stand out. They are the platform of choice for dealers, day-cruiser ranges and larger guest operations.',
        'We mold fiberglass RIBs under your brand from 90–100+ pcs per configuration, with pilot runs from 20–50 pcs. The range spans rib-glass-380 (3.8 m) for tenders, rib-glass-520 (5.2 m) for family cruising and rib-glass-640 (6.4 m) for charter and guest duty — gelcoat colors, decking, consoles and graphics specified per project.',
      ],
      faqs: [
        {
          q: 'What can be customized on a fiberglass RIB?',
          a: 'Hull length within the three base models, gelcoat color matched to your sample or reference, deck layout and upholstery, console type, tube fabric and collar colors, graphics, seating and packaging. New tooling for a modified deck or console starts at 50–100+ pcs and adds 20–35 days.',
        },
        {
          q: 'What is the MOQ and lead time for fiberglass RIBs?',
          a: 'Samples ship in 10–15 days; standard volume batches run 90–100+ pcs per configuration with production in 30–45 days after confirmed PO and deposit. Pilot runs start at 20–50 pcs and co-branded runs at 5–10 pcs on current hulls.',
        },
        {
          q: 'Fiberglass or aluminum — which should our fleet or range use?',
          a: 'Choose aluminum where boats take abuse: rentals, marinas, dive schools and patrol duty value its impact resistance and easy repairs. Choose fiberglass where ride comfort and finish sell the boat: day cruising, guest excursions and retail ranges. Both are built through the same QC gates, and many customers run both side by side.',
        },
        {
          q: 'Which certifications apply?',
          a: 'Boats are certified to CE under the Recreational Craft Directive 2013/53/EU (design categories C and D as applicable) and built to ISO 6185, under an ISO 9001 quality system. Third-party inspections (SGS, TÜV, BV, Intertek) are welcome before shipment.',
        },
      ],
    },
    {
      slug: 'sport-console',
      navLabel: 'Sport & Console Boats',
      metaTitle: 'Custom Sport & Console Boats — OEM Manufacturer | Neptunor',
      metaDescription:
        'Custom sport and console RIB boats manufactured under your brand — sport-wave-450 and sport-wave-550 platforms, steering consoles and seating layouts, OEM volume from 90–100+ pcs.',
      kicker: 'Series · Sport & Console',
      h1: 'Custom Sport & Console Boats — Performance Platforms Built For Fun',
      intro: [
        'Console boats turn a stable RIB platform into recreation: a proper helm instead of tiller steering, forward-facing seats, and enough performance for water-sports towing. Sport models anchor the premium tier of rental fleets and give retail brands a headline product.',
        'We build sport and console boats under your brand around the sport-wave-450 and sport-wave-550 platforms — console and steering options, seating layouts, tow points, colors and graphics specified per project.',
      ],
      faqs: [
        {
          q: 'What console and seating options can be specified?',
          a: 'Center consoles with windscreen, jockey consoles for sport duty, hydraulic or mechanical steering, single or double bench seating, bow cushions and tow points. Layouts are drawn up per project and locked on the approved physical sample before production.',
        },
        {
          q: 'What is the MOQ and lead time for sport console boats?',
          a: 'Samples ship in 10–15 days; production runs 30–45 days after confirmed PO and deposit. Standard volume batches start at 90–100+ pcs per configuration, pilot runs at 20–50 pcs and co-branded runs at 5–10 pcs on current platforms.',
        },
        {
          q: 'Can sport boats be built for rental duty?',
          a: 'Yes. Rental-spec builds reinforce tubes and rubbing strakes, simplify fittings for daily handling and carry fleet graphics. Operators typically pair heavy-duty rental units with premium sport models as their upsell tier.',
        },
        {
          q: 'What engine setup do the platforms take?',
          a: 'Transom heights and rated-power ranges are fixed per model and confirmed on the specification sheet before sampling. We prepare the transom, cable routing and tank space to your engine choice; engines are mounted locally or by your service partner.',
        },
      ],
    },
    {
      slug: 'rescue-pro',
      navLabel: 'Rescue & Professional Boats',
      metaTitle: 'Rescue & Professional RIB Boats — OEM Manufacturer | Neptunor',
      metaDescription:
        'Professional-grade RIB boats for rescue services, patrol agencies and dive teams — rescue-guard-470, patrol-line-600 and dive-team-420 platforms with documented seven-stage QC.',
      kicker: 'Series · Rescue & Professional',
      h1: 'Rescue & Professional Boats — Mission Platforms With Documented Quality',
      intro: [
        'Professional buyers specify differently: mission consoles instead of lounges, electronics preparation, lifting points, and paper trails that survive procurement audits. Our rescue and professional platforms — rescue-guard-470, patrol-line-600 and dive-team-420 — are built and documented for exactly that.',
        'Every professional boat passes the same seven-stage QC gates (Node 01–07) and 120-point assembly checklist as the rest of the range, with per-hull records retained for 10-year traceability. Agency livery, mission fit-out and batch scheduling are specified per program.',
      ],
      faqs: [
        {
          q: 'What mission equipment can be factory-fitted?',
          a: 'Mission consoles with chart-plotter and radar mounts, self-draining decks, rescue ladders, towing posts, certified lifting points, tank racks and oxygen/first-aid brackets for dive teams. The fit-out list is agreed per program and locked at prototype approval before batch production.',
        },
        {
          q: 'Do you work with public-sector procurement processes?',
          a: 'Yes. We deliver a documented QC file per hull covering all seven gates (Node 01–07), support batch scheduling against operational readiness dates, offer spare-parts packages and crew familiarization, and welcome pre-shipment inspection by SGS, TÜV, BV or Intertek. Pilot batches run from 20–50 pcs; framework volumes from 90–100+ pcs per configuration.',
        },
        {
          q: 'Which certifications apply?',
          a: 'Boats are certified to CE under the Recreational Craft Directive 2013/53/EU (design categories C and D as applicable) and built to ISO 6185, under an ISO 9001 quality system.',
        },
        {
          q: 'Can dive teams order dedicated configurations?',
          a: 'Yes — the dive-team-420 platform carries tank racks dimensioned to your teaching loads, a low-step stern ladder for re-entry with full gear, oxygen-kit brackets and stowage mapped to dive procedures. Fleet consistency across boats is maintained so crews can switch hulls without re-rigging.',
        },
      ],
    },
    {
      slug: 'inflatable-dinghy',
      navLabel: 'Inflatable Dinghies & Tenders',
      metaTitle: 'Custom Inflatable Dinghies & Tenders — OEM Manufacturer | Neptunor',
      metaDescription:
        'Custom inflatable dinghies and yacht tenders manufactured under your brand — airtender-270 (2.7 m) and airdock-330 (3.3 m), air-deck floors, complete retail packages. Factory direct from Qingdao, China.',
      kicker: 'Series · Dinghies & Tenders',
      h1: 'Custom Inflatable Dinghies & Tenders — Light, Packable, Retail-Proven',
      intro: [
        'Small inflatable dinghies are the entry point of the category: light enough to carry, quick to inflate and simple to store — often the first boat that gets people onto the water. They are also the highest-volume SKUs in most retail ranges and the everyday tender of yacht harbors.',
        'We manufacture dinghies under your brand around the airtender-270 (2.7 m) and airdock-330 (3.3 m) platforms — air-deck or slatted floors, complete packages with pump, oars and repair kit, and retail-ready cartons produced in-house.',
      ],
      faqs: [
        {
          q: 'What floor types are available?',
          a: 'Air-deck floors (high-pressure inflatable panels) keep weight low and pack flat; slatted wooden or aluminum floors cost less and suit budget lines. Keel profiles, tube diameters and load ratings differ per model — specs are confirmed on the physical sample before volume production.',
        },
        {
          q: 'What does a complete retail package include?',
          a: 'The standard package: dinghy, bench seat, hand pump, aluminum oars, repair kit, carry bag and printed user manual, packed in a retail carton. Contents can be upgraded or trimmed per market — electric pumps and higher-grade bags are common upgrades.',
        },
        {
          q: 'What is the MOQ and lead time for dinghies?',
          a: 'Samples ship in 10–15 days; production runs 30–45 days after confirmed PO and deposit. Standard volume batches start at 90–100+ pcs per configuration, pilot runs at 20–50 pcs and co-branded runs at 5–10 pcs.',
        },
        {
          q: 'Can we launch a private-label dinghy line quickly?',
          a: 'Yes. Private-label artwork on tubes, seats and cartons is developed from your brand assets, verified on a physical sample, then locked as a BOM so repeat orders stay consistent. Retail barcodes, labels and manual versions per target market are handled within the same program.',
        },
      ],
    },
  ],
  es: [
    {
      slug: 'aluminum-rib',
      navLabel: 'RIB de casco de aluminio',
      metaTitle: 'RIB de casco de aluminio personalizados — Fabricante OEM | Neptunor',
      metaDescription:
        'Embarcaciones RIB de casco de aluminio personalizadas bajo tu marca: cascos soldados de aleación marina de 3,6 m a 4,7 m, volumen OEM/ODM desde 90–100+ uds., muestras en 10–15 días. Directo de fábrica en Qingdao, China.',
      kicker: 'Serie · RIB de casco de aluminio',
      h1: 'RIB de casco de aluminio personalizados: la plataforma todoterreno para flotas exigentes',
      intro: [
        'Un RIB de aluminio combina un casco metálico soldado de grado marino con tubos hinchables de collar: lo bastante resistente para trabajar contra pantalanes y remolques toda la temporada, ligero para botarlo a mano o con pluma, y sencillo de mantener. Es la opción por defecto para flotas de alquiler, marinas, escuelas de buceo y programas de patrulla.',
        'Fabricamos RIB de aluminio bajo tu marca desde 90–100+ uds. por configuración (volumen), con pedidos piloto desde 20–50 uds. Tres esloras base — rib-alloy-360 (3,6 m), rib-alloy-430 (4,3 m) y rib-alloy-470 (4,7 m) — cubren labores de auxiliar, utilitario y buceo/patrulla; tipo de consola, tejido de los tubos, colores y gráficos se especifican por proyecto.',
      ],
      faqs: [
        {
          q: '¿Puedo personalizar un RIB de aluminio para mi marca?',
          a: 'Sí. Cada modelo es una base de fabricación: especificas eslora del casco, tipo de consola (central o jockey), tejido y colores de los tubos, distribución de cubierta, puntos de izado, gráficos y embalaje. Las configuraciones sobre cascos existentes parten de 20–50 uds. (piloto) y escalan a 90–100+ uds. por configuración; las series que requieren utillaje nuevo de casco o consola parten de 50–100+ uds. y añaden 20–35 días de utillaje.',
        },
        {
          q: '¿Cuál es el pedido mínimo y el plazo de entrega de los RIB de aluminio?',
          a: 'Las muestras salen en 10–15 días para que verifiques la calidad de soldadura y el acabado antes de comprometerte. Los lotes de volumen estándar son de 90–100+ uds. por configuración, con producción en 30–45 días tras PO y depósito confirmados; las series de marca compartida son posibles desde 5–10 uds. sobre cascos actuales.',
        },
        {
          q: '¿Cómo se verifica la calidad del casco?',
          a: 'Los paneles del casco se cortan por CNC con tolerancia de 0,1 mm antes de soldar, y cada embarcación pasa nuestras siete puertas de control de calidad (Node 01–07) con una lista de verificación de montaje de 120 puntos. Los juegos de tubos aguantan 0,35 bar durante 24 horas: cualquier caída por encima de 0,02 bar conlleva el rechazo de la embarcación, y los registros por número de serie mantienen cada casco trazable durante 10 años.',
        },
        {
          q: '¿Qué certificaciones aplican?',
          a: 'Las embarcaciones están certificadas CE conforme a la Directiva de Embarcaciones de Recreo 2013/53/UE (categorías de diseño C y D según corresponda) y construidas según ISO 6185, dentro de un sistema de gestión ISO 9001. Las inspecciones de terceros (SGS, TÜV, BV, Intertek) antes del embarque son bienvenidas.',
        },
      ],
    },
    {
      slug: 'fiberglass-rib',
      navLabel: 'RIB de casco de fibra de vidrio',
      metaTitle: 'RIB de casco de fibra de vidrio personalizados — Fabricante OEM | Neptunor',
      metaDescription:
        'Embarcaciones RIB de casco de fibra de vidrio personalizadas bajo tu marca: cascos moldeados de 3,8 m a 6,4 m, igualación de color de gelcoat, volumen OEM/ODM desde 90–100+ uds.',
      kicker: 'Serie · RIB de casco de fibra de vidrio',
      h1: 'RIB de casco de fibra de vidrio personalizados: cascos moldeados de 3,8 m a 6,4 m',
      intro: [
        'Un RIB de fibra de vidrio cambia algo de tolerancia al abuso por confort de navegación y acabado: los cascos moldeados planean suaves, cortan la ola con una navegación más seca y admiten colores de gelcoat y detalles finos que hacen destacar una gama retail. Son la plataforma preferida para distribuidores, gamas de crucero costero y operaciones grandes de huéspedes.',
        'Moldeamos RIB de fibra de vidrio bajo tu marca desde 90–100+ uds. por configuración, con pedidos piloto desde 20–50 uds. La gama va del rib-glass-380 (3,8 m) como auxiliar, al rib-glass-520 (5,2 m) para crucero familiar y el rib-glass-640 (6,4 m) para chárter y uso de invitados: colores de gelcoat, cubierta, consolas y gráficos por proyecto.',
      ],
      faqs: [
        {
          q: '¿Qué se puede personalizar en un RIB de fibra de vidrio?',
          a: 'La eslora dentro de los tres modelos base, el color de gelcoat igualado a tu muestra o referencia, la distribución de cubierta y tapicería, el tipo de consola, el tejido y color de los tubos, los gráficos, los asientos y el embalaje. El utillaje nuevo para cubierta o consola modificadas parte de 50–100+ uds. y añade 20–35 días.',
        },
        {
          q: '¿Cuál es el pedido mínimo y el plazo de entrega de los RIB de fibra de vidrio?',
          a: 'Las muestras salen en 10–15 días; los lotes de volumen estándar son de 90–100+ uds. por configuración, con producción en 30–45 días tras PO y depósito confirmados. Los pilotos parten de 20–50 uds. y las series con marca compartida, de 5–10 uds. sobre cascos actuales.',
        },
        {
          q: '¿Fibra de vidrio o aluminio: qué conviene a nuestra flota o gama?',
          a: 'Elige aluminio donde las embarcaciones sufren golpes: alquiler, marinas, escuelas de buceo y patrulla valoran su resistencia al impacto y su reparación sencilla. Elige fibra de vidrio donde el confort y el acabado venden la embarcación: crucero costero, excursiones de invitados y gamas retail. Ambos pasan por las mismas puertas de control, y muchos clientes los combinan.',
        },
        {
          q: '¿Qué certificaciones aplican?',
          a: 'Las embarcaciones están certificadas CE conforme a la Directiva de Embarcaciones de Recreo 2013/53/UE (categorías de diseño C y D según corresponda) y construidas según ISO 6185, dentro de un sistema de gestión ISO 9001. Las inspecciones de terceros (SGS, TÜV, BV, Intertek) antes del embarque son bienvenidas.',
        },
      ],
    },
    {
      slug: 'sport-console',
      navLabel: 'Deportivos con consola',
      metaTitle: 'Deportivos con consola personalizados — Fabricante OEM | Neptunor',
      metaDescription:
        'Embarcaciones deportivas con consola personalizadas bajo tu marca: plataformas sport-wave-450 y sport-wave-550, consolas de dirección y distribuciones de asientos, volumen OEM desde 90–100+ uds.',
      kicker: 'Serie · Deportivos con consola',
      h1: 'Deportivos con consola personalizados: plataformas de rendimiento pensadas para disfrutar',
      intro: [
        'Las embarcaciones con consola convierten una plataforma RIB estable en recreo: un timón de verdad en lugar de caña, asientos orientados a proa y rendimiento suficiente para remolcar deportes acuáticos. Los modelos deportivos sostienen la gama alta de las flotas de alquiler y dan a las marcas retail un producto estrella.',
        'Construimos deportivos con consola bajo tu marca sobre las plataformas sport-wave-450 y sport-wave-550: opciones de consola y dirección, distribuciones de asientos, puntos de remolque, colores y gráficos especificados por proyecto.',
      ],
      faqs: [
        {
          q: '¿Qué opciones de consola y asientos pueden especificarse?',
          a: 'Consolas centrales con parabrisas, consolas jockey para uso deportivo, dirección hidráulica o mecánica, bancos individuales o dobles, cojines de proa y puntos de remolque. Las distribuciones se dibujan por proyecto y se fijan en la muestra física aprobada antes de producir.',
        },
        {
          q: '¿Cuál es el pedido mínimo y el plazo de entrega de los deportivos con consola?',
          a: 'Las muestras salen en 10–15 días; la producción corre entre 30 y 45 días tras PO y depósito confirmados. Los lotes de volumen estándar parten de 90–100+ uds. por configuración, los pilotos de 20–50 uds. y las series con marca compartida de 5–10 uds. sobre plataformas actuales.',
        },
        {
          q: '¿Pueden construirse deportivos para uso de alquiler?',
          a: 'Sí. Las versiones de alquiler refuerzan tubos y perfiles de roce, simplifican herrajes para el manejo diario y llevan gráficos de flota. Los operadores suelen combinar unidades reforzadas de alquiler con modelos deportivos como su escalón premium de venta.',
        },
        {
          q: '¿Qué motorización admiten las plataformas?',
          a: 'Las alturas de espejo y los rangos de potencia homologada están fijados por modelo y confirmados en la ficha técnica antes del muestreo. Preparamos el espejo, el paso de cables y el espacio de depósito según tu elección de motor; el montaje se realiza localmente o por tu taller de confianza.',
        },
      ],
    },
    {
      slug: 'rescue-pro',
      navLabel: 'Botes de rescate y profesionales',
      metaTitle: 'Botes RIB de rescate y profesionales — Fabricante OEM | Neptunor',
      metaDescription:
        'Botes RIB de nivel profesional para servicios de rescate, agencias de patrulla y equipos de buceo: plataformas rescue-guard-470, patrol-line-600 y dive-team-420 con control de calidad documentado en siete etapas.',
      kicker: 'Serie · Rescate y profesionales',
      h1: 'Botes de rescate y profesionales: plataformas de misión con calidad documentada',
      intro: [
        'El comprador profesional especifica distinto: consolas de misión en lugar de sillones, preparación para electrónica, puntos de izado y papeleo que sobrevive a auditorías de contratación pública. Nuestras plataformas de rescate y profesionales — rescue-guard-470, patrol-line-600 y dive-team-420 — están construidas y documentadas justo para eso.',
        'Cada bote profesional pasa por las mismas siete puertas de control de calidad (Node 01–07) y la lista de verificación de montaje de 120 puntos que el resto de la gama, con registros por casco conservados para trazabilidad de 10 años. Librea institucional, equipamiento de misión y calendario por lotes se especifican por programa.',
      ],
      faqs: [
        {
          q: '¿Qué equipo de misión puede instalarse de fábrica?',
          a: 'Consolas de misión con soportes de plotter cartográfico y radar, cubiertas autovaciables, escaleras de rescate, postes de remolque, puntos de izado certificados, bastidores de botellas y soportes de oxígeno/primeros auxilios para equipos de buceo. La lista de equipamiento se acuerda por programa y se fija en la aprobación del prototipo antes de la producción por lotes.',
        },
        {
          q: '¿Trabajáis con procesos de contratación pública?',
          a: 'Sí. Entregamos un expediente de control de calidad por casco que cubre las siete puertas (Node 01–07), apoyamos la planificación por lotes contra fechas de operatividad, ofrecemos paquetes de repuestos y familiarización de tripulaciones, y aceptamos inspección previa al embarque por SGS, TÜV, BV o Intertek. Los lotes piloto van desde 20–50 uds.; los volúmenes marco, desde 90–100+ uds. por configuración.',
        },
        {
          q: '¿Qué certificaciones aplican?',
          a: 'Los botes están certificados CE conforme a la Directiva de Embarcaciones de Recreo 2013/53/UE (categorías de diseño C y D según corresponda) y construidos según ISO 6185, dentro de un sistema de gestión ISO 9001.',
        },
        {
          q: '¿Pueden los equipos de buceo pedir configuraciones específicas?',
          a: 'Sí: la plataforma dive-team-420 lleva bastidores de botellas dimensionados a tus cargas de enseñanza, escalerilla de embarque de peldaño bajo para reembarcar con equipo completo, soportes de oxígeno y el almacenaje organizado según los procedimientos de buceo. Se mantiene la coherencia de flota para que las dotaciones cambien de casco sin reequipar.',
        },
      ],
    },
    {
      slug: 'inflatable-dinghy',
      navLabel: 'Neumáticas y auxiliares',
      metaTitle: 'Neumáticas y auxiliares personalizadas — Fabricante OEM | Neptunor',
      metaDescription:
        'Neumáticas y auxiliares personalizadas bajo tu marca: airtender-270 (2,7 m) y airdock-330 (3,3 m), suelos air-deck, paquetes retail completos. Directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Neumáticas y auxiliares',
      h1: 'Neumáticas y auxiliares personalizadas: ligeras, plegables y probadas en retail',
      intro: [
        'Las neumáticas pequeñas son la puerta de entrada a la categoría: ligeras de llevar, rápidas de inflar y fáciles de guardar — muchas veces la primera embarcación que acerca a la gente al agua. También son los SKU de mayor rotación en la mayoría de gamas retail y el auxiliar diario de los puertos deportivos.',
        'Fabricamos neumáticas bajo tu marca sobre las plataformas airtender-270 (2,7 m) y airdock-330 (3,3 m): suelos air-deck o de listones, paquetes completos con hinchador, remos y kit de reparación, y cajas retail producidas internamente.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de suelo hay disponibles?',
          a: 'Suelos air-deck (paneles inflables de alta presión) reducen peso y se pliegan plano; los suelos de listones de madera o aluminio cuestan menos y encajan en gamas económicas. Perfiles de quilla, diámetros de tubo y cargas máximas varían por modelo: las especificaciones se confirman en la muestra física antes de la producción en volumen.',
        },
        {
          q: '¿Qué incluye un paquete retail completo?',
          a: 'El paquete estándar: neumática, banco, hinchador manual, remos de aluminio, kit de reparación, bolsa de transporte y manual impreso, en caja retail. El contenido puede ampliarse o recortarse por mercado: hinchadores eléctricos y bolsas de mayor grado son mejoras habituales.',
        },
        {
          q: '¿Cuál es el pedido mínimo y el plazo de entrega de las neumáticas?',
          a: 'Las muestras salen en 10–15 días; la producción corre entre 30 y 45 días tras PO y depósito confirmados. Los lotes de volumen estándar parten de 90–100+ uds. por configuración, los pilotos de 20–50 uds. y las series con marca compartida de 5–10 uds.',
        },
        {
          q: '¿Podemos lanzar rápido una línea de neumáticas de marca privada?',
          a: 'Sí. El arte de marca privada en tubos, asientos y cajas se desarrolla a partir de tus activos, se verifica en muestra física y luego se bloquea como BOM para que los reordenes sean consistentes. Códigos de barras, etiquetas y versiones de manual por mercado objetivo se gestionan dentro del mismo programa.',
        },
      ],
    },
  ],
}

export function getSeriesPage(locale: Locale, slug: string): SeriesPageData | undefined {
  return seriesPages[locale].find((s) => s.slug === slug)
}
