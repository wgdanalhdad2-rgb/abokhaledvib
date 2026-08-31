import { MapPin } from 'lucide-react';

export default function TopTicker() {
  const destinations = [
    "المملكة العربية السعودية", "تركيا", "ماليزيا", "مصر", "الإمارات العربية المتحدة", "قطر", "البحرين", "عمان", "أوروبا", "الولايات المتحدة", "كندا"
  ];

  return (
    <div className="bg-secondary/90 backdrop-blur-md border-b border-white/20 text-primary py-1.5 overflow-hidden relative z-50 flex" dir="rtl">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap shrink-0 pr-8">
        {destinations.concat(destinations).map((dest, idx) => (
          <div key={idx} className="flex items-center gap-2 font-bold text-[13px] tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>{dest}</span>
          </div>
        ))}
      </div>
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap shrink-0 pr-8">
        {destinations.concat(destinations).map((dest, idx) => (
          <div key={`dup-${idx}`} className="flex items-center gap-2 font-bold text-[13px] tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>{dest}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
