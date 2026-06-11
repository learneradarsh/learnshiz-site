import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Forward Deployed Engineers",
      desc: "Engineers who embed directly into your operations, moving fast to deploy solutions, integrate systems, and solve immediate technical challenges on the front lines.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Product Development Engineers",
      desc: "Full-stack builders who take ownership of your product roadmap. From architecture to polished UI, they build scalable, production-ready applications.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Technical Consulting",
      desc: "Expert guidance to setup your engineering team, refine product architecture, and establish best practices.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "AI Engineers",
      desc: "Specialized talent in LLMs, prompt engineering, RAG pipelines, and deploying GenAI applications to production.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const devValues = [
    {
      title: "Day 1 Impact",
      desc: "No long ramp-up times. Our devs jump right into your codebase and start shipping features from the very first day.",
    },
    {
      title: "Extreme Ownership",
      desc: "We don't just clear Jira tickets; we take full ownership of the product lifecycle, from architecture to deployment.",
    },
    {
      title: "Elevated Code Quality",
      desc: "By enforcing clean code, rigorous testing, and robust CI/CD practices, we elevate the engineering standards of your entire team.",
    },
    {
      title: "Seamless Integration",
      desc: "We embed directly into your Slack, daily standups, and agile workflows, operating exactly like your own in-house employees.",
    }
  ];

  return (
    <section id="services" className="pt-32 pb-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Offerings</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dedicated expertise tailored to your product stage and delivery needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-700/50">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/50 pt-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-slate-950">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">The LearnShiz Advantage</span>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">What Our Devs Add to Your Team</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              When you hire from us, you're not just getting temporary hands on a keyboard. You are injecting high-velocity, senior engineering talent directly into your company's DNA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devValues.map((val, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-800 hover:border-blue-500 transition-colors duration-300">
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-blue-500"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-2">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
