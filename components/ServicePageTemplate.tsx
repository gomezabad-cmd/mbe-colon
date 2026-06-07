import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

interface Step {
  number: number
  title: string
  description: string
}

interface ServicePageProps {
  icon: string
  title: string
  description: string
  benefits: string[]
  steps: Step[]
}

export default function ServicePageTemplate({ icon, title, description, benefits, steps }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-mbe-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">{title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">{description}</p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            💬 Cotizar ahora →
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-mbe-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-mbe-dark text-2xl font-black mb-8 text-center">Beneficios del servicio</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex items-start gap-3 shadow-sm">
                <span className="text-mbe-red font-black text-lg">✓</span>
                <span className="text-mbe-gray">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-mbe-dark text-2xl font-black mb-8 text-center">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-mbe-red text-white font-black text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-mbe-dark mb-2">{step.title}</h3>
                <p className="text-mbe-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mbe-red py-16 px-4 text-center">
        <h2 className="text-white text-3xl font-black mb-4">¿Listo para empezar?</h2>
        <p className="text-white opacity-90 mb-8">Contáctanos por WhatsApp y te damos una cotización en minutos.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-mbe-red font-black px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            💬 WhatsApp
          </a>
          <Link href="/#contacto" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-mbe-red transition-colors">
            Ver contacto
          </Link>
        </div>
      </section>
    </>
  )
}
