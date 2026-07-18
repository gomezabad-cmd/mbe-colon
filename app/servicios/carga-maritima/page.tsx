import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Carga Marítima Miami–Panamá y China–Panamá | MBE Colón',
  description: 'Carga marítima Miami-Colón. Envío de contenedores y consolidados desde Miami a la Zona Libre de Colón. Servicios logísticos completos para empresas. MBE.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/carga-maritima',
  },
}

export default function CargaPage() {
  return (
    <ServicePageTemplate
      icon="🚢"
      title="Carga Marítima"
      description="Servicio especializado de carga marítima para empresas en Colón y Panamá. Rutas principales Miami–Panamá y China–Panamá con contenedores completos y consolidados, gestión documental completa y tarifas preferenciales por volumen."
      benefits={[
        'Contenedores completos y consolidados',
        'Rutas principales desde y hacia Panamá',
        'Gestión completa de documentación',
        'Tarifas especiales por volumen',
        'Seguro de carga disponible',
        'Seguimiento de contenedores',
      ]}
      steps={[
        { number: 1, title: 'Consulta tu carga', description: 'Cuéntanos qué necesitas mover y te preparamos una cotización personalizada.' },
        { number: 2, title: 'Coordinamos el envío', description: 'Gestionamos recogida, embalaje, documentos de exportación y reserva de espacio.' },
        { number: 3, title: 'Entrega en destino', description: 'Coordinamos la entrega hasta el destino final con seguimiento completo.' },
      ]}
      faqs={[
        {
          question: '¿Cuáles son las rutas principales?',
          answer: 'Nuestras rutas principales son: Miami-Colón (más popular), China-Panamá, y Ecuador-Panamá. También podemos gestionar envíos a otros puertos según tu necesidad.',
        },
        {
          question: '¿Qué es un contenedor consolidado?',
          answer: 'Es cuando compartimos espacio en un contenedor con otras cargas. Es más económico que un contenedor completo (FCL) y es ideal para pequeñas y medianas empresas.',
        },
        {
          question: '¿Cuánto tiempo tarda la carga marítima Miami-Colón?',
          answer: 'El tiempo promedio es de 5-10 días hábiles desde que se carga en Miami hasta la entrega en Colón, dependiendo del calendario de navegación.',
        },
        {
          question: '¿Qué documentación necesito?',
          answer: 'Depende de lo que envíes, pero generalmente necesitas: factura comercial, lista de empaque, certificado de origen y documentos aduanales. Nosotros te asesoramos en todo el proceso.',
        },
        {
          question: '¿Cómo es la entrega en Colón?',
          answer: 'Coordinamos con la autoridad aduanal, realizamos la desaduanización y la entrega hasta tu bodega o punto de venta en Colón. Podemos hacer entrega mismo día si los documentos están listos.',
        },
        {
          question: '¿El seguro de carga está incluido?',
          answer: 'El seguro es opcional pero recomendado. Cubre pérdida total o daño parcial de la carga. El costo es aproximadamente 1-2% del valor de la carga.',
        },
      ]}
      href="/servicios/carga-maritima"
    />
  )
}
