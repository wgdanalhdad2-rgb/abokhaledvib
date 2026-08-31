import { useState, useEffect } from 'react';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'عبدالله محمد',
      role: 'عميل تأشيرة عمل',
      content: 'تعامل راقي واحترافية عالية. تم إنجاز معاملتي في وقت قياسي وبدون أي تعقيدات. أنصح بالتعامل معهم وبشدة.',
      rating: 5,
    },
    {
      id: 2,
      name: 'سارة أحمد',
      role: 'زيارة عائلية',
      content: 'شكراً لوكالة أبو خالد على سرعة الإنجاز والمصداقية. فريق الدعم متجاوب جداً ويشرح لك كل الخطوات بوضوح تام.',
      rating: 5,
    },
    {
      id: 3,
      name: 'خالد صالح',
      role: 'صاحب مؤسسة (توظيف)',
      content: 'تعاقدت معهم لتوفير عمالة لمؤسستي، وكانت الكوادر المختارة على مستوى عالي من الكفاءة. التزام بالمواعيد ومصداقية تامة.',
      rating: 5,
    },
    {
      id: 4,
      name: 'فيصل العتيبي',
      role: 'حجز طيران وفنادق',
      content: 'أسعارهم ممتازة جداً مقارنة بالسوق، ويرتبون لك الرحلة من الألف للياء. رحلتي كانت مريحة وممتعة بفضل ترتيباتهم.',
      rating: 4,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-5 bg-[#f0f7f8] border-y border-border/50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-1.5 rounded-full text-sm font-bold mb-4">
          آراء العملاء
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">ماذا يقول عملاؤنا؟</h3>
        <p className="text-text-dim text-base sm:text-lg font-medium">
          نفخر بثقة عملائنا ونعمل دائماً لتقديم أفضل الخدمات التي تلبي تطلعاتهم وتطلعات أعمالهم
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4 md:px-12">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-6 z-10 hidden sm:block">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-border text-primary hover:bg-primary hover:text-white transition-all shadow-md"
            aria-label="السابق"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-6 z-10 hidden sm:block">
          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-border text-primary hover:bg-primary hover:text-white transition-all shadow-md"
            aria-label="التالي"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-hidden relative min-h-[250px] sm:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-border/80 p-8 md:p-10 rounded-2xl relative shadow-sm"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary/20 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-secondary fill-secondary' : 'text-border'}`} 
                  />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-text-main font-bold leading-relaxed mb-8 relative z-10">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-primary-dark font-extrabold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-text-dim text-sm font-semibold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-secondary' : 'w-2 bg-border hover:bg-text-dim'}`}
              aria-label={`الذهاب إلى الرأي ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
