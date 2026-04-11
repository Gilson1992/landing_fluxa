const navItems = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Benefícios', href: '#beneficios' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-page-bg">
      <div className="ds-container mx-auto flex items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="ds-heading-3 no-underline">
          Fluxa
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="ds-small no-underline hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta-final" className="ds-btn-blue">
          Testar grátis
        </a>
      </div>
    </header>
  )
}
