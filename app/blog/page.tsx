import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | MBE Colón — Consejos de Envíos, Casillero y Logística',
  description: 'Blog MBE Colón: guías de envíos internacionales, casillero Miami, logística para PYMEs y consejos de compras online. Artículos útiles y actualizados.',
  alternates: {
    canonical: 'https://mbecolon.com/blog',
  },
  openGraph: {
    title: 'Blog MBE Colón — Consejos de Envíos y Logística en Colón, Panamá',
    description: 'Artículos sobre envíos, casillero Miami y logística para empresas en Colón.',
    url: 'https://mbecolon.com/blog',
  },
}

const POSTS = [
  {
    categoria: 'Envíos',
    badge: 'bg-mbe-red',
    titulo: '¿Cuánto cuesta enviar un paquete internacional desde Colón, Panamá?',
    desc: 'Guía de precios para tus envíos internacionales Colón: qué determina el costo y cómo comparar DHL, FedEx y UPS.',
    href: '/blog/costo-envios-internacionales-desde-colon',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes listas para envío internacional desde Colón, Panamá',
  },
  {
    categoria: 'Casillero',
    badge: 'bg-mbe-blue',
    titulo: 'Cómo comprar en Shein y eBay desde Colón con tu casillero Miami',
    desc: 'Recibe tus paquetes de Shein y eBay en Colón, Panamá con el casillero Miami de MBE. Rápido, seguro y sin costo de inscripción.',
    href: '/blog/casillero-miami-shein-ebay-colon',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Compras online de Shein y eBay con casillero Miami MBE Colón',
  },
  {
    categoria: 'Impresión',
    badge: 'bg-mbe-blue',
    titulo: 'Tarjetas de presentación y embalaje profesional para tu empresa en Colón, Panamá',
    desc: 'Impresión de tarjetas de presentación y embalaje profesional para empresas en Colón, Panamá. Entrega en 24-48h en Plaza Millenium F007.',
    href: '/blog/impresion-tarjetas-embalaje-profesional-colon',
    img: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Impresión de tarjetas de presentación y embalaje profesional para empresas en Colón, Panamá',
  },
  {
    categoria: 'Logística',
    badge: 'bg-mbe-red',
    titulo: 'Carga marítima Miami-Panamá para empresas en Colón',
    desc: 'Servicio de carga marítima Miami-Panamá para empresas en Colón, Panamá. Logística para PYMEs y la Zona Libre de Colón.',
    href: '/blog/carga-maritima-miami-panama-empresas-colon',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Almacén de carga marítima Miami-Panamá para empresas en Colón, Panamá',
  },
  {
    categoria: 'Sellos',
    badge: 'bg-mbe-red',
    titulo: 'Carnets PVC personalizados para empresas en Colón, Panamá',
    desc: 'Carnets de identificación con logo, foto y código de barras para empresas en Colón. Diseño a color, entrega en 24-48h. Plaza Millenium F007.',
    href: '/blog/carnets-pvc-personalizados-empresas-colon',
    img: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Carnets PVC personalizados para identificación de empleados en Colón, Panamá',
  },
  {
    categoria: 'Bordados',
    badge: 'bg-mbe-blue',
    titulo: 'Gorras y polos bordados con logo para empresas en Colón, Panamá',
    desc: 'Bordados de calidad en Colón: gorras y polos con logo para empresas y PYMEs, desde 1 unidad. Plaza Millenium F007.',
    href: '/blog/bordados-gorras-polos-empresas-colon',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Gorras y polos bordados con logo para empresas en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    badge: 'bg-mbe-blue',
    titulo: 'Envíos internacionales desde Colón: ¿DHL, FedEx o UPS? Guía para elegir tu courier',
    desc: 'Compara DHL, FedEx y UPS para tus envíos internacionales desde Colón, Panamá según destino, peso y presupuesto.',
    href: '/blog/envios-internacionales-dhl-fedex-ups-colon',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes para envíos internacionales desde Colón, Panamá',
  },
  {
    categoria: 'Logística',
    badge: 'bg-mbe-red',
    titulo: 'Logística en Colón para PYMEs y operadores de la Zona Libre: todo en un solo lugar',
    desc: 'Servicios de logística para empresas en Colón, Panamá. Carga marítima Miami-Panamá, DHL, FedEx y UPS con entrega en 24-48h a la Zona Libre de Colón.',
    href: '/blog/logistica-pymes-zona-libre-colon',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Almacén logístico para empresas y PYMEs en Colón, Panamá',
  },
  {
    categoria: 'Impresión',
    badge: 'bg-mbe-blue',
    titulo: 'Impresión profesional en Colón: planos arquitectónicos, brochures y banners para tu empresa',
    desc: 'Imprimimos planos en gran formato, brochures corporativos y banners para empresas en Colón, Panamá. Calidad profesional y entrega rápida.',
    href: '/blog/impresion-planos-brochures-colon',
    img: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Impresión profesional de planos y brochures para empresas en Colón, Panamá',
  },
  {
    categoria: 'Sellos',
    badge: 'bg-mbe-red',
    titulo: '¿Dónde hacer sellos automáticos personalizados en Colón, Panamá?',
    desc: 'Sellos automáticos para abogados, médicos y empresas en Colón. Modelos Trodat y Colop, entrega en 24-48h. Plaza Millenium F007.',
    href: '/blog/sellos-automaticos-personalizados-colon',
    img: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Sello automático personalizado con tinta para empresas en Colón, Panamá',
  },
  {
    categoria: 'Bordados',
    badge: 'bg-mbe-blue',
    titulo: '¿Dónde bordar uniformes con tu logo en Colón, Panamá? Guía para empresas',
    desc: 'Bordados personalizados en uniformes, hoodies y gorras para empresas en Colón. Desde 1 unidad, alta durabilidad garantizada.',
    href: '/blog/bordados-personalizados-uniformes-colon',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Bordados personalizados en uniformes y gorras para empresas en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    badge: 'bg-mbe-red',
    titulo: '¿Cómo empacar correctamente tu paquete para envíos internacionales?',
    desc: 'Aprende las mejores técnicas de embalaje para proteger tus envíos con DHL, FedEx y UPS desde Colón, Panamá.',
    href: '/blog/como-empacar-paquetes',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes listos para envío internacional',
  },
  {
    categoria: 'Casillero',
    badge: 'bg-mbe-blue',
    titulo: 'Guía completa para comprar en Amazon y recibir en Colón',
    desc: 'Paso a paso: cómo usar tu casillero Miami MBE para traer tus compras de USA sin complicaciones.',
    href: '/blog/guia-compras-amazon-colon',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Compras online en Amazon con casillero Miami MBE Colón',
  },
  {
    categoria: 'Casillero',
    badge: 'bg-mbe-red',
    titulo: 'Cómo traer repuestos de auto desde USA a Panamá',
    desc: 'Guía paso a paso para comprar piezas de carro en USA y recibirlas rápido y seguro en Colón, Panamá.',
    href: '/blog/traer-repuestos-auto-usa-panama',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Mecánico instalando repuestos de auto importados desde USA a Panamá',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-[88px]">

      {/* Hero */}
      <section className="bg-mbe-dark py-16 px-4 text-center">
        <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">📰 Noticias y Consejos</p>
        <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
          MBE <span className="text-mbe-red">Informa</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Tips de envíos, guías de compras internacionales y todo lo que necesitas saber para importar mejor desde Colón.
        </p>
      </section>

      {/* Grid de artículos */}
      <section className="bg-mbe-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(post => (
              <Link
                key={post.href}
                href={post.href}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold text-white ${post.badge} px-3 py-1 rounded-full`}>
                    {post.categoria}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-mbe-dark font-bold text-base leading-snug mb-3 flex-1 group-hover:text-mbe-red transition-colors">
                    {post.titulo}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.desc}
                  </p>
                  <span className="text-mbe-red text-sm font-bold">
                    Leer más →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mbe-red py-14 px-4 text-center">
        <h2 className="text-white text-2xl font-black mb-3">¿Tienes alguna pregunta?</h2>
        <p className="text-white opacity-90 mb-6">Estamos en Plaza Millenium F007, Colón. Escríbenos y te respondemos en minutos.</p>
        <a
          href="https://wa.me/50769495100"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-mbe-red font-black px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
        >
          💬 Escribir al WhatsApp
        </a>
      </section>

    </main>
  )
}
