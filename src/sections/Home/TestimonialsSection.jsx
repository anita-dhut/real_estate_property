import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { testimonials } from '../../data/testimonials';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];
  // Remove the hardcoded quotes from the raw text data so we don't get double quotes
  const quoteText = current.text.replace(/^"|"$/g, '');

  return (
    <section className="testimonials-section page-container" ref={ref}>
      <div className={`testimonial-centered-layout ${isVisible ? 'is-visible' : ''}`}>
        
        <div className="testimonial-header fade-up">
          <span className="small-label">Client Stories</span>
        </div>

        <div className="testimonial-carousel-wrapper fade-up" style={{transitionDelay: '0.2s'}}>
          
          <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>

          <div className="testimonial-content">
            <div className="quote-mark">“</div>
            <p className="testimonial-text" key={`text-${currentIndex}`}>
              {quoteText}
            </p>
            <div className="testimonial-author" key={`author-${currentIndex}`}>
              <div className="author-name">{current.name}</div>
              <div className="author-project">{current.project}</div>
            </div>
          </div>

          <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next">
            <ArrowRight size={24} strokeWidth={1.5} />
          </button>

        </div>

        <div className="testimonial-indicators fade-up" style={{transitionDelay: '0.3s'}}>
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
