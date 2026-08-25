export interface GlossaryEntry {
  term: string
  short: string
  locale: string
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: 'OEM', short: 'Original Equipment Manufacturer — we manufacture to your approved specification; you own the design, tooling and intellectual property.', locale: 'en' },
  { term: 'ODM', short: 'Original Design Manufacturer — our engineering team develops the boat from your brief (concept, performance target or platform adaptation); you approve before production.', locale: 'en' },
  { term: 'Private label', short: 'Your brand, graphics and packaging on an existing validated platform — no tooling development, no structural changes. Fastest route from concept to delivery.', locale: 'en' },
  { term: 'Co-branding', short: 'Small-batch production (5–10 pcs) applying your logo to an existing platform with minimal customization.', locale: 'en' },
  { term: 'RIB', short: 'Rigid Inflatable Boat — a rigid hull (aluminum or fiberglass) with inflatable tube collars, combining hull performance with buoyancy and stability.', locale: 'en' },
  { term: 'Hypalon® (CSM)', short: 'Chlorosulfonated polyethylene rubber used for premium tube fabric. Superior UV, chemical and abrasion resistance versus standard PVC — the choice for professional and commercial fleets.', locale: 'en' },
  { term: 'RF welding', short: 'Radio-frequency welding — the primary seam-sealing method for PVC/Hypalon inflatable products. Uses electromagnetic energy to create molecular bonds at the overlap seam.', locale: 'en' },
  { term: 'Thermo-welding', short: 'Hot-air/hot-wedge welding used for thermoplastic fabrics. Creates continuous, pressure-tight seams for tube bodies and baffles.', locale: 'en' },
  { term: 'Pressure hold test', short: 'Pressure retention test — inflating tubes to test pressure (0.35 bar / 5 PSI) and monitoring for 24 hours. A drop beyond tolerance means auto-reject.', locale: 'en' },
  { term: 'Golden sample', short: 'The approved reference sample that sets the standard for mass production. All subsequent boats are compared to this benchmark.', locale: 'en' },
  { term: 'BSCI', short: 'Business Social Compliance Initiative — a social responsibility audit standard by amfori, covering labor rights, safety and ethics at the manufacturing facility.', locale: 'en' },
  { term: 'MOQ', short: 'Minimum Order Quantity — confirmed after specification review. Tiered: 5–10 co-branding, 20–50 pilot, 90–100+ standard volume per approved configuration.', locale: 'en' },
  { term: 'Design category (CE)', short: 'EU Recreational Craft Directive classification — Category C (inshore) or D (sheltered waters) defines wind/wave conditions a boat is certified for.', locale: 'en' },
  { term: 'Tube collar', short: 'The inflatable buoyancy tube around a RIB hull. Diameter, chamber count and fabric weight are engineered per boat size and duty.', locale: 'en' },

  { term: 'OEM', short: 'Fabricante de Equipo Original — fabricamos según tu especificación aprobada; tú eres propietario del diseño, el utillaje y la propiedad intelectual.', locale: 'es' },
  { term: 'ODM', short: 'Fabricante de Diseño Original — nuestro equipo de ingeniería desarrolla el bote a partir de tu brief (concepto, objetivo de rendimiento o adaptación de plataforma); tú apruebas antes de la producción.', locale: 'es' },
  { term: 'Marca privada', short: 'Tu marca, gráficos y embalaje sobre una plataforma validada existente — sin desarrollo de utillaje, sin cambios estructurales. La vía más rápida del concepto a la entrega.', locale: 'es' },
  { term: 'RIB', short: 'Bote Neumático Semirrígido — casco rígido (aluminio o fibra de vidrio) con tubos inflables perimetrales, combinando rendimiento del casco con flotabilidad y estabilidad.', locale: 'es' },
  { term: 'Hipalón® (CSM)', short: 'Caucho clorosulfonado de polietileno usado en telas de tubo premium. Superior resistencia UV, química y a la abrasión frente al PVC estándar — la opción para flotas profesionales y comerciales.', locale: 'es' },
  { term: 'Soldadura RF', short: 'Soldadura por radiofrecuencia — el método principal de sellado de costuras para productos inflables de PVC/Hipalón.', locale: 'es' },
  { term: 'Prueba de presión', short: 'Prueba de retención de presión — inflar los tubos a la presión de prueba (0.35 bar / 5 PSI) y monitorear 24 horas. Una caída fuera de tolerancia significa rechazo automático.', locale: 'es' },
  { term: 'Categoría de diseño (CE)', short: 'Clasificación de la Directiva Europea de Embarcaciones de Recreo — la Categoría C (aguas costeras) o D (aguas abrigadas) define las condiciones de viento/oleaje para las que un bote está certificado.', locale: 'es' },
  { term: 'MOQ', short: 'Cantidad Mínima de Pedido — el menor número de unidades aceptadas por tirada de producción. Escalonado: 5–10 co-branding, 20–50 piloto, 90–100+ volumen.', locale: 'es' },
]
