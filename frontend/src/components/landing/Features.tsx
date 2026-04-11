import SectionHeader from './SectionHeader'

const features = [
  {
    icon: '⚡',
    title: 'Automação de playbooks',
    description: 'Acione tarefas, mensagens e checkpoints automaticamente em cada etapa da jornada.',
  },
  {
    icon: '📊',
    title: 'Painéis em tempo real',
    description: 'Monitore métricas de adoção, expansão e retenção sem depender de relatórios manuais.',
  },
  {
    icon: '🤝',
    title: 'Colaboração contextual',
    description: 'Comente registros, mencione colegas e mantenha decisões no contexto certo.',
  },
  {
    icon: '🔔',
    title: 'Alertas inteligentes',
    description: 'Receba avisos proativos sobre contas em risco e oportunidades de upsell.',
  },
  {
    icon: '🧩',
    title: 'Integrações nativas',
    description: 'Conecte CRM, billing e suporte para consolidar dados sem fricção.',
  },
  {
    icon: '🔒',
    title: 'Governança e segurança',
    description: 'Permissões granulares e histórico completo para operações mais confiáveis.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="ds-section bg-page-bg">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Tudo o que sua equipe precisa para operar com excelência"
          description="Recursos pensados para reduzir fricção, acelerar entregas e melhorar a experiência do cliente em escala."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="ds-card">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-default bg-page-bg">
                {feature.icon}
              </span>
              <h3 className="ds-heading-3 mb-3">{feature.title}</h3>
              <p className="ds-body">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
