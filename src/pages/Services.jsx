import React from "react";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import SEO from "../components/SEO";
import { HiMiniArrowRight } from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const lifecycle = [
  "Discovery", "Architecture", "Sprint Planning", "Development",
  "Testing", "Deployment", "Monitoring", "Weekly Releases", "Continuous Improvement",
];

export default function Services() {
  return (
    <main className="pt-24 bg-white text-slate-600">
      <SEO
        title="Engineering Capabilities | Learnshiz Engineering"
        description="Full-spectrum engineering services: product engineering, AI/ML, cloud architecture, data pipelines, DevOps, and mobile development — delivered by a dedicated team."
        path="/services"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Engineering Services
            </span>
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-7">
            From MVP to enterprise scale — covering every layer of the modern software stack.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25 text-sm"
          >
            Book a Discovery Call
            <HiMiniArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CapabilitiesGrid />

      {/* Development Lifecycle */}
      <section className="py-14 md:py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-3">Development Lifecycle</h2>
          <p className="text-slate-600 text-sm mb-10 max-w-md mx-auto">
            Every feature ships through a proven process — from discovery to continuous improvement.
          </p>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {lifecycle.map((item, i) => (
              <React.Fragment key={item}>
                <span className="bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700">
                  {item}
                </span>
                {i < lifecycle.length - 1 && (
                  <HiMiniArrowRight className="w-3.5 h-3.5 text-[#00B2A9] hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
