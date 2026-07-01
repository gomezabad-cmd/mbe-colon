import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Servicios | MBE Colón — Envíos, Casillero, Impresión y más en Colón, Panamá',
  description: 'Servicios de logística en Colón: envíos internacionales DHL FedEx UPS, casillero Miami, carga marítima, impresión y bordados personalizados. Plaza Millenium.',
}

const SERVICES = [
  {
    icon: '✈️',
    title: 'Envíos Internacionales',
    description: 'Enviamos con DHL, FedEx y UPS a todo el mundo. Tracking en tiempo real y embalaje profesional incluido.',
    href: '/servicios/envios-internacionales',
    badge: 'bg-mbe-red',
  },
  {
    icon: '🛒',
    title: 'Compras por Internet',
    description: 'Compra en Amazon, eBay, Shein y recíbelo en Colón con tu casillero Miami MBE.',
    href: '/servicios/compras-internet',
    badge: 'bg-mbe-blue',
  },
  {
    icon: '🚢',
    title: 'Carga Marítima',
    description: 'Carga marítima Miami–Panamá y China–Panamá al mejor precio para tu empresa o negocio.',
    href: '/servicios/carga-maritima',
    badge: 'bg-mbe-red',
  },
  {
    icon: '🖨️',
    title: 'Impresión y Fotocopiado',
    description: 'Tarjetas, brochures, banners, planos y fotocopias con calidad profesional. Entrega el mismo día.',
    href: '/servicios/impresion',
    badge: 'bg-mbe-blue',
  },
  {
    icon: '📬',
    title: 'Casillero Miami',
    description: 'Tu dirección en Miami para recibir compras de tiendas de USA. Gratis, rápido y seguro.',
    href: '/servicios/casillero',
    badge: 'bg-mbe-red',
  },
  {
    icon: '🧵',
    title: 'Bordados Personalizados',
    description: 'Uniformes, hoodies, gorras y polos con tu logo bordado para empresas y equipos en Panamá.',
    href: '/servicios/bordados',
    badge: 'bg-mbe-blue',
  },
  {
    icon: '🔖',
    title: 'Sellos Automáticos',
    description: 'Sellos automáticos personalizados para abogados, médicos y empresas. Entrega en 24-48 horas.',
    href: '/servicios/sellos',
    badge: 'bg-mbe-red',
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-mbe-dark py-16 px-4 text-center">
          <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">
            🗂️ Lo que ofrecemos
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
            Nuestros <span className="text-mbe-red">Servicios</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para enviar, importar y hacer crecer tu negocio desde Colón, Panamá — en un solo lugar.
          </p>
        </section>

        {/* Grid de servicios */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(service => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.badge} flex items-center justify-center text-2xl mb-4`}>
                    {service.icon}
                  </div>
                  <h2 className="text-mbe-dark font-bold text-lg mb-2 group-hover:text-mbe-red transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="text-mbe-red text-sm font-bold mt-4 inline-flex items-center gap-1">
                    Ver más →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-mbe-red py-14 px-4 text-center">
          <h2 className="text-white text-2xl font-black mb-3">¿No encuentras lo que buscas?</h2>
          <p className="text-white opacity-90 mb-6">
            Escríbenos y te ayudamos. Estamos en Plaza Millenium F007, Colón.
          </p>
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
      <Footer />
    </>
  )
}
