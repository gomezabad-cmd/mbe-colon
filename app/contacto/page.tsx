import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contacto | MBE Colón — Plaza Millenium F007, Colón, Panamá',
  description: 'Contacto MBE Colón: Plaza Millenium Local F007, Colón, Panamá. Tel: 474-5548. WhatsApp: 6949-5100. Atención: lunes–viernes 8am–5pm, sábado 9am–1pm.',
  alternates: {
    canonical: 'https://mbecolon.com/contacto',
  },
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-mbe-dark py-16 px-4 text-center">
          <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">
            📍 Estamos aquí para ayudarte
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Visítanos, llámanos o escríbenos. Respondemos en minutos.
          </p>
        </section>

        {/* Info + Mapa */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

            {/* Datos de contacto */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-mbe-dark font-black text-xl mb-4">Información de contacto</h2>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-bold text-mbe-dark">Dirección</p>
                      <p>{CONTACT.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-bold text-mbe-dark">Teléfono</p>
                      <a href={CONTACT.phoneHref} className="hover:text-mbe-red transition-colors">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="font-bold text-mbe-dark">WhatsApp</p>
                      <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-mbe-red transition-colors"
                      >
                        {CONTACT.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-bold text-mbe-dark">Correo</p>
                      <a href={CONTACT.emailHref} className="hover:text-mbe-red transition-colors">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-mbe-dark font-black text-xl mb-4">Horario de atención</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span className="font-medium text-mbe-dark">Lunes – Viernes</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-mbe-dark">Sábado</span>
                    <span>9:00 AM – 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-mbe-dark">Domingo</span>
                    <span className="text-gray-400">Cerrado</span>
                  </li>
                </ul>
              </div>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-black text-lg px-6 py-4 rounded-xl hover:bg-green-600 transition-colors shadow-md w-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-md h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Plaza+Millenium+Colon+Panama&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación MBE Colón — Plaza Millenium"
              />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
