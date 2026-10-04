import { MessageSquare, PenTool, Eye, Download } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS: Record<string, React.ElementType> = {
  'message-square': MessageSquare,
  'pen-tool': PenTool,
  eye: Eye,
  download: Download,
};

export default function HowItWorks() {
  useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 bg-white" aria-label="How It Works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">How CodeCanvas Works</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            From your idea to the final file — a simple and transparent process.
          </p>
        </div>

        {/* Desktop timeline (horizontal) */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-200 to-transparent mx-24"
            aria-hidden="true"
          ></div>

          <div className="grid grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[step.icon] || MessageSquare;
              return (
                <div
                  key={step.step}
                  className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-white border-2 border-accent-100 shadow-md flex items-center justify-center group hover:border-accent-400 hover:shadow-lg transition-all duration-300">
                      <Icon size={28} className="text-accent-500" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent-400 text-white text-xs font-bold flex items-center justify-center shadow">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden space-y-0">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[step.icon] || MessageSquare;
            const isLast = i === HOW_IT_WORKS.length - 1;
            return (
              <div key={step.step} className={`reveal reveal-delay-${i + 1} flex gap-4`}>
                {/* Left — step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-accent-200 shadow-sm flex items-center justify-center relative">
                    <Icon size={20} className="text-accent-500" strokeWidth={1.5} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent-400 text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="w-0.5 flex-1 bg-accent-100 my-2" style={{ minHeight: '2rem' }}></div>
                  )}
                </div>
                {/* Right — content */}
                <div className="pb-8">
                  <h3 className="font-display font-bold text-navy-900 text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal reveal-delay-4 text-center mt-14">
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }}
            className="btn-primary text-base px-8 py-3.5"
          >
            Start My Project
          </button>
        </div>
      </div>
    </section>
  );
}
