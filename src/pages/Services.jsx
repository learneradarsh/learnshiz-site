import React from "react";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import TechStackSection from "../components/TechStackSection";
import SEO from "../components/SEO";
import { HiMiniArrowRight } from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const lifecycle = [
  "Discovery", "Architecture", "Sprint Planning", "Development",
  "Testing", "Deployment", "Monitoring", "Weekly Releases", "Continuous Improvement",
];

export default function Services() {
  return (
    <main className="pt-24">
      <SEO
        title="Engineering Capabilities | Learnshiz Engineering"
        description="Full-spectrum engineering services: product engineering, AI/ML, cloud architecture, data pipelines, DevOps, and mobile development — delivered by a dedicated team."
        path="/services"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Engineering Services
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-7">
            From MVP to enterprise scale — covering every layer of the modern software stack.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
          >
            Book a Discovery Call
            <HiMiniArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CapabilitiesGrid />

      {/* Development Lifecycle */}
      <section className="py-14 md:py-20 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Development Lifecycle</h2>
          <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto">
            Every feature ships through a proven process — from discovery to continuous improvement.
          </p>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {lifecycle.map((item, i) => (
              <React.Fragment key={item}>
                <span className="bg-slate-900/60 border border-slate-800/70 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300">
                  {item}
                </span>
                {i < lifecycle.length - 1 && (
                  <HiMiniArrowRight className="w-3.5 h-3.5 text-slate-700 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <TechStackSection />
    </main>
  );
}
