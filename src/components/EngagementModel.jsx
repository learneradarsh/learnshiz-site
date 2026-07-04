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
    <section id="engagement-model" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            From Discovery to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Continuous Delivery
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Operational in 1–2 weeks. Delivering weekly after that.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex items-start gap-4 bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 hover:border-slate-700 transition-colors group"
            >
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                  <step.Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
          >
            Start with Step 1 — Book a Discovery Call
            <HiMiniArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
