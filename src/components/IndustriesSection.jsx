import React from "react";
import {
  HiMiniCpuChip,
  HiCloud,
  HiMiniHeart,
  HiMiniCreditCard,
  HiMiniTruck,
  HiMiniUserGroup,
  HiMiniAcademicCap,
  HiMiniShoppingBag,
  HiMiniBuildingOffice2,
} from "react-icons/hi2";

const industries = [
  { name: "AI Startups",   Icon: HiMiniCpuChip,         desc: "LLM apps, AI agents, enterprise AI",     color: "purple" },
  { name: "SaaS",          Icon: HiCloud,                desc: "Scalable, multi-tenant platforms",        color: "blue" },
  { name: "Healthcare",    Icon: HiMiniHeart,            desc: "HIPAA-compliant health technology",       color: "rose" },
  { name: "FinTech",       Icon: HiMiniCreditCard,       desc: "Payments, banking & compliance",          color: "emerald" },
  { name: "Logistics",     Icon: HiMiniTruck,            desc: "Supply chain, fleet & tracking",          color: "orange" },
  { name: "HRTech",        Icon: HiMiniUserGroup,        desc: "Hiring, onboarding & workforce tools",    color: "cyan" },
  { name: "EdTech",        Icon: HiMiniAcademicCap,      desc: "Learning platforms & LMS",                color: "yellow" },
  { name: "Retail",        Icon: HiMiniShoppingBag,      desc: "Commerce, inventory & POS",               color: "pink" },
  { name: "Enterprise",    Icon: HiMiniBuildingOffice2,  desc: "Digital transformation & modernization",  color: "indigo" },
];

const colorMap = {
  purple:  { icon: "text-purple-400",  bg: "bg-purple-500/10 border-purple-500/20" },
  blue:    { icon: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20" },
  rose:    { icon: "text-rose-400",    bg: "bg-rose-500/10 border-rose-500/20" },
  emerald: { icon: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  orange:  { icon: "text-orange-400",  bg: "bg-orange-500/10 border-orange-500/20" },
  cyan:    { icon: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/20" },
  yellow:  { icon: "text-yellow-400",  bg: "bg-yellow-500/10 border-yellow-500/20" },
  pink:    { icon: "text-pink-400",    bg: "bg-pink-500/10 border-pink-500/20" },
  indigo:  { icon: "text-indigo-400",  bg: "bg-indigo-500/10 border-indigo-500/20" },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            We Speak{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Your Industry
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Deep domain expertise across the sectors where software creates the most value.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((ind) => {
            const c = colorMap[ind.color];
            return (
              <div
                key={ind.name}
                className="group bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${c.bg} ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                  <ind.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{ind.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Don't see your industry?{" "}
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
              Let's talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
