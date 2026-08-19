import PageHero from '../components/PageHero';
import RedevelopmentIntro from '../sections/Redevelopment/RedevelopmentIntro';
import RedevelopmentProcess from '../sections/Home/RedevelopmentProcess';
import RedevelopmentFeatures from '../sections/Home/RedevelopmentFeatures';
import TestimonialsSection from '../sections/Home/TestimonialsSection';
import QuickInquiry from '../sections/Home/QuickInquiry';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function Redevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="redevelopment-page">
      <SEO title="Society Redevelopment | Nivara Developers" description="Premium and transparent society redevelopment services by Nivara Developers." />
      <PageHero 
        title="Society Redevelopment" 
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'Redevelopment' }]}
      />
      
      <RedevelopmentIntro />
      
      <RedevelopmentFeatures />
      
      <RedevelopmentProcess />
      
      <TestimonialsSection />
      
      <div id="enquiry">
        <QuickInquiry />
      </div>
      
      <PremiumCTA />
    </div>
  );
}
