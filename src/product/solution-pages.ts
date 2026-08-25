import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'
import { pick } from './content'

/**
 * Solutions system (/solutions/custom-boats, /solutions/private-label-boats,
 * /solutions/fleet-rental, /solutions/rescue-professional,
 * /solutions/yacht-tender-dealers).
 *
 * Every page follows the same business logic: scenario → problems →
 * solution → process → case study → FAQ → CTA. Each page carries a CTA
 * temperature instead of a hard "Request Quote" pitch:
 *   cold → Learn More · warm → Discuss Your Project · hot → Request Manufacturing Proposal
 */

export type CtaLevel = 'cold' | 'warm' | 'hot'

export interface SolutionPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  /** schema.org Service type (GEO entity). */
  serviceType: string
  /** 40–70 word direct answer to the page's core buying question (AEO). */
  answer: string
  intro: string[]
  scenario: { title: string; body: string }
  pairs: { problem: string; solution: string }[]
  steps: { title: string; body: string }[]
  caseStudy: { title: string; body: string; tags: string[] }
  faqs: { q: string; a: string }[]
  ctaLevel: CtaLevel
  /** Per-page CTA label override (falls back to the temperature label). */
  ctaLabel?: string
}

/**
 * Canonical public path per solution slug. The flagship custom-boat topic is
 * served by the product-development content pillar page (pipeline, FAQs and
 * schema in one place); `/solutions/custom-boats` and the legacy pages are
 * 301 stubs onto it. Everything else keeps its `/solutions/{slug}` path.
 */
export const SOLUTION_PATHS: Record<string, string> = {
  'custom-boats': '/product-development',
}

export function solutionPath(slug: string): string {
  return SOLUTION_PATHS[slug] ?? `/solutions/${slug}`
}

export const solutionPages: Localized<SolutionPageData[]> = {
  en: [
    {
      slug: 'custom-boats',
      navLabel: 'Custom Boat Manufacturing',
      metaTitle: 'Custom RIB & Inflatable Boat Development | Customized Boats',
      metaDescription:
        'Develop custom RIB and inflatable boats with Neptunor. We support product requirements, customization, prototypes and manufacturing for businesses and organizations.',
      kicker: 'Custom Boat Manufacturer',
      serviceType: 'Custom RIB & Inflatable Boat Development',
      answer:
        'We develop custom RIB boats, inflatable boats and tenders from your requirement — hull material, length, tube fabric, console, graphics and packaging — through engineering, sampling and production. Projects start at 90–100+ pcs per approved configuration (volume); samples ship in 10–15 days, and production runs 30–45 days after confirmed PO and deposit.',
      h1: 'Custom Boats Built Around Your Requirements',
      intro: [
        'You need boats built to your specification — hull type, length, tubes, console, graphics, packaging — without running a shipyard yourself. We are the manufacturing partner that takes your requirement and returns a deliverable product.',
        'Every project is handled by a dedicated specialist who manages design, samples, production and delivery, so you always know where your order stands.',
      ],
      scenario: {
        title: 'You need boats built to your specification',
        body: 'A product requirement — not a catalog pick. Your hull preferences, your graphics, your quality level, your packaging. We engineer, sample and produce on proven platforms, with flexibility from the first small run.',
      },
      pairs: [
        {
          problem: 'Factory catalogs only offer stock models you cannot change.',
          solution: 'We produce custom boats with your hull choice, layout, graphics and specifications — from first sample to full production runs.',
        },
        {
          problem: 'Big minimums lock you into inventory before the market is validated.',
          solution: 'Standard volume runs start from 90–100+ pcs per configuration, while pilot runs on existing platforms start from 20–50 pcs — so first runs stay small while unit pricing stays fair.',
        },
        {
          problem: 'You have no naval architecture or engineering team on your side.',
          solution: 'Our in-house engineering team turns an idea, sketch or reference hull into production-ready drawings across hull, tubes, console and deck layout.',
        },
        {
          problem: 'Unknown factory quality and slow communication.',
          solution: 'A project specialist owns samples, QC milestones and delivery timelines from start to finish — one point of contact, clear updates.',
        },
      ],
      steps: [
        { title: 'Submit your project', body: 'Tell us your requirements, or share sketches and reference images.' },
        { title: 'Design & sample', body: 'We develop drawings and ship a physical sample within 10–15 days.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 30–45 days with seven-stage QC (Node 01–07).' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional crating, plus reorder support at consistent quality.' },
      ],
      caseStudy: {
        title: 'Water-sports brand product extension',
        body: 'A water-sports brand moved into boating with a branded aluminum RIB line. We developed the boat from a rough brief, reached sample approval in 15 days and produced the first run of 50 units in 30–45 days.',
        tags: ['RIB development', 'Branded livery', 'First production run'],
      },
      faqs: [
        {
          q: 'Can you develop a boat from my idea?',
          a: 'Yes. We help evaluate your requirements and develop a production-ready solution — from concept and drawings to a physical sample.',
        },
        {
          q: 'Can I customize hulls, tubes and colors?',
          a: 'Yes. Hull material and length, tube fabric and colors, console type, deck layout, graphics and branding elements are all specified per project.',
        },
        {
          q: 'What is the minimum order for custom boat manufacturing?',
          a: 'Standard volume runs start from 90–100+ pcs per configuration, with pilot runs from 20–50 pcs on existing platforms and co-branded runs from 5–10 pcs. New hull or console tooling starts at 50–100+ pcs and adds 20–35 days. Larger quantities unlock better unit pricing, and reorders keep your tooling and designs.',
        },
        {
          q: 'What can be customized on a boat?',
          a: 'Hull material and length, tube diameter and fabric, console and steering options, seating layouts, lifting points, graphics and livery, accessories and packaging.',
        },
        {
          q: 'Do you provide samples before production?',
          a: 'Yes — a physical sample is produced and approved before any production run. Sample time is typically 10–15 days.',
        },
        {
          q: 'Can you handle my brand assets only, without a full design team?',
          a: 'Yes. Our design team develops production-ready artwork from your logo, brand colors or a rough concept.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Discuss Your Custom Boat Project',
    },
    {
      slug: 'private-label-boats',
      navLabel: 'Private Label Boats',
      metaTitle: 'Private Label Boat Manufacturing | Custom RIB & Dinghy Production',
      metaDescription:
        'Neptunor provides private label boat manufacturing for existing brands, helping develop customized RIBs, dinghies and tenders from specifications to production.',
      kicker: 'Private Label Boats',
      serviceType: 'Private Label Boat Manufacturing',
      answer:
        'Private label puts your brand on proven, ready-to-produce boat platforms without new tooling. Pick a base model, apply your logo, colors, packaging and accessories, and order from 5–10 co-branded units scaling to 90–100+ pcs per configuration. It is the fastest, lowest-risk way to launch; samples take 10–15 days and production 30–45 days after PO.',
      h1: 'Private Label Boat Manufacturing For Your Brand',
      intro: [
        'Private label production lets you launch a boat line under your own brand without investing in tooling or a factory. Your logo, colors and packaging go on quality-verified platforms, with quantities that grow with demand.',
        'We support the product side so you can focus on the brand side: artwork, retail packaging and reorder management are handled by us.',
      ],
      scenario: {
        title: 'You have a brand — and need products under it',
        body: 'A brand identity without inventory. You want a sellable boat line carrying your name, at a quantity that matches your stage — from a first validation batch to repeat container orders.',
      },
      pairs: [
        {
          problem: 'Branding only on a sticker — the product still looks generic.',
          solution: 'Full brand integration: tube and hull livery, logo, upholstery, branded accessories and retail cartons designed around your identity.',
        },
        {
          problem: 'First orders force you to buy containers you may not sell.',
          solution: 'Start with a 20–50 unit pilot batch on a standard platform, then scale to standard volume runs of 90–100+ pcs per configuration — validate the market before big batches.',
        },
        {
          problem: 'Artwork and retail packaging development feels out of reach.',
          solution: 'Your brand assets are turned into production-ready livery, labels and carton artwork by our design team.',
        },
        {
          problem: 'Reorders drift in quality or availability.',
          solution: 'Tooling and BOM records stay yours, and reorders run on the same verified platforms at consistent quality.',
        },
      ],
      steps: [
        { title: 'Share your brand', body: 'Send your logo, colors and any existing brand assets.' },
        { title: 'Develop artwork', body: 'We design livery, upholstery accents and retail packaging around your brand.' },
        { title: 'Approve sample', body: 'A physical sample confirms colors, finish and packaging.' },
        { title: 'Produce & deliver', body: 'Production runs to your quantity, with QC and export handled end to end.' },
      ],
      caseStudy: {
        title: 'New brand, first production order',
        body: 'A marine retailer launched its own dinghy line from just a logo. We developed the full livery and retail-carton artwork, produced a first run of 50 units for market testing, then scaled to a full production order within two seasons.',
        tags: ['Brand development', 'Retail packaging', 'Scaled production'],
      },
      faqs: [
        {
          q: 'What is private label boat manufacturing?',
          a: 'Private label boat manufacturing allows businesses to sell RIBs, dinghies and tenders under their own brand with customized specifications and production support.',
        },
        {
          q: 'Can existing brands develop new boat products?',
          a: 'Yes. Neptunor supports brands looking to expand into boats — platform selection, specification adjustment, custom livery and manufacturing.',
        },
        {
          q: 'What is included in a private label boat program?',
          a: 'Your brand on the boat itself — livery, logo, upholstery accents — plus optional branded pumps, oars, carry bags, manuals and retail cartons: a complete sellable product under your name.',
        },
        {
          q: 'Can the design change between orders?',
          a: 'Yes. Once brand assets are production-ready, reorders can refresh livery, colors or packaging at any time.',
        },
        {
          q: 'We only have a logo. Can you still help?',
          a: 'Yes. Our design team develops the full livery and packaging artwork from your logo and brand colors.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discuss Your Private Label Program',
    },
    {
      slug: 'fleet-rental',
      navLabel: 'Marina & Rental Fleets',
      metaTitle: 'Boat Fleets for Marinas, Resorts & Rentals | Branded Fleet Supply',
      metaDescription:
        'Equip marinas, resorts and rental operations with durable branded boats, spares packages and fleet programs from Neptunor.',
      kicker: 'Marina & Rental Fleets',
      serviceType: 'Marina, Resort & Rental Fleet Supply',
      answer:
        'We supply branded RIBs and inflatable boats for marinas, resorts and rental operators, built for daily guest use: reinforced collars, wear-resistant hulls and tiered MOQs from 20–50 pilot units up to 90–100+ for fleet rollouts. Boats carry your logo and colors, and we advise on storage, maintenance and reorder schedules.',
      h1: 'Durable Fleet Solutions For Marinas, Resorts & Rentals',
      intro: [
        'Rental fleets need to survive daily guest use, store efficiently between seasons and represent your operation. We build durable, guest-friendly boats in your colors and structure the fleet program around how you actually operate.',
        'Quantities are recommended from usage patterns, not guesses — and reorder programs keep the fleet fresh season after season.',
      ],
      scenario: {
        title: 'You run water activities for guests or renters',
        body: 'Guests expect a memorable time on the water, and the equipment represents your property. You need boats tough enough for daily rental, easy to handle and store, and branded to match the operation.',
      },
      pairs: [
        {
          problem: 'Guest fleets wear out fast with daily rental use.',
          solution: 'Fleet-grade construction: reinforced collar sections, heavy rubbing strakes and UV-resistant fabrics built for repeated sessions.',
        },
        {
          problem: 'Storage space is limited outside the season.',
          solution: 'Inflatable models and compact aluminum RIBs stack, rack or deflate into minimal storage when the season ends.',
        },
        {
          problem: 'Equipment looks generic, not like your property.',
          solution: 'Hull and collar livery, logos and upholstery in your colors — including branded accessories and safety gear.',
        },
        {
          problem: 'Replacing and refreshing the fleet is uncoordinated.',
          solution: 'A fleet reorder program with consistent quality, spare-parts packages and honest quantity guidance.',
        },
      ],
      steps: [
        { title: 'Describe your operation', body: 'Guest volume, waterfront, storage and season length.' },
        { title: 'Get a fleet plan', body: 'We recommend boat types and quantities based on usage patterns.' },
        { title: 'Approve branded sample', body: 'Your colors and logo confirmed on a physical boat.' },
        { title: 'Receive and maintain', body: 'Delivery, spares packages and a reorder program for future seasons.' },
      ],
      caseStudy: {
        title: 'Coastal resort guest fleet',
        body: 'A coastal resort equipped its beach program with 30 branded boats — compact aluminum RIBs for guided trips and inflatables for free rental — in resort colors with matching accessories. The mixed fleet stores in a single boathouse off-season, and the high-wear units were refreshed after the second season at consistent quality.',
        tags: ['Branded guest fleet', 'Mixed fleet', 'Seasonal refresh'],
      },
      faqs: [
        {
          q: 'Can resorts and marinas customize fleets with their logo?',
          a: 'Yes. Operators can customize livery, colors and accessories according to project requirements — full branding in your property colors.',
        },
        {
          q: 'Can you supply multiple units for fleet operations?',
          a: 'Yes. Production plans can be developed based on fleet requirements, from a starter batch to seasonal refresh programs with consistent configurations.',
        },
        {
          q: 'How many boats does a rental operation need?',
          a: 'Most operations start with 20–50 boats and scale with demand. We recommend quantities based on your guest volume and rotation, not guesses.',
        },
        {
          q: 'Which hull type suits a rental fleet?',
          a: 'Aluminum RIBs for guided and high-abuse duty, fiberglass RIBs where ride comfort sells the experience, and inflatables for low-weight, easy-storage roles. Many operators run a mix.',
        },
        {
          q: 'Can the fleet carry our logo and colors?',
          a: 'Yes — hull and collar livery, logo application, upholstery branding and branded accessories are all part of the fleet program.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Request A Fleet Solution',
    },
    {
      slug: 'rescue-professional',
      navLabel: 'Rescue & Professional Boats',
      metaTitle: 'Rescue, Patrol & Dive Boats | Professional Agency Programs',
      metaDescription:
        'Professional-grade RIB boats for search and rescue, patrol agencies and dive teams — documented QC, mission fit-outs and procurement support from Neptunor.',
      kicker: 'Rescue & Professional Boats',
      serviceType: 'Rescue, Patrol & Dive Boat Programs',
      answer:
        'Professional buyers specify differently: mission consoles, electronics preparation, certified lifting points and paper trails that survive procurement audits. We build rescue, patrol and dive platforms with a documented seven-stage QC file per hull (Node 01–07), pilot batches from 20–50 pcs and framework volumes from 90–100+ pcs, with third-party inspection welcome.',
      h1: 'Mission Platforms For Rescue, Patrol & Dive Teams',
      intro: [
        'Search and rescue crews, harbor patrols, dive teams and other professional agencies need boats engineered for the mission — and documentation that stands up to tender committees. Our professional platforms are built and documented for exactly that.',
        'Every professional boat passes the same seven-stage QC gates (Node 01–07) and 120-point assembly checklist as the rest of the range, with per-hull records retained for 10-year traceability.',
      ],
      scenario: {
        title: 'Your agency needs mission-ready boats',
        body: 'Operational readiness dates, procurement rules and crew safety standards shape the purchase. You need boats fitted for the job — rescue ladders, towing posts, tank racks — plus batch consistency so crews can switch hulls without re-rigging.',
      },
      pairs: [
        {
          problem: 'Recreational-grade boats fail under professional duty cycles.',
          solution: 'Heavy-duty collars, reinforced transoms, self-draining decks and commercial fittings specified for daily emergency use.',
        },
        {
          problem: 'Procurement requires documented quality evidence.',
          solution: 'A documented QC file per hull covers all seven gates (Node 01–07), with CE (RCD 2013/53/EU) certification and ISO 6185 construction available per model.',
        },
        {
          problem: 'Every agency works differently — fit-outs vary widely.',
          solution: 'Mission consoles, chart-plotter and radar mounts, rescue ladders, towing posts, tank racks and oxygen brackets are configured per program and locked at prototype approval.',
        },
        {
          problem: 'Fleet replacements must arrive against operational dates.',
          solution: 'Batch scheduling against readiness dates, spare-parts packages and crew familiarization support come with the program.',
        },
      ],
      steps: [
        { title: 'Define the mission', body: 'Operating area, crew size, equipment list and readiness date.' },
        { title: 'Configure & prototype', body: 'Fit-out drawings and a prototype approval before batch production.' },
        { title: 'Produce & document', body: 'Batch production with per-hull QC records and third-party inspection if required.' },
        { title: 'Deliver & support', body: 'Export packing, spares packages and crew familiarization materials.' },
      ],
      caseStudy: {
        title: 'Coastal patrol fleet renewal',
        body: 'A coastal authority replaced its aging patrol fleet with purpose-built RIBs: mission consoles with electronics preparation, certified lifting points for davit launch, agency livery and a documented QC file per hull. Batch delivery was scheduled against crew training dates, and inspection was witnessed by a third party.',
        tags: ['Patrol platforms', 'Documented QC', 'Batch scheduling'],
      },
      faqs: [
        {
          q: 'What mission equipment can be factory-fitted?',
          a: 'Mission consoles with chart-plotter and radar mounts, self-draining decks, rescue ladders, towing posts, certified lifting points, tank racks and oxygen/first-aid brackets for dive teams.',
        },
        {
          q: 'Do you work with public-sector procurement processes?',
          a: 'Yes. We deliver a documented QC file per hull covering all seven gates (Node 01–07), support batch scheduling against operational readiness dates and welcome pre-shipment inspection by SGS, TÜV, BV or Intertek.',
        },
        {
          q: 'Which certifications apply to professional boats?',
          a: 'Boats are certified to CE under the Recreational Craft Directive 2013/53/EU (design categories C and D as applicable) and built to ISO 6185, under an ISO 9001 quality system.',
        },
        {
          q: 'Can dive teams order dedicated configurations?',
          a: 'Yes — dedicated dive platforms carry tank racks dimensioned to your teaching or operational loads, low-step stern ladders for re-entry with full gear and stowage mapped to dive procedures.',
        },
        {
          q: 'What quantities work for agency programs?',
          a: 'Pilot batches run from 20–50 pcs; framework volumes from 90–100+ pcs per configuration. Fleet consistency is maintained across batches so crews can switch hulls without re-rigging.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discuss An Agency Program',
    },
    {
      slug: 'yacht-tender-dealers',
      navLabel: 'Yacht Tenders & Dealers',
      metaTitle: 'Yacht Tenders & Dealer Networks | OEM Supply Programs',
      metaDescription:
        'Inflatable dinghies and yacht tenders for dealer networks and harbor programs — retail-ready packages, demo units and dealer support from Neptunor.',
      kicker: 'Yacht Tenders & Dealer Networks',
      serviceType: 'Yacht Tender & Dealer Supply Programs',
      answer:
        'We supply inflatable dinghies and yacht tenders to dealer networks and harbor programs: retail-proven packages from 2.7 m to 3.3 m, co-branded runs from 5–10 units, demo-unit support and spares packages. Samples ship in 10–15 days and production runs 30–45 days after confirmed PO and deposit.',
      h1: 'Tender Programs & Dealer Networks, Supplied Factory Direct',
      intro: [
        'Dealers and harbor programs need a tender line that sells itself on the showroom floor and survives the dock: complete packages, consistent quality across reorders and margins that work at volume.',
        'Whether you operate a dealership network, a yacht-charter base or a marina tender service, we configure the range, packaging and spares around how you sell and service.',
      ],
      scenario: {
        title: 'You sell or operate tenders, not just display them',
        body: 'Showroom appeal gets the first sale; reliability keeps the customer. You need a tender range with complete retail packages, dependable reorders and a supplier who supports demos, spares and warranty questions.',
      },
      pairs: [
        {
          problem: 'Incomplete packages stall retail sales.',
          solution: 'Complete retail kits — pump, oars, seat, repair kit, manual and printed carton — produced in-house and ready for the floor.',
        },
        {
          problem: 'Small first orders scare suppliers away.',
          solution: 'Co-branded runs start at 5–10 units on current platforms, pilot batches at 20–50 units, and volume tiers from 90–100+ pcs grow with your sell-through.',
        },
        {
          problem: 'Demo and display units eat margin.',
          solution: 'Demo-unit support and mixed orders let you stock display stock alongside sellable inventory within one production plan.',
        },
        {
          problem: 'After-sales requests arrive faster than parts.',
          solution: 'Spares packages — valves, repair kits, oars, pumps and floor panels — ship with the main order so service stays in-house.',
        },
      ],
      steps: [
        { title: 'Map the range', body: 'Models, floor types and package levels matched to your market.' },
        { title: 'Approve samples', body: 'Physical samples confirm finish, package contents and cartons.' },
        { title: 'Launch & sell', body: 'Production lands ahead of season with retail-ready packaging.' },
        { title: 'Reorder & support', body: 'Consistent reorders plus spares supply for after-sales service.' },
      ],
      caseStudy: {
        title: 'Dealer network tender line',
        body: 'A marine distributor built a two-model tender range for its dealer network: a 2.7 m air-deck dinghy and a 3.3 m slatted-floor utility model, both in house-brand livery with printed retail cartons. A 60-unit launch order covered six dealers, and reorders followed quarterly with identical specifications.',
        tags: ['Dealer network', 'Retail packaging', 'Quarterly reorders'],
      },
      faqs: [
        {
          q: 'What tender models can dealers stock?',
          a: 'The inflatable range spans 2.7–3.3 m — light air-deck dinghies for yacht owners and slatted-floor utility models for budget lines — each configurable in floor type, tube color and package contents.',
        },
        {
          q: 'What is included in a retail tender package?',
          a: 'The standard package: boat, bench seat, hand pump, aluminum oars, repair kit, carry bag and printed user manual, packed in a retail carton. Contents upgrade or trim per market.',
        },
        {
          q: 'Can we start with a small order?',
          a: 'Yes — co-branded runs start at 5–10 units on current platforms and pilot batches at 20–50 units, so networks can validate demand before volume commitments.',
        },
        {
          q: 'Do you support demo units for showrooms?',
          a: 'Yes. Demo units can be planned within the same production batch, and mixed orders across models and colorways are reviewed according to material and packaging requirements.',
        },
        {
          q: 'How do reorders stay consistent?',
          a: 'Approved BOMs lock materials, colors, fittings and packaging, so every reorder ships to the same verified specification your customers already know.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discuss A Dealer Program',
    },
  ],
  es: [
    {
      slug: 'custom-boats',
      navLabel: 'Fabricación de botes personalizados',
      metaTitle: 'Desarrollo de botes RIB e inflables personalizados | Soluciones a medida',
      metaDescription:
        'Desarrolla botes RIB e inflables personalizados con Neptunor. Ofrecemos apoyo de requisitos, personalización, muestras y fabricación para empresas y organizaciones.',
      kicker: 'Fabricante de botes personalizados',
      serviceType: 'Desarrollo de botes RIB e inflables personalizados',
      answer:
        'Desarrollamos botes RIB, inflables y neumáticas personalizadas a partir de tu requisito — material del casco, eslora, tela del tubo, consola, arte y embalaje — con ingeniería, muestras y producción. Los proyectos parten de 90–100+ uds. por configuración aprobada (volumen); las muestras llegan en 10–15 días y la producción tarda 30–45 días tras el PO y el depósito.',
      h1: 'Botes personalizados según tus requisitos',
      intro: [
        'Necesitas botes producidos según tus propias especificaciones — tipo de casco, eslora, tubos, consola, arte, embalaje — sin gestionar tu propio astillero. Somos ese socio de fabricación: recibimos tus requisitos y entregamos el producto terminado.',
        'Cada proyecto cuenta con un especialista dedicado que se ocupa del diseño, las muestras, la producción y la entrega, para que siempre sepas cómo va tu pedido.',
      ],
      scenario: {
        title: 'Necesitas botes producidos según especificación',
        body: 'Esto es un requisito de producto, no una elección de catálogo. Tu preferencia de casco, tu arte, tus requisitos de calidad, tu embalaje. Ejecutamos ingeniería, muestras y producción sobre plataformas probadas, manteniendo flexibilidad desde pequeños lotes.',
      },
      pairs: [
        {
          problem: 'El catálogo de la fábrica solo tiene modelos existentes que no se pueden modificar.',
          solution: 'Producimos botes personalizados según tu casco, distribución, arte y especificaciones, de la primera muestra a la producción completa.',
        },
        {
          problem: 'Los pedidos mínimos grandes te encierran en inventario antes de validar el mercado.',
          solution: 'Producción de volumen desde 90–100+ unidades por configuración, con pedidos piloto desde 20–50 unidades y precios unitarios justos.',
        },
        {
          problem: 'No tienes equipo propio de diseño ni de ingeniería naval.',
          solution: 'Contamos con equipo propio de ingeniería que convierte tu idea, boceto o casco de referencia en planos producibles de casco, tubos, consola y cubierta.',
        },
        {
          problem: 'Calidad de fábrica desconocida y comunicación lenta.',
          solution: 'Un especialista de proyecto dedicado gestiona muestras, puntos de control de calidad y plazos de entrega de principio a fin: un solo interlocutor y progreso transparente.',
        },
      ],
      steps: [
        { title: 'Envía tu proyecto', body: 'Cuéntanos tu requisito o comparte bocetos e imágenes de referencia.' },
        { title: 'Diseña y muestra', body: 'Desarrollamos los planos y enviamos una muestra física en 10–15 días.' },
        { title: 'Confirma y produce', body: 'Tras aprobar la muestra, producción en 30–45 días con control de calidad en siete etapas (Node 01–07).' },
        { title: 'Entrega y reordena', body: 'Exportación mundial con embalaje profesional y soporte de reorden para mantener la calidad.' },
      ],
      caseStudy: {
        title: 'Extensión de línea de una marca náutica',
        body: 'Una marca de deportes acuáticos entró en el sector náutico con una línea de RIB de aluminio con su marca. Desarrollamos el bote desde un boceto bruto: aprobación de muestra en 15 días y primera producción de 50 unidades en 30–45 días.',
        tags: ['Desarrollo de RIB', 'Librea de marca', 'Primera producción'],
      },
      faqs: [
        {
          q: '¿Podéis desarrollar un bote a partir de mi idea?',
          a: 'Sí. Te ayudamos a evaluar el requisito y a desarrollar una solución fabricable: del concepto y los planos a la muestra física.',
        },
        {
          q: '¿Se pueden personalizar cascos, tubos y colores?',
          a: 'Sí. Material y eslora del casco, tela y colores del tubo, tipo de consola, distribución de cubierta, arte y elementos de marca se especifican por proyecto.',
        },
        {
          q: '¿Cuál es el pedido mínimo para fabricación de botes personalizados?',
          a: 'La producción de volumen parte de 90–100+ unidades por configuración, con pilotos desde 20–50 unidades sobre plataformas existentes y co-branding desde 5–10 unidades. El utillaje nuevo de casco o consola parte de 50–100+ unidades y añade 20–35 días. A mayor cantidad, mejor precio unitario; los moldes y diseños se conservan para pedidos posteriores.',
        },
        {
          q: '¿Qué partes de un bote se pueden personalizar?',
          a: 'Material y eslora del casco, diámetro y tela del tubo, consola y dirección, distribución de asientos, puntos de izado, arte y librea, accesorios y embalaje.',
        },
        {
          q: '¿Proporcionáis muestras antes de la producción?',
          a: 'Sí: la muestra física se produce y aprueba antes de la producción en serie; el muestreo suele tardar 10–15 días.',
        },
        {
          q: 'No tenemos un equipo de diseño completo, solo material de marca. ¿Podemos trabajar juntos?',
          a: 'Sí. Nuestro equipo de diseño desarrolla planos producibles a partir de tu logo, colores de marca o concepto aproximado.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Comenta tu proyecto de bote personalizado',
    },
    {
      slug: 'private-label-boats',
      navLabel: 'Botes de marca privada',
      metaTitle: 'Fabricación de botes de marca privada | Producción RIB y neumática',
      metaDescription:
        'Neptunor ofrece fabricación de botes de marca privada para marcas existentes, del desarrollo a la producción de RIB, neumáticas y auxiliares personalizados.',
      kicker: 'Botes de marca privada',
      serviceType: 'Fabricación de botes de marca privada',
      answer:
        'La marca privada pone tu marca sobre plataformas náuticas probadas y listas para producir, sin utillaje nuevo. Elige un modelo base, aplica tu logo, colores, embalaje y accesorios, y pide desde 5–10 unidades de co-branding escalando a 90–100+ uds. por configuración. Es la vía más rápida y de menor riesgo para lanzar; las muestras tardan 10–15 días y la producción 30–45 días tras el PO.',
      h1: 'Fabricación de botes de marca privada para tu marca',
      intro: [
        'La marca privada te permite lanzar una línea de botes con tu propia marca sin invertir en utillaje ni fábrica. Tu logo, colores y embalaje se aplican sobre plataformas verificadas por calidad, y las cantidades crecen según la demanda.',
        'Nosotros nos ocupamos del lado del producto para que tú te centres en el lado de la marca: arte, embalaje minorista y logística de reorden corren de nuestra cuenta.',
      ],
      scenario: {
        title: 'Tienes una marca — necesitas los productos que la lleven',
        body: 'Una identidad de marca sin inventario. Quieres una línea de botes vendible con tu nombre, en cantidades que encajen con tu etapa: de la validación del primer lote a contenedores de reorden.',
      },
      pairs: [
        {
          problem: 'La marca solo vive en la pegatina: el producto sigue pareciendo genérico.',
          solution: 'Integración de marca completa: librea de tubos y casco, logo, tapicería, accesorios de marca y cajas minoristas diseñadas alrededor de tu identidad.',
        },
        {
          problem: 'El primer pedido te obliga a comprar contenedores que quizá no vendas.',
          solution: 'Empieza con un lote piloto de 20–50 unidades sobre una plataforma estándar y escala a lotes de volumen de 90–100+ unidades por configuración: valida el mercado antes de los lotes grandes.',
        },
        {
          problem: 'El desarrollo de arte y embalaje minorista parece inalcanzable.',
          solution: 'Nuestro equipo de diseño convierte tu material de marca en librea, etiquetas y arte de caja listos para producción.',
        },
        {
          problem: 'Los reordenes son inestables en calidad o plazos.',
          solution: 'Los utillajes y registros de BOM son tuyos; los reordenes se producen en las mismas plataformas verificadas con calidad constante.',
        },
      ],
      steps: [
        { title: 'Comparte tu marca', body: 'Envía tu logo, colores y material de marca existente.' },
        { title: 'Desarrollamos los planos', body: 'Diseñamos librea, detalles de tapicería y embalaje minorista alrededor de tu marca.' },
        { title: 'Confirma la muestra', body: 'La muestra física confirma colores, acabado y embalaje.' },
        { title: 'Produce y entrega', body: 'Producimos tus cantidades con control de calidad y exportación de principio a fin.' },
      ],
      caseStudy: {
        title: 'Marca nueva, primer pedido de producción',
        body: 'Un minorista náutico lanzó su línea de neumáticas con solo un logo. Completamos todo el diseño de librea y caja minorista, produjimos 50 unidades para probar el mercado y escalamos a un pedido completo de producción en dos temporadas.',
        tags: ['Desarrollo de marca', 'Embalaje minorista', 'Producción escalada'],
      },
      faqs: [
        {
          q: '¿Qué es la fabricación de botes de marca privada?',
          a: 'Permite a las empresas vender RIB, neumáticas y auxiliares bajo su propia marca, con especificaciones personalizadas y soporte de producción.',
        },
        {
          q: '¿Una marca existente puede desarrollar nuevos productos náuticos?',
          a: 'Sí. Neptunor apoya a marcas que quieren ampliarse a los botes: selección de plataforma, ajuste de especificaciones, librea personalizada y fabricación.',
        },
        {
          q: '¿Qué incluye un programa de botes de marca privada?',
          a: 'La marca vive en el propio bote: librea, logo y tapicería, además de bombas, remos, bolsas, manuales y cajas minoristas opcionales: un producto vendible completo con tu nombre.',
        },
        {
          q: '¿Se puede modificar el diseño entre pedidos?',
          a: 'Sí. Una vez que tu material de marca está listo para producción, puedes actualizar la librea, los colores o el embalaje en cualquier reorden.',
        },
        {
          q: 'Solo tenemos un logo, ¿podéis ayudarnos?',
          a: 'Sí. Nuestro equipo de diseño completa toda la librea y el embalaje con solo tu logo y tus colores de marca.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tu proyecto de marca privada',
    },
    {
      slug: 'fleet-rental',
      navLabel: 'Flotas para puertos y alquiler',
      metaTitle: 'Flotas náuticas para marinas, resorts y alquiler | Con marca',
      metaDescription:
        'Equipa marinas, resorts y operaciones de alquiler con botes duraderos de marca, paquetes de repuestos y programas de flota de Neptunor.',
      kicker: 'Flotas para puertos y alquiler',
      serviceType: 'Suministro de flotas para marinas, resorts y alquiler',
      answer:
        'Suministramos RIB e inflables con marca para marinas, resorts y operadores de alquiler, pensados para el uso diario de los huéspedes: collares reforzados, cascos resistentes al desgaste y MOQ escalonado desde 20–50 uds. de piloto hasta 90–100+ para despliegues de flota. Los botes llevan tu logo y colores, y asesoramos sobre almacenamiento, mantenimiento y reorden.',
      h1: 'Soluciones de flota duraderas para marinas, resorts y alquiler',
      intro: [
        'Las flotas de alquiler deben soportar el uso diario de los huéspedes, guardarse con eficiencia fuera de temporada y representar tu operación. Producimos botes duraderos y fáciles de usar con los colores de tu marca, y planificamos la flota según cómo operas de verdad.',
        'Las cantidades se recomiendan según patrones de uso, no por conjetura: los planes de reorden mantienen la flota fresca temporada tras temporada.',
      ],
      scenario: {
        title: 'Gestionas actividades acuáticas para huéspedes o clientes',
        body: 'Los huéspedes esperan experiencias inolvidables en el agua, y el equipamiento representa a tu propiedad. Necesitas botes resistentes para el alquiler diario, fáciles de manejar y guardar, y con la identidad de tu operación.',
      },
      pairs: [
        {
          problem: 'El uso diario de alquiler desgasta rápido las flotas.',
          solution: 'Construcción de grado flota: secciones de collar reforzadas, rodales de frotamiento pesados y telas anti-UV diseñadas para el uso repetido.',
        },
        {
          problem: 'El espacio de almacenamiento fuera de temporada es limitado.',
          solution: 'Modelos inflables y RIB compactos de aluminio que se apilan, estiba o desinflan en un almacenamiento mínimo al final de la temporada.',
        },
        {
          problem: 'El equipamiento parece genérico, no es tu propiedad.',
          solution: 'Librea de casco y collar, logos y tapicería en tus colores, incluidos accesorios y equipo de seguridad de marca.',
        },
        {
          problem: 'La renovación y actualización de la flota carece de coordinación.',
          solution: 'Plan de reorden de flota: calidad constante, paquetes de repuestos y recomendaciones de cantidad prácticas.',
        },
      ],
      steps: [
        { title: 'Describe tu operación', body: 'Afluencia, zona costera, condiciones de almacenamiento y duración de la temporada.' },
        { title: 'Recibe el plan de flota', body: 'Recomendamos tipos de bote y cantidades según los patrones de uso.' },
        { title: 'Confirma la muestra de marca', body: 'Verifica tus colores y logo en un bote físico.' },
        { title: 'Recibe y mantiene', body: 'Entrega, paquetes de repuestos y plan de reorden para las próximas temporadas.' },
      ],
      caseStudy: {
        title: 'Flota para huéspedes en un resort costero',
        body: 'Un resort costero equipó su programa de playa con 30 botes de marca — RIB compactos de aluminio para salidas guiadas e inflables para alquiler libre — en los colores del resort y con accesorios a juego. Toda la flota se guarda en una sola casa de botes fuera de temporada y las unidades más castigadas se renovaron tras la segunda temporada con calidad constante.',
        tags: ['Flota con marca para huéspedes', 'Flota mixta', 'Renovación por temporada'],
      },
      faqs: [
        {
          q: '¿Pueden resorts y marinas personalizar las flotas con su logo?',
          a: 'Sí. Los operadores pueden personalizar librea, colores y accesorios según los requisitos del proyecto: marca completa en los colores de la propiedad.',
        },
        {
          q: '¿Podéis suministrar múltiples unidades para operaciones de flota?',
          a: 'Sí. Podemos desarrollar planes de producción según las necesidades de la flota, desde el lote inicial hasta planes de renovación por temporada con configuraciones consistentes.',
        },
        {
          q: '¿Cuántos botes necesita una operación de alquiler?',
          a: 'La mayoría de las operaciones empieza con 20–50 botes y crece según la demanda. Recomendamos según la afluencia y la rotación, no por conjetura.',
        },
        {
          q: '¿Qué tipo de casco conviene a una flota de alquiler?',
          a: 'RIB de aluminio para salidas guiadas y servicio exigente, RIB de fibra donde la comodidad de navegación vende la experiencia, e inflables donde pesan peso y almacenamiento. Muchos operadores combinan varios tipos.',
        },
        {
          q: '¿La flota puede llevar nuestro logo y colores?',
          a: 'Sí: librea de casco y collar, impresión del logo, marca de tapicería y accesorios de marca forman parte del programa de flota.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Solicita el plan para tu flota',
    },
    {
      slug: 'rescue-professional',
      navLabel: 'Botes de rescate y profesionales',
      metaTitle: 'Botes de rescate, patrulla y buceo | Programas profesionales',
      metaDescription:
        'Botes RIB profesionales para socorro acuático, agencias de patrulla y equipos de buceo — control de calidad documentado, equipamiento de misión y apoyo de compra de Neptunor.',
      kicker: 'Botes de rescate y profesionales',
      serviceType: 'Programas de botes de rescate, patrulla y buceo',
      answer:
        'Los compradores profesionales especifican distinto: consolas de misión, preparación de electrónica, puntos de izado certificados y expedientes que superen auditorías de contratación. Fabricamos plataformas de rescate, patrulla y buceo con expediente de calidad documentado por casco en siete etapas (Node 01–07), lotes piloto desde 20–50 uds. y volúmenes marco desde 90–100+ uds., con inspección de terceros bienvenida.',
      h1: 'Plataformas de misión para rescate, patrulla y buceo',
      intro: [
        'Equipos de socorro acuático, patrullas portuarias, centros de buceo y otras agencias profesionales necesitan botes diseñados para la misión — y documentación que resista los procesos de licitación. Nuestras plataformas profesionales se construyen y documentan exactamente para eso.',
        'Cada bote profesional pasa las mismas siete puertas de control de calidad (Node 01–07) y la lista de montaje de 120 puntos que el resto de la gama, con registros por casco conservados para una trazabilidad de 10 años.',
      ],
      scenario: {
        title: 'Tu agencia necesita botes listos para la misión',
        body: 'Las fechas de disponibilidad operativa, las normas de contratación y la seguridad de las tripulaciones condicionan la compra. Necesitas botes equipados para el trabajo — escaleras de rescate, postes de remolque, portaequipajes — más consistencia entre lotes para que las tripulaciones cambien de casco sin reconfigurar nada.',
      },
      pairs: [
        {
          problem: 'Los botes de grado recreativo fallan bajo ciclos de uso profesional.',
          solution: 'Collares reforzados, espeles de popa reforzados, cubiertas autovaciantes y herrajes comerciales especificados para el uso diario de emergencia.',
        },
        {
          problem: 'La contratación pública exige evidencias de calidad documentadas.',
          solution: 'Un expediente de calidad por casco cubre las siete etapas (Node 01–07), con certificación CE (RCD 2013/53/EU) y construcción ISO 6185 disponibles por modelo.',
        },
        {
          problem: 'Cada agencia trabaja diferente: los equipamientos varían mucho.',
          solution: 'Consolas de misión, anclajes de plotter y radar, escaleras de rescate, postes de remolque, portabombonas y soportes de oxígeno se configuran por programa y se fijan en la aprobación del prototipo.',
        },
        {
          problem: 'Las reposiciones de flota deben llegar contra fechas operativas.',
          solution: 'Planificación por lotes contra fechas de disponibilidad, paquetes de repuestos y familiarización de tripulaciones incluidos en el programa.',
        },
      ],
      steps: [
        { title: 'Define la misión', body: 'Zona de operación, tamaño de tripulación, lista de equipo y fecha objetivo.' },
        { title: 'Configura y prototipa', body: 'Planos de equipamiento y aprobación de prototipo antes de la producción por lotes.' },
        { title: 'Produce y documenta', body: 'Producción por lotes con registros de calidad por casco e inspección de terceros si se requiere.' },
        { title: 'Entrega y apoya', body: 'Embalaje de exportación, paquetes de repuestos y material de familiarización para tripulaciones.' },
      ],
      caseStudy: {
        title: 'Renovación de flota de patrulla costera',
        body: 'Una autoridad costera sustituyó su flota de patrulla antigua por RIB construidos a medida: consolas de misión con preparación de electrónica, puntos de izado certificados para botadura con pluma, librea institucional y expediente de calidad documentado por casco. La entrega por lotes se planificó contra las fechas de formación de las tripulaciones y la inspección fue presenciada por un tercero.',
        tags: ['Plataformas de patrulla', 'Control de calidad documentado', 'Planificación por lotes'],
      },
      faqs: [
        {
          q: '¿Qué equipo de misión se puede instalar de fábrica?',
          a: 'Consolas de misión con anclajes de plotter y radar, cubiertas autovaciantes, escaleras de rescate, postes de remolque, puntos de izado certificados, portabombonas y soportes de oxígeno/primeros auxilios para equipos de buceo.',
        },
        {
          q: '¿Trabajáis con procesos de contratación del sector público?',
          a: 'Sí. Entregamos un expediente de calidad por casco que cubre las siete etapas (Node 01–07), planificamos lotes contra fechas de disponibilidad operativa y damos la bienvenida a inspecciones previas al envío por SGS, TÜV, BV o Intertek.',
        },
        {
          q: '¿Qué certificaciones aplican a los botes profesionales?',
          a: 'Los botes están certificados CE conforme a la Directiva Europea de Embarcaciones Deportivas 2013/53/EU (categorías de diseño C y D según corresponda) y construidos según ISO 6185, bajo un sistema de gestión ISO 9001.',
        },
        {
          q: '¿Los equipos de buceo pueden pedir configuraciones dedicadas?',
          a: 'Sí — las plataformas de buceo dedicadas llevan portabombonas dimensionados a tus cargas formativas u operativas, escalerillas de popa de peldaño bajo para reembarque con equipo completo y una distribución de equipo mapeada según los procedimientos de buceo.',
        },
        {
          q: '¿Qué cantidades encajan en programas de agencias?',
          a: 'Los lotes piloto van de 20–50 uds.; los volúmenes marco desde 90–100+ uds. por configuración. La consistencia de flota se mantiene entre lotes para que las tripulaciones cambien de casco sin reconfigurar nada.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta un programa institucional',
    },
    {
      slug: 'yacht-tender-dealers',
      navLabel: 'Auxiliares y redes de distribuidores',
      metaTitle: 'Neumáticas auxiliares y redes de distribuidores | Suministro OEM',
      metaDescription:
        'Neumáticas y auxiliares para redes de distribuidores y programas de puerto — paquetes minoristas, unidades demo y apoyo al canal de Neptunor.',
      kicker: 'Auxiliares y redes de distribuidores',
      serviceType: 'Programas de suministro para tenders y distribuidores',
      answer:
        'Suministramos neumáticas y auxiliares a redes de distribuidores y programas de puerto: paquetes minoristas probados de 2,7 a 3,3 m, lotes de co-branding desde 5–10 unidades, apoyo de unidades demo y paquetes de repuestos. Las muestras llegan en 10–15 días y la producción tarda 30–45 días tras PO confirmado y depósito.',
      h1: 'Programas de auxiliares y redes de distribuidores, directo de fábrica',
      intro: [
        'Los distribuidores y los programas de puerto necesitan una gama de auxiliares que se venda sola en el escaparate y aguante el pantalán: paquetes completos, calidad consistente entre reordenes y márgenes que funcionen a volumen.',
        'Tanto si gestionas una red de distribución, una base de charter o un servicio de auxiliares de marina, configuramos la gama, el embalaje y los repuestos según cómo vendes y das servicio.',
      ],
      scenario: {
        title: 'Vendes u operas auxiliares, no solo los exhibes',
        body: 'El atractivo en tienda consigue la primera venta; la fiabilidad fideliza al cliente. Necesitas una gama con paquetes minoristas completos, reordenes fiables y un proveedor que apoye demos, repuestos y preguntas de garantía.',
      },
      pairs: [
        {
          problem: 'Los paquetes incompletos frenan la venta minorista.',
          solution: 'Kits minoristas completos — bomba, remos, asiento, kit de reparación, manual y caja impresa — producidos internamente y listos para el suelo de tienda.',
        },
        {
          problem: 'Los primeros pedidos pequeños espantan a los proveedores.',
          solution: 'El co-branding parte de 5–10 unidades sobre plataformas actuales, los pilotos de 20–50 unidades y los tramos de volumen desde 90–100+ uds. crecen con tu venta.',
        },
        {
          problem: 'Las unidades demo se comen el margen.',
          solution: 'Apoyo de unidades demo y pedidos mixtos permiten tener material de exposición junto al inventario vendible dentro de un mismo plan de producción.',
        },
        {
          problem: 'Las solicitudes posventa llegan más rápido que los repuestos.',
          solution: 'Paquetes de repuestos — válvulas, kits de reparación, remos, bombas y paneles de suelo — viajan con el pedido principal para que el servicio quede en casa.',
        },
      ],
      steps: [
        { title: 'Define la gama', body: 'Modelos, tipos de suelo y niveles de paquete ajustados a tu mercado.' },
        { title: 'Aprueba muestras', body: 'Las muestras físicas confirman acabado, contenido del paquete y cajas.' },
        { title: 'Lanza y vende', body: 'La producción llega antes de temporada con embalaje listo para tienda.' },
        { title: 'Reordena y da servicio', body: 'Reordenes consistentes más suministro de repuestos para el servicio posventa.' },
      ],
      caseStudy: {
        title: 'Gama de auxiliares para red de distribuidores',
        body: 'Un distribuidor náutico construyó una gama de dos modelos para su red: una neumática de 2,7 m con suelo hinchable y un modelo utilitario de 3,3 m con suelo de listones, ambos con librea de marca propia y cajas minoristas impresas. Un pedido de lanzamiento de 60 unidades cubrió seis distribuidores, y los reordenes siguieron cada trimestre con especificaciones idénticas.',
        tags: ['Red de distribuidores', 'Embalaje minorista', 'Reordenes trimestrales'],
      },
      faqs: [
        {
          q: '¿Qué modelos de auxiliares puede tener un distribuidor?',
          a: 'La gama inflable abarca 2,7–3,3 m — neumáticas ligeras con suelo hinchable para propietarios de yates y modelos utilitarios de listones para líneas económicas — cada uno configurable en tipo de suelo, color de tubo y contenido del paquete.',
        },
        {
          q: '¿Qué incluye un paquete minorista de neumática?',
          a: 'El paquete estándar: bote, banco, bomba manual, remos de aluminio, kit de reparación, bolsa de transporte y manual impreso, en caja minorista. El contenido se mejora o recorta según mercado.',
        },
        {
          q: '¿Se puede empezar con un pedido pequeño?',
          a: 'Sí — el co-branding parte de 5–10 unidades sobre plataformas actuales y los pilotos de 20–50 unidades, así las redes validan demanda antes de comprometerse a volúmenes.',
        },
        {
          q: '¿Apoyáis unidades demo para escaparates?',
          a: 'Sí. Las unidades demo se pueden planificar dentro del mismo lote de producción, y los pedidos mixtos entre modelos y colorways se revisan según requisitos de material y embalaje.',
        },
        {
          q: '¿Cómo se mantiene la consistencia entre reordenes?',
          a: 'Los BOM aprobados fijan materiales, colores, herrajes y embalaje, así cada reorden llega con la misma especificación verificada que tus clientes ya conocen.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta un programa de distribución',
    },
  ],
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return pick(solutionPages, locale).find((p) => p.slug === slug)
}
