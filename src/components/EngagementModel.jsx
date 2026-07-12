import React from "react";
import {
  HiMiniPhone,
  HiMiniMagnifyingGlass,
  HiMiniDocumentText,
  HiMiniUserGroup,
  HiMiniCalendarDays,
  HiMiniCodeBracket,
  HiMiniRocketLaunch,
  HiMiniArrowTrendingUp,
  HiMiniArrowRight,
} from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const steps = [
  { Icon: HiMiniPhone,           title: "Book Discovery Call",  desc: "Tell us about your product and goals." },
  { Icon: HiMiniMagnifyingGlass, title: "Technical Assessment", desc: "We analyse your stack and identify gaps." },
  { Icon: HiMiniDocumentText,    title: "Solution Proposal",    desc: "Receive a tailored team structure and plan." },
  { Icon: HiMiniUserGroup,       title: "Meet Your Team",       desc: "Get introduced to your dedicated engineers." },
  { Icon: HiMiniCalendarDays,    title: "Sprint Planning",      desc: "Kick off your first sprint with clear goals." },
  { Icon: HiMiniCodeBracket,     title: "Development Begins",   desc: "Engineers ship with full context and velocity." },
  { Icon: HiMiniRocketLaunch,    title: "Weekly Releases",      desc: "Continuous delivery, every single week." },
  { Icon: HiMiniArrowTrendingUp, title: "Continuous Scaling",   desc: "We scale team and capabilities as you grow." },
];

export default function EngagementModel() {
  return (
    <section id="engagement-model" className="py-20 md:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">
            From Discovery to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Continuous Delivery
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Operational in 1–2 weeks. Delivering weekly after that.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex items-start gap-4 bg-[#F8F9FA] border border-slate-200 rounded-2xl p-5 hover:border-[#00B2A9] hover:bg-white transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#00B2A9] transition-colors">
                  <step.Icon className="w-4 h-4 text-slate-700 group-hover:text-[#00B2A9] transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#0A1622] text-sm mb-1 group-hover:text-[#00B2A9] transition-colors">{step.title}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#F8485E]/25 text-sm"
          >
            Start with Step 1 — Book a Discovery Call
            <HiMiniArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
