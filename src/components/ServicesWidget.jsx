import React from "react";
import { Link } from "react-router-dom";

export default function ServicesWidget() {
  return (
    <section className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 shadow-sm">
              Our Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1622] mb-2 tracking-tight">
              Enterprise Engineering Capabilities
            </h2>
            <p className="text-slate-600 font-normal text-base">Tailored engineering solutions and turnkey squads for fast-moving companies.</p>
          </div>
          <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-[#F8F9FA] px-6 py-3 text-sm font-semibold text-[#0A1622] transition-all hover:bg-[#F8485E] hover:border-[#F8485E] hover:text-white shrink-0 shadow-sm">
            View All Services &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 md:p-7 hover:-translate-y-1 hover:border-[#00B2A9] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#F8485E]/15 flex items-center justify-center mb-6 border border-[#F8485E]/30 shadow-sm">
              <svg className="w-6 h-6 text-[#F8485E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A1622] mb-3">AI Pods (GenAI & LLM Teams)</h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed flex-1">
              Turnkey, cross-functional AI squads (LLM devs, prompt specialists, and data engineers) dedicated to deploying custom RAG pipelines and AI agents to production.
            </p>
          </div>
          
          <div className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 md:p-7 hover:-translate-y-1 hover:border-[#00B2A9] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#00B2A9]/15 flex items-center justify-center mb-6 border border-[#00B2A9]/30 shadow-sm">
              <svg className="w-6 h-6 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A1622] mb-3">Forward Deployed Engineers</h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed flex-1">
              Elite senior developers embedded directly into your internal teams to accelerate roadmap execution and resolve mission-critical technical bottlenecks.
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 md:p-7 hover:-translate-y-1 hover:border-[#00B2A9] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#F8485E]/15 flex items-center justify-center mb-6 border border-[#F8485E]/30 shadow-sm">
              <svg className="w-6 h-6 text-[#F8485E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A1622] mb-3">Core Product Engineering</h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed flex-1">
              Full-stack builders who take complete ownership of your product lifecycle—from scalable cloud architecture to high-performance web and mobile interfaces.
            </p>
          </div>
          
          <div className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 md:p-7 hover:-translate-y-1 hover:border-[#00B2A9] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#00B2A9]/15 flex items-center justify-center mb-6 border border-[#00B2A9]/30 shadow-sm">
              <svg className="w-6 h-6 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A1622] mb-3">Technical Consulting</h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed flex-1">
              Comprehensive architecture reviews, tech-stack modernization, and scalability strategies guided by battle-tested CTOs and engineering leaders.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
