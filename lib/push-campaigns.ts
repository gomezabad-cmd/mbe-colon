const WA_BASE = 'https://wa.me/50769495100?text='

export interface PushCampaign {
  title: string
  body: string
  link: string
  icon?: string
}

// Neuromarketing formula: DOLOR (miedo/pérdida) → DESEO → SOLUCIÓN + precio
const CAMPAIGNS: PushCampaign[] = [
  // === CASILLERO MIAMI ===
  {
    title: '😰 ¿Pagando envío doble sin saberlo?',
    body: 'Muchos pagan de más por no tener casillero. MBE Colón te da dirección en Miami GRATIS. Recibe en 48h — igualamos cualquier precio.',
    link: WA_BASE + encodeURIComponent('Hola! Quiero abrir mi casillero Miami GRATIS en MBE Colón'),
    icon: '📬',
  },
  {
    title: '📦 Tu paquete en Miami lleva días esperando',
    body: 'Cada día que pasa, más riesgo de perderlo. Casillero Miami en MBE Colón: recíbelo hoy mismo en Colón. Sin sorpresas de precio.',
    link: WA_BASE + encodeURIComponent('Hola! Tengo un paquete en Miami, quiero recibirlo en MBE Colón'),
    icon: '📬',
  },

  // === ENVÍOS INTERNACIONALES ===
  {
    title: '✈️ ¿Tu competencia ya envía con DHL y tú no?',
    body: 'Cada hora sin enviar es una venta perdida. MBE Colón cotiza DHL, FedEx y UPS al instante — y superamos cualquier precio que consigas.',
    link: WA_BASE + encodeURIComponent('Hola! Quiero cotizar un envío internacional desde Colón'),
    icon: '✈️',
  },
  {
    title: '🚨 No arriesgues tu paquete en manos equivocadas',
    body: 'Envíos sin seguro = pérdida total si algo falla. MBE Colón incluye embalaje profesional y seguro. Precio que nadie en Colón iguala.',
    link: WA_BASE + encodeURIComponent('Hola! Necesito enviar un paquete y quiero cotizar con seguro incluido'),
    icon: '✈️',
  },

  // === IMPRESIÓN ===
  {
    title: '🖨️ ¿Tu negocio parece improvisado por culpa de la impresión?',
    body: 'Una mala tarjeta cierra puertas. Impresión profesional en MBE Colón: mismo día, calidad premium. Mejor precio que cualquier copy en Colón.',
    link: WA_BASE + encodeURIComponent('Hola! Necesito cotizar impresión profesional en MBE Colón'),
    icon: '🖨️',
  },

  // === BORDADOS ===
  {
    title: '🧵 ¿Tus uniformes no proyectan la imagen que mereces?',
    body: 'Un equipo sin imagen uniforme pierde credibilidad ante clientes. Bordados con tu logo en MBE Colón — calidad empresa, precio accesible. Igualamos cualquier cotización.',
    link: WA_BASE + encodeURIComponent('Hola! Quiero cotizar bordados para uniformes de mi empresa en MBE Colón'),
    icon: '🧵',
  },

  // === SELLOS ===
  {
    title: '🔖 Sin sello oficial pierdes credibilidad en cada documento',
    body: 'Abogados, médicos y empresas en Colón confían en MBE para sus sellos. Entrega en 24-48h. Si encuentras más barato, lo igualamos.',
    link: WA_BASE + encodeURIComponent('Hola! Necesito un sello personalizado para mi empresa/profesión'),
    icon: '🔖',
  },

  // === CARGA MARÍTIMA ===
  {
    title: '🚢 ¿Tu mercancía lleva meses para llegar de China o USA?',
    body: 'Importar sin un intermediario confiable sale carísimo. Carga marítima Miami–Colón y China–Colón con MBE. Cotización gratis, precio competitivo garantizado.',
    link: WA_BASE + encodeURIComponent('Hola! Quiero cotizar carga marítima con MBE Colón'),
    icon: '🚢',
  },
]

/**
 * Returns the campaign for the current week, cycling through all campaigns.
 * Week 0 = campaign 0, week 1 = campaign 1, etc.
 */
export function getCampaignForWeek(weekOffset = 0): PushCampaign {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) + weekOffset
  return CAMPAIGNS[weekNumber % CAMPAIGNS.length]
}

/**
 * Returns a campaign by index (for manual/cron overrides).
 */
export function getCampaignByIndex(index: number): PushCampaign {
  return CAMPAIGNS[index % CAMPAIGNS.length]
}

export const TOTAL_CAMPAIGNS = CAMPAIGNS.length
