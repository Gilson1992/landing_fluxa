import SectionHeader from './SectionHeader'

const solutionItems = [
  'Centralize jornada do cliente em um único painel.',
  'Padronize playbooks com automações reutilizáveis.',
  'Antecipe riscos com alertas e inteligência de dados.',
]

export default function Solution() {
  return (
    <section id="solucao" className="ds-section bg-surface">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Solução"
          title="Fluxa transforma operação dispersa em execução previsível"
          description="Com uma interface intuitiva e fluxos orientados por dados, sua equipe passa a atuar com velocidade, alinhamento e foco em retenção."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="ds-card bg-page-bg">
            <ul className="space-y-4">
              {solutionItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="ds-body">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="ds-card bg-page-bg">
            <div className="space-y-3">
              <p className="ds-small">Fluxo recomendado</p>
              <div className="rounded-md border border-border-default bg-surface p-4">
                <p className="ds-small">1. Captura automática de sinais de risco</p>
              </div>
              <div className="rounded-md border border-border-default bg-surface p-4">
                <p className="ds-small">2. Priorização com score de impacto</p>
              </div>
              <div className="rounded-md border border-border-default bg-surface p-4">
                <p className="ds-small">3. Execução com playbooks colaborativos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
