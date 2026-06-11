import React, { useState } from "react";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("learnshiz"); // "vendor" or "learnshiz"

  return (
    <section className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-800/50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            The Forward Deployed Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
            See the value addition difference when you choose our high-velocity, developer-first model over traditional vendors.
          </p>
        </div>

        {/* Mobile Toggle Switch */}
        <div className="flex lg:hidden justify-center mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-full p-1 flex relative w-[90%] max-w-sm">
            {/* Sliding background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full transition-transform duration-300 ease-in-out ${activeTab === "learnshiz" ? "translate-x-[calc(100%+0.5rem)] bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "translate-x-0 bg-slate-800"}`}
            ></div>
            
            <button 
              onClick={() => setActiveTab("vendor")}
              className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${activeTab === "vendor" ? "text-white" : "text-slate-400"}`}
            >
              Typical Vendor
            </button>
            <button 
              onClick={() => setActiveTab("learnshiz")}
              className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${activeTab === "learnshiz" ? "text-white" : "text-slate-400"}`}
            >
              LearnShiz
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Typical Vendor Card */}
          <div className={`flex-1 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-10 transition-transform duration-300 lg:hover:-translate-y-1 lg:flex flex-col ${activeTab === "vendor" ? "flex" : "hidden"}`}>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-300">Typical Vendor / Normal Developer</h3>
                <p className="text-sm text-slate-500 mt-1">Slow, opaque, and misaligned.</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-red-400 text-lg">✕</span></div>
                <div>
                  <div className="text-slate-200 font-semibold mb-1">2-4 Weeks Onboarding</div>
                  <div className="text-slate-500 text-sm leading-relaxed">Long delays waiting for sourcing, interviewing, and administrative overhead.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-red-400 text-lg">✕</span></div>
                <div>
                  <div className="text-slate-200 font-semibold mb-1">Average Market Pool</div>
                  <div className="text-slate-500 text-sm leading-relaxed">Unvetted talent lacking the product-mindset required for fast-paced startups.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-red-400 text-lg">✕</span></div>
                <div>
                  <div className="text-slate-200 font-semibold mb-1">40% - 60% Hidden Fees</div>
                  <div className="text-slate-500 text-sm leading-relaxed">Opaque pricing where the developer receives less than half of what you pay.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0"><span className="text-red-400 text-lg">✕</span></div>
                <div>
                  <div className="text-slate-200 font-semibold mb-1">High Turnover</div>
                  <div className="text-slate-500 text-sm leading-relaxed">Poor developer compensation leads to low morale and frequent project abandonment.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* LearnShiz Card */}
          <div className={`flex-1 bg-gradient-to-b from-blue-900/20 to-slate-900/40 border border-blue-500/30 rounded-3xl p-6 md:p-10 relative overflow-hidden transition-transform duration-300 lg:hover:-translate-y-2 shadow-[0_0_40px_rgba(37,99,235,0.1)] lg:flex flex-col ${activeTab === "learnshiz" ? "flex" : "hidden"}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            
            <div className="flex items-center gap-4 mb-8 border-b border-blue-900/30 pb-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Forward Deployed Engineer</h3>
                <p className="text-sm text-blue-300 mt-1">High-velocity, elite, and transparent.</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors"><span className="text-blue-400 text-sm">✓</span></div>
                <div>
                  <div className="text-white font-semibold mb-1">48 Hours (Zero Downtime)</div>
                  <div className="text-slate-400 text-sm leading-relaxed">Pre-vetted engineers ready to push code to production within days, not weeks.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors"><span className="text-blue-400 text-sm">✓</span></div>
                <div>
                  <div className="text-white font-semibold mb-1">Top 1% AI-Vetted Talent</div>
                  <div className="text-slate-400 text-sm leading-relaxed">Rigorous selection process guaranteeing elite product-builders and architects.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors"><span className="text-blue-400 text-sm">✓</span></div>
                <div>
                  <div className="text-white font-semibold mb-1">&lt; 15% Transparent Fee</div>
                  <div className="text-slate-400 text-sm leading-relaxed">Fair pricing. The developer takes home 85%+ of the client fee, guaranteeing motivation.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors"><span className="text-blue-400 text-sm">✓</span></div>
                <div>
                  <div className="text-white font-semibold mb-1">98% Long-term Stability</div>
                  <div className="text-slate-400 text-sm leading-relaxed">High payouts and great culture ensure your engineers stay committed for the long haul.</div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
