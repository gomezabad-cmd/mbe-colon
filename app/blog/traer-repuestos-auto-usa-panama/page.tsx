import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Cómo traer repuestos de auto desde USA a Panamá | MBE Colón',
  description: 'Guía paso a paso para comprar piezas de carro en USA (Amazon, RockAuto, eBay) y recibirlas rápido y seguro en Colón, Panamá.',
  openGraph: {
    title: 'Cómo traer repuestos de auto desde USA a Panamá | MBE Colón',
    description: 'Guía paso a paso para comprar piezas de carro en USA y recibirlas rápido y seguro en Colón, Panamá.',
    url: 'https://mbecolon.com/blog/traer-repuestos-auto-usa-panama',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cómo traer repuestos de auto desde USA a Colón, Panamá',
  description: 'Guía paso a paso para comprar piezas de carro en USA y recibirlas rápido y seguro en Colón, Panamá.',
  datePublished: '2026-06-30',
  dateModified: '2026-06-30',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/traer-repuestos-auto-usa-panama`,
  image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=630&fit=crop',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Repuestos de Auto USA', item: `${BASE_URL}/blog/traer-repuestos-auto-usa-panama` },
  ],
}

export default function BlogRepuestosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
        <span>›</span>
        <span className="text-mbe-dark font-medium">Repuestos desde USA</span>
      </nav>

      {/* Badge */}
      <div className="mb-4">
        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Casillero</span>
      </div>

      <h1 className="text-mbe-dark text-4xl md:text-5xl font-black mb-6 leading-tight">
        Cómo traer repuestos de auto desde USA a Panamá
      </h1>
      <p className="text-gray-500 mb-8">
        Actualizado: 30 de Junio, 2026 | Tiempo de lectura: 4 min
      </p>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=630&fit=crop"
          alt="Mecánico instalando repuestos de auto importados desde USA a Panamá"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="prose prose-lg prose-red max-w-none text-gray-700">
        <p>
          Encontrar la pieza exacta para tu auto en Panamá a veces puede ser una misión imposible o terminar costando el triple que en el extranjero. Por eso, miles de panameños prefieren <strong>comprar repuestos de carro en Estados Unidos</strong> y traerlos utilizando un casillero en Miami.
        </p>
        
        <p>
          En <strong>Mail Boxes Etc. Colón</strong>, recibimos a diario desde simples bujías hasta motores completos. En esta guía te explicaremos cómo puedes hacerlo tú mismo, de forma fácil, segura y económica.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Por qué comprar repuestos de auto en Estados Unidos?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Disponibilidad:</strong> Encuentras piezas específicas que no llegan al mercado local.</li>
          <li><strong>Precios:</strong> Aún sumando el flete, muchas veces sale más barato que comprar en las agencias locales.</li>
          <li><strong>Calidad:</strong> Puedes elegir entre repuestos originales (OEM) o marcas genéricas (aftermarket) certificadas.</li>
        </ul>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Mejores páginas para comprar piezas de carro</h2>
        <p>
          Para usar tu casillero en Miami, primero necesitas comprar la pieza. Estas son las tres plataformas favoritas de nuestros clientes:
        </p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-6">
          <ul className="space-y-4">
            <li>
              <strong className="text-mbe-dark">1. RockAuto:</strong> Es el paraíso de los mecánicos. Su interfaz parece de los años 90, pero tienen el catálogo más completo y preciso del mundo, con precios imbatibles.
            </li>
            <li>
              <strong className="text-mbe-dark">2. Amazon (Automotive):</strong> La option más fácil. Si usas la función "Amazon Garage", solo tienes que ingresar el año, marca y modelo de tu auto y Amazon filtrará automáticamente las piezas compatibles.
            </li>
            <li>
              <strong className="text-mbe-dark">3. eBay Motors:</strong> Excelente para encontrar piezas usadas, descontinuadas o repuestos raros. Asegúrate siempre de comprar a vendedores con buena reputación.
            </li>
          </ul>
        </div>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Envíos aéreos o carga marítima?</h2>
        <p>
          Aquí está el secreto para ahorrar dinero: <strong>elegir el flete correcto</strong>.
        </p>
        <p>
          Si compras piezas pequeñas, livianas o urgentes (como sensores, faros, espejos o bujías), te recomendamos usar nuestro <strong>servicio aéreo estándar</strong>. Llega a Colón en 24-48 horas.
        </p>
        <p>
          Pero si necesitas traer <strong>motores, transmisiones, llantas, o piezas de carrocería (bumpers, capós)</strong>, el servicio aéreo sería muy costoso por el peso y el volumen. Para estos casos, en MBE Colón ofrecemos el servicio de <strong>Carga Marítima</strong>. Tarda un poco más, pero el costo por libra o volumen disminuye drásticamente.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Pasos para usar tu casillero MBE Colón</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-8">
          <li><strong>Abre tu casillero:</strong> Es gratis. Te daremos una dirección física en Miami a tu nombre.</li>
          <li><strong>Compra online:</strong> Al hacer el checkout en RockAuto, Amazon o eBay, pon la dirección de Miami que te dimos como tu dirección de envío (Shipping Address).</li>
          <li><strong>Pre-alerta tu compra:</strong> Envíanos la factura comercial para agilizar los procesos logísticos.</li>
          <li><strong>Recibe en Colón:</strong> Te escribiremos por WhatsApp apenas tu repuesto llegue a Plaza Millenium listo para instalar.</li>
        </ol>

        {/* CTA */}
        <div className="bg-mbe-dark rounded-2xl p-8 mt-12 text-center text-white shadow-xl">
          <h3 className="font-black text-2xl mb-3">¿Tu carro está en el taller?</h3>
          <p className="mb-6 opacity-90">Abre tu casillero gratis hoy y trae ese repuesto que te falta con la seguridad de Mail Boxes Etc.</p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors shadow-lg"
          >
            Abre tu Casillero Gratis →
          </a>
        </div>

      </div>
      </article>
    </>
  )
}
