import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '@/data/portfolio';
import '../styles/editorial.css';

/**
 * Hero Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Asymmetrical layout with image on right, text on left
 * - Large, bold typography using Playfair Display
 * - Gold accent line as signature element
 * - Generous negative space
 * - High-impact page load animation
 */

export default function Hero() {
  const [isRtl, setIsRtl] = useState(true);

  useEffect(() => {
    // Set RTL direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-navy">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '400px',
          height: '400px',
          top: '10%',
          right: '5%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '300px',
          height: '300px',
          bottom: '15%',
          left: '5%',
          animation: 'float 8s ease-in-out infinite 1s'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 stagger-item">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg border border-gold border-opacity-30 bg-navy bg-opacity-50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="w-4 h-4 text-gold animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-mono text-gold tracking-wider">
                {isRtl ? 'مهندس برمجيات احترافي' : 'PROFESSIONAL ENGINEER'}
              </span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="accent-line" />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-cream leading-tight">
                  {isRtl ? 'عزالدين' : 'Ezaldyn'}
                </h1>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-light text-gold-dark ml-16">
                {isRtl ? 'العبادي' : 'Al-Abadi'}
              </h2>
            </div>

            {/* Role Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {['Full Stack Developer', 'AI Engineer', 'Solutions Architect'].map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-navy border border-gold border-opacity-20 text-cream hover:border-gold hover:border-opacity-50 transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-cream opacity-85 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {isRtl
                ? 'أبني تطبيقات ويب وأندرويد عملية وأتمتة رقمية تساعدك على إطلاق فكرتك بسرعة، مع اهتمام بالأداء وتجربة المستخدم وقابلية التطوير.'
                : 'I build practical web and Android applications plus digital automation that help you launch faster, with a focus on performance, usability, and scalability.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-gold text-navy font-display font-bold text-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
              >
                {isRtl ? 'شاهد أعمالي' : 'View My Work'}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border-2 border-gold text-gold font-display font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-2"
              >
                {isRtl ? 'اطلب مشروعًا' : 'Start a Project'}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold border-opacity-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-black text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-light font-mono">
                    {isRtl ? stat.label : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem]">
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold via-transparent to-gold opacity-20 blur-2xl pointer-events-none" />

              {/* Border Frame */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gold border-opacity-30 pointer-events-none" />

              {/* Image Container */}
              <div className="absolute inset-2 bg-navy rounded-3xl overflow-hidden shadow-2xl floating-card">
                <img
                  src="/manus-storage/profile-ezaldyn_85482de4.webp"
                  alt="عزالدين العبادي"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=650&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-navy border-2 border-gold border-opacity-40 py-3 px-4 rounded-xl shadow-xl flex items-center gap-2.5 font-mono floating-card">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-cream">
                  {isRtl ? 'متاح للمشاريع' : 'AVAILABLE'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-light font-mono">
            {isRtl ? 'اسحب للأسفل' : 'Scroll'}
          </span>
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
}
