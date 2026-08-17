import { services } from '@/data/portfolio';
import { Globe, Brain, Database, Code } from 'lucide-react';
import '../styles/editorial.css';

/**
 * Services Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Asymmetric grid layout
 * - Floating cards with hover effects
 * - Gold accent line separator
 * - Generous spacing and typography
 */

const iconMap: { [key: string]: React.ReactNode } = {
  globe: <Globe className="w-8 h-8" />,
  brain: <Brain className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />,
  code: <Code className="w-8 h-8" />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 bg-navy">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '250px',
          height: '250px',
          top: '20%',
          right: '10%',
          opacity: 0.05
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">الخدمات المتخصصة</h2>
            <p className="section-subtitle">خدمات عملية تبدأ من المشكلة وتنتهي بحل قابل للاستخدام والتطوير.</p>
          </div>
        </div>

        {/* Services Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="floating-card group h-full stagger-item"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-navy">
                  {iconMap[service.icon] || iconMap['globe']}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-cream opacity-75 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-24">
          <p className="text-lg sm:text-xl text-cream opacity-85 mb-8 max-w-2xl mx-auto">
            لديك فكرة أو عملية تريد أتمتتها؟ أرسل التفاصيل، وسأساعدك على تحويلها إلى خطة تنفيذ واضحة.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-gold text-gold font-display font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            ابدأ مشروعك الآن
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
