'use client'

import { useState, useEffect } from 'react'
import { HERO_SLIDES } from '@/lib/constants'

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative h-[500px] md:h-[580px] overflow-hidden bg-mbe-dark">
      {/* Background gradient layers per slide */}
      <div className="absolute inset-0 transition-all duration-700">
        {current === 0 && <div className="absolute inset-0 bg-gradient-to-br from-mbe-dark via-gray-800 to-mbe-red opacity-90" />}
        {current === 1 && <div className="absolute inset-0 bg-gradient-to-br from-mbe-red via-red-800 to-mbe-dark opacity-90" />}
        {current === 2 && <div className="absolute inset-0 bg-gradient-to-br from-mbe-gray via-gray-600 to-mbe-dark opacity-90" />}
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
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

        {/* Carrier badges — right side */}
        <div className="hidden md:flex flex-col gap-3 ml-auto">
          {['DHL', 'FedEx', 'UPS', 'COPA'].map(c => (
            <div key={c} className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white font-black text-sm px-4 py-2 rounded text-center min-w-[80px]">
              {c}
            </div>
          ))}
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
