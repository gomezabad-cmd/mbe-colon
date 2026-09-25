'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { POSTS } from '@/lib/posts'

function categoryHint(pathname: string): string | null {
  const p = pathname.toLowerCase()
  if (p.includes('bordado')) return 'Bordados'
  if (p.includes('sello')) return 'Sellos'
  if (
    p.includes('impresion') ||
    p.includes('etiquetas') ||
    p.includes('banners') ||
    p.includes('planos') ||
    p.includes('tarjetas') ||
    p.includes('carnets') ||
    p.includes('kit-identidad')
  ) {
    return 'Impresión'
  }
  if (
    p.includes('carga') ||
    p.includes('logistica') ||
    p.includes('incoterm') ||
    p.includes('aduana') ||
    p.includes('tramites') ||
    p.includes('fechas')
  ) {
    return 'Logística'
  }
  if (
    p.includes('envio') ||
    p.includes('seguro') ||
    p.includes('costo-envios') ||
    p.includes('dhl') ||
    p.includes('documentos')
  ) {
    return 'Envíos'
  }
  return 'Casillero'
}

export default function RelatedPosts() {
  const pathname = usePathname()

  if (!pathname || !pathname.startsWith('/blog/')) return null

  const current = pathname.replace(/\/$/, '')
  const hint = categoryHint(current)

  const sameCategory = POSTS.filter((p) => p.href !== current && p.categoria === hint)
  const rest = POSTS.filter((p) => p.href !== current && p.categoria !== hint)
  const picks = [...sameCategory, ...rest].slice(0, 3)

  if (picks.length === 0) return null

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-mbe-dark mb-2">Artículos relacionados</h2>
        <p className="text-gray-500 text-sm mb-6">
          Más guías de envíos, casillero Miami y logística desde Colón, Panamá.
        </p>
        <ul className="space-y-5">
          {picks.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block border border-gray-200 rounded-xl p-5 hover:border-mbe-red hover:shadow-sm transition-all"
              >
                <span className="text-mbe-red text-xs font-bold uppercase tracking-wider">
                  {post.categoria}
                </span>
                <h3 className="text-mbe-dark font-semibold leading-snug mt-1 group-hover:text-mbe-red">
                  {post.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-2">
                  {post.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
