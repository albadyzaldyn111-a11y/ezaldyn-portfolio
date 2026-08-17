import '../styles/editorial.css';

/**
 * Footer - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Minimal, elegant footer
 * - Quick links and social media
 * - Copyright information
 * - Refined typography
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'GitHub', url: 'https://github.com/albadyzaldyn111-a11y' },
    { label: 'مشاريع الموقع', url: 'https://github.com/albadyzaldyn111-a11y/ezaldyn-portfolio' }
  ];

  return (
    <footer className="relative bg-navy border-t border-gold border-opacity-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-2">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303926440/Ad655MHVQtVXiETpaqJWU2/logo-icon-m6BpW9pWpLanvWgUJbhfEZ.webp"
                  alt="Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-display font-bold text-cream">
                Ezaldyn Al-Abadi
              </span>
            </div>
            <p className="text-sm text-slate-light leading-relaxed">
              مهندس تقنية معلومات ومطور برمجيات من إب، اليمن. أحوّل الأفكار إلى حلول رقمية عملية وقابلة للتطوير.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-cream mb-6">الروابط السريعة</h3>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', href: '#hero' },
                { label: 'الخدمات', href: '#services' },
                { label: 'المشاريع', href: '#projects' },
                { label: 'التواصل', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-light hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-cream mb-6">تابعني</h3>
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gold border-opacity-30 text-sm font-mono text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-light text-center sm:text-right">
            © {currentYear} عزالدين العبادي. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/albadyzaldyn111-a11y/ezaldyn-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-light hover:text-gold transition-colors duration-300"
            >
              المستودع البرمجي
            </a>
            <a
              href="https://github.com/albadyzaldyn111-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-light hover:text-gold transition-colors duration-300"
            >
              حساب GitHub
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gold border-opacity-30 text-sm font-mono text-gold hover:bg-gold hover:text-navy transition-all duration-300"
          >
            العودة للأعلى
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold-dark to-transparent" />
    </footer>
  );
}
