'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HERO_SLIDES } from '@/lib/constants'

const SLIDE_IMAGES = [
  '/images/hero-banner.jpg',
  '/images/hero-delivery.jpg',
  '/images/impresion-banner.jpg',
  '/images/bordados-banner.jpg',
  '/images/sellos-banner.jpg',
]

const SLIDE_ALTS = [
  'Envíos internacionales con DHL, FedEx y UPS en Colón, Panamá — Mail Boxes Etc.',
  'Casillero Miami en Colón, Panamá — recibe compras de Amazon y tiendas de USA',
  'Impresión profesional de tarjetas y banners en Colón, Panamá — MBE Colón',
  'Bordados personalizados en uniformes y hoodies para empresas en Panamá — MBE Colón',
  'Sellos automáticos personalizados para empresas en Colón, Panamá — MBE Colón',
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative w-full overflow-hidden bg-mbe-dark"
      style={{
        minHeight: 'clamp(560px, 60vw, calc(100vh - 88px))',
        maxHeight: 'calc(100vh - 88px)',
      }}
    >
      {/* Aspect-ratio spacer — only on md+ where the image ratio drives height */}
      <div className="hidden md:block" style={{ paddingTop: '48.75%' }} />

      {/* Background images */}
      {SLIDE_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={SLIDE_ALTS[i] ?? `MBE Colón — servicio ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center"
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        </div>
      ))}
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="absolute inset-0 z-10 max-w-6xl mx-auto px-4 flex items-start pt-10 pb-20 md:items-center md:pt-0 md:pb-0">
        <div className="max-w-xl">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3 opacity-90">
            {slide.eyebrow}
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4 whitespace-pre-line">
            {slide.title}
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={slide.cta.href}
              className="bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              {slide.cta.text} →
            </a>
            {slide.ctaSecondary && (
              <a
                href={slide.ctaSecondary.href}
                className="border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-mbe-dark transition-colors"
              >
                {slide.ctaSecondary.text}
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Arrows — hidden on mobile, subtle on desktop */}
      <button
        onClick={() => setCurrent(c => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white/60 hover:text-white transition-all"
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent(c => (c + 1) % HERO_SLIDES.length)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white/60 hover:text-white transition-all"
        aria-label="Siguiente"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white bg-opacity-40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
