import SectionHeader from './SectionHeader'

const testimonials = [
  {
    quote: 'Com a Fluxa, nossa equipe reduziu o ciclo de onboarding e aumentou a satisfação dos clientes já no primeiro trimestre.',
    author: 'Marina Costa',
    role: 'Head of Customer Success · NovaScale',
  },
  {
    quote: 'Saímos de uma operação reativa para um modelo previsível. Hoje sabemos exatamente onde atuar para reduzir churn.',
    author: 'Eduardo Lima',
    role: 'Diretor de Operações · Orbit SaaS',
  },
]

export default function SocialProof() {
  return (
    <section id="prova-social" className="ds-section bg-page-bg">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Prova social"
          title="Times SaaS já usam Fluxa para crescer com previsibilidade"
          description="Empresas em expansão confiam na plataforma para padronizar operações e melhorar resultados de retenção."
        />

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="ds-card">
              <p className="ds-body text-text-primary">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <p className="ds-heading-3">{testimonial.author}</p>
                <p className="ds-small">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-border-default bg-surface p-4 text-center">
            <p className="ds-heading-3">+1.200</p>
            <p className="ds-small">equipes ativas</p>
          </div>
          <div className="rounded-md border border-border-default bg-surface p-4 text-center">
            <p className="ds-heading-3">98,6%</p>
            <p className="ds-small">uptime anual</p>
          </div>
          <div className="rounded-md border border-border-default bg-surface p-4 text-center">
            <p className="ds-heading-3">4,9/5</p>
            <p className="ds-small">avaliação média</p>
          </div>
        </div>
      </div>
    </section>
  )
}
