import Link from 'next/link'
import Image from 'next/image'
import { CONTACT, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-mbe-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          {/* Logo oficial MBE */}
          <div className="mb-4">
            <Image
              src="/images/mbe-panama-logo.png"
              alt="Mail Boxes Etc. Panamá"
              width={150}
              height={52}
              className="object-contain"
            />
            <div className="text-mbe-red text-sm font-bold mt-1">Colón</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Tu centro de envíos, impresión y logística en Colón. Más de 18 años de confianza con la red MBE.
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
            <li>
              <Link href="/tarifas" className="text-white text-sm font-semibold hover:text-mbe-red transition-colors flex items-center gap-2">
                💲 Tarifas y precios
              </Link>
            </li>
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
            {/* Redes sociales */}
            <li className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/mbecolon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MBE Colón"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {/* Instagram logo oficial */}
                <svg viewBox="0 0 48 48" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497"/>
                      <stop offset="5%" stopColor="#fdf497"/>
                      <stop offset="45%" stopColor="#fd5949"/>
                      <stop offset="60%" stopColor="#d6249f"/>
                      <stop offset="90%" stopColor="#285AEB"/>
                    </radialGradient>
                  </defs>
                  <rect width="48" height="48" rx="12" fill="url(#ig-grad)"/>
                  <circle cx="24" cy="24" r="9" fill="none" stroke="white" strokeWidth="3"/>
                  <circle cx="34.5" cy="13.5" r="2.2" fill="white"/>
                  <rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="white" strokeWidth="2.5"/>
                </svg>
                <span className="text-gray-400 text-xs hover:text-white transition-colors">@mbecolon</span>
              </a>
              <a
                href="https://www.tiktok.com/@mbecolon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok MBE Colón"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {/* TikTok logo oficial */}
                <svg viewBox="0 0 48 48" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#010101"/>
                  <path d="M34 16.5a8.3 8.3 0 0 1-5-1.7v11.5a8.5 8.5 0 1 1-8.5-8.5h.9v4.1h-.9a4.4 4.4 0 1 0 4.4 4.4V10h4a8.3 8.3 0 0 0 5.1 6.1v.4z" fill="white"/>
                  <path d="M36 14.8a8.3 8.3 0 0 1-5-1.7v.1a8.3 8.3 0 0 0 5 1.6z" fill="#69C9D0"/>
                  <path d="M34 16.5a8.3 8.3 0 0 0 2-.3v-.1a8.3 8.3 0 0 1-2 .4z" fill="#EE1D52"/>
                </svg>
                <span className="text-gray-400 text-xs hover:text-white transition-colors">@mbecolon</span>
              </a>
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
