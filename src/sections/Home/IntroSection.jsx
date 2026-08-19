import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Button from '../../components/Button';
import './IntroSection.css';

export default function IntroSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="intro-section page-container" ref={ref}>
      <div className={`intro-editorial-layout ${isVisible ? 'is-visible' : ''}`}>
        
        <div className="intro-content fade-up" style={{transitionDelay: '0.1s'}}>
          <h2 className="intro-heading">
            Building Trust,<br />
            <span className="highlight-text">One Landmark at a Time.</span>
          </h2>
          
          <p className="intro-text">
            With over 40 years of profound legacy in the real estate sector, Nivara Developers Group stands as a beacon of architectural excellence, customer trust, and uncompromising quality. We don't just build homes; we curate lifestyles.
          </p>
          
          <div className="intro-actions">
            <Button variant="primary" to="/projects">Explore Projects</Button>
            <Button variant="outline" to="/about">Our Legacy</Button>
          </div>
        </div>
        
        <div className="intro-visual fade-up" style={{transitionDelay: '0.3s'}}>
          <div className="editorial-frame"></div>
          
          <div className="editorial-image-main">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Nivara Developers Architecture" 
              loading="lazy" 
            />
          </div>
          
          <div className="editorial-badge">
            <span className="badge-number">40+</span>
            <span className="badge-text">Years of<br/>Excellence</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
