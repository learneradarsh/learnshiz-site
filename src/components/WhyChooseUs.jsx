import React from "react";

const reasons = [
  {
    icon: "⚡",
    title: "Startup Speed",
    desc: "Ship features every week. We operate with the urgency of a startup and the discipline of an enterprise.",
    highlight: false,
  },
  {
    icon: "🏛️",
    title: "Enterprise Quality",
    desc: "Architected for scale from Day One. Every system we build is production-grade, tested, and monitored.",
    highlight: false,
  },
  {
    icon: "🧠",
    title: "AI Native",
    desc: "Every engineer is AI-enabled. We use AI tools to deliver 4× faster than traditional development teams.",
    highlight: true,
    badge: "Key Differentiator",
  },
  {
    icon: "🎯",
    title: "Dedicated Team",
    desc: "Your engineers stay with your product. No rotating contractors — a committed team that knows your codebase.",
    highlight: false,
  },
  {
    icon: "💰",
    title: "Predictable Pricing",
    desc: "No hourly billing. No surprise invoices. One flat monthly subscription that covers your entire engineering team.",
    highlight: false,
  },
  {
    icon: "💡",
    title: "Product Thinking",
    desc: "We think like founders, not contractors. We challenge assumptions and recommend better solutions.",
    highlight: false,
  },
];

export default function WhyLearnshiz() {
  return (
    <section id="why-learnshiz" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Why Learnshiz Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Built Different.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Engineered Better.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We're not a staffing agency. We're not an outsourcing company. We're your product engineering partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
                r.highlight
                  ? "bg-gradient-to-b from-blue-950/40 to-slate-900/60 border border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.1)]"
                  : "bg-slate-900/40 border border-slate-800/70 hover:border-slate-700"
              }`}
            >
              {r.badge && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-blue-400/30 uppercase tracking-wider">
                  {r.badge}
                </div>
              )}
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
              <p className={`text-sm leading-relaxed ${r.highlight ? "text-slate-300" : "text-slate-500"}`}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
