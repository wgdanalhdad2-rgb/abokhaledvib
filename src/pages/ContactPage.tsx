import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'موقعنا الرئيسي',
      lines: ['اليمن', 'خدمات للسعودية']
    },
    {
      icon: Phone,
      title: 'اتصل بنا مباشر / واتساب',
      lines: ['+967 777 176 769', '+967 778 687 819']
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      lines: ['info@abukhaled-travel.com']
    },
    {
      icon: Clock,
      title: 'ساعات العمل الرسمية',
      lines: ['السبت - الخميس: 9:00 ص - 10:00 م', 'الجمعة: مغلق']
    }
  ];

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
            تواصل معنا
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            يسعدنا الرد على استفساراتكم وتلقي طلباتكم على مدار الساعة. تواصل معنا بأي طريقة تفضلها.
          </motion.p>
        </div>
      </div>

      {/* Grid of details */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map((det, idx) => {
            const IconComponent = det.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8fafc] border border-border/60 p-6 rounded-2xl space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-primary-dark mb-1">{det.title}</h3>
                  {det.lines.map((line, lIdx) => (
                    <p key={lIdx} className="text-text-dim text-sm sm:text-base font-semibold block leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Frame */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-border mb-16 shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.59739502941!2d46.65751275988165!3d24.693457198751307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0xf202343da38f5a3!2sAl%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1714490000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع أبو خالد للسفريات في الرياض"
          ></iframe>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <ContactForm />
    </main>
  );
}
