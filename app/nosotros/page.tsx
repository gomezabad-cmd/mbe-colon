import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Nosotros | MBE Colón — Franquicia Mail Boxes Etc. en Colón',
  description:
    'Conoce MBE Colón: franquicia oficial de Mail Boxes Etc. en Colón, Panamá, dirigida por Carlos Gómez con más de 18 años en logística, casillero Miami e impresión.',
  alternates: {
    canonical: 'https://mbecolon.com/nosotros',
  },
  openGraph: {
    title: 'Nosotros | MBE Colón — Franquicia Mail Boxes Etc. en Colón',
    description:
      'Conoce MBE Colón: franquicia oficial de Mail Boxes Etc. en Colón, Panamá, dirigida por Carlos Gómez con más de 18 años en logística, casillero Miami e impresión.',
    url: 'https://mbecolon.com/nosotros',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'website',
    images: [
      { url: 'https://mbecolon.com/og-image.png', width: 1200, height: 630, alt: 'Nosotros — MBE Colón' },
    ],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://mbecolon.com/nosotros#about',
      url: 'https://mbecolon.com/nosotros',
      name: 'Nosotros | MBE Colón — Franquicia Mail Boxes Etc. en Colón',
      description:
        'MBE Colón es la franquicia oficial de Mail Boxes Etc. en la provincia de Colón, Panamá. Más de 18 años ofreciendo casillero Miami, envíos internacionales, carga marítima, impresión, bordados y sellos.',
      inLanguage: 'es-PA',
      about: {
        '@type': 'Organization',
        name: 'Mail Boxes Etc. Colón',
        alternateName: 'MBE Colón',
        url: 'https://mbecolon.com',
        sameAs: [
          'https://www.mbe-ca.com',
          'https://www.instagram.com/mbecolon',
          'https://www.tiktok.com/@mbecolon',
        ],
      },
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Mail Boxes Etc. Colón',
        url: 'https://mbecolon.com',
        telephone: '+5074745548',
        email: 'colon@mbe-ca.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plaza Millenium Local F007',
          addressLocality: 'Colón',
          addressRegion: 'Colón',
          postalCode: '0301',
          addressCountry: 'PA',
        },
        employee: {
          '@type': 'Person',
          name: 'Carlos Gómez',
          jobTitle: 'Franquiciado de MBE Colón',
          url: 'https://mbecolon.com/nosotros',
        },
      },
    },
  ],
}

const diferenciales = [
  {
    icon: '🤝',
    titulo: 'Franquicia oficial',
    texto:
      'Somos la franquicia autorizada de Mail Boxes Etc. en la provincia de Colón, no un courier independiente. Eso significa procedimientos estandarizados, seguimiento de cada envío y una red internacional detrás de cada paquete.',
  },
  {
    icon: '✈️',
    titulo: 'Tres couriers, un solo lugar',
    texto:
      'Cotizamos DHL, FedEx y UPS en el mismo local y te decimos cuál conviene según destino, peso y presupuesto. No tienes que comparar tres páginas ni abrir tres cuentas.',
  },
  {
    icon: '📬',
    titulo: 'Casillero Miami gratis',
    texto:
      'Tu dirección en Miami no tiene cuota de activación ni mensualidad. Solo pagas el flete cuando el paquete viaja de Miami a Colón, y los trámites aduanales vienen incluidos en ese flete.',
  },
  {
    icon: '🖨️',
    titulo: 'Logística e imprenta en uno',
    texto:
      'Envíos, carga marítima, impresión de planos y brochures, bordados de uniformes y sellos automáticos bajo el mismo techo. El mismo equipo que recibe tu paquete puede imprimir tus tarjetas.',
  },
  {
    icon: '📍',
    titulo: 'Estamos en Colón, no en la capital',
    texto:
      'Plaza Millenium Local F007, a minutos de la Zona Libre y de los muelles. Ven, revisa tu paquete y resuelve tus trámites sin viajar a Ciudad de Panamá.',
  },
  {
    icon: '💬',
    titulo: 'Respuesta por WhatsApp en minutos',
    texto:
      'Escribes, cotizamos y te confirmamos. En horario de atención un asesor contesta en minutos con un precio real y sin compromiso.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-mbe-dark py-16 px-4 text-center">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }]} />
          <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">
            🤝 Franquicia oficial Mail Boxes Etc.
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
            Nuestra historia: la franquicia Mail Boxes Etc. de Colón
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Más de 18 años moviendo paquetes, documentos e impresos para las familias y empresas
            de la provincia de Colón.
          </p>
        </section>

        {/* Quiénes somos */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-6">
              ¿Quiénes somos?
            </h2>
            <div className="text-mbe-gray leading-relaxed space-y-5 text-lg">
              <p>
                <strong className="text-mbe-dark">MBE Colón — Mail Boxes Etc. Colón</strong> es la
                franquicia oficial de la red internacional Mail Boxes Etc. en la provincia de Colón,
                Panamá. Operamos desde <strong className="text-mbe-dark">Plaza Millenium Local F007</strong>,
                a pocos minutos de la Zona Libre de Colón y de los muelles, con más de 18 años
                atendiendo a familias, emprendedores, profesionales y empresas de la región.
              </p>
              <p>
                Nuestro trabajo es simple de describir y exigente de ejecutar: recibir compras
                hechas en Estados Unidos a través de un casillero Miami gratuito, enviar paquetes a
                cualquier parte del mundo con DHL, FedEx y UPS, mover carga marítima consolidada
                desde Miami y China, y producir impresión profesional, bordados personalizados y
                sellos automáticos en el mismo local. Todo con trámites aduanales incluidos en el
                flete y con trazabilidad del principio al final.
              </p>
              <p>
                No somos un punto de entrega anónimo: cada paquete se pesa, se registra, se
                fotografía y se notifica por WhatsApp. Si algo sale mal con un envío, hablas con
                personas que conocen tu caso y responden por tu nombre.
              </p>
            </div>
          </div>
        </section>

        {/* Franquiciado */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-mbe-dark text-white flex items-center justify-center text-3xl font-black mb-4">
                CG
              </div>
              <h2 className="text-mbe-dark font-black text-xl">Carlos Gómez</h2>
              <p className="text-mbe-red font-bold text-sm mb-3">Franquiciado de MBE Colón</p>
              <p className="text-mbe-gray text-sm leading-relaxed">
                Responsable de la operación diaria y autor de las guías del blog. Lidera la
                atención en Plaza Millenium y la relación con los couriers y la aduana.
              </p>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-green-500 text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Escríbele por WhatsApp
              </a>
            </div>

            <div className="md:col-span-2 space-y-5 text-mbe-gray leading-relaxed text-lg">
              <p>
                Al frente de la franquicia está <strong className="text-mbe-dark">Carlos Gómez</strong>,
                Franquiciado de MBE Colón. Más de 18 años en el sector lo han convertido en la
                persona a la que acuden los comerciantes de la Zona Libre, las empresas que
                importan repuestos y las familias que compran en Amazon, Shein o eBay.
              </p>
              <p>
                Esa experiencia se traduce en decisiones concretas: saber qué documentación exige
                la Autoridad Nacional de Aduanas para cada tipo de mercancía, anticipar qué producto
                tarda más en un envío aéreo o marítimo, y recomendar el courier correcto en lugar
                del más caro. Todo el contenido que publicamos en el{' '}
                <Link href="/blog" className="text-mbe-red font-semibold hover:underline">
                  blog
                </Link>{' '}
                está escrito y revisado por él, con fuentes verificables y precios actualizados.
              </p>
              <p>
                Ese mismo criterio es el que aplicamos en cada cotización: si un envío no conviene
                por aéreo, te lo decimos. Si el paquete puede consolidarse para bajar el costo
                entre un 30% y un 40%, también.
              </p>
            </div>
          </div>
        </section>

        {/* La red MBE */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-4">
              La red detrás de nuestro local
            </h2>
            <p className="text-mbe-gray text-lg leading-relaxed mb-8 max-w-3xl">
              Una franquicia no es solo un nombre en la fachada: es un sistema. Formamos parte de
              la red internacional <strong className="text-mbe-dark">Mail Boxes Etc.</strong>, con
              presencia en más de 30 países y 34 centros operando en Panamá. Esa estructura es lo
              que permite que un paquete salga de una tienda en Seattle y llegue a tu manos en Colón
              con un número de rastreo válido de principio a fin.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cifra: '18+', texto: 'años operando en Colón' },
                { cifra: '34', texto: 'centros MBE en Panamá' },
                { cifra: '30+', texto: 'países en la red internacional' },
                { cifra: '4.7★', texto: 'promedio en 85 reseñas de Google' },
              ].map((d) => (
                <div key={d.texto} className="bg-mbe-light rounded-2xl p-6 text-center">
                  <p className="text-mbe-red text-4xl font-black mb-1">{d.cifra}</p>
                  <p className="text-mbe-dark text-sm font-medium">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciales */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-3">
              ¿Por qué nos eligen en Colón?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Seis razones que nuestros clientes repiten cuando les preguntamos por qué siguen
              volviendo.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {diferenciales.map((d) => (
                <div key={d.titulo} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="text-mbe-dark font-black mb-2">{d.titulo}</h3>
                  <p className="text-mbe-gray text-sm leading-relaxed">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación y horarios */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-mbe-light rounded-2xl p-8">
              <h2 className="text-mbe-dark font-black text-xl mb-4">Dónde estamos</h2>
              <p className="text-mbe-gray text-sm leading-relaxed mb-4">
                Plaza Millenium, Local F007, Colón, Panamá. Frente a la avenida principal, con
                estacionamiento y acceso para personas con movilidad reducida. Si vienes en bus o
                taxi, la entrada de la plaza es conocida por todos.
              </p>
              <ul className="text-sm text-mbe-gray space-y-2">
                <li>
                  <span className="font-bold text-mbe-dark">Teléfono:</span>{' '}
                  <a href={CONTACT.phoneHref} className="hover:text-mbe-red transition-colors">
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-mbe-dark">WhatsApp:</span>{' '}
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-mbe-red transition-colors"
                  >
                    {CONTACT.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-mbe-dark">Correo:</span>{' '}
                  <a href={CONTACT.emailHref} className="hover:text-mbe-red transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-mbe-light rounded-2xl p-8">
              <h2 className="text-mbe-dark font-black text-xl mb-4">Horario de atención</h2>
              <ul className="space-y-3 text-sm text-mbe-gray">
                <li className="flex justify-between border-b border-white pb-2">
                  <span className="font-medium text-mbe-dark">Lunes – Viernes</span>
                  <span>8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white pb-2">
                  <span className="font-medium text-mbe-dark">Sábado</span>
                  <span>9:00 AM – 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-mbe-dark">Domingo</span>
                  <span className="text-gray-400">Cerrado</span>
                </li>
              </ul>
              <p className="text-mbe-gray text-sm mt-5 leading-relaxed">
                En horario de atención respondemos por WhatsApp en minutos. También puedes revisar
                nuestras{' '}
                <Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">
                  tarifas de referencia
                </Link>{' '}
                antes de escribirnos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-mbe-dark py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-3">
              ¿Hablamos de tu envío?
            </h2>
            <p className="text-gray-400 mb-6">
              Activa tu casillero Miami gratis o pídenos una cotización sin compromiso. Estamos en
              Plaza Millenium F007, Colón.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mbe-red text-white font-bold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Escribir por WhatsApp
              </a>
              <Link
                href="/servicios"
                className="border border-gray-500 text-white font-bold px-7 py-3 rounded-lg hover:bg-white hover:text-mbe-dark transition-colors"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
