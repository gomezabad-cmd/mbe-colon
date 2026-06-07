'use client'

import { useState, useEffect } from 'react'
import { HERO_SLIDES } from '@/lib/constants'

const SLIDE_IMAGES = [
  'https://www.mbe-ca.com/wp-content/uploads/2025/10/banner-4-1.jpg',
  'https://www.mbe-ca.com/wp-content/uploads/2025/10/BANNER-1-1-1.jpg',
  // Impresión profesional — impresora offset / material impreso
  'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&h=780&fit=crop&q=80',
  // Bordados personalizados — máquina bordadora industrial (foto real)
  '/bordados-banner.jpg',
  // Sellos automáticos — colección COLOP (foto real)
  '/sellos-banner.jpg',
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
      style={{ maxHeight: 'calc(100vh - 88px)' }}
    >
      {/* Aspect-ratio spacer: 780/1600 = 48.75% — images are 1600×780px */}
      <div style={{ paddingTop: '48.75%' }} />

      {/* Background images — plain <img> so the browser respects object-fit:fill at full res */}
      {SLIDE_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={[
              'Envíos internacionales con DHL, FedEx y UPS en Colón, Panamá — Mail Boxes Etc.',
              'Casillero Miami en Colón, Panamá — recibe compras de Amazon y tiendas de USA',
              'Impresión profesional de tarjetas y banners en Colón, Panamá — MBE Colón',
              'Bordados personalizados en uniformes y hoodies para empresas en Panamá — MBE Colón',
              'Sellos automáticos personalizados para empresas en Colón, Panamá — MBE Colón',
            ][i] ?? `MBE Colón — servicio ${i + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content — must be absolute so it doesn't add height to the section */}
      <div className="absolute inset-0 z-10 max-w-6xl mx-auto px-4 flex items-center">
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

      {/* Arrows */}
      <button
        onClick={() => setCurrent(c => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
        aria-label="Anterior"
      >‹</button>
      <button
        onClick={() => setCurrent(c => (c + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
        aria-label="Siguiente"
      >›</button>

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
