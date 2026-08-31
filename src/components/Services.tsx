import React from 'react';
import { Compass, Briefcase, Plane, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'تأشيرات السعودية',
      desc: 'استخراج جميع أنواع التأشيرات بسرعة ودقة عالية مع متابعة كاملة من خبرائنا.',
      bullets: ['تأشيرة عمل', 'تأشيرة زيارة عائلية', 'تأشيرة حج وعمرة', 'تأشيرة سياحية']
    },
    {
      icon: Briefcase,
      title: 'توظيف العمالة',
      desc: 'نربط بين أصحاب العمل والعمالة المؤهلة والموثوقة في مختلف التخصصات المهنية والمنزلية.',
      bullets: ['عمالة منزلية', 'سائقين ومهنيين', 'عقود رسمية موثقة', 'متابعة ما بعد التوظيف']
    },
    {
      icon: Plane,
      title: 'حجوزات طيران وفنادق',
      desc: 'أفضل العروض والأسعار التنافسية على تذاكر الطيران وأرقى الفنادق داخل المملكة وخارجها.',
      bullets: ['تذاكر طيران بأسعار منافسة', 'فنادق من اقتصادية إلى فاخرة', 'باقات سياحية متكاملة', 'دعم متواصل على مدار الساعة']
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold mb-4"
          >
            خدماتنا المتميزة
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4"
          >
            كل ما تحتاجه في مكان واحد
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-base sm:text-lg max-w-2xl mx-auto font-medium"
          >
            نغطي جميع احتياجاتك للسفر والعمل في السعودية باحترافية وسرعة وموثوقية عالية
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-bg-site/50 hover:bg-white p-8 sm:p-10 rounded-2xl border border-border/70 hover:border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent border top */}
                <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-l from-primary to-secondary scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary-dark mb-3">
                    {srv.title}
                  </h3>
                  
                  <p className="text-text-dim text-sm sm:text-base mb-6 leading-relaxed">
                    {srv.desc}
                  </p>

                  {/* Bullet points list */}
                  <ul className="space-y-3 mb-8">
                    {srv.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-sm font-semibold text-text-main">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors border-t border-border/60 pt-4 w-full text-right"
                >
                  <span>اطلب الآن</span>
                  <span className="group-hover:translate-x-1 transition-transform">←</span>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
