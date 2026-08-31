import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Plane, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds if not seen in this session
    const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPromo', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-white border border-border rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-primary to-secondary" />
            
            <button 
              onClick={handleClose}
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto relative">
                <div className="absolute inset-0 bg-secondary/15 rounded-2xl blur-lg animate-pulse" />
                <Sparkles className="w-8 h-8 text-secondary relative z-10" />
              </div>
              
              <h3 className="text-2xl font-black text-primary-dark text-center mb-2">أحدث العروض الحصرية!</h3>
              <p className="text-text-dim text-center mb-8 text-sm font-semibold">اغتنم الفرصة واستفد من أقوى العروض والفرص المتاحة حالياً لدى وكالة أبو خالد.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-site/60 border border-border hover:bg-bg-site transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-dark mb-1 text-sm md:text-base">تأشيرات عمل وعقود جاهزة</h4>
                    <p className="text-xs md:text-sm text-text-dim font-medium">توفر تأشيرات عمل حرة وتأشيرات مهنية فورية للمملكة العربية السعودية بأسعار استثنائية.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-site/60 border border-border hover:bg-bg-site transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary-hover flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-dark mb-1 text-sm md:text-base">فرص واستقدام عمالة منزلية</h4>
                    <p className="text-xs md:text-sm text-text-dim font-medium">باقات استقدام سريعة بعقود رسمية موثقة ومعتمدة مع ضمانة كاملة ومتابعة مستمرة.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    handleClose();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 rounded-xl text-center shadow-lg shadow-primary/10 hover:-translate-y-0.5 transition-all text-sm block"
                >
                  استعلم الآن
                </a>
                <button 
                  onClick={handleClose}
                  className="px-6 py-3.5 rounded-xl font-bold text-text-dim hover:text-text-main hover:bg-primary/5 transition-colors text-sm"
                >
                  تخطي
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
