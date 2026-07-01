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
      faqs={[
        {
          question: '¿Cuál es la dirección de mi casillero Miami?',
          answer: 'Recibirás una dirección única en Miami, Florida con tu nombre y número de cliente. Esta dirección es 100% funcional y puedes usarla en cualquier tienda online de USA. Te la proporcionamos por correo y WhatsApp al activar tu casillero.',
        },
        {
          question: '¿Cuánto cuesta activar el casillero?',
          answer: 'La activación es completamente GRATIS. No hay cuota mensual, ni comisión por activación, ni costo oculto. Solo pagas por el flete cuando enviamos tu paquete a Colón.',
        },
        {
          question: '¿Cuánto tiempo tarda en llegar mi paquete a Colón?',
          answer: 'El tiempo depende del tamaño y peso del paquete. Para paquetes estándar (hasta 30 libras), el tiempo promedio es de 3-7 días hábiles desde que llega a nuestro almacén en Miami. Te notificamos por WhatsApp en cada paso del proceso.',
        },
        {
          question: '¿Puedo consolidar varios paquetes en un envío?',
          answer: 'Sí, absolutamente. Si tienes varios paquetes pequeños, podemos consolidarlos en un solo envío para ahorrar en costos de flete. Esto es especialmente útil para compras en Amazon, eBay y Shein.',
        },
        {
          question: '¿Qué tiendas de USA puedo usar?',
          answer: 'Puedes comprar en cualquier tienda que envíe a Miami: Amazon, eBay, Shein, AliExpress, Nike, Sephora, y cientos más. Si tienes dudas sobre una tienda específica, escríbenos por WhatsApp.',
        },
        {
          question: '¿Hay límite de paquetes al mes?',
          answer: 'No hay límite. Puedes recibir uno o cien paquetes. Simplemente usa tu dirección Miami cada vez que compres online en USA.',
        },
        {
          question: '¿Cómo sé que mi paquete llegó?',
          answer: 'Te enviamos un mensaje por WhatsApp tan pronto como recibimos tu paquete con un código de rastreo. También recibirás notificaciones cuando despachemos tu paquete desde Miami hacia Colón.',
        },
      ]}
      href="/servicios/casillero"
    />
  )
}
