import React from "react";

export default function TrustAndSecurity() {
  const features = [
    {
      title: "100% IP Ownership",
      desc: "You retain full intellectual property rights to all code written. Strong, legally binding NDA and IP assignment agreements come standard.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Our environments and operational workflows are designed to meet strict data privacy and enterprise security requirements from day one.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Rigorous Background Checks",
      desc: "Every Forward Deployed Engineer undergoes extensive background, reference, and identity verification before writing a single line of code.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-slate-900/50 rounded-[100%] blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Enterprise Ready</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Built on Trust & Security
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We understand that your codebase is your most valuable asset. Our legal and security frameworks are designed to protect you completely.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 border border-slate-700/50 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
