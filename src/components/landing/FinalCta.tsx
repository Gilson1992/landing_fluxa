export default function FinalCta() {
  return (
    <section id="cta-final" className="ds-section bg-primary">
      <div className="ds-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="ds-badge bg-page-bg">Pronto para evoluir sua operação?</span>
          <h2 className="ds-heading-2 text-text-white">Comece hoje e veja resultados reais em poucas semanas.</h2>
          <p className="ds-body text-text-white">
            Ative sua conta gratuita, conecte suas ferramentas e implemente o primeiro playbook em minutos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#" className="ds-btn-primary">
              Criar conta grátis
            </a>
            <a href="#hero" className="ds-btn-transparent">
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
