import Link from 'next/link'
import { CONTACT, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-mbe-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-mbe-red text-white font-black text-sm px-2 py-1 rounded">MBE</div>
            <div>
              <div className="font-bold text-sm leading-tight">Mail Boxes Etc.</div>
              <div className="text-mbe-red text-xs font-semibold leading-tight">Colón</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Tu centro de envíos, impresión y logística en Colón. Más de 25 años de confianza con la red MBE.
          </p>
          <div className="flex gap-3">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white text-xs font-bold px-3 py-2 rounded hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
            <a href={CONTACT.emailHref}
              className="border border-gray-600 text-gray-300 text-xs px-3 py-2 rounded hover:border-white transition-colors">
              ✉️ Email
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-sm mb-4 text-mbe-red uppercase tracking-wider">Servicios</h3>
          <ul className="space-y-2">
            {SERVICES.map(s => (
              <li key={s.id}>
                <Link href={s.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span>{s.icon}</span> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm mb-4 text-mbe-red uppercase tracking-wider">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>{CONTACT.address}</span>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <span>📞</span> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <span>💬</span> {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <span>✉️</span> {CONTACT.email}
              </a>
            </li>
            <li className="pt-2 border-t border-gray-700">
              <div className="text-xs leading-relaxed">
                <div>{CONTACT.hours.weekdays}</div>
                <div>{CONTACT.hours.saturday}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mail Boxes Etc. Colón — Todos los derechos reservados. Franquicia autorizada MBE Panamá.
      </div>
    </footer>
  )
}
