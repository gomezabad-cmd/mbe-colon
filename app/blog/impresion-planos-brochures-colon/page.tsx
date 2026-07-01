import Link from 'next/link'

export const metadata = {
  title: 'Impresión de planos, brochures y banners en Colón, Panamá | MBE Colón',
  description: 'Impresión profesional en Colón: planos arquitectónicos, brochures corporativos y banners para empresas. Calidad garantizada y entrega rápida. MBE Colón.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Impresión de planos, brochures y banners en Colón, Panamá | MBE Colón',
  description: '¿Buscas impresión de planos arquitectónicos, brochures o banners en Colón? En MBE Colón, Plaza Millenium F007, imprimimos con calidad profesional y entrega rápida.',
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/impresion-planos-brochures-colon`,
  image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Impresión en Colón', item: `${BASE_URL}/blog/impresion-planos-brochures-colon` },
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
          <span className="text-mbe-dark font-medium">Impresión en Colón</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Impresión</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Impresión profesional en Colón: planos arquitectónicos, brochures y banners para tu empresa
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Centro de impresión en Plaza Millenium F007, Colón, Panamá
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa, estudio de arquitectura o negocio en <strong>Colón</strong> necesita material impreso de calidad,
            en <strong>Mail Boxes Etc. Colón</strong> encontrarás el servicio de <strong>impresión en Colón</strong> que buscabas.
            Desde planos en gran formato hasta brochures corporativos y banners para eventos — todo bajo un mismo techo,
            con entrega rápida y precios competitivos.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Dónde imprimir planos arquitectónicos en Colón, Panamá?</h2>
          <p>
            Arquitectos, ingenieros y constructoras de <strong>Colón</strong> saben que encontrar un servicio confiable de
            <strong> impresión de planos arquitectónicos en Colón Panamá</strong> es clave para cumplir plazos de obra y licitaciones.
            En MBE imprimimos planos de gran formato con alta resolución y trazos nítidos, perfectos para proyectos de construcción,
            permisos municipales y presentaciones ante clientes.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Gran formato A1, A0 y medidas personalizadas</strong> — adaptamos el tamaño a tu proyecto</li>
            <li><strong>Alta resolución garantizada</strong> — sin pérdida de detalle en líneas técnicas ni cotas</li>
            <li><strong>Entrega express</strong> — en horas, no días; ideal para emergencias de obra</li>
            <li><strong>Papel técnico y bond disponible</strong> — según el uso: archivo, presentación o campo</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Impresión de brochures y material corporativo para empresas en Colón</h2>
          <p>
            El material impreso profesional sigue siendo una de las herramientas de marketing más efectivas para empresas
            en <strong>Colón</strong> y la <strong>Zona Libre de Colón</strong>. En MBE ofrecemos:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Brochures tri-fold y bi-fold</strong> — acabado mate o brillante, full color</li>
            <li><strong>Tarjetas de presentación</strong> — gramaje profesional, diseño a doble cara</li>
            <li><strong>Banners y roll-ups</strong> — retráctiles o en vinilo, para stands, ferias y eventos en Panamá</li>
            <li><strong>Flyers y afiches</strong> — para campañas, lanzamientos y promociones locales</li>
            <li><strong>Copias y escaneos</strong> — documentos legales, contratos y expedientes en Colón</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Por qué elegir MBE Colón para imprimir en Panamá?</h2>
          <p>
            La <strong>impresión en Colón</strong> es uno de los servicios más solicitados por negocios locales, estudios profesionales
            y empresas importadoras. En MBE nos diferenciamos por la combinación de rapidez, calidad y asesoría personalizada.
          </p>
          <p>
            Nuestro equipo te orienta sobre el mejor acabado para cada pieza: papel, laminado, tamaño y cantidad óptima según tu
            presupuesto. También ofrecemos <strong>embalaje profesional</strong> para proteger tu material impreso durante transporte,
            algo especialmente útil para empresas que distribuyen material en toda la provincia de <strong>Colón</strong>.
          </p>
          <p>
            Visítanos en <strong>Plaza Millenium F007, Colón</strong> — o consúltanos por WhatsApp y te enviamos cotización en minutos.
            Trabajamos con empresas, estudios, comercios y profesionales independientes en todo <strong>Panamá</strong>.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Consejo profesional</p>
            <p className="text-gray-600 text-sm">
              Para brochures de alta circulación, el acabado mate reduce el reflejo y mejora la legibilidad del texto.
              Pide una muestra antes de imprimir grandes volúmenes — en <strong>Plaza Millenium F007, Colón</strong> te la
              mostramos en el momento para que decidas con confianza.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para imprimir en Colón?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos ahora y te cotizamos al instante.</p>
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
