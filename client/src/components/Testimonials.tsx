import { testimonials } from '@/data/portfolio';
import { Star } from 'lucide-react';
import '../styles/editorial.css';

/**
 * Testimonials Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Carousel-like layout with featured testimonials
 * - Floating cards with star ratings
 * - Author information display
 * - Refined typography
 */

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32 bg-navy">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '300px',
          height: '300px',
          bottom: '10%',
          right: '5%',
          opacity: 0.05
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">آراء العملاء</h2>
            <p className="section-subtitle">تقييمات من عملاء راضين عن عملي</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="floating-card flex flex-col stagger-item h-full"
              style={{ animationDelay: `${0.1 + idx * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg text-cream leading-relaxed mb-8 flex-1 italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gold via-gold-dark to-transparent mb-6" />

              {/* Author Info */}
              <div>
                <p className="font-display font-bold text-cream mb-1">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-light">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-24">
          {[
            { number: '100%', label: 'رضا العملاء' },
            { number: '15+', label: 'عملاء نشطين' },
            { number: '20+', label: 'مشروع مكتمل' }
          ].map((indicator, idx) => (
            <div
              key={idx}
              className="floating-card text-center stagger-item"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-display font-black text-gold mb-2">
                {indicator.number}
              </div>
              <p className="text-sm uppercase tracking-widest text-slate-light font-mono">
                {indicator.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center mt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-cream mb-6">
            هل أنت مستعد لتصبح عميلاً سعيداً؟
          </h3>
          <p className="text-lg text-cream opacity-75 mb-8">
            دعنا نعمل معاً على إنشاء شيء استثنائي.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gold text-navy font-display font-bold text-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            ابدأ معنا الآن
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
