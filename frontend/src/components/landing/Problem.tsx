import SectionHeader from './SectionHeader'

const painPoints = [
  {
    title: 'Ferramentas desconectadas',
    description: 'Informações críticas ficam espalhadas entre planilhas, chat e CRM, gerando retrabalho diário.',
  },
  {
    title: 'Processos sem previsibilidade',
    description: 'Sem visão clara do funil, a equipe perde prazo e reage tarde aos riscos de churn.',
  },
  {
    title: 'Decisões sem dados confiáveis',
    description: 'Métricas inconsistentes dificultam priorização e enfraquecem o planejamento estratégico.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="ds-section bg-page-bg">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Problema"
          title="Sua operação cresce, mas a complexidade cresce ainda mais rápido"
          description="Sem um fluxo único, sua equipe perde tempo com tarefas operacionais e não consegue focar no que realmente move o negócio."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item.title} className="ds-card">
              <h3 className="ds-heading-3 mb-3">{item.title}</h3>
              <p className="ds-body">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
