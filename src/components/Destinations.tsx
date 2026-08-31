import { MapPin, ArrowUpLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      country: 'المملكة العربية السعودية',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=600&h=800',
      description: 'تأشيرات عمل، زيارات عائلية، حج وعمرة',
      tags: ['عمل', 'عمرة']
    },
    {
      id: 2,
      country: 'الإمارات العربية المتحدة',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=800',
      description: 'سياحة، أعمال، تسوق',
      tags: ['سياحة', 'أعمال']
    },
    {
      id: 3,
      country: 'تركيا',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600&h=800',
      description: 'برامج سياحية متكاملة، رحلات عائلية',
      tags: ['سياحة', 'عائلية']
    },
    {
      id: 4,
      country: 'مصر',
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600&h=800',
      description: 'سياحة علاجية، ترفيه، دراسة',
      tags: ['علاجية', 'ترفيه']
    }
  ];

  return (
    <section id="destinations" className="py-32 px-5 bg-primary relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-secondary/10 text-secondary px-5 py-1.5 rounded-full text-sm font-bold mb-4 border border-secondary/20"
            >
              وجهاتنا العالمية
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            >
              اكتشف العالم <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-200">معنا</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg"
            >
              نغطي مجموعة واسعة من الوجهات الدولية لنوفر لك خيارات متعددة تناسب كافة احتياجاتك من سفر وسياحة وعمل
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors font-bold group"
          >
            عرض كل الوجهات
            <ArrowUpLeft className="w-5 h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden h-[450px] cursor-pointer shadow-xl shadow-black/50 border border-white/5"
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10"></div>
              
              <img 
                src={dest.image} 
                alt={dest.country} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {dest.tags.map(tag => (
                  <span key={tag} className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  {dest.country}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dest.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-secondary text-sm font-bold flex items-center gap-2">
                    استكشف الوجهة
                    <ArrowUpLeft className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
