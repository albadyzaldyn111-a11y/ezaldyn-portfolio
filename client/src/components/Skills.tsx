import { skillCategories } from '@/data/portfolio';
import '../styles/editorial.css';

/**
 * Skills Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Organized skill categories
 * - Progress bars with gold accents
 * - Tech tags display
 * - Refined typography
 */

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663303926440/Ad655MHVQtVXiETpaqJWU2/skills-pattern-5bRpgYGH6jMK2ZQuaiPNpn.webp)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">المهارات والتقنيات</h2>
            <p className="section-subtitle">أدوات وتقنيات احترافية في مجالات متعددة</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className="floating-card stagger-item"
              style={{ animationDelay: `${0.1 + categoryIdx * 0.15}s` }}
            >
              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gold mb-8">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-8">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    {/* Skill Name and Percentage */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm sm:text-base font-medium text-cream">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-gold font-bold">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-navy border border-gold border-opacity-20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-gold/50"
                        style={{
                          width: `${skill.percentage}%`,
                          animation: `slideInFromLeft 1s ease-out ${0.2 + skillIdx * 0.1}s backwards`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mt-8 pt-8 border-t border-gold border-opacity-20">
                <p className="text-xs uppercase tracking-widest text-slate-light font-mono mb-4">
                  التقنيات الأساسية
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.techTags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-navy border border-gold border-opacity-30 text-gold-dark hover:border-gold hover:border-opacity-100 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Certifications Section */}
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-cream mb-6">
            شهادات واعترافات
          </h3>
          <p className="text-lg text-cream opacity-75 mb-8">
            حاصل على عدة شهادات معتمدة في البرمجة والذكاء الاصطناعي من أكاديميات وجامعات معروفة عالمياً.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Google Cloud Certified', 'AWS Solutions Architect', 'TensorFlow Certified', 'Full Stack Developer'].map((cert, idx) => (
              <div
                key={idx}
                className="floating-card text-center stagger-item"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </div>
                <p className="font-display font-bold text-cream">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
}
