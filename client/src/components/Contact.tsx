import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/editorial.css';

/**
 * Contact Section - Editorial Luxury Design
 * 
 * Design Philosophy:
 * - Contact form with elegant styling
 * - Contact information display
 * - Gold accents and floating cards
 * - Refined typography
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      alert('شكراً لرسالتك! سأرد عليك قريباً.');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-navy">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="geometric-shape geometric-shape-circle" style={{
          width: '400px',
          height: '400px',
          top: '10%',
          left: '5%',
          opacity: 0.05
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 sm:mb-24">
          <div className="accent-line" />
          <div>
            <h2 className="section-title">تواصل معي</h2>
            <p className="section-subtitle">دعنا نناقش مشروعك القادم</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="floating-card group stagger-item" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-display font-bold text-cream mb-2">البريد الإلكتروني</h3>
              <a
                href="mailto:ezaldyn@example.com"
                className="text-gold hover:text-gold-dark transition-colors duration-300 break-all"
              >
                ezaldyn@example.com
              </a>
            </div>

            {/* Phone */}
            <div className="floating-card group stagger-item" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-display font-bold text-cream mb-2">الهاتف</h3>
              <a
                href="tel:+966501234567"
                className="text-gold hover:text-gold-dark transition-colors duration-300"
              >
                +966 50 123 4567
              </a>
            </div>

            {/* Location */}
            <div className="floating-card group stagger-item" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-display font-bold text-cream mb-2">الموقع</h3>
              <p className="text-gold">
                اليمن، صنعاء
              </p>
            </div>

            {/* Social Links */}
            <div className="floating-card stagger-item" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-display font-bold text-cream mb-4">تابعني</h3>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
                  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
                  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-gold border-opacity-30 flex items-center justify-center text-lg hover:bg-gold hover:text-navy transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="floating-card space-y-6">
              {/* Name */}
              <div className="stagger-item" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-display font-bold text-cream mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold border-opacity-30 text-cream placeholder-slate-light focus:border-gold focus:border-opacity-100 focus:outline-none transition-all duration-300"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email */}
              <div className="stagger-item" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-display font-bold text-cream mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold border-opacity-30 text-cream placeholder-slate-light focus:border-gold focus:border-opacity-100 focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div className="stagger-item" style={{ animationDelay: '0.3s' }}>
                <label className="block text-sm font-display font-bold text-cream mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold border-opacity-30 text-cream placeholder-slate-light focus:border-gold focus:border-opacity-100 focus:outline-none transition-all duration-300"
                  placeholder="موضوع الرسالة"
                />
              </div>

              {/* Message */}
              <div className="stagger-item" style={{ animationDelay: '0.4s' }}>
                <label className="block text-sm font-display font-bold text-cream mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold border-opacity-30 text-cream placeholder-slate-light focus:border-gold focus:border-opacity-100 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gold text-navy font-display font-bold text-lg hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 stagger-item"
                style={{ animationDelay: '0.5s' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    أرسل الرسالة
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Response Time */}
        <div className="max-w-2xl mx-auto text-center mt-16 sm:mt-24">
          <p className="text-lg text-cream opacity-75">
            سأرد على رسالتك في غضون 24 ساعة
          </p>
        </div>
      </div>
    </section>
  );
}
