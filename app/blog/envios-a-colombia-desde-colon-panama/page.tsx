import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Envíos a Colombia desde Colón: DHL, FedEx, UPS | MBE Colón',
  description: 'Envíos a Colombia desde Colón, Panamá con DHL, FedEx o UPS: entrega en 1 a 5 días y paquetes de 1 kg a Bogotá desde $35. Cotiza en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/envios-a-colombia-desde-colon-panama',
  },
  openGraph: {
    title: 'Envíos a Colombia desde Colón: DHL, FedEx, UPS | MBE Colón',
    description: 'Envíos a Colombia desde Colón, Panamá con DHL, FedEx o UPS: entrega en 1 a 5 días y paquetes de 1 kg a Bogotá desde $35. Cotiza en Plaza Millenium F007.',
    url: 'https://mbecolon.com/blog/envios-a-colombia-desde-colon-panama',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://mbecolon.com/images/blog/photo-1758351507026-71ad3645cb43.jpg', width: 1200, height: 630, alt: 'Caja sellada con cinta frágil lista para envíos a Colombia desde Colón, Panamá' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Envíos a Colombia desde Colón, Panamá: Cómo Enviar Paquetes con DHL, FedEx o UPS',
  description: 'Envíos a Colombia desde Colón, Panamá con DHL, FedEx o UPS: entrega en 1 a 5 días y paquetes de 1 kg a Bogotá desde $35. Cotiza en Plaza Millenium F007.',
  datePublished: '2026-10-16',
  dateModified: '2026-10-16',
  author: {
    '@type': 'Person',
    name: 'Carlos Gómez',
    jobTitle: 'Franquiciado de MBE Colón',
    url: 'https://mbecolon.com/nosotros',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
    sameAs: ['https://www.linkedin.com/in/carlos-gomez-ab217930/', 'https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/envios-a-colombia-desde-colon-panama`,
  image: 'https://mbecolon.com/images/blog/photo-1758351507026-71ad3645cb43.jpg',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Envíos a Colombia', item: `${BASE_URL}/blog/envios-a-colombia-desde-colon-panama` },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-mbe-dark font-medium">Envíos a Colombia</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Envíos a Colombia desde Colón, Panamá: Cómo Enviar Paquetes con DHL, FedEx o UPS
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6 flex items-center gap-3">
          <Image src="/images/carlos-gomez.jpg" alt="Carlos Gómez, Franquiciado de MBE Colón" width={44} height={44} className="w-11 h-11 rounded-full object-cover shrink-0" />
          Por <strong className="text-mbe-dark">Carlos Gómez</strong> · Franquiciado de MBE Colón · Courier Panamá para paquetes y documentos hacia Colombia
        </p>
        <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
          Los envíos a Colombia desde Colón, Panamá se despachan con DHL, FedEx o UPS y llegan en 1 a 5 días hábiles según el servicio. Un paquete de 1 kg a Bogotá con DHL Express cuesta desde $35 y lo cotizas al instante en Plaza Millenium F007.
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Colombia es uno de los destinos más frecuentes de nuestros clientes: familiares, comercios y empresas de la
            Zona Libre que despachan mercancía. Con los <strong>envíos a Colombia desde Colón</strong> en MBE no tienes
            que viajar a la ciudad de Panamá: dejas tu paquete en Colón y nosotros lo gestionamos como agentes
            autorizados de <strong>DHL Colón</strong>, FedEx y UPS.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo enviar paquetes a Colombia desde Colón, Panamá</h2>
          <p>El proceso es corto y se resuelve en una sola visita o por WhatsApp:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Trae tu paquete</strong> — lo pesamos y medimos para cotizar las tres opciones al instante</li>
            <li><strong>Elige el servicio</strong> — según precio y velocidad; si lo necesitas, lo embalamos profesionalmente</li>
            <li><strong>Recibe tu guía por WhatsApp</strong> — con ella rastreas el envío hasta la puerta del destinatario</li>
          </ul>
          <p>
            Cubrimos Bogotá, Medellín, Cali, Barranquilla, Cartagena y ciudades intermedias. Estos son los
            <strong> envíos internacionales Colón</strong> más pedidos, y la cobertura básica ya viene incluida.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Mejor courier para envíos a Colombia desde Colón</h2>
          <p>Los tiempos se cuentan desde que recibimos el paquete en nuestra oficina:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>DHL Express</strong> — 1 a 2 días hábiles, la opción más rápida</li>
            <li><strong>FedEx International Priority</strong> — 2 a 3 días hábiles</li>
            <li><strong>UPS Worldwide Expedited</strong> — 2 a 5 días hábiles, con rastreo</li>
          </ul>
          <p>
            Si es urgente, elige DHL. Si puedes esperar un par de días, pídenos la comparación de los tres: así
            escoges el courier según tu presupuesto y no según la costumbre.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Qué necesitas para enviar a Colombia</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Envío personal</strong> — descripción del contenido y datos completos del destinatario</li>
            <li><strong>Envío comercial</strong> — factura comercial y lista de empaque</li>
            <li><strong>No se aceptan</strong> — armas, explosivos, dinero en efectivo ni perecederos sin empaque especial</li>
          </ul>
          <p>
            La documentación aduanera la gestionamos nosotros, así que tu envío no se queda detenido por un
            formulario mal llenado.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu envío</p>
            <p className="text-gray-600 text-sm">
              Anota nombre, teléfono y dirección completa del destinatario en Colombia antes de venir a Plaza
              Millenium F007, Colón. Con esos datos y el paquete listo, la cotización y la guía salen en minutos.
              Para valores altos, consulta el seguro adicional.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Tienes un paquete para Colombia?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos ahora.</p>
          <a
            href="https://wa.me/50769495100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            💬 Escribir al WhatsApp →
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">← Volver al blog</Link>
        </div>

      </article>
    </>
  )
}
