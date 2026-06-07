import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export default function ServicesBar() {
  return (
    <section className="bg-white border-b-4 border-mbe-red shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {SERVICES.map(service => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col items-center text-center gap-2 p-3 rounded-lg hover:bg-mbe-light transition-colors"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </span>
              <span className="text-xs font-semibold text-mbe-dark group-hover:text-mbe-red transition-colors leading-tight">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
