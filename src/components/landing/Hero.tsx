export default function Hero() {
  return (
    <section id="hero" className="ds-section ds-hero">
      <div className="ds-container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="ds-badge">SaaS para operações de equipe</span>
            <h1 className="ds-heading-1 text-text-white">
              Organize processos, entregue mais rápido e aumente sua receita recorrente.
            </h1>
            <p className="ds-body text-text-white">
              A Fluxa centraliza onboarding, tarefas, métricas e comunicação em uma única plataforma para equipes de produto e sucesso do cliente.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#cta-final" className="ds-btn-primary">
                Começar agora
              </a>
              <a href="#solucao" className="ds-btn-transparent">
                Ver demonstração
              </a>
            </div>
            <p className="ds-small text-text-white">Sem cartão de crédito · Configuração em minutos</p>
          </div>

          <div className="ds-card bg-page-bg">
            <div className="grid gap-4">
              <div className="rounded-md border border-border-default bg-surface p-4">
                <p className="ds-small">Pipeline ativo</p>
                <p className="ds-heading-3">48 oportunidades em progresso</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-border-default bg-page-bg p-4">
                  <p className="ds-small">Conversão</p>
                  <p className="ds-heading-3">+32%</p>
                </div>
                <div className="rounded-md border border-border-default bg-page-bg p-4">
                  <p className="ds-small">Churn</p>
                  <p className="ds-heading-3">-18%</p>
                </div>
              </div>
              <div className="rounded-md border border-border-default bg-page-bg p-4">
                <p className="ds-small">Atividades da semana</p>
                <ul className="mt-3 space-y-2">
                  <li className="ds-small">• Onboarding automatizado de novos clientes.</li>
                  <li className="ds-small">• Alertas de risco com ações recomendadas.</li>
                  <li className="ds-small">• Relatórios prontos para diretoria.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
