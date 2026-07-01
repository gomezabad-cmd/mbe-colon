import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Carga Marítima Miami–Panamá y China–Panamá | MBE Colón',
  description: 'Carga marítima Miami-Colón. Envío de contenedores y consolidados desde Miami a la Zona Libre de Colón. Servicios logísticos completos para empresas. MBE.',
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
      href="/servicios/carga-maritima"
    />
  )
}
