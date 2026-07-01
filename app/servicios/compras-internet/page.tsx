import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Compras por Internet desde USA | Casillero Miami — MBE Colón, Panamá',
  description: '¿Quieres comprar en Amazon, eBay o Shein? Usa tu casillero Miami MBE. Asesoría completa, consolidación de paquetes y entrega en Colón. Sin cuota mensual.',
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
      faqs={[
        {
          question: '¿Puedo comprar en tiendas que no conoczo?',
          answer: 'Sí, puedes usar tu dirección Miami en cualquier tienda online que envíe a Estados Unidos. Esto incluye Amazon, eBay, Shein, AliExpress, Nike, Target, Walmart, Costco, y cientos más.',
        },
        {
          question: '¿Hay restricción de cantidad de compras?',
          answer: 'No hay límite. Puedes hacer una compra a la semana o cien compras al mes. Cada paquete se consolida automáticamente y lo enviamos cuando tengas todos tus pedidos listos.',
        },
        {
          question: '¿Cómo consolidación de paquetes?',
          answer: 'Si tienes 3-4 paquetes pequeños, los consolidamos en un solo envío para ahorrar flete. Juntamos los paquetes, re-embalamos profesionalmente y enviamos todo junto a Colón.',
        },
        {
          question: '¿Cuánto se ahorra consolidando?',
          answer: 'Depende del tamaño y peso. En promedio, ahorras 30-40% en flete al consolidar 3-5 paquetes pequeños en uno solo. Te mostramos el ahorro exacto al momento de cotizar.',
        },
        {
          question: '¿Hay artículos prohibidos?',
          answer: 'Algunos artículos tienen restricción: armas, explosivos, líquidos peligrosos, medicinas restringidas. Para casi todo lo demás (ropa, electrónica, accesorios) no hay problema.',
        },
        {
          question: '¿Cómo evito pagar impuestos adicionales?',
          answer: 'Todos los artículos pagan aranceles aduanales según su valor. Esto es normal y obligatorio. Nuestro equipo se encarga de toda la documentación aduanera para que no tengas complicaciones.',
        },
      ]}
      href="/servicios/compras-internet"
    />
  )
}
