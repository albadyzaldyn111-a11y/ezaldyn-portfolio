import { timeline } from '@/data/portfolio';
import '../styles/editorial.css';

/**
 * Timeline Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Vertical timeline with alternating layout
 * - Gold accent line as timeline connector
 * - Floating cards for each milestone
 * - Refined typography and spacing
 */

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 sm:py-32 bg-navy">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '350px',
          height: '350px',
          top: '15%',
          right: '10%',
          opacity: 0.05
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">رحلتي المهنية</h2>
            <p className="section-subtitle">محطات مهمة في مسيرتي الاحترافية</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold-dark to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 stagger-item`}
                style={{ animationDelay: `${0.1 + idx * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="floating-card">
                    {/* Period */}
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-gold bg-navy border border-gold border-opacity-30 mb-4">
                      {item.period}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-cream mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-cream opacity-75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center lg:flex-col lg:items-center">
                  <div className="relative z-10">
                    <div className="w-6 h-6 rounded-full bg-gold border-4 border-navy shadow-lg" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Current Status */}
        <div className="max-w-2xl mx-auto text-center mt-16 sm:mt-24">
          <div className="floating-card">
            <div className="flex justify-center mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-cream mb-4">
              متاح للمشاريع الجديدة
            </h3>
            <p className="text-lg text-cream opacity-75 mb-6">
              أنا حالياً مفتوح للتعاون على مشاريع جديدة ومثيرة. سواء كان لديك فكرة صغيرة أو مشروع كبير، أنا هنا لمساعدتك.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gold text-navy font-display font-bold hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              دعنا نتحدث
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
