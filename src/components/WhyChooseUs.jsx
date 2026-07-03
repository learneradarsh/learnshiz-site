import React from "react";
import {
  HiMiniBolt,
  HiMiniShieldCheck,
  HiMiniCpuChip,
  HiMiniClock,
  HiMiniCurrencyDollar,
  HiMiniLightBulb,
} from "react-icons/hi2";

const reasons = [
  {
    Icon: HiMiniBolt,
    title: "Startup Speed",
    desc: "Weekly feature releases. We move with urgency and ship consistently.",
    highlight: false,
  },
  {
    Icon: HiMiniShieldCheck,
    title: "Enterprise Quality",
    desc: "Production-grade systems, tested and monitored from Day One.",
    highlight: false,
  },
  {
    Icon: HiMiniCpuChip,
    title: "AI Native",
    desc: "Every engineer uses AI tools to deliver 3–4× faster than traditional teams.",
    highlight: true,
    badge: "Key Differentiator",
  },
  {
    Icon: HiMiniClock,
    title: "100% Time-Zone Aligned",
    desc: "Dedicated engineers who work in your exact business hours — zero offshore communication lags.",
    highlight: true,
    badge: "Works In Your Time",
  },
  {
    Icon: HiMiniCurrencyDollar,
    title: "Predictable Pricing",
    desc: "Flat monthly subscription. No hourly billing, no surprises.",
    highlight: false,
  },
  {
    Icon: HiMiniLightBulb,
    title: "Product Thinking",
    desc: "We challenge assumptions and recommend better solutions — not just execute.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-learnshiz" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Why Learnshiz Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Built Different.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Engineered Better.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Not a staffing agency. Not outsourcing. Your product engineering partner.
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
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  {r.badge}
                </div>
              )}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${r.highlight ? "bg-blue-500/15 border border-blue-500/30" : "bg-slate-800 border border-slate-700/60"}`}>
                <r.Icon className={`w-5 h-5 ${r.highlight ? "text-blue-400" : "text-slate-400"}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
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
