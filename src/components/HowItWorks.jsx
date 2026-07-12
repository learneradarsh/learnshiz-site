import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Alignment",
      desc: "We dive deep into your tech stack, product roadmap, and team culture to understand exactly what kind of engineering talent you need.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "48-Hour Matching",
      desc: "Within 48 hours, we match you with a pre-vetted Top 1% Forward Deployed Engineer from our exclusive global network.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Embed & Build",
      desc: "The engineer integrates directly into your Jira, GitHub, and Slack, operating exactly like an internal team member to accelerate delivery.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00B2A9] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 sm:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            A streamlined, high-velocity onboarding process designed to eliminate friction and get code shipped faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#F8F9FA] border-4 border-white flex items-center justify-center mb-6 shadow-md relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F8485E] border-2 border-white flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">{step.number}</span>
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1622] mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
