import React from "react";
import IndustriesSection from "../components/IndustriesSection";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

export default function Industries() {
  return (
    <main className="pt-24 bg-white text-slate-600">
      <SEO
        title="Industries We Serve | Learnshiz Engineering"
        description="Learnshiz Engineering delivers domain-specific engineering for AI Startups, SaaS, FinTech, HealthTech, EdTech, Logistics, HRTech, Retail, and Enterprise platforms."
        path="/industries"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Industries We Serve
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            We Speak{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Your Industry
            </span>
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-7">
            We don't just understand code — we understand your users, your domain, and your competitive pressures.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>

      <IndustriesSection />
    </main>
  );
}
