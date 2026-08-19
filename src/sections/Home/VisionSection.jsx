import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './VisionSection.css';

export default function VisionSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="vision-section page-container" ref={ref}>
      <div className={`vision-editorial-layout ${isVisible ? 'is-visible' : ''}`}>
        
        <div className="vision-image-container fade-in">
          <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" alt="Luxurious Living Space" loading="lazy" />
        </div>
        
        <div className="vision-content fade-up">
          <div className="vision-gold-line"></div>
          <span className="small-label">OUR VISION</span>
          <h2 className="vision-heading">
            To create meaningful spaces that enhance the way people live, connect and grow.
          </h2>
          <p className="vision-text">
            By delivering exceptional homes that become the foundation of your family's memories. Our vision is rooted in transparency, uncompromising quality, and an unwavering commitment to timelines.
          </p>
        </div>

      </div>
    </section>
  );
}
