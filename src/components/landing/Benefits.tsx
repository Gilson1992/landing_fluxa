import SectionHeader from './SectionHeader'

const benefits = [
  {
    metric: '+37%',
    label: 'aumento médio de retenção',
  },
  {
    metric: '-42%',
    label: 'menos tempo em tarefas operacionais',
  },
  {
    metric: '2,4x',
    label: 'mais velocidade para escalar processos',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="ds-section bg-surface">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Benefícios"
          title="Resultados práticos que impactam crescimento e margem"
          description="A Fluxa elimina gargalos operacionais e libera o time para focar em ações de alto valor para o cliente e para o negócio."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.metric} className="ds-card bg-page-bg text-center">
              <p className="ds-heading-2 mb-3 text-primary">{benefit.metric}</p>
              <p className="ds-body">{benefit.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
