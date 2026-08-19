import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Leaf, Users, ShieldCheck, Cog } from 'lucide-react';
import './RedevelopmentFeatures.css';

export default function RedevelopmentFeatures() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    { icon: Users, title: 'Transforming Communities', desc: 'Upgrading lifestyles while preserving long-standing community bonds and emotional connections.', colSpan: 'col-span-2' },
    { icon: Leaf, title: 'Sustainable Design', desc: 'Implementing eco-friendly architectures, rainwater harvesting, and energy-efficient systems.', colSpan: 'col-span-1' },
    { icon: Cog, title: 'Custom Architecture', desc: 'Tailored floor plans and amenities designed specifically to meet unique society requirements.', colSpan: 'col-span-1' },
    { icon: ShieldCheck, title: 'Transparent Legalities', desc: 'Crystal clear documentation, secure corpus funds, and strict adherence to MahaRERA guidelines.', colSpan: 'col-span-2' }
  ];

  return (
    <section className="redev-features-section" ref={ref}>
      <div className="page-container">
        <div className={`redev-features-header fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="small-label">Expertise</span>
          <h2>Why Choose Us for Redevelopment</h2>
        </div>
        
        <div className={`bento-features-grid fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const numberString = `0${idx + 1}`;
            return (
              <div key={idx} className={`bento-card ${feature.colSpan}`}>
                <div className="bento-bg-number">{numberString}</div>
                <div className="bento-content">
                  <div className="bento-icon-wrapper">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
