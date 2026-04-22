```react
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Plane, 
  Home, 
  Film, 
  ShoppingBag, 
  Award, 
  TrendingUp, 
  ExternalLink, 
  CheckCircle,
  Menu,
  X,
  Languages,
  Layout,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [isRtl, setIsRtl] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    en: {
      name: "Ajmin Fayaz",
      title: "UI/UX Designer • Specialized in MENA High-Growth Verticals",
      location: "Kerala, India (Ready to Relocate)",
      visa: "Visa: Not in UAE (Entry Permit Ready)",
      summary: "Strategic designer bridging Business Intelligence and Cultural Engineering. Mastering the UAE Federal Design System 3.0 to deliver 'Never Simple' digital solutions for the D33 Agenda.",
      projects: "Strategic Case Studies",
      skills: "Technical Governance",
      about: "Cultural Engineering",
      contact: "Acquisition",
      visitSite: "View Prototype",
      rtlToggle: "Switch to RTL (Arabic Context)",
      ltrToggle: "Switch to LTR (English)",
      roi: "ROI IMPACT",
      d33: "D33 ALIGNMENT"
    },
    ar: {
      name: "أجمين فياض",
      title: "مصمم واجهة وتجربة المستخدم • متخصص في قطاعات النمو العالي",
      location: "كيرالا، الهند (مستعد للانتقال)",
      visa: "تأشيرة: خارج الدولة (جاهز لتصريح الدخول)",
      summary: "مصمم استراتيجي يجمع بين ذكاء الأعمال والهندسة الثقافية. إتقان نظام التصميم الحكومي الإماراتي 3.0 لتقديم حلول رقمية تدعم أجندة دبي الاقتصادية D33.",
      projects: "دراسات الحالة الاستراتيجية",
      skills: "الحوكمة التقنية",
      about: "الهندسة الثقافية",
      contact: "التواصل",
      visitSite: "عرض النموذج",
      rtlToggle: "التبديل إلى RTL (السياق العربي)",
      ltrToggle: "التبديل إلى LTR (الإنجليزية)",
      roi: "تأثير العائد",
      d33: "تماشي D33"
    }
  };

  const content = isRtl ? t.ar : t.en;

  const projects = [
    {
      id: 'travel',
      title: isRtl ? "منصة حجز السفر الموحدة" : "Unified Travel Ecosystem",
      desc: isRtl ? "حل تشتت التبويب عبر دمج الطيران والفنادق في رحلة مستخدم واحدة." : "Eliminating 'Tab Fatigue' by consolidating flights, hotels, and rentals into a single high-trust flow.",
      icon: <Plane className="w-6 h-6" />,
      tag: "D33: Global Tourism Hub",
      metrics: "35% Conversion uplift",
      link: "https://www.figma.com/proto/lCtrm7hDTCGYcWyTcn7nSb"
    },
    {
      id: 'proptech',
      title: isRtl ? "سوق العقارات الفاخرة" : "Premium PropTech Marketplace",
      desc: isRtl ? "منصة عقارية عالية الثقة مع تكامل الجولات الافتراضية وأنظمة تقييم الوكلاء." : "High-trust real estate interface utilizing virtual tours and verified agent metrics to reduce remote viewing fatigue.",
      icon: <Home className="w-6 h-6" />,
      tag: "Real Estate Digitalization",
      metrics: "80% Trust Score",
      link: "https://www.figma.com/proto/lCtrm7hDTCGYcWyTcn7nSb?node-id=116-60"
    },
    {
      id: 'cinema',
      title: isRtl ? "تطبيق حجز الأفلام السينمائي" : "Cinematic Movie Ticketing",
      desc: isRtl ? "إعادة تصميم تجربة الحجز للتخلص من الفوضى في الواجهات كثيفة الفلاتر." : "Redesigning the booking experience to eliminate clutter in filter-heavy interfaces with real-time pricing.",
      icon: <Film className="w-6 h-6" />,
      tag: "Entertainment Tech",
      metrics: "40% Faster Checkout",
      link: "https://www.figma.com/proto/V0Vh28V2yuY1wijbCg7lpl?node-id=400-1492"
    },
    {
      id: 'ecom',
      title: isRtl ? "تطبيق التجارة الفاخرة" : "Artisanal E-commerce",
      desc: isRtl ? "تحويل الإحساس الحسي للشوكولاتة إلى واجهة رقمية بصرية غنية." : "Translating the sensory feel of premium artisanal products into a rich, conversion-focused digital UI.",
      icon: <ShoppingBag className="w-6 h-6" />,
      tag: "Luxury Retail",
      metrics: "22% AOV Increase",
      link: "https://www.figma.com/proto/cl418nppkpMtQE1R9k254t?node-id=66-6"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0a0a0c] text-slate-100 font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-black text-xl">
              AF
            </div>
            <span className="hidden sm:block font-bold tracking-tight text-xl">{content.name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setIsRtl(!isRtl)} className="flex items-center gap-2 text-sm font-medium hover:text-amber-400 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Languages size={16} />
              {isRtl ? content.ltrToggle : content.rtlToggle}
            </button>
            <a href="#projects" className="text-sm font-medium hover:text-amber-400">{content.projects}</a>
            <a href="#about" className="text-sm font-medium hover:text-amber-400">{content.about}</a>
            <a href="mailto:fayazajmin@gmail.com" className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-full text-sm font-bold transition-transform active:scale-95">
              {content.contact}
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl rounded-full opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <ShieldCheck size={14} />
            UAE FEDERAL DESIGN SYSTEM 3.0 COMPLIANT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            {isRtl ? (
              <>نصمم <span className="text-amber-500">مستقبل دبي</span> الرقمي</>
            ) : (
              <>Designing <span className="text-amber-500">Dubai's Digital</span> Future</>
            )}
          </h1>
          
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed mb-10">
            {content.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-500"><MapPin /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                <p className="text-sm font-medium">Kerala, India</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500"><Globe /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Relocation</p>
                <p className="text-sm font-medium">Ready (15 Days)</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-xl text-green-500"><Briefcase /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Visa Status</p>
                <p className="text-sm font-medium">Entry Permit Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">{content.projects}</h2>
              <div className="h-1 w-20 bg-amber-500 rounded-full" />
            </div>
            <p className="text-slate-500 max-w-md">
              Focusing on PropTech, Fintech, and Luxury E-commerce to drive ROI in the MENA region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-[#131316] border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all text-amber-500">
                  {project.icon}
                </div>
                
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-full uppercase border border-amber-500/20 tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-8 flex-grow">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-[10px] text-slate-500 uppercase font-black mb-1">{content.roi}</p>
                      <p className="text-lg font-bold text-white">{project.metrics}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Status</p>
                      <p className="text-lg font-bold text-white">Live Prototype</p>
                    </div>
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-amber-500 transition-colors group-hover:-translate-y-1"
                  >
                    {content.visitSite}
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-[3rem] p-8 md:p-16 text-black relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6 leading-tight">
                  {isRtl ? "الهندسة الثقافية لأسواق مجلس التعاون الخليجي" : "Cultural Engineering for GCC Markets"}
                </h2>
                <p className="text-xl font-medium opacity-90 mb-8 leading-relaxed">
                  {isRtl 
                    ? "إتقان أنماط القراءة من اليمين إلى اليسار (RTL) ومعايير الخصوصية المحلية ونظام التصميم الحكومي الإماراتي 3.0 لتحويل البرمجيات العالمية إلى تجارب محلية غامرة."
                    : "Mastering RTL reading patterns, local privacy standards, and UAE Design System 3.0 to transform global software into immersive local experiences."
                  }
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero Bureaucracy UX Alignment",
                    "Mirroring & Logical Properties Mastery",
                    "D33 Strategic Integration",
                    "Accessibility (WCAG 2.2 AA)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold">
                      <CheckCircle size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Design Tools", val: "Figma (Advanced)" },
                  { label: "Compliance", val: "UDS 3.0" },
                  { label: "Framework", val: "Tailwind CSS" },
                  { label: "Language", val: "Bilingual (AR/EN)" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                    <p className="text-sm font-black uppercase opacity-70 mb-1">{stat.label}</p>
                    <p className="text-xl font-black">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Acquisition */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center font-bold text-black text-2xl mb-6">
              AF
            </div>
            <h3 className="text-2xl font-bold mb-2">{content.name}</h3>
            <p className="text-slate-500">Available for immediate hire in Dubai / Abu Dhabi.</p>
          </div>
          
          <div className="flex flex-col gap-4 items-center md:items-end">
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Contact Acquisition</p>
            <div className="flex gap-4">
              <a href="mailto:fayazajmin@gmail.com" className="p-4 bg-white/5 rounded-2xl hover:bg-amber-500/10 border border-white/10 transition-colors">
                fayazajmin@gmail.com
              </a>
              <a href="https://linkedin.com/in/ajmin-fayaz" className="p-4 bg-white/5 rounded-2xl hover:bg-amber-500/10 border border-white/10 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-slate-600 text-sm">
          &copy; 2026 Ajmin Fayaz. Built with UAE Portfolio Strategic Architecture.
        </div>
      </footer>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0c] p-10 flex flex-col justify-center gap-10">
          <button className="absolute top-10 right-10" onClick={() => setMobileMenu(false)}><X size={32}/></button>
          <a href="#projects" className="text-4xl font-bold" onClick={() => setMobileMenu(false)}>{content.projects}</a>
          <a href="#about" className="text-4xl font-bold" onClick={() => setMobileMenu(false)}>{content.about}</a>
          <button onClick={() => { setIsRtl(!isRtl); setMobileMenu(false); }} className="text-4xl font-bold text-left">
            {isRtl ? "English" : "العربية"}
          </button>
          <a href="mailto:fayazajmin@gmail.com" className="text-4xl font-bold text-amber-500">{content.contact}</a>
        </div>
      )}
    </div>
  );
};

export default App;

```
