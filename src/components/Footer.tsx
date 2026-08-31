import { ChevronLeft, Phone, Mail, Clock, ShieldAlert, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/images/abu_khaled_travel_logo_1785884452103.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#062e32] text-white/80 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-primary text-xl shadow-lg overflow-hidden p-1">
              <img src={logoUrl} alt="شعار وكالة أبو خالد" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white text-xl font-extrabold leading-tight">وكالة أبو خالد للسفريات</h3>
              <span className="text-xs text-white/50 font-medium">سفر، سياحة، توظيف</span>
            </div>
          </div>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
            وكالتك الموثوقة للتأشيرات والتوظيف والسفر إلى المملكة العربية السعودية. نخدمك بكل احترافية ومصداقية منذ أكثر من 15 عاماً.
          </p>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-secondary">
            خدماتنا
          </h4>
          <ul className="space-y-3.5 text-sm">
            {['تأشيرات السعودية', 'توظيف العمالة', 'حجوزات الطيران', 'حجوزات الفنادق'].map((item, idx) => (
              <li key={idx}>
                <Link to="/services" className="flex items-center gap-2 hover:text-secondary hover:translate-x-[-4px] transition-all">
                  <ChevronLeft className="w-4 h-4 text-secondary" />
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-secondary">
            روابط سريعة
          </h4>
          <ul className="space-y-3.5 text-sm">
            {[
              { label: 'الرئيسية', href: '#home' },
              { label: 'لماذا نحن', href: '#why' },
              { label: 'كيف نعمل', href: '#process' },
              { label: 'تواصل معنا', href: '#contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <a 
                  href={`/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href.replace('#', ''));
                  }}
                  className="flex items-center gap-2 hover:text-secondary hover:translate-x-[-4px] transition-all"
                >
                  <ChevronLeft className="w-4 h-4 text-secondary" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li>
              <Link to="/admin" className="flex items-center gap-2 text-white/50 hover:text-secondary hover:translate-x-[-4px] transition-all font-semibold">
                <ChevronLeft className="w-4 h-4 text-secondary/50" />
                <span>لوحة الإدارة</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-secondary">
            تواصل معنا
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-bold">اتصال / واتساب:</span>
              </div>
              <div className="pr-8 space-y-1.5">
                <a href="tel:+967777176769" className="dir-ltr text-right block hover:text-secondary transition-colors font-semibold">
                  +967 777 176 769
                </a>
                <a href="tel:+967778687819" className="dir-ltr text-right block hover:text-secondary transition-colors font-semibold">
                  +967 778 687 819
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-secondary shrink-0" />
              <span>يومياً 9:00 ص - 10:00 م</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
            <a 
              href="https://www.facebook.com/abrahym.mhmd.mr.mr.2025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] transition-all hover:-translate-y-1"
              title="فيسبوك"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/_a777176" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all hover:-translate-y-1"
              title="إنستغرام"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/967777176769" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#25D366] transition-all hover:-translate-y-1"
              title="واتساب"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/50">
        <p>© {currentYear} وكالة أبو خالد للسفريات والسياحة والتوظيف. جميع الحقوق محفوظة.</p>
        <p className="mt-2 sm:mt-0">بوابتك الموثوقة للمملكة العربية السعودية</p>
      </div>
    </footer>
  );
}
