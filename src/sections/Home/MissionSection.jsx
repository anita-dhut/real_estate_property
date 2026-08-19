import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './MissionSection.css';

export default function MissionSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="mission-section" ref={ref}>
      <div className={`mission-container page-container ${isVisible ? 'is-visible' : ''}`}>
        
        <div className="mission-content fade-up">
          <span className="small-label">OUR MISSION</span>
          <h2 className="mission-heading">
            DESIGNED FOR TODAY.<br/>
            BUILT FOR TOMORROW.
          </h2>
          <p className="mission-text">
            We aim to enrich lives by setting new standards for customer centricity, architectural design, quality, and safety. Our mission is to continually innovate, ensuring that every square foot we build contributes to a better tomorrow.
          </p>
        </div>

        <div className="mission-image-wrapper fade-in">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1500&auto=format&fit=crop" alt="Mission Architecture" loading="lazy" />
        </div>
        
      </div>
    </section>
  );
}
