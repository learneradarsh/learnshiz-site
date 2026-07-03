import React from "react";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const plans = [
  {
    name: "Builder",
    badge: null,
    tagline: "Perfect for MVPs",
    description: "Everything you need to build and ship your first product.",
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
    tagline: "Ideal for Seed & Series A",
    description: "A full engineering team to accelerate product growth.",
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
    tagline: "Your Dedicated Engineering Org",
    description: "A complete engineering organization built around your product.",
    color: "indigo",
    features: [
      "Frontend Team",
      "Backend Team",
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
    badge: "",
    badgeBg: "",
    accent: "text-slate-300",
    check: "text-slate-400",
    checkBg: "bg-slate-800",
    btnBg: "bg-slate-800 hover:bg-slate-700 text-white",
    glow: "",
  },
  blue: {
    border: "border-blue-500/50",
    bg: "bg-gradient-to-b from-blue-950/40 to-slate-900/60",
    badge: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    badgeBg: "bg-blue-600",
    accent: "text-blue-300",
    check: "text-blue-400",
    checkBg: "bg-blue-500/20",
    btnBg: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30",
    glow: "shadow-[0_0_60px_rgba(37,99,235,0.15)]",
    topBorder: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  indigo: {
    border: "border-indigo-700/40",
    bg: "bg-gradient-to-b from-indigo-950/30 to-slate-900/50",
    badge: "",
    badgeBg: "",
    accent: "text-indigo-300",
    check: "text-indigo-400",
    checkBg: "bg-indigo-500/20",
    btnBg: "bg-slate-800 hover:bg-slate-700 text-white",
    glow: "",
  },
};

export default function EngineeringPlans() {
  return (
    <section id="engineering-subscription" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      {/* BG accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Engineering Subscription
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            One Subscription.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Complete Engineering Team.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Instead of hiring individual developers, subscribe to a complete engineering capability.
            Predictable monthly pricing. No surprises.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-14">
          {plans.map((plan) => {
            const c = colorConfig[plan.color];
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${c.border} ${c.bg} ${c.glow} p-7 md:p-9 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                  plan.color === "blue" ? "lg:-translate-y-4 lg:scale-105" : ""
                }`}
              >
                {plan.color === "blue" && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl bg-gradient-to-r from-blue-400 to-indigo-500" />
                )}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap ${c.badge}`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className={`text-sm font-semibold mb-3 ${c.accent}`}>{plan.tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </div>

                <div className="h-px bg-slate-800/60 mb-6" />

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full ${c.checkBg} flex items-center justify-center shrink-0`}>
                        <svg className={`w-3 h-3 ${c.check}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${c.btnBg}`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          All plans include dedicated engineers, sprint planning, and continuous delivery.{" "}
          <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
            Talk to us about custom plans →
          </a>
        </p>
      </div>
    </section>
  );
}
