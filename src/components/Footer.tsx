import { BUSINESS_CONFIG, SERVICES } from '../data/config';

const FOOTER_LINKS = {
  Pages: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-gray-400" aria-label="Footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-400 flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">CC</span>
              </div>
              <span className="font-display font-bold text-white text-lg">CodeCanvas</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Professional design and academic services for students, clubs and technical events.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Pages.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-gray-400 hover:text-white transition-colors text-left focus:outline-none"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS_CONFIG.contact.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-purple-300 hover:text-white transition-colors font-medium group"
                >
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 group-hover:bg-purple-500 flex items-center justify-center text-xs transition-colors">📋</span>
                  Google Order Form ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs">✉</span>
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs">💬</span>
                  WhatsApp ({BUSINESS_CONFIG.contact.whatsappDisplay})
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs">📸</span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs">💼</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} CodeCanvas. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Professional Design Services for Students
          </p>
        </div>
      </div>
    </footer>
  );
}
