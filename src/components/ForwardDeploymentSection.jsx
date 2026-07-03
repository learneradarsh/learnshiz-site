import React, { useState } from "react";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const responsibilities = [
  {
    icon: "🔍",
    title: "Product Discovery",
    items: ["Understand customer workflows", "Analyze existing systems", "Identify bottlenecks", "Recommend architecture"],
  },
  {
    icon: "⚡",
    title: "Rapid Solution Delivery",
    items: ["Prototype quickly", "Build production-ready features", "Deploy continuously", "Optimize performance"],
  },
  {
    icon: "🤝",
    title: "Customer Engineering",
    items: ["Work directly with founders", "Join planning meetings", "Support product decisions", "Provide technical consulting"],
  },
  {
    icon: "🧠",
    title: "AI Integration",
    items: ["Identify AI opportunities", "Build AI agents", "Integrate LLMs", "Automate workflows", "Deploy enterprise AI safely"],
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    items: ["Weekly releases", "Performance optimization", "Cost optimization", "Technical roadmap planning"],
  },
];

const fdeRole = [
  "Software Engineer",
  "Solutions Architect",
  "Product Engineer",
  "Customer Success Engineer",
  "AI Engineer",
  "Technical Consultant",
];

const comparison = [
  {
    label: "Approach",
    traditional: "Build what is asked",
    fde: "Understand the problem first",
  },
  {
    label: "Recommendations",
    traditional: "Execute tickets as given",
    fde: "Recommend better solutions",
  },
  {
    label: "Speed",
    traditional: "Slow, sequential delivery",
    fde: "Build quickly, iterate fast",
  },
  {
    label: "Measurement",
    traditional: "Lines of code, hours billed",
    fde: "Measure business outcomes",
  },
  {
    label: "Engagement",
    traditional: "Remote & disconnected",
    fde: "Deep product & business context",
  },
];

export default function ForwardDeploymentSection() {
  const [openResp, setOpenResp] = useState(0);

  return (
    <section id="forward-deployment" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      {/* BG */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Forward Deployment Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Beyond Delivery
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Modern startups don't just need developers. They need engineers who deeply understand their business,
            work directly with founders, rapidly solve problems, and continuously deploy improvements.
          </p>
        </div>

        {/* FDE Role Card */}
        <div className="bg-gradient-to-b from-indigo-950/30 to-slate-900/40 border border-indigo-500/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What is a Forward Deployment Engineer?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                A Forward Deployment Engineer is a hybrid role combining multiple disciplines to directly solve
                your most critical business challenges — not just write code.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/25"
              >
                Meet Your FDE Team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {fdeRole.map((role) => (
                <div
                  key={role}
                  className="bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities Accordion */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">FDE Responsibilities</h3>
            <div className="space-y-3">
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
                      <span className="text-xl">{resp.icon}</span>
                      <span className="font-semibold text-slate-200">{resp.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openResp === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openResp === i && (
                    <ul className="px-5 pb-4 space-y-2">
                      {resp.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">FDE vs Traditional Development</h3>
            <div className="rounded-2xl border border-slate-800/70 overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-900/60 border-b border-slate-800">
                <div className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Aspect</div>
                <div className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-l border-slate-800">Traditional</div>
                <div className="p-4 text-xs font-semibold text-indigo-400 uppercase tracking-wider border-l border-slate-800">FDE</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${i !== comparison.length - 1 ? "border-b border-slate-800/60" : ""}`}
                >
                  <div className="p-4 text-xs font-medium text-slate-500">{row.label}</div>
                  <div className="p-4 text-xs text-slate-400 border-l border-slate-800/60 flex items-start gap-1.5">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    {row.traditional}
                  </div>
                  <div className="p-4 text-xs text-slate-300 border-l border-slate-800/60 flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                    {row.fde}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5">
              <p className="text-slate-300 font-semibold mb-1">We don't simply execute tickets.</p>
              <p className="text-slate-500 text-sm">We solve business problems with engineering excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
