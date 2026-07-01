import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Casillero Miami Gratis para Recibir Paquetes de USA | MBE Colón, Panamá',
  description: 'Activa tu casillero Miami gratis. Recibe paquetes de Amazon, eBay y Shein directamente en Colón, Panamá. Sin cuota mensual ni comisión. MBE Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/casillero',
  },
}

export default function CasilleroPage() {
  return (
    <ServicePageTemplate
      icon="📬"
      title="Casillero Miami"
      description="Activa gratis tu casillero Miami MBE Colón y obtén tu dirección personal en Estados Unidos. Recibe paquetes de Amazon, eBay, Shein y cualquier tienda de USA directamente en Colón, Panamá. Sin cuota mensual, con soporte logístico y notificación por WhatsApp incluidos."
      benefits={[
        'Dirección en Miami 100% funcional',
        'Sin cuota mensual de activación',
        'Recibe desde cualquier tienda de USA',
        'Consolidación de paquetes incluida',
        'Notificaciones por WhatsApp',
        'Asesoría logística integral',
      ]}
      steps={[
        { number: 1, title: 'Activa tu casillero', description: 'Visítanos o escríbenos por WhatsApp para registrarte. Es gratis y toma 5 minutos.' },
        { number: 2, title: 'Usa tu dirección Miami', description: 'Recibe tu dirección personal y úsala en todas tus compras online en USA.' },
        { number: 3, title: 'Retira en Colón', description: 'Cuando tu paquete llega, te avisamos por WhatsApp para que vengas a retirarlo.' },
      ]}
      href="/servicios/casillero"
    />
  )
}
