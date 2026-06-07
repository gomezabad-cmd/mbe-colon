import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Envíos Internacionales | MBE Colón', description: 'Envíos internacionales con DHL, FedEx y UPS desde Colón, Panamá.' }

export default function EnviosPage() {
  return (
    <ServicePageTemplate
      icon="✈️"
      title="Envíos Internacionales"
      description="Enviamos tus paquetes a cualquier parte del mundo con los mejores operadores logísticos: DHL, FedEx y UPS."
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
