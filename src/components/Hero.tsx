import { Send, MapPin, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const stats = [
    { num: '+5000', label: 'تأشيرة ناجحة' },
    { num: '+3200', label: 'عقد توظيف' },
    { num: '15+', label: 'سنة خبرة' },
    { num: '98%', label: 'نسبة الرضا' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative text-white overflow-hidden bg-gradient-to-br from-primary via-[#0a4a50] to-[#083b40] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-1/2 -left-1/4 w-[70%] h-[150%] bg-gradient-to-tr from-secondary/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Hero Content Column */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs sm:text-sm font-bold shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            وكالة معتمدة وموثوقة للسفر والسياحة والتوظيف
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight"
          >
            بوابتك الموثوقة <br />
            إلى <span className="text-secondary-hover bg-gradient-to-l from-accent-light to-secondary bg-clip-text text-transparent">المملكة العربية السعودية</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            نقدم خدمات التأشيرات، التوظيف، حجوزات الطيران والفنادق بأعلى جودة وأسرع وقت وأسعار تنافسية. حزنا على ثقة آلاف العملاء طوال مسيرة متميزة وممتدة لسنوات.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-secondary hover:bg-accent-light text-primary-dark font-extrabold text-lg rounded-xl shadow-lg shadow-secondary/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              🚀 ابدأ الآن
            </button>
            <button
              onClick={() => handleScrollTo('services')}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-lg rounded-xl border border-white/20 transition-all hover:border-white/40"
            >
              تعرف على خدماتنا
            </button>
          </motion.div>
        </div>

        {/* Hero Card/Stats Column */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl relative"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-primary-dark font-black px-6 py-2 rounded-full shadow-lg text-sm whitespace-nowrap">
              إنجازاتنا بالأرقام
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/5 rounded-2xl p-5 text-center flex flex-col justify-center items-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-accent-light mb-1">
                    {stat.num}
                  </span>
                  <span className="text-sm text-white/80 font-bold whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-white/70 font-semibold">
              <CheckCircle className="w-4 h-4 text-accent-light shrink-0" />
              <span>مرخصون ومعتمدون رسمياً بالكامل</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
