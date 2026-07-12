import React from "react";
import { HiMiniShieldCheck, HiMiniLockClosed, HiMiniDocumentText, HiMiniUserCheck, HiMiniCheckBadge } from "react-icons/hi2";

export default function TrustAndSecurity() {
  const features = [
    {
      title: "100% IP Ownership",
      desc: "You retain full intellectual property rights to all code written from line one. Strong, legally binding NDA and IP assignment agreements come standard.",
      icon: <HiMiniShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "NDA-First Engagement",
      desc: "We execute comprehensive non-disclosure agreements before reviewing a single line of your architecture or discussing your product roadmap.",
      icon: <HiMiniDocumentText className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Our environments and operational workflows are engineered with zero-trust principles to meet strict enterprise data privacy requirements.",
      icon: <HiMiniLockClosed className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Rigorous Background Checks",
      desc: "Every dedicated engineer undergoes extensive background, reference, and technical verification before writing code for your product.",
      icon: <HiMiniUserCheck className="w-6 h-6 text-purple-400" />
    }
  ];

  const complianceBadges = [
    {
      name: "SOC 2 Type II Ready",
      desc: "Audited operational controls & access logging",
      color: "border-blue-500/30 bg-blue-950/20 text-blue-400"
    },
    {
      name: "ISO 27001 Certified Processes",
      desc: "Enterprise information security management",
      color: "border-emerald-500/30 bg-emerald-950/20 text-emerald-400"
    },
    {
      name: "GDPR Compliant",
      desc: "Strict EU data privacy & zero retention",
      color: "border-purple-500/30 bg-purple-950/20 text-purple-400"
    },
    {
      name: "HIPAA-Ready Workflows",
      desc: "Protected PHI handling for Healthcare & FinTech",
      color: "border-amber-500/30 bg-amber-950/20 text-amber-400"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FA] relative border-t border-slate-200 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#00B2A9]/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#00B2A9] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 flex items-center justify-center gap-1.5">
            <HiMiniCheckBadge className="w-4 h-4" />
            Enterprise Ready & Verified
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">
            Built on Trust, Security & Compliance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            We understand that your codebase is your most valuable asset. Our legal, operational, and compliance frameworks are designed to protect you completely.
          </p>
        </div>

        {/* Compliance Badges Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {complianceBadges.map((badge, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-4 text-center transition-all hover:scale-[1.02] bg-white border-slate-200 shadow-sm`}
            >
              <div className="font-extrabold text-sm text-[#0A1622] mb-1">{badge.name}</div>
              <div className="text-[11px] text-slate-600 font-medium leading-tight">{badge.desc}</div>
            </div>
          ))}
        </div>

        {/* 4-Card Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] flex items-center justify-center mb-5 border border-slate-200 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A1622] mb-2.5">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
