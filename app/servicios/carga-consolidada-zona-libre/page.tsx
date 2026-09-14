import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/carga-consolidada-zona-libre#service',
      name: 'Carga Consolidada Miami a Zona Libre de Colón',
      description: 'Servicio de carga LCL (Less than Container Load) desde Miami a la Zona Libre de Colón. Importa sin necesidad de llenar un contenedor completo. Tarifas por CBM.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Colón' },
      url: 'https://mbecolon.com/servicios/carga-consolidada-zona-libre',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Carga Consolidada Zona Libre', item: 'https://mbecolon.com/servicios/carga-consolidada-zona-libre' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es la carga consolidada LCL para la Zona Libre de Colón?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LCL (Less than Container Load) permite que múltiples importadores compartan espacio en un mismo contenedor desde Miami. Cada cliente paga solo por el espacio que usa (por CBM o libras), haciendo rentable importar pequeños y medianos volúmenes sin pagar un contenedor completo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta la carga consolidada de Miami a Colón?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio se cotiza por CBM (metro cúbico) o por peso según lo que sea mayor. Los precios varían con el mercado, pero son significativamente menores a envíos aéreos. Contacta para cotizar tu carga específica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda la carga marítima de Miami a Colón?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El tránsito marítimo de Miami a Colón toma aproximadamente 4-7 días. Sumando el tiempo de consolidación en Miami y desaduanaje en Colón, el proceso completo es de 2-4 semanas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué tipo de mercancía pueden mover a la Zona Libre?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Manejamos ropa y textiles, electrónicos, juguetes, muebles, equipos industriales, repuestos y casi cualquier mercancía general. Consultamos para artículos especiales como perecederos o peligrosos.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'Carga Consolidada Miami a Zona Libre de Colón | LCL — MBE Colón',
  description: 'Importa carga consolidada LCL de Miami a la Zona Libre de Colón. Sin necesidad de contenedor completo. Tarifas por CBM, gestión aduanera incluida. MBE Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/carga-consolidada-zona-libre',
  },
}

export default function CargaConsolidadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        icon="🚢"
        title="Carga Consolidada a Zona Libre"
        description="Importa desde Miami a la Zona Libre de Colón sin necesidad de llenar un contenedor completo. Con carga consolidada LCL pagas solo por el espacio que usas. Ideal para importadores medianos y pequeños que quieren costos de marítimo sin el compromiso de un FCL."
        benefits={[
          'Sin mínimo de volumen — desde 1 CBM',
          'Pagas solo el espacio que usas',
          'Consolidación semanal desde Miami',
          'Gestión aduanera en Zona Libre incluida',
          'Rastreo del contenedor en tiempo real',
          'Tarifas hasta 60% menores que envío aéreo',
        ]}
        steps={[
          {
            number: 1,
            title: 'Cotiza tu carga',
            description: 'Dinos las medidas y peso de tu mercancía. Cotizamos el costo por CBM y el tiempo estimado de tránsito.',
          },
          {
            number: 2,
            title: 'Tu mercancía llega a Miami',
            description: 'Tus proveedores envían a nuestra bodega en Miami. Consolidamos con otras cargas en el contenedor semanal.',
          },
          {
            number: 3,
            title: 'Entrega en Zona Libre',
            description: 'Coordinamos el desaduanaje en Colón y entregamos en tu almacén de la Zona Libre de Colón.',
          },
        ]}
        faqs={[
          {
            question: '¿Qué es LCL y cómo funciona?',
            answer: 'LCL (Less than Container Load) es carga consolidada: múltiples importadores comparten un contenedor. Cada uno paga por el espacio que usa en CBM (metro cúbico). Es ideal si no tienes suficiente mercancía para un contenedor completo (FCL) pero quieres las ventajas del flete marítimo.',
          },
          {
            question: '¿Cuánto cuesta?',
            answer: 'El precio se cotiza por CBM o peso según lo que sea mayor. Es significativamente más económico que envío aéreo para volúmenes medianos. Contáctanos con las dimensiones y peso de tu carga para una cotización exacta.',
          },
          {
            question: '¿Cuánto tarda de Miami a Colón?',
            answer: 'El tránsito marítimo es 4-7 días. Incluyendo consolidación en Miami (3-5 días) y desaduanaje en Colón (3-7 días), el proceso completo toma 2-4 semanas. Te damos la fecha estimada al confirmar.',
          },
          {
            question: '¿Qué mercancía pueden mover?',
            answer: 'Ropa y textiles, electrónicos, muebles, juguetes, equipos, repuestos y mercancía general. Consultamos para artículos especiales. No manejamos perecederos sin empaque especial, peligrosos o restringidos por aduana panameña.',
          },
          {
            question: '¿Incluyen el desaduanaje en la Zona Libre?',
            answer: 'Sí. Coordinamos con agentes aduaneros autorizados en la Zona Libre de Colón. Preparamos toda la documentación: manifiesto de carga, factura comercial y coordinamos el BL (bill of lading) con el naviero.',
          },
        ]}
        href="/servicios/carga-consolidada-zona-libre"
        serviceType="Freight Forwarding Service"
      />
    </>
  )
}
