import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Bordados Personalizados en Uniformes y Hoodies para Empresas | MBE Colón, Panamá',
  description: 'Bordados personalizados para uniformes, hoodies, gorras y más. Bordamos desde 1 unidad con alta durabilidad. Empresas y equipos en Colón, Panamá. MBE.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios/bordados',
  },
}

export default function BordadosPage() {
  return (
    <ServicePageTemplate
      icon="🧵"
      title="Bordados Personalizados"
      description="Servicio de bordados personalizados en Colón, Panamá para uniformes empresariales, hoodies, gorras, polos y cualquier prenda textil. Ideal para empresas, equipos deportivos y eventos corporativos en la provincia de Colón. Digitalización de logotipo incluida y alta durabilidad garantizada."
      benefits={[
        'Uniformes empresariales con logo bordado',
        'Hoodies y sudaderas personalizadas',
        'Gorras con bordado en 2D y 3D',
        'Polos y camisetas para equipos',
        'Alta durabilidad — el bordado no se despega ni desvanece',
        'Entrega rápida con pedidos desde una unidad',
        'Digitalización de logotipo incluida',
      ]}
      steps={[
        {
          number: 1,
          title: 'Envíanos tu diseño',
          description: 'Compártenos tu logo o diseño en alta resolución. También podemos digitalizarlo por ti si solo tienes una imagen.',
        },
        {
          number: 2,
          title: 'Cotización y muestra',
          description: 'Te enviamos la cotización según cantidad, tipo de prenda y complejidad del bordado. Puedes solicitar una muestra antes de hacer el pedido completo.',
        },
        {
          number: 3,
          title: 'Producción y entrega',
          description: 'Una vez aprobado, iniciamos la producción. Retira tu pedido en nuestra oficina o coordinamos entrega a domicilio.',
        },
      ]}
      faqs={[
        {
          question: '¿Aceptan pedidos de 1 pieza?',
          answer: 'Sí, aceptamos pedidos desde 1 pieza. Sin embargo, para cantidades pequeñas (1-5 piezas) hay un costo mínimo de producción. A mayor cantidad, menor costo por pieza.',
        },
        {
          question: '¿Cuánto tiempo tarda un bordado?',
          answer: 'Para un bordado simple (1-3 colores): 5-7 días. Para bordados complejos (4+ colores): 7-10 días. Para pedidos urgentes, consulta por servicio express.',
        },
        {
          question: '¿Qué tipo de prendas pueden bordar?',
          answer: 'Bordamos en uniformes, hoodies, sudaderas, gorras, polos, camisetas, chaquetas, mochilas, y casi cualquier prenda de tela. Si tienes dudas, consulta directamente.',
        },
        {
          question: '¿Cuántos colores puedo usar en el bordado?',
          answer: 'No hay límite de colores. Cuantos más colores, más tiempo toma y más cuesta. Te recomendamos 1-5 colores para la mejor relación costo-beneficio.',
        },
        {
          question: '¿La digitalizacón de logo está incluida?',
          answer: 'Sí, la digitalizacón del logo está completamente incluida en el precio del bordado. Convertimos tu imagen a formato de bordado automáticamente.',
        },
        {
          question: '¿El bordado se desvanece o se despega?',
          answer: 'No, nuestros bordados tienen alta durabilidad. Usamos hilos de calidad premium y técnicas profesionales. El bordado mantiene su calidad incluso después de decenas de lavadas.',
        },
        {
          question: '¿Puedo ver una muestra antes de hacer el pedido completo?',
          answer: 'Sí, ofrecemos muestras pequeñas (1-2 piezas) para que apruebes el diseño y la calidad antes de hacer el pedido completo.',
        },
      ]}
      href="/servicios/bordados"
      serviceType="Embroidery Service"
    />
  )
}
