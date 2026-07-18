import React from "react";
import HeroSection from "../components/HeroSection";
import SocialProofBadges from "../components/SocialProofBadges";
import ClientsCarouselBand from "../components/ClientsCarouselBand";
import TimeZoneHighlightSection from "../components/TimeZoneHighlightSection";
import WhoThisIsNotFor from "../components/WhoThisIsNotFor";
import EngineeringPlans from "../components/EngineeringPlans";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ForwardDeploymentSection from "../components/ForwardDeploymentSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import EngagementModel from "../components/EngagementModel";
import WhyChooseUs from "../components/WhyChooseUs";
import ResourcesSection from "../components/ResourcesSection";
import FAQSection from "../components/FAQSection";
import NewsletterBanner from "../components/NewsletterBanner";
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
      <SocialProofBadges />
      <ClientsCarouselBand />
      <TimeZoneHighlightSection />
      <WhoThisIsNotFor />
      <EngineeringPlans />
      <CapabilitiesGrid />
      <ForwardDeploymentSection />
      <CaseStudiesSection />
      <EngagementModel />
      <WhyChooseUs />
      <ResourcesSection />
      <FAQSection />
      <NewsletterBanner />
    </main>
  );
}
