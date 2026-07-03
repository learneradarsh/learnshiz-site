import React, { useState } from "react";
import {
  HiMiniMagnifyingGlass,
  HiMiniBolt,
  HiMiniUsers,
  HiMiniCpuChip,
  HiMiniArrowPath,
  HiMiniChevronDown,
} from "react-icons/hi2";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const responsibilities = [
  {
    Icon: HiMiniMagnifyingGlass,
    title: "Product Discovery",
    items: ["Map customer workflows", "Audit existing systems", "Identify bottlenecks", "Recommend architecture"],
  },
  {
    Icon: HiMiniBolt,
    title: "Rapid Delivery",
    items: ["Prototype in days", "Build production-ready features", "Deploy continuously", "Optimize for performance"],
  },
  {
    Icon: HiMiniUsers,
    title: "Customer Engineering",
    items: ["Work directly with founders", "Attend planning sessions", "Drive product decisions", "Provide technical consulting"],
  },
  {
    Icon: HiMiniCpuChip,
    title: "AI Integration",
    items: ["Identify AI opportunities", "Build agents & LLM apps", "Automate workflows", "Deploy enterprise AI safely"],
  },
  {
    Icon: HiMiniArrowPath,
    title: "Continuous Improvement",
    items: ["Weekly releases", "Performance & cost optimization", "Infrastructure upgrades", "Technical roadmap planning"],
  },
];

const fdeRole = [
  "Software Engineer",
  "Solutions Architect",
  "Product Engineer",
  "AI Engineer",
  "Technical Consultant",
  "Customer Success Engineer",
];

const comparison = [
  { label: "Approach",     traditional: "Execute tickets as given",      fde: "Understand the problem first" },
  { label: "Mindset",      traditional: "Code delivery",                  fde: "Business outcomes" },
  { label: "Speed",        traditional: "Sequential, slow",               fde: "Prototype fast, iterate faster" },
  { label: "Engagement",   traditional: "Remote & disconnected",          fde: "Deep product context" },
  { label: "Value",        traditional: "Hours billed",                   fde: "Impact delivered" },
];

export default function ForwardDeploymentSection() {
  const [openResp, setOpenResp] = useState(0);

  return (
    <section id="forward-deployment" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Forward Deployment Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Beyond Delivery
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our FDEs don't just write code — they embed into your business, understand your challenges,
            and build solutions that drive measurable outcomes.
          </p>
        </div>

        {/* FDE Role Card */}
        <div className="bg-gradient-to-b from-indigo-950/30 to-slate-900/40 border border-indigo-500/30 rounded-3xl p-7 md:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                What is a Forward Deployment Engineer?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A hybrid role combining engineering, product thinking, and AI expertise — deployed directly
                inside your business to solve the problems that matter most.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/25"
              >
                Meet Your FDE Team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {fdeRole.map((role) => (
                <div key={role} className="bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities + Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-slate-400">Responsibilities</h3>
            <div className="space-y-2">
              {responsibilities.map((resp, i) => (
                <div
                  key={resp.title}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    openResp === i
                      ? "border-indigo-500/40 bg-indigo-950/20"
                      : "border-slate-800/70 bg-slate-900/30 hover:border-slate-700"
                  }`}
                  onClick={() => setOpenResp(openResp === i ? -1 : i)}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <resp.Icon className={`w-4 h-4 ${openResp === i ? "text-indigo-400" : "text-slate-500"}`} />
                      <span className="font-semibold text-sm text-slate-200">{resp.title}</span>
                    </div>
                    <HiMiniChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openResp === i ? "rotate-180" : ""}`} />
                  </div>
                  {openResp === i && (
                    <ul className="px-5 pb-4 space-y-1.5">
                      {resp.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/70 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-slate-400">FDE vs Traditional Dev</h3>
            <div className="rounded-2xl border border-slate-800/70 overflow-hidden mb-5">
              <div className="grid grid-cols-3 bg-slate-900/60 border-b border-slate-800">
                <div className="p-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Aspect</div>
                <div className="p-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider border-l border-slate-800">Traditional</div>
                <div className="p-3.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider border-l border-slate-800">FDE</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 ${i !== comparison.length - 1 ? "border-b border-slate-800/60" : ""}`}>
                  <div className="p-3.5 text-xs font-medium text-slate-500">{row.label}</div>
                  <div className="p-3.5 text-xs text-slate-500 border-l border-slate-800/60 flex items-start gap-1.5">
                    <span className="text-red-500 mt-0.5 shrink-0 text-[10px]">✕</span>
                    {row.traditional}
                  </div>
                  <div className="p-3.5 text-xs text-slate-300 border-l border-slate-800/60 flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5 shrink-0 text-[10px]">✓</span>
                    {row.fde}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5">
              <p className="text-slate-200 font-semibold text-sm mb-1">We don't execute tickets.</p>
              <p className="text-slate-500 text-sm">We solve business problems with engineering excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
