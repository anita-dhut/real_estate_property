import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Users, FileText, Handshake, CheckSquare, HardHat, Key } from 'lucide-react';
import './RedevelopmentProcess.css';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Initial meeting to understand the society\'s requirements, feasibility, and vision for the new project.', icon: Users },
  { id: 2, title: 'Planning & Design', desc: 'Architectural designs, 3D elevations, and finalization of amenities and luxury specifications.', icon: FileText },
  { id: 3, title: 'Development Agreement', desc: 'Signing the formal DA with complete legal transparency and secure corpus funds.', icon: Handshake },
  { id: 4, title: 'Approvals & RERA', desc: 'Securing necessary sanctions from local authorities and strict MahaRERA registration.', icon: CheckSquare },
  { id: 5, title: 'Premium Construction', desc: 'High-quality, time-bound construction using premium materials and uncompromising safety standards.', icon: HardHat },
  { id: 6, title: 'Possession', desc: 'Handing over the keys to your brand new, luxurious, and upgraded homes.', icon: Key }
];

export default function RedevelopmentProcess() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="redev-process-section" ref={ref}>
      <div className="page-container redev-process-layout">
        
        {/* Sticky Header Side */}
        <div className="process-header-sticky">
          <div className={`process-header-content fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="small-label">Our Workflow</span>
            <h2 className="process-heading">The Redevelopment Process</h2>
            <p className="process-subheading">A seamless, transparent journey from your old society to a luxurious new landmark.</p>
          </div>
        </div>

        {/* Scrolling Steps Side */}
        <div className="process-steps-scroll">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={`process-step-card fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}>
                <div className="step-number-large">0{step.id}</div>
                <div className="step-content">
                  <div className="step-icon-elegant">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
