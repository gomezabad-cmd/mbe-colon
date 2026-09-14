import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/envios-colombia#service',
      name: 'Envíos a Colombia desde Panamá',
      description: 'Envíos internacionales a Colombia con DHL, FedEx y UPS desde Colón, Panamá. Cotización inmediata, seguro incluido y rastreo en tiempo real.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'City', name: 'Colón' },
      ],
      url: 'https://mbecolon.com/servicios/envios-colombia',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        description: 'Cotización inmediata según peso y dimensiones',
        eligibleRegion: { '@type': 'Country', name: 'Colombia' },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Envíos a Colombia', item: 'https://mbecolon.com/servicios/envios-colombia' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta enviar un paquete a Colombia desde Colón, Panamá?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El costo depende del peso, dimensiones y velocidad de entrega. Un paquete de 1 kg con DHL Express a Bogotá puede costar desde $35-$55 USD. Cotizamos al instante en nuestra oficina o por WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda un envío de Panamá a Colombia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con DHL Express: 1-2 días hábiles. Con FedEx International Priority: 2-3 días. Con UPS Worldwide Expedited: 2-5 días. Los tiempos son desde nuestra recepción del paquete.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué documentos necesito para enviar a Colombia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para envíos personales: copia de cédula o pasaporte del destinatario y descripción del contenido. Para envíos comerciales: factura comercial y lista de empaque. Nosotros te orientamos sobre los requisitos específicos según el tipo de mercancía.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo enviar cualquier tipo de mercancía a Colombia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La mayoría de mercancías se pueden enviar. Artículos restringidos incluyen: armas, explosivos, dinero en efectivo, artículos perecederos sin empaque especial. Para mercancías específicas, consultamos los requisitos de aduana colombiana.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El envío incluye seguro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Todos nuestros envíos con DHL, FedEx y UPS incluyen cobertura básica. Ofrecemos seguro adicional para envíos de alto valor declarado.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'Envíos a Colombia desde Colón, Panamá | DHL FedEx UPS — MBE Colón',
  description: 'Envía paquetes a Colombia desde Colón, Panamá con DHL, FedEx o UPS. Cotización inmediata, rastreo en tiempo real y entrega en 1-3 días. MBE Colón Plaza Millenium.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/envios-colombia',
  },
}

export default function EnviosColombiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        icon="🇨🇴"
        title="Envíos a Colombia desde Panamá"
        description="Enviamos paquetes y documentos a cualquier ciudad de Colombia con DHL, FedEx y UPS. Desde Colón, Panamá hacia Bogotá, Medellín, Cali, Barranquilla y toda Colombia. Cotización inmediata, seguro incluido y rastreo en tiempo real."
        benefits={[
          'DHL Express: entrega en 1-2 días hábiles',
          'FedEx International Priority: 2-3 días',
          'UPS Worldwide: 2-5 días con rastreo',
          'Seguro de envío incluido',
          'Documentación aduanera gestionada por nosotros',
          'Notificación por WhatsApp al despachar',
        ]}
        steps={[
          {
            number: 1,
            title: 'Trae tu paquete',
            description: 'Visítanos en Plaza Millenium F007 con tu paquete. Cotizamos al instante las 3 mejores opciones para Colombia.',
          },
          {
            number: 2,
            title: 'Elegimos el servicio',
            description: 'Seleccionas entre DHL, FedEx o UPS según precio y velocidad. Embalamos profesionalmente si lo necesitas.',
          },
          {
            number: 3,
            title: 'Rastreo hasta destino',
            description: 'Recibes el número de guía por WhatsApp para rastrear tu paquete en tiempo real hasta Colombia.',
          },
        ]}
        faqs={[
          {
            question: '¿Cuánto cuesta enviar a Colombia desde Panamá?',
            answer: 'El costo depende del peso, dimensiones y velocidad. Un paquete de 1 kg a Bogotá con DHL Express cuesta desde $35-$55 USD. Cotizamos gratis en nuestra oficina o por WhatsApp. Para volúmenes grandes ofrecemos tarifas especiales.',
          },
          {
            question: '¿Cuánto tarda en llegar a Colombia?',
            answer: 'DHL Express: 1-2 días hábiles. FedEx International Priority: 2-3 días. UPS Worldwide Expedited: 2-5 días. Los tiempos se cuentan desde la recepción del paquete en nuestra oficina.',
          },
          {
            question: '¿Qué documentos se necesitan?',
            answer: 'Para envíos personales: descripción del contenido y datos del destinatario. Para envíos comerciales: factura comercial y lista de empaque. Te orientamos en el proceso según el tipo de mercancía.',
          },
          {
            question: '¿Envían a cualquier ciudad de Colombia?',
            answer: 'Sí, DHL, FedEx y UPS tienen cobertura en toda Colombia: Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Pereira, Manizales y ciudades intermedias.',
          },
          {
            question: '¿Puedo enviar documentos legales o contratos?',
            answer: 'Sí. Los documentos se envían en sobre certificado con rastreo. DHL Express Documents es ideal para contratos, títulos, pasaportes y documentos legales urgentes.',
          },
        ]}
        href="/servicios/envios-colombia"
        serviceType="Courier Service"
      />
    </>
  )
}
