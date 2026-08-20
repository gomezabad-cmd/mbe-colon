import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Servicios de Envíos y Logística en Colón | MBE Colón',
  description: 'Servicios de logística en Colón: envíos internacionales DHL FedEx UPS, casillero Miami, carga marítima, impresión y bordados personalizados. Plaza Millenium.',
  alternates: {
    canonical: 'https://mbecolon.com/servicios',
  },
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
            Servicios de envíos y logística <span className="text-mbe-red">en Colón</span>
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

        {/* Guía para elegir */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-mbe-gray leading-relaxed">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black text-center mb-8">¿Qué servicio necesitas en Colón?</h2>
            <p>
              <strong className="text-mbe-dark">¿Quieres recibir compras de tiendas de USA?</strong> Abre tu <Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">casillero Miami gratis</Link>. Recibes una dirección personal en Miami, compras en Amazon, Shein, eBay o cualquier tienda online, y llevamos tus paquetes hasta Colón con notificación por WhatsApp en cada paso. Si compras en varias tiendas, consolidamos todo en un solo envío para ahorrar flete.
            </p>
            <p>
              <strong className="text-mbe-dark">¿Necesitas enviar un paquete o documento al extranjero?</strong> Somos agente autorizado de <Link href="/servicios/envios-internacionales" className="text-mbe-red font-semibold hover:underline">DHL, FedEx y UPS</Link>. Cotizamos al instante, gestionamos la documentación aduanera e incluimos seguro básico en todos los envíos, con tracking en tiempo real para ti y para el destinatario.
            </p>
            <p>
              <strong className="text-mbe-dark">¿Mueves volúmenes grandes o mercancía comercial?</strong> La <Link href="/servicios/carga-maritima" className="text-mbe-red font-semibold hover:underline">carga marítima</Link> cubre contenedores completos y consolidados en las rutas Miami–Panamá y China–Panamá, con tarifas preferenciales por volumen y entrega hasta tu bodega en Colón.
            </p>
            <p>
              <strong className="text-mbe-dark">¿Necesitas imprimir, bordar o sellos?</strong> Tenemos <Link href="/servicios/impresion" className="text-mbe-red font-semibold hover:underline">impresión profesional</Link> (tarjetas, brochures, banners y planos), <Link href="/servicios/bordados" className="text-mbe-red font-semibold hover:underline">bordados personalizados</Link> para uniformes y equipos, y <Link href="/servicios/sellos" className="text-mbe-red font-semibold hover:underline">sellos automáticos</Link> Trodat y Colop listos en 24-48 horas.
            </p>
            <p>
              ¿Dudas con los precios? Consulta nuestra página de <Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">tarifas de referencia</Link> — aéreo desde $3.00/lb, marítimo desde $3.00/ft³, sellos desde $8.00 y bordados desde $3.75 — o lee la <Link href="/blog/como-comprar-por-internet-desde-colon-panama" className="text-mbe-red font-semibold hover:underline">guía para comprar por internet desde Colón</Link>.
            </p>
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
