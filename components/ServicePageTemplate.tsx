'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'
import { trackLead, trackViewContent } from '@/lib/pixel'

interface Step {
  number: number
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageProps {
  icon: string
  title: string
  description: string
  benefits: string[]
  steps: Step[]
  href: string
  serviceType?: string
  faqs?: FAQ[]
  fullDescription?: string
}

const BASE_URL = 'https://mbecolon.com'

export default function ServicePageTemplate({ icon, title, description, benefits, steps, href, serviceType, faqs, fullDescription }: ServicePageProps) {
  useEffect(() => {
    trackViewContent(title, serviceType || 'Servicio')
  }, [title, serviceType])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${BASE_URL}/servicios` },
      { '@type': 'ListItem', position: 3, name: title, item: `${BASE_URL}${href}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceType || title,
    name: title,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mail Boxes Etc. Colón',
      url: BASE_URL,
      telephone: '+507-474-5548',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Millenium Local F007',
        addressLocality: 'Colón',
        addressRegion: 'Colón',
        addressCountry: 'PA',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Colón, Panamá',
    },
    url: `${BASE_URL}${href}`,
  }

  const faqSchema = faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-mbe-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb visual */}
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>›</span>
            <span className="text-gray-300">{title}</span>
          </nav>
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">{title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">{description}</p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead(`whatsapp_service_${serviceType || title}`)}
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

      {/* Full Description (if provided) */}
      {fullDescription && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="text-mbe-dark leading-relaxed whitespace-pre-wrap">
              {fullDescription}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mbe-dark text-2xl font-black mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-lg p-6 shadow-sm group">
                  <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-mbe-gray mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

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
          <Link href="/contacto" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-mbe-red transition-colors">
            Ver contacto
          </Link>
        </div>
      </section>
    </>
  )
}
