import React from "react";
import { Link } from "react-router-dom";
import {
  HiCheckCircle,
} from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const brandPromises = [
  "100% Time-Zone Aligned",
  "Zero Offshore Delays",
  "Ship Faster",
  "Dedicated Engineers",
  "10+ Years Proven Legacy",
  "AI-Accelerated",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-20" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[130px] mix-blend-screen animate-[pulse-glow_12s_ease-in-out_infinite_alternate] -top-1/4 left-1/4" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px] mix-blend-screen animate-[pulse-glow_14s_ease-in-out_infinite_alternate_reverse] top-1/4 right-1/4" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px] mix-blend-screen animate-[pulse-glow_18s_ease-in-out_infinite_alternate] bottom-0 left-1/3" />
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Engineering-as-a-Service · EaaS
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 px-2">
          Your Dedicated{" "}
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 animate-gradient-x pb-2">
            Engineering Team.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
          Build, Scale and Ship Products Faster <span className="text-blue-400">— Backed by 10+ Years of Proven Legacy.</span>
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 px-2">
          Stop spending months hiring or battling rigid offshore time lags. Get a complete engineering team that works during your exact working hours — fully aligned under one predictable monthly subscription.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            id="hero-book-call-cta"
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-xl shadow-blue-600/30 w-full sm:w-auto group"
          >
            Book a Discovery Call
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            id="hero-view-plans-cta"
            to="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white w-full sm:w-auto"
          >
            View Engineering Plans
          </Link>
        </div>

        {/* Brand Promise Strip */}
        <div className="border-t border-slate-800/60 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {brandPromises.map((promise, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 bg-slate-900/40 border border-slate-800/60 rounded-xl px-3 py-3"
              >
                <HiCheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium text-center leading-tight">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
