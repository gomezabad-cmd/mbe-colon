export default function BlogSection() {
  return (
    <section className="bg-mbe-light py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header con los dos logos seleccionados */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">

          {/* Logo #1 — Libro + Caja "MAIL BOXES ETC. INFORMA" */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 160 140" className="w-28 h-24" xmlns="http://www.w3.org/2000/svg">
              {/* Caja */}
              <path d="M30 80 L30 118 L130 118 L130 80 L80 68 Z" fill="#F5A623" stroke="#1D3C6E" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M30 80 L80 92 L130 80 L80 68 Z" fill="#F5A623" stroke="#1D3C6E" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M80 92 L80 118" stroke="#1D3C6E" strokeWidth="2.5"/>
              {/* Tapa abierta izquierda */}
              <path d="M30 80 L10 68 L60 56 L80 68" fill="#E8942A" stroke="#1D3C6E" strokeWidth="2.5" strokeLinejoin="round"/>
              {/* Tapa abierta derecha */}
              <path d="M130 80 L150 68 L100 56 L80 68" fill="#E8942A" stroke="#1D3C6E" strokeWidth="2.5" strokeLinejoin="round"/>
              {/* Libro */}
              <path d="M60 28 Q60 20 68 20 L92 20 Q100 20 100 28 L100 72 Q80 64 60 72 Z" fill="white" stroke="#1D3C6E" strokeWidth="2.5"/>
              <path d="M80 22 L80 70" stroke="#1D3C6E" strokeWidth="2"/>
              <path d="M68 30 L78 30M68 38 L78 38M68 46 L78 46" stroke="#1D3C6E" strokeWidth="1.5"/>
              <path d="M82 30 L92 30M82 38 L92 38M82 46 L92 46" stroke="#1D3C6E" strokeWidth="1.5"/>
              {/* Rayos */}
              <line x1="80" y1="14" x2="80" y2="8" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="70" y1="17" x2="66" y2="12" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="90" y1="17" x2="94" y2="12" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <p className="text-[#1D3C6E] font-black text-sm tracking-wide mt-1">MAIL BOXES ETC.</p>
            <p className="text-[#F5A623] font-black text-base tracking-wider">INFORMA</p>
          </div>

          {/* Separador */}
          <div className="hidden sm:block w-px h-16 bg-gray-300" />

          {/* Logo #4 — Sobre + Bombilla "EL BLOG INFORMATIVO" */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 160 140" className="w-28 h-24" xmlns="http://www.w3.org/2000/svg">
              {/* Sobre */}
              <path d="M20 55 L80 90 L140 55 L140 120 L20 120 Z" fill="#1D3C6E" stroke="#1D3C6E" strokeWidth="2"/>
              <path d="M20 55 L80 88 L140 55 L120 38 L40 38 Z" fill="#2A4F8A" stroke="#1D3C6E" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M20 55 L50 72M140 55 L110 72" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
              {/* Bombilla */}
              <circle cx="80" cy="28" r="16" fill="#F5A623" stroke="#1D3C6E" strokeWidth="2.5"/>
              <text x="80" y="34" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1D3C6E" fontFamily="serif" fontStyle="italic">i</text>
              {/* Rayos bombilla */}
              <line x1="80" y1="8" x2="80" y2="2" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="68" y1="12" x2="64" y2="7" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="92" y1="12" x2="96" y2="7" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="62" y1="24" x2="56" y2="22" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="98" y1="24" x2="104" y2="22" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Base bombilla */}
              <path d="M74 44 L86 44M75 48 L85 48" stroke="#1D3C6E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="text-[#1D3C6E] font-black text-sm tracking-wide mt-1">MAIL BOXES ETC.</p>
            <p className="text-[#F5A623] font-black text-base tracking-wider">EL BLOG INFORMATIVO</p>
          </div>
        </div>

        {/* Título de sección */}
        <div className="text-center mb-10">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            📰 Noticias y Consejos
          </div>
          <h2 className="text-mbe-dark text-3xl md:text-4xl font-black mb-4">
            MBE <span className="text-mbe-red">Informa</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Tips de envíos, novedades logísticas, guías de compras internacionales y todo lo que necesitas saber para importar mejor desde Colón.
          </p>
        </div>

        {/* Cards de blog — próximamente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              categoria: 'Envíos',
              titulo: '¿Cómo empacar correctamente tu paquete para envíos internacionales?',
              desc: 'Aprende las mejores técnicas de embalaje para proteger tus envíos con DHL, FedEx y UPS.',
              color: 'border-mbe-red',
              badge: 'bg-mbe-red',
            },
            {
              categoria: 'Casillero',
              titulo: 'Guía completa para comprar en Amazon y recibir en Colón',
              desc: 'Paso a paso: cómo usar tu casillero Miami MBE para traer tus compras de USA sin complicaciones.',
              color: 'border-mbe-blue',
              badge: 'bg-mbe-blue',
            },
            {
              categoria: 'Aduana',
              titulo: 'Todo lo que debes saber sobre los trámites de aduana en Panamá',
              desc: 'Documentos necesarios, aranceles y tips para importar sin retrasos ni sorpresas en aduana.',
              color: 'border-mbe-red',
              badge: 'bg-mbe-red',
            },
          ].map(post => (
            <div key={post.titulo} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className={`h-1.5 ${post.badge}`} />
              <div className="p-6 flex flex-col flex-1">
                <span className={`text-xs font-bold text-white ${post.badge} px-3 py-1 rounded-full self-start mb-3`}>
                  {post.categoria}
                </span>
                <h3 className="text-mbe-dark font-bold text-base leading-snug mb-3 flex-1">
                  {post.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.desc}
                </p>
                <span className="text-mbe-red text-sm font-bold cursor-pointer hover:underline">
                  Leer más →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
