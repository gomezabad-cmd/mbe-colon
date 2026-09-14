import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/sellos#service',
      name: 'Sellos Automáticos Personalizados',
      description: 'Fabricación de sellos automáticos personalizados en Colón, Panamá. Modelos Trodat y Colop. Entrega en 24-48 horas. Garantía 6 meses.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Colón' },
      url: 'https://mbecolon.com/servicios/sellos',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Sellos Automáticos', item: 'https://mbecolon.com/servicios/sellos' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuántas impresiones puedo hacer con un sello?', acceptedAnswer: { '@type': 'Answer', text: 'Cada sello puede hacer entre 5,000 a 10,000 impresiones claras dependiendo de la intensidad de tinta.' } },
        { '@type': 'Question', name: '¿Puedo poner un logo en el sello?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, puedes incluir tu logo, iniciales, firma digitalizada o cualquier diseño personalizado.' } },
        { '@type': 'Question', name: '¿Cuánto tiempo tarda la fabricación?', acceptedAnswer: { '@type': 'Answer', text: 'Entrega estándar: 24-48 horas. Para pedidos urgentes, contacta antes de las 11 AM.' } },
        { '@type': 'Question', name: '¿El sello tiene garantía?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, todos nuestros sellos tienen garantía de 6 meses contra defectos de fabricación.' } },
      ],
    },
  ],
}

export const metadata = {
  title: 'Sellos Automáticos Personalizados para Empresas y Profesionales | MBE Colón, Panamá',
  description: 'Sellos automáticos personalizados para abogados, médicos y empresas en Colón. Modelos Trodat y Colop, entrega en 24-48 horas. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/sellos',
  },
}

export default function SelloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
    />
    </>
  )
}
