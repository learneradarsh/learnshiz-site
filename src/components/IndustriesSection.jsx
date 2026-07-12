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
  { name: "AI Startups",   Icon: HiMiniCpuChip,         desc: "LLM apps, AI agents, enterprise AI",     color: "blue" },
  { name: "SaaS",          Icon: HiCloud,                desc: "Scalable, multi-tenant platforms",        color: "sky" },
  { name: "Healthcare",    Icon: HiMiniHeart,            desc: "HIPAA-compliant health technology",       color: "cyan" },
  { name: "FinTech",       Icon: HiMiniCreditCard,       desc: "Payments, banking & compliance",          color: "blue" },
  { name: "Logistics",     Icon: HiMiniTruck,            desc: "Supply chain, fleet & tracking",          color: "slate" },
  { name: "HRTech",        Icon: HiMiniUserGroup,        desc: "Hiring, onboarding & workforce tools",    color: "sky" },
  { name: "EdTech",        Icon: HiMiniAcademicCap,      desc: "Learning platforms & LMS",                color: "cyan" },
  { name: "Retail",        Icon: HiMiniShoppingBag,      desc: "Commerce, inventory & POS",               color: "blue" },
  { name: "Enterprise",    Icon: HiMiniBuildingOffice2,  desc: "Digital transformation & modernization",  color: "slate" },
];

const colorMap = {
  blue:    { icon: "text-[#F8485E] font-bold",   bg: "bg-[#F8485E]/15 border-[#F8485E]/30" },
  sky:     { icon: "text-[#00B2A9] font-bold",    bg: "bg-[#00B2A9]/15 border-[#00B2A9]/30" },
  cyan:    { icon: "text-[#F8485E] font-bold",   bg: "bg-[#F8485E]/15 border-[#F8485E]/30" },
  slate:   { icon: "text-[#00B2A9] font-bold",  bg: "bg-[#00B2A9]/15 border-[#00B2A9]/30" },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">
            We Speak{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Your Industry
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Deep domain expertise across the sectors where software creates the most value.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((ind) => {
            const c = colorMap[ind.color];
            return (
              <div
                key={ind.name}
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#00B2A9] hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${c.bg} ${c.icon} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <ind.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0A1622] mb-1 group-hover:text-[#00B2A9] transition-colors">{ind.name}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Don't see your industry?{" "}
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="text-[#00B2A9] hover:underline font-semibold">
              Let's talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
