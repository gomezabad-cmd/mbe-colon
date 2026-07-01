'use client'

import Image from 'next/image'
import { CONTACT } from '@/lib/constants'
import { trackLead } from '@/lib/pixel'

const CONTACT_ITEMS = [
  {
    icon: 'https://img.icons8.com/3d-fluency/94/map-pin.png',
    label: 'Dirección',
    content: CONTACT.address,
    href: CONTACT.mapsLink,
  },
  {
    icon: 'https://img.icons8.com/3d-fluency/94/phone.png',
    label: 'Teléfono',
    content: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: 'https://img.icons8.com/3d-fluency/94/clock.png',
    label: 'Horario',
    content: null,
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-mbe-blue py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-white text-xs font-bold tracking-widest uppercase mb-3 opacity-80">
            Encuéntranos
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Visita MBE Colón en Plaza Millenium
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Mail Boxes Etc. Colón — Local F007, Plaza Millenium, Colón, Panamá. Atención personalizada para envíos, casillero, impresión y más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">

            {/* Dirección */}
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <Image src="https://img.icons8.com/3d-fluency/94/map-pin.png" alt="Dirección" width={40} height={40} className="shrink-0" />
              <div>
                <div className="font-bold text-mbe-dark text-sm">Dirección</div>
                <a href={CONTACT.mapsLink} target="_blank" rel="noopener noreferrer" className="text-mbe-gray text-sm mt-0.5 hover:underline block">{CONTACT.address}</a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <Image src="https://img.icons8.com/3d-fluency/94/phone.png" alt="Teléfono" width={40} height={40} className="shrink-0" />
              <div>
                <div className="font-bold text-mbe-dark text-sm">Teléfono</div>
                <a href={CONTACT.phoneHref} className="text-mbe-blue text-sm font-semibold hover:underline mt-0.5 block">{CONTACT.phone}</a>
              </div>
            </div>

            {/* WhatsApp — logo real */}
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <Image src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp" width={40} height={40} className="shrink-0" />
              <div>
                <div className="font-bold text-mbe-dark text-sm">WhatsApp</div>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp_contact_section')} className="text-green-600 text-sm font-semibold hover:underline mt-0.5 block">{CONTACT.whatsapp}</a>
              </div>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <Image src="https://img.icons8.com/3d-fluency/94/clock.png" alt="Horario" width={40} height={40} className="shrink-0" />
              <div>
                <div className="font-bold text-mbe-dark text-sm">Horario</div>
                <div className="text-mbe-gray text-sm mt-0.5">
                  <div>{CONTACT.hours.weekdays}</div>
                  <div>{CONTACT.hours.saturday}</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead('whatsapp_cta_contact_section')}
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-black text-center py-4 rounded-xl text-lg hover:bg-green-600 transition-colors"
            >
              <Image src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp" width={28} height={28} />
              Escríbenos por WhatsApp
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
