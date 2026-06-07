import { CONTACT } from '@/lib/constants'

const BENEFITS = [
  {
    icon: '👤',
    title: 'Representante Dedicado',
    description: 'Un ejecutivo de cuenta personal que conoce las necesidades de tu empresa y te ofrece soluciones a medida.',
  },
  {
    icon: '📋',
    title: 'Facturación Consolidada',
    description: 'Gestiona todos tus envíos bajo una sola factura mensual. Simplifica tu contabilidad y controla tus gastos logísticos.',
  },
  {
    icon: '📦',
    title: 'Soluciones a Medida',
    description: 'Desde envíos masivos hasta logística de importación. Diseñamos una estrategia de envíos adaptada a tu volumen y presupuesto.',
  },
]

export default function PymeSection() {
  const msg = encodeURIComponent('Hola! Me interesa conocer los servicios MBE para mi empresa.')
  const href = `${CONTACT.whatsappHref}&text=${msg}`

  return (
    <section id="nosotros" className="bg-mbe-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            🏢 Servicios Empresariales
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
            ¡Lleva tu PYME a <span className="text-mbe-red">otro nivel!</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Soluciones logísticas profesionales para empresas en Colón. Optimiza tus costos de envío y mejora la satisfacción de tus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-6 hover:bg-opacity-10 transition-colors">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-black text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            💬 Contáctanos hoy →
          </a>
          <p className="text-gray-500 text-sm mt-3">Respuesta en menos de 24 horas hábiles</p>
        </div>
      </div>
    </section>
  )
}
