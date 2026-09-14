import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/envios-internacionales#service',
      name: 'Envíos Internacionales',
      description: 'Envíos internacionales con DHL, FedEx y UPS desde Colón, Panamá. Cobertura mundial, rastreo en tiempo real y seguro incluido.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: { '@type': 'Country', name: 'Panama' },
      url: 'https://mbecolon.com/servicios/envios-internacionales',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Envíos Internacionales', item: 'https://mbecolon.com/servicios/envios-internacionales' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuáles son los tiempos de entrega con DHL, FedEx y UPS?', acceptedAnswer: { '@type': 'Answer', text: 'USA: 2-5 días. Centroamérica: 3-7 días. Sudamérica: 5-10 días. Europa: 7-15 días.' } },
        { '@type': 'Question', name: '¿El seguro está incluido?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, todos nuestros envíos incluyen seguro básico. Para artículos de alto valor, puedes contratar seguro adicional con cobertura completa.' } },
        { '@type': 'Question', name: '¿Cuál es el peso y tamaño máximo permitido?', acceptedAnswer: { '@type': 'Answer', text: 'DHL y FedEx permiten hasta 70 kg por paquete. UPS hasta 68 kg.' } },
        { '@type': 'Question', name: '¿Puedo hacer seguimiento de mi envío?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, te damos un número de rastreo único que puedes usar en la web del carrier para ver dónde está tu paquete en tiempo real.' } },
      ],
    },
  ],
}

export const metadata = {
  title: 'Envíos Internacionales con DHL, FedEx y UPS | MBE Colón, Panamá',
  description: 'Envíos internacionales con DHL, FedEx y UPS desde Colón, Panamá. Rastreo en tiempo real, cotizaciones al instante y entrega en 24-48 horas. Plaza Millenium.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/envios-internacionales',
  },
}

export default function EnviosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
      icon="✈️"
      title="Envíos Internacionales"
      description="Enviamos tus paquetes a cualquier parte del mundo desde Colón, Panamá con DHL, FedEx y UPS. Cotización inmediata, embalaje profesional y seguimiento en tiempo real para empresas y personas en la provincia de Colón."
      benefits={[
        'Cobertura mundial con DHL, FedEx y UPS',
        'Seguimiento en tiempo real de tu paquete',
        'Seguro incluido en todos los envíos',
        'Cotización inmediata sin esperas',
        'Embalaje profesional disponible',
        'Documentación aduanera gestionada',
      ]}
      steps={[
        { number: 1, title: 'Trae tu paquete', description: 'Visítanos en Plaza Millenium F007 con tu paquete y los datos del destinatario.' },
        { number: 2, title: 'Cotizamos al instante', description: 'Te damos el precio final con todas las opciones de carrier y tiempo de entrega.' },
        { number: 3, title: 'Lo enviamos', description: 'Preparamos el envío y te damos el número de rastreo para seguirlo en tiempo real.' },
      ]}
      faqs={[
        {
          question: '¿Cuáles son los tiempos de entrega con DHL, FedEx y UPS?',
          answer: 'Los tiempos varían según el destino. Para USA: 2-5 días. Para Centroamérica: 3-7 días. Para Sudamérica: 5-10 días. Para Europa: 7-15 días. Te damos opciones de entrega estándar y express al momento de cotizar.',
        },
        {
          question: '¿El seguro está incluido?',
          answer: 'Sí, todos nuestros envíos incluyen seguro básico. Para artículos de alto valor, puedes contratar seguro adicional con cobertura completa.',
        },
        {
          question: '¿Cuál es el peso y tamaño máximo permitido?',
          answer: 'DHL y FedEx permiten hasta 70 kg por paquete. UPS hasta 68 kg. Las dimensiones no deben exceder 300 cm en largo x 160 cm en ancho. Para paquetes más grandes, usamos servicios de carga marítima.',
        },
        {
          question: '¿Puedo hacer seguimiento de mi envío?',
          answer: 'Sí, te damos un número de rastreo único (tracking number) que puedes usar en la web del carrier para ver dónde está tu paquete en tiempo real. También te enviamos actualizaciones por WhatsApp.',
        },
        {
          question: '¿Qué documentación necesito?',
          answer: 'Solo necesitas el nombre, dirección y teléfono del destinatario. Si el paquete tiene valor comercial o contiene artículos restringidos, te ayudamos a completar la documentación aduanera.',
        },
        {
          question: '¿Aceptan embalaje de ustedes?',
          answer: 'Sí, ofrecemos servicio de re-embalaje profesional para proteger tu paquete durante el transporte. Incluye cajas de cartón reforzado, espuma, cinta industrial y documentación.',
        },
      ]}
      href="/servicios/envios-internacionales"
    />
    </>
  )
}
