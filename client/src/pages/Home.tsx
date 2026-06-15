import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '../styles/editorial.css';

/**
 * Home Page - Editorial Luxury Portfolio
 * 
 * Design Philosophy: Editorial Luxury
 * - Asymmetrical layouts
 * - Generous negative space
 * - High-impact motion and animations
 * - Refined typography hierarchy
 * - Gold and navy color palette
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-cream" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
