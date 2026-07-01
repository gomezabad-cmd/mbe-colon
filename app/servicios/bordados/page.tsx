import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = {
  title: 'Bordados Personalizados en Uniformes y Hoodies para Empresas | MBE Colón, Panamá',
  description: 'Bordados personalizados para uniformes, hoodies, gorras y más. Bordamos desde 1 unidad con alta durabilidad. Empresas y equipos en Colón, Panamá. MBE.',
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
      href="/servicios/bordados"
      serviceType="Embroidery Service"
    />
  )
}
