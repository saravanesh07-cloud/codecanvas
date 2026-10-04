import {
  Sparkles,
  GraduationCap,
  SlidersHorizontal,
  Zap,
  BadgePercent,
  CheckCircle,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  'graduation-cap': GraduationCap,
  sliders: SlidersHorizontal,
  zap: Zap,
  'badge-percent': BadgePercent,
  'check-circle': CheckCircle,
};

export default function WhyChooseUs() {
  useScrollReveal();

  return (
    <section
      className="py-24 bg-white"
      aria-label="Why Choose CodeCanvas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left copy */}
          <div>
            <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Advantage
            </p>
            <h2 className="reveal reveal-delay-1 section-heading mb-6">
              Why Choose CodeCanvas?
            </h2>
            <p className="reveal reveal-delay-2 text-gray-500 leading-relaxed text-base mb-8">
              We combine professional design quality with a deep understanding of
              academic needs. Every project we take on is treated with care and
              delivered with consistency.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Start a Project
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICONS[item.icon] || CheckCircle;
              return (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6)} group p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent-200 hover:bg-accent-50/30 transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-3 shadow-sm group-hover:bg-accent-400 group-hover:border-accent-400 transition-all duration-300">
                    <Icon size={18} className="text-accent-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
