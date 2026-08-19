import { useCountUp } from '../../hooks/useCountUp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { stats } from '../../data/company';
import './StatsSection.css';

export default function StatsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="page-container">
        <div className="stats-editorial-layout">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} isVisible={isVisible} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isVisible, delay }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div className={`stat-item fade-up ${isVisible ? 'is-visible' : ''}`} style={{transitionDelay: `${delay}s`}}>
      <div className="stat-value">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
