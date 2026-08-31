import { motion } from 'motion/react';

export default function Partners() {
  const partners = [
    { name: 'الخطوط السعودية', logo: '🇸🇦' },
    { name: 'طيران ناس', logo: '✈️' },
    { name: 'وزارة الخارجية', logo: '🏛️' },
    { name: 'منصة مساند', logo: '🤝' },
    { name: 'إنجاز', logo: '📝' },
    { name: 'طيران الإمارات', logo: '🇦🇪' },
    { name: 'الخطوط القطرية', logo: '🇶🇦' },
    { name: 'فلاي دبي', logo: '🛫' },
  ];

  return (
    <section className="py-16 px-5 bg-primary-light border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-text-dim uppercase tracking-wider mb-2">شركاء النجاح المعتمدون</h3>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-primary-light to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-primary-light to-transparent z-10"></div>
        
        <div className="flex overflow-hidden py-4">
          <motion.div 
            className="flex space-x-16 space-x-reverse items-center min-w-full"
            animate={{ x: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-3 text-text-dim hover:text-text-main transition-colors px-8 whitespace-nowrap opacity-60 hover:opacity-100">
                <span className="text-3xl grayscale group-hover:grayscale-0">{partner.logo}</span>
                <span className="text-xl font-bold font-cairo">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
