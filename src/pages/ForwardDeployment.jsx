import React from "react";
import ForwardDeploymentSection from "../components/ForwardDeploymentSection";
import EngagementModel from "../components/EngagementModel";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const futureServices = [
  "Fractional CTO",
  "AI Transformation Consulting",
  "Platform Engineering",
  "DevSecOps",
  "Cloud Cost Optimization",
  "Site Reliability Engineering",
  "Enterprise AI Adoption",
  "AI Readiness Assessment",
  "AI Governance",
  "Product Strategy",
];

export default function ForwardDeployment() {
  return (
    <main className="pt-24">
      <SEO
        title="Forward Deployment Engineering | Learnshiz Engineering"
        description="Forward Deployment Engineers combine software engineering, product thinking, and AI integration to directly solve your most critical business problems — not just write code."
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Forward Deployment Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Engineers Who Think{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Like Founders
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Our Forward Deployment Engineers embed directly into your business, understand your challenges deeply,
            and build solutions that create measurable impact — fast.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-indigo-600/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>

      {/* FDE Section */}
      <ForwardDeploymentSection />

      {/* Engagement Model */}
      <EngagementModel />

      {/* Coming Soon Services */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              Future Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Expanding Our Capabilities
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Learnshiz Engineering is evolving into a full Engineering Intelligence Platform.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {futureServices.map((service) => (
              <div
                key={service}
                className="bg-slate-900/40 border border-slate-800/50 rounded-xl px-4 py-3 text-center"
              >
                <span className="text-xs text-slate-400 font-medium leading-snug block">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
