import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { leadership } from '../../data/company';
import SectionHeading from '../../components/SectionHeading';
import './LeadershipSection.css';

export default function LeadershipSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="leadership-section page-container" ref={ref}>
      <SectionHeading eyebrow="Our Team" title="Leadership & Next Generation" />
      
      <div className={`leadership-grid fade-up ${isVisible ? 'is-visible' : ''}`}>
        {leadership.map((leader, index) => (
          <div key={index} className="leader-card" style={{transitionDelay: `${index * 0.2}s`}}>
            <div className="leader-img-wrapper">
              <img src={leader.image} alt={leader.name} loading="lazy" />
            </div>
            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
