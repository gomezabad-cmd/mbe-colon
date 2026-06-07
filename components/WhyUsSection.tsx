import { WHY_US } from '@/lib/constants'

export default function WhyUsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            🏆 Nuestras Ventajas
          </div>
          <h2 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mb-4">
            ¿Por qué elegir <span className="text-mbe-red">MBE Colón?</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Somos parte de la red internacional Mail Boxes Etc., con más de 25 años de experiencia en logística y servicios de envío.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {WHY_US.map(item => (
            <div
              key={item.title}
              className={`rounded-xl p-6 border-l-4 ${
                item.color === 'mbe-red'
                  ? 'bg-red-50 border-mbe-red'
                  : 'bg-blue-50 border-mbe-blue'
              }`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-mbe-dark text-sm mb-1">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-mbe-dark rounded-2xl p-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-mbe-red font-black text-4xl mb-1">25+</div>
            <div className="text-gray-400 text-sm">Años de experiencia</div>
          </div>
          <div>
            <div className="text-mbe-blue font-black text-4xl mb-1">34</div>
            <div className="text-gray-400 text-sm">Centros en Panamá</div>
          </div>
          <div>
            <div className="text-mbe-red font-black text-4xl mb-1">24h</div>
            <div className="text-gray-400 text-sm">Tiempo de respuesta</div>
          </div>
        </div>
      </div>
    </section>
  )
}
