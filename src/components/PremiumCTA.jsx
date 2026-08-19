import Button from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './PremiumCTA.css';

export default function PremiumCTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="premium-cta-section" ref={ref}>
      <div className="premium-cta-bg parallax-bg">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" alt="Premium architecture" loading="lazy" />
        <div className="premium-cta-overlay"></div>
      </div>
      
      <div className={`premium-cta-content page-container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="cta-inner text-center">
          <h2 className="cta-heading-large">
            FIND YOUR NEXT ADDRESS.
          </h2>
          <p className="cta-description">
            Explore thoughtfully designed homes in some of Pune's most connected neighbourhoods.
          </p>
          <div className="cta-actions justify-center mt-12">
            <Button to="/projects" variant="primary">
              EXPLORE PROJECTS
            </Button>
            <Button to="/contact" variant="outline-light">
              START A CONVERSATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
