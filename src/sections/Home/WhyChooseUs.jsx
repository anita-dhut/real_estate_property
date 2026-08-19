import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { whyChooseUs } from '../../data/company';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="why-choose-us page-container" ref={ref}>
      <div className={`why-header fade-up ${isVisible ? 'is-visible' : ''}`}>
        <span className="small-label">WHY NIVARA</span>
        <h2>Our Core Principles</h2>
      </div>
      
      <div className={`principles-list fade-up ${isVisible ? 'is-visible' : ''}`}>
        {whyChooseUs.map((feature, idx) => (
          <div key={feature.id} className="principle-item">
            <div className="principle-number">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className="principle-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            {/* Optional visual accent on hover can be implemented with a pseudo-element or a background transition in CSS */}
            <div className="principle-hover-accent"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
