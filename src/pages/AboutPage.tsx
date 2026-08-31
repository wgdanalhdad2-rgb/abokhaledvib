import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import { Award, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0d5c63] to-[#094247] py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black"
          >
            من نحن
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            تأسست وكالة أبو خالد للسفريات والسياحة والتوظيف لتكون جسراً موثوقاً يربط بين تطلعات عملائنا وأهدافهم، وبشكل خاص تيسير كافة معاملات السفر والتوظيف للمملكة العربية السعودية.
          </motion.p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        <div className="bg-[#f8fafc] border border-border/60 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-primary-dark">رؤيتنا</h3>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed font-medium">
            أن نكون الوكالة الأكثر ثقة واحترافية في تقديم خدمات التأشيرات والتوظيف والسفر، وتوفير تجربة خالية من المتاعب لعملائنا الكرام.
          </p>
        </div>

        <div className="bg-[#f8fafc] border border-border/60 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-primary-dark">رسالتنا</h3>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed font-medium">
            تسهيل إجراءات السفر والتوظيف والاستقدام بالسرعة القصوى، وبجودة ومصداقية تتجاوز توقعات العملاء وأصحاب العمل في مختلف القطاعات.
          </p>
        </div>

        <div className="bg-[#f8fafc] border border-border/60 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-primary-dark">قيمنا</h3>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed font-medium">
            نلتزم بالنزاهة، والوضوح، والشفافية الكاملة في التسعير والإنجاز، واضعين رضى وثقة العميل كأعلى أولوية في جميع أعمالنا اليومية.
          </p>
        </div>
      </div>

      {/* Why Choose Us & Process */}
      <WhyUs />
      <Process />
    </main>
  );
}
