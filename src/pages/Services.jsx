import ServicesSection from "../components/ServicesSection";
import ConsultingSection from "../components/ConsultingSection";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <SEO 
        title="Technical Consulting & Engineering Services | LearnShiz" 
        description="Expert technical consulting, Forward Deployed engineering, and AI/Data solutions for ambitious companies looking to modernize and scale." 
      />
      <ServicesSection />
      <ConsultingSection />
    </main>
  );
}
