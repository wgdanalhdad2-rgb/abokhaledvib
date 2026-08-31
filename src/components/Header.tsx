import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Award, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../assets/images/abu_khaled_travel_logo_1785884452103.jpg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#why', label: 'لماذا نحن' },
    { href: '#process', label: 'كيف نعمل' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMenuOpen(false);
    
    // If we are already on home page, scroll to section
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Allow default router navigation to "/" then handle anchor scrolling
      // Handled via router redirect
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-border/60 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-border shadow-sm overflow-hidden p-1 transition-transform group-hover:scale-105">
              <img src={logoUrl} alt="شعار وكالة أبو خالد" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-primary leading-tight group-hover:text-primary-dark transition-colors">
                وكالة أبو خالد
              </h1>
              <span className="text-xs text-text-dim font-medium tracking-wide">للسفريات والسياحة والتوظيف</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href === '#home' ? '/' : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-[15px] font-bold text-text-main hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-to-l from-primary to-primary-light text-white font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all text-sm"
            >
              اطلب استشارة مجانية
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-primary hover:bg-primary/5 rounded-xl transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href === '#home' ? '/' : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-bold text-text-main hover:bg-primary/5 hover:text-primary rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white font-extrabold text-center py-3 rounded-xl mt-3 block shadow-md"
              >
                اطلب استشارة مجانية
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
