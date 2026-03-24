export default function Problem() {
  const pains = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
      title: 'Content scattered across tools',
      description:
        'Drafts in Google Docs, feedback on Slack, approvals by email — nothing is centralized.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Slow, fragmented workflows',
      description:
        'Teams waste hours switching between apps, losing context, and chasing status updates.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: 'Missed deadlines & quality drops',
      description:
        'Without a unified pipeline, publishing consistency suffers and deadlines slip.',
    },
  ];

  return (
    <section id="problem" className="ds-section bg-page-bg">
      <div className="ds-container">
        <div className="flex flex-col items-center gap-2 mb-12">
          <p className="ds-small text-text-secondary uppercase tracking-widest text-xs">
            The Problem
          </p>
          <h2 className="ds-heading-2 text-center max-w-[800px]">
            Content teams are stuck in tool chaos
          </h2>
          <p className="ds-body text-center max-w-[600px] mt-2">
            Most teams rely on a patchwork of disconnected tools that slow down every step of the content workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div key={i} className="ds-card flex flex-col gap-6">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                {pain.icon}
              </div>
              <div>
                <h3 className="ds-heading-3 mb-2">{pain.title}</h3>
                <p className="ds-body">{pain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
