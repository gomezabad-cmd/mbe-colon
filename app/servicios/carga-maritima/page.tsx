import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Carga Marítima | MBE Colón', description: 'Carga marítima y consolidación de contenedores desde Colón, Panamá.' }

export default function CargaPage() {
  return (
    <ServicePageTemplate
      icon="🚢"
      title="Carga Marítima"
      description="Soluciones de carga marítima y consolidación para enviar grandes volúmenes a precios competitivos."
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
