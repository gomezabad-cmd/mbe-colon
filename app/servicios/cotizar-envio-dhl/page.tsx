import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/cotizar-envio-dhl#service',
      name: 'Cotizar Envío DHL en Colón Panamá',
      description: 'Cotización inmediata de envíos DHL Express desde Colón, Panamá a cualquier país del mundo. Agentes autorizados DHL con más de 13 años de experiencia.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Colón' },
      url: 'https://mbecolon.com/servicios/cotizar-envio-dhl',
      brand: { '@type': 'Brand', name: 'DHL' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Cotizar Envío DHL', item: 'https://mbecolon.com/servicios/cotizar-envio-dhl' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo cotizo un envío DHL en Colón, Panamá?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visítanos en Plaza Millenium F007 con tu paquete o escríbenos por WhatsApp con el peso, dimensiones y país de destino. Te damos la cotización al instante con DHL Express, FedEx y UPS para que elijas la mejor opción.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta enviar con DHL desde Colón?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio depende del peso, tamaño, destino y velocidad. Un documento de 0.5 kg a USA con DHL Express puede costar desde $25-$35 USD. Para Colombia o Venezuela desde $35-$60 USD. Te cotizamos sin compromiso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Son agentes autorizados DHL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. MBE Colón es agente autorizado de DHL con más de 13 años operando en Plaza Millenium de Colón. Ofrecemos los mismos precios que la red oficial DHL con la ventaja de atención personalizada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿DHL entrega en todos los países?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DHL Express tiene cobertura en más de 220 países y territorios. Desde Colón podemos enviar a USA, Colombia, Venezuela, Ecuador, Perú, Costa Rica, España y prácticamente cualquier destino del mundo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tarda DHL Express desde Colón?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DHL Express: USA 1-2 días, Colombia/Venezuela 2-3 días, España/Europa 2-3 días, Asia 3-5 días. Los tiempos son días hábiles desde la recogida del paquete.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'Cotizar Envío DHL Colón Panamá | Agentes Autorizados — MBE Colón',
  description: 'Cotiza tu envío DHL Express en Colón, Panamá. Agentes autorizados DHL con 13 años de experiencia. Envíos a USA, Colombia, España y 220 países. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/cotizar-envio-dhl',
  },
}

export default function CotizarEnvioDhlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        icon="📦"
        title="Cotiza tu Envío DHL en Colón"
        description="Somos agentes autorizados DHL Express en Colón, Panamá desde 2012. Cotizamos al instante envíos a USA, Colombia, Venezuela, España y más de 220 países. También comparamos con FedEx y UPS para darte la mejor opción según tu presupuesto y urgencia."
        benefits={[
          'Agentes autorizados DHL desde 2012',
          'Cotización al instante sin compromiso',
          'Comparamos DHL, FedEx y UPS',
          'Embalaje profesional incluido si lo necesitas',
          'Rastreo en tiempo real con número de guía',
          'Atención personalizada en Plaza Millenium',
        ]}
        steps={[
          {
            number: 1,
            title: 'Trae tu paquete o cotiza por WhatsApp',
            description: 'Visítanos en Plaza Millenium F007 o escríbenos con peso, dimensiones y destino. Cotizamos DHL, FedEx y UPS al instante.',
          },
          {
            number: 2,
            title: 'Elegimos juntos la mejor opción',
            description: 'Te mostramos las opciones por precio y velocidad. Embalamos tu paquete con materiales profesionales si lo requiere.',
          },
          {
            number: 3,
            title: 'Rastreo hasta destino por WhatsApp',
            description: 'Recibes el número de guía DHL por WhatsApp. Puedes rastrear tu paquete en dhl.com en tiempo real hasta la entrega.',
          },
        ]}
        faqs={[
          {
            question: '¿Cómo cotizo por WhatsApp?',
            answer: 'Escríbenos al 6949-5100 con: 1) Peso del paquete, 2) Dimensiones (largo x ancho x alto en cm), 3) País de destino, 4) Ciudad/código postal. En minutos te enviamos la cotización con DHL, FedEx y UPS.',
          },
          {
            question: '¿Cuánto cuesta enviar con DHL?',
            answer: 'Depende del destino y peso. Referencia aproximada: documento 0.5 kg a USA desde $25, a Colombia desde $35, a España desde $40. Para paquetes el precio varía según dimensiones. Cotizamos gratis sin compromiso.',
          },
          {
            question: '¿Son más baratos que ir directamente a DHL?',
            answer: 'Nuestros precios son los mismos que la tarifa oficial DHL o mejores por acuerdos de volumen. La ventaja es la atención personalizada, ayuda con documentación y la posibilidad de comparar con FedEx y UPS en el mismo lugar.',
          },
          {
            question: '¿Qué pasa si mi paquete se pierde?',
            answer: 'DHL Express tiene cobertura de seguro básica incluida. Para envíos de mayor valor ofrecemos seguro adicional. En caso de problema, gestionamos el reclamo con DHL directamente por ti.',
          },
          {
            question: '¿Pueden enviar documentos legales o pasaportes?',
            answer: 'Sí. DHL Express Documents es la mejor opción para documentos urgentes, contratos, títulos, pasaportes y expedientes legales. Entrega garantizada con firma del destinatario.',
          },
        ]}
        href="/servicios/cotizar-envio-dhl"
        serviceType="Courier Service"
      />
    </>
  )
}
