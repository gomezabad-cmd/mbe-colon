import Link from 'next/link'

export const metadata = {
  title: 'Carnets PVC personalizados para empresas en Colón, Panamá | MBE Colón',
  description: 'Carnets PVC personalizados para empresas en Colón, Panamá. Identificación de empleados, código de barras y diseño a color. Plaza Millenium F007.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Carnets PVC personalizados para empresas en Colón, Panamá',
  description: 'Carnets PVC personalizados para empresas en Colón, Panamá. Identificación de empleados, código de barras y diseño a color. Plaza Millenium F007.',
  datePublished: '2026-07-08',
  dateModified: '2026-07-08',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/carnets-pvc-personalizados-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Carnets PVC empresas', item: `${BASE_URL}/blog/carnets-pvc-personalizados-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Carnets PVC empresas</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Carnets PVC personalizados para empresas en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Identificación profesional para tu equipo de trabajo
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa necesita <strong>carnets PVC Colón</strong> para identificar a sus colaboradores, estás en el lugar correcto.
            En MBE Colón imprimimos <strong>carnets personalizados Colón</strong> con diseño a color, logo de tu empresa y acabado
            profesional, listos para empresas y PYMEs de toda la provincia de Colón, Panamá.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            ¿Dónde hacer carnets PVC para empleados en Colón, Panamá?
          </h2>
          <p>
            Muchas empresas en Colón, Panamá pierden tiempo buscando proveedores confiables para su <strong>identidad corporativa Panamá</strong>.
            En MBE Colón centralizamos este servicio junto con sellos, impresión y logística, para que no tengas que visitar
            varios proveedores. Solo envíanos el logo, los datos del colaborador y una foto, y nosotros diseñamos e imprimimos
            el carnet en material PVC resistente al agua y al desgaste diario.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Diseño a color</strong> — logo, foto y datos del empleado con acabado profesional</li>
            <li><strong>Código de barras o QR</strong> — ideal para control de acceso y asistencia</li>
            <li><strong>Material PVC duradero</strong> — resistente al uso diario y a la humedad</li>
            <li><strong>Entrega rápida</strong> — carnets listos en 24-48 horas en Colón</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Carnets de identificación para empresas en Colón, Panamá
          </h2>
          <p>
            Ya sea que necesites carnets para un equipo pequeño o para toda la nómina de tu empresa en la Zona Libre de Colón,
            adaptamos la cantidad y el diseño a tu presupuesto. Este servicio complementa nuestra línea de <strong>sellos automáticos Colón</strong>,
            pensada para que tu empresa proyecte una imagen profesional en Colón y en el resto de Panamá.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu empresa</p>
            <p className="text-gray-600 text-sm">
              Aprovecha tu visita a Plaza Millenium F007 en Colón para cotizar carnets PVC junto con sellos automáticos
              y bordados corporativos, y así unificar la identidad de tu empresa en una sola entrega.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Identifica a tu equipo con carnets profesionales</h3>
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
