import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/967777176769" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="تواصل عبر الواتساب"
      className="fixed bottom-6 left-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] z-50 transition-all hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
