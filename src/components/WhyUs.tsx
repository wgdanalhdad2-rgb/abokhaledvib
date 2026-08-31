import { Zap, CircleDollarSign, Shield, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const features = [
    { 
      icon: Zap, 
      title: 'سرعة الإنجاز', 
      desc: 'ننجز جميع معاملاتك في أقصر وقت ممكن مع ضمان الجودة والالتزام بالوقت.' 
    },
    { 
      icon: CircleDollarSign, 
      title: 'أسعار تنافسية', 
      desc: 'أفضل الأسعار في السوق مع شفافية كاملة بدون أي رسوم خفية أو تكاليف مفاجئة.' 
    },
    { 
      icon: Shield, 
      title: 'موثوقية عالية', 
      desc: 'مرخصون رسمياً بالكامل، وآلاف العملاء يثقون بخبرتنا التي تمتد لأكثر من 15 عاماً.' 
    },
    { 
      icon: Headphones, 
      title: 'دعم متواصل', 
      desc: 'فريق خدمة عملاء متخصص جاهز للإجابة على جميع استفساراتك على مدار الساعة.' 
    }
  ];

  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f7f8] to-[#f8fafc] border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold mb-4"
          >
            لماذا تختارنا؟
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4"
          >
            نتميز بما نقدمه
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-base sm:text-lg max-w-2xl mx-auto font-medium"
          >
            نحن أكثر من مجرد وكالة سفر.. نحن شريكك الموثوق في كل خطوة نحو تحقيق هدفك
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-border/60"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light text-white rounded-full flex items-center justify-center shadow-md">
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-extrabold text-primary-dark mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-text-dim text-sm sm:text-base leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
