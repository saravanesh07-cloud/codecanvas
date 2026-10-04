import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`reveal reveal-delay-${Math.min((index % 5) + 1, 5)} border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen ? 'shadow-sm border-accent-200' : 'hover:border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-inset"
        aria-expanded={isOpen}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span className="font-semibold text-navy-900 text-sm pr-8 leading-snug">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-accent-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-a-${index}`}
        role="region"
        aria-labelledby={`faq-q-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-50">
          <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQ into two columns
  const half = Math.ceil(FAQ_ITEMS.length / 2);
  const col1 = FAQ_ITEMS.slice(0, half);
  const col2 = FAQ_ITEMS.slice(half);

  return (
    <section id="faq" className="py-24 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Have Questions?
          </p>
          <h2 className="reveal reveal-delay-1 section-heading">Frequently Asked Questions</h2>
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            Everything you need to know about CodeCanvas services.
          </p>
        </div>

        {/* Two-column FAQ on desktop */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="space-y-3">
            {col1.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            ))}
          </div>
          {/* Column 2 */}
          <div className="space-y-3">
            {col2.map((item, i) => (
              <FAQItem
                key={i + half}
                item={item}
                isOpen={openIndex === i + half}
                onToggle={() => toggle(i + half)}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-3 text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Have a question not answered here?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
