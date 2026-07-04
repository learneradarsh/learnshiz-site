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
    scarcityColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    tagline: "Perfect for MVPs",
    description: "Everything you need to launch your first product.",
    color: "slate",
    features: [
      "Full Stack Engineer",
      "Technical Lead",
      "Weekly Sprint Planning",
      "CI/CD Setup",
      "Production Deployment",
      "Daily Progress Updates",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    scarcity: "🔥 1 squad slot remaining",
    scarcityColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    tagline: "Ideal for Seed & Series A",
    description: "A full engineering squad to scale your product fast.",
    color: "blue",
    features: [
      "2–4 Engineers",
      "QA Engineer",
      "DevOps Engineer",
      "Engineering Manager",
      "Product Planning",
      "Performance Monitoring",
    ],
    cta: "Book a Discovery Call",
  },
  {
    name: "Scale",
    badge: null,
    scarcity: "📋 Waitlist / By Inquiry",
    scarcityColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    tagline: "Your Engineering Org",
    description: "A complete engineering organization built for your product.",
    color: "indigo",
    features: [
      "Frontend & Backend Teams",
      "AI Engineers",
      "DevOps & QA Automation",
      "Technical Architect",
      "Delivery Manager",
      "Dedicated Product Team",
    ],
    cta: "Contact Us",
  },
];

const colorConfig = {
  slate: {
    border: "border-slate-700/80",
    bg: "bg-slate-900/50",
    accent: "text-slate-400",
    check: "text-slate-400",
    checkBg: "bg-slate-800/80",
    btnBg: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    glow: "",
  },
  blue: {
    border: "border-blue-500/50",
    bg: "bg-gradient-to-b from-blue-950/40 to-slate-900/60",
    accent: "text-blue-300",
    check: "text-blue-400",
    checkBg: "bg-blue-500/15",
    btnBg: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30",
    glow: "shadow-[0_0_60px_rgba(37,99,235,0.15)]",
    topBorder: true,
  },
  indigo: {
    border: "border-indigo-700/40",
    bg: "bg-gradient-to-b from-indigo-950/20 to-slate-900/50",
    accent: "text-indigo-300",
    check: "text-indigo-400",
    checkBg: "bg-indigo-500/15",
    btnBg: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    glow: "",
  },
};

export default function EngineeringPlans() {
  const quarter = getCurrentQuarter();
  const plans = getPlans(quarter);

  return (
    <section id="engineering-subscription" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Engineering Subscription
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            One Subscription.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Complete Engineering Team.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Subscribe to a complete engineering capability. Predictable monthly pricing. No surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {plans.map((plan) => {
            const c = colorConfig[plan.color];
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${c.border} ${c.bg} ${c.glow} p-7 md:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                  plan.color === "blue" ? "lg:-translate-y-4 lg:scale-105" : ""
                }`}
              >
                {plan.color === "blue" && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl bg-gradient-to-r from-blue-400 to-indigo-500" />
                )}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${plan.scarcityColor}`}>
                      {plan.scarcity}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold mb-2 ${c.accent}`}>{plan.tagline}</p>
                  <p className="text-sm text-slate-500">{plan.description}</p>
                </div>

                <div className="h-px bg-slate-800/60 mb-5" />

                <ul className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full ${c.checkBg} flex items-center justify-center shrink-0`}>
                        <HiMiniCheckCircle className={`w-3.5 h-3.5 ${c.check}`} />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
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

        <p className="text-center text-slate-500 text-sm mt-10">
          All plans include dedicated engineers, sprint planning, and continuous delivery.{" "}
          <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
            Need a custom plan? →
          </a>
        </p>
      </div>
    </section>
  );
}
