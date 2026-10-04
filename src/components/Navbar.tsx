import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = BUSINESS_CONFIG.navLinks.map((l) => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    handleNavClick('#contact');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="CodeCanvas home"
          >
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-200">
              <span className="text-accent-400 font-display font-bold text-xs group-hover:text-white transition-colors">CC</span>
            </div>
            <span
              className={`font-display font-bold text-lg tracking-tight transition-colors duration-200 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              CodeCanvas
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {BUSINESS_CONFIG.navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-1 ${
                      isActive
                        ? 'text-accent-400 bg-accent-50'
                        : isScrolled
                        ? 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleGetStarted}
              className="hidden sm:flex btn-primary text-sm px-5 py-2.5"
            >
              Order Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 ${
                isScrolled ? 'text-navy-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-4 overflow-hidden">
            <ul className="py-2" role="list">
              {BUSINESS_CONFIG.navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-accent-500 bg-accent-50'
                          : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="px-4 pb-4 pt-2 border-t border-gray-100">
              <button
                onClick={handleGetStarted}
                className="w-full btn-primary"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
