import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "AI Pods (Dedicated GenAI Teams)",
      desc: "Turnkey, cross-functional AI squads (LLM engineers, prompt architects, and data engineers) dedicated to building, evaluating, and deploying enterprise RAG systems and AI agents to production.",
      icon: (
        <svg className="w-6 h-6 text-[#F8485E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Forward Deployed Engineers",
      desc: "Engineers who embed directly into your operations, moving fast to deploy solutions, integrate mission-critical systems, and solve immediate technical challenges on the front lines.",
      icon: (
        <svg className="w-6 h-6 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Product Development Engineers",
      desc: "Full-stack builders who take ownership of your product roadmap. From cloud architecture to polished UI, they build scalable, production-ready applications.",
      icon: (
        <svg className="w-6 h-6 text-[#F8485E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Technical Consulting",
      desc: "Expert guidance from battle-tested CTOs and architects to structure your engineering team, refine cloud architecture, and establish enterprise scalability.",
      icon: (
        <svg className="w-6 h-6 text-[#00B2A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    <section id="services" className="pt-32 pb-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Core Engineering Offerings
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">Enterprise Delivery Models</h2>
          <p className="text-slate-600 font-normal max-w-2xl mx-auto text-lg">
            Turnkey AI Pods and dedicated engineering squads tailored to your product roadmap and delivery requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((s, i) => (
            <div key={i} className="bg-[#F8F9FA] border border-slate-200 p-8 rounded-2xl hover:border-[#00B2A9] hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm border border-slate-200">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1622] mb-3">{s.title}</h3>
              <p className="text-slate-600 font-normal leading-relaxed text-sm flex-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white">
            <span className="text-[#F8485E] font-semibold tracking-wider uppercase text-xs border border-slate-200 bg-[#F8F9FA] px-4 py-1.5 rounded-full shadow-sm">The Learnshiz Advantage</span>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-[#0A1622] mb-4 tracking-tight">What Our Engineers Add to Your Team</h3>
            <p className="text-slate-600 font-normal max-w-2xl mx-auto text-base">
              When you partner with us, you're not just getting temporary hands on a keyboard. You are injecting high-velocity, senior engineering talent directly into your company's DNA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devValues.map((val, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-200 hover:border-[#00B2A9] transition-colors duration-300">
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#00B2A9] transition-colors shadow-sm"></div>
                <h4 className="text-lg font-bold text-[#0A1622] mb-2">{val.title}</h4>
                <p className="text-slate-600 font-normal text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
