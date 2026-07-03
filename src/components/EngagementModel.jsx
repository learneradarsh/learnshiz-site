import React from "react";

const steps = [
  { icon: "📞", title: "Book Discovery Call", desc: "Tell us about your product and engineering needs." },
  { icon: "🔎", title: "Technical Assessment", desc: "We analyze your stack, requirements, and team gaps." },
  { icon: "📋", title: "Solution Proposal", desc: "Receive a tailored engineering plan and team structure." },
  { icon: "👋", title: "Meet Your Team", desc: "Get introduced to your dedicated engineering team." },
  { icon: "🗓️", title: "Sprint Planning", desc: "Kick off your first sprint with clear milestones." },
  { icon: "⚙️", title: "Development Begins", desc: "Engineers start building with full context and clarity." },
  { icon: "🚀", title: "Weekly Releases", desc: "Continuous delivery with weekly production deployments." },
  { icon: "📈", title: "Continuous Scaling", desc: "We scale the team and capabilities as you grow." },
];

export default function EngagementModel() {
  return (
    <section id="engagement-model" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            From Call to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Continuous Delivery
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A proven engagement model designed to get your engineering team operational fast.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex items-start gap-4 bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 hover:border-slate-700 transition-colors duration-300 group"
            >
              {/* Step number + icon */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-lg group-hover:border-blue-500/40 transition-colors">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-200 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919591967760"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
          >
            Start with Step 1 — Book Your Discovery Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
