import React from "react";
import { Link } from "react-router-dom";
import {
  HiCheckCircle,
} from "react-icons/hi2";
import { getScarcityData } from "../utils/scarcity";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const brandPromises = [
  "100% Time-Zone Aligned",
  "Zero Offshore Delays",
  "Ship Faster",
  "Dedicated Engineers & AI Pods",
  "10+ Years Proven Legacy",
  "AI-Accelerated Workflows",
];

export default function HeroSection() {
  const { quarter, nextStartDate } = getScarcityData();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FA] to-white border-b border-slate-200">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-50" />
        <div className="absolute w-[650px] h-[650px] rounded-full bg-[#F8485E]/8 blur-[150px] mix-blend-multiply animate-[pulse-glow_12s_ease-in-out_infinite_alternate] -top-1/4 left-1/4" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00B2A9]/8 blur-[140px] mix-blend-multiply animate-[pulse-glow_14s_ease-in-out_infinite_alternate_reverse] top-1/4 right-1/4" />
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F8485E] animate-pulse" />
          Engineering-as-a-Service · Turnkey Pods
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#0A1622] tracking-tight leading-[1.1] mb-5 px-2">
          Your Dedicated{" "}
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9] pb-2">
            Engineering Team.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4">
          Build, Scale and Ship Products Faster <span className="text-[#F8485E] font-bold">— Backed by 10+ Years of Proven Legacy.</span>
        </p>

        <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed mb-10 px-2">
          Stop spending months hiring or battling rigid offshore time lags. Get a complete engineering team & AI Pod that works during your exact working hours — fully aligned under one predictable monthly subscription.
        </p>

        {/* Urgency Pill */}
        <div className="inline-flex items-center gap-2 bg-[#F8485E]/10 border border-[#F8485E]/30 text-slate-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F8485E] animate-pulse shrink-0" />
          <span>⚡ {quarter} Capacity: Currently onboarding only <strong className="text-[#0A1622]">3 new dedicated teams</strong> · <span className="text-[#00B2A9] underline underline-offset-2">Next start date: {nextStartDate}</span></span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            id="hero-book-call-cta"
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8485E] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#E8236E] shadow-xl shadow-[#F8485E]/25 w-full sm:w-auto group"
          >
            Book a Discovery Call
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button
            id="hero-free-assessment-cta"
            onClick={() => window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "HeroSection" } }))}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#00B2A9] px-8 py-4 text-base font-bold text-[#0A1622] transition-all shadow-sm hover:shadow-md w-full sm:w-auto group"
          >
            Get Free Assessment
            <span className="text-[10px] bg-[#F8485E]/15 text-[#F8485E] border border-[#F8485E]/30 px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider group-hover:bg-[#F8485E] group-hover:text-white transition-colors">24h Blueprint</span>
          </button>
          <Link
            id="hero-view-plans-cta"
            to="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-[#0A1622] hover:border-[#00B2A9] w-full sm:w-auto shadow-sm"
          >
            View Plans
          </Link>
        </div>

        {/* Brand Promise Strip */}
        <div className="border-t border-slate-200 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {brandPromises.map((promise, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-3 shadow-sm hover:border-[#00B2A9] transition-colors"
              >
                <HiCheckCircle className="w-4 h-4 text-[#00B2A9] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-semibold text-center leading-tight">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
