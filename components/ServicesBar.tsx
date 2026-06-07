'use client'

import Link from 'next/link'
import { useRef } from 'react'

const SERVICES = [
  {
    id: 'compras-internet',
    label: 'Compras\npor Internet',
    href: '/servicios/compras-internet',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <path d="M6 8h6l8 32h28l6-20H18" />
        <circle cx="26" cy="48" r="3" fill="white" stroke="none" />
        <circle cx="44" cy="48" r="3" fill="white" stroke="none" />
        <path d="M24 24h16M32 16v16" />
      </svg>
    ),
  },
  {
    id: 'carga-maritima',
    label: 'Carga\nMarítima',
    href: '/servicios/carga-maritima',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <rect x="20" y="10" width="24" height="14" rx="2" />
        <path d="M32 10V6" />
        <path d="M8 40l6-16h28l6 16H8z" />
        <path d="M4 44c4 6 8 8 14 6s10-8 14-6 10 8 14 6 10-6 14-6" />
      </svg>
    ),
  },
  {
    id: 'envios-internacionales',
    label: 'Envíos &\nEmbalaje',
    href: '/servicios/envios-internacionales',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <path d="M4 40L20 12h28l8 14-12 18H4z" />
        <path d="M20 12l8 18M48 12l-8 18M4 40h48" />
        <path d="M28 30v14" />
        <path d="M10 44l4-4M54 44l-4-4" />
      </svg>
    ),
  },
  {
    id: 'impresion',
    label: 'Impresión &\nFotocopiado',
    href: '/servicios/impresion',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <rect x="14" y="22" width="36" height="22" rx="3" />
        <path d="M20 22V10h24v12" />
        <rect x="20" y="34" width="24" height="12" rx="1" />
        <circle cx="46" cy="30" r="2.5" fill="white" stroke="none" />
        <path d="M24 39h16M24 43h10" />
      </svg>
    ),
  },
  {
    id: 'casillero',
    label: 'Casillero\nMiami',
    href: '/servicios/casillero',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <rect x="8" y="18" width="48" height="34" rx="4" />
        <path d="M8 30h48" />
        <path d="M24 30v10a8 8 0 0 0 16 0V30" />
        <path d="M18 8l-6 10M46 8l6 10" />
      </svg>
    ),
  },
]

function TiltBox({ service }: { service: typeof SERVICES[number] }) {
  const ref = useRef<HTMLAnchorElement>(null)

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left   // 0..width
    const y = e.clientY - rect.top    // 0..height
    const cx = rect.width / 2
    const cy = rect.height / 2
    // Map to -15..+15 degrees
    const rotateY =  ((x - cx) / cx) * 15
    const rotateX = -((y - cy) / cy) * 15
    el.style.transition = 'background-color 0.3s, box-shadow 0.3s'
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08,1.08,1.08)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'background-color 0.3s, box-shadow 0.3s, transform 0.4s'
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <Link
      ref={ref}
      href={service.href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="service-box flex flex-col items-center justify-center text-center gap-2 bg-mbe-red rounded-2xl p-4 w-[120px] h-[120px] md:w-[130px] md:h-[130px] hover:bg-red-700 shadow-md hover:shadow-xl"
    >
      {service.icon}
      <span className="text-white text-[10px] md:text-[11px] font-bold leading-tight whitespace-pre-line">
        {service.label}
      </span>
    </Link>
  )
}

export default function ServicesBar() {
  return (
    <section className="bg-white py-8 px-4 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-5">
          {SERVICES.map(service => (
            <TiltBox key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
