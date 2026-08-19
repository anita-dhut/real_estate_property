import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../../components/Button';
import './HeroSection.css';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Limit updates for better performance
      window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Luxury Real Estate" 
          style={{ transform: `translateY(${offsetY * 0.3}px) scale(${1.05 + (offsetY * 0.0002)})` }}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content page-container">
        <div className="hero-content-inner">
          <span className="hero-eyebrow fade-up is-visible">NIVARA DEVELOPERS</span>
          <h1 className="hero-title fade-up is-visible" style={{transitionDelay: '0.1s'}}>
            BUILDING SPACES.<br/>
            CREATING LEGACIES.
          </h1>
          <p className="hero-subtitle fade-up is-visible" style={{transitionDelay: '0.2s'}}>
            Thoughtfully designed homes where architecture, comfort and everyday life come together.
          </p>
          <div className="hero-actions fade-up is-visible" style={{transitionDelay: '0.3s'}}>
            <Button to="/projects" variant="primary">EXPLORE PROJECTS</Button>
            <Button to="/contact" variant="outline-light">ENQUIRE NOW</Button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator fade-in">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
