import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Compras por Internet | MBE Colón', description: 'Casillero Miami para compras en tiendas de USA. Recibe en Colón.' }

export default function ComprasPage() {
  return (
    <ServicePageTemplate
      icon="🛒"
      title="Compras por Internet"
      description="Tu casillero en Miami para comprar en Amazon, eBay, Shein y cualquier tienda de USA y recibir en Colón."
      benefits={[
        'Dirección de envío en Miami incluida',
        'Consolidación de múltiples paquetes',
        'Tramitación de aduana incluida',
        'Notificación por WhatsApp al llegar',
        'Sin cuota mensual de membresía',
        'Tarifas de flete competitivas',
      ]}
      steps={[
        { number: 1, title: 'Abre tu casillero', description: 'Regístrate gratis y obtén tu dirección personal en Miami para hacer compras.' },
        { number: 2, title: 'Compra en USA', description: 'Usa tu dirección Miami en cualquier tienda online. Tu compra llega a nuestro almacén.' },
        { number: 3, title: 'Recibe en Colón', description: 'Te notificamos y gestionamos la entrega en nuestra oficina de Plaza Millenium.' },
      ]}
    />
  )
}
