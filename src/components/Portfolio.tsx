import { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

// Placeholder visual patterns for each portfolio item
const CARD_PATTERNS = [
  // PPT slide mock
  (color: string) => (
    <div className="h-full flex flex-col p-4" style={{ background: color }}>
      <div className="flex items-center gap-1.5 mb-3 opacity-50">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-accent-500/60 to-accent-700/60 rounded-lg flex flex-col justify-end p-3">
        <div className="h-2 bg-white/70 rounded w-3/4 mb-2"></div>
        <div className="h-1.5 bg-white/40 rounded w-1/2 mb-2"></div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-white/20 rounded h-6"></div>
          <div className="bg-white/20 rounded h-6"></div>
        </div>
      </div>
    </div>
  ),
  // Poster mock
  (color: string) => (
    <div className="h-full flex flex-col p-4" style={{ background: color }}>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-24 text-center">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 mb-2">
            <div className="h-2 bg-white/90 rounded w-full mb-1.5"></div>
            <div className="h-1.5 bg-white/60 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-8 bg-white/20 rounded"></div>
          </div>
          <div className="h-1.5 bg-white/30 rounded w-full mb-1"></div>
          <div className="h-1.5 bg-white/20 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  // Certificate mock
  (color: string) => (
    <div className="h-full flex items-center justify-center p-4" style={{ background: color }}>
      <div className="bg-white/10 border-2 border-amber-400/50 rounded-xl p-4 w-full max-w-32">
        <div className="text-center">
          <div className="text-amber-400 text-xs font-bold mb-1">CERTIFICATE</div>
          <div className="h-1 bg-amber-400/40 rounded w-3/4 mx-auto mb-1"></div>
          <div className="h-1 bg-amber-400/20 rounded w-1/2 mx-auto mb-3"></div>
          <div className="h-8 border-b border-white/20 mb-1"></div>
          <div className="h-1 bg-white/20 rounded w-full"></div>
        </div>
      </div>
    </div>
  ),
  // Project pack
  (color: string) => (
    <div className="h-full p-4" style={{ background: color }}>
      <div className="h-full bg-white/10 rounded-xl p-3 flex flex-col gap-2">
        {['PPT', 'Poster', 'Diagram', 'Report'].map((label) => (
          <div key={label} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
            <div className="w-4 h-4 rounded bg-accent-400/60 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <span className="text-white/60 text-xs">{label}</span>
            <span className="ml-auto text-accent-400 text-xs">✓</span>
          </div>
        ))}
      </div>
    </div>
  ),
  // Invitation mock
  (color: string) => (
    <div className="h-full flex items-center justify-center p-4" style={{ background: color }}>
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 w-full max-w-32 text-center">
        <div className="text-white/40 text-xs mb-2 uppercase tracking-wider">You're Invited</div>
        <div className="h-2 bg-accent-400/60 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-1.5 bg-white/30 rounded w-full mb-1"></div>
        <div className="h-1.5 bg-white/20 rounded w-2/3 mx-auto mb-3"></div>
        <div className="bg-accent-400/30 rounded-lg py-1.5">
          <div className="h-1.5 bg-accent-400/60 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  // Document mock
  (color: string) => (
    <div className="h-full p-4" style={{ background: color }}>
      <div className="h-full bg-white/10 rounded-xl p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-5 h-6 bg-blue-400/30 rounded flex items-center justify-center">
            <div className="w-3 h-0.5 bg-blue-400/70 rounded"></div>
          </div>
          <div className="h-1.5 bg-white/30 rounded w-20"></div>
        </div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 bg-white/20 rounded mb-1.5"
            style={{ width: `${[100, 90, 75, 100, 85, 60][i]}%` }}
          ></div>
        ))}
        <div className="mt-3 h-1.5 bg-white/10 rounded w-full mb-1"></div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-1.5 bg-white/15 rounded mb-1.5" style={{ width: `${[80, 95, 70, 88][i]}%` }}></div>
        ))}
      </div>
    </div>
  ),
];

function PortfolioCard({ item, index }: { item: (typeof PORTFOLIO_ITEMS)[number]; index: number }) {
  const patternFn = CARD_PATTERNS[index % CARD_PATTERNS.length];

  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 6)} group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Visual — replace patternFn(item.color) with <img src={item.image} alt={item.title} /> when real images are available */}
      <div className="h-44 overflow-hidden">
        {patternFn(item.color)}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white">
          <ExternalLink size={24} className="mx-auto mb-2 text-accent-400" />
          <span className="text-sm font-medium">View Project</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="tag mb-2 inline-block">{item.category}</span>
        <h3 className="font-display font-bold text-navy-900 text-sm mb-1">{item.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50" aria-label="Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">Explore Our Designs</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            Explore some of the designs created for academic and technical needs.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal reveal-delay-2 flex flex-wrap gap-2 justify-center mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 ${
                activeCategory === cat
                  ? 'bg-accent-400 text-white shadow-md shadow-accent-400/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-accent-300 hover:text-accent-500'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Portfolio images will be updated with real project work.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Request Custom Design
          </button>
        </div>
      </div>
    </section>
  );
}
