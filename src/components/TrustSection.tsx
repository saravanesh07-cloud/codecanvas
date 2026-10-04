import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  { icon: '✓', label: 'Professional Design' },
  { icon: '✓', label: 'Fast Delivery' },
  { icon: '✓', label: 'Student-Friendly' },
  { icon: '✓', label: 'Custom Designs' },
];

export default function TrustSection() {
  useScrollReveal();

  return (
    <section id="trust" className="py-20 bg-white" aria-label="Why CodeCanvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="reveal section-heading">
            Everything You Need to Present Better.
          </h2>
          <p className="reveal reveal-delay-1 section-subheading mx-auto mt-4">
            From your first project idea to the final presentation, CodeCanvas helps you
            create polished, professional and presentation-ready materials.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100`}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center font-bold text-base">
                {f.icon}
              </span>
              <span className="font-semibold text-navy-900 text-sm sm:text-base">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
