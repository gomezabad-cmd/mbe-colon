import { CONTACT } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-mbe-blue py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-white text-xs font-bold tracking-widest uppercase mb-3 opacity-80">
            📍 Encuéntranos
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Visítanos en Colón
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Estamos en el corazón comercial de Colón, listos para atenderte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-mbe-dark text-sm">Dirección</div>
                <div className="text-mbe-gray text-sm mt-0.5">{CONTACT.address}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <div className="font-bold text-mbe-dark text-sm">Teléfono</div>
                <a href={CONTACT.phoneHref} className="text-mbe-blue text-sm font-semibold hover:underline mt-0.5 block">{CONTACT.phone}</a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <div className="font-bold text-mbe-dark text-sm">WhatsApp</div>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm font-semibold hover:underline mt-0.5 block">{CONTACT.whatsapp}</a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <div className="font-bold text-mbe-dark text-sm">Horario</div>
                <div className="text-mbe-gray text-sm mt-0.5">
                  <div>{CONTACT.hours.weekdays}</div>
                  <div>{CONTACT.hours.saturday}</div>
                </div>
              </div>
            </div>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white font-black text-center py-4 rounded-xl text-lg hover:bg-green-600 transition-colors"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-auto min-h-[300px]">
            <iframe
              src={CONTACT.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mail Boxes Etc. Colón"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
