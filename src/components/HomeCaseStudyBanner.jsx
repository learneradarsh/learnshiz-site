import React from "react";
import { Link } from "react-router-dom";
import {
  HiMiniBolt,
  HiMiniClock,
  HiMiniCheckCircle,
  HiMiniArrowTopRightOnSquare,
  HiMiniSparkles,
} from "react-icons/hi2";

export default function HomeCaseStudyBanner() {
  const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/60">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-600/15 via-teal-600/10 to-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_60px_rgba(16,185,129,0.12)] relative overflow-hidden">
          
          {/* Top colored line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                <HiMiniSparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                Proof of Execution · Case Study
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                We Built & Shipped a Production FinTech POC in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Under 30 Days.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Meet <strong className="text-white">PortfolioLeak</strong> (<a href="https://leakypockets.ca/" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-300">leakypockets.ca</a>) — a tax-leak diagnostic platform. Our time-zone aligned engineers embedded with the founder and shipped an automated brokerage CSV parsing & dollar-ranked tax analysis app from scratch in less than a month.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                  <HiMiniBolt className="w-4 h-4 text-emerald-400" /> &lt; 30 Days Delivery
                </div>
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                  <HiMiniClock className="w-4 h-4 text-cyan-400" /> 100% Time-Zone Aligned
                </div>
              </div>
            </div>

            {/* Right CTA Box */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 text-center flex flex-col justify-between space-y-6 shadow-inner">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 block mb-2">
                  Lucrative POC Guarantee
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Want Your POC Live Next Month?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Skip the 3-month hiring process. Deploy pre-vetted engineers this week who work directly in your time zone.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-600/30 text-sm"
                >
                  Book Your POC Discovery Call →
                </a>
                <Link
                  to="/industries"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors border border-slate-700 text-xs"
                >
                  Read Full FinTech Case Study <HiMiniArrowTopRightOnSquare className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
