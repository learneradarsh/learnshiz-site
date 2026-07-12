import React from "react";
import {
  HiMiniCheckCircle,
  HiMiniArrowRight,
} from "react-icons/hi2";
import { getCurrentQuarter } from "../utils/scarcity";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const getPlans = (quarter) => [
  {
    name: "Builder",
    badge: null,
    scarcity: `⚡ 2 onboarding slots left for ${quarter}`,
    scarcityColor: "text-[#00B2A9] bg-[#00B2A9]/10 border-[#00B2A9]/30",
    tagline: "Perfect for MVPs",
    description: "Everything you need to launch your first production product.",
    color: "slate",
    features: [
      "Dedicated Full Stack Engineer",
      "Technical Lead Guidance",
      "Weekly Sprint Planning",
      "CI/CD Pipeline Setup",
      "Production Deployment & Hosting",
      "Daily Progress Updates",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth (AI & Product)",
    badge: "Most Popular",
    scarcity: "🔥 1 squad slot remaining",
    scarcityColor: "text-[#F8485E] bg-[#F8485E]/15 border-[#F8485E]/30",
    tagline: "Ideal for Seed & Series A",
    description: "A complete engineering squad & AI capability to scale fast.",
    color: "blue",
    features: [
      "2–4 Dedicated Product Engineers",
      "AI Pod Support (LLM & RAG Pipelines)",
      "QA & DevOps Automation",
      "Dedicated Engineering Manager",
      "Strategic Roadmap Planning",
      "Production Performance Monitoring",
    ],
    cta: "Book a Discovery Call",
  },
  {
    name: "Scale (Enterprise Pods)",
    badge: null,
    scarcity: "📋 Waitlist / By Inquiry",
    scarcityColor: "text-[#00B2A9] bg-[#00B2A9]/10 border-[#00B2A9]/30",
    tagline: "Your Engineering Org",
    description: "A complete engineering organization built around your vision.",
    color: "indigo",
    features: [
      "Full Frontend & Backend Teams",
      "Dedicated AI Pod (GenAI & Data Engineers)",
      "DevOps, SRE & QA Infrastructure",
      "Principal Technical Architect",
      "Dedicated Delivery Manager",
      "Custom SLA & Enterprise Security",
    ],
    cta: "Contact Us",
  },
];

const colorConfig = {
  slate: {
    border: "border-slate-200",
    bg: "bg-white",
    accent: "text-slate-700 font-bold",
    check: "text-[#00B2A9]",
    checkBg: "bg-[#00B2A9]/15",
    btnBg: "bg-white hover:bg-slate-50 text-[#0A1622] border border-slate-300 hover:border-[#00B2A9] shadow-sm",
    glow: "shadow-sm hover:shadow-md",
  },
  blue: {
    border: "border-[#F8485E]/40",
    bg: "bg-gradient-to-b from-white to-slate-50",
    accent: "text-[#F8485E] font-bold",
    check: "text-[#F8485E]",
    checkBg: "bg-[#F8485E]/15",
    btnBg: "bg-[#F8485E] hover:bg-[#E8236E] text-white shadow-lg shadow-[#F8485E]/25",
    glow: "shadow-xl shadow-[#0A1622]/5",
    topBorder: true,
  },
  indigo: {
    border: "border-slate-200",
    bg: "bg-white",
    accent: "text-slate-700 font-bold",
    check: "text-[#00B2A9]",
    checkBg: "bg-[#00B2A9]/15",
    btnBg: "bg-white hover:bg-slate-50 text-[#0A1622] border border-slate-300 hover:border-[#00B2A9] shadow-sm",
    glow: "shadow-sm hover:shadow-md",
  },
};

export default function EngineeringPlans() {
  const quarter = getCurrentQuarter();
  const plans = getPlans(quarter);

  return (
    <section id="engineering-subscription" className="py-20 md:py-32 bg-[#F8F9FA] border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F8485E]/5 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
            Engineering Subscription & Turnkey Pods
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">
            One Subscription.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Complete Engineering Team.
            </span>
          </h2>
          <p className="text-slate-600 font-normal max-w-xl mx-auto text-base">
            Subscribe to a complete engineering capability—including dedicated AI Pods. Predictable monthly pricing. No surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {plans.map((plan) => {
            const c = colorConfig[plan.color];
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${c.border} ${c.bg} ${c.glow} p-7 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.color === "blue" ? "lg:-translate-y-4 lg:scale-105" : ""
                }`}
              >
                {plan.color === "blue" && (
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#F8485E] to-[#00B2A9]" />
                )}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap bg-[#F8485E] text-white shadow-lg shadow-[#F8485E]/25 border border-[#F8485E]/40">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-[#0A1622]">{plan.name}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${plan.scarcityColor}`}>
                      {plan.scarcity}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold mb-2 ${c.accent}`}>{plan.tagline}</p>
                  <p className="text-sm text-slate-600 font-normal">{plan.description}</p>
                </div>

                <div className="h-px bg-slate-200 mb-5" />

                <ul className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full ${c.checkBg} flex items-center justify-center shrink-0`}>
                        <HiMiniCheckCircle className={`w-3.5 h-3.5 ${c.check}`} />
                      </div>
                      <span className="text-sm text-slate-600 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${c.btnBg}`}
                >
                  {plan.cta}
                  <HiMiniArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-600 font-normal text-sm mt-10">
          All plans include dedicated engineers, sprint planning, and continuous delivery.{" "}
          <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="text-[#00B2A9] hover:underline font-medium underline underline-offset-4">
            Need a custom plan or standalone AI Pod? →
          </a>
        </p>
      </div>
    </section>
  );
}
