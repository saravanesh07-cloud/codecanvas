import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectPack from './components/ProjectPack';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Initialize scroll reveal for sections not caught by useScrollReveal hooks
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all .reveal elements after initial paint
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <ProjectPack />
        <Portfolio />
        <HowItWorks />
        <Pricing />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
