import React, { useState } from "react";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("learnshiz"); // "vendor" or "learnshiz"

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA] relative border-t border-slate-200 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#00B2A9]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 sm:mb-6 tracking-tight">
            The Forward Deployed Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            See the value addition difference when you choose our high-velocity, developer-first model over traditional vendors.
          </p>
        </div>

        {/* Mobile Toggle Switch */}
        <div className="flex lg:hidden justify-center mb-8">
          <div className="bg-white border border-slate-200 rounded-full p-1 flex relative w-[90%] max-w-sm shadow-sm">
            {/* Sliding background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full transition-transform duration-300 ease-in-out ${activeTab === "learnshiz" ? "translate-x-[calc(100%+0.5rem)] bg-[#F8485E] shadow-sm" : "translate-x-0 bg-slate-200"}`}
            ></div>
            
            <button 
              onClick={() => setActiveTab("vendor")}
              className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${activeTab === "vendor" ? "text-[#0A1622]" : "text-slate-600"}`}
            >
              Typical Vendor
            </button>
            <button 
              onClick={() => setActiveTab("learnshiz")}
              className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${activeTab === "learnshiz" ? "text-white" : "text-slate-600"}`}
            >
              LearnShiz
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Typical Vendor Card */}
          <div className={`flex-1 bg-white border border-rose-200 rounded-3xl p-6 md:p-10 transition-transform duration-300 lg:hover:-translate-y-1 lg:flex flex-col shadow-sm ${activeTab === "vendor" ? "flex" : "hidden"}`}>
            <div className="flex items-center gap-4 mb-8 border-b border-rose-100 pb-6">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1622]">Typical Vendor / Normal Developer</h3>
                <p className="text-sm text-slate-500 mt-1">Slow, opaque, and misaligned.</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-rose-500 text-lg">✕</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">2-4 Weeks Onboarding</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Long delays waiting for sourcing, interviewing, and administrative overhead.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-rose-500 text-lg">✕</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">Average Market Pool</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Unvetted talent lacking the product-mindset required for fast-paced startups.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-rose-500 text-lg">✕</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">40% - 60% Hidden Fees</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Opaque pricing where the developer receives less than half of what you pay.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-rose-500 text-lg">✕</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">High Turnover</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Poor developer compensation leads to low morale and frequent project abandonment.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 -m-4 rounded-xl bg-rose-50 border border-rose-200 mt-2 relative">
                <div className="absolute -top-3 right-4 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-rose-500 uppercase tracking-wide">
                  Common Issue
                </div>
                <div className="mt-1 shrink-0"><span className="text-rose-500 text-lg">✕</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">Rigid Working Hours</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Limited 1-2 hour overlap windows that cause bottlenecks and delay feedback cycles.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* LearnShiz Card */}
          <div className={`flex-1 bg-white border border-[#00B2A9]/40 rounded-3xl p-6 md:p-10 relative overflow-hidden transition-transform duration-300 lg:hover:-translate-y-2 shadow-md lg:flex flex-col ${activeTab === "learnshiz" ? "flex" : "hidden"}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F8485E] to-[#00B2A9]"></div>
            
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6">
              <div className="w-12 h-12 rounded-full bg-[#00B2A9]/15 border border-[#00B2A9]/30 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1622]">Forward Deployed Engineer</h3>
                <p className="text-sm text-[#00B2A9] font-semibold mt-1">High-velocity, elite, and transparent.</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><span className="text-[#00B2A9] text-sm font-bold">✓</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">48 Hours (Zero Downtime)</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Pre-vetted engineers ready to push code to production within days, not weeks.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><span className="text-[#00B2A9] text-sm font-bold">✓</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">Top 1% AI-Vetted Talent</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Rigorous selection process guaranteeing elite product-builders and architects.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><span className="text-[#00B2A9] text-sm font-bold">✓</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">&lt; 15% Transparent Fee</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Fair pricing. The developer takes home 85%+ of the client fee, guaranteeing motivation.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/15 flex items-center justify-center"><span className="text-[#00B2A9] text-sm font-bold">✓</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">98% Long-term Stability</div>
                  <div className="text-slate-600 text-sm leading-relaxed">High payouts and great culture ensure your engineers stay committed for the long haul.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group p-4 -m-4 rounded-xl bg-[#F8F9FA] border border-[#00B2A9]/40 mt-2 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#F8485E] to-[#00B2A9] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-[#00B2A9] uppercase tracking-wide">
                  Game Changer
                </div>
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/25 flex items-center justify-center"><span className="text-[#00B2A9] text-sm font-bold">✓</span></div>
                <div>
                  <div className="text-[#0A1622] font-semibold mb-1">Complete Time Zone Alignment</div>
                  <div className="text-slate-600 text-sm leading-relaxed">Our remote engineers work fully in your exact time zone for seamless, real-time collaboration.</div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
