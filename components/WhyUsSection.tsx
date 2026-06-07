import Image from 'next/image'
import { WHY_US } from '@/lib/constants'

const CARD_IMAGES = [
  // Ubicación estratégica — zona comercial / ciudad con edificios
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
  // Eficiencia total — repartidor entregando caja a cliente
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  // Seguridad garantizada — candado / seguridad sobre caja sellada
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  // 18+ años de experiencia — equipo profesional de logística
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
]

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
          {WHY_US.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={CARD_IMAGES[i]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Color tint overlay */}
                <div className={`absolute inset-0 opacity-30 ${item.color === 'mbe-red' ? 'bg-mbe-red' : 'bg-mbe-blue'}`} />
              </div>
              {/* Text */}
              <div className={`p-4 border-t-4 ${item.color === 'mbe-red' ? 'border-mbe-red' : 'border-mbe-blue'}`}>
                <h3 className="font-bold text-mbe-dark text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-mbe-dark rounded-2xl p-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-mbe-red font-black text-4xl mb-1">18+</div>
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
