import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/editorial.css';

/**
 * Header/Navigation - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Minimal, elegant navigation
 * - Gold accent on active links
 * - Responsive mobile menu
 * - Floating effect on scroll
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero', labelEn: 'Home' },
    { label: 'الخدمات', href: '#services', labelEn: 'Services' },
    { label: 'المشاريع', href: '#projects', labelEn: 'Projects' },
    { label: 'المهارات', href: '#skills', labelEn: 'Skills' },
    { label: 'الخبرة', href: '#timeline', labelEn: 'Experience' },
    { label: 'التقييمات', href: '#testimonials', labelEn: 'Testimonials' },
    { label: 'التواصل', href: '#contact', labelEn: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-gold border-opacity-20'
          : 'bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-2 group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303926440/Ad655MHVQtVXiETpaqJWU2/logo-icon-m6BpW9pWpLanvWgUJbhfEZ.webp"
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <span className="hidden sm:block text-xl font-display font-bold text-cream group-hover:text-gold transition-colors duration-300">
              Ezaldyn
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-sm font-mono text-cream hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gold text-navy font-display font-bold text-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg"
          >
            تواصل
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cream hover:text-gold transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-6 space-y-2 border-t border-gold border-opacity-20 pt-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block px-4 py-2 text-sm font-mono text-cream hover:text-gold hover:bg-navy/50 rounded transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 mt-4 rounded-lg bg-gold text-navy font-display font-bold text-sm hover:bg-gold-dark transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              تواصل معي
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
