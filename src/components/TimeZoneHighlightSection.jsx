import React, { useState } from "react";
import {
  HiMiniClock,
  HiMiniGlobeAmericas,
  HiMiniCheckCircle,
  HiMiniXCircle,
  HiMiniBolt,
} from "react-icons/hi2";

export default function TimeZoneHighlightSection() {
  const [mobileTab, setMobileTab] = useState("learnshiz"); // "learnshiz" | "offshore"
  const BOOK_CALL_URL = "https://wa.me/919591967760";

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-slate-950 relative border-t border-slate-800/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-4 sm:mb-5 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
            <HiMiniGlobeAmericas className="w-4 h-4 text-blue-400 animate-spin-slow shrink-0" />
            <span>Zero Offshore Delays · 100% Aligned</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-5 leading-tight">
            We Work in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Your Exact Time Zone.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-400 leading-relaxed">
            Tired of waiting 24 hours just to get a pull request reviewed or a simple question answered? Unlike traditional offshore vendors, our engineers operate during your normal business hours — fully synchronized with your workflow.
          </p>
        </div>

        {/* Mobile Tab Switcher (Visible only on < lg screens) */}
        <div className="lg:hidden flex items-center justify-center p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl mb-6 max-w-md mx-auto shadow-lg">
          <button
            type="button"
            onClick={() => setMobileTab("learnshiz")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === "learnshiz"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <HiMiniClock className="w-4 h-4 text-blue-300 shrink-0" />
            Learnshiz Advantage
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("offshore")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === "offshore"
                ? "bg-red-950/80 text-red-300 border border-red-500/40 shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <HiMiniXCircle className="w-4 h-4 text-red-400 shrink-0" />
            Typical Offshore
          </button>
        </div>

        {/* Desktop Side-by-Side Grid & Mobile Switched View */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          
          {/* Typical Offshore Team Card */}
          <div
            className={`bg-slate-900/40 border border-red-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-red-500/30 ${
              mobileTab === "offshore" ? "block animate-fade-in" : "hidden lg:flex"
            }`}
          >
            <div className="absolute top-0 right-0 bg-red-950/80 border-b border-l border-red-500/30 text-red-300 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl uppercase tracking-wider">
              Typical Offshore Vendor
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pt-3 sm:pt-2">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0">
                  <HiMiniXCircle className="w-6 sm:w-7 h-6 sm:h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-200 leading-tight">Offshore Time Lag</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Rigid schedules & delayed cycles.</p>
                </div>
              </div>

              {/* Timeline illustration */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8">
                <div className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span>Your Workday (9 AM – 5 PM)</span>
                  <span className="text-red-400 font-bold">1–2h Overlap Only</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 sm:h-3 rounded-full overflow-hidden flex">
                  <div className="w-4/5 bg-slate-700/50 h-full"></div>
                  <div className="w-1/5 bg-red-500/80 h-full relative"></div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  You spend most of your day blocked. Engineers wake up when you go to sleep.
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-slate-300">24-Hour Feedback Loops:</strong> Questions asked at 3 PM wait until the next morning for an answer.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-slate-300">Midnight Emergency Calls:</strong> Forcing founders and tech leads onto late-night calls just to sync.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-slate-300">Disconnected Stand-ups:</strong> Async updates that miss critical nuances and product direction.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/60 text-[11px] sm:text-xs text-slate-500 italic">
              Result: Slow development velocity and frustrated product leaders.
            </div>
          </div>

          {/* Learnshiz Forward Deployed Team Card */}
          <div
            className={`bg-gradient-to-b from-blue-950/50 via-slate-900/80 to-slate-900 border border-blue-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[0_0_45px_rgba(37,99,235,0.15)] hover:border-blue-400 ${
              mobileTab === "learnshiz" ? "block animate-fade-in" : "hidden lg:flex"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400" />
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl uppercase tracking-wider shadow-md">
              Learnshiz Advantage
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pt-3 sm:pt-2">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                  <HiMiniClock className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">100% Time-Zone Aligned</h3>
                  <p className="text-xs sm:text-sm text-blue-300 mt-0.5">We work when you work. Real-time sync.</p>
                </div>
              </div>

              {/* Timeline illustration */}
              <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8 shadow-inner">
                <div className="text-[11px] sm:text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                  <span>Your Workday (EST · PST · GMT)</span>
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto">100% Real-Time Overlap</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 sm:h-3 rounded-full overflow-hidden flex">
                  <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-full animate-pulse"></div>
                </div>
                <p className="text-[11px] text-blue-200/90 mt-2 flex items-center gap-1.5 leading-relaxed">
                  <HiMiniBolt className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Live Slack sync, instant PR reviews, and same-day deployments.
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-blue-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Real-Time Slack & Teams Sync:</strong> Available online during your core hours for instant pair programming and architecture decisions.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-blue-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Continuous Same-Day PRs:</strong> Code submitted in the morning gets reviewed, tested, and merged into staging by afternoon.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-blue-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Deep Workflow Fit:</strong> Engineers who communicate fluently, challenge assumptions, and act like co-founders.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-semibold text-blue-300 text-center sm:text-left">
                Experience the speed of an aligned team.
              </span>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-3 sm:py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 shrink-0"
              >
                Match With Aligned Engineers →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
