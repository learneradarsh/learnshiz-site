import React from "react";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import TechStackSection from "../components/TechStackSection";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const lifecycle = [
  { step: "Discovery", icon: "🔍" },
  { step: "Architecture", icon: "🏗️" },
  { step: "Sprint Planning", icon: "📋" },
  { step: "Development", icon: "⚙️" },
  { step: "Testing", icon: "🧪" },
  { step: "Deployment", icon: "🚀" },
  { step: "Monitoring", icon: "📊" },
  { step: "Weekly Releases", icon: "🔄" },
  { step: "Continuous Improvement", icon: "📈" },
];

export default function Services() {
  return (
    <main className="pt-24">
      <SEO
        title="Engineering Capabilities | Learnshiz Engineering"
        description="Full-spectrum engineering services: product engineering, AI/ML, cloud architecture, data engineering, DevOps, and mobile development."
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Engineering Services
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            From MVP to enterprise scale — our engineers cover every layer of the modern software stack.
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

      <CapabilitiesGrid />

      {/* Development Lifecycle */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Development Lifecycle
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our proven engineering process ensures every feature ships with quality and confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {lifecycle.map((item, i) => (
              <div key={item.step} className="flex items-center gap-2">
                <div className="bg-slate-900/60 border border-slate-800/70 rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-300">{item.step}</span>
                </div>
                {i < lifecycle.length - 1 && (
                  <span className="text-slate-700 text-lg hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStackSection />
    </main>
  );
}
