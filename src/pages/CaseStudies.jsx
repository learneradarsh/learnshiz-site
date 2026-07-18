import React from "react";
import CaseStudiesSection from "../components/CaseStudiesSection";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

export default function CaseStudies() {
  return (
    <main className="pt-24 bg-white text-slate-600">
      <SEO
        title="Engineering Case Studies | Learnshiz Engineering"
        description="Explore our technical case studies. See how Learnshiz Engineering architects scalable solutions and drives business outcomes for FinTech, AI startups, and Enterprise clients."
        path="/case-studies"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#F8485E] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            Proven{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Engineering
            </span>
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-7">
            Deep technical dives into how we build scalable, high-performance systems that solve complex domain problems and drive tangible business outcomes.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25 text-sm"
          >
            Start Your Project →
          </a>
        </div>
      </section>

      <CaseStudiesSection />
    </main>
  );
}
