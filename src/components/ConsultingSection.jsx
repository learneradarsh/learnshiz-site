import React from "react";

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3">Monthly Subscription</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Technical Consultant <br/> as a Service.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Not ready for a full-time hire but need high-level engineering leadership? Our technical consultants help you set up your team, refine your product architecture, and establish robust CI/CD pipelines on a predictable monthly subscription.
            </p>
            <ul className="space-y-4 mb-8">
              {["Architecture Review & System Design", "Team Setup & Hiring Processes", "Code Quality & DevOps Pipelines", "Product Roadmap Refinement"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 shadow-sm">Start Subscription</a>
          </div>
          
          <div className="relative">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                <div className="text-white font-bold text-xl">Consulting Plan</div>
                <div className="text-blue-400 font-semibold">Monthly</div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-slate-400">Team Setup Support</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-400">Architecture Reviews</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-400">Weekly Strategy Calls</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-slate-400">Direct Slack Access</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:text-blue-400 text-center block">Inquire Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
