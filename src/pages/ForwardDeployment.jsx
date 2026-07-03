import React from "react";
import ForwardDeploymentSection from "../components/ForwardDeploymentSection";
import EngagementModel from "../components/EngagementModel";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const futureServices = [
  "Fractional CTO", "AI Transformation Consulting", "Platform Engineering",
  "DevSecOps", "Cloud Cost Optimization", "Site Reliability Engineering",
  "Enterprise AI Adoption", "AI Governance", "Product Strategy",
];

export default function ForwardDeployment() {
  return (
    <main className="pt-24">
      <SEO
        title="Forward Deployment Engineering | Learnshiz Engineering"
        description="Forward Deployment Engineers embed directly into your business to solve critical challenges — combining software engineering, product thinking, and AI to deliver measurable impact fast."
        path="/forward-deployment"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Forward Deployment Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Engineers Who Think{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Like Founders
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-7">
            Our FDEs embed into your team, understand your business deeply, and ship solutions that
            create measurable impact — not just code.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-indigo-600/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>

      <ForwardDeploymentSection />
      <EngagementModel />

      {/* Future Services */}
      <section className="py-14 md:py-20 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Expanding Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">What's Coming Next</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-lg mx-auto">
            Learnshiz Engineering is evolving into a full Engineering Intelligence Platform.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {futureServices.map((service) => (
              <span
                key={service}
                className="bg-slate-900/40 border border-slate-800/50 rounded-xl px-4 py-2 text-xs text-slate-400 font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
