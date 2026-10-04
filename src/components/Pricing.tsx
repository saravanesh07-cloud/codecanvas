import { ArrowRight } from 'lucide-react';
import { PRICING_CARDS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Pricing() {
  useScrollReveal();

  const handleQuote = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50" aria-label="Pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Flexible Pricing
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">Simple & Flexible Pricing</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            Every project is different. Pricing depends on the type of service, number of pages or slides,
            complexity and delivery requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_CARDS.map((card, i) => (
            <div
              key={card.id}
              className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                card.featured
                  ? 'bg-navy-900 border-accent-400/30 shadow-xl relative'
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {card.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    Most Requested
                  </span>
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <h3
                  className={`font-display font-bold text-xl mb-2 ${
                    card.featured ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    card.featured ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {card.description}
                </p>

                <div
                  className={`text-sm font-bold mb-6 px-4 py-2 rounded-lg text-center ${
                    card.featured
                      ? 'bg-accent-400/20 text-accent-300'
                      : 'bg-accent-50 text-accent-600'
                  }`}
                >
                  Custom Quote — Contact Us
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className={`flex-shrink-0 mt-0.5 ${
                          card.featured ? 'text-accent-400' : 'text-accent-500'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm ${
                          card.featured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleQuote}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 ${
                    card.featured
                      ? 'bg-accent-400 text-white hover:bg-accent-500 shadow-lg shadow-accent-400/30'
                      : 'bg-gray-50 border border-gray-200 text-navy-900 hover:border-accent-400 hover:text-accent-500'
                  }`}
                >
                  Request a Quote
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 text-center text-gray-400 text-sm mt-8">
          All quotes are free. Share your requirements and we will get back to you promptly.
        </p>
      </div>
    </section>
  );
}
