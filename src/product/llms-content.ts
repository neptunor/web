import { SITE_DOMAIN, SITE_NAME } from '@/config/site'
import { BRAND_COMPANY_NAME, BRAND_CONTACT, BRAND_PARENT_URL } from '@/config/branding'

const SITE_URL = `https://${SITE_DOMAIN}`

/**
 * Canonical `/llms.txt` identity card.
 *
 * The llmstxt.org convention does not require website pages to be authored as
 * MDX. It requires a concise Markdown index at the origin root. Detailed
 * page content is exposed separately by `/llms-full.txt`.
 */
export const LLMS_TXT = `# ${SITE_NAME}

> ${SITE_NAME} is the RIB boat and inflatable boat OEM/ODM manufacturing brand of ${BRAND_COMPANY_NAME}, operating from an 18,000 m² marine manufacturing plant in Qingdao, China. We manufacture RIB boats and inflatable boats for boat brands, distributors, fleet operators, resorts, marinas and professional rescue teams. Services include engineering review, tube and hull fabrication, tooling, sampling, quality control, private-label production and export documentation.

## Services

- [Custom boat product development](${SITE_URL}/product-development): specification review, engineering and 3D work, prototyping, testing, tooling and batch production for RIB boats and inflatable boats.
- [Private-label boat manufacturing](${SITE_URL}/solutions/private-label-boats): approved RIB and inflatable-boat platforms produced with the buyer's brand graphics, colors and packaging.
- [Fleet and rental boat programs](${SITE_URL}/solutions/fleet-rental): configuration and repeat-order support for marinas, resorts and rental operators, including model-specific spares planning.
- [Rescue and professional boats](${SITE_URL}/solutions/rescue-professional): mission-configured RIB boats for rescue, patrol and dive-team programs.
- [Yacht tender and dealer programs](${SITE_URL}/solutions/yacht-tender-dealers): branded inflatable tenders and dealer supply programs.
- [OEM manufacturing](${SITE_URL}/oem-manufacturing): production to an existing design or approved specification with project-specific documentation.
- [ODM boat development](${SITE_URL}/odm-development): engineering development from a buyer brief, market requirement or performance target.
- [Request a quotation](${SITE_URL}/contact): submit boat type, size, quantity, target market, required documentation and project files for a project review.

## What We Do Not Do

- We do not sell RIB boats or inflatable boats directly to end consumers.
- We do not offer SUP boards, paddleboards, kayaks, catamarans or whitewater rafts as product lines.
- We do not offer standalone accessories as independent product lines; boat equipment and service parts are configured only with an RIB or inflatable-boat program.
- We do not publish universal pricing, certification scope or delivery guarantees. MOQ, compliance documents and lead times are confirmed for the approved model and configuration.

## Key Information

- [About Neptunor](${SITE_URL}/about): company identity, manufacturing focus and business model.
- [Company entity page](${SITE_URL}/about/neptunor-entity): structured organization facts and related evidence pages.
- [Factory and manufacturing capability](${SITE_URL}/factory): facility, production processes, equipment and capacity.
- [Proof Center](${SITE_URL}/proof-center): factory evidence, certificate scope, inspection records and traceability information.
- [RIB buyer resource center](${SITE_URL}/resources/rib-buyer-resource-center): compliance, sourcing, CAD, export packing and after-sales resources.
- [Projects and case studies](${SITE_URL}/projects): published project information and application context.
- [Knowledge Center](${SITE_URL}/knowledge): RIB and inflatable-boat manufacturing guidance.

## Contact

- General enquiries: ${BRAND_CONTACT.email}
- Phone / WhatsApp: ${BRAND_CONTACT.whatsapp} (${BRAND_CONTACT.whatsappLink})
- Address: ${BRAND_CONTACT.address}
- Website: ${BRAND_PARENT_URL}
- Customer-service languages: English, Chinese and Spanish

## Key facts

- Legal entity: ${BRAND_COMPANY_NAME}; B2B brand: ${SITE_NAME}
- Founded: 2012
- Location: Qingdao, Shandong, China
- Facility: 18,000 m² across 4 specialized workshops
- Workers: 300+
- Annual capacity: 60,000+ boats; reported monthly capacity: 5,000 boats/month on 4 automated lines
- MOQ is project-specific: 5–10 units for selected co-branding on existing platforms, 20–50 units for pilot batches, 90–100+ units per approved configuration for standard volume, and 50–100+ units where new hull or console tooling is required. Fabric yield and packaging requirements affect the final MOQ.
- Samples: 10–15 days
- Production: 30–45 days after confirmed PO and deposit; new hull or console tooling adds 20–35 days
- Quality controls: 7-stage Node 01–07 process, 120-point assembly checklist, 0.35 bar / 24-hour pressure hold, and ERP batch traceability retained for 10 years
- Certification documentation: CE under the EU Recreational Craft Directive 2013/53/EU, ISO 6185, ISO 9001, BSCI, REACH and applicable RoHS documentation. Scope, certificate numbers and validity are confirmed per project.
- Export markets: 40+ countries
- Business model: B2B OEM, ODM, private label and fleet supply; not a consumer retail store

## Certifications

- [Certification and compliance guide](${SITE_URL}/inflatable-boat-certification): model- and destination-specific documentation for RIB boats and inflatable boats.
- [Factory quality and inspection](${SITE_URL}/quality): quality-system, material, pressure-test and pre-shipment inspection information.
- Certificate numbers, validity periods, issuing bodies and applicable model scope are supplied during project review rather than presented as universal claims.

## AI Discovery Files

- [Full Markdown site corpus](${SITE_URL}/llms-full.txt): generated Markdown containing the available public page, product, news, technology and case-study content.
- [Structured organization entity](${SITE_URL}/entity.json): machine-readable organization and brand relationship data.
- [Robots instructions](${SITE_URL}/robots.txt): crawler access policy for the site.

## Optional

- [Terms of service](${SITE_URL}/terms)
- [Privacy policy](${SITE_URL}/privacy)
`
