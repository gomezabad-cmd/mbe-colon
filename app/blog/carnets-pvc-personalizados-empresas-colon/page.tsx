import Link from 'next/link'

export const metadata = {
  title: 'Carnets PVC personalizados para empresas en ColÃ³n, PanamÃ¡ | MBE ColÃ³n',
  description: 'Carnets PVC personalizados para empresas en ColÃ³n, PanamÃ¡. IdentificaciÃ³n de empleados, cÃ³digo de barras y diseÃ±o a color. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/carnets-pvc-personalizados-empresas-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Carnets PVC personalizados para empresas en ColÃ³n, PanamÃ¡',
  description: 'Carnets PVC personalizados para empresas en ColÃ³n, PanamÃ¡. IdentificaciÃ³n de empleados, cÃ³digo de barras y diseÃ±o a color. Plaza Millenium F007.',
  datePublished: '2026-07-08',
  dateModified: '2026-07-08',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
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
          <span>â€º</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>â€º</span>
          <span className="text-mbe-dark font-medium">Carnets PVC empresas</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Carnets PVC personalizados para empresas en ColÃ³n, PanamÃ¡
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· IdentificaciÃ³n profesional para tu equipo de trabajo
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa necesita <strong>carnets PVC ColÃ³n</strong> para identificar a sus colaboradores, estÃ¡s en el lugar correcto.
            En MBE ColÃ³n imprimimos <strong>carnets personalizados ColÃ³n</strong> con diseÃ±o a color, logo de tu empresa y acabado
            profesional, listos para empresas y PYMEs de toda la provincia de ColÃ³n, PanamÃ¡.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Â¿DÃ³nde hacer carnets PVC para empleados en ColÃ³n, PanamÃ¡?
          </h2>
          <p>
            Muchas empresas en ColÃ³n, PanamÃ¡ pierden tiempo buscando proveedores confiables para su <strong>identidad corporativa PanamÃ¡</strong>.
            En MBE ColÃ³n centralizamos este servicio junto con sellos, impresiÃ³n y logÃ­stica, para que no tengas que visitar
            varios proveedores. Solo envÃ­anos el logo, los datos del colaborador y una foto, y nosotros diseÃ±amos e imprimimos
            el carnet en material PVC resistente al agua y al desgaste diario.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>DiseÃ±o a color</strong> â€” logo, foto y datos del empleado con acabado profesional</li>
            <li><strong>CÃ³digo de barras o QR</strong> â€” ideal para control de acceso y asistencia</li>
            <li><strong>Material PVC duradero</strong> â€” resistente al uso diario y a la humedad</li>
            <li><strong>Entrega rÃ¡pida</strong> â€” carnets listos en 24-48 horas en ColÃ³n</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Carnets de identificaciÃ³n para empresas en ColÃ³n, PanamÃ¡
          </h2>
          <p>
            Ya sea que necesites carnets para un equipo pequeÃ±o o para toda la nÃ³mina de tu empresa en la Zona Libre de ColÃ³n,
            adaptamos la cantidad y el diseÃ±o a tu presupuesto. Este servicio complementa nuestra lÃ­nea de <strong>sellos automÃ¡ticos ColÃ³n</strong>,
            pensada para que tu empresa proyecte una imagen profesional en ColÃ³n y en el resto de PanamÃ¡.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Tip para tu empresa</p>
            <p className="text-gray-600 text-sm">
              Aprovecha tu visita a Plaza Millenium F007 en ColÃ³n para cotizar carnets PVC junto con sellos automÃ¡ticos
              y bordados corporativos, y asÃ­ unificar la identidad de tu empresa en una sola entrega.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Identifica a tu equipo con carnets profesionales</h3>
          <p className="text-gray-400 text-sm mb-6">VisÃ­tanos en Plaza Millenium F007, ColÃ³n â€” o escrÃ­benos ahora.</p>
          <a
            href="https://wa.me/50769495100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            ðŸ’¬ Escribir al WhatsApp â†’
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">â† Volver al blog</Link>
        </div>

      </article>
    </>
  )
}
