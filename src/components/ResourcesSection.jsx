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
    <section className="py-20 md:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider shadow-sm">
              <HiMiniBookOpen className="w-4 h-4" />
              The EaaS Dispatch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1622] tracking-tight">
              Engineering Insights & Guides
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Proven methodologies on scaling high-output engineering teams, AI acceleration, and subscription engineering.
            </p>
          </div>

          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00B2A9] hover:underline transition-colors shrink-0"
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
              className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#00B2A9] hover:bg-white hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="bg-white text-[#00B2A9] font-bold px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiMiniClock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0A1622] mb-2.5 group-hover:text-[#00B2A9] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-[#00B2A9] group-hover:underline">
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
