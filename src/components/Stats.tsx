import { IdCard, Users, Plane, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: IdCard, value: '+5000', label: 'تأشيرة دولية منجزة' },
    { icon: Users, value: '+3000', label: 'كوادر دولية موظفة' },
    { icon: Plane, value: '+50', label: 'وجهة سياحية وعالمية' },
    { icon: Star, value: '4.9', label: 'تقييم العملاء' },
  ];

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-5 -mt-16 md:-mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-primary-light border border-border p-7 rounded-2xl text-center shadow-xl transition-transform hover:-translate-y-1.5">
            <stat.icon className="w-9 h-9 text-secondary mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-secondary mb-1">{stat.value}</h3>
            <p className="text-text-dim font-medium text-sm uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
