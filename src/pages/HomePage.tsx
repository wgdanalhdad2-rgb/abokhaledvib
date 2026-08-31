import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        // Wait a small bit for components to render
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <main className="flex-grow">
      {/* 1. Hero banner with accomplishments */}
      <Hero />
      
      {/* 2. Partners scrolling marquee */}
      <Partners />
      
      {/* 3. Services list (تأشيرات، توظيف، طيران) */}
      <Services />
      
      {/* 4. Why Us value props */}
      <WhyUs />
      
      {/* 5. Destinations cards (Saudi Arabia, UAE, Turkey, Egypt) */}
      <Destinations />
      
      {/* 6. Simple four-step process */}
      <Process />
      
      {/* 7. Verified Client Testimonials carousel */}
      <Testimonials />
      
      {/* 8. Frequently Asked Questions drop-downs */}
      <FAQ />
      
      {/* 9. Contact Form and direct WhatsApp/phone/social details */}
      <ContactForm />
      
      {/* 10. Premium email newsletter signup */}
      <Newsletter />
    </main>
  );
}

