import React from 'react';

export default function AIPipelineAnimation() {
  const stages = [
    {
      title: "Architecture & Design",
      desc: "AI helps draft scalable blueprints in hours, not weeks.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "AI-Assisted Coding",
      desc: "Code generated and reviewed by AI agents to accelerate development.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Automated QA & Security",
      desc: "Continuous testing and vulnerability scanning at pipeline speed.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Product Delivered",
      desc: "Production-ready deployment in 1/4th the standard time.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative border-t border-slate-200 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00B2A9]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F8485E]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00B2A9] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Speed & Quality</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-6 tracking-tight">
            The AI-Enabled <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">Assembly Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            By integrating AI at every layer of the development lifecycle, we deliver production-ready software <strong className="text-[#0A1622]">4x faster</strong> than traditional consultancies—without compromising on quality.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#00B2A9] to-transparent animate-[flow_2.5s_linear_infinite]"></div>
          </div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-[1.75rem] sm:left-[2.25rem] w-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#00B2A9] to-transparent animate-[flow-mobile_2.5s_linear_infinite]"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex md:flex-col items-start md:items-center gap-6 md:gap-6 flex-1 relative group">
                
                {/* Node icon */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 relative group-hover:border-[#00B2A9] group-hover:scale-110 transition-all duration-300 shadow-sm overflow-hidden">
                   <div className="absolute inset-0 bg-[#00B2A9]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative z-10 scale-110 group-hover:scale-125 transition-transform duration-300">
                     {stage.icon}
                   </div>
                </div>

                {/* Content */}
                <div className="md:text-center pt-1 md:pt-0">
                  <div className="inline-flex items-center justify-center bg-white text-[#00B2A9] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-slate-200 shadow-sm">
                    Stage 0{idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1622] mb-2">{stage.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {stage.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
