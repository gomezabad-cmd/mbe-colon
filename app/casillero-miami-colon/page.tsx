import Link from 'next/link'
import ServicesBar from '@/components/ServicesBar'
import WhyUsSection from '@/components/WhyUsSection'
import ReviewsSection from '@/components/ReviewsSection'
import ContactSection from '@/components/ContactSection'
import QuoteCalculator from '@/components/QuoteCalculator'

export const metadata = {
  title: 'Casillero Miami Colón Panamá | Envío Gratis Casillero | MBE Colón',
  description: 'Casillero Miami gratis en Colón, Panamá. Recibe paquetes de Amazon, eBay y Shein en Colón sin cuota mensual. Domicilio Miami personal, tracking por WhatsApp. MBE Colón.',
  keywords: [
    'casillero Miami Colón',
    'casillero Miami Panamá',
    'casillero gratis Colón',
    'envío Miami Colón',
    'courier Miami Colón',
    'comprar en USA Panamá',
    'paquetes Miami Colón',
    'domicilio Miami Panamá',
    'casillero virtual Miami',
    'recepción paquetes Colón',
  ],
  alternates: {
    canonical: 'https://mbecolon.com/casillero-miami-colon',
  },
  openGraph: {
    title: 'Casillero Miami Colón Panamá | MBE Colón',
    description: 'Activa tu casillero Miami gratis. Recibe paquetes de Amazon, eBay y Shein en Colón, Panamá.',
    url: 'https://mbecolon.com/casillero-miami-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',

    type: 'website',
    images: [
      { url: 'https://mbecolon.com/og-image.png', width: 1200, height: 630, alt: 'Casillero Miami Colón Panamá | Envío Gratis Casillero' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

export default function CasilleroMiamiColonPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Casillero Miami Colón', item: `${BASE_URL}/casillero-miami-colon` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Casillero Miami',
    name: 'Casillero Miami en Colón, Panamá',
    description: 'Servicio de casillero virtual en Miami con recepción de paquetes y envío a Colón, Panamá.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'MBE Colón',
      url: BASE_URL,
      telephone: '+5074745548',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Millenium Local F007',
        addressLocality: 'Colón',
        addressRegion: 'Colón',
        postalCode: '0301',
        addressCountry: 'PA',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Colón, Panamá',
    },
    url: `${BASE_URL}/casillero-miami-colon`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Activación gratuita del casillero Miami',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta el casillero Miami en Colón?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La activación del casillero Miami es completamente GRATIS. No hay cuota mensual, ni comisión por activación, ni costo oculto. Solo pagas por el flete cuando enviamos tu paquete a Colón.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona el casillero Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Al activar tu casillero, recibes una dirección personal en Miami, Florida. Usas esta dirección para comprar en cualquier tienda online de USA (Amazon, eBay, Shein, etc.). Los paquetes llegan a nuestro almacén en Miami y los enviamos a Colón, Panamá.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tarda el envío de Miami a Colón?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo promedio es de 3-7 días hábiles para envíos aéreos estándar. Para envíos express, puede ser de 2-3 días hábiles. Te notificamos por WhatsApp en cada paso del proceso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo recibir paquetes de Amazon y eBay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, puedes recibir paquetes de cualquier tienda de USA que envíe a Miami: Amazon, eBay, Shein, AliExpress, Nike, Sephora, y cientos más.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué documentos necesito para activar mi casillero?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solo necesitas una identificación válida (cédula o pasaporte). La activación es instantánea y recibes tu dirección Miami por WhatsApp al momento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo consolidar varios paquetes en un solo envío?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ofrecemos consolidación de paquetes gratis. Si tienes varios paquetes pequeños, los juntamos en un solo envío para ahorrar en costos de flete.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo usar un casillero Miami desde Colón, Panamá',
    description: 'Paso a paso para activar tu casillero Miami y recibir paquetes en Colón, Panamá.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Activa tu casillero',
        text: 'Visítanos en Plaza Millenium F007 o escríbenos por WhatsApp para activar tu casillero Miami. Es gratis y toma 5 minutos.',
      },
      {
        '@type': 'HowToStep',
        name: 'Recibe tu dirección Miami',
        text: 'Te damos tu dirección personal en Miami con tu nombre y número de cliente. Usa esta dirección en todas tus compras online.',
      },
      {
        '@type': 'HowToStep',
        name: 'Compra en tiendas de USA',
        text: 'Usa tu nueva dirección Miami al comprar en Amazon, eBay, Shein o cualquier tienda online de USA.',
      },
      {
        '@type': 'HowToStep',
        name: 'Recibe en Colón',
        text: 'Cuando tu paquete llega a Miami, lo enviamos a Colón. Te avisamos por WhatsApp para que vengas a retirarlo.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
                Casillero Miami #1 en Colón
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Casillero Miami Colón Panamá
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Activa gratis tu casillero en Miami y recibe paquetes de Amazon, eBay y Shein
                directamente en Colón, Panamá. Sin cuota mensual, con tracking por WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#activar"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
                >
                  Activar Casillero Gratis
                </a>
                <a
                  href="/tarifas"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Ver Tarifas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir nuestro casillero Miami en Colón?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Somos la opción #1 en Colón para recibir paquetes desde Miami.
                Activación gratis, sin cuota mensual y con soporte por WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🆓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Gratis</h3>
                <p className="text-gray-600">
                  Sin cuota mensual, sin comisión por activación, sin costos ocultos.
                  Solo pagas el flete cuando enviamos tu paquete.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tracking por WhatsApp</h3>
                <p className="text-gray-600">
                  Te avisamos en cada paso: cuando llega a Miami, cuando lo despachamos
                  y cuando está listo para recoger en Colón.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consolidación Gratis</h3>
                <p className="text-gray-600">
                  ¿Varios paquetes? Los juntamos en un solo envío para que ahorres
                  en costos de flete. Ideal para compras en Amazon y Shein.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cómo funciona nuestro casillero Miami
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En 4 pasos simples, tienes tu casillero activo y recibiendo paquetes en Colón
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Activa tu casillero</h3>
                <p className="text-gray-600">
                  Visítanos o escríbenos por WhatsApp. Es gratis y toma 5 minutos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Recibe tu dirección Miami</h3>
                <p className="text-gray-600">
                  Obtienes una dirección personal en Miami con tu nombre y número de cliente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compra en USA</h3>
                <p className="text-gray-600">
                  Usa tu dirección Miami en Amazon, eBay, Shein y cualquier tienda online.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Recibe en Colón</h3>
                <p className="text-gray-600">
                  Enviamos tu paquete a Colón. Te avisamos por WhatsApp para recogerlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes sobre casillero Miami Colón
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cuánto cuesta el casillero Miami en Colón?
                </h3>
                <p className="text-gray-600">
                  La activación es <strong>completamente GRATIS</strong>. No hay cuota mensual,
                  ni comisión por activación, ni costo oculto. Solo pagas por el flete cuando
                  enviamos tu paquete a Colón. Es la opción más económica del mercado.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cómo funciona el casillero Miami?
                </h3>
                <p className="text-gray-600">
                  Al activar tu casillero, recibes una dirección personal en Miami, Florida.
                  Usas esta dirección para comprar en cualquier tienda online de USA. Los paquetes
                  llegan a nuestro almacén en Miami y los enviamos a Colón, Panamá. Es así de simple.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cuánto tarda el envío de Miami a Colón?
                </h3>
                <p className="text-gray-600">
                  El tiempo promedio es de <strong>3-7 días hábiles</strong> para envíos aéreos
                  estándar. Para envíos express, puede ser de 2-3 días hábiles. Te notificamos
                  por WhatsApp en cada paso del proceso.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Puedo recibir paquetes de Amazon y eBay?
                </h3>
                <p className="text-gray-600">
                  Sí, puedes recibir paquetes de <strong>cualquier tienda de USA</strong> que
                  envíe a Miami: Amazon, eBay, Shein, AliExpress, Nike, Sephora, y cientos más.
                  Si tienes dudas sobre una tienda específica, escríbenos por WhatsApp.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Qué documentos necesito para activar mi casillero?
                </h3>
                <p className="text-gray-600">
                  Solo necesitas una <strong>identificación válida</strong> (cédula o pasaporte).
                  La activación es instantánea y recibes tu dirección Miami por WhatsApp al momento.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Puedo consolidar varios paquetes en un solo envío?
                </h3>
                <p className="text-gray-600">
                  Sí, ofrecemos <strong>consolidación de paquetes gratis</strong>. Si tienes
                  varios paquetes pequeños, los juntamos en un solo envío para ahorrar en
                  costos de flete. Ideal para compras en Amazon y Shein.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + Calculator */}
        <section className="py-16 md:py-24 bg-blue-900 text-white" id="activar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Activa tu casillero Miami gratis ahora
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Completa el formulario y te contactamos por WhatsApp para activar tu casillero
                en menos de 5 minutos.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-gray-900">
              <QuoteCalculator
                variant="casillero"
                title="Cotiza tu envío de Miami a Colón"
                subtitle="Elige aéreo o marítimo, indica el peso o volumen y obtén una estimación inmediata."
              />
            </div>
          </div>
        </section>

        {/* Stores Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Qué puedes comprar con tu casillero Miami?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Con tu casillero Miami, puedes comprar en cualquier tienda online de USA
                y recibir tus productos en Colón, Panamá.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Amazon', icon: '🛒', desc: 'Electrónica, ropa, hogar' },
                { name: 'eBay', icon: '🏷️', desc: 'Subastas, ofertas, coleccionables' },
                { name: 'Shein', icon: '👗', desc: 'Moda, accesorios, belleza' },
                { name: 'Nike', icon: '👟', desc: 'Calzado y ropa deportiva' },
                { name: 'Sephora', icon: '💄', desc: 'Maquillaje y skincare' },
                { name: 'Best Buy', icon: '💻', desc: 'Electrónica y tecnología' },
                { name: 'Target', icon: '🎯', desc: 'Hogar, ropa, juguetes' },
                { name: 'Walmart', icon: '🏪', desc: 'Todo para el hogar' },
              ].map((store) => (
                <div
                  key={store.name}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{store.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{store.name}</h3>
                  <p className="text-sm text-gray-500">{store.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comparativa: Casillero Miami en Colón
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ¿Por qué MBE Colón es la mejor opción para tu casillero Miami?
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-50 rounded-xl shadow-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 text-left font-bold text-gray-900">Característica</th>
                    <th className="py-4 px-6 text-center font-bold text-blue-600">MBE Colón</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-500">Otras opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Costo de activación</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Gratis</td>
                    <td className="py-4 px-6 text-center text-gray-500">$5-20</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Cuota mensual</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">$0</td>
                    <td className="py-4 px-6 text-center text-gray-500">$5-15/mes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Consolidación de paquetes</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Gratis</td>
                    <td className="py-4 px-6 text-center text-gray-500">$2-5/paquete</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Tracking por WhatsApp</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Sí</td>
                    <td className="py-4 px-6 text-center text-gray-500">Email</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Tiempo de entrega</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">3-7 días</td>
                    <td className="py-4 px-6 text-center text-gray-500">5-14 días</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Soporte en español</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">24/7</td>
                    <td className="py-4 px-6 text-center text-gray-500">Limitado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios relacionados en Colón
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/servicios/envios-internacionales" className="block">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Envíos Internacionales</h3>
                  <p className="text-gray-600">
                    Envía paquetes a cualquier parte del mundo con DHL, FedEx y UPS.
                  </p>
                </div>
              </Link>

              <Link href="/servicios/carga-maritima" className="block">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">🚢</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Carga Marítima</h3>
                  <p className="text-gray-600">
                    Envíos grandes y pesados por mar. Ideal para empresas y mudanzas.
                  </p>
                </div>
              </Link>

              <Link href="/tarifas" className="block">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ver Tarifas</h3>
                  <p className="text-gray-600">
                    Consulta nuestros precios para envíos aéreos y marítimos.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Links */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Artículos del blog sobre casillero Miami
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/como-comprar-por-internet-desde-colon-panama" className="block">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-6xl">🛒</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Cómo comprar por internet desde Colón
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Guía completa para comprar en Amazon, eBay y Shein desde Colón, Panamá.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/casillero-miami-shein-ebay-colon" className="block">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                    <span className="text-6xl">👗</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Casillero Miami para Shein y eBay
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Aprende a usar tu casillero para comprar en Shein y eBay con envío a Colón.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/casillero-miami-shein-ebay-colon" className="block">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                    <span className="text-6xl">📦</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Casillero Miami: Amazon, eBay, Shein
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Todo lo que necesitas saber sobre casilleros Miami para tus compras online.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <WhyUsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </>
  )
}
