import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './RevealImage.css';

export default function RevealImage({ src, alt, className = '' }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={ref} className={`reveal-image-wrapper ${isVisible ? 'revealed' : ''} ${className}`}>
      <div className="reveal-image-overlay"></div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
