import ServicePageTemplate from '@/components/ServicePageTemplate'
import QuoteCalculator from '@/components/QuoteCalculator'

export const metadata = {
  title: 'Sellos Automáticos Personalizados para Empresas y Profesionales | MBE Colón, Panamá',
  description: 'Sellos automáticos personalizados para abogados, médicos y empresas en Colón. Modelos Trodat y Colop, entrega en 24-48 horas. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/sellos',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sellos Automáticos Personalizados en Colón, Panamá',
  description:
    'Sellos automáticos Trodat y Colop personalizados para abogados, médicos, contadores y empresas en Colón. Entrega en 24-48 horas hábiles.',
  image: 'https://mbecolon.com/og-image.png',
  brand: { '@type': 'Brand', name: 'Mail Boxes Etc. Colón' },
  category: 'Papelería y sellos personalizados',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '8.00',
    highPrice: '60.00',
    offerCount: '3',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'AdministrativeArea', name: 'Colón, Panamá' },
    url: 'https://mbecolon.com/servicios/sellos',
  },
}

export default function SelloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ServicePageTemplate
      icon="🔖"
      title="Sellos Automáticos Personalizados"
      description="Fabricamos sellos automáticos de alta calidad en Colón, Panamá con tu nombre, empresa, dirección, logo o cualquier diseño personalizado. Ideales para abogados, médicos, contadores, empresas e instituciones en la provincia de Colón. Modelos Trodat y Colop con entrega en 24 a 48 horas hábiles."
      benefits={[
        'Sellos automáticos de bolsillo y de mesa',
        'Texto e imágenes a todo color',
        'Tinta incluida — miles de impresiones',
        'Recarga de tinta disponible',
        'Modelos Trodat, Colop y más',
        'Entrega en 24 a 48 horas hábiles',
        'Ideal para firmas, fechadores y numeradores',
      ]}
      steps={[
        {
          number: 1,
          title: 'Define tu diseño',
          description: 'Indícanos el texto, logo o información que debe llevar el sello. Puedes traer un boceto o describirlo y nosotros lo diseñamos.',
        },
        {
          number: 2,
          title: 'Aprobación de arte',
          description: 'Te enviamos una prueba digital del sello antes de fabricarlo para que apruebes el diseño final.',
        },
        {
          number: 3,
          title: 'Fabricación y entrega',
          description: 'Producimos tu sello en 24–48 horas. Retíralo en nuestra oficina o coordina entrega a domicilio en Colón.',
        },
      ]}
      faqs={[
        {
          question: '¿Cuál es la diferencia entre sello de bolsillo y de mesa?',
          answer: 'El sello de bolsillo es pequeño (se lleva en el bolsillo) y es ideal para abogados y profesionales. El sello de mesa es más grande y está para uso permanente en escritorio. Ambos hacen el mismo trabajo.',
        },
        {
          question: '¿Cuántas impresiones puedo hacer con un sello?',
          answer: 'Cada sello viene con tinta incluida y puede hacer entre 5,000 a 10,000 impresiones claras, dependiendo de la intensidad de tinta. Vendemos recarga de tinta cuando sea necesario.',
        },
        {
          question: '¿Puedo poner un logo en el sello?',
          answer: 'Sí, absolutamente. Puedes incluir tu logo, iniciales, firma digitalizada, o cualquier diseño personalizado. Eso es lo que hace especial a nuestros sellos.',
        },
        {
          question: '¿Cuál es el tamaño máximo del sello?',
          answer: 'El tamaño varía según el modelo. Los más comunes son 40mm de diámetro (para nombres) hasta 60mm (para información completa). Consulta por tamaños especiales.',
        },
        {
          question: '¿Cuánto tiempo tarda la fabricación?',
          answer: 'Entrega estándar: 24-48 horas. Para pedidos urgentes (mismo día), contacta antes de las 11 AM y verificamos disponibilidad.',
        },
        {
          question: '¿El sello tiene garantía?',
          answer: 'Sí, todos nuestros sellos tienen garantía de 6 meses contra defectos de fabricación. Si falla por uso normal, te lo reemplazamos sin cargo.',
        },
        {
          question: '¿Dónde puedo comprar tinta de recarga?',
          answer: 'Vendemos tinta en nuestra oficina en Plaza Millenium F007. Una botella de tinta cuesta $5-8 y dura cientos de impresiones. También venden en farmacias y librerías de Colón.',
        },
      ]}
      href="/servicios/sellos"
      serviceType="Rubber Stamp Manufacturing"
    >
      <QuoteCalculator
        variant="general"
        title="Cotiza tu sello automático"
        subtitle="Cuéntanos qué diseño necesitas y recibe tu cotización exacta en menos de 24 h hábiles."
      />
    </ServicePageTemplate>
    </>
  )
}
