import React from "react";
import EngineeringPlans from "../components/EngineeringPlans";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const metrics = [
  { label: "Deployment Frequency", icon: "🚀" },
  { label: "Lead Time for Changes", icon: "⏱️" },
  { label: "Production Stability", icon: "🛡️" },
  { label: "Customer Satisfaction", icon: "⭐" },
  { label: "Product Velocity", icon: "📈" },
  { label: "Cloud Cost Efficiency", icon: "💰" },
  { label: "Engineering Productivity", icon: "⚙️" },
  { label: "AI Adoption", icon: "🧠" },
  { label: "Business Impact", icon: "🎯" },
];

const idealClients = [
  "Pre-Seed Startups",
  "Seed Startups",
  "Series A Companies",
  "Growing SaaS Companies",
  "Enterprises Building AI Products",
  "Companies Modernizing Legacy Systems",
];

export default function Pricing() {
  return (
    <main className="pt-24">
      <SEO
        title="Engineering Subscription Plans | Learnshiz Engineering"
        description="Choose the right engineering subscription for your stage. Builder for MVPs, Growth for scaling startups, Scale for full engineering organizations."
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Engineering Subscription Plans
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Predictable Pricing
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            No hourly billing. No surprise invoices. One flat monthly subscription covers your entire dedicated engineering team.
          </p>
          <p className="text-sm text-slate-500">
            All plans include dedicated engineers, sprint planning, CI/CD, and production deployment.
          </p>
        </div>
      </section>

      {/* Plans (reuse component) */}
      <div className="bg-slate-950">
        <EngineeringPlans />
      </div>

      {/* Ideal Clients */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              We Work Best With
            </h2>
            <p className="text-slate-400">Companies at the right growth stage to benefit from dedicated engineering teams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {idealClients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/70 rounded-xl px-5 py-4"
              >
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              We Measure Ourselves by Outcomes
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Not vanity metrics. We track what actually matters to your business.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{m.icon}</div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-blue-950/20 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to Build Faster?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Book a Discovery Call and we'll recommend the right plan for your stage,
            then introduce your engineering team within 1–2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
