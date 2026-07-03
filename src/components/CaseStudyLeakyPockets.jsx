import React from "react";
import {
  HiMiniBolt,
  HiMiniClock,
  HiMiniChartBarSquare,
  HiMiniCheckCircle,
  HiMiniArrowTopRightOnSquare,
  HiMiniShieldCheck,
} from "react-icons/hi2";

export default function CaseStudyLeakyPockets() {
  const BOOK_CALL_URL = "https://wa.me/919591967760";

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/60">
      {/* Background accents */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Featured FinTech Case Study · Execution Velocity
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
            From Idea to Production POC in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Under 30 Days.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            See how our Forward Deployed Engineering model delivered a complex tax-diagnostic platform for investors from scratch in less than a month.
          </p>
        </div>

        {/* Case Study Container */}
        <div className="bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.08)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Client & Project Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  FinTech & WealthTech
                </span>
                <span className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-lg text-xs font-semibold">
                  Full-Stack AI POC
                </span>
                <span className="bg-blue-500/15 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <HiMiniClock className="w-3.5 h-3.5" /> Delivered in &lt; 1 Month
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  PortfolioLeak (Leaky Pockets)
                  <a
                    href="https://leakypockets.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/50 border border-emerald-500/30 px-3 py-1 rounded-full"
                  >
                    Live App <HiMiniArrowTopRightOnSquare className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-emerald-400/90 font-medium text-sm mt-1">
                  Tax-Leak Diagnostic Platform for DIY Investors
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">The Problem:</strong> DIY investors routinely lose thousands of dollars to hidden portfolio leaks — including asset-location mistakes, foreign withholding tax drag, unharvested capital losses, and high management fee friction. Diagnosing these issues required tedious spreadsheet calculations or expensive advisors.
                </p>
                <p>
                  <strong className="text-white font-semibold">Our Solution:</strong> Learnshiz Forward Deployed Engineers embedded directly with the founder to design, architect, and build <span className="text-white font-medium">PortfolioLeak</span> from scratch. We created a secure brokerage CSV parsing pipeline that analyzes multi-account holdings and calculates exact dollar tax leaks in under 60 seconds.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Automated CSV Brokerage Parsing</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Dollar-Ranked Tax Leak Engine</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">100% Time-Zone Aligned Execution</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Zero-Leak Privacy & Security</span>
                </div>
              </div>
            </div>

            {/* Right Column: Speed & Metrics Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Velocity Proof
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Key Delivery Metrics
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">&lt; 30 Days</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">From Concept to Live POC</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight">60 Sec</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Diagnostic Analysis Time</div>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
                    <HiMiniBolt className="w-4 h-4 text-emerald-400" />
                    How We Did It So Fast
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By embedding pre-vetted senior FinTech engineers working directly in the founder's time zone, we eliminated communication delays, conducted daily interactive demos, and shipped production code on Day 2.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="https://leakypockets.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-3 rounded-xl transition-colors border border-slate-700"
                >
                  Visit LeakyPockets.ca <HiMiniArrowTopRightOnSquare className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/25"
                >
                  Build Your POC Fast →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
