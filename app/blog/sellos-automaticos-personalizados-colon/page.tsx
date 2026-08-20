import Link from 'next/link'

export const metadata = {
  title: 'Sellos Automáticos Personalizados para Empresas en Colón, Panamá | MBE Colón',
  description: '¿Dónde hacer sellos automáticos en Colón, Panamá? Sellos para abogados, médicos y empresas. Modelos Trodat y Colop, entrega en 24-48 horas. MBE.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/sellos-automaticos-personalizados-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sellos Automáticos Personalizados para Empresas en Colón, Panamá',
  description: 'Fabrica tu sello automático personalizado en Colón, Panamá. Sellos para abogados, médicos y empresas con entrega en 24-48h. Modelos Trodat y Colop. Plaza Millenium F007.',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/sellos-automaticos-personalizados-colon`,
  image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Sellos automáticos en Colón', item: `${BASE_URL}/blog/sellos-automaticos-personalizados-colon` },
  ],
}

export default function BlogSellos() {
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
          <span className="text-mbe-dark font-medium">Sellos automáticos en Colón</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Dónde hacer sellos automáticos personalizados en Colón, Panamá?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía completa para empresas, abogados y profesionales en la provincia de Colón
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si buscas <strong>sellos automáticos personalizados en Colón</strong>, en MBE Colón fabricamos sellos de alta calidad con tu nombre, logo, empresa y datos en 24 a 48 horas hábiles. Atendemos a abogados, médicos, contadores, arquitectos y todo tipo de empresa en <strong>Panamá</strong>.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Dónde hacer sellos para abogados y empresas en Colón, Panamá?</h2>
          <p>
            En <strong>Plaza Millenium F007, Colón</strong>, ofrecemos el servicio de fabricación de <strong>sellos automáticos Colón</strong> más completo de la provincia. Trabajamos con las marcas más reconocidas del mercado:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Trodat</strong> — sellos de bolsillo y escritorio, recarga de tinta incluida</li>
            <li><strong>Colop</strong> — sellos compactos y de alta precisión para uso profesional</li>
            <li><strong>Fechadores y numeradores</strong> — ideales para contabilidad y archivo</li>
            <li><strong>Sellos de goma con soporte</strong> — para uso ocasional y documentos especiales</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Cómo pedir tu sello personalizado en Colón?</h2>
          <p>El proceso es simple y rápido:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>Visítanos o escríbenos por WhatsApp con el texto o logo para tu <strong>sello personalizado Panamá</strong></li>
            <li>Te enviamos una prueba digital para aprobar el diseño antes de fabricar</li>
            <li>Fabricamos tu sello en <strong>24 a 48 horas hábiles</strong> en Colón</li>
            <li>Retíralo en <strong>Plaza Millenium F007</strong> o coordina entrega a domicilio</li>
          </ol>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Para qué usan los sellos automáticos las empresas en Panamá?</h2>
          <p>
            Los <strong>sellos automáticos para empresas en Panamá</strong> tienen múltiples usos en el día a día corporativo:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Firmas y rúbricas</strong> — para abogados, notarios y profesionales liberales en Colón</li>
            <li><strong>Sellos de “Recibido”, “Pagado” o “Confidencial”</strong> — en empresas de la Zona Libre de Colón</li>
            <li><strong>Membrete de empresa</strong> — con razón social, RUC y datos fiscales</li>
            <li><strong>Carnets PVC y credenciales</strong> — con sello de validación institucional</li>
            <li><strong>Documentos médicos y recetas</strong> — para médicos y clínicas en la provincia de Colón</li>
          </ul>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para empresas en Colón y la Zona Libre</p>
            <p className="text-gray-600 text-sm">
              Un <strong>sello automático personalizado</strong> proyecta profesionalismo y agiliza los procesos documentales. Si tienes varias sucursales o necesitas sellos para todo tu equipo en <strong>Colón, Panamá</strong>, pregúntanos por descuentos en pedidos múltiples. En <strong>Plaza Millenium F007</strong> también fabricamos carnets PVC con fotografía y datos de empleado.
            </p>
          </div>

          <p>
            La tinta de los sellos automáticos dura <strong>miles de impresiones</strong> y el repuesto de tinta también está disponible en nuestra tienda en <strong>Colón</strong>. No tendrás que preocuparte por quedarte sin tinta en el momento menos oportuno.
          </p>

        </div>

        <div className="bg-red-50 border-l-4 border-mbe-red p-6 mt-8 rounded-r-lg">
          <p className="text-mbe-dark font-medium m-0">
            ¿Necesitas sellos para toda tu empresa o sucursales? Ofrecemos <strong>precios especiales para pedidos corporativos</strong>.{' '}
            <Link href="/servicios/sellos" className="text-mbe-red font-bold hover:underline">
              Cotiza tus sellos automáticos personalizados aquí
            </Link>
          </p>
        </div>
        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para pedir tu sello en Colón?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos y cotizamos en minutos.</p>
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
