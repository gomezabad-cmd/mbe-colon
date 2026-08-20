'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { CONTACT, SERVICES } from '@/lib/constants'
import { trackLead } from '@/lib/pixel'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      {/* Top bar */}
      <div className="bg-mbe-red text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>📍 {CONTACT.address}</span>
        <div className="hidden md:flex gap-4">
          <a href={CONTACT.phoneHref} className="hover:underline">📞 {CONTACT.phone}</a>
          <a href={CONTACT.whatsappHref} className="hover:underline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mbe-panama-logo.png"
            alt="Mail Boxes Etc."
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-mbe-red font-black text-sm hidden sm:block">Colón</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium">Inicio</Link>
          <div className="relative group">
            <button className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium flex items-center gap-1">
              Servicios <span className="text-xs">▾</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-mbe-red rounded-b-lg py-2 w-52 hidden group-hover:block">
              {SERVICES.map(s => (
                <Link key={s.id} href={s.href} className="flex items-center gap-2 px-4 py-2 text-sm text-mbe-dark hover:bg-mbe-light hover:text-mbe-red transition-colors">
                  <span>{s.icon}</span> {s.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium">Blog</Link>
          <Link href="/tarifas" className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium">Tarifas</Link>
          <Link href="/#nosotros" className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium">Nosotros</Link>
          <Link href="/#contacto" className="text-sm text-mbe-dark hover:text-mbe-red transition-colors font-medium">Contacto</Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('whatsapp_navbar_desktop')}
            className="bg-mbe-red text-white text-sm font-bold px-4 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Cotizar ahora →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-mbe-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm font-medium text-mbe-dark py-2" onClick={() => setIsOpen(false)}>Inicio</Link>
          {SERVICES.map(s => (
            <Link key={s.id} href={s.href} className="block text-sm text-mbe-dark py-2 pl-4 border-l-2 border-mbe-light" onClick={() => setIsOpen(false)}>
              {s.icon} {s.title}
            </Link>
          ))}
          <Link href="/blog" className="block text-sm font-medium text-mbe-dark py-2" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/tarifas" className="block text-sm font-medium text-mbe-dark py-2" onClick={() => setIsOpen(false)}>Tarifas</Link>
          <Link href="/#nosotros" className="block text-sm font-medium text-mbe-dark py-2" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link href="/#contacto" className="block text-sm font-medium text-mbe-dark py-2" onClick={() => setIsOpen(false)}>Contacto</Link>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp_navbar_mobile')} className="block bg-mbe-red text-white text-sm font-bold px-4 py-3 rounded text-center">
            💬 Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
