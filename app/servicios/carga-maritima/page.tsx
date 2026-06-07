import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Carga Marítima Miami–Panamá y China–Panamá | MBE Colón',
  description: 'Servicio de carga marítima y consolidación de contenedores en Panamá. Rutas Miami–Colón y China–Panamá. Tarifas por volumen, gestión documental y seguro de carga. MBE Colón.',
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
    />
  )
}
