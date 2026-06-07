import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Envíos Internacionales con DHL, FedEx y UPS | MBE Colón, Panamá',
  description: 'Envía paquetes a todo el mundo desde Colón, Panamá con DHL, FedEx y UPS. Tracking en tiempo real, embalaje profesional y gestión aduanera incluidos. Plaza Millenium F007.',
}

export default function EnviosPage() {
  return (
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
    />
  )
}
