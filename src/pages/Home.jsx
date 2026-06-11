import React from "react";
import HeroSection from "../components/HeroSection";
import ClientsCarouselBand from "../components/ClientsCarouselBand";
import ComparisonSection from "../components/ComparisonSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import AimWidget from "../components/AimWidget";
import ServicesWidget from "../components/ServicesWidget";
import GrowthAndTech from "../components/GrowthAndTech";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO 
        title="LearnShiz | Elite Forward Deployed Engineers & AI Talent" 
        description="LearnShiz provides top 1% vetted developers and AI engineers to SMEs, startups, and enterprises within 48 hours. Scale your tech velocity today." 
      />
      <HeroSection />
      <ServicesWidget />
      <GrowthAndTech />
      <AimWidget />
      <ClientsCarouselBand />
      <WhyChooseUs />
      <HowItWorks />
      <ComparisonSection />
    </main>
  );
}
