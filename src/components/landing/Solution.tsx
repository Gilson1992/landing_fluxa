export default function Solution() {
  return (
    <section id="solution" className="ds-section bg-surface">
      <div className="ds-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — Text */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="ds-small text-text-secondary uppercase tracking-widest text-xs">
              The Solution
            </p>
            <h2 className="ds-heading-2">
              One platform to plan, write, and ship content
            </h2>
            <p className="ds-body max-w-[500px]">
              Fluxa brings your entire content workflow into a single workspace — from ideation to published post. No more juggling tools, losing files, or missing feedback.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {[
                'Unified editor with real-time collaboration',
                'Built-in content calendar & pipeline',
                'One-click publishing to your CMS',
                'Automated review and approval flows',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="ds-body text-text-primary">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <a href="#cta" className="ds-btn-blue">
                Get started free
              </a>
              <a href="#features" className="ds-btn-primary">
                See features
              </a>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="flex-1 w-full">
            <div className="ds-card p-4 bg-white">
              <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-primary/5 via-surface to-primary/10 flex items-center justify-center">
                <div className="w-[85%] h-[80%] bg-white rounded-md border border-border-default shadow-card flex flex-col p-4 gap-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary" />
                      <div className="h-3 w-20 rounded bg-surface" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-6 w-16 rounded-md bg-primary/10" />
                      <div className="h-6 w-16 rounded-md bg-primary" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex gap-3">
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-5 w-3/4 rounded bg-surface" />
                      <div className="h-3 w-full rounded bg-surface" />
                      <div className="h-3 w-5/6 rounded bg-surface" />
                      <div className="h-3 w-2/3 rounded bg-surface" />
                      <div className="flex-1 rounded bg-surface mt-2" />
                    </div>
                    <div className="w-1/3 hidden md:flex flex-col gap-2">
                      <div className="h-16 rounded bg-green-50 border border-green-200 flex items-center justify-center">
                        <span className="text-green-600 text-xs font-medium">✓ Approved</span>
                      </div>
                      <div className="flex-1 rounded bg-surface" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
