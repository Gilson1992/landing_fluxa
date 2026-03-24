import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-border-default shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2.5">
        {/* Logo SVG matching Oclave brand */}
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="12" height="12" rx="3" fill={scrolled ? '#1258fd' : '#fff'} />
          <rect x="8" y="6" width="12" height="12" rx="3" fill={scrolled ? '#1258fd' : '#fff'} opacity="0.6" />
          <rect x="16" y="12" width="12" height="12" rx="3" fill={scrolled ? '#1258fd' : '#fff'} opacity="0.3" />
        </svg>
        <span
          className={`text-base font-bold transition-colors duration-300 ${
            scrolled ? 'text-dark' : 'text-text-white'
          }`}
        >
          Fluxa
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {['Features', 'Benefits', 'Testimonials'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`ds-small no-underline transition-colors duration-200 hover:text-primary ${
              scrolled ? 'text-text-secondary' : 'text-text-white/80'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href="#cta"
          className={`hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 no-underline ${
            scrolled
              ? 'text-text-secondary hover:text-primary'
              : 'text-text-white/80 hover:text-text-white'
          }`}
        >
          Login
        </a>
        <a
          href="#cta"
          className={scrolled ? 'ds-btn-blue text-sm! h-9!' : 'ds-btn-primary text-sm! h-9!'}
          style={{ fontSize: '14px', height: '36px' }}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
