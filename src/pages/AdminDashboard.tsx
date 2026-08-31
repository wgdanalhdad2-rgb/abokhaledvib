import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut,
  Plus,
  Trash2,
  Edit,
  Image as ImageIcon,
  Lock,
  X,
  MessageSquare,
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/images/abu_khaled_travel_logo_1785884452103.jpg';

// Inquiries TypeScript Interface
interface Inquiry {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: 'pending' | 'completed';
  createdAt: string;
}

// Initial default destinations
const initialDestinations = [
  { id: 1, name: 'الرياض - عاصمة المملكة', type: 'عمل وسياحة', image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'مكة المكرمة والمدينة', type: 'عمرة وزيارة', image: 'https://images.unsplash.com/photo-1591604129939-f1edd4d9f7fa?auto=format&fit=crop&q=80&w=600' },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [activeTab, setActiveTab] = useState('inquiries');
  const [destinations, setDestinations] = useState(initialDestinations);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form states for new destinations
  const [newDestName, setNewDestName] = useState('');
  const [newDestType, setNewDestType] = useState('');
  const [newDestImage, setNewDestImage] = useState('');

  // Read inquiries on mount
  useEffect(() => {
    const loadedInquiries = JSON.parse(localStorage.getItem('abu_khaled_inquiries') || '[]');
    setInquiries(loadedInquiries);
  }, [isAuthenticated, activeTab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '775050') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleAddDestination = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDestName && newDestType) {
      const newDest = {
        id: Date.now(),
        name: newDestName,
        type: newDestType,
        image: newDestImage || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600'
      };
      setDestinations([...destinations, newDest]);
      setShowAddForm(false);
      setNewDestName('');
      setNewDestType('');
      setNewDestImage('');
    }
  };

  const deleteDestination = (id: number) => {
    setDestinations(destinations.filter(d => d.id !== id));
  };

  // Toggle Inquiry Status
  const toggleInquiryStatus = (id: number) => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        return { ...inq, status: inq.status === 'pending' ? 'completed' : 'pending' as const };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('abu_khaled_inquiries', JSON.stringify(updated));
  };

  // Delete Inquiry
  const deleteInquiry = (id: number) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('abu_khaled_inquiries', JSON.stringify(updated));
  };

  // Generate dynamic WhatsApp link
  const getWhatsAppLink = (phone: string, name: string, service: string) => {
    let cleanPhone = phone.replace(/\s+/g, '').replace('+', '').replace('-', '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '966' + cleanPhone.substring(1); // Default to Saudi code if simple mobile number
    } else if (cleanPhone.length === 9 && (cleanPhone.startsWith('77') || cleanPhone.startsWith('78') || cleanPhone.startsWith('73') || cleanPhone.startsWith('71') || cleanPhone.startsWith('70'))) {
      cleanPhone = '967' + cleanPhone; // Default to Yemen code if simple mobile number
    }
    const text = encodeURIComponent(`مرحباً أخي الكريم ${name}، نواصل معك من وكالة أبو خالد للسفريات بخصوص استفسارك بخصوص (${service}). كيف يمكننا خدمتك اليوم؟`);
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-[#0a4a50] to-[#083b40] flex items-center justify-center p-4">
        <div className="bg-white border border-border/20 rounded-3xl p-8 md:p-12 w-full max-w-md shadow-2xl text-center">
          <div className="w-20 h-20 rounded-2xl bg-white border border-border overflow-hidden p-2 mx-auto mb-6 shadow-md">
            <img src={logoUrl} alt="وكالة أبو خالد" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl font-extrabold text-primary mb-2">تسجيل دخول الإدارة</h2>
          <p className="text-text-dim text-sm font-semibold mb-8">يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute right-4 top-4 w-5 h-5 text-text-dim" />
              <input 
                type="password" 
                placeholder="كلمة المرور..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError(false);
                }}
                className={`w-full bg-[#f8fafc] border ${loginError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10' : 'border-border focus:border-primary focus:ring-primary/10'} rounded-xl py-3.5 pr-12 pl-4 text-text-main font-bold outline-none focus:ring-4 transition-all`}
                dir="ltr"
              />
            </div>
            {loginError && <p className="text-red-500 text-sm font-bold text-right">كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.</p>}
            
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              دخول للوحة التحكم
            </button>
            <div className="mt-6 pt-6 border-t border-border">
              <Link to="/" className="text-primary hover:text-primary-dark font-extrabold text-sm flex items-center justify-center gap-2">
                العودة للموقع الرئيسي
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Statistics calculations
  const totalInquiries = inquiries.length;
  const pendingInquiries = inquiries.filter(i => i.status === 'pending').length;
  const completedInquiries = inquiries.filter(i => i.status === 'completed').length;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">
      
      {/* Sidebar Layout */}
      <aside className="w-full lg:w-72 bg-[#0d5c63] text-white flex flex-col shrink-0 lg:min-h-screen">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white overflow-hidden p-1 shrink-0">
            <img src={logoUrl} alt="وكالة أبو خالد" className="w-full h-full object-contain" />
          </div>
          <div>
            <h2 className="text-white font-extrabold text-lg leading-tight">وكالة أبو خالد</h2>
            <p className="text-accent-light text-xs font-bold">لوحة الإدارة الموحدة</p>
          </div>
        </div>

        <nav className="flex-grow py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-right ${activeTab === 'dashboard' ? 'bg-white/10 text-white shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>نظرة عامة</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all text-right ${activeTab === 'inquiries' ? 'bg-white/10 text-white shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <span>طلبات العملاء والاستفسارات</span>
            </div>
            {pendingInquiries > 0 && (
              <span className="bg-secondary text-primary-dark text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                {pendingInquiries}
              </span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab('destinations')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-right ${activeTab === 'destinations' ? 'bg-white/10 text-white shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
          >
            <MapPin className="w-5 h-5" />
            <span>الوجهات النشطة</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-200 transition-all font-bold">
            <LogOut className="w-5 h-5 rotate-180" />
            <span>العودة للموقع الرئيسي</span>
          </Link>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-grow p-6 sm:p-10 lg:p-12 overflow-y-auto">
        
        {/* Header bar */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-6 mb-10">
          <div>
            <span className="text-xs text-primary font-bold tracking-widest uppercase">لوحة تحكم المشرف</span>
            <h1 className="text-3xl font-black text-primary-dark mt-1">إدارة الوكالة والمحتوى</h1>
          </div>
          <div className="text-text-dim text-sm font-semibold">
            التوقيت الحالي: <span dir="ltr">2026-08-04</span>
          </div>
        </header>

        {/* 1. DASHBOARD OVERVIEW TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'إجمالي الطلبات المستلمة', value: totalInquiries, icon: MessageSquare, color: 'text-primary', bg: 'bg-primary/10' },
                { label: 'طلبات قيد المتابعة والانتظار', value: pendingInquiries, icon: Clock, color: 'text-secondary-hover', bg: 'bg-secondary/10' },
                { label: 'طلبات تم إنجازها', value: completedInquiries, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'الوجهات المفعلة بالموقع', value: destinations.length, icon: MapPin, color: 'text-blue-600', bg: 'bg-blue-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-border/70 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-text-dim text-xs font-bold mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-black text-primary-dark">{stat.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-border/70 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-primary-dark">أهلاً بك في لوحة تحكم وكالة أبو خالد 👋</h3>
              <p className="text-text-dim font-medium leading-relaxed">
                من خلال لوحة التحكم هذه، يمكنك مراجعة طلبات السفر والتأشيرات والتوظيف التي يرسلها العملاء مباشرة عبر الموقع الإلكتروني، ومتابعة حالاتها، ومراسلتهم بضغطة زر عبر الواتساب لتنسيق الإجراءات. كما يمكنك تعديل وإضافة الوجهات السياحية المعروضة.
              </p>
            </div>
          </div>
        )}

        {/* 2. INQUIRIES LEAD MANAGER TAB */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-primary-dark">طلبات العملاء والاستفسارات المستلمة</h2>
                <p className="text-text-dim text-sm font-semibold mt-1">راجع معلومات العملاء وتواصل معهم مباشرة لتنسيق الطلبات.</p>
              </div>
            </div>

            {inquiries.length === 0 ? (
              <div className="bg-white border border-dashed border-border p-16 rounded-2xl text-center space-y-4">
                <MessageSquare className="w-16 h-16 text-text-dim mx-auto opacity-40" />
                <h3 className="text-xl font-extrabold text-primary-dark">لا توجد طلبات جديدة حالياً</h3>
                <p className="text-text-dim text-sm font-semibold max-w-sm mx-auto">عندما يقوم زوار الموقع بملء استمارة التواصل في الصفحة الرئيسية، ستظهر تفاصيل طلباتهم هنا فوراً.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {inquiries.map((inq) => (
                  <div 
                    key={inq.id} 
                    className={`bg-white border ${inq.status === 'completed' ? 'border-green-100 bg-green-50/5' : 'border-border/70'} p-6 sm:p-8 rounded-2xl shadow-sm relative transition-all flex flex-col md:flex-row justify-between gap-6 items-start md:items-center`}
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-black text-lg text-primary-dark">{inq.name}</span>
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                          {inq.service}
                        </span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${inq.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-secondary/10 text-secondary-hover'}`}>
                          {inq.status === 'completed' ? 'تم التواصل والإنجاز' : 'قيد الانتظار والمتابعة'}
                        </span>
                      </div>
                      
                      <div className="text-sm font-bold text-text-dim flex items-center gap-4">
                        <span>الجوال: <strong className="text-text-main" dir="ltr">{inq.phone}</strong></span>
                        <span>تاريخ الطلب: <strong className="text-text-main">{new Date(inq.createdAt).toLocaleDateString('ar-SA')}</strong></span>
                      </div>

                      {inq.message && (
                        <div className="bg-bg-site/60 p-4 rounded-xl text-sm font-semibold text-text-main border border-border/40 mt-2">
                          {inq.message}
                        </div>
                      )}
                    </div>

                    {/* Action controls */}
                    <div className="flex flex-wrap gap-2 items-center shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-border/50">
                      {/* WhatsApp Chat Button */}
                      <a 
                        href={getWhatsAppLink(inq.phone, inq.name, inq.service)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow md:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>مراسلة واتساب</span>
                      </a>

                      {/* Toggle status */}
                      <button 
                        onClick={() => toggleInquiryStatus(inq.id)}
                        className={`flex-grow md:flex-none inline-flex items-center justify-center gap-1.5 border text-sm font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${inq.status === 'completed' ? 'bg-white border-green-200 text-green-700 hover:bg-green-50' : 'bg-white border-border text-text-main hover:bg-[#f8fafc]'}`}
                      >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        <span>{inq.status === 'completed' ? 'إعادة للانتظار' : 'تعليم كمكتمل'}</span>
                      </button>

                      {/* Delete */}
                      <button 
                        onClick={() => deleteInquiry(inq.id)}
                        className="inline-flex items-center justify-center w-10 h-10 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-colors cursor-pointer"
                        title="حذف الطلب"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. DESTINATIONS AND SERVICES MANAGER TAB */}
        {activeTab === 'destinations' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-primary-dark">إدارة الوجهات والأعمال</h2>
                <p className="text-text-dim text-sm font-semibold mt-1">أضف أو عدل الوجهات والخدمات السياحية التي تظهر في الصفحة الرئيسية.</p>
              </div>
              <button 
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                {showAddForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                {showAddForm ? 'إلغاء' : 'إضافة عمل / وجهة جديدة'}
              </button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAddDestination} className="bg-white border border-border p-6 sm:p-8 rounded-2xl mb-8 space-y-6">
                <h3 className="text-lg font-black text-primary-dark">تفاصيل العمل الجديد</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-dark mb-2 text-sm font-bold">اسم الوجهة / العمل</label>
                    <input 
                      type="text" 
                      required
                      value={newDestName}
                      onChange={(e) => setNewDestName(e.target.value)}
                      placeholder="مثال: الرياض، استقدام العمالة المنزلية..." 
                      className="w-full bg-[#f8fafc] border border-border rounded-xl px-4 py-3 text-text-main outline-none focus:border-primary transition-colors font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-dark mb-2 text-sm font-bold">نوع الخدمة / التصنيف</label>
                    <input 
                      type="text" 
                      required
                      value={newDestType}
                      onChange={(e) => setNewDestType(e.target.value)}
                      placeholder="مثال: سياحة أعمال، عمالة ومهنيين..." 
                      className="w-full bg-[#f8fafc] border border-border rounded-xl px-4 py-3 text-text-main outline-none focus:border-primary transition-colors font-bold"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-primary-dark mb-2 text-sm font-bold">رابط صورة الوجهة (اختياري)</label>
                    <div className="flex relative">
                      <ImageIcon className="absolute right-4 top-3.5 w-5 h-5 text-text-dim" />
                      <input 
                        type="url" 
                        value={newDestImage}
                        onChange={(e) => setNewDestImage(e.target.value)}
                        placeholder="https://images.unsplash.com/..." 
                        className="w-full bg-[#f8fafc] border border-border rounded-xl pr-12 pl-4 py-3 text-text-main outline-none focus:border-primary transition-colors text-left font-semibold"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-2.5 rounded-xl text-text-dim hover:bg-primary/5 transition-all font-bold"
                  >
                    إلغاء
                  </button>
                  <button 
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded-xl font-bold transition-all cursor-pointer shadow-md"
                  >
                    حفظ الوجهة الجديدة
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest) => (
                <div key={dest.id} className="bg-white border border-border/70 rounded-2xl overflow-hidden group shadow-sm flex flex-col justify-between">
                  <div className="h-48 overflow-hidden relative">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                      {dest.type}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-extrabold text-primary-dark">{dest.name}</h3>
                    
                    <div className="flex justify-end gap-2 border-t border-border/50 pt-4">
                      <button 
                        onClick={() => deleteDestination(dest.id)} 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>حذف الوجهة</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
