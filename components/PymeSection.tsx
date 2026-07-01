import { CONTACT } from '@/lib/constants'

const BENEFITS = [
  {
    title: 'Representante Dedicado',
    description: 'Un ejecutivo de cuenta personal que conoce tu empresa y diseña soluciones a la medida de tu volumen.',
    gradient: 'from-blue-500 to-blue-700',
    shadow: 'shadow-blue-500/40',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        {/* Person silhouette */}
        <circle cx="32" cy="18" r="10" fill="white" fillOpacity="0.9" />
        <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="white" fillOpacity="0.9" />
        {/* Headset arc */}
        <path d="M20 18a12 12 0 0 1 24 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <rect x="18" y="18" width="4" height="7" rx="2" fill="white" opacity="0.6" />
        <rect x="42" y="18" width="4" height="7" rx="2" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Facturación Consolidada',
    description: 'Todos tus envíos en una sola factura mensual. Simplifica la contabilidad y controla tus costos logísticos.',
    gradient: 'from-red-500 to-rose-700',
    shadow: 'shadow-red-500/40',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        {/* Document stack */}
        <rect x="18" y="20" width="32" height="38" rx="3" fill="white" fillOpacity="0.3" />
        <rect x="14" y="15" width="32" height="38" rx="3" fill="white" fillOpacity="0.6" />
        <rect x="10" y="10" width="32" height="38" rx="3" fill="white" fillOpacity="0.9" />
        {/* Lines */}
        <path d="M18 22h16M18 28h20M18 34h12" stroke="#BE1E2D" strokeWidth="2.5" strokeLinecap="round" />
        {/* Checkmark */}
        <circle cx="36" cy="36" r="10" fill="#BE1E2D" />
        <path d="M31 36l3.5 3.5L41 31" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Soluciones a Medida',
    description: 'Envíos masivos, importación, logística inversa. Diseñamos una estrategia adaptada a tu presupuesto.',
    gradient: 'from-emerald-500 to-teal-700',
    shadow: 'shadow-emerald-500/40',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        {/* Box */}
        <path d="M32 8L54 20v24L32 56 10 44V20L32 8z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 8v48M10 20l22 12 22-12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        {/* Stars / sparkle */}
        <circle cx="46" cy="14" r="3" fill="white" fillOpacity="0.9" />
        <circle cx="18" cy="42" r="2" fill="white" fillOpacity="0.6" />
        <path d="M46 8v4M43 11l2.8 2.8M50 11l-2.8 2.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PymeSection() {
  const msg = encodeURIComponent('Hola! Me interesa conocer los servicios MBE para mi empresa.')
  const href = `${CONTACT.whatsappHref}&text=${msg}`

  return (
    <section className="bg-mbe-dark py-20 px-4 overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-mbe-red opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mbe-blue opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-block bg-mbe-red/20 text-mbe-red text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            🏢 Servicios Empresariales
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
            Servicios logísticos, aduana y envíos para <span className="text-mbe-red">empresas y PYMES en Colón</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Servicios logísticos profesionales para PYMEs y empresas en Colón y la provincia de Colón, Panamá. Optimiza tus costos de envío internacional, carga marítima e importación con un equipo dedicado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {BENEFITS.map(b => (
            <div
              key={b.title}
              className="group relative rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-2"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))' }}
            >
              {/* Card body */}
              <div className="relative rounded-2xl bg-[#1e1e1e] p-7 h-full overflow-hidden">
                {/* Inner glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                {/* 3D icon badge */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${b.gradient} ${b.shadow} shadow-xl mb-5
                                  group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  style={{
                    transform: 'perspective(400px) rotateX(8deg) rotateY(-8deg)',
                  }}
                >
                  {/* Shine overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />
                  {b.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 mb-10 text-center">
          {[
            { value: '30%', label: 'Ahorro promedio en logística' },
            { value: '24h', label: 'Tiempo de respuesta' },
            { value: '100%', label: 'Tramitación aduanera incluida' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl py-4 px-2">
              <div className="text-mbe-red font-black text-2xl md:text-3xl">{s.value}</div>
              <div className="text-gray-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-mbe-red text-white font-black text-lg px-10 py-4 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-red-700/40"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.526 5.845L.057 23.143a.75.75 0 0 0 .917.925l5.453-1.428A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.706 9.706 0 0 1-5.004-1.383l-.358-.214-3.717.974.993-3.622-.234-.373A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Contáctanos hoy →
          </a>
          <p className="text-gray-500 text-sm mt-3">Respuesta en menos de 24 horas hábiles</p>
        </div>
      </div>
    </section>
  )
}
