export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary) 75%, transparent 100%)',
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] px-10 pt-44 pb-24 max-md:px-5 max-md:pt-32 max-md:pb-16">
        {/* Badge */}
        <div
          className="ds-badge mb-6 animate-fade-up"
          style={{
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Introducing Fluxa Platform
        </div>

        {/* Headline */}
        <h1
          className="ds-heading-1 text-center text-text-white max-w-[800px] mb-6 animate-blur-in"
          style={{ animationDelay: '0.1s' }}
        >
          Write, plan, and ship content with your team in one workspace.
        </h1>

        {/* Subtitle */}
        <p
          className="ds-body text-center text-text-white/90 max-w-[600px] mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Plan, write, and publish high‑quality blog content with your team in one focused workspace. Drafts, feedback, and approvals stay aligned from first outline.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 mb-4 w-full sm:w-auto animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a href="#cta" className="ds-btn-transparent w-full sm:w-auto justify-center">
            See how it works
          </a>
          <a href="#cta" className="ds-btn-primary w-full sm:w-auto justify-center">
            Start writing for free
          </a>
        </div>

        <p
          className="ds-small text-text-white/70 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          30-day free trial · No credit card required
        </p>

        {/* Dashboard Mockup */}
        <div
          className="w-full mt-12 rounded-lg border border-white/20 bg-white/5 p-2 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-full rounded-sm bg-surface aspect-[16/9] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-surface via-white to-surface flex items-center justify-center">
              {/* Dashboard mockup placeholder */}
              <div className="w-[90%] h-[85%] rounded-sm bg-white border border-border-default shadow-card p-4 flex flex-col gap-3">
                {/* Top bar */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-6 rounded-md bg-surface ml-4" />
                </div>
                {/* Content area */}
                <div className="flex flex-1 gap-3">
                  {/* Sidebar */}
                  <div className="w-1/5 flex flex-col gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-5 rounded-md ${i === 1 ? 'bg-primary/10' : 'bg-surface'}`}
                      />
                    ))}
                  </div>
                  {/* Main */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-8 w-3/4 rounded-md bg-surface" />
                    <div className="h-4 w-full rounded-md bg-surface" />
                    <div className="h-4 w-5/6 rounded-md bg-surface" />
                    <div className="h-4 w-4/6 rounded-md bg-surface" />
                    <div className="flex-1 rounded-md bg-surface mt-2" />
                  </div>
                  {/* Right panel */}
                  <div className="w-1/4 hidden lg:flex flex-col gap-2">
                    <div className="h-20 rounded-md bg-primary/5" />
                    <div className="h-4 w-3/4 rounded-md bg-surface" />
                    <div className="h-4 w-1/2 rounded-md bg-surface" />
                    <div className="flex-1 rounded-md bg-surface mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="flex items-center gap-4 mt-12 max-md:flex-col">
          <p className="ds-small text-text-primary/60 mr-4 max-md:mr-0 whitespace-nowrap">
            Trusted by leading companies
          </p>
          <div className="flex items-center gap-8 opacity-50 flex-wrap justify-center">
            {['Acme', 'Globex', 'Initech', 'Hooli'].map((name) => (
              <span
                key={name}
                className="text-text-primary font-bold text-base tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative side lines */}
      <div
        className="absolute top-0 left-5 w-px z-10 hidden lg:block"
        style={{
          height: '70%',
          backgroundColor: 'var(--color-glass-border)',
          mask: 'linear-gradient(#000 0%, transparent 100%)',
          WebkitMask: 'linear-gradient(#000 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-0 right-5 w-px z-10 hidden lg:block"
        style={{
          height: '70%',
          backgroundColor: 'var(--color-glass-border)',
          mask: 'linear-gradient(#000 0%, transparent 100%)',
          WebkitMask: 'linear-gradient(#000 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
