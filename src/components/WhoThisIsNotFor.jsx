import React from "react";
import { HiMiniXCircle, HiMiniCheckCircle, HiMiniShieldExclamation } from "react-icons/hi2";

export default function WhoThisIsNotFor() {
  const notForList = [
    {
      title: "Single Short-Term Gigs",
      desc: "Teams looking for an isolated freelancer for a 1-to-2 week bug fix or temporary task.",
    },
    {
      title: "One-Off Projects Under 3 Months",
      desc: 'Companies wanting a static, "deliver and disappear" project without ongoing product iteration or maintenance.',
    },
    {
      title: "Cheap, Unmanaged Offshore Labor",
      desc: "Buyers seeking $15/hr unvetted offshore coders without architectural governance, QA standards, or time-zone alignment.",
    },
    {
      title: "No Technical or Product Ownership",
      desc: "Founders who don't have a clear product vision or roadmap to direct a dedicated engineering squad.",
    },
  ];

  const forList = [
    {
      title: "VC-Backed Seed to Series B Startups",
      desc: "High-growth companies needing to scale engineering velocity 3–4× immediately without spending 6+ months recruiting.",
    },
    {
      title: "Scale-Ups Needing Embedded AI Squads",
      desc: "Teams wanting dedicated AI and full-stack engineers who attend standups and work during exact US/UK business hours.",
    },
    {
      title: "Enterprises Demanding 100% IP Ownership",
      desc: "CTOs requiring enterprise-grade code quality, rigorous background checks, SOC 2 readiness, and strict NDA protection.",
    },
    {
      title: "Founders Wanting Predictable Scaling",
      desc: "Leaders who want a flat monthly subscription with the flexibility to scale up or pause on 30-day rolling contracts.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            <HiMiniShieldExclamation className="w-4 h-4" />
            Selective Partnership · Mutual Fit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Who We Are <span className="text-rose-400">NOT</span> A Fit For.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We are deeply committed to product excellence and long-term velocity. To maintain our 100% time-zone alignment and AI-native standards, we are selective about the partners we onboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* NOT FOR COLUMN */}
          <div className="bg-gradient-to-b from-rose-950/20 to-slate-900/40 border border-rose-500/20 rounded-3xl p-7 sm:p-9 shadow-xl relative">
            <div className="flex items-center gap-2.5 border-b border-rose-500/20 pb-5 mb-6">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold shrink-0">
                ✕
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  We Are <span className="text-rose-400">NOT</span> For You If:
                </h3>
                <span className="text-xs text-rose-300/80 font-medium">
                  Please do not book a call if these apply
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {notForList.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <HiMiniXCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IS FOR COLUMN */}
          <div className="bg-gradient-to-b from-blue-950/30 to-slate-900/60 border border-blue-500/40 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-blue-600/10 relative">
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
              Ideal ICP Match
            </div>

            <div className="flex items-center gap-2.5 border-b border-blue-500/20 pb-5 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  We Are An <span className="text-blue-400">Ideal Match</span> If:
                </h3>
                <span className="text-xs text-blue-300/80 font-medium">
                  We build long-term engineering partnerships
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {forList.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <HiMiniCheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-500/20">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "WhoThisIsNotFor" } }))}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Match Our Criteria? Get Free Assessment Blueprint →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
