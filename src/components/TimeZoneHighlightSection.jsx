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
  const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00B2A9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-4 sm:mb-5 shadow-sm">
            <HiMiniGlobeAmericas className="w-4 h-4 text-[#00B2A9] animate-spin-slow shrink-0" />
            <span>Zero Offshore Delays · 100% Aligned</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1622] tracking-tight mb-4 sm:mb-5 leading-tight">
            We Work in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Your Exact Time Zone.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed">
            Tired of waiting 24 hours just to get a pull request reviewed or a simple question answered? Unlike traditional offshore vendors, our engineers operate during your normal business hours — fully synchronized with your workflow.
          </p>
        </div>

        {/* Mobile Tab Switcher (Visible only on < lg screens) */}
        <div className="lg:hidden flex items-center justify-center p-1.5 bg-[#F8F9FA] border border-slate-200 rounded-2xl mb-6 max-w-md mx-auto shadow-sm">
          <button
            type="button"
            onClick={() => setMobileTab("learnshiz")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === "learnshiz"
                ? "bg-[#F8485E] text-white shadow-md shadow-[#F8485E]/30"
                : "text-slate-600 hover:text-[#0A1622]"
            }`}
          >
            <HiMiniClock className="w-4 h-4 text-white shrink-0" />
            Learnshiz Advantage
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("offshore")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === "offshore"
                ? "bg-rose-50 text-rose-700 border border-rose-200 shadow-sm"
                : "text-slate-600 hover:text-[#0A1622]"
            }`}
          >
            <HiMiniXCircle className="w-4 h-4 text-rose-500 shrink-0" />
            Typical Offshore
          </button>
        </div>

        {/* Desktop Side-by-Side Grid & Mobile Switched View */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          
          {/* Typical Offshore Team Card */}
          <div
            className={`bg-[#F8F9FA] border border-rose-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-rose-300 shadow-sm ${
              mobileTab === "offshore" ? "block animate-fade-in" : "hidden lg:flex"
            }`}
          >
            <div className="absolute top-0 right-0 bg-rose-100 border-b border-l border-rose-200 text-rose-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl uppercase tracking-wider">
              Typical Offshore Vendor
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pt-3 sm:pt-2">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0">
                  <HiMiniXCircle className="w-6 sm:w-7 h-6 sm:h-7 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#0A1622] leading-tight">Offshore Time Lag</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Rigid schedules & delayed cycles.</p>
                </div>
              </div>

              {/* Timeline illustration */}
              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8 shadow-sm">
                <div className="text-[11px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span>Your Workday (9 AM – 5 PM)</span>
                  <span className="text-rose-600 font-bold">1–2h Overlap Only</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 sm:h-3 rounded-full overflow-hidden flex">
                  <div className="w-4/5 bg-slate-300 h-full"></div>
                  <div className="w-1/5 bg-rose-500 h-full relative"></div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  You spend most of your day blocked. Engineers wake up when you go to sleep.
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-rose-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-[#0A1622]">24-Hour Feedback Loops:</strong> Questions asked at 3 PM wait until the next morning for an answer.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-rose-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-[#0A1622]">Midnight Emergency Calls:</strong> Forcing founders and tech leads onto late-night calls just to sync.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-rose-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span><strong className="text-[#0A1622]">Disconnected Stand-ups:</strong> Async updates that miss critical nuances and product direction.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 text-[11px] sm:text-xs text-slate-500 italic">
              Result: Slow development velocity and frustrated product leaders.
            </div>
          </div>

          {/* Learnshiz Forward Deployed Team Card */}
          <div
            className={`bg-white border border-[#00B2A9]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-md hover:border-[#00B2A9] ${
              mobileTab === "learnshiz" ? "block animate-fade-in" : "hidden lg:flex"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F8485E] to-[#00B2A9]" />
            <div className="absolute top-0 right-0 bg-[#00B2A9] text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl uppercase tracking-wider shadow-sm">
              Learnshiz Advantage
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pt-3 sm:pt-2">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00B2A9]/15 border border-[#00B2A9]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <HiMiniClock className="w-6 sm:w-7 h-6 sm:h-7 text-[#00B2A9]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#0A1622] leading-tight">100% Time-Zone Aligned</h3>
                  <p className="text-xs sm:text-sm text-[#00B2A9] font-semibold mt-0.5">We work when you work. Real-time sync.</p>
                </div>
              </div>

              {/* Timeline illustration */}
              <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8 shadow-sm">
                <div className="text-[11px] sm:text-xs font-semibold text-[#0A1622] uppercase tracking-wider mb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                  <span>Your Workday (EST · PST · GMT)</span>
                  <span className="bg-[#00B2A9]/15 text-[#00B2A9] border border-[#00B2A9]/30 px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto">100% Real-Time Overlap</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 sm:h-3 rounded-full overflow-hidden flex">
                  <div className="w-full bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9] h-full animate-pulse"></div>
                </div>
                <p className="text-[11px] text-slate-600 mt-2 flex items-center gap-1.5 leading-relaxed font-normal">
                  <HiMiniBolt className="w-3.5 h-3.5 text-[#00B2A9] shrink-0" />
                  Live Slack sync, instant PR reviews, and same-day deployments.
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600 font-normal">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-[#00B2A9] w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A1622]">Real-Time Slack & Teams Sync:</strong> Available online during your core hours for instant pair programming and architecture decisions.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-[#00B2A9] w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A1622]">Continuous Same-Day PRs:</strong> Code submitted in the morning gets reviewed, tested, and merged into staging by afternoon.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <HiMiniCheckCircle className="text-[#00B2A9] w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A1622]">Deep Workflow Fit:</strong> Engineers who communicate fluently, challenge assumptions, and act like co-founders.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-semibold text-slate-600 text-center sm:text-left">
                Experience the speed of an aligned team.
              </span>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white text-xs font-semibold px-4 py-3 sm:py-2.5 rounded-xl transition-all shadow-lg shadow-[#F8485E]/30 shrink-0"
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
