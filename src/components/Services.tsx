import {
  Monitor,
  Image,
  FileText,
  FileEdit,
  Layers,
  Award,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS: Record<string, React.ElementType> = {
  presentation: Monitor,
  palette: Image,
  'file-text': FileText,
  'file-edit': FileEdit,
  layers: Layers,
  award: Award,
};

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  delay: number;
}

function ServiceCard({ service, delay }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || FileText;

  const handleGetStarted = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`reveal reveal-delay-${delay} group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {service.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-500"></div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
            service.featured
              ? 'bg-accent-400 text-white'
              : 'bg-accent-50 text-accent-500 group-hover:bg-accent-400 group-hover:text-white'
          }`}
        >
          <Icon size={22} strokeWidth={1.8} />
        </div>

        {service.featured && (
          <span className="inline-block mb-2 text-xs font-bold text-accent-500 uppercase tracking-widest">
            Most Popular
          </span>
        )}

        <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleGetStarted}
          className="flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors group/btn"
          aria-label={`Get started with ${service.title}`}
        >
          Get Started
          <ArrowRight
            size={15}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  useScrollReveal();

  return (
    <section
      id="services"
      className="py-24 bg-gray-50"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">Our Services</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            Professional design and document services built for students and academic events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
