import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry → challenge →
 * solution → product → process → result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  /** Project snapshot fields — standardized across all cases so buyers can compare. */
  customerType: string
  region: string
  productCategory: string
  projectStage: string
  manufacturingScope: string
  keyRequirements: string
  qualityFocus: string
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  /** 5–8 concrete customization items — buyer-verifiable scope of what changed. */
  customizations: string[]
  /** Project-specific inspection focus — 4–6 checks matched to the project type. */
  inspectionFocus: string[]
  /** Anonymized testimonial / confidentiality statement for the quote block. */
  confidentiality: string
  tags: string[]
  /** Headline numbers rendered as a metrics strip — flagship cases only. */
  metrics?: { value: string; label: string }[]
  /** Key takeaways rendered before the final CTA — flagship cases only. */
  takeaways?: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Rental Fleet Operators',
      region: 'Mediterranean — Spain, Italy, Greece',
      productCategory: 'Rental-Grade Aluminum RIBs & Air-Deck Dinghies (4.3 m + 3.3 m)',
      projectStage: 'Fleet evaluation → Sample approval → 3-batch phased delivery',
      manufacturingScope: 'Fleet specification, heavy-duty build, phased production, spare-parts program',
      keyRequirements: 'Durable rental craft, phased delivery across stations, lower early-replacement rate',
      qualityFocus: 'Weld integrity, tube pressure hold, fleet artwork, kit completeness',
      navLabel: 'Coastal Rental Fleet',
      metaTitle: 'Coastal Rental Fleet | 320 Boats in 120 Days — Neptunor',
      metaDescription:
        'How a Mediterranean rental operator built a 320-boat coastal fleet across Spain, Italy and Greece — three phased batches in 120 days, with an estimated 20–25% cut in early replacements.',
      kicker: 'Coastal Rental Project',
      h1: 'How a Mediterranean Rental Operator Built a 320-Boat Coastal Fleet in 120 Days',
      intro: [
        'A coastal rental operator running stations across Spain, Italy and Greece needed a durable fleet for the high-rotation summer season — delivered in three batches, in time for each station\'s opening.',
      ],
      industry: 'Rental Fleet Operators',
      requirement:
        '320 rental boats in two classes — 4.3 m aluminum RIBs and 3.3 m air-deck dinghies — across coastal stations in three countries, delivered in three phased batches within 120 days.',
      challenge:
        'Daily rental rotation wears equipment fast, and the operator\'s early-replacement rate was running at 20–25%. Stations opened on different dates across three countries, so a single delivery would not work — and neither would a one-model fleet.',
      solution:
        'Two durable rental platforms — the rib-alloy-430 for exposed-water duty and the airdock-330 for calm-bay rotation — built to a heavy-duty rental spec, with three production batches scheduled to land at each station\'s opening and per-station parts packs.',
      product:
        'Rental-grade aluminum RIBs (4.3 m) and air-deck dinghies (3.3 m) with reinforced tubes, UV-stable fabrics and per-station kits.',
      process: [
        { title: 'Fleet evaluation', body: 'Station openings and rotation volumes set the two classes and batch allocation.' },
        { title: 'Platform selection', body: 'The rib-alloy-430 and airdock-330 chosen for renter coverage and durability.' },
        { title: 'Phased production', body: 'Three batches scheduled against each station\'s opening date.' },
        { title: 'Delivery & support', body: 'Fleet shipped per batch with parts packs and repair guidance per station.' },
      ],
      result:
        'All three batches landed within 120 days, timed to each station\'s opening. The heavy-duty platforms are expected to cut the early-replacement rate by an estimated 20–25%, with parts packs covering field repairs between seasons.',
      outcome: '320 boats · 120 days · 3 batches · est. −20–25% early replacements.',
      metrics: [
        { value: '320', label: 'boats in two classes' },
        { value: '120', label: 'days from order to final batch' },
        { value: '3', label: 'phased deliveries, one per station opening' },
        { value: '−20–25%', label: 'estimated early-replacement rate' },
      ],
      takeaways: [
        'Phased batches let a fleet land exactly when each station opens — no idle inventory, no late start.',
        'Two platforms (a 4.3 m RIB and a 3.3 m dinghy) covered most renters without fragmenting the fleet.',
        'Heavy-duty construction is what moves the early-replacement number, not price alone.',
        'Per-station parts packs kept boats in service between full seasons.',
      ],
      customizations: [
        'rib-alloy-430 and airdock-330 platforms matched to renter profiles',
        'Reinforced tubes and UV-stable fabrics for high-rotation use',
        'Fleet artwork and numbering per station',
        'Three-batch production schedule aligned to station openings',
        'Per-station parts packs (valves, pumps, oars, repair kits) and repair guidance',
        'Split-site packing and delivery verification per batch',
      ],
      inspectionFocus: [
        'Weld and seam verification on every hull',
        'Inflation and 24-hour pressure-hold records on every tube set',
        'Fleet artwork and station numbering accuracy',
        'Accessory and parts-pack completeness per station',
        'Packing checks for split-site, multi-batch delivery',
      ],
      confidentiality:
        'By agreement, the operator\'s name and station locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Phased fleet delivery', 'Heavy-duty rental build', 'Lower replacement rate'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributors & Wholesalers',
      region: 'Europe',
      productCategory: 'Private Label Inflatable Dinghies (2 SKUs)',
      projectStage: 'Range planning → Sample approval → 90-day volume delivery',
      manufacturingScope: 'Private-label branding, retail packaging, volume production, reorder program',
      keyRequirements: 'Two market-proven SKUs under the distributor\'s own brand, EU retail packaging, season-date alignment',
      qualityFocus: 'Artwork accuracy, barcode and label per market, kit completeness, pressure-hold testing',
      navLabel: 'Distributor Private Label',
      metaTitle: 'EU Distributor Private Label | 1,200 Boats in 90 Days — Neptunor',
      metaDescription:
        'How a European distributor launched a 1,200-boat private-label dinghy line in 90 days — two SKUs, EU retail packaging, and a Q4 repeat order on the same locked specification.',
      kicker: 'Private Label Project',
      h1: 'How a European Distributor Launched a 1,200-Boat Private-Label Line in 90 Days',
      intro: [
        'A European distributor wanted its own branded boating line on the shelf for the summer season — two market-proven SKUs, complete retail packaging, and no factory relationships of its own.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement:
        '1,200 branded boats across two SKUs — the airtender-270 (2.7 m) and airdock-330 (3.3 m) — with EU retail packaging, delivered in 90 days.',
      challenge:
        'The summer shelf window is fixed, so all 1,200 boats and their packaging had to land together on time. Private-label packaging — barcodes, labels, manuals — had to match EU retail requirements, and the distributor had no inflatable-boat sourcing experience to draw on.',
      solution:
        'Two market-proven dinghy platforms chosen for the retail range, full private-label artwork and EU retail packaging handled in one program, and production scheduled so both SKUs shipped together inside the 90-day window — with the specification locked for a clean repeat order.',
      product:
        'Private label inflatable dinghies — airtender-270 and airdock-330, with branded pump, oars, carry bag and printed retail cartons.',
      process: [
        { title: 'Range planning', body: 'Two SKUs selected — 2.7 m and 3.3 m dinghies — for retail coverage.' },
        { title: 'Sample approval', body: 'Artwork, packaging and finish confirmed on physical boats.' },
        { title: '90-day production', body: 'Volume scheduled so both SKUs ship together for the season window.' },
        { title: 'Q4 reorder', body: 'Repeat order placed on the same locked specification.' },
      ],
      result:
        'All 1,200 boats with complete retail packaging shipped within 90 days, in time for the summer shelf window. The line sold through and the distributor returned in Q4 with a repeat order on the same locked specification.',
      outcome: '1,200 boats · 90 days · 2 SKUs · Q4 repeat order.',
      metrics: [
        { value: '1,200', label: 'boats in one launch' },
        { value: '90', label: 'days to full delivery' },
        { value: '2', label: 'retail SKUs, both in time for the window' },
        { value: 'Q4', label: 'repeat order on the same spec' },
      ],
      takeaways: [
        'Starting with two proven SKUs keeps inventory risk low while still filling a retail range.',
        'One program covering boats, accessories and packaging removes a common launch failure point.',
        'A fixed season date forces the schedule — production planning must treat it as non-negotiable.',
        'Locking the specification at launch makes repeat orders clean and consistent.',
      ],
      customizations: [
        'airtender-270 and airdock-330 platforms for the retail range',
        'Private-label tube, seat and carton artwork',
        'Branded pump, oars and carry bag per SKU',
        'Printed retail cartons, barcodes, labels and user manual for EU retail',
        'BOM and specification locked for repeat-order consistency',
        'Batched delivery aligned to the retail launch window',
      ],
      inspectionFocus: [
        'Artwork accuracy against approved private-label files',
        'Barcode, label and manual verification per market',
        'Kit completeness per SKU across the 1,200-boat run',
        'Pressure-hold spot checks during production',
        'Carton and packing verification per SKU',
      ],
      confidentiality:
        'By agreement, the distributor\'s name and retail customers are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Private label', '2-SKU retail range', 'Season-window delivery'],
    },
    {
      slug: 'marina-tender-fleet',
      customerType: 'Marinas & Yacht Clubs',
      region: 'Europe — Mediterranean and North Sea marinas',
      productCategory: 'Branded Aluminum RIB Tenders (rib-alloy-360 / rib-alloy-430)',
      projectStage: 'Fleet audit → Sample approval → Phased delivery across marinas',
      manufacturingScope: 'Tender standardization, marina livery, davit-ready fit-out, spares program',
      keyRequirements: 'One standard tender across marinas, property branding, reduced spares complexity',
      qualityFocus: 'Hull weld integrity, tube pressure hold, livery accuracy, lift-point verification',
      navLabel: 'Marina Tender Fleet',
      metaTitle: 'Marina Tender Fleet | 42 Branded RIB Tenders Across 6 Marinas — Neptunor',
      metaDescription:
        'How a European marina group standardized 42 branded aluminum RIB tenders across six marinas — one platform family, davit-ready fit-out and a single shared spares inventory.',
      kicker: 'Marina Project',
      h1: 'How a Marina Group Standardized 42 Branded RIB Tenders Across Six Locations',
      intro: [
        'A marina group operating six harbors wanted its workboats to feel part of the estate: tenders for crew transfer, mooring support and sailing-school safety duty — branded in the group livery, davit-compatible, and identical enough that any crew could swap hulls without relearning fittings.',
      ],
      industry: 'Marinas & Yacht Clubs',
      requirement:
        '42 branded tenders in two sizes — 3.6 m and 4.3 m aluminum RIBs — for crew transfer, mooring support and coaching duty, delivered per marina ahead of each season opening.',
      challenge:
        'Each marina ran different aging tenders from different sources; spares inventories were duplicated six times over, liveries clashed between properties, and slipway crews needed davit-rated lift points that older hulls simply lacked.',
      solution:
        'One standard tender family — the rib-alloy-360 for inner-harbor duty and the rib-alloy-430 for open-water transfer — fitted with certified lifting points, marina livery applied during production rather than painted afterwards, and a shared spares inventory serving all six locations.',
      product:
        'Branded aluminum RIB tenders — rib-alloy-360 (3.6 m) and rib-alloy-430 (4.3 m) with davit-rated lift points, group livery and console fit-out for daily harbor work.',
      process: [
        { title: 'Fleet audit', body: 'Per-marina duties, berth layouts and crane capacities defined the two-size mix.' },
        { title: 'Tender standardization', body: 'One console and fitting standard agreed for both lengths.' },
        { title: 'Livery & fit-out', body: 'Group colors, numbering and lift points applied during production.' },
        { title: 'Phased delivery & spares setup', body: 'Deliveries timed to season openings; one shared spares room stocked.' },
      ],
      result:
        'All 42 tenders were delivered across two seasons, each marina receiving its allocation before opening week. Six ad-hoc inventories became one shared spares room, and harbor crews report faster maintenance swap-outs because every hull carries the same fittings.',
      outcome: '42 tenders · 6 marinas · 2 standard models · one spares inventory.',
      metrics: [
        { value: '42', label: 'tenders across six marinas' },
        { value: '2', label: 'standard models — 3.6 m and 4.3 m' },
        { value: '1', label: 'shared spares inventory group-wide' },
        { value: 'est. −30%', label: 'tender downtime in season' },
      ],
      takeaways: [
        'Standardizing on two models beat letting every marina choose its own tender.',
        'Davit compatibility had to be designed in from the start — retrofitting never sticks.',
        'Applying livery during production avoids repaint cycles between seasons.',
        'One shared spares inventory replaced six duplicated ones and simplified audits.',
      ],
      customizations: [
        'Two tender models mapped to inner-harbor and open-water duties',
        'Certified lifting points and keel guards rated for davit launch and recovery',
        'Group livery, harbor names and hull numbering applied in-production',
        'Console and seating layout specified for crew-transfer and coaching duty',
        'Shared spares kits — valves, pumps, oars and repair materials — sized group-wide',
        'Delivery windows aligned to each marina\'s season opening',
      ],
      inspectionFocus: [
        'Hull weld and seam inspection on every tender',
        'Inflation and 24-hour pressure-hold records for every tube set',
        'Lifting-point fitment and load documentation review',
        'Livery and numbering accuracy against approved files',
        'Kit completeness and packing verification per marina allocation',
      ],
      confidentiality:
        'By agreement, the marina group\'s name and locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Fleet standardization', 'Davit-ready fit-out', 'Marina branding'],
    },
    {
      slug: 'dive-school-expansion',
      customerType: 'Dive Schools & Training Centers',
      region: 'Southern Europe — Mediterranean',
      productCategory: 'Dive-Configured Aluminum RIBs (rib-alloy-470)',
      projectStage: 'Sample approval → Fleet production → Expansion reorder',
      manufacturingScope: 'Dive fit-out, fleet branding, production, spare-parts support',
      keyRequirements: 'Dive-specific fit-out, uniform fleet for course logistics, identical future expansion',
      qualityFocus: 'Fit-out accuracy, weld integrity, tube pressure hold, reorder consistency',
      navLabel: 'Dive School Fleet Expansion',
      metaTitle: 'Dive School Fleet | 14 Dive-Ladder RIBs With Tank Racks — Neptunor',
      metaDescription:
        'How a dive school replaced a mixed fleet with 14 identically configured dive RIBs — tank racks, re-entry ladders and a locked specification for expansion reorders.',
      kicker: 'Dive Center Project',
      h1: 'How a Dive School Rebuilt Its Fleet Around 14 Identical Dive RIBs',
      intro: [
        'A dive school expanding its certification courses needed boats configured for real dive operations — tank stowage, easy water re-entry in full gear, and identical handling so instructors and students could switch hulls without missing a step.',
      ],
      industry: 'Dive Schools & Training Centers',
      requirement:
        '14 dive-configured RIBs with tank racks, stern re-entry ladders and oxygen-kit brackets, plus replacement parts for years of daily course use.',
      challenge:
        'The existing fleet was mismatched — different consoles, ladder styles and rack layouts meant instructors re-rigged gear between boats and lost course time. Budgets were tight, and the school\'s growth plan depended on ordering identical stock later.',
      solution:
        'One dive-proven 4.7 m platform — the rib-alloy-470 — with a standard dive fit-out repeated on every hull, fleet pricing for the volume, and a spare-parts package with repair guidance sized to daily charter-style use.',
      product:
        'Dive RIBs — rib-alloy-470 (4.7 m) aluminum hulls with tank racks, stern re-entry ladders, dive-flag brackets and fleet graphics, plus spares kits.',
      process: [
        { title: 'Center intake', body: 'Course formats, student loads and site conditions reviewed.' },
        { title: 'Fit-out definition', body: 'Tank racks, ladder style and stowage zones fixed as one standard.' },
        { title: 'Fleet branding', body: 'Center name, colors and hull numbering applied across the run.' },
        { title: 'Delivery & grow', body: 'Fleet delivered with spares; identical reorder reserved for expansion.' },
      ],
      result:
        'Instructors now run the same drill on every boat — racks, ladders and consoles match hull-for-hull — and the school booked an identical expansion reorder for the following season at the same locked specification.',
      outcome: 'Uniform dive fleet, identical expansion reorder.',
      customizations: [
        'rib-alloy-470 platform chosen for load capacity and sea behavior',
        'Tank racks dimensioned to maximum course loads',
        'Low-step stern re-entry ladder for climbing back in with full gear',
        'Oxygen-kit bracket, anchor kit stowage and dive-flag brackets',
        'Center branding and hull numbering across the fleet',
        'Reorder specification locked for identical future expansion',
      ],
      inspectionFocus: [
        'Fit-out dimensional checks — rack spacing and ladder mounting',
        'Hull weld and seam verification per boat',
        'Inflation and 24-hour pressure-hold records',
        'Branding and numbering accuracy across the run',
        'Spares-kit completeness before shipment release',
      ],
      confidentiality:
        'By agreement, the dive center\'s name and location are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Dive fit-out', 'Fleet pricing', 'Parts support'],
    },
    {
      slug: 'coastal-patrol-fleet',
      customerType: 'Coastal Agencies & Public-Sector Fleets',
      region: 'Western Europe — North Atlantic coastline',
      productCategory: 'Patrol-Spec Aluminum RIBs (patrol-line-600 / rescue-guard-470)',
      projectStage: 'Tender evaluation → Prototype approval → Two-batch delivery & crew familiarization',
      manufacturingScope: 'Mission console configuration, electronics preparation, agency livery, batch production, service program',
      keyRequirements: 'Mission-ready console/radar fit-out, crew safety in rough water, documented QC for public procurement',
      qualityFocus: 'Node 01–07 gate records, weld integrity, pressure-hold logs, fit-out verification',
      navLabel: 'Coastal Patrol Fleet',
      metaTitle: 'Coastal Patrol Fleet | 12 Mission-Spec Aluminum RIBs — Neptunor',
      metaDescription:
        'How a coastal agency took delivery of 12 patrol-spec aluminum RIBs in two configurations — mission console, radar preparation and a documented seven-gate QC file for public tender compliance.',
      kicker: 'Agency Project',
      h1: 'How a Coastal Agency Equipped Its Patrol Program With 12 Mission-Spec RIBs',
      intro: [
        'An agency running coastal surveillance and fisheries enforcement needed patrol boats that hold up in rough open water, carry mission electronics cleanly, and arrive with the documentation public-sector auditors expect.',
      ],
      industry: 'Coastal Agencies & Public-Sector Fleets',
      requirement:
        '12 patrol RIBs in two lengths — a 6.0 m patrol configuration and a 4.7 m interceptor — with mission consoles, radar/electronics preparation and a complete inspection file per hull.',
      challenge:
        'The public tender demanded traceable QC records for every boat delivered; the local sea state demanded a heavy-duty build; and crews rotating between hulls needed identical console layouts across both lengths to keep handovers safe.',
      solution:
        'Two patrol configurations built on proven professional hulls — patrol-line-600 and rescue-guard-470 — sharing one mission-console layout, reinforced tubes for rough-water duty, and the seven-gate QC file (Node 01–07) issued per hull for tender compliance.',
      product:
        'Patrol-spec aluminum RIBs — patrol-line-600 (6.0 m) and rescue-guard-470 (4.7 m) with mission consoles, electronics/radar mounts, towing posts, lifting points and agency livery.',
      process: [
        { title: 'Tender evaluation', body: 'Operational profile, sea state and audit requirements shaped the two specifications.' },
        { title: 'Prototype approval', body: 'Console layout, fit-out and livery locked on a physical prototype.' },
        { title: 'Batch production', body: 'Two batches built with full gate records per hull.' },
        { title: 'Delivery & familiarization', body: 'Sea-trial acceptance, crew walkthroughs and spares handed over per batch.' },
      ],
      result:
        'Both batches were accepted after sea trials without modification requests. Identical console layouts across both lengths cut cross-training time between crews, and the per-hull QC documentation passed the agency\'s audit with no follow-up items.',
      outcome: '12 boats · 2 configurations · audited QC file · cross-training simplified.',
      metrics: [
        { value: '12', label: 'patrol RIBs in two configurations' },
        { value: '7', label: 'QC gates (Node 01–07) documented per boat' },
        { value: '24 h', label: 'pressure-hold test on every tube set' },
        { value: '2', label: 'batches aligned to operational readiness dates' },
      ],
      takeaways: [
        'A common console layout across both lengths matters more to crews than extra features.',
        'Documentation is part of the product when the buyer is a public institution.',
        'Prototype approval locks the fit-out before batch production starts.',
        'Sea-trial acceptance protects both sides — issues surface before handover.',
      ],
      customizations: [
        'Mission console with chart-plotter and radar mounts wired to a common layout',
        'Heavy-duty tube reinforcement for sustained rough-water duty',
        'Towing posts, transom steps and certified lifting points',
        'Self-draining deck configuration for all-weather operations',
        'Agency livery, call signs and registration plates applied in-production',
        'Per-batch spares package and crew familiarization session',
      ],
      inspectionFocus: [
        'Completeness of Node 01–07 gate records per hull',
        'Hull weld and seam inspection on every boat',
        'Review of 24-hour pressure-hold logs for every tube set',
        'Electronics-mount and fit-out fastener verification',
        'Livery, call sign and registration accuracy before shipment',
      ],
      confidentiality:
        'By agreement, the agency\'s identity and operating areas are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Public-sector fleet', 'Mission console fit-out', 'Documented QC'],
    },
    {
      slug: 'resort-water-sports',
      customerType: 'Resort & Hospitality',
      region: 'Indian Ocean & Maldives',
      productCategory: 'Heavy-Duty Rental RIBs & Dinghies',
      projectStage: 'Sample approval → Volume production → Fleet refresh',
      manufacturingScope: 'Graphics, accessories, packing and fleet production',
      keyRequirements: 'Guest-fleet durability, saltwater and UV exposure, full property branding',
      qualityFocus: 'Tube pressure hold, artwork accuracy, accessory completeness, carton marking',
      navLabel: 'Resort Water-Sports Fleet',
      metaTitle: 'Resort Water-Sports Fleet | 60 Branded Boats — Neptunor',
      metaDescription:
        'How a resort group equipped four island properties with 60 branded rental boats — heavy-duty RIBs and dinghies, property graphics and seasonal fleet management.',
      kicker: 'Resort Project',
      h1: 'How a Resort Group Standardized a 60-Boat Branded Water-Sports Fleet',
      intro: [
        'A resort group wanted its watersports offering to feel part of the property — branded boats in the group palette, durable under tropical sun and shallow-lagoon use, and easy to store between seasons across four island properties.',
      ],
      industry: 'Resort & Hospitality',
      requirement: '60 branded boats for guest excursions and free-play rental, in the property palette, across four island properties.',
      challenge:
        'Daily guest use under strong UV and in shallow, sandy water wears generic fleets fast, off-season storage space is limited, and the group wanted one recognizable standard across all properties instead of per-island choices.',
      solution:
        'Heavy-duty rental construction — reinforced tubes, UV-stable fabrics and aluminum hulls where beach launches are rough — full-side graphics in the resort colors, and branded accessories included as part of the fleet package.',
      product:
        'Custom rental RIBs (rib-alloy-430) and air-deck dinghies (airdock-330) with property graphics and guest-use accessories.',
      process: [
        { title: 'Fleet consultation', body: 'Guest volume, lagoon conditions and season length defined the per-property mix.' },
        { title: 'Branded sample', body: 'Colors and logo approved on a physical boat before production.' },
        { title: 'Production & QC', body: '60 boats produced with multi-point QC across the run.' },
        { title: 'Delivery & refresh', body: 'Seasonal delivery, spare parts and a refresh program for later seasons.' },
      ],
      result:
        'All four properties launched their fleets on time for the season. Boats store stacked on racks off-season, and guest feedback on the branded equipment drove expansion orders at two properties the following year.',
      outcome: 'On-time season launch, 100% branded fleet, two-property expansion.',
      customizations: [
        'RIB and dinghy mix selected for excursion and free-play duty',
        'Full-side graphics in the property palette',
        'Tube printing and logo placement approved on a physical sample',
        'Branded pumps, oars and accessory sets for every boat',
        'Fleet numbering and color-coding per island property',
        'Rack-storage configuration and seasonal refresh scope',
      ],
      inspectionFocus: [
        'Inflation and 24-hour pressure-hold records on every tube set',
        'Valve and reinforced-seam condition',
        'Artwork accuracy and color match to the approved sample',
        'Accessory and kit completeness per boat',
        'Carton marking and fleet labels before shipment release',
      ],
      confidentiality:
        'By agreement, the resort group\'s name and brand assets are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Branded guest fleet', 'Heavy-duty rental build', 'Seasonal refresh'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributors & Wholesalers',
      region: 'Two export regions',
      productCategory: 'Mid-Range Inflatable Boats (6 SKUs)',
      projectStage: 'Range planning → Sample approval → Multi-market delivery',
      manufacturingScope: 'Boats, accessories and retail packaging under one program',
      keyRequirements: 'One quality owner, consistent branding, reduced per-SKU inventory',
      qualityFocus: 'Pressure-hold testing, artwork accuracy, barcode and label accuracy, BOM match',
      navLabel: 'Distributor Line Expansion',
      metaTitle: 'Distributor Boat Line Expansion | 6-SKU Program — Neptunor',
      metaDescription:
        'How a marine distributor added a full mid-market inflatable boat range across six SKUs — one factory, one program, exported to multiple markets.',
      kicker: 'Distributor Project',
      h1: 'How a Distributor Launched a 6-SKU Boat Range Across Two Markets',
      intro: [
        'A marine distributor carrying accessories and small craft wanted its own inflatable boat range — without splitting sourcing across several factories for boats, pumps and oars.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement:
        'A six-SKU mid-market boat range — from 2.7 m tenders to a 4.5 m console sport boat — plus accessory kits, exported to two regions.',
      challenge:
        'Separate factories for boats, pumps and oars meant inconsistent branding, multiple separate sourcing points and no single quality owner for warranty claims.',
      solution:
        'One program covering boats, accessories and retail packaging; shared accessory kits to cut per-SKU inventory; and fulfilment options matched to each market\'s setup.',
      product:
        'Six branded retail SKUs — inflatable dinghies and a console sport boat with divider-packed complete kits in printed cartons.',
      process: [
        { title: 'Range planning', body: 'Market gaps and price points defined the six SKUs and bundle contents.' },
        { title: 'Unified branding', body: 'One design system applied across boats, pumps, oars and cartons.' },
        { title: 'Program pricing', body: 'Volume pricing across the full program, not per SKU.' },
        { title: 'Split-market fulfilment', body: 'Standard export terms for the home region, full-service terms for the second market.' },
      ],
      result:
        'The range launched across both markets in one season; shared accessory kits cut landed inventory, and warranty issues were resolved through a single factory contact.',
      outcome: 'One-season multi-market launch, lower landed inventory, single point of warranty.',
      customizations: [
        'Six SKUs from 2.7 m to 4.5 m including the sport-wave-450 console boat',
        'One design system applied to boats, pumps, oars and cartons',
        'Shared accessory kits to reduce per-SKU inventory',
        'Divider-packed complete kits in printed retail cartons',
        'Barcode, label and manual versions per target market',
        'Fulfilment terms and packaging setup matched to each market',
      ],
      inspectionFocus: [
        'BOM match per SKU configuration',
        'Artwork and branding accuracy across the six SKUs',
        'Barcode and label accuracy per market',
        'Accessory kit completeness and divider packing',
        'Pressure-hold verification across the run',
      ],
      confidentiality:
        'By agreement, the distributor name and customer list are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Multi-SKU program', 'Complete retail kits'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup Boat Brands',
      region: 'North America',
      productCategory: 'ODM Inflatable Dinghy',
      projectStage: 'Concept → Trial run → Launch order',
      manufacturingScope: 'ODM development, graphics, packaging, production',
      keyRequirements: 'Low-MOQ first run, launch-date alignment, tooling retained for the brand',
      qualityFocus: 'Pressure-hold testing, artwork accuracy, packaging verification',
      navLabel: 'Startup Brand 0→1 Launch',
      metaTitle: 'Startup Boat Brand Launch | Concept to First Batch — Neptunor',
      metaDescription:
        'How a boating startup went from concept to a sold-out first batch — ODM development, a 10-unit trial run, then a 200-unit branded launch order.',
      kicker: 'Startup Project',
      h1: 'From Concept to a Sold-Out 200-Boat Launch for a Startup Brand',
      intro: [
        'Two founders with an audience but no factory wanted to sell their own inflatable boat — an ODM dinghy developed to their spec, with a launch-size order that would not sink them.',
      ],
      industry: 'Startup Boat Brands',
      requirement: 'ODM development at low MOQ: a 10-unit trial run to validate, then 200 units for launch.',
      challenge:
        'No design team, no import experience and a first order too small for most factories — plus a launch date tied to the northern-hemisphere season.',
      solution:
        'ODM development from their concept on a proven airdock-330-based platform, a 10-unit trial run covering samples and fulfillment verification, then a 200-unit branded launch order with tooling kept for the brand.',
      product:
        'Branded ODM inflatable dinghy — custom graphics, packaging, and retail-ready carton sizing.',
      process: [
        { title: 'Concept call', body: 'Target user, price point and launch date set the base platform.' },
        { title: 'Trial run', body: '10 units proved the product and packaging end to end.' },
        { title: 'Launch order', body: '200 units produced with the verified artwork and carton spec.' },
        { title: 'Scale path', body: 'Tooling retained for the brand; reorders at improved pricing.' },
      ],
      result:
        'The first batch sold out within weeks of season start; feedback from the trial run fixed a packaging issue before the big order went into production.',
      outcome: 'Sold-out launch batch, packaging fixed pre-scale, reorder path in place.',
      customizations: [
        'ODM dinghy developed from the brand concept on a proven platform',
        'Custom tube graphics and brand packaging',
        'Retail-ready carton sizing for the launch order',
        'Accessory set and kit configuration matched to the target user',
        'Tooling and artwork retained for the brand',
        'Launch-date-aligned production scheduling',
      ],
      inspectionFocus: [
        'Artwork accuracy against the approved files',
        'Pressure-hold verification on the trial run and launch order',
        'Packaging and carton verification — including the trial-run fix',
        'Accessory and kit completeness',
      ],
      confidentiality:
        'By agreement, the brand name and launch details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['ODM development', 'Low-MOQ trial run', 'Season-date planning'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Rental Fleet Operators',
      region: 'North America',
      productCategory: 'Rental-Grade Aluminum RIBs',
      projectStage: 'Fleet audit → Uniform production → Seasonal refresh',
      manufacturingScope: 'Fleet specification, production, parts packs, refresh program',
      keyRequirements: 'One uniform boat across sites, rental-abuse durability',
      qualityFocus: 'Heavy-duty build verification, pressure-hold testing, kit completeness',
      navLabel: 'Multi-Site Rental Fleet',
      metaTitle: 'Rental Fleet Expansion | 200 Boats, 3 Sites — Neptunor',
      metaDescription:
        'How a multi-site rental operator replaced mixed stock with 200 uniform rental RIBs across three locations — fleet pricing, seasonal refresh and parts provisioning.',
      kicker: 'Rental Project',
      h1: 'Standardizing a 200-Boat Rental Fleet Across Three Sites for a Fleet Operator',
      intro: [
        'A rental operator running three waterfront locations needed one uniform fleet instead of mixed stock — same boat on every site, priced for fleet volume.',
      ],
      industry: 'Rental Fleet Operators',
      requirement: '200 rental-grade RIBs across three sites, with seasonal refresh and field-repairable parts.',
      challenge:
        'Mixed aging stock complicated repairs and pricing; rental abuse demands heavy-duty construction, and off-season storage is split across three sites.',
      solution:
        'One rental-grade platform — the rib-alloy-430 in a heavy-duty spec — across all sites with reinforced tubes and UV-stable fabrics, fleet-level pricing on the 200-boat volume, and a parts pack with repair guidance per site.',
      product:
        'Rental-grade aluminum RIB — rib-alloy-430 (4.3 m) with reinforced tubes and per-site repair kits.',
      process: [
        { title: 'Fleet audit', body: 'Site volume and utilization charts set the allocation across locations.' },
        { title: 'Uniform spec', body: 'One boat everywhere — simpler repairs, pricing and training.' },
        { title: 'Fleet pricing', body: 'Volume discount across the combined 200-boat order.' },
        { title: 'Parts & refresh', body: 'Per-site parts packs, plus a defined seasonal replacement cycle.' },
      ],
      result:
        'The uniform fleet cut per-site repair confusion, combined ordering unlocked fleet pricing, and the 200-boat program became the baseline for seasonal renewal.',
      outcome: 'Uniform operations, lower per-unit cost, repeatable seasonal cycle.',
      customizations: [
        'One rental-grade platform across all three sites',
        'Reinforced tubes and UV-stable fabrics for rental abuse',
        'Site allocation and fleet numbering per location',
        'Per-site parts packs with repair guidance',
        'Defined seasonal replacement cycle',
      ],
      inspectionFocus: [
        'Heavy-duty build verification per boat',
        'Inflation and 24-hour pressure-hold records',
        'Accessory and repair-kit completeness per site',
        'Fleet numbering and site labeling accuracy',
        'Packing checks for split-site delivery',
      ],
      confidentiality:
        'By agreement, the operator name and site locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Multi-site fleet', 'Heavy-duty rental build', 'Seasonal renewal'],
    },
    {
      slug: 'day-cruiser-range',
      customerType: 'Outdoor & Marine Distributors',
      region: 'Europe',
      productCategory: 'Fiberglass RIB Day-Cruiser Range (5.2 m + 6.4 m)',
      projectStage: 'Product brief → Sample approval → Volume production',
      manufacturingScope: 'Platform review, range graphics, accessory configuration, dealer packaging and production',
      keyRequirements: 'Cruising comfort, range-specific graphics, complete dealer kit',
      qualityFocus: 'Gelcoat finish, pressure-hold testing, artwork accuracy, crate-marking accuracy',
      navLabel: 'Day-Cruiser Range',
      metaTitle: 'Fiberglass Day-Cruiser Range Development | Dealer Network — Neptunor',
      metaDescription:
        'How Neptunor supported a fiberglass RIB day-cruiser range for a European distributor — platform review, range graphics, accessory configuration and dealer packaging.',
      kicker: 'Day-Cruiser Project',
      h1: 'Developing a Fiberglass RIB Day-Cruiser Range for a European Distributor',
      intro: [
        'A custom fiberglass RIB project covering platform review, range-specific graphics, accessory configuration, dealer packaging and quality planning — from sample approval to shipment preparation.',
      ],
      industry: 'Outdoor & Marine Distributors',
      requirement:
        'A fiberglass day-cruiser range with range-specific graphics, accessory configuration and dealer packaging, controlled from sample approval to shipment.',
      challenge:
        'Cruising buyers expect dry, predictable handling, so the hulls, dimensions and weight distribution had to be reviewed before production. Graphics had to work around cleats, rails and console lines, and every dealer kit had to arrive complete across the range.',
      solution:
        'Platform and dimension review for cruising performance on the rib-glass-520 and rib-glass-640 hulls, range graphics aligned to deck features, an accessory configuration covering seating, sun canopy and mooring kit, dealer packaging planning and controlled volume production with defined quality checkpoints.',
      product:
        'Fiberglass RIB day-cruiser range — 5.2 m and 6.4 m platforms with range graphics, complete accessory kits and dealer-ready crating.',
      process: [
        { title: 'Platform review', body: 'rib-glass-520 and rib-glass-640 dimensions and weight distribution matched to the target market.' },
        { title: 'Specification & artwork', body: 'Technical spec, range graphics alignment and customer-approved BOM prepared.' },
        { title: 'Sample approval', body: 'Gelcoat, graphics and kit confirmed on physical boats.' },
        { title: 'Production & inspection', body: 'Volume production with quality checkpoints, packing verification and shipment release.' },
      ],
      result:
        'The range progressed from sample approval to shipment preparation under controlled product, artwork, BOM and packing documentation — the approved samples served as the reference for production and final inspection.',
      outcome: 'Controlled sample-to-production path; graphics and packing locked before production.',
      customizations: [
        'rib-glass-520 and rib-glass-640 platform configuration',
        'Range graphics across hull, tubes and console',
        'Upholstery color and stitching configuration',
        'Cleat, rail and accessory positioning per deck layout',
        'Seating, sun-canopy and mooring-kit bundles per SKU',
        'Crate marking and barcode requirements for target markets',
      ],
      inspectionFocus: [
        'Gelcoat and laminate inspection on every hull',
        'Inflation and 24-hour pressure-hold verification for tube sets',
        'Artwork accuracy to the approved files',
        'Accessory and kit completeness',
        'Dealer packaging, barcode and crate-marking verification',
      ],
      confidentiality:
        'By agreement, the distributor name and customer list are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Day-cruiser range', 'Range graphics', 'Dealer packaging'],
    },
    {
      slug: 'fishing-boat-program',
      customerType: 'Outdoor Retailers',
      region: 'North America',
      productCategory: 'Fishing-Configured Aluminum RIB',
      projectStage: 'Concept review → Sample approval → Program production',
      manufacturingScope: 'Platform configuration, accessory layout, packaging and production',
      keyRequirements: 'Angling accessory integration, stable casting platform, organized stowage',
      qualityFocus: 'Pressure-hold testing, accessory anchoring, artwork accuracy, pack completeness',
      navLabel: 'Fishing Boat Program',
      metaTitle: 'Fishing RIB Development | Accessory Layout & Stowage — Neptunor',
      metaDescription:
        'How Neptunor developed a fishing-configured aluminum RIB for an outdoor retailer — accessory layout, organized stowage and retail-ready packing under one controlled program.',
      kicker: 'Fishing Project',
      h1: 'Fishing RIB Development for an Outdoor Retailer — Accessory Layout and Stowage Configuration',
      intro: [
        'A fishing-specific RIB project: a stable platform configured with angling accessory zones, organized stowage and retail-ready packing — from concept review to program production.',
      ],
      industry: 'Retail & Outdoor Brands',
      requirement:
        'A fishing RIB configuration with accessory anchoring, organized stowage and retail packaging, from concept review to program production.',
      challenge:
        'Fishing boats need accessory anchoring — rod holders, bait-prep zones and tackle stowage — without compromising stability or deck space. Gear had to stay secure underway, and the packaging had to present the category clearly at retail.',
      solution:
        'A wide, stable platform with defined angling zones, rod-holder and rail positioning for fishing gear, an organized stowage pack with repair kit, and retail packaging developed under a single controlled program.',
      product:
        'Fishing aluminum RIB — wide-beam platform with angling accessory zones, organized stowage and retail-ready packaging.',
      process: [
        { title: 'Concept review', body: 'Target use, gear carried and stowage structure defined the configuration.' },
        { title: 'Accessory layout', body: 'Rod holders, rails and storage zones positioned on the deck.' },
        { title: 'Sample approval', body: 'Stability and accessory anchoring verified on a physical boat.' },
        { title: 'Program production', body: 'Defined quality checkpoints, pack verification and shipment release.' },
      ],
      result:
        'The configuration was confirmed on the approved sample — accessory anchoring, stowage structure and packaging all aligned before production — and the program shipped with verified kits.',
      outcome: 'Accessory layout and stowage locked at sample stage; verified kits shipped.',
      customizations: [
        'Wide, stable platform with dedicated angling zones',
        'Rod-holder, accessory-rail and anchor-locker positioning',
        'Deck layout for tackle and cooler placement',
        'Seat and console selection for angling use',
        'Organized stowage pack and repair kit',
        'Retail packaging for the fishing category',
        'Barcode and carton marking for the target market',
      ],
      inspectionFocus: [
        'Accessory anchoring and rail placement verification',
        'Inflation and 24-hour pressure-hold verification',
        'Artwork and deck layout accuracy',
        'Stowage completeness and accessory configuration',
        'Retail packaging and carton-marking verification',
      ],
      confidentiality:
        'By agreement, the retailer name and channel details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Fishing configuration', 'Accessory layout', 'Stowage organization'],
    },
    {
      slug: 'watersports-school-fleet',
      customerType: 'Water-Sports Schools & Programs',
      region: 'Europe',
      productCategory: 'Trainer Dinghies & Safety RIB Fleet',
      projectStage: 'Program review → Sample approval → Fleet delivery',
      manufacturingScope: 'Stable trainer configuration, safety-boat fit-out, production and program packaging',
      keyRequirements: 'Stability for first-time groups, consistent fleet, manageable storage',
      qualityFocus: 'Fitting security, pressure-hold testing, artwork accuracy, kit completeness',
      navLabel: 'Water-Sports School Fleet',
      metaTitle: 'School Water-Sports Fleet | Trainer Dinghies & Safety RIB — Neptunor',
      metaDescription:
        'How Neptunor equipped a water-sports school with a consistent fleet of trainer dinghies and an instructor safety RIB — stable platforms for group sessions and a locked renewal spec.',
      kicker: 'School Program Project',
      h1: 'Equipping a Water-Sports School With a Consistent Trainer Dinghy and Safety-RIB Fleet',
      intro: [
        'A water-sports school running group sessions on a sheltered lake needed craft beginners feel safe in, one safety boat for instructors, and a fleet consistent enough that yearly cohorts train on identical equipment.',
      ],
      industry: 'Education & Youth Programs',
      requirement:
        'A consistent fleet — stable trainer dinghies for group sessions plus one safety RIB for instructors — in program quantities, with clear guidance for staff.',
      challenge:
        'Beginners need stable, forgiving craft; instructors need a fast safety boat with clear lines of sight; cohorts rotate every year so replacements must match; and storage between sessions is limited.',
      solution:
        'Air-deck trainer dinghies (airdock-330) with grip decks and full-length grab lines, one safety RIB (rib-alloy-360) configured for instructor duty, one consistent fleet configuration, and instructor guidance plus program labels included.',
      product:
        'Trainer dinghy fleet plus safety RIB — stable platforms with consistent fit-out and program labeling.',
      process: [
        { title: 'Program review', body: 'Session format, group size and storage defined the configuration.' },
        { title: 'Configuration', body: 'Trainer fit-out and safety-boat spec fixed across the fleet.' },
        { title: 'Sample approval', body: 'Stability, grab lines and fit-out verified on physical boats.' },
        { title: 'Fleet delivery', body: 'Program quantities produced with kit and packaging verification.' },
      ],
      result:
        'The fleet shipped as one consistent configuration — every boat matching the approved sample — and instructors reported calmer first sessions, with a matching renewal planned for next year\'s cohort.',
      outcome: 'Consistent fleet matched to the approved sample; renewal spec locked.',
      customizations: [
        'Stable trainer platform sized for first-time groups',
        'Grip decks and full-length grab lines on every dinghy',
        'Safety-RIB fit-out — console, engine-prep and re-entry ladder',
        'Consistent color and finish across the whole fleet',
        'Instructor guidance and program labels',
        'Storage rack configuration and program packaging',
      ],
      inspectionFocus: [
        'Stability and fitting-security verification on the approved sample',
        'Inflation and 24-hour pressure-hold records',
        'Grab-line and cleat attachment checks across the run',
        'Artwork and finish consistency',
        'Kit completeness and program packaging checks',
      ],
      confidentiality:
        'By agreement, the school name and location are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Trainer fleet', 'Safety-boat fit-out', 'Program fleet'],
    },
  ],
  es: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Operadores de flotas de alquiler',
      region: 'Mediterráneo — España, Italia, Grecia',
      productCategory: 'RIB de aluminio y neumáticas air-deck de grado alquiler (4,3 m + 3,3 m)',
      projectStage: 'Evaluación de flota → Aprobación de muestra → Entrega en 3 fases',
      manufacturingScope: 'Especificación de flota, construcción reforzada, producción por fases, programa de repuestos',
      keyRequirements: 'Embarcaciones duraderas para alquiler, entrega por fases, menor tasa de reemplazo temprano',
      qualityFocus: 'Integridad de soldaduras, prueba de presión de tubos, arte de flota, integridad del kit',
      navLabel: 'Flota de alquiler costera',
      metaTitle: 'Flota de alquiler costera | 320 embarcaciones en 120 días — Neptunor',
      metaDescription:
        'Cómo un operador de alquiler del Mediterráneo construyó una flota costera de 320 embarcaciones en España, Italia y Grecia — tres fases en 120 días, con una reducción estimada del 20–25 % en reemplazos tempranos.',
      kicker: 'Proyecto de alquiler costero',
      h1: 'Cómo un operador de alquiler del Mediterráneo construyó una flota costera de 320 embarcaciones en 120 días',
      intro: [
        'Un operador con estaciones costeras en España, Italia y Grecia necesitaba una flota duradera para la temporada alta — entregada en tres fases, a tiempo para la apertura de cada estación.',
      ],
      industry: 'Operadores de flotas de alquiler',
      requirement:
        '320 embarcaciones de alquiler en dos clases — RIB de aluminio de 4,3 m y neumáticas air-deck de 3,3 m — para estaciones costeras en tres países, entregadas en tres fases dentro de 120 días.',
      challenge:
        'La rotación diaria desgasta rápido el equipo, y la tasa de reemplazo temprano del operador rondaba el 20–25 %. Las estaciones abrían en fechas distintas en tres países: una entrega única no funcionaba, ni tampoco una flota de un solo modelo.',
      solution:
        'Dos plataformas de alquiler duraderas — el rib-alloy-430 para aguas expuestas y el airdock-330 para rotación en bahías tranquilas — construidas con especificación reforzada de alquiler, con tres lotes de producción programados para llegar a la apertura de cada estación y paquetes de repuestos por estación.',
      product:
        'RIB de aluminio de grado alquiler (4,3 m) y neumáticas air-deck (3,3 m) con tubos reforzados, tejidos estables a los rayos UV y kits por estación.',
      process: [
        { title: 'Evaluación de flota', body: 'Aperturas de estación y volumen de rotación definieron las dos clases y la asignación por lote.' },
        { title: 'Selección de plataformas', body: 'El rib-alloy-430 y el airdock-330 elegidos por cobertura de usuarios y durabilidad.' },
        { title: 'Producción por fases', body: 'Tres lotes programados contra la fecha de apertura de cada estación.' },
        { title: 'Entrega y soporte', body: 'Flota enviada por fases con paquetes de repuestos y guía por estación.' },
      ],
      result:
        'Las tres fases llegaron dentro de 120 días, sincronizadas con la apertura de cada estación. Se estima que las plataformas reforzadas reducirán la tasa de reemplazo temprano entre un 20–25 %, con repuestos para reparaciones de campo entre temporadas.',
      outcome: '320 embarcaciones · 120 días · 3 fases · −20–25 % de reemplazos tempranos (est.).',
      metrics: [
        { value: '320', label: 'embarcaciones en dos clases' },
        { value: '120', label: 'días del pedido a la última fase' },
        { value: '3', label: 'entregas por fases, una por apertura' },
        { value: '−20–25 %', label: 'reemplazos tempranos estimados' },
      ],
      takeaways: [
        'Las fases permiten que la flota llegue justo cuando abre cada estación — sin inventario ocioso ni arranques tardíos.',
        'Dos plataformas (un RIB de 4,3 m y una neumática de 3,3 m) cubrieron a la mayoría de los usuarios sin fragmentar la flota.',
        'La construcción reforzada es lo que mueve la cifra de reemplazos, no solo el precio.',
        'Los paquetes de repuestos por estación mantuvieron las embarcaciones en servicio entre temporadas.',
      ],
      customizations: [
        'Plataformas rib-alloy-430 y airdock-330 ajustadas a los perfiles de usuario',
        'Tubos reforzados y tejidos estables a los rayos UV para uso intensivo',
        'Arte de flota y numeración por estación',
        'Programa de producción en tres fases alineado a las aperturas',
        'Paquetes de repuestos por estación (válvulas, hinchadores, remos, kits de reparación) y guía',
        'Embalaje y verificación de entrega por fases y ubicaciones',
      ],
      inspectionFocus: [
        'Verificación de soldaduras y costuras en cada casco',
        'Registros de inflado y de prueba de presión de 24 horas por juego de tubos',
        'Precisión del arte de flota y numeración de estación',
        'Integridad de accesorios y repuestos por estación',
        'Controles de embalaje para entrega multi-ubicación por fases',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del operador ni las ubicaciones de las estaciones. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Entrega por fases', 'Construcción reforzada de alquiler', 'Menor tasa de reemplazo'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distribuidores y mayoristas',
      region: 'Europa',
      productCategory: 'Neumáticas de marca privada (2 SKU)',
      projectStage: 'Planificación de gama → Aprobación de muestra → Entrega en 90 días',
      manufacturingScope: 'Marca privada, embalaje retail, producción en volumen, programa de reordenes',
      keyRequirements: 'Dos SKU probados en el mercado bajo la marca propia, embalaje retail UE, alineación con la temporada',
      qualityFocus: 'Precisión del arte, código de barras y etiquetas por mercado, integridad del kit, pruebas de presión',
      navLabel: 'Marca privada para distribuidor',
      metaTitle: 'Marca privada para distribuidor UE | 1.200 embarcaciones en 90 días — Neptunor',
      metaDescription:
        'Cómo un distribuidor europeo lanzó una línea de neumáticas de marca privada de 1.200 unidades en 90 días — dos SKU, embalaje retail UE y un reorder en el Q4 con la misma especificación bloqueada.',
      kicker: 'Proyecto de marca privada',
      h1: 'Cómo un distribuidor europeo lanzó una línea de marca privada de 1.200 embarcaciones en 90 días',
      intro: [
        'Un distribuidor europeo quería su propia línea de navegación de marca en el lineal para la temporada de verano — dos SKU probados, embalaje retail completo y ninguna relación directa con fábricas.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement:
        '1.200 embarcaciones de marca en dos SKU — la airtender-270 (2,7 m) y la airdock-330 (3,3 m) — con embalaje retail UE, entregadas en 90 días.',
      challenge:
        'La ventana de temporada es fija: las 1.200 embarcaciones y su embalaje tenían que llegar juntas y a tiempo. El embalaje de marca privada — códigos de barras, etiquetas, manuales — debía cumplir los requisitos retail de la UE, y el distribuidor no tenía experiencia previa en abastecimiento de embarcaciones neumáticas.',
      solution:
        'Dos plataformas de neumática probadas para la gama retail, todo el arte de marca privada y el embalaje retail UE gestionados en un único programa, y producción programada para que ambos SKU se embarcaran juntos dentro de la ventana de 90 días — con la especificación bloqueada para un reorder limpio.',
      product:
        'Neumáticas de marca privada — airtender-270 y airdock-330, con hinchador, remos y bolsa de marca y cajas retail impresas.',
      process: [
        { title: 'Planificación de gama', body: 'Dos SKU seleccionados — neumáticas de 2,7 m y 3,3 m — para cobertura retail.' },
        { title: 'Aprobación de muestra', body: 'Arte, embalaje y acabado confirmados en embarcaciones físicas.' },
        { title: 'Producción en 90 días', body: 'Volumen programado para que ambos SKU se embarquen juntos en la ventana de temporada.' },
        { title: 'Reorder Q4', body: 'Pedido repetido sobre la misma especificación bloqueada.' },
      ],
      result:
        'Las 1.200 embarcaciones con embalaje retail completo se embarcaron dentro de 90 días, a tiempo para el lineal de verano. La línea se vendió y el distribuidor volvió en el Q4 con un reorder sobre la misma especificación bloqueada.',
      outcome: '1.200 embarcaciones · 90 días · 2 SKU · reorder en Q4.',
      metrics: [
        { value: '1.200', label: 'embarcaciones en un solo lanzamiento' },
        { value: '90', label: 'días hasta la entrega completa' },
        { value: '2', label: 'SKU retail, ambos a tiempo para la ventana' },
        { value: 'Q4', label: 'reorder con la misma especificación' },
      ],
      takeaways: [
        'Empezar con dos SKU probados mantiene bajo el riesgo de inventario y completa una gama retail.',
        'Un único programa que cubre embarcaciones, accesorios y embalaje elimina un punto habitual de fallo en lanzamientos.',
        'Una fecha de temporada fija condiciona el calendario — la planificación debe tratarla como innegociable.',
        'Bloquear la especificación en el lanzamiento hace que los reordenes sean limpios y coherentes.',
      ],
      customizations: [
        'Plataformas airtender-270 y airdock-330 para la gama retail',
        'Arte de tubos, asientos y cajas de marca privada',
        'Hinchador, remos y bolsa de marca por SKU',
        'Cajas retail impresas, códigos de barras, etiquetas y manual para retail UE',
        'BOM y especificación bloqueados para la coherencia del reorder',
        'Entrega por lotes alineada a la ventana de lanzamiento',
      ],
      inspectionFocus: [
        'Precisión del arte frente a los archivos de marca privada aprobados',
        'Verificación de código de barras, etiqueta y manual por mercado',
        'Integridad del kit por SKU en la tirada de 1.200 embarcaciones',
        'Controles puntuales de prueba de presión durante la producción',
        'Verificación de cajas y embalaje por SKU',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni sus clientes retail. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Marca privada', 'Gama retail de 2 SKU', 'Entrega en ventana de temporada'],
    },
    {
      slug: 'marina-tender-fleet',
      customerType: 'Marinas y clubs náuticos',
      region: 'Europa — marinas del Mediterráneo y del mar del Norte',
      productCategory: 'Auxiliares RIB de aluminio con marca (rib-alloy-360 / rib-alloy-430)',
      projectStage: 'Auditoría de flota → Aprobación de muestra → Entrega por fases en las marinas',
      manufacturingScope: 'Estandarización de auxiliares, librea de marina, equipamiento apto para pluma, programa de repuestos',
      keyRequirements: 'Un auxiliar estándar en todas las marinas, marca del grupo, menos complejidad de repuestos',
      qualityFocus: 'Integridad de soldaduras del casco, prueba de presión de tubos, fidelidad de librea, verificación de puntos de izado',
      navLabel: 'Flota de auxiliares para marina',
      metaTitle: 'Flota de auxiliares para marina | 42 RIB con marca en 6 marinas — Neptunor',
      metaDescription:
        'Cómo un grupo de marinas europeo estandarizó 42 auxiliares RIB de aluminio con su marca en seis marinas: una familia de plataformas, equipamiento apto para pluma y un único inventario de repuestos compartido.',
      kicker: 'Proyecto de marina',
      h1: 'Cómo un grupo de marinas estandarizó 42 auxiliares RIB con marca en seis sedes',
      intro: [
        'Un grupo con seis puertos deportivos quería que sus embarcaciones de trabajo formaran parte de la imagen del conjunto: auxiliares para traslado de tripulaciones, apoyo al amarre y seguridad de la escuela de vela — con la librea del grupo, aptos para pluma e idénticos, de modo que cualquier dotación cambiara de casco sin reaprender herrajes.',
      ],
      industry: 'Marinas y clubs náuticos',
      requirement:
        '42 auxiliares con marca en dos esloras — RIB de aluminio de 3,6 m y 4,3 m — para traslado de tripulación, apoyo al amarre y labores de instrucción, entregados por marina antes de cada apertura de temporada.',
      challenge:
        'Cada marina gestionaba auxiliares envejecidos de orígenes distintos; los inventarios de repuestos estaban duplicados seis veces, las libreas chocaban entre sedes y las dotaciones de varada necesitaban puntos de izado homologados que los cascos antiguos no tenían.',
      solution:
        'Una familia estándar de auxiliares — el rib-alloy-360 para el interior del puerto y el rib-alloy-430 para traslado en aguas abiertas — con puntos de izado certificados, librea del grupo aplicada durante la producción en lugar de pintarse después, y un inventario de repuestos compartido que da servicio a las seis sedes.',
      product:
        'Auxiliares RIB de aluminio con marca — rib-alloy-360 (3,6 m) y rib-alloy-430 (4,3 m) con puntos de izado aptos para pluma, librea del grupo y consola equipada para trabajo diario de puerto.',
      process: [
        { title: 'Auditoría de flota', body: 'Funciones por marina, distribución de atraques y capacidades de grúa definieron la mezcla de dos esloras.' },
        { title: 'Estandarización', body: 'Un estándar de consola y herrajes acordado para ambas esloras.' },
        { title: 'Librea y equipamiento', body: 'Colores del grupo, numeración y puntos de izado aplicados en producción.' },
        { title: 'Entrega por fases y repuestos', body: 'Entregas sincronizadas con las aperturas; un almacén de repuestos compartido abastecido.' },
      ],
      result:
        'Los 42 auxiliares se entregaron a lo largo de dos temporadas, y cada marina recibió su asignación antes de la semana de apertura. Seis inventarios improvisados se convirtieron en un único almacén de repuestos, y las dotaciones reportan cambios de mantenimiento más rápidos porque todos los cascos llevan los mismos herrajes.',
      outcome: '42 auxiliares · 6 marinas · 2 modelos estándar · un inventario de repuestos.',
      metrics: [
        { value: '42', label: 'auxiliares en seis marinas' },
        { value: '2', label: 'modelos estándar: 3,6 m y 4,3 m' },
        { value: '1', label: 'inventario de repuestos compartido' },
        { value: '−30 % est.', label: 'inmovilizado de auxiliares en temporada' },
      ],
      takeaways: [
        'Estandarizar en dos modelos rindió más que dejar que cada marina eligiera su auxiliar.',
        'La compatibilidad con pluma tuvo que diseñarse desde el principio: adaptarla después nunca funciona.',
        'Aplicar la librea durante la producción evita ciclos de repintado entre temporadas.',
        'Un inventario de repuestos compartido sustituyó a seis duplicados y simplificó las auditorías.',
      ],
      customizations: [
        'Dos modelos de auxiliar asignados a funciones de puerto interior y aguas abiertas',
        'Puntos de izado certificados y protecciones de quilla aptos para botadura con pluma',
        'Librea del grupo, nombres de puerto y numeración de cascos aplicados en producción',
        'Distribución de consola y asientos especificada para traslado de tripulaciones e instrucción',
        'Kits de repuestos compartidos — válvulas, hinchadores, remos y materiales de reparación — dimensionados para todo el grupo',
        'Ventanas de entrega alineadas con la apertura de cada marina',
      ],
      inspectionFocus: [
        'Inspección de soldaduras y costuras en cada auxiliar',
        'Registros de inflado y prueba de presión de 24 horas por juego de tubos',
        'Montaje de puntos de izado y revisión de documentación de carga',
        'Fidelidad de librea y numeración frente a los archivos aprobados',
        'Integridad del kit y verificación de embalaje por asignación de marina',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del grupo de marinas ni sus ubicaciones. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Estandarización de flota', 'Equipamiento apto para pluma', 'Marca de marina'],
    },
    {
      slug: 'dive-school-expansion',
      customerType: 'Escuelas de buceo y centros de formación',
      region: 'Sur de Europa — Mediterráneo',
      productCategory: 'RIB de aluminio configurados para buceo (rib-alloy-470)',
      projectStage: 'Aprobación de muestra → Producción de flota → Reorden de ampliación',
      manufacturingScope: 'Equipamiento de buceo, marca de flota, producción y soporte de recambios',
      keyRequirements: 'Equipamiento específico de buceo, flota uniforme para la logística de cursos, ampliación idéntica futura',
      qualityFocus: 'Precisión del equipamiento, integridad de soldaduras, prueba de presión de tubos, coherencia en reordenes',
      navLabel: 'Ampliación de flota para escuela de buceo',
      metaTitle: 'Flota para escuela de buceo | 14 RIB con escalerilla y portaequipajes — Neptunor',
      metaDescription:
        'Cómo una escuela de buceo sustituyó una flota heterogénea por 14 RIB de buceo idénticamente configurados: bastidores de botellas, escalerillas de embarque y especificación bloqueada para ampliar.',
      kicker: 'Proyecto de centro de buceo',
      h1: 'Cómo una escuela de buceo reconstruyó su flota en torno a 14 RIB de buceo idénticos',
      intro: [
        'Una escuela de buceo que ampliaba sus cursos de certificación necesitaba embarcaciones configuradas para operaciones reales de buceo: estiba de botellas, reembarque fácil con equipo completo y manejo idéntico, para que instructores y alumnos cambiaran de casco sin perder el ritmo.',
      ],
      industry: 'Escuelas de buceo y centros de formación',
      requirement:
        '14 RIB configurados para buceo con bastidores de botellas, escalerillas de embarque a popa y soportes de oxígeno, además de recambios para años de uso diario de cursos.',
      challenge:
        'La flota existente era desigual: consolas, escalerillas y bastidores distintos obligaban a los instructores a reequipar entre embarcaciones y perdían tiempo de curso. El margen económico era ajustado y el plan de crecimiento dependía de pedir existencias idénticas más adelante.',
      solution:
        'Una plataforma de 4,7 m probada para buceo — el rib-alloy-470 — con un equipamiento estándar de buceo repetido en cada casco, precio de flota por volumen y un paquete de recambios con guía de reparación ajustado al uso diario tipo chárter.',
      product:
        'RIB de buceo — cascos de aluminio rib-alloy-470 (4,7 m) con bastidores de botellas, escalerillas de embarque a popa, soportes de bandera de buceo y gráficos de flota, más kits de repuestos.',
      process: [
        { title: 'Incorporación del centro', body: 'Formatos de curso, cargas de alumnos y condiciones de la zona revisadas.' },
        { title: 'Definición del equipamiento', body: 'Bastidores, tipo de escalerilla y zonas de estiba fijados como estándar único.' },
        { title: 'Marca de flota', body: 'Nombre del centro, colores y numeración de cascos aplicados en toda la tirada.' },
        { title: 'Entrega y crecimiento', body: 'Flota entregada con repuestos; reorden idéntico reservado para la ampliación.' },
      ],
      result:
        'Los instructores ejecutan ahora el mismo procedimiento en todas las embarcaciones — bastidores, escalerillas y consolas coinciden casco a casco — y el centro reservó un reorden idéntico de ampliación para la temporada siguiente con la misma especificación bloqueada.',
      outcome: 'Flota de buceo uniforme, reorden de ampliación idéntico.',
      customizations: [
        'Plataforma rib-alloy-470 elegida por capacidad de carga y comportamiento en la mar',
        'Bastidores de botellas dimensionados a la carga máxima de los cursos',
        'Escalerilla de embarque a popa de peldaño bajo para reembarcar con equipo completo',
        'Soporte de oxígeno, estiba del kit de fondeo y soportes de bandera de buceo',
        'Marca del centro y numeración de cascos en toda la flota',
        'Especificación de reorden bloqueada para una ampliación idéntica',
      ],
      inspectionFocus: [
        'Comprobaciones dimensionales del equipamiento: separación de bastidores y anclaje de escalerillas',
        'Verificación de soldaduras y costuras por embarcación',
        'Registros de inflado y prueba de presión de 24 horas',
        'Precisión de marca y numeración en toda la tirada',
        'Integridad de los kits de repuestos antes de liberar el envío',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni la ubicación del centro de buceo. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Equipamiento de buceo', 'Precio de flota', 'Soporte de recambios'],
    },
    {
      slug: 'coastal-patrol-fleet',
      customerType: 'Agencias costeras y flotas públicas',
      region: 'Europa occidental — costa atlántica',
      productCategory: 'RIB de aluminio de patrulla (patrol-line-600 / rescue-guard-470)',
      projectStage: 'Evaluación de licitación → Aprobación de prototipo → Entrega en dos lotes y familiarización de dotaciones',
      manufacturingScope: 'Configuración de consola de misión, preparación de electrónica, librea institucional, producción por lotes, programa de servicio',
      keyRequirements: 'Consola/radar de misión listo para operar, seguridad de dotación en mar gruesa, control de calidad documentado para contratación pública',
      qualityFocus: 'Registros de puertas Node 01–07, integridad de soldaduras, registros de prueba de presión, verificación del equipamiento',
      navLabel: 'Flota de patrulla costera',
      metaTitle: 'Flota de patrulla costera | 12 RIB de aluminio de misión — Neptunor',
      metaDescription:
        'Cómo una agencia costera recibió 12 RIB de aluminio de patrulla en dos configuraciones: consola de misión, preparación de radar y expediente de control de calidad en siete puertas para la licitación pública.',
      kicker: 'Proyecto institucional',
      h1: 'Cómo una agencia costera equipó su programa de patrulla con 12 RIB de misión',
      intro: [
        'Una agencia dedicada a la vigilancia costera y la inspección pesquera necesitaba patrulleras que aguantaran mar gruesa, llevaran electrónica de misión con orden y llegaran con la documentación que exigen las auditorías del sector público.',
      ],
      industry: 'Agencias costeras y flotas públicas',
      requirement:
        '12 RIB de patrulla en dos esloras — una configuración de patrulla de 6,0 m y un interceptor de 4,7 m — con consolas de misión, preparación de radar/electrónica y expediente de inspección completo por casco.',
      challenge:
        'La licitación pública exigía registros de control de calidad trazables de cada embarcación entregada; el estado local de la mar exigía construcción reforzada; y las dotaciones que rotaban entre cascos necesitaban consolas idénticas en ambas esloras para que los relevos fueran seguros.',
      solution:
        'Dos configuraciones de patrulla sobre cascos profesionales probados — patrol-line-600 y rescue-guard-470 — con una única distribución de consola de misión, tubos reforzados para mar gruesa y el expediente de control de siete puertas (Node 01–07) emitido por casco para cumplir la licitación.',
      product:
        'RIB de aluminio de patrulla — patrol-line-600 (6,0 m) y rescue-guard-470 (4,7 m) con consolas de misión, soportes de electrónica/radar, postes de remolque, puntos de izado y librea institucional.',
      process: [
        { title: 'Evaluación de licitación', body: 'Perfil operativo, estado de la mar y requisitos de auditoría moldearon las dos especificaciones.' },
        { title: 'Aprobación de prototipo', body: 'Distribución de consola, equipamiento y librea fijados en un prototipo físico.' },
        { title: 'Producción por lotes', body: 'Dos lotes construidos con registros completos de puertas por casco.' },
        { title: 'Entrega y familiarización', body: 'Aceptación en prueba de mar, recorridos con las dotaciones y repuestos por lote.' },
      ],
      result:
        'Ambos lotes fueron aceptados tras las pruebas de mar sin peticiones de modificación. Las consolas idénticas en ambas esloras redujeron el tiempo de formación cruzada entre dotaciones, y la documentación de control por casco pasó la auditoría de la agencia sin observaciones.',
      outcome: '12 embarcaciones · 2 configuraciones · expediente auditado · formación cruzada simplificada.',
      metrics: [
        { value: '12', label: 'RIB de patrulla en dos configuraciones' },
        { value: '7', label: 'puertas de control (Node 01–07) documentadas por bote' },
        { value: '24 h', label: 'prueba de presión en cada juego de tubos' },
        { value: '2', label: 'lotes alineados con fechas de operatividad' },
      ],
      takeaways: [
        'Para las dotaciones, una consola común en ambas esloras importa más que añadir funciones extra.',
        'Cuando el comprador es una institución pública, la documentación forma parte del producto.',
        'La aprobación del prototipo fija el equipamiento antes de arrancar la producción por lotes.',
        'La aceptación en prueba de mar protege a ambas partes: los problemas afloran antes de la entrega.',
      ],
      customizations: [
        'Consola de misión con soportes de plotter cartográfico y radar cableados con una disposición común',
        'Refuerzo pesado de tubos para servicio sostenido en mar gruesa',
        'Postes de remolque, escalones de embarque y puntos de izado certificados',
        'Cubierta autovaciable para operación con cualquier clima',
        'Librea institucional, indicativos y matrículas aplicados en producción',
        'Paquete de repuestos y sesión de familiarización por lote',
      ],
      inspectionFocus: [
        'Integridad de los registros de puertas Node 01–07 por casco',
        'Inspección de soldaduras y costuras en cada embarcación',
        'Revisión de los registros de prueba de presión de 24 horas por juego de tubos',
        'Verificación de soportes de electrónica y sujeciones del equipamiento',
        'Precisión de librea, indicativos y matrícula antes del envío',
      ],
      confidentiality:
        'Por acuerdo, no se revelan la identidad de la agencia ni sus zonas de operación. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota pública', 'Consola de misión', 'Control de calidad documentado'],
    },
    {
      slug: 'resort-water-sports',
      customerType: 'Resorts y hotelería',
      region: 'océano Índico y Maldivas',
      productCategory: 'RIB y neumáticas de alquiler reforzados',
      projectStage: 'Aprobación de muestra → Producción en volumen → Renovación de flota',
      manufacturingScope: 'Gráficos, accesorios, embalaje y producción de flota',
      keyRequirements: 'Durabilidad ante uso de huéspedes, exposición a salitre y rayos UV, marca completa del grupo',
      qualityFocus: 'Prueba de presión de tubos, precisión del arte, integridad de accesorios, marcado de cajas',
      navLabel: 'Flota acuática para resorts',
      metaTitle: 'Flota acuática para resorts | 60 embarcaciones con marca — Neptunor',
      metaDescription:
        'Cómo un grupo de resorts equipó cuatro propiedades insulares con 60 embarcaciones de alquiler con marca: RIB y neumáticas reforzadas, gráficos del grupo y gestión de flota por temporada.',
      kicker: 'Proyecto de resort',
      h1: 'Cómo un grupo de resorts estandarizó una flota acuática de 60 embarcaciones con marca',
      intro: [
        'Un grupo de resorts quería que su oferta de deportes acuáticos formara parte de la imagen de la propiedad: embarcaciones con marca en la paleta del grupo, resistentes al sol tropical y al uso en lagunas poco profundas, y fáciles de guardar entre temporadas en cuatro propiedades insulares.',
      ],
      industry: 'Resorts y hotelería',
      requirement: '60 embarcaciones con marca para excursiones de huéspedes y alquiler libre, en la paleta del grupo, en cuatro propiedades insulares.',
      challenge:
        'El uso diario de los huéspedes bajo un sol intenso y en aguas someras y arenosas desgasta rápido las flotas genéricas, el espacio de almacenaje fuera de temporada es limitado y el grupo quería un estándar reconocible en todas las propiedades en lugar de decisiones isla por isla.',
      solution:
        'Construcción reforzada de alquiler — tubos con refuerzo, tejidos estables a los rayos UV y cascos de aluminio donde las botaduras desde la playa son duras — gráficos laterales completos en los colores del grupo y accesorios de marca incluidos en el paquete de flota.',
      product:
        'RIB de alquiler personalizados (rib-alloy-430) y neumáticas air-deck (airdock-330) con gráficos del grupo y accesorios para uso de huéspedes.',
      process: [
        { title: 'Consultoría de flota', body: 'Afluencia de huéspedes, condiciones de laguna y duración de la temporada definieron la mezcla por propiedad.' },
        { title: 'Muestra de marca', body: 'Colores y logo confirmados en una embarcación física antes de producir.' },
        { title: 'Producción y QC', body: '60 embarcaciones producidas con control de calidad multipunto.' },
        { title: 'Entrega y renovación', body: 'Entrega por temporada, repuestos y plan de renovación para las siguientes temporadas.' },
      ],
      result:
        'Las cuatro propiedades lanzaron sus flotas a tiempo para la temporada. Las embarcaciones se guardan apiladas en bastidores fuera de temporada, y los comentarios positivos de los huéspedes impulsaron pedidos de ampliación en dos propiedades al año siguiente.',
      outcome: 'Temporada iniciada a tiempo, flota 100% con marca, ampliación en dos propiedades.',
      customizations: [
        'Mezcla de RIB y neumáticas seleccionada para excursiones y uso libre',
        'Gráficos laterales completos en la paleta del grupo',
        'Impresión de tubos y colocación de logo aprobados en muestra física',
        'Hinchadores, remos y juegos de accesorios con marca en cada embarcación',
        'Numeración de flota y codificación por colores por propiedad',
        'Configuración de almacenaje en bastidores y alcance de renovación estacional',
      ],
      inspectionFocus: [
        'Registros de inflado y prueba de presión de 24 horas por juego de tubos',
        'Estado de válvulas y costuras reforzadas',
        'Precisión del arte y fidelidad de color frente a la muestra aprobada',
        'Integridad de accesorios y kit por embarcación',
        'Marcado de cajas y etiquetas de flota antes del embarque',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni los activos de marca del grupo de resorts. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota con marca para huéspedes', 'Construcción reforzada de alquiler', 'Renovación por temporada'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distribuidores y mayoristas',
      region: 'Dos regiones de exportación',
      productCategory: 'Embarcaciones neumáticas de gama media (6 SKU)',
      projectStage: 'Planificación de gama → Aprobación de muestra → Abastecimiento multimercado',
      manufacturingScope: 'Embarcaciones, accesorios y embalaje de retail bajo un solo programa',
      keyRequirements: 'Un único responsable de calidad, branding consistente, menor inventario por SKU',
      qualityFocus: 'Pruebas de presión, precisión del arte, precisión de códigos de barras y etiquetas, coincidencia con BOM',
      navLabel: 'Ampliación de línea para distribuidor',
      metaTitle: 'Ampliación de línea de embarcaciones para distribuidor | 6 SKU — Neptunor',
      metaDescription:
        'Cómo un distribuidor náutico añadió una gama completa de embarcaciones neumáticas de gama media con seis SKU: una sola fábrica, un programa, exportado a varios mercados.',
      kicker: 'Proyecto de distribuidor',
      h1: 'Cómo un distribuidor lanzó una gama de 6 SKU de embarcaciones en dos mercados',
      intro: [
        'Un distribuidor náutico que vendía accesorios y embarcaciones pequeñas quiso lanzar su propia gama de neumáticas, sin fragmentar el abastecimiento entre varias fábricas de embarcaciones, hinchadores y remos.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement:
        'Una gama de seis SKU de gama media — desde auxiliares de 2,7 m hasta un deportivo con consola de 4,5 m — más kits de accesorios, con exportación a dos regiones.',
      challenge:
        'Fábricas separadas para embarcaciones, hinchadores y remos implicaban branding inconsistente, varios puntos de abastecimiento y ningún responsable único de calidad para las reclamaciones de garantía.',
      solution:
        'Un solo programa que cubre embarcaciones, accesorios y embalaje de retail; kits de accesorios compartidos para reducir el inventario por SKU; y opciones logísticas ajustadas a cada mercado.',
      product:
        'Seis SKU de retail de marca: neumáticas y un deportivo con consola, con kits completos en cajas impresas con separadores.',
      process: [
        { title: 'Planificación de la gama', body: 'Huecos de mercado y puntos de precio definieron los seis SKU y el contenido de los kits.' },
        { title: 'Marca unificada', body: 'Un sistema de diseño aplicado a embarcaciones, hinchadores, remos y cajas.' },
        { title: 'Precio de programa', body: 'Precio por volumen sobre todo el programa, no por SKU.' },
        { title: 'Logística a dos mercados', body: 'Condiciones de exportación estándar para la región principal y condiciones de servicio completo para el segundo mercado.' },
      ],
      result:
        'La gama se lanzó en ambos mercados en una temporada; los kits compartidos redujeron el inventario final y la garantía se gestionó a través de un único contacto de fábrica.',
      outcome: 'Lanzamiento multi-mercado en una temporada, menos inventario, garantía unificada.',
      customizations: [
        'Seis SKU de 2,7 m a 4,5 m incluyendo el deportivo con consola sport-wave-450',
        'Un sistema de diseño aplicado a embarcaciones, hinchadores, remos y cajas',
        'Kits de accesorios compartidos para reducir el inventario por SKU',
        'Kits completos con separadores en cajas de retail impresas',
        'Versiones de código de barras, etiqueta y manual por mercado',
        'Condiciones logísticas y embalaje ajustados a cada mercado',
      ],
      inspectionFocus: [
        'Coincidencia con el BOM por configuración de SKU',
        'Precisión del arte y la marca en los seis SKU',
        'Precisión de códigos de barras y etiquetas por mercado',
        'Integridad del kit de accesorios y los separadores',
        'Verificación de presión en la tirada',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni su cartera de clientes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Programa multi-SKU', 'Kits de retail completos'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Marcas navales emergentes',
      region: 'Norteamérica',
      productCategory: 'Neumática ODM',
      projectStage: 'Concepto → Pedido de prueba → Pedido de lanzamiento',
      manufacturingScope: 'Desarrollo ODM, gráficos, embalaje y producción',
      keyRequirements: 'Primera tirada con MOQ bajo, alineación con la fecha de lanzamiento, utillaje en propiedad',
      qualityFocus: 'Pruebas de presión, precisión del arte, verificación del embalaje',
      navLabel: 'Lanzamiento 0→1 de marca emergente',
      metaTitle: 'Lanzamiento de marca naval emergente | Del concepto al primer lote — Neptunor',
      metaDescription:
        'Cómo una marca emergente de embarcaciones pasó del concepto a un primer lote agotado: desarrollo ODM, pedido de prueba de 10 unidades y lote de lanzamiento de 200 unidades.',
      kicker: 'Proyecto de startup',
      h1: 'Del concepto a un lanzamiento de 200 embarcaciones agotado para una marca emergente',
      intro: [
        'Dos fundadores con audiencia pero sin fábrica querían vender su propia embarcación neumática: una neumática ODM desarrollada según su especificación, con un pedido de lanzamiento que no les hundiera.',
      ],
      industry: 'Marcas navales emergentes',
      requirement: 'Desarrollo ODM con MOQ bajo: pedido de prueba de 10 unidades para validar y 200 unidades para el lanzamiento.',
      challenge:
        'Sin equipo de diseño, sin experiencia de importación y con un primer pedido demasiado pequeño para la mayoría de las fábricas, además de una fecha de lanzamiento ligada a la temporada del hemisferio norte.',
      solution:
        'Desarrollo ODM desde su concepto sobre una plataforma probada basada en la airdock-330, un pedido de prueba de 10 unidades que validó producto y logística de punta a punta, y un pedido de lanzamiento de 200 unidades con utillaje en propiedad de la marca.',
      product: 'Neumática ODM de marca: gráficos personalizados, embalaje y caja lista para retail.',
      process: [
        { title: 'Llamada de concepto', body: 'Usuario objetivo, punto de precio y fecha de lanzamiento fijaron la plataforma base.' },
        { title: 'Pedido de prueba', body: '10 unidades validaron producto y embalaje de punta a punta.' },
        { title: 'Pedido de lanzamiento', body: '200 unidades producidas con el arte y la caja verificados.' },
        { title: 'Camino de escalado', body: 'Utillaje en propiedad de la marca; reordenes con mejor precio.' },
      ],
      result:
        'El primer lote se agotó a las pocas semanas de empezar la temporada; los comentarios del pedido de prueba corrigieron un problema de embalaje antes de la gran producción.',
      outcome: 'Lote de lanzamiento agotado, embalaje corregido antes del escalado, reorden previsto.',
      customizations: [
        'Neumática ODM desarrollada desde el concepto de la marca sobre una plataforma probada',
        'Gráficos de tubo personalizados y embalaje de marca',
        'Caja lista para retail ajustada al pedido de lanzamiento',
        'Kit y configuración de accesorios ajustados al usuario objetivo',
        'Utillaje y arte en propiedad de la marca',
        'Planificación de producción alineada con la fecha de lanzamiento',
      ],
      inspectionFocus: [
        'Precisión del arte frente a los archivos aprobados',
        'Verificación de presión en el pedido de prueba y el de lanzamiento',
        'Verificación de embalaje y caja, incluida la corrección del pedido de prueba',
        'Integridad de accesorios y kit',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la marca ni los detalles de lanzamiento. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Desarrollo ODM', 'Prueba con MOQ bajo', 'Planificación de temporada'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Operadores de flotas de alquiler',
      region: 'Norteamérica',
      productCategory: 'RIB de aluminio de grado alquiler',
      projectStage: 'Auditoría de flota → Producción uniforme → Renovación por temporada',
      manufacturingScope: 'Especificación de flota, producción, kits de recambios y renovación',
      keyRequirements: 'Una misma embarcación en todas las sedes, durabilidad ante uso intensivo de alquiler',
      qualityFocus: 'Verificación de construcción reforzada, pruebas de presión, integridad del kit',
      navLabel: 'Flota de alquiler multi-sede',
      metaTitle: 'Expansión de flota de alquiler | 200 embarcaciones, 3 sedes — Neptunor',
      metaDescription:
        'Cómo un operador de alquiler multi-sede sustituyó stock mixto por 200 RIB de alquiler uniformes en tres ubicaciones: precio de flota, renovación por temporada y provisión de recambios.',
      kicker: 'Proyecto de alquiler',
      h1: 'Estandarización de una flota de alquiler de 200 embarcaciones en tres sedes para un operador',
      intro: [
        'Un operador de alquiler con tres puntos junto al agua necesitaba una flota uniforme en lugar de stock mixto: la misma embarcación en cada sede, con precio por volumen de flota.',
      ],
      industry: 'Operadores de flotas de alquiler',
      requirement: '200 RIB de grado alquiler repartidos en tres sedes, con renovación por temporada y recambios reparables en campo.',
      challenge:
        'El stock mixto y envejecido complicaba reparaciones y precios; el uso intensivo exige construcción reforzada y el almacenamiento fuera de temporada está dividido en tres sedes.',
      solution:
        'Una única plataforma de grado alquiler — el rib-alloy-430 en versión reforzada — en todas las sedes con tubos reforzados y tejidos anti-UV, precio de flota sobre las 200 unidades y kit de recambios con guía de reparación por sede.',
      product:
        'RIB de aluminio de grado alquiler — rib-alloy-430 (4,3 m) con tubos reforzados y kits de reparación por sede.',
      process: [
        { title: 'Auditoría de flota', body: 'Volumen por sede y curvas de uso definieron el reparto entre ubicaciones.' },
        { title: 'Especificación uniforme', body: 'Una misma embarcación en todas partes: reparaciones, precios y formación más simples.' },
        { title: 'Precio de flota', body: 'Descuento por volumen sobre el pedido combinado de 200 unidades.' },
        { title: 'Recambios y renovación', body: 'Kits de recambios por sede y un ciclo de renovación estacional definido.' },
      ],
      result:
        'La flota uniforme eliminó la confusión de reparaciones por sede, el pedido combinado desbloqueó el precio de flota y el programa de 200 embarcaciones se convirtió en la base de la renovación estacional.',
      outcome: 'Operaciones uniformes, menor coste unitario, ciclo estacional repetible.',
      customizations: [
        'Una única plataforma de grado alquiler en las tres sedes',
        'Tubos reforzados y tejidos anti-UV para el uso intensivo de alquiler',
        'Reparto por sede y numeración de flota por ubicación',
        'Kits de recambios por sede con guía de reparación',
        'Ciclo de renovación estacional definido',
      ],
      inspectionFocus: [
        'Verificación de construcción reforzada por embarcación',
        'Registros de inflado y prueba de presión de 24 horas',
        'Integridad de accesorios y kits de reparación por sede',
        'Precisión de numeración y etiquetas de sede',
        'Controles de embalaje para entrega en varias sedes',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del operador ni las ubicaciones de las sedes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota multi-sede', 'Construcción reforzada de alquiler', 'Renovación estacional'],
    },
    {
      slug: 'day-cruiser-range',
      customerType: 'Distribuidores outdoor y náuticos',
      region: 'Europa',
      productCategory: 'Gama de RIB de fibra de vidrio para crucero costero (5,2 m + 6,4 m)',
      projectStage: 'Brief de producto → Aprobación de muestra → Producción en volumen',
      manufacturingScope: 'Revisión de plataforma, gráficos de gama, configuración de accesorios, embalaje de concesionario y producción',
      keyRequirements: 'Confort de crucero, gráficos propios de la gama, kit de concesionario completo',
      qualityFocus: 'Acabado de gelcoat, pruebas de presión, precisión del arte, precisión del marcado de jaulas',
      navLabel: 'Gama de crucero costero',
      metaTitle: 'Desarrollo de gama de crucero costero en fibra de vidrio | Red de concesionarios — Neptunor',
      metaDescription:
        'Cómo Neptunor respaldó una gama de RIB de fibra de vidrio para crucero costero de un distribuidor europeo: revisión de plataforma, gráficos de gama, configuración de accesorios y embalaje de concesionario.',
      kicker: 'Proyecto de crucero costero',
      h1: 'Desarrollo de una gama de RIB de fibra de vidrio para crucero costero de un distribuidor europeo',
      intro: [
        'Un proyecto personalizado de RIB de fibra de vidrio que cubre revisión de plataforma, gráficos propios de la gama, configuración de accesorios, embalaje de concesionario y planificación de calidad: desde la aprobación de la muestra hasta la preparación del envío.',
      ],
      industry: 'Distribuidores outdoor y náuticos',
      requirement:
        'Una gama de crucero costero en fibra de vidrio con gráficos propios, configuración de accesorios y embalaje de concesionario, controlada desde la aprobación de la muestra hasta el envío.',
      challenge:
        'El comprador de crucero espera navegación seca y predecible, así que los cascos, las dimensiones y la distribución de pesos debían revisarse antes de producir. Los gráficos debían integrarse con cornamusas, pasamanos y líneas de consola, y cada kit de concesionario debía llegar completo en toda la gama.',
      solution:
        'Revisión de plataforma y dimensiones para rendimiento de crucero sobre los cascos rib-glass-520 y rib-glass-640, gráficos de gama alineados con los elementos de cubierta, configuración de accesorios con asientos, toldo de sol y kit de fondeo, planificación del embalaje de concesionario y producción en volumen controlada con puntos de control de calidad definidos.',
      product:
        'Gama de RIB de fibra de vidrio para crucero costero: plataformas de 5,2 m y 6,4 m con gráficos de gama, kits de accesorios completos y estiba de concesionario lista para envío.',
      process: [
        { title: 'Revisión de plataforma', body: 'Dimensiones y distribución de pesos de rib-glass-520 y rib-glass-640 ajustadas al mercado objetivo.' },
        { title: 'Especificación y arte', body: 'Especificación técnica, alineación de gráficos de gama y BOM aprobado por el cliente.' },
        { title: 'Aprobación de muestra', body: 'Gelcoat, gráficos y kit confirmados en embarcaciones físicas.' },
        { title: 'Producción e inspección', body: 'Producción en volumen con puntos de control de calidad, verificación de embalaje y liberación de envío.' },
      ],
      result:
        'La gama avanzó de la aprobación de muestra a la preparación de envío bajo documentación controlada de producto, arte, BOM y embalaje: las muestras aprobadas sirvieron de referencia para la producción y la inspección final.',
      outcome: 'Recorrido controlado de muestra a producción; gráficos y embalaje bloqueados antes de producir.',
      customizations: [
        'Configuración de plataformas rib-glass-520 y rib-glass-640',
        'Gráficos de gama en casco, tubos y consola',
        'Configuración de color y costura del tapizado',
        'Posición de cornamusas, pasamanos y accesorios según la cubierta',
        'Bundles de asientos, toldo de sol y kit de fondeo por SKU',
        'Marcado de jaulas y códigos de barras para los mercados objetivo',
      ],
      inspectionFocus: [
        'Inspección de gelcoat y laminado en cada casco',
        'Verificación de inflado y prueba de presión de 24 horas en los juegos de tubos',
        'Precisión del arte frente a los archivos aprobados',
        'Integridad de accesorios y kit',
        'Verificación de embalaje de concesionario, código de barras y marcado de jaulas',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni su cartera de clientes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Gama de crucero costero', 'Gráficos de gama', 'Embalaje de concesionario'],
    },
    {
      slug: 'fishing-boat-program',
      customerType: 'Minoristas outdoor',
      region: 'Norteamérica',
      productCategory: 'RIB de aluminio configurado para pesca',
      projectStage: 'Revisión de concepto → Aprobación de muestra → Producción del programa',
      manufacturingScope: 'Configuración de plataforma, disposición de accesorios, embalaje y producción',
      keyRequirements: 'Integración de accesorios de pesca, plataforma estable de lance, estiba organizada',
      qualityFocus: 'Pruebas de presión, anclaje de accesorios, precisión del arte, integridad del pack',
      navLabel: 'Programa de embarcación de pesca',
      metaTitle: 'Desarrollo de RIB de pesca | Disposición de accesorios y estiba — Neptunor',
      metaDescription:
        'Cómo Neptunor desarrolló un RIB de aluminio configurado para pesca de un minorista outdoor: disposición de accesorios, estiba organizada y embalaje retail bajo un programa controlado.',
      kicker: 'Proyecto de pesca',
      h1: 'Desarrollo de RIB de pesca para un minorista outdoor: disposición de accesorios y configuración de estiba',
      intro: [
        'Un proyecto de RIB específico para pesca: una plataforma estable con zonas para accesorios de pesca, estiba organizada y embalaje listo para retail, desde la revisión de concepto hasta la producción del programa.',
      ],
      industry: 'Retail y marcas outdoor',
      requirement:
        'Una configuración de RIB de pesca con anclaje de accesorios, estiba organizada y embalaje de retail, desde la revisión de concepto hasta la producción del programa.',
      challenge:
        'Las embarcaciones de pesca necesitan anclaje de accesorios — porta-cañas, zonas de cebo y estiba de aparejos — sin comprometer la estabilidad ni el espacio de cubierta. El equipo debía quedar firme con la embarcación en marcha y el embalaje presentar la categoría con claridad en el punto de venta.',
      solution:
        'Una plataforma ancha y estable con zonas de pesca definidas, posicionamiento de porta-cañas y pasamanos para el equipo, un pack de estiba organizado con kit de reparación y embalaje de retail desarrollado bajo un único programa controlado.',
      product:
        'RIB de aluminio de pesca: plataforma de manga ancha con zonas de pesca, estiba organizada y embalaje listo para retail.',
      process: [
        { title: 'Revisión de concepto', body: 'Uso objetivo, equipo transportado y estructura de estiba definieron la configuración.' },
        { title: 'Disposición de accesorios', body: 'Porta-cañas, pasamanos y zonas de almacenaje posicionados en cubierta.' },
        { title: 'Aprobación de muestra', body: 'Estabilidad y anclaje de accesorios verificados en una embarcación física.' },
        { title: 'Producción del programa', body: 'Puntos de control de calidad definidos, verificación del pack y liberación de envío.' },
      ],
      result:
        'La configuración se confirmó en la muestra aprobada — anclaje de accesorios, estructura de estiba y embalaje alineados antes de producir — y el programa se envió con kits verificados.',
      outcome: 'Disposición de accesorios y estiba bloqueadas en la fase de muestra; kits verificados enviados.',
      customizations: [
        'Plataforma ancha y estable con zonas de pesca dedicadas',
        'Posicionamiento de porta-cañas, raíl de accesorios y pañol de ancla',
        'Diseño de cubierta para aparejos y nevera',
        'Selección de asientos y consola para uso de pesca',
        'Pack de estiba organizado y kit de reparación',
        'Embalaje de retail para la categoría de pesca',
        'Código de barras y marcado de cajas para el mercado objetivo',
      ],
      inspectionFocus: [
        'Verificación del anclaje de accesorios y la posición del raíl',
        'Verificación de inflado y prueba de presión de 24 horas',
        'Precisión del arte y del diseño de cubierta',
        'Integridad de la estiba y configuración de accesorios',
        'Verificación del embalaje de retail y del marcado de cajas',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del minorista ni los detalles de canal. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Configuración de pesca', 'Disposición de accesorios', 'Estiba organizada'],
    },
    {
      slug: 'watersports-school-fleet',
      customerType: 'Escuelas y programas de deportes acuáticos',
      region: 'Europa',
      productCategory: 'Flota de neumáticas de iniciación y RIB de seguridad',
      projectStage: 'Revisión del programa → Aprobación de muestra → Entrega de flota',
      manufacturingScope: 'Configuración de iniciación estable, equipamiento del bote de seguridad, producción y embalaje de programa',
      keyRequirements: 'Estabilidad para grupos primerizos, flota coherente, almacenaje manejable',
      qualityFocus: 'Firmeza de herrajes, pruebas de presión, precisión del arte, integridad del kit',
      navLabel: 'Flota para escuela de deportes acuáticos',
      metaTitle: 'Flota para escuela acuática | Neumáticas de iniciación y RIB de seguridad — Neptunor',
      metaDescription:
        'Cómo Neptunor equipó una escuela de deportes acuáticos con una flota coherente de neumáticas de iniciación y un RIB de seguridad para instructores: plataformas estables para grupos y especificación de renovación bloqueada.',
      kicker: 'Proyecto escolar',
      h1: 'Cómo equipamos una escuela de deportes acuáticos con una flota coherente de iniciación y seguridad',
      intro: [
        'Una escuela que daba clases de grupo en un lago tranquilo necesitaba embarcaciones en las que los principiantes se sintieran seguros, un bote de seguridad para los instructores y una flota tan coherente que las promociones anuales entrenaran en equipos idénticos.',
      ],
      industry: 'Educación y programas juveniles',
      requirement:
        'Una flota coherente: neumáticas de iniciación estables para sesiones de grupo más un RIB de seguridad para instructores, en cantidades de programa y con guía clara para el personal.',
      challenge:
        'Los principiantes necesitan embarcaciones estables y indulgentes; los instructores, un bote de seguridad rápido con buena visibilidad; las promociones cambian cada año y los reemplazos deben coincidir; y el almacenaje entre sesiones es limitado.',
      solution:
        'Neumáticas air-deck de iniciación (airdock-330) con cubiertas antideslizantes y agarraderas de largo recorrido, un RIB de seguridad (rib-alloy-360) equipado para función de instructor, una única configuración de flota y guía para instructores más etiquetas de programa incluidas.',
      product:
        'Flota de neumáticas de iniciación más RIB de seguridad: plataformas estables con equipamiento coherente y etiquetado de programa.',
      process: [
        { title: 'Revisión del programa', body: 'Formato de sesión, tamaño del grupo y almacenaje definieron la configuración.' },
        { title: 'Configuración', body: 'Equipamiento de iniciación y especificación del bote de seguridad fijados en toda la flota.' },
        { title: 'Aprobación de muestra', body: 'Estabilidad, agarraderas y equipamiento verificados en embarcaciones físicas.' },
        { title: 'Entrega de flota', body: 'Cantidades de programa producidas con verificación de kit y embalaje.' },
      ],
      result:
        'La flota se envió como una única configuración coherente — cada embarcación idéntica a la muestra aprobada — y los instructores reportaron primeras sesiones más tranquilas, con una renovación igual prevista para la promoción del año siguiente.',
      outcome: 'Flota coherente acorde a la muestra aprobada; especificación de renovación bloqueada.',
      customizations: [
        'Plataforma de iniciación estable dimensionada para grupos primerizos',
        'Cubiertas antideslizantes y agarraderas de largo recorrido en cada neumática',
        'Equipamiento del RIB de seguridad: consola, preparación de motor y escalerilla',
        'Color y acabado coherentes en toda la flota',
        'Guía para instructores y etiquetas de programa',
        'Configuración de bastidores de almacenaje y embalaje de programa',
      ],
      inspectionFocus: [
        'Verificación de estabilidad y firmeza de herrajes en la muestra aprobada',
        'Registros de inflado y prueba de presión de 24 horas',
        'Comprobación de anclaje de agarraderas y cornamusas en toda la tirada',
        'Coherencia de arte y acabado',
        'Integridad del kit y controles del embalaje de programa',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni la ubicación de la escuela. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota de iniciación', 'Equipamiento de seguridad', 'Flota de programa'],
    },
  ],
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return projects[locale].find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'RIB & Inflatable Boat Manufacturing Projects — Case Studies | Neptunor',
    metaDescription:
      'Real boat manufacturing case studies: how marinas, agencies, resorts, distributors and schools turned requirements into finished RIBs and inflatable boats with Neptunor.',
    h1: 'Projects — How We Build Boats With Clients',
  },
  es: {
    metaTitle: 'Proyectos y casos de fabricación de RIB y embarcaciones neumáticas | Neptunor',
    metaDescription:
      'Casos reales de fabricación naval: cómo marinas, agencias, resorts, distribuidores y escuelas convirtieron requisitos en RIB y embarcaciones neumáticas terminadas con Neptunor.',
    h1: 'Proyectos — cómo construimos embarcaciones con los clientes',
  },
}
