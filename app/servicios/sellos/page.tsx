import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Sellos Automáticos Personalizados | MBE Colón',
  description: 'Sellos automáticos personalizados para empresas, abogados, médicos y profesionales en Colón.',
}

export default function SelloPage() {
  return (
    <ServicePageTemplate
      icon="🔖"
      title="Sellos Automáticos Personalizados"
      description="Fabricamos sellos automáticos de alta calidad con tu nombre, empresa, dirección o cualquier diseño personalizado. Ideales para abogados, médicos, contadores, empresas e instituciones."
      benefits={[
        'Sellos automáticos de bolsillo y de mesa',
        'Texto e imágenes a todo color',
        'Tinta incluida — miles de impresiones',
        'Recarga de tinta disponible',
        'Modelos Trodat, Colop y más',
        'Entrega en 24 a 48 horas hábiles',
        'Ideal para firmas, fechadores y numeradores',
      ]}
      steps={[
        {
          number: 1,
          title: 'Define tu diseño',
          description: 'Indícanos el texto, logo o información que debe llevar el sello. Puedes traer un boceto o describirlo y nosotros lo diseñamos.',
        },
        {
          number: 2,
          title: 'Aprobación de arte',
          description: 'Te enviamos una prueba digital del sello antes de fabricarlo para que apruebes el diseño final.',
        },
        {
          number: 3,
          title: 'Fabricación y entrega',
          description: 'Producimos tu sello en 24–48 horas. Retíralo en nuestra oficina o coordina entrega a domicilio en Colón.',
        },
      ]}
    />
  )
}
