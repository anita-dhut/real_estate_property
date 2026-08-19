import PageHero from '../components/PageHero';
import JobListings from '../sections/Careers/JobListings';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      <SEO title="Careers | Nivara Developers" description="Shape the future of real estate by joining the dynamic team at Nivara Developers." />
      <PageHero 
        title="Build Your Career With Us" 
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'Careers' }]}
      />
      
      <section className="page-container text-center max-w-3xl mx-auto my-12 pt-16" style={{maxWidth: '800px', margin: '4rem auto'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Shape the Future of Real Estate</h2>
        <p style={{color: 'var(--color-text-light)', lineHeight: 1.6, fontSize: '1.1rem'}}>
          At Nivara Developers, we believe in empowering our employees with a collaborative culture, continuous learning, and opportunities to work on landmark projects. Join our dynamic team and accelerate your growth.
        </p>
      </section>

      <JobListings />
      
      <PremiumCTA />
    </div>
  );
}
