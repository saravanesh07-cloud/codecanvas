import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="py-24 bg-gray-50" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            What Clients Say
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">Student Reviews</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            Here's what students and teams say about working with CodeCanvas.
          </p>
          {/* Placeholder notice — visible only to admins/editors */}
          <p className="reveal reveal-delay-3 text-xs text-gray-400 mt-2 italic">
            * Placeholder testimonials — replace with real reviews when collected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6`}
            >
              <div className="mb-3">
                <StarRating rating={t.rating} />
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                "{t.review}"
              </blockquote>

              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent-600 text-sm">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
