import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

const HeroVisual = () => (
  <div className="relative w-full max-w-lg mx-auto lg:mx-0 animate-float">
    {/* Main large card - PPT */}
    <div className="absolute top-0 left-0 w-64 bg-navy-800 rounded-2xl shadow-2xl p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
        <span className="text-white/40 text-xs ml-auto">slide_01.pptx</span>
      </div>
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg p-4 mb-2">
        <div className="h-2 bg-white/90 rounded w-3/4 mb-2"></div>
        <div className="h-1.5 bg-white/50 rounded w-1/2 mb-3"></div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-white/20 rounded h-8"></div>
          <div className="bg-white/20 rounded h-8"></div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 bg-white/20 rounded w-full"></div>
        <div className="h-1.5 bg-white/20 rounded w-4/5"></div>
        <div className="h-1.5 bg-white/20 rounded w-3/5"></div>
      </div>
    </div>

    {/* Poster card */}
    <div className="absolute top-8 right-0 w-48 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-24 flex flex-col items-center justify-center mb-2">
        <span className="text-white font-display font-bold text-sm">HACKATHON</span>
        <span className="text-white/70 text-xs">2025</span>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 bg-gray-200 rounded w-full"></div>
        <div className="h-1.5 bg-gray-200 rounded w-2/3 mx-auto"></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs text-purple-500 font-semibold">EVENT POSTER</span>
      </div>
    </div>

    {/* Certificate card */}
    <div className="absolute bottom-0 left-8 w-52 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
      <div className="border-2 border-amber-300 rounded-lg p-3 bg-gradient-to-b from-amber-50 to-white">
        <div className="text-center">
          <div className="text-amber-600 font-display font-bold text-xs mb-1">CERTIFICATE</div>
          <div className="text-xs text-amber-400 mb-2">of Participation</div>
          <div className="h-1 bg-amber-200 rounded w-3/4 mx-auto mb-1"></div>
          <div className="h-1 bg-amber-100 rounded w-1/2 mx-auto mb-3"></div>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="h-4 w-12 border-b border-gray-300 mb-0.5"></div>
              <div className="h-1 bg-gray-200 rounded w-10"></div>
            </div>
            <div className="text-center">
              <div className="h-4 w-12 border-b border-gray-300 mb-0.5"></div>
              <div className="h-1 bg-gray-200 rounded w-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1.5 text-center">
        <span className="text-xs text-amber-600 font-semibold">CERTIFICATE DESIGN</span>
      </div>
    </div>

    {/* Document card */}
    <div className="absolute bottom-12 right-4 w-36 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-5 h-6 bg-blue-100 rounded flex items-center justify-center">
          <div className="w-3 h-0.5 bg-blue-400 rounded"></div>
        </div>
        <span className="text-xs text-gray-500 font-medium">Report.docx</span>
      </div>
      <div className="space-y-1">
        <div className="h-1 bg-gray-200 rounded w-full"></div>
        <div className="h-1 bg-gray-200 rounded w-5/6"></div>
        <div className="h-1 bg-gray-200 rounded w-4/6"></div>
        <div className="h-1 bg-gray-200 rounded w-5/6"></div>
        <div className="h-1 bg-gray-200 rounded w-3/6"></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs text-blue-500 font-semibold">FORMATTED</span>
      </div>
    </div>

    {/* Floating accent badge */}
    <div className="absolute -top-4 right-12 bg-accent-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
      ✦ Professional Quality
    </div>

    {/* Spacer for visual height */}
    <div className="h-80 lg:h-96"></div>
  </div>
);

export default function Hero() {
  const handleCTA = (target: string) => {
    const id = target.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-400/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent-600/10 blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-accent-400/10 border border-accent-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-accent-300 text-sm font-medium">Design Services for Students</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Turn Your Ideas Into{' '}
              <span className="text-accent-400">Professional</span>{' '}
              Designs.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {BUSINESS_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={BUSINESS_CONFIG.contact.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-3.5 inline-flex items-center justify-center gap-2"
                aria-label="Order via Google Form"
              >
                <span>📋</span>
                Order via Google Form
                <ExternalLink size={16} />
              </a>
              <button
                onClick={() => handleCTA('#contact')}
                className="btn-outline-white text-base px-7 py-3.5"
                aria-label="View all contact options"
              >
                All Contact Options
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
              {['Fast Delivery', 'Student-Friendly', 'Custom Designs'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <span className="text-accent-400">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleCTA('#trust')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
