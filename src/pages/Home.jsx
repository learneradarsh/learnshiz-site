import React from "react";
import HeroSection from "../components/HeroSection";
import ClientsCarouselBand from "../components/ClientsCarouselBand";
import TimeZoneHighlightSection from "../components/TimeZoneHighlightSection";
import EngineeringPlans from "../components/EngineeringPlans";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ForwardDeploymentSection from "../components/ForwardDeploymentSection";
import IndustriesSection from "../components/IndustriesSection";
import TechStackSection from "../components/TechStackSection";
import EngagementModel from "../components/EngagementModel";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "../components/FAQSection";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO
        title="Learnshiz Engineering | Dedicated Engineering Teams on Subscription"
        description="Get a complete dedicated engineering team — software engineers, AI engineers, cloud architects, DevOps, and QA — under one predictable monthly subscription. Ship faster without hiring overhead."
        path="/"
      />
      <HeroSection />
      <ClientsCarouselBand />
      <TimeZoneHighlightSection />
      <EngineeringPlans />
      <CapabilitiesGrid />
      <ForwardDeploymentSection />
      <IndustriesSection />
      <TechStackSection />
      <EngagementModel />
      <WhyChooseUs />
      <FAQSection />
    </main>
  );
}
