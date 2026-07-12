import React from "react";

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#00B2A9] font-semibold tracking-wider uppercase text-sm mb-3">Monthly Subscription</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1622] mb-6 leading-tight">
              Technical Consultant <br/> as a Service.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Not ready for a full-time hire but need high-level engineering leadership? Our technical consultants help you set up your team, refine your product architecture, and establish robust CI/CD pipelines on a predictable monthly subscription.
            </p>
            <ul className="space-y-4 mb-8">
              {["Architecture Review & System Design", "Team Setup & Hiring Processes", "Code Quality & DevOps Pipelines", "Product Roadmap Refinement"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F8485E] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#E8236E] shadow-lg shadow-[#F8485E]/25">Start Subscription</a>
          </div>
          
          <div className="relative">
            <div className="bg-[#F8F9FA] border border-slate-200 p-8 rounded-2xl relative shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <div className="text-[#0A1622] font-bold text-xl">Consulting Plan</div>
                <div className="text-[#00B2A9] font-semibold">Monthly</div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-slate-600">Team Setup Support</div>
                  <div className="w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><svg className="w-4 h-4 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-600">Architecture Reviews</div>
                  <div className="w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><svg className="w-4 h-4 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-600">Weekly Strategy Calls</div>
                  <div className="w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><svg className="w-4 h-4 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-600">Direct Slack Access</div>
                  <div className="w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><svg className="w-4 h-4 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-[#0A1622] transition-all hover:bg-slate-100 hover:text-[#00B2A9] text-center block shadow-sm">Inquire Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
