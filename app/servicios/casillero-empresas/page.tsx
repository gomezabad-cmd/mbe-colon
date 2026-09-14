import ServicePageTemplate from '@/components/ServicePageTemplate'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mbecolon.com/servicios/casillero-empresas#service',
      name: 'Casillero Miami para Empresas en Colón',
      description: 'Casillero Miami corporativo para empresas en la Zona Libre de Colón. Recibe importaciones de USA sin límite de volumen, con consolidación de contenedores y gestión aduanera.',
      provider: { '@id': 'https://mbecolon.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Colón' },
      url: 'https://mbecolon.com/servicios/casillero-empresas',
      audience: { '@type': 'Audience', audienceType: 'Business' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://mbecolon.com/#servicios' },
        { '@type': 'ListItem', position: 3, name: 'Casillero para Empresas', item: 'https://mbecolon.com/servicios/casillero-empresas' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿En qué se diferencia el casillero empresarial del personal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El casillero empresarial permite volúmenes ilimitados, consolidación de múltiples proveedores en un solo envío, facturación mensual, y gestión documental aduanera completa para importaciones comerciales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden manejar importaciones de múltiples proveedores de USA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Recibimos mercancía de múltiples proveedores en nuestra bodega de Miami, consolidamos todo en un solo envío y lo enviamos a tu empresa en Colón, reduciendo costos de flete hasta un 40%.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ofrecen precios especiales por volumen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Las empresas con volúmenes regulares obtienen tarifas preferenciales de flete y consolidación. Contáctanos para cotizar según tu volumen mensual estimado.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Manejan la documentación de aduana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Gestionamos toda la documentación: facturas comerciales, listas de empaque, certificados de origen y coordinación con aduana panameña para el desaduanaje en la Zona Libre de Colón.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'Casillero Miami para Empresas en Colón | Importaciones B2B — MBE Colón',
  description: 'Casillero Miami corporativo para empresas en la Zona Libre de Colón. Consolida importaciones de USA, gestión aduanera y tarifas de volumen. MBE Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/casillero-empresas',
  },
}

export default function CasilleroEmpresasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate
        icon="🏢"
        title="Casillero Miami para Empresas"
        description="Solución logística completa para empresas en la Zona Libre de Colón que importan de USA. Dirección corporativa en Miami, consolidación de múltiples proveedores, gestión aduanera y tarifas de volumen. Reducimos tus costos de importación hasta un 40%."
        benefits={[
          'Dirección corporativa en Miami sin límite de volumen',
          'Consolidación de múltiples proveedores en un envío',
          'Gestión completa de documentación aduanera',
          'Tarifas preferenciales por volumen mensual',
          'Facturación mensual consolidada',
          'Coordinador de cuenta dedicado',
        ]}
        steps={[
          {
            number: 1,
            title: 'Activamos tu cuenta empresarial',
            description: 'Evaluamos tu volumen y necesidades logísticas. Asignamos dirección corporativa en Miami y coordinador de cuenta.',
          },
          {
            number: 2,
            title: 'Tus proveedores envían a Miami',
            description: 'Todos tus proveedores de USA envían a tu dirección Miami. Consolidamos la mercancía en nuestra bodega.',
          },
          {
            number: 3,
            title: 'Entrega en Colón con documentación',
            description: 'Enviamos todo consolidado a tu empresa en Colón con documentación aduanera completa para el desaduanaje.',
          },
        ]}
        faqs={[
          {
            question: '¿Qué diferencia hay entre el casillero personal y el empresarial?',
            answer: 'El empresarial permite volúmenes ilimitados, múltiples proveedores, gestión aduanera completa para importaciones comerciales, facturación mensual y tarifas preferenciales. El personal es para compras individuales sin documentación aduanera compleja.',
          },
          {
            question: '¿Pueden consolidar de múltiples proveedores de USA?',
            answer: 'Sí. Recibimos de Amazon Business, importadores, fabricantes y distribuidores. Consolidamos en un solo envío y reducimos el costo de flete hasta 40% vs. envíos individuales.',
          },
          {
            question: '¿Manejan la aduana de la Zona Libre?',
            answer: 'Sí. Coordinamos con agentes aduaneros en la Zona Libre de Colón para el desaduanaje. Preparamos facturas comerciales, listas de empaque, certificados de origen y toda la documentación requerida.',
          },
          {
            question: '¿Tienen tarifas especiales para empresas?',
            answer: 'Sí. Empresas con más de 500 lbs mensuales califican para tarifas preferenciales. Contáctanos con tu volumen estimado para cotizar un plan a medida.',
          },
          {
            question: '¿Pueden almacenar mercancía antes del despacho?',
            answer: 'Sí. Ofrecemos almacenamiento temporal gratuito por hasta 30 días en nuestra bodega de Miami mientras consolidas los pedidos de varios proveedores.',
          },
        ]}
        href="/servicios/casillero-empresas"
        serviceType="Freight Forwarding Service"
      />
    </>
  )
}
