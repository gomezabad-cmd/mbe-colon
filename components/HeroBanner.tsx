'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HERO_SLIDES } from '@/lib/constants'

const SLIDE_IMAGES = [
  'https://www.mbe-ca.com/wp-content/uploads/2025/10/banner-4-1.jpg',
  'https://www.mbe-ca.com/wp-content/uploads/2025/10/BANNER-1-1-1.jpg',
  'https://www.mbe-ca.com/wp-content/uploads/2025/10/banner-2-1.jpg',
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    {/* aspect-ratio matches native 1600×780 — same as MBE master site */}
    <section className="relative w-full overflow-hidden bg-mbe-dark" style={{ aspectRatio: '1600/780', maxHeight: '780px' }}>
      {/* Background images — one per slide, cross-fade */}
      {SLIDE_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Banner ${i + 1}`}
            fill
            className="object-fill"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/55" />

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
