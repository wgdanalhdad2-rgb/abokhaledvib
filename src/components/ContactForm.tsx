import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Persist the inquiry in localStorage
      const existingInquiries = JSON.parse(localStorage.getItem('abu_khaled_inquiries') || '[]');
      const newInquiry = {
        id: Date.now(),
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('abu_khaled_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));
      
      // Construct WhatsApp redirect URL
      const text = `السلام عليكم، أريد الاستفسار عن خدمة: ${formData.service}\n\nالاسم: ${formData.name}\nالجوال: ${formData.phone}${formData.message ? '\nالرسالة: ' + formData.message : ''}`;
      const waUrl = `https://wa.me/967777176769?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp chat in a new tab
      window.open(waUrl, '_blank');

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer Grid Wrapper */}
        <div className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Info Side (Col-5) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden bg-primary-dark">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-accent-light mb-4"
                >
                  تواصل مباشر
                </motion.span>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  جاهزون لخدمتك الآن
                </h2>
                <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
                  تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا. نحن هنا لمساعدتك وتوجيهك في كل خطوة ومرحلة.
                </p>
              </div>

              {/* Contact details list */}
              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                    <Phone className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-bold">واتساب / اتصال مباشر</span>
                    <a href="tel:+967777176769" className="text-base sm:text-lg font-bold dir-ltr block text-right hover:text-accent-light transition-colors">
                      +967 777 176 769
                    </a>
                    <a href="tel:+967778687819" className="text-base sm:text-lg font-bold dir-ltr block text-right hover:text-accent-light transition-colors">
                      +967 778 687 819
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                    <MapPin className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-bold">الموقع الرئيسي</span>
                    <span className="text-base font-semibold block text-white/95">
                      اليمن / خدمات للمملكة العربية السعودية
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social CTA Buttons */}
            <div className="pt-8 space-y-4 relative z-10">
              <a 
                href="https://wa.me/967777176769" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-[#25d366]/20 transition-all hover:-translate-y-1 text-sm sm:text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>💬 تواصل مباشر عبر واتساب</span>
              </a>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.facebook.com/abrahym.mhmd.mr.mr.2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#156cd4] text-white font-extrabold px-4 py-3 rounded-xl transition-all hover:-translate-y-0.5 text-xs sm:text-sm shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                  <span>فيسبوك</span>
                </a>
                <a 
                  href="https://www.instagram.com/_a777176" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-extrabold px-4 py-3 rounded-xl transition-all hover:-translate-y-0.5 text-xs sm:text-sm shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>إنستغرام</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side (Col-7) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 bg-white text-text-main flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-primary-dark mb-2">
                        الاسم الكامل
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="أدخل اسمك الكريم"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-border rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-primary-dark mb-2">
                        رقم الجوال
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        placeholder="05XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-border rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-primary-dark mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select 
                      id="service" 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-border rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold text-text-main appearance-none cursor-pointer"
                    >
                      <option value="">اختر الخدمة المطلوب الاستفسار عنها</option>
                      <option value="تأشيرة عمل">تأشيرة عمل</option>
                      <option value="تأشيرة زيارة / سياحية">تأشيرة زيارة / سياحية</option>
                      <option value="تأشيرة حج / عمرة">تأشيرة حج / عمرة</option>
                      <option value="توظيف عمالة">توظيف عمالة ومقاولات</option>
                      <option value="حجز طيران / فندق">حجز طيران وفنادق</option>
                      <option value="أخرى">استفسارات أخرى</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary-dark mb-2">
                      تفاصيل الطلب (اختياري)
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-border rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold resize-y min-h-[100px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-0.5 disabled:opacity-75 disabled:hover:translate-y-0 cursor-pointer"
                  >
                    <Send className="w-5 h-5 shrink-0" />
                    <span>{isSubmitting ? 'جاري إرسال الطلب...' : 'إرسال الطلب'}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 px-4 flex flex-col items-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-sm border border-green-100">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-primary-dark">تم إرسال طلبك بنجاح!</h3>
                    <p className="text-text-dim text-base font-semibold max-w-md mx-auto">
                      شكراً لتواصلك معنا. تم تسجيل طلبك وسيقوم أحد مستشارينا بالتواصل معك عبر الواتساب في أقرب وقت ممكن للإجابة على جميع تساؤلاتك.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold text-primary hover:text-primary-dark underline underline-offset-4"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
