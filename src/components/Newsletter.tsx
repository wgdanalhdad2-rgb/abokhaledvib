import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-5 bg-[#094247] border-y border-border/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, var(--color-secondary) 0%, transparent 50%)' }}></div>
      
      <div className="max-w-4xl mx-auto bg-[#0d5c63] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">اشترك في نشرتنا البريدية</h3>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
            احصل على أحدث عروض الطيران، باقات السياحة، وفرص التوظيف المتاحة مباشرة في بريدك الإلكتروني.
          </p>
        </div>
        
        <div className="flex-1 w-full">
          {isSubscribed ? (
            <div className="bg-green-500/10 border border-green-500/35 text-green-400 p-4 rounded-xl text-center font-bold">
              تم الاشتراك بنجاح! شكراً لك لثقتك بنا.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <Mail className="absolute right-4 w-5 h-5 text-white/60" />
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني..." 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-xl py-4 pr-12 pl-32 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary focus:bg-white/10 transition-all text-sm sm:text-base font-semibold"
                dir="rtl"
              />
              <button 
                type="submit"
                className="absolute left-2 top-2 bottom-2 bg-secondary text-primary-dark px-6 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2"
              >
                <span>اشترك</span>
                <ArrowLeft className="w-4 h-4 hidden sm:block" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
