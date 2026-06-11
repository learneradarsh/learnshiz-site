import React from "react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Vetted Top 1% Talent",
      desc: "Our rigorous AI-assisted vetting process ensures you only work with elite engineers who have a proven track record of shipping production-ready code.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Speed to Execution",
      desc: "We completely eliminate sourcing and interview delays. Our Forward Deployed Engineers are ready to integrate into your operations within 48 hours.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Aligned Incentives",
      desc: "By giving developers 85%+ of the fee, we retain the absolute best. You get a highly motivated engineer who operates like an internal team member.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Choose LearnShiz?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-2">
            Since 2015, we've partnered with innovative companies globally, offering unparalleled speed, quality, and transparency in engineering staffing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
