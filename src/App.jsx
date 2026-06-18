import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorksPage from "./pages/HowItWorksPage";
import Careers from "./pages/Careers";
import OurAim from "./pages/OurAim";
import FloatingCTA from "./components/FloatingCTA";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 font-sans text-slate-200">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-aim" element={<OurAim />} />
        </Routes>
        <FloatingCTA />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
