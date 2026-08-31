import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: 'كم تستغرق مدة إنجاز المعاملة واستخراج التأشيرة من اليمن إلى السعودية؟',
      answer: 'تستغرق عملية إنجاز المعاملة وإصدار التأشيرة بالكامل من اليمن إلى المملكة العربية السعودية حوالي شهر واحد (30 يوماً) تقريباً، وذلك بعد استيفاء الأوراق وتقديم كافة المستندات المطلوبة وإتمام الإجراءات الطبية.'
    },
    {
      question: 'ما هي متطلبات استخراج تأشيرة العمل للمملكة العربية السعودية؟',
      answer: 'تتطلب تأشيرة العمل تفويضاً إلكترونياً، إجراء الفحص الطبي المعتمد في أحد المراكز المعتمدة، جواز سفر ساري المفعول لـ 6 أشهر على الأقل، وصوراً شخصية حديثة. وكالتنا تقوم بمساعدتك وتوجيهك خطوة بخطوة.'
    },
    {
      question: 'هل تقدمون خدمة حجز تذاكر الطيران والبرامج السياحية فقط؟',
      answer: 'نعم، نوفر خدمة حجز تذاكر الطيران على جميع الخطوط الجوية بأسعار وعروض منافسة للغاية، بالإضافة إلى تأمين الحجوزات الفندقية والبرامج السياحية المتكاملة.'
    },
    {
      question: 'كيف يمكنني التقديم لفرص العمل والتوظيف المتاحة؟',
      answer: 'يمكنك ملء نموذج الاستفسار مباشرة عبر موقعنا واختيار خدمة "توظيف العمالة"، أو التواصل معنا عبر واتساب لإرسال سيرتك الذاتية وخبراتك ليتم مطابقتها مع الفرص المتاحة.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-5 bg-bg-site border-t border-border">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-1.5 rounded-full text-sm font-bold mb-4">
          الأسئلة الشائعة والاستفسارات
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">لديك استفسار؟</h3>
        <p className="text-text-dim text-base sm:text-lg font-medium">
          إليك إجابات لأهم الأسئلة الشائعة حول خدمات التأشيرات والتوظيف والسفر من اليمن للمملكة
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-border rounded-xl overflow-hidden transition-all hover:border-primary/30 shadow-sm">
            <button 
              className="w-full px-6 py-5 text-right flex items-center justify-between focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h4 className="font-extrabold text-primary-dark text-base sm:text-lg pr-2 leading-snug">{faq.question}</h4>
              <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-8 pb-5 text-text-dim font-medium leading-relaxed text-sm sm:text-base border-t border-border/10 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
