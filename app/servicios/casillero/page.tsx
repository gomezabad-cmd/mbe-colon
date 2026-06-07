import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Casillero Miami | MBE Colón', description: 'Casillero postal en Miami para recibir paquetes de USA en Colón, Panamá.' }

export default function CasilleroPage() {
  return (
    <ServicePageTemplate
      icon="📬"
      title="Casillero Miami"
      description="Tu dirección personal en Miami para recibir paquetes de cualquier tienda de EE.UU. sin complicaciones."
      benefits={[
        'Dirección en Miami 100% funcional',
        'Sin cuota mensual de activación',
        'Recibe desde cualquier tienda de USA',
        'Consolidación de paquetes incluida',
        'Notificaciones por WhatsApp',
        'Asesoría en trámites de aduana',
      ]}
      steps={[
        { number: 1, title: 'Activa tu casillero', description: 'Visítanos o escríbenos por WhatsApp para registrarte. Es gratis y toma 5 minutos.' },
        { number: 2, title: 'Usa tu dirección Miami', description: 'Recibe tu dirección personal y úsala en todas tus compras online en USA.' },
        { number: 3, title: 'Retira en Colón', description: 'Cuando tu paquete llega, te avisamos por WhatsApp para que vengas a retirarlo.' },
      ]}
    />
  )
}
