export default function NosotrosSection() {
  return (
    <section id="nosotros" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="text-center mb-12">
          <p className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            ¿Quiénes somos?
          </p>
          <h2 className="text-mbe-dark text-3xl md:text-4xl font-black mb-5">
            MBE Colón — <span className="text-mbe-red">Mail Boxes Etc.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Somos la franquicia oficial de <strong>Mail Boxes Etc.</strong> en la provincia de Colón, Panamá.
            Con más de <strong>18 años de experiencia</strong>, somos el aliado logístico de cientos de familias,
            emprendedores y empresas que necesitan enviar, recibir e imprimir con confianza.
          </p>
        </div>

        {/* Cards de valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-mbe-light rounded-2xl p-6 border-t-4 border-mbe-red">
            <div className="text-3xl mb-4">🌎</div>
            <h3 className="text-mbe-dark font-black text-lg mb-2">Red Internacional</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Formamos parte de la red global MBE con presencia en más de 30 países.
              Enviamos con DHL, FedEx, UPS y otras aerolíneas de primer nivel.
            </p>
          </div>

          <div className="bg-mbe-light rounded-2xl p-6 border-t-4 border-mbe-blue">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-mbe-dark font-black text-lg mb-2">En el corazón de Colón</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ubicados en Plaza Millenium local F007, Colón. Somos parte de la comunidad y
              entendemos las necesidades logísticas de la región.
            </p>
          </div>

          <div className="bg-mbe-light rounded-2xl p-6 border-t-4 border-mbe-red">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-mbe-dark font-black text-lg mb-2">Compromiso Total</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cada paquete es tratado como propio. Ofrecemos trazabilidad en tiempo real,
              embalaje profesional y atención personalizada por WhatsApp.
            </p>
          </div>

        </div>

        {/* Misión */}
        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl shrink-0">🎯</div>
          <div>
            <h3 className="text-white font-black text-xl mb-2">Nuestra misión</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Facilitar el comercio y la comunicación de las personas y empresas de Colón con el mundo.
              Brindamos soluciones logísticas, de impresión y de mensajería con los más altos estándares
              de la red MBE Internacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
