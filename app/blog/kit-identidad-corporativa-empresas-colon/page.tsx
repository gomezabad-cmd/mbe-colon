import Link from 'next/link'

export const metadata = {
  title: 'Kit de Identidad Corporativa para Nuevas Empresas en Colón, Panamá | MBE Colón',
  description: 'Kit de identidad corporativa en Colón, Panamá: sellos automáticos, carnets PVC y papelería membretada para tu nueva empresa. Plaza Millenium F007.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kit de Identidad Corporativa para Nuevas Empresas en Colón, Panamá',
  description: 'Arma el kit de identidad corporativa de tu nueva empresa en Colón, Panamá: sellos automáticos, carnets PVC y papelería membretada en un solo lugar.',
  datePublished: '2026-07-27',
  dateModified: '2026-07-27',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/kit-identidad-corporativa-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Kit identidad corporativa', item: `${BASE_URL}/blog/kit-identidad-corporativa-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Kit identidad corporativa</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Kit de identidad corporativa para nuevas empresas en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Sellos automáticos, carnets PVC y papelería para empresas que recién abren en Colón
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Cada semana abren nuevas empresas en la <strong>Zona Libre de Colón</strong> y en el resto de la provincia, y todas necesitan lo mismo el primer día: <strong>sellos automáticos Colón</strong>, carnets de empleado y papelería con membrete. En MBE Colón armamos ese kit completo en un solo lugar, sin que tengas que recorrer tres proveedores distintos en <strong>Panamá</strong>.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde hacer sellos automáticos personalizados en Colón, Panamá para tu nueva empresa</h2>
          <p>
            Si tu empresa acaba de constituirse, necesitas un <strong>sello personalizado Panamá</strong> con razón social, RUC y representante legal antes de firmar tu primer contrato o abrir tu cuenta bancaria. Trabajamos con Trodat y Colop, y tu sello queda listo en 24 a 48 horas.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Sello de razón social</strong> — para contratos, facturas y trámites bancarios</li>
            <li><strong>Sello de representante legal</strong> — firma y cargo del apoderado</li>
            <li><strong>Fechador o numerador</strong> — para llevar control de correspondencia y contabilidad</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sellos para abogados y empresas en Colón: el resto del kit</h2>
          <p>
            Además de los <strong>sellos automáticos personalizados en Colón</strong>, tu empresa también necesita identificar a su equipo y presentarse con documentos profesionales. Por eso el kit incluye:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Carnets PVC</strong> con foto, logo y código de barras para cada empleado</li>
            <li><strong>Papelería membretada</strong> — hojas, sobres y facturas con tu identidad de marca</li>
            <li><strong>Tarjetas de presentación</strong> para el equipo comercial</li>
          </ul>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para empresas que abren en Colón</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en formato digital (PDF o AI de preferencia) el día que visites <strong>Plaza Millenium F007</strong> y te entregamos una prueba de sello y carnet antes de fabricar, así apruebas todo en la misma cita. Empresas de la <strong>Zona Libre de Colón</strong> con varias sucursales reciben precio especial por volumen.
            </p>
          </div>

          <p>
            Tener sellos, carnets y papelería listos desde el primer día evita retrasos en trámites y proyecta seriedad frente a bancos, proveedores y clientes en <strong>Colón</strong>. Todo se fabrica localmente, así que no dependes de envíos desde Panamá capital ni del extranjero.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Vas a abrir tu empresa en Colón?</h3>
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
