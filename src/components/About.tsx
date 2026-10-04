import { useScrollReveal } from '../hooks/useScrollReveal';

const TIMELINE = [
  { year: '2024', label: 'CodeCanvas Founded', desc: 'Started as a student-focused design service.' },
  { year: '2025', label: 'First 50 Projects', desc: 'Completed presentations, posters and project packs for students.' },
  { year: '2026', label: 'Expanding Services', desc: 'Full suite of academic design and document services launched.' },
];

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-24 bg-white" aria-label="About CodeCanvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — illustration */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Brand mark */}
              <div className="bg-navy-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-400/10 blur-2xl" aria-hidden="true"></div>

                {/* Logo display */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent-400 flex items-center justify-center">
                    <span className="font-display font-bold text-white text-lg">CC</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-xl">CodeCanvas</div>
                    <div className="text-gray-400 text-xs">Your Ideas. Professionally Designed.</div>
                  </div>
                </div>

                {/* Mini service showcase */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['PPT Creation', 'Poster Design', 'Project Pack', 'Certificates'].map((s) => (
                    <div key={s} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-center">
                      <span className="text-white/70 text-xs font-medium">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  {TIMELINE.map((t) => (
                    <div key={t.year} className="flex items-start gap-3">
                      <div className="flex-shrink-0 bg-accent-400/20 border border-accent-400/30 rounded-lg px-2 py-1">
                        <span className="text-accent-400 text-xs font-bold">{t.year}</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{t.label}</div>
                        <div className="text-gray-400 text-xs">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="section-heading mb-6">About CodeCanvas</h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base mb-8">
              <p>
                CodeCanvas is a student-focused digital design service created to help students
                and academic teams present their ideas professionally.
              </p>
              <p>
                From presentations and posters to project documentation and event materials,
                we turn raw content into clean, attractive and presentation-ready designs.
              </p>
              <p>
                We understand the pressures of academic life — deadlines, last-minute projects,
                and the need to stand out. Our goal is to make professional design accessible
                and affordable for every student.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '20+', label: 'Happy Clients' },
                { value: '6', label: 'Services Offered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="font-display font-bold text-2xl text-accent-500 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
