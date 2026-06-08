export default function BlogSection() {
  return (
    <section className="bg-mbe-light py-16 px-4">
      <div className="max-w-6xl mx-auto">

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
