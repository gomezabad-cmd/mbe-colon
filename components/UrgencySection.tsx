import { CONTACT } from '@/lib/constants'

export default function UrgencySection() {
  return (
    <section className="bg-mbe-red py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-white text-sm font-bold tracking-widest uppercase opacity-80 mb-3">
          ⚡ Rapidez garantizada
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black mb-4 leading-tight">
          Servicio de envíos y paquetería desde Colón<br />
          <span className="text-yellow-300">a cualquier parte del mundo</span>
        </h2>
        <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Trabajamos con los principales operadores logísticos del mundo para garantizarte los mejores tiempos de entrega.
        </p>

        {/* Carrier badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['DHL', 'FedEx', 'UPS', 'COPA COURIER'].map(carrier => (
            <div
              key={carrier}
              className="bg-white text-mbe-dark font-black text-sm px-6 py-3 rounded-lg shadow-md"
            >
              {carrier}
            </div>
          ))}
        </div>

        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-mbe-red font-black text-lg px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors shadow-lg"
        >
          💬 Cotizar por WhatsApp →
        </a>
      </div>
    </section>
  )
}
