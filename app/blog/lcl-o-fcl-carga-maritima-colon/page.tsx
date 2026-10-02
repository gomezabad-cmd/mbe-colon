import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Carga Marítima Panamá: ¿LCL o FCL? | MBE Colón',
  description: 'Carga marítima Panamá: compara contenedor completo (FCL) y carga consolidada (LCL) para tu empresa en Colón. Tránsito de 5 a 10 días, seguro desde 1%.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/lcl-o-fcl-carga-maritima-colon',
  },
  openGraph: {
    title: 'Carga Marítima Panamá: ¿LCL o FCL? | MBE Colón',
    description: 'Carga marítima Panamá: compara contenedor completo (FCL) y carga consolidada (LCL) para tu empresa en Colón. Tránsito de 5 a 10 días, seguro desde 1%.',
    url: 'https://mbecolon.com/blog/lcl-o-fcl-carga-maritima-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://mbecolon.com/images/blog/photo-1590496793907-4d66e2994b4d.jpg', width: 1200, height: 630, alt: 'Buque portacontenedores siendo cargado en puerto para carga marítima Panamá, Colón' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Carga Marítima Panamá: Contenedor Completo (FCL) o Consolidado (LCL) en Colón',
  description: 'Carga marítima Panamá: compara contenedor completo (FCL) y carga consolidada (LCL) para tu empresa en Colón. Tránsito de 5 a 10 días, seguro desde 1%.',
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
  author: {
    '@type': 'Person',
    name: 'Carlos Gómez',
    jobTitle: 'Franquiciado de MBE Colón',
    url: 'https://mbecolon.com/nosotros',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
    sameAs: ['https://www.linkedin.com/in/carlos-gomez-ab217930/', 'https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/lcl-o-fcl-carga-maritima-colon`,
  image: 'https://mbecolon.com/images/blog/photo-1590496793907-4d66e2994b4d.jpg',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Carga Marítima: LCL o FCL', item: `${BASE_URL}/blog/lcl-o-fcl-carga-maritima-colon` },
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
          <span className="text-mbe-dark font-medium">Carga Marítima: LCL o FCL</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Logística</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Carga Marítima Panamá: Contenedor Completo (FCL) o Consolidado (LCL) en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6 flex items-center gap-3">
          <Image src="/images/carlos-gomez.jpg" alt="Carlos Gómez, Franquiciado de MBE Colón" width={44} height={44} className="w-11 h-11 rounded-full object-cover shrink-0" />
          Por <strong className="text-mbe-dark">Carlos Gómez</strong> · Franquiciado de MBE Colón · Logística marítima para empresas de Colón y la Zona Libre
        </p>
        <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
          En carga marítima Panamá, el contenedor completo (FCL) conviene cuando tu empresa en Colón importa volumen suficiente para llenarlo; la carga consolidada (LCL) conviene cuando compartes espacio con otras cargas y pagas solo lo que usas. Ambas viajan de 5 a 10 días hábiles en la ruta Miami-Colón, con seguro de carga opcional desde 1% del valor, y MBE Colón gestiona todo desde Plaza Millenium F007.
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Elegir mal entre <strong>carga marítima Panamá</strong> en contenedor completo o consolidado es uno de los
            errores que más encarece la <strong>importación Colón</strong> de una PYME. No es solo una cuestión de
            precio por contenedor: depende del volumen real que mueves, la frecuencia con la que importas y cuánto
            puedes esperar sin quedarte sin inventario.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicios de logística para empresas en Zona Libre de Colón</h2>
          <p>
            MBE Colón ofrece <strong>servicios de logística para empresas en Zona Libre de Colón</strong> con dos
            modalidades de carga marítima: contenedor completo (FCL, Full Container Load) y carga consolidada (LCL,
            Less than Container Load). En ambas trabajamos las rutas Miami-Colón, China-Panamá y Ecuador-Panamá, con
            gestión completa de recogida, documentación de exportación, desaduanización y entrega hasta tu bodega en
            Colón.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Contenedor completo (FCL)</strong> — todo el espacio es tuyo; conviene cuando el volumen de tu importación llena o casi llena un contenedor</li>
            <li><strong>Carga consolidada (LCL)</strong> — compartes el contenedor con otras cargas y pagas solo el espacio que ocupas; ideal para volúmenes medianos o pequeños</li>
            <li><strong>Tiempo de tránsito</strong> — de 5 a 10 días hábiles en la ruta Miami-Colón, la más solicitada por empresas de la Zona Libre</li>
            <li><strong>Seguro de carga</strong> — opcional pero recomendado, cubre pérdida total o daño parcial desde 1% a 2% del valor de la mercancía</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Carga marítima Miami Panamá para empresas: ¿cómo elegir?</h2>
          <p>
            Si tu empresa en Colón importa con regularidad y el volumen mensual se acerca al de un contenedor
            completo, el FCL te da tarifas preferenciales por volumen y control total del espacio. Si en cambio
            importas cargas medianas o estás probando un nuevo proveedor, la carga consolidada reduce el riesgo:
            no pagas por espacio vacío y puedes aumentar la frecuencia de tus embarques sin comprometer capital de
            trabajo en un contenedor a medio llenar.
          </p>
          <p>
            Para la <strong>logística Colón</strong> de operadores de la Zona Libre, lo habitual es combinar ambas
            modalidades según temporada: LCL en meses de menor demanda y FCL cuando el volumen de pedidos lo
            justifica. Nosotros revisamos tu historial de importación y te recomendamos la mejor opción de carga
            marítima para tu empresa en Colón, Panamá antes de cada embarque.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu próxima importación</p>
            <p className="text-gray-600 text-sm">
              Antes de reservar espacio, calcula el volumen real de tu mercancía en pies cúbicos. Si no llega al 70%
              de un contenedor de 20 pies, la carga consolidada casi siempre sale más rentable. Pasa por Plaza
              Millenium F007, Colón, y te ayudamos a calcularlo.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para tu próxima importación?</h3>
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
