import PageHero from '../components/PageHero';
import EditorialStory from '../sections/About/EditorialStory';
import StatsSection from '../sections/Home/StatsSection';
import WhyChooseUs from '../sections/Home/WhyChooseUs';
import PremiumCTA from '../components/PremiumCTA';
import QuickInquiry from '../sections/Home/QuickInquiry';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <SEO title="About Nivara Developers | Building Legacies" description="Learn about Nivara Developers's 40 year legacy of building premium spaces in Pune." />
      <PageHero 
        title="Our Story" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'About Us' }]}
      />
      
      <EditorialStory />
      
      <StatsSection />
      
      <WhyChooseUs />
      
      <div id="enquiry">
        <QuickInquiry />
      </div>
      
      <PremiumCTA />
    </div>
  );
}
