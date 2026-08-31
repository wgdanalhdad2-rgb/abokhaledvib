import Services from '../components/Services';
import Process from '../components/Process';
import { motion } from 'motion/react';

export default function ServicesPage() {
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
            خدماتنا المتكاملة
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            باقة متخصصة من الحلول الممتازة التي تيسر أعمالك، وتضمن لك استخراج التأشيرات، وتوفير العمالة واستقدامها، وإتمام حجوزات السفر بأعلى مستويات الدقة والموثوقية.
          </motion.p>
        </div>
      </div>

      {/* Services and Process */}
      <Services />
      <Process />
    </main>
  );
}
