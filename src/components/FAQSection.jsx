import React, { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

const faqs = [
  {
    q: "What exactly is Engineering-as-a-Service (EaaS)?",
    a: "EaaS is a subscription model where you get a complete dedicated engineering team — engineers, DevOps, QA, AI specialists, and tech leadership — under one flat monthly fee. No hiring, no management overhead.",
  },
  {
    q: "How is this different from outsourcing?",
    a: "Outsourcing gives you anonymous developers. We give you a dedicated team embedded in your product, working in your time zone, attending your standups, and thinking like founders — not contractors.",
  },
  {
    q: "What happens if an engineer doesn't work out?",
    a: "We offer an unconditional 2-Week Free Replacement Guarantee. If an engineer isn't the perfect technical or cultural fit for your squad, we replace them within 10 business days at zero cost and zero billing disruption.",
  },
  {
    q: "How do you handle IP and code ownership?",
    a: "You own 100% of your intellectual property and codebase from line one. We execute comprehensive legal NDAs and IP assignment agreements before any onboarding. Our framework is designed specifically to pass strict technical and legal due diligence for VC-backed startups.",
  },
  {
    q: "What if we need to pause or cancel our subscription?",
    a: "We operate on flexible monthly rolling contracts with zero multi-year vendor lock-in. If your product roadmap changes or you need to pause engineering velocity, you can scale down or cancel with a simple 30-day notice.",
  },
  {
    q: "How fast can the team start?",
    a: "After your Discovery Call and a brief Technical Assessment, your team is operational in 1–2 weeks. Sprint planning starts in week one.",
  },
  {
    q: "Which plan is right for me?",
    a: "Builder if you're validating an MVP. Growth for Seed/Series A startups needing a full squad. Scale for companies wanting a complete engineering organization with architects and delivery management.",
  },
  {
    q: "Are engineers dedicated exclusively to my product?",
    a: "Yes. In every plan, your engineers focus solely on your product — no context-switching, no split time across clients.",
  },
  {
    q: "What does AI Native mean in practice?",
    a: "Every engineer uses AI-powered tools for code generation, testing, and review — enabling 3–4× delivery velocity without compromising quality.",
  },
  {
    q: "Can I scale the team up or down?",
    a: "Yes, monthly. Moving from Builder to Growth or adding specialists takes days, not months.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1622] mb-3 tracking-tight">
            Got Questions?
          </h2>
          <p className="text-slate-600 text-sm">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                openIdx === i
                  ? "border-[#00B2A9]/40 bg-[#00B2A9]/5"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                id={`faq-${i}`}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`font-semibold text-sm pr-2 ${openIdx === i ? "text-[#0A1622]" : "text-slate-700"}`}>
                  {faq.q}
                </span>
                <HiMiniChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180 text-[#00B2A9]" : "text-slate-400"}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-600 text-sm mb-2">Still have questions?</p>
          <a
            href="https://cal.com/learnshiz-techies-ll1gn1/30min"
            target="_blank"
            rel="noreferrer"
            className="text-[#00B2A9] hover:underline font-semibold text-sm transition-colors"
          >
            Book a 30-Min Call with Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}
