import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './EditorialStory.css';

export default function EditorialStory() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.2 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.2 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.2 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="editorial-story">
      {/* 01 THE BEGINNING */}
      <section className="story-chapter" ref={ref1}>
        <div className={`chapter-container page-container fade-up ${isVisible1 ? 'is-visible' : ''}`}>
          <div className="chapter-meta">
            <span className="chapter-num">01</span>
            <h2 className="chapter-title">The Beginning</h2>
          </div>
          <div className="chapter-content">
            <div className="chapter-text">
              <p className="lead">In 1982, Nivara Developers was founded with a singular vision: to bring uncompromising quality and transparency to Pune's real estate market.</p>
              <p>What started as a modest construction firm quickly gained a reputation for delivering projects ahead of schedule without cutting corners. In an era where real estate was often unpredictable, our founders established a benchmark of trust that remains our strongest asset today.</p>
            </div>
            <div className="chapter-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="The Beginning" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 THE JOURNEY */}
      <section className="story-chapter alt-bg" ref={ref2}>
        <div className={`chapter-container page-container reverse fade-up ${isVisible2 ? 'is-visible' : ''}`}>
          <div className="chapter-meta">
            <span className="chapter-num">02</span>
            <h2 className="chapter-title">The Journey</h2>
          </div>
          <div className="chapter-content">
            <div className="chapter-text">
              <p className="lead">Over four decades, our journey has been defined by continuous innovation, adapting to the changing needs of the modern homebuyer.</p>
              <p>From developing Pune's first premium residential enclaves in the 90s to pioneering sustainable architecture in the 2010s, Nivara Developers has always been ahead of the curve. We expanded our portfolio to include state-of-the-art commercial complexes and specialized society redevelopment, always maintaining our core values of integrity and customer-centricity.</p>
            </div>
            <div className="chapter-image">
              <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop" alt="The Journey" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 THE LEGACY */}
      <section className="story-chapter" ref={ref3}>
        <div className={`chapter-container page-container fade-up ${isVisible3 ? 'is-visible' : ''}`}>
          <div className="chapter-meta">
            <span className="chapter-num">03</span>
            <h2 className="chapter-title">The Legacy</h2>
          </div>
          <div className="chapter-content">
            <div className="chapter-text">
              <p className="lead">Today, Nivara Developers is more than a developer; it is a legacy trusted by thousands of families across Maharashtra.</p>
              <p>With over 120 successfully delivered projects and 5 million square feet of developed space, our footprint is visible across Pune's most prestigious neighborhoods. But our true legacy lies in the generations of families who call a Nivara Developers property their home, passing down their trust in our brand from parents to children.</p>
              
              <blockquote className="legacy-quote">
                "We don't build structures; we build the backdrop for your family's most precious memories."
                <span>— R. K. Bhaskar, Founder</span>
              </blockquote>
            </div>
            <div className="chapter-image">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" alt="The Legacy" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 04 THE FUTURE */}
      <section className="story-chapter alt-bg" ref={ref4}>
        <div className={`chapter-container page-container reverse fade-up ${isVisible4 ? 'is-visible' : ''}`}>
          <div className="chapter-meta">
            <span className="chapter-num">04</span>
            <h2 className="chapter-title">The Future</h2>
          </div>
          <div className="chapter-content">
            <div className="chapter-text">
              <p className="lead">As we look to the horizon, our vision is to redefine the parameters of luxury and sustainable living.</p>
              <p>The future of Nivara Developers is driven by a new generation of leadership committed to integrating smart technologies, green building practices, and global architectural standards. We are actively expanding our redevelopment division to transform aging societies into modern marvels, ensuring that our legacy of excellence continues to shape the skyline for decades to come.</p>
            </div>
            <div className="chapter-image">
              <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop" alt="The Future" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
