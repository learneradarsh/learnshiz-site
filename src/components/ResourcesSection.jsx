import React from "react";
import { Link } from "react-router-dom";
import { HiMiniBookOpen, HiMiniArrowRight, HiMiniClock } from "react-icons/hi2";

const previewArticles = [
  {
    title: "How to Build an Engineering Team Without a CTO",
    category: "Founder Strategy",
    readTime: "7 min read",
    summary: "Why hiring a full-time $350k+ CTO too early can kill your Seed-stage runway — and how subscription engineering gives you turnkey governance.",
  },
  {
    title: "Offshore vs. Time-Zone Aligned Dev Teams",
    category: "Product Velocity",
    readTime: "6 min read",
    summary: "Why traditional $20/hr offshore outsourcing ends up costing 3x more in refactoring, delayed feature releases, and communication churn.",
  },
  {
    title: "EaaS vs. Traditional Outsourcing: Why EaaS Wins",
    category: "Industry Trends",
    readTime: "8 min read",
    summary: "Discover why VC-backed scale-ups are abandoning hourly billing and staffing agencies in favor of integrated, AI-accelerated engineering subscriptions.",
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              <HiMiniBookOpen className="w-4 h-4" />
              The EaaS Dispatch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Insights & Guides
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Proven methodologies on scaling high-output engineering teams, AI acceleration, and subscription engineering.
            </p>
          </div>

          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            Explore All Resources
            <HiMiniArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {previewArticles.map((art, idx) => (
            <Link
              key={idx}
              to="/resources"
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 font-bold px-2.5 py-1 rounded-full border border-blue-500/20">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiMiniClock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300">
                <span>Read Article</span>
                <HiMiniArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
