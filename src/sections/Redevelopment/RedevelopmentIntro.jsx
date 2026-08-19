import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';
import { stats } from '../../data/company';
import './RedevelopmentIntro.css';

export default function RedevelopmentIntro() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="redevelopment-intro page-container" ref={ref}>
      <div className={`redevelopment-intro-grid ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Left Side: Text */}
        <div className="redevelopment-intro-content fade-up">
          <span className="small-label" style={{ marginBottom: '1rem', display: 'block' }}>Our Vision</span>
          <h2>Elevating Your Living Standards, <br/>While Preserving Your Roots.</h2>
          <p>
            With our extensive expertise in urban redevelopment, Nivara Developers brings a unique blend of modern luxury and deep respect for community heritage. We transform aging societies into architectural landmarks, ensuring a seamless, transparent, and rewarding journey for every member.
          </p>
        </div>

        {/* Right Side: 2x2 Stats Grid */}
        <div className="redevelopment-stats-grid fade-up" style={{ transitionDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <StatBox key={stat.id} stat={stat} isVisible={isVisible} delay={index * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatBox({ stat, isVisible, delay }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div className="stat-box" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-value">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
