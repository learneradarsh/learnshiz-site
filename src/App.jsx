import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorksPage from "./pages/HowItWorksPage";
import Careers from "./pages/Careers";
import OurAim from "./pages/OurAim";
import Pricing from "./pages/Pricing";
import ForwardDeployment from "./pages/ForwardDeployment";
import Industries from "./pages/Industries";
import EngineeringSubscription from "./pages/EngineeringSubscription";
import Resources from "./pages/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SecurityCompliance from "./pages/SecurityCompliance";
import FloatingCTA from "./components/FloatingCTA";
import TechnicalAssessmentModal from "./components/TechnicalAssessmentModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#00B2A9]/20 font-sans text-[#0A1622]">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/engineering-subscription" element={<EngineeringSubscription />} />
          <Route path="/forward-deployment" element={<ForwardDeployment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-aim" element={<OurAim />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security" element={<SecurityCompliance />} />
        </Routes>
        <FloatingCTA />
        <TechnicalAssessmentModal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
