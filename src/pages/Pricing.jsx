import React from "react";
import EngineeringPlans from "../components/EngineeringPlans";
import SEO from "../components/SEO";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { getCurrentQuarter } from "../utils/scarcity";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const metrics = [
  "Deployment Frequency", "Lead Time for Changes", "Production Stability",
  "Customer Satisfaction", "Product Velocity", "Cloud Cost Efficiency",
  "Engineering Productivity", "AI Adoption Rate", "Business Impact",
];

const idealClients = [
  "Pre-Seed Startups", "Seed Startups", "Series A Companies",
  "Growing SaaS Companies", "Enterprises Building AI Products", "Companies Modernising Legacy Systems",
];

export default function Pricing() {
  const quarter = getCurrentQuarter();

  return (
    <main className="pt-24 bg-white text-slate-600">
      <SEO
        title="Engineering Subscription Plans | Learnshiz Engineering"
        description="Builder, Growth, or Scale — choose the right engineering subscription for your stage. Flat monthly pricing. Dedicated team. No hiring overhead."
        path="/pricing"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00B2A9] animate-pulse" />
            ⚡ {quarter} Onboarding Capacity: Only 3 New Teams This Quarter
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Predictable Pricing
            </span>
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            One flat monthly subscription covers your entire engineering team. No hourly billing. No surprises.
          </p>
        </div>
      </section>

      <EngineeringPlans />

      {/* Ideal Clients */}
      <section className="py-14 md:py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-3">We Work Best With</h2>
            <p className="text-slate-600 text-sm">Companies at the right stage to benefit from dedicated engineering teams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {idealClients.map((client) => (
              <div key={client} className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3.5">
                <HiMiniCheckCircle className="w-5 h-5 text-[#00B2A9] shrink-0" />
                <span className="text-[#0A1622] text-sm font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-3">We Measure Outcomes, Not Hours</h2>
          <p className="text-slate-600 text-sm mb-10 max-w-lg mx-auto">
            We track what actually moves the needle for your business.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div key={m} className="bg-[#F8F9FA] border border-slate-200 shadow-sm rounded-xl p-4 text-center">
                <p className="text-xs text-[#0A1622] font-semibold leading-snug">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-4">Ready to Build Faster?</h2>
          <p className="text-slate-600 mb-7 text-sm">
            Book a Discovery Call and we'll recommend the right plan, then introduce your team in 1–2 weeks.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>
    </main>
  );
}
