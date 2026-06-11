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
    <section className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
            A streamlined, high-velocity onboarding process designed to eliminate friction and get code shipped faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)] relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.number}</span>
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
