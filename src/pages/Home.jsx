import HeroSection from '../sections/Home/HeroSection';
import IntroSection from '../sections/Home/IntroSection';
import VisionSection from '../sections/Home/VisionSection';
import FeaturedProjects from '../sections/Home/FeaturedProjects';
import StatsSection from '../sections/Home/StatsSection';
import WhyChooseUs from '../sections/Home/WhyChooseUs';
import MissionSection from '../sections/Home/MissionSection';
import TestimonialsSection from '../sections/Home/TestimonialsSection';
import TimelineSection from '../sections/Home/TimelineSection';
import LatestUpdates from '../sections/Home/LatestUpdates';
import QuickInquiry from '../sections/Home/QuickInquiry';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="home-page">
      <SEO title="Premium Real Estate Developers in Pune | Nivara Developers" description="Crafting premium residential and commercial landmarks in Pune for over four decades." />
      <HeroSection />
      <IntroSection />
      <VisionSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <MissionSection />
      <TimelineSection />
      <TestimonialsSection />
      <LatestUpdates />
      <PremiumCTA />
      <QuickInquiry />
    </div>
  );
}
