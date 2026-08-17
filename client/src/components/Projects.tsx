import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import '../styles/editorial.css';

/**
 * Projects Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Asymmetric grid with varied card sizes
 * - Floating cards with hover lift effect
 * - Category filtering
 * - High-impact typography
 */

const categoryLabels: { [key: string]: string } = {
  ai: 'الذكاء الاصطناعي',
  web: 'تطوير ويب',
  db: 'قواعد البيانات'
};

const categoryColors: { [key: string]: string } = {
  ai: 'from-purple-500 to-pink-500',
  web: 'from-blue-500 to-cyan-500',
  db: 'from-green-500 to-emerald-500'
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-navy">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '300px',
          height: '300px',
          bottom: '10%',
          left: '5%',
          opacity: 0.05
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">المشاريع المميزة</h2>
            <p className="section-subtitle">أعمال عملية مرتبطة بمستودعات حقيقية، مع وصف واضح لما يقدمه كل مشروع.</p>
          </div>
        </div>

        {/* Projects Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`floating-card group overflow-hidden stagger-item ${
                idx === 0 || idx === 2 ? 'lg:col-span-1 lg:row-span-1' : 'lg:col-span-1'
              }`}
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${categoryColors[project.category]} mb-4`}>
                {categoryLabels[project.category]}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-cream opacity-75 leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-navy border border-gold border-opacity-20 text-gold-dark"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-navy border border-gold border-opacity-20 text-gold-dark">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gold border-opacity-20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded text-sm font-mono text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && project.demo !== 'https://ezaldyn.netlify.app/' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded text-sm font-mono text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* View All CTA */}
        <div className="text-center mt-16 sm:mt-24">
          <p className="text-lg text-cream opacity-85 mb-8">
            هل تريد أن ترى المزيد من المشاريع؟
          </p>
          <a
            href="https://github.com/albadyzaldyn111-a11y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gold text-navy font-display font-bold text-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            <Github className="w-5 h-5" />
            زر حسابي على GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
