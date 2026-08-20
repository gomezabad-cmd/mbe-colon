import Link from 'next/link'

export const metadata = {
  title: 'Sellos para Notarías y Bufetes de Abogados en Colón, Panamá | MBE Colón',
  description: 'Sellos automáticos para notarías y bufetes de abogados en Colón, Panamá: sello de idóneo, notarial y de constancia. Entrega en 24-48h. Plaza Millenium F007.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sellos para Notarías y Bufetes de Abogados en Colón, Panamá',
  description: 'Sellos automáticos para notarías y bufetes de abogados en Colón, Panamá: sello de idóneo, notarial y de constancia. Entrega en 24-48h en Plaza Millenium F007.',
  datePublished: '2026-08-14',
  dateModified: '2026-08-14',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/sellos-notarias-bufetes-abogados-colon`,
  image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Sellos para notarías y abogados', item: `${BASE_URL}/blog/sellos-notarias-bufetes-abogados-colon` },
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
          <span className="text-mbe-dark font-medium">Sellos para notarías y abogados</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Sellos para notarías y bufetes de abogados en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Sello de idóneo, sello notarial y sellos de constancia para el sector legal
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Notarías y bufetes en <strong>Colón, Panamá</strong> trabajan contra el reloj: escrituras que firmar, poderes que legalizar, audiencias con hora fija. Un <strong>sello automático personalizado en Colón</strong> mal hecho o entregado tarde puede retrasar un trámite completo. En MBE Colón fabricamos sellos para el sector legal con la precisión y rapidez que ese trabajo exige.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde hacer sellos automáticos personalizados en Colón, Panamá para tu notaría</h2>
          <p>
            Cada notaría y firma de abogados en <strong>Panamá</strong> tiene requisitos específicos de formato. En <strong>Plaza Millenium F007, Colón</strong>, fabricamos el set completo que exige el ejercicio notarial y legal:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Sello de idóneo</strong> — nombre completo, número de idoneidad y firma del abogado</li>
            <li><strong>Sello notarial</strong> — con el número de notaría y circuito correspondiente</li>
            <li><strong>Sello de “copia fiel” o “es fiel copia de su original”</strong> — para certificación de documentos</li>
            <li><strong>Sello de recibido con fecha</strong> — para control de expedientes y correspondencia</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sellos para abogados y empresas en Colón con entrega urgente</h2>
          <p>
            Sabemos que en el sector legal los tiempos no siempre dan margen. Por eso, si tienes una audiencia o firma programada en <strong>Colón</strong> y necesitas tu sello con urgencia, dinos la fecha límite al hacer el pedido y priorizamos la fabricación dentro de las <strong>24 a 48 horas hábiles</strong> habituales.
          </p>
          <p>
            También trabajamos con Trodat y Colop, marcas reconocidas por su durabilidad, así tu <strong>sello personalizado Panamá</strong> resiste el uso diario de una notaría sin perder nitidez en la impresión.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para notarías y bufetes en Colón</p>
            <p className="text-gray-600 text-sm">
              Si tu notaría tiene más de un abogado idóneo trabajando, pide un sello individual por cada uno con su propio número de idoneidad — evita confusiones al certificar documentos. En <strong>Plaza Millenium F007</strong> también fabricamos carnets PVC de identificación para el personal de tu firma.
            </p>
          </div>

          <p>
            Un sello institucional bien hecho, con letra clara y datos correctos, evita observaciones y devoluciones de documentos en trámites judiciales y registrales. Trabajamos con notarías y bufetes de toda la provincia de <strong>Colón</strong> desde nuestra tienda local, sin depender de envíos desde Panamá capital.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas sellos para tu notaría o bufete?</h3>
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
