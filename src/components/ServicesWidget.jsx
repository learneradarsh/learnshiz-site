import React from "react";
import { Link } from "react-router-dom";

export default function ServicesWidget() {
  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              Our Expertise
            </h2>
            <p className="text-slate-400">Tailored engineering solutions for fast-moving companies.</p>
          </div>
          <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white shrink-0">
            View All Services &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">Forward Deployed Engineers</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Elite developers embedded directly into your internal teams to accelerate product delivery.
            </p>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">AI & Data Engineering</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Implement intelligent automation, LLMs, and robust data pipelines into your existing tech stack.
            </p>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">Technical Consulting</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Architecture reviews, tech-stack modernization, and scalability strategies from proven CTOs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
