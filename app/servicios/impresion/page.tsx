import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Impresión Profesional | MBE Colón', description: 'Impresión profesional de tarjetas, brochures, banners y más en Colón.' }

export default function ImpresionPage() {
  return (
    <ServicePageTemplate
      icon="🖨️"
      title="Impresión Profesional"
      description="Impresión de alta calidad para tu negocio: tarjetas, brochures, banners, folletos y todo tipo de material gráfico."
      benefits={[
        'Tarjetas de presentación profesionales',
        'Brochures y folletos a todo color',
        'Banners y material para eventos',
        'Diseño gráfico disponible',
        'Entrega rápida — mismo día cuando es posible',
        'Papelería corporativa completa',
      ]}
      steps={[
        { number: 1, title: 'Envía tu diseño', description: 'Trae tu archivo o cuéntanos qué necesitas. También podemos ayudarte con el diseño.' },
        { number: 2, title: 'Revisamos y cotizamos', description: 'Verificamos el archivo, te enviamos prueba de impresión y confirmamos precio final.' },
        { number: 3, title: 'Retira tu pedido', description: 'Recoge tu material impreso en nuestra oficina o coordina entrega a domicilio.' },
      ]}
    />
  )
}
