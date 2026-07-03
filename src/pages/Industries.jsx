import React from "react";
import IndustriesSection from "../components/IndustriesSection";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://wa.me/919591967760";

export default function Industries() {
  return (
    <main className="pt-24">
      <SEO
        title="Industries We Serve | Learnshiz Engineering"
        description="Learnshiz Engineering specializes in AI Startups, SaaS, FinTech, HealthTech, EdTech, Logistics, HRTech, Retail, and Enterprise platforms."
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Industries We Serve
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Deep Domain{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Expertise
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            We don't just understand code — we understand your industry, your users, and your business challenges.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>

      <IndustriesSection />
    </main>
  );
}
