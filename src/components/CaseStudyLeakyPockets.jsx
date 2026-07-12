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
  const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            Featured FinTech Case Study · Execution Velocity
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1622] tracking-tight max-w-3xl leading-tight">
            From Idea to Production POC in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Under 30 Days.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            See how our Forward Deployed Engineering model delivered a complex tax-diagnostic platform for investors from scratch in less than a month.
          </p>
        </div>

        {/* Case Study Container */}
        <div className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]" />

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Client & Project Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-white text-[#00B2A9] border border-slate-200 shadow-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  FinTech & WealthTech
                </span>
                <span className="bg-white text-slate-700 border border-slate-200 shadow-sm px-3 py-1 rounded-lg text-xs font-semibold">
                  Full-Stack AI POC
                </span>
                <span className="bg-white text-[#F8485E] border border-slate-200 shadow-sm px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <HiMiniClock className="w-3.5 h-3.5" /> Delivered in &lt; 1 Month
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1622] flex items-center gap-3">
                  PortfolioLeak (Leaky Pockets)
                  <a
                    href="https://leakypockets.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#00B2A9] hover:text-[#008E87] transition-colors bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full"
                  >
                    Live App <HiMiniArrowTopRightOnSquare className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-[#00B2A9] font-medium text-sm mt-1">
                  Tax-Leak Diagnostic Platform for DIY Investors
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-[#0A1622] font-semibold">The Problem:</strong> DIY investors routinely lose thousands of dollars to hidden portfolio leaks — including asset-location mistakes, foreign withholding tax drag, unharvested capital losses, and high management fee friction. Diagnosing these issues required tedious spreadsheet calculations or expensive advisors.
                </p>
                <p>
                  <strong className="text-[#0A1622] font-semibold">Our Solution:</strong> Learnshiz Forward Deployed Engineers embedded directly with the founder to design, architect, and build <span className="text-[#0A1622] font-medium">PortfolioLeak</span> from scratch. We created a secure brokerage CSV parsing pipeline that analyzes multi-account holdings and calculates exact dollar tax leaks in under 60 seconds.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-[#00B2A9] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Automated CSV Brokerage Parsing</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-[#00B2A9] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Dollar-Ranked Tax Leak Engine</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-[#00B2A9] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">100% Time-Zone Aligned Execution</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3">
                  <HiMiniCheckCircle className="w-5 h-5 text-[#00B2A9] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Zero-Leak Privacy & Security</span>
                </div>
              </div>
            </div>

            {/* Right Column: Speed & Metrics Panel */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-sm">
              <div className="absolute -top-3 right-6 bg-[#00B2A9] text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Velocity Proof
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                  Key Delivery Metrics
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl sm:text-3xl font-black text-[#F8485E] tracking-tight">&lt; 30 Days</div>
                    <div className="text-xs text-slate-600 mt-1 font-medium">From Concept to Live POC</div>
                  </div>
                  <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl sm:text-3xl font-black text-[#00B2A9] tracking-tight">60 Sec</div>
                    <div className="text-xs text-slate-600 mt-1 font-medium">Diagnostic Analysis Time</div>
                  </div>
                </div>

                <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl p-4 mb-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A1622] uppercase tracking-wider mb-1.5">
                    <HiMiniBolt className="w-4 h-4 text-[#F8485E]" />
                    How We Did It So Fast
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    By embedding pre-vetted senior FinTech engineers working directly in the founder's time zone, we eliminated communication delays, conducted daily interactive demos, and shipped production code on Day 2.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="https://leakypockets.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#F8F9FA] hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-3 rounded-xl transition-colors border border-slate-200 shadow-sm"
                >
                  Visit LeakyPockets.ca <HiMiniArrowTopRightOnSquare className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25"
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
