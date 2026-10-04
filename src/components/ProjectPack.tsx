import { ArrowRight } from 'lucide-react';
import { PROJECT_PACK_ITEMS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectPack() {
  useScrollReveal();

  const handleCTA = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-24 bg-navy-900 relative overflow-hidden"
      aria-label="Project Presentation Pack"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-600/10 blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — steps */}
          <div>
            <p className="reveal text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3">
              All-in-One Solution
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Everything Your Project Needs.{' '}
              <span className="text-accent-400">In One Pack.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-300 text-base leading-relaxed mb-10">
              Save time and get all your project presentation materials designed with one
              consistent professional style.
            </p>

            <div className="reveal reveal-delay-3 space-y-4">
              {PROJECT_PACK_ITEMS.map((item, i) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-400 group-hover:border-accent-400 transition-all duration-300">
                    <span className="text-accent-400 font-display font-bold text-sm group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCTA}
              className="reveal reveal-delay-4 mt-10 btn-primary text-base px-7 py-3.5"
            >
              Build My Project Pack
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — visual mockup */}
          <div className="reveal reveal-delay-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-navy-800 rounded-3xl border border-white/10 shadow-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-white text-sm">
                    IoT Smart Home Project
                  </span>
                  <span className="tag bg-accent-400/20 text-accent-300">Complete</span>
                </div>

                <div className="space-y-3">
                  {PROJECT_PACK_ITEMS.map((item) => (
                    <div
                      key={item.step}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-400 text-xs">✓</span>
                      </div>
                      <span className="text-white/80 text-sm">{item.label}</span>
                      <span className="ml-auto text-accent-400 text-xs font-medium">Ready</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">All files delivered</span>
                  <div className="flex gap-1">
                    {['pptx', 'pdf', 'png'].map((ext) => (
                      <span key={ext} className="bg-accent-400/20 text-accent-300 text-xs px-2 py-0.5 rounded">
                        .{ext}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                5 Items Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
