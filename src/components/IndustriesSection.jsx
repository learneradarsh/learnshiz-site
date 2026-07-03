import React from "react";

const industries = [
  { name: "AI Startups", icon: "🤖", desc: "LLM apps, AI agents, enterprise AI" },
  { name: "SaaS", icon: "☁️", desc: "Scalable multi-tenant platforms" },
  { name: "Healthcare", icon: "🏥", desc: "HIPAA-compliant health tech" },
  { name: "FinTech", icon: "💳", desc: "Payments, banking, compliance" },
  { name: "Logistics", icon: "🚚", desc: "Supply chain, fleet, tracking" },
  { name: "HRTech", icon: "👥", desc: "Hiring, onboarding, workforce" },
  { name: "EdTech", icon: "🎓", desc: "Learning platforms, LMS" },
  { name: "Retail", icon: "🛍️", desc: "Commerce, inventory, POS" },
  { name: "Enterprise", icon: "🏢", desc: "Digital transformation, modernization" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            We Specialize In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Your Industry
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Deep domain expertise across the industries where software matters most.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {ind.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{ind.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Don't see your industry?{" "}
            <a
              href="https://wa.me/919591967760"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Let's talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
