import React from "react";
import HeroSection from "../components/HeroSection";
import ClientsCarouselBand from "../components/ClientsCarouselBand";
import ComparisonSection from "../components/ComparisonSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import AimWidget from "../components/AimWidget";
import ServicesWidget from "../components/ServicesWidget";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesWidget />
      <AimWidget />
      <ClientsCarouselBand />
      <WhyChooseUs />
      <HowItWorks />
      <ComparisonSection />
    </main>
  );
}
