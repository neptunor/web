import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Knowledge Center (/knowledge/*). Informational articles answer the
 * question-style queries around RIB boat and inflatable boat development
 * and manufacturing — the queries buyers research before ever reaching out.
 */

export interface KnowledgeArticle {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const knowledge: Localized<KnowledgeArticle[]> = {
  en: [
    {
      slug: 'how-rib-boats-are-built',
      navLabel: 'How RIB Boats Are Built',
      metaTitle: 'How RIB Boats Are Built | Neptunor',
      metaDescription:
        'How a RIB boat is built in the factory: aluminum or fiberglass hull fabrication, tube collar construction, assembly, testing and QC — step by step.',
      kicker: 'Knowledge',
      h1: 'How RIB Boats Are Built',
      intro:
        'A rigid inflatable boat combines a hard hull with inflatable collar tubes — two very different crafts joined on one production floor. Knowing how each stage works helps you brief the factory correctly, judge quotes fairly, and spot quality claims that do not hold up.',
      sections: [
        {
          title: 'Step 1: Hull Fabrication',
          body: [
            'Aluminum hulls start as marine-grade alloy panels cut by CNC to 0.1 mm tolerance, then rolled and welded into the hull form. Weld seam integrity is checked at dedicated stations before any panel moves downstream.',
            'Fiberglass hulls are molded instead: a gelcoated mold receives layers of glass and resin in a controlled layup schedule, then cures before demolding. The mold defines the finish — which is why fiberglass accepts gelcoat colors so well.',
          ],
        },
        {
          title: 'Step 2: Transom, Stringers and Deck',
          body: [
            'The transom carries the outboard, so it is reinforced to match the rated engine power of each model. Stringers stiffen the hull, and the deck — self-draining on professional models — is fitted with fuel-tank space, cable routing and drainage planned from the drawings.',
            'This is also where lifting points, cleats and rubbing strakes are positioned. Their placement is specified per model and verified against the frozen specification later in QC.',
          ],
        },
        {
          title: 'Step 3: Tube Collar Fabrication',
          body: [
            'The collar is built from coated fabric — PVC or CSM (Hypalon®) — cut into panels per pattern. Panels are welded into tube segments, segments into full tubes with internal baffles dividing them into separate air chambers.',
            'Welding is done by high-frequency (RF) machines for PVC or thermal welding depending on fabric, with temperature, pressure and dwell time logged per production run. Each chamber gets a valve.',
          ],
        },
        {
          title: 'Step 4: Collar-to-Hull Assembly',
          body: [
            'The collar mounts to the hull along its full perimeter — bonded and mechanically fastened so loads transfer cleanly between tube and hull. Alignment matters: an uneven collar changes handling and accelerates wear on the contact line.',
            'Consoles, seats, steering systems and other fittings are installed after the collar, following the model layout agreed on the approved sample.',
          ],
        },
        {
          title: 'Step 5: Testing, QC and Documentation',
          body: [
            'Every collar set is pressure tested — chambers hold 0.35 bar over 24 hours, and any drop above 0.02 bar rejects the boat. Finished boats pass seven inspection gates (Node 01–07) with a 120-point assembly checklist, and serial-level records keep each hull traceable for 10 years.',
            'For EU-bound models, CE documentation under the Recreational Craft Directive 2013/53/EU accompanies the build. A factory that can show you this pipeline — cutting, welding, assembly, test logs — is a factory you can audit.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-tube-construction-explained',
      navLabel: 'Inflatable Tube Construction Explained',
      metaTitle: 'Inflatable Tube Construction: Fabrics & Chambers | Neptunor',
      metaDescription:
        'What an inflatable boat tube is made of — PVC vs Hypalon®/CSM fabrics, air-chamber design, RF and thermo welding, valves and pressure testing — explained for buyers.',
      kicker: 'Knowledge',
      h1: 'Inflatable Tube Construction Explained',
      intro:
        'The tubes are the heart of any inflatable boat: they carry buoyancy, absorb impact and define durability. Understanding fabric choices, chamber design and weld quality lets you specify tubes with confidence instead of trusting brochure adjectives.',
      sections: [
        {
          title: 'Fabric Families: PVC vs CSM (Hypalon®)',
          body: [
            'PVC is the cost-efficient standard: it welds easily by high frequency, takes colors well and suits most recreational and rental duty. Quality is graded by weight — 1100 g/m² is a common working grade for boat collars.',
            'CSM, known by the trade name Hypalon®, is the premium choice: superior resistance to UV, fuel, chemicals and abrasion, with better flex life in extreme climates. It cannot be RF welded, so it is thermally welded or adhesive-bonded — one reason boats built with it cost more.',
          ],
        },
        {
          title: 'Chamber Design and Baffles',
          body: [
            'Tubes are divided into separate air chambers by internal baffles. More chambers mean more safety margin — a punctured chamber leaves the rest of the tube supporting the boat — and most boat collars carry three to five chambers plus a keel chamber where applicable.',
            'Ask any supplier how many independent chambers their configuration has and what happens if one fails. A credible answer comes with drawings, not adjectives.',
          ],
        },
        {
          title: 'Seams: RF and Thermo Welding',
          body: [
            'Overlap seams join fabric panels; the weld quality decides whether the seam outlives the fabric. RF welding melts the coating between electrodes under controlled temperature, pressure and dwell time — parameters logged per production run on mature lines.',
            'CSM fabric relies on thermal welding or hand-applied adhesive systems done by experienced operators. Whichever method applies, ask how seam integrity is inspected and what reject rate the process tolerates.',
          ],
        },
        {
          title: 'Valves and Pressure Testing',
          body: [
            'Industry-standard push-and-turn inflation valves let crews inflate and deflate quickly and replace valves without special tools. Valve seats should be inspectable and spares orderable — valves are the one consumable part of a tube.',
            'Finished chambers are proof-tested: we hold every chamber at 0.35 bar for 24 hours and auto-reject anything dropping more than 0.02 bar. When you compare factories, ask for their exact test pressure, hold time and rejection threshold — vague answers here predict vague quality.',
          ],
        },
      ],
    },
    {
      slug: 'how-to-choose-rib-oem-manufacturer',
      navLabel: 'How to Choose a RIB OEM Manufacturer',
      metaTitle: 'Choosing a RIB OEM Manufacturer: Buyer Checklist | Neptunor',
      metaDescription:
        'A factory verification checklist for RIB and inflatable boat buyers: plant audits, in-house capability, MOQ tiers, QC documentation, certifications and lead times.',
      kicker: 'Knowledge',
      h1: 'How to Choose a RIB OEM Manufacturer',
      intro:
        'Buying boats under your own brand comes down to one decision: which factory you trust with your first batch. This checklist covers what to verify about a RIB OEM manufacturer before you send a PO — the same questions procurement teams ask us.',
      sections: [
        {
          title: 'Verify the Plant Is Real and In-House',
          body: [
            'RIB production has distinct stages: hull fabrication (welding or molding), tube cutting and welding, assembly and testing. A true manufacturer performs them under one roof and lets you audit the floor live or by video.',
            'If a salesperson cannot show you the actual lines — CNC cutting, welding stations, a test area — assume you are talking to a trading desk with no control over quality or lead time.',
          ],
        },
        {
          title: 'Check Capacity Against Your Volume',
          body: [
            'Ask for annual and monthly output, number of workshops and production lines, and where your batch would sit in their schedule. An 18,000 m² plant running multiple automated lines produces differently than a yard building to order one hull at a time.',
            'Capacity matters most at reorder: a supplier who was fast at 20 units may not be at 500. Ask what happens to lead times when your volume triples.',
          ],
        },
        {
          title: 'Demand Documented QC, Not Promises',
          body: [
            'Look for named, quantified gates: how many inspection stages, what checklist runs on every unit, and the exact pressure-test protocol. Ours, as reference points: seven gates (Node 01–07), a 120-point assembly checklist, and a 0.35 bar / 24-hour hold rejecting drops above 0.02 bar.',
            'Also confirm traceability — serial-level records retained for years — and acceptance of third-party inspection (SGS, TÜV, BV, Intertek). Factories confident in their data welcome inspectors.',
          ],
        },
        {
          title: 'Confirm Certifications for Your Market',
          body: [
            'EU-bound boats need CE conformity under the Recreational Craft Directive 2013/53/EU with the right design category (C or D) for your use case, and construction to ISO 6185. The factory should state which certificates apply per model — not just display logos.',
            'ISO 9001 covers the management system; REACH and RoHS cover materials. Ask for certificate numbers and scopes per project.',
          ],
        },
        {
          title: 'Test Commercial Terms Before Committing',
          body: [
            'Real manufacturers offer tiered minimums: samples of 1–2 units, co-branding from 5–10 units, pilot batches from 20–50 units, standard volume runs from 90–100+ pcs, and new hull/console tooling from 50–100+ pcs adding roughly 20–35 days.',
            'Compare sample time (ours: 10–15 days) and production time (30–45 days after confirmed PO and deposit) across candidates — and be suspicious of anyone dramatically faster. Then order a small pilot: it tests communication, spec discipline and sample quality without betting the launch.',
          ],
        },
      ],
    },
  ],
  es: [
    {
      slug: 'how-rib-boats-are-built',
      navLabel: 'Cómo se construyen los botes RIB',
      metaTitle: 'Cómo se construyen los botes RIB | Neptunor',
      metaDescription:
        'Cómo se fabrica un bote RIB en la fábrica: cascos de aluminio o fibra, construcción del collar inflable, montaje, pruebas y control de calidad — paso a paso.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo se construyen los botes RIB',
      intro:
        'Un bote semirrígido combina un casco rígido con collares de tubos inflables — dos oficios muy distintos reunidos en una misma planta. Entender cada fase te permite comunicar bien tus requisitos a la fábrica, juzgar cotizaciones con justicia y detectar promesas de calidad que no se sostienen.',
      sections: [
        {
          title: 'Paso 1: Fabricación del casco',
          body: [
            'Los cascos de aluminio empiezan como paneles de aleación naval cortados por CNC con tolerancia de 0,1 mm, luego curvados y soldados hasta formar el casco. La integridad de las soldaduras se verifica en estaciones dedicadas antes de que ningún panel avance.',
            'Los cascos de fibra de vidrio se moldean: un molde con gelcoat recibe capas de fibra y resina según un esquema de laminado controlado, y cura antes del desmoldeo. El molde define el acabado — por eso la fibra acepta tan bien los colores de gelcoat.',
          ],
        },
        {
          title: 'Paso 2: Espejo de popa, refuerzos y cubierta',
          body: [
            'El espejo de popa soporta el motor fuera borda, así que se refuerza según la potencia homologada de cada modelo. Los refuerzos longitudinales rigidizan el casco, y la cubierta — autovaciante en modelos profesionales — integra espacio para depósito, paso de cables y drenaje previstos desde los planos.',
            'Aquí también se posicionan los puntos de izado, cornamusas y rodales de frotamiento. Su colocación se especifica por modelo y se verifica contra la especificación congelada en el control de calidad posterior.',
          ],
        },
        {
          title: 'Paso 3: Fabricación del collar',
          body: [
            'El collar se construye con tela recubierta — PVC o CSM (Hypalon®) — cortada en paneles según patronaje. Los paneles se sueldan en segmentos de tubo y estos en tubos completos con tabiques internos que crean cámaras de aire independientes.',
            'La soldadura se realiza con máquinas de alta frecuencia (RF) para PVC o por termofusión según la tela, registrando temperatura, presión y tiempo por lote. Cada cámara lleva su válvula.',
          ],
        },
        {
          title: 'Paso 4: Montaje collar-casco',
          body: [
            'El collar se fija al casco a lo largo de todo su perímetro — pegado y fijado mecánicamente para que las cargas se transmitan limpiamente entre tubo y casco. La alineación importa: un collar desalineado cambia el comportamiento y acelera el desgaste en la línea de contacto.',
            'Consolas, asientos, dirección y demás herrajes se instalan después del collar, siguiendo la distribución del modelo aprobada en la muestra física.',
          ],
        },
        {
          title: 'Paso 5: Pruebas, control de calidad y documentación',
          body: [
            'Cada juego de collares se somete a prueba de presión — las cámaras aguantan 0,35 bar durante 24 horas y cualquier caída superior a 0,02 bar rechaza el bote. Las unidades terminadas pasan siete puertas de inspección (Node 01–07) con una lista de montaje de 120 puntos, y los registros por número de serie mantienen cada casco trazable durante 10 años.',
            'Para modelos con destino a la UE, la documentación CE conforme a la Directiva 2013/53/EU acompaña la construcción. Una fábrica capaz de mostrarte esta cadena — corte, soldadura, montaje, registros de prueba — es una fábrica que puedes auditar.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-tube-construction-explained',
      navLabel: 'La construcción del tubo inflable, explicada',
      metaTitle: 'Construcción de tubos inflables: telas y cámaras | Neptunor',
      metaDescription:
        'De qué está hecho el tubo de un bote inflable — PVC frente a Hypalon®/CSM, diseño de cámaras, soldadura RF y térmica, válvulas y pruebas de presión — explicado para compradores.',
      kicker: 'Centro de conocimiento',
      h1: 'La construcción del tubo inflable, explicada',
      intro:
        'Los tubos son el corazón de cualquier bote inflable: aportan flotabilidad, absorben impactos y definen la durabilidad. Comprender telas, diseño de cámaras y calidad de soldadura te permite especificar tubos con confianza en lugar de fiarte de adjetivos de catálogo.',
      sections: [
        {
          title: 'Familias de tela: PVC frente a CSM (Hypalon®)',
          body: [
            'El PVC es el estándar eficiente en coste: se suelda fácilmente por alta frecuencia, admite bien los colores y sirve para la mayoría del uso recreativo y de alquiler. Su calidad se gradúa por gramaje — 1100 g/m² es un gramaje de trabajo habitual para collares náuticos.',
            'El CSM, conocido por el nombre comercial Hypalon®, es la opción premium: mejor resistencia a UV, combustible, productos químicos y abrasión, con mayor vida a la flexión en climas extremos. No admite soldadura RF, así que se suelda térmicamente o con adhesivos — una razón por la que los botes construidos con él cuestan más.',
          ],
        },
        {
          title: 'Diseño de cámaras y tabiques',
          body: [
            'Los tubos se dividen en cámaras de aire independientes mediante tabiques internos. Más cámaras significan más margen de seguridad — una cámara pinchada deja el resto del tubo sosteniendo el bote — y la mayoría de los collares llevan de tres a cinco cámaras más la cámara de quilla cuando aplica.',
            'Pide a cualquier proveedor cuántas cámaras independientes tiene su configuración y qué ocurre si una falla. Una respuesta creíble llega con planos, no con adjetivos.',
          ],
        },
        {
          title: 'Costuras: soldadura RF y térmica',
          body: [
            'Las costuras solapadas unen los paneles de tela; la calidad de la soldadura decide si la costura supera en vida a la propia tela. La soldadura RF funde el recubrimiento entre electrodos bajo temperatura, presión y tiempo controlados — parámetros registrados por lote en las líneas maduras.',
            'La tela CSM depende de soldadura térmica o sistemas de adhesivo aplicados a mano por operarios experimentados. Sea cual sea el método, pregunta cómo se inspecciona la integridad de las costuras y qué tasa de rechazo tolera el proceso.',
          ],
        },
        {
          title: 'Válvulas y pruebas de presión',
          body: [
            'Las válvulas de inflado estándar del sector permiten inflar y desinflar rápido y sustituir válvulas sin herramientas especiales. Los asientos deben ser inspeccionables y los repuestos pedibles — la válvula es la única pieza consumible del tubo.',
            'Las cámaras terminadas se prueban bajo presión: mantenemos cada cámara a 0,35 bar durante 24 horas y rechazamos automáticamente cualquier caída superior a 0,02 bar. Cuando compares fábricas, pide su presión de prueba exacta, el tiempo de mantenimiento y el umbral de rechazo — respuestas vagas aquí predicen calidad vaga.',
          ],
        },
      ],
    },
    {
      slug: 'how-to-choose-rib-oem-manufacturer',
      navLabel: 'Cómo elegir un fabricante OEM de RIB',
      metaTitle: 'Elegir un fabricante OEM de RIB: lista del comprador | Neptunor',
      metaDescription:
        'Lista de verificación para compradores de botes RIB e inflables: auditoría de planta, capacidad interna, tramos de MOQ, documentación de calidad, certificaciones y plazos.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo elegir un fabricante OEM de RIB',
      intro:
        'Comprar botes bajo tu propia marca se resume a una decisión: en qué fábrica confías tu primer lote. Esta lista cubre qué verificar sobre un fabricante OEM de RIB antes de enviar un PO — las mismas preguntas que nos hacen los equipos de compra.',
      sections: [
        {
          title: 'Verifica que la planta existe y trabaja internamente',
          body: [
            'La producción de RIB tiene etapas distintas: fabricación del casco (soldadura o moldeado), corte y soldadura de tubos, montaje y pruebas. Un fabricante real las realiza bajo el mismo techo y te deja auditar la planta en persona o por vídeo.',
            'Si el vendedor no puede enseñarte las líneas reales — corte CNC, estaciones de soldadura, zona de pruebas — asume que hablas con una mesa comercial sin control sobre la calidad ni los plazos.',
          ],
        },
        {
          title: 'Contrasta la capacidad con tu volumen',
          body: [
            'Pide producción anual y mensual, número de talleres y líneas de producción, y dónde quedaría tu lote en su calendario. Una planta de 18.000 m² con varias líneas automatizadas produce de otra manera que un astillero que construye un casco cada vez.',
            'La capacidad importa sobre todo en el reorden: un proveedor rápido con 20 unidades puede no serlo con 500. Pregunta qué pasa con los plazos cuando triplicas el volumen.',
          ],
        },
        {
          title: 'Exige control de calidad documentado, no promesas',
          body: [
            'Busca puertas de control nombradas y cuantificadas: cuántas etapas de inspección, qué lista corre sobre cada unidad y el protocolo exacto de prueba de presión. Como referencia, las nuestras: siete etapas (Node 01–07), lista de montaje de 120 puntos y prueba de 0,35 bar / 24 horas con rechazo por caídas superiores a 0,02 bar.',
            'Confirma también la trazabilidad — registros por número de serie conservados durante años — y la aceptación de inspección de terceros (SGS, TÜV, BV, Intertek). Las fábricas seguras de sus datos reciben inspectores con gusto.',
          ],
        },
        {
          title: 'Confirma las certificaciones para tu mercado',
          body: [
            'Los botes con destino a la UE necesitan conformidad CE conforme a la Directiva 2013/53/EU con la categoría de diseño correcta (C o D) para tu uso, y construcción según ISO 6185. La fábrica debe indicar qué certificados aplican por modelo — no solo exhibir logos.',
            'ISO 9001 cubre el sistema de gestión; REACH y RoHS cubren materiales. Pide números de certificado y alcance por proyecto.',
          ],
        },
        {
          title: 'Prueba las condiciones comerciales antes de comprometerte',
          body: [
            'Los fabricantes reales ofrecen mínimos por tramos: muestras de 1–2 unidades, co-branding desde 5–10 unidades, pilotos desde 20–50 unidades, volumen estándar desde 90–100+ uds., y utillaje nuevo de casco/consola desde 50–100+ uds. añadiendo unos 20–35 días.',
            'Compara el tiempo de muestra (el nuestro: 10–15 días) y de producción (30–45 días tras PO confirmado y depósito) entre candidatos — y desconfía de quien prometa mucho menos. Después pide un piloto pequeño: prueba comunicación, disciplina de especificación y calidad de muestra sin apostar el lanzamiento.',
          ],
        },
      ],
    },
  ],
}

export function getArticle(locale: Locale, slug: string): KnowledgeArticle | undefined {
  return knowledge[locale].find((a) => a.slug === slug)
}

export interface KnowledgeMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const knowledgeMeta: Localized<KnowledgeMeta> = {
  en: {
    metaTitle: 'Knowledge Center: RIB Boat Manufacturing Guides | Neptunor',
    metaDescription:
      'Practical guides on how RIB boats are built, inflatable tube construction and choosing a RIB OEM manufacturer for your boat program.',
    h1: 'Knowledge Center — Boat Manufacturing, Explained',
  },
  es: {
    metaTitle: 'Centro de conocimiento — guías de fabricación náutica | Neptunor',
    metaDescription:
      'Guías prácticas sobre cómo se construyen los botes RIB, la construcción de tubos inflables y cómo elegir un fabricante OEM.',
    h1: 'Centro de conocimiento — fabricación náutica, explicada',
  },
}
