import ServicePageTemplate from '@/components/ServicePageTemplate'
import QuoteCalculator from '@/components/QuoteCalculator'

export const metadata = {
  title: 'Impresión Profesional de Tarjetas, Brochures y Banners | MBE Colón, Panamá',
  description: 'Impresión profesional en Colón: planos arquitectónicos, brochures corporativos y banners en gran formato. Calidad garantizada y entrega rápida. MBE Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/impresion',
  },
}

export default function ImpresionPage() {
  return (
    <ServicePageTemplate
      icon="🖨️"
      title="Impresión Profesional"
      description="Impresión de alta calidad para tu negocio: tarjetas, brochures, banners, folletos y todo tipo de material gráfico."
      benefits={[
        'Tarjetas de presentación profesionales',
        'Brochures y folletos a todo color',
        'Banners y material para eventos',
        'Diseño gráfico disponible',
        'Entrega rápida — mismo día cuando es posible',
        'Papelería corporativa completa',
      ]}
      steps={[
        { number: 1, title: 'Envía tu diseño', description: 'Trae tu archivo o cuéntanos qué necesitas. También podemos ayudarte con el diseño.' },
        { number: 2, title: 'Revisamos y cotizamos', description: 'Verificamos el archivo, te enviamos prueba de impresión y confirmamos precio final.' },
        { number: 3, title: 'Retira tu pedido', description: 'Recoge tu material impreso en nuestra oficina o coordina entrega a domicilio.' },
      ]}
      faqs={[
        {
          question: '¿Qué formatos de archivo aceptan?',
          answer: 'Aceptamos PDF (recomendado), JPG, PNG, PSD (Photoshop), AI (Illustrator), y CorelDRAW. El formato PDF es el mejor porque garantiza que el diseño se imprima exactamente como lo creaste.',
        },
        {
          question: '¿Ofrecen servicio de diseño gráfico?',
          answer: 'Sí, tenemos diseñadores disponibles. Si traes tu concepto o logo, podemos crear tu tarjeta, brochure o banner desde cero. Cobramos un costo de diseño adicional que se descuenta si contratas la impresión.',
        },
        {
          question: '¿Cuál es el tiempo de entrega?',
          answer: 'Para trabajos simples (tarjetas, hojas) la entrega es mismo día si nos dejas el archivo antes de las 11 AM. Para proyectos más complejos (banners, planos arquitectónicos) es de 24-48 horas.',
        },
        {
          question: '¿Puedo ver una prueba antes de imprimir todo?',
          answer: 'Sí, siempre enviamos una prueba digital o física (según el caso) para que apruebes antes de hacer la impresión completa. Si hay cambios, los hacemos sin cargo.',
        },
        {
          question: '¿Cuál es la cantidad mínima para imprimir?',
          answer: 'Para tarjetas: 100 unidades. Para brochures: 50 unidades. Para banners: 1 unidad (a medida). Consulta por cantidades especiales.',
        },
        {
          question: '¿Incluyen la laminación o acabados?',
          answer: 'Sí, ofrecemos laminado brillante, mate, acabado 3D y otros efectos especiales. Los acabados mejoran la durabilidad y apariencia de tus materiales.',
        },
        {
          question: '¿Entregan a domicilio?',
          answer: 'Sí, coordinamos entrega a domicilio en Colón sin costo adicional para pedidos mayores a $50. Para pedidos menores, puedes recoger en Plaza Millenium F007.',
        },
      ]}
      href="/servicios/impresion"
    >
      <QuoteCalculator
        variant="general"
        title="Cotiza tu impresión"
        subtitle="Tarjetas, brochures, banners y más. Describe tu proyecto y recibe tu cotización en menos de 24 h hábiles."
      />
    </ServicePageTemplate>
  )
}
