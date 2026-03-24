const footerLinks = [
  { label: 'Produto', href: '#funcionalidades' },
  { label: 'Clientes', href: '#prova-social' },
  { label: 'Contato', href: '#cta-final' },
  { label: 'Privacidade', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-page-bg">
      <div className="ds-container mx-auto flex flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="ds-small">© 2026 Fluxa. Todos os direitos reservados.</p>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="ds-small no-underline hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
