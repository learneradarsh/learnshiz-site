import React, { useState } from "react";

const faqs = [
  {
    q: "What is Engineering-as-a-Service (EaaS)?",
    a: "EaaS is a subscription model where you get a complete, dedicated engineering team — software engineers, cloud architects, AI engineers, DevOps, QA, and technical leadership — all under one predictable monthly fee. Instead of hiring, managing, and retaining individual developers, you subscribe to a full engineering capability.",
  },
  {
    q: "How is Learnshiz Engineering different from outsourcing?",
    a: "Traditional outsourcing gives you anonymous developers executing tasks. We provide a dedicated team that deeply understands your product, works in your time zone, participates in planning, and thinks like founders. Our engineers stay long-term and become a true extension of your company.",
  },
  {
    q: "How quickly can the team start?",
    a: "After an initial Discovery Call and Technical Assessment, your engineering team can be operational within 1–2 weeks. Sprint planning typically begins in the first week, and development starts immediately after.",
  },
  {
    q: "Which plan should I choose?",
    a: "Builder is perfect if you're validating an MVP. Growth is ideal for Seed or Series A startups that need a full team with QA and DevOps. Scale is for companies that want an entire dedicated engineering organization including AI engineers, architects, and a delivery manager.",
  },
  {
    q: "Do engineers work exclusively on my product?",
    a: "Yes. In all plans, your engineers are dedicated to your product. They don't split time across multiple clients. This ensures deep context, faster velocity, and better product outcomes.",
  },
  {
    q: "What does 'AI Native' mean?",
    a: "Every engineer on our team uses AI-powered development tools — from code generation to automated testing to intelligent code review. This lets us deliver 3–4× faster than traditional development without sacrificing quality.",
  },
  {
    q: "Can I scale the team up or down?",
    a: "Yes. You can adjust your plan monthly based on your product needs. Moving from Builder to Growth or adding specialists is seamless — no hiring cycles, no delays.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience in AI Startups, SaaS, FinTech, HealthTech, EdTech, Logistics, HRTech, and Enterprise platforms. Our Forward Deployment Engineers learn your domain quickly and build with industry-specific context.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Got Questions?
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Everything you need to know about working with Learnshiz Engineering.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-blue-500/40 bg-blue-950/10"
                  : "border-slate-800/70 bg-slate-900/30 hover:border-slate-700"
              }`}
            >
              <button
                id={`faq-${i}`}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`font-semibold text-sm sm:text-base pr-4 ${openIdx === i ? "text-white" : "text-slate-200"}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180 text-blue-400" : "text-slate-500"
                  }`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6">
          <p className="text-slate-400 mb-3 text-sm">Still have questions?</p>
          <a
            href="https://wa.me/919591967760"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
          >
            Chat with our team on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
