import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Compras por Internet desde USA | Casillero Miami — MBE Colón, Panamá',
  description: 'Compra en Amazon, eBay, Shein y cualquier tienda de USA con tu casillero Miami MBE. Recibe tus pedidos en Colón, Panamá sin complicaciones. Registro gratuito.',
}

export default function ComprasPage() {
  return (
    <ServicePageTemplate
      icon="🛒"
      title="Compras por Internet"
      description="Con tu casillero Miami MBE, obtienes una dirección de envío en Estados Unidos para comprar en Amazon, eBay, Shein y cualquier tienda online de USA. Recibe tus pedidos directamente en Colón, Panamá con entrega garantizada y segura."
      benefits={[
        'Dirección de envío en Miami incluida',
        'Consolidación de múltiples paquetes',
        'Entregas rápidas y seguras',
        'Notificación por WhatsApp al llegar',
        'Sin cuota mensual de membresía',
        'Tarifas de flete competitivas',
      ]}
      steps={[
        { number: 1, title: 'Abre tu casillero', description: 'Regístrate gratis y obtén tu dirección personal en Miami para hacer compras.' },
        { number: 2, title: 'Compra en USA', description: 'Usa tu dirección Miami en cualquier tienda online. Tu compra llega a nuestro almacén.' },
        { number: 3, title: 'Recibe en Colón', description: 'Te notificamos y gestionamos la entrega en nuestra oficina de Plaza Millenium.' },
      ]}
      href="/servicios/compras-internet"
    />
  )
}
