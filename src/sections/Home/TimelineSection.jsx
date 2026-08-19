import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { timeline } from '../../data/company';
import './TimelineSection.css';

export default function TimelineSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = timeline[activeIndex];

  return (
    <section className="timeline-section" ref={ref}>
      <div className="page-container">
        
        <div className={`timeline-header fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="small-label">OUR JOURNEY</span>
          <h2>Legacy of Excellence</h2>
        </div>
        
        {/* Desktop Interactive Timeline */}
        <div className={`timeline-desktop fade-up ${isVisible ? 'is-visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <div className="timeline-nav">
            <div className="timeline-line"></div>
            <div className="timeline-years">
              {timeline.map((item, index) => (
                <button 
                  key={item.year} 
                  className={`timeline-year-btn ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="timeline-dot"></div>
                  <span className="timeline-year-text">{item.year}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="timeline-content-panel">
            <h3 className="timeline-content-title" key={`title-${activeItem.year}`}>
              {activeItem.title}
            </h3>
            <p className="timeline-content-desc" key={`desc-${activeItem.year}`}>
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className={`timeline-mobile fade-up ${isVisible ? 'is-visible' : ''}`}>
          <div className="mobile-timeline-line"></div>
          {timeline.map((item, index) => (
            <div key={item.year} className="mobile-timeline-item" style={{transitionDelay: `${index * 0.1}s`}}>
              <div className="mobile-timeline-dot"></div>
              <div className="mobile-timeline-content">
                <span className="mobile-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
