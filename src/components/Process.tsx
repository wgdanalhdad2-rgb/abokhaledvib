import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: 1,
      title: 'تواصل معنا',
      desc: 'تواصل معنا عبر واتساب، أو ملء النموذج، أو الاتصال الهاتفي المباشر.'
    },
    {
      num: 2,
      title: 'استشارة مجانية',
      desc: 'نقوم بدراسة استفسارك ومستنداتك لتحديد الحلول والخيار الأفضل لك.'
    },
    {
      num: 3,
      title: 'إعداد المستندات',
      desc: 'نساعدك خطوة بخطوة في استيفاء وتجهيز جميع الوثائق والأوراق اللازمة.'
    },
    {
      num: 4,
      title: 'الإنجاز والمتابعة',
      desc: 'نبدأ على الفور في تنفيذ المعاملة ومتابعتها بدقة متناهية حتى إتمامها بنجاح.'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold mb-4"
          >
            خطوات بسيطة
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4"
          >
            كيف نعمل معك؟
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-base sm:text-lg max-w-2xl mx-auto font-medium"
          >
            أربع خطوات فقط تفصلك عن تحقيق هدفك وإتمام معاملتك بيسر وسهولة
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-12">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[3px] bg-gradient-to-l from-primary via-primary/50 to-secondary z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                {/* Step Circle */}
                <div className="w-20 h-20 bg-white border-3 border-primary text-primary group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-md shadow-primary/5 transition-all duration-300 relative">
                  {step.num}
                  {/* Small pulse aura */}
                  <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-extrabold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-text-dim text-sm sm:text-base leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
