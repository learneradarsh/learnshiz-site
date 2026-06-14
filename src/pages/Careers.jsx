import React from "react";
import SEO from "../components/SEO";
import { FiPhoneCall, FiCode, FiCheckCircle, FiGlobe, FiBook, FiCoffee, FiTrendingUp, FiShield, FiUsers } from "react-icons/fi";

const DEV_FORM_URL = "https://forms.gle/dxaLoQkrhn7JcDiX8";

export default function Careers() {
  const steps = [
    {
      title: "15 Min HR Discussion",
      desc: "A quick alignment call to understand your career goals, cultural fit, and basic expectations.",
      icon: <FiPhoneCall className="w-6 h-6 text-blue-400" />
    },
    {
      title: "30-45 Min Screening",
      desc: "A technical deep dive to evaluate your problem-solving skills and domain expertise.",
      icon: <FiCode className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Final Confirmation",
      desc: "You receive the final email confirmation and your official onboarding begins.",
      icon: <FiCheckCircle className="w-6 h-6 text-emerald-400" />
    }
  ];

  const perks = [
    { text: "100% Remote Work", icon: <FiGlobe /> },
    { text: "Udemy Subscriptions", icon: <FiBook /> },
    { text: "Flexible Leaves", icon: <FiCoffee /> },
    { text: "Global Exposure", icon: <FiTrendingUp /> },
    { text: "Medical Insurance", icon: <FiShield /> },
    { text: "Top 1% Network", icon: <FiUsers /> }
  ];

  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <SEO 
        title="Join Our Elite Engineering Community | LearnShiz Careers" 
        description="Join the top 1% of global developers. Get access to remote work, Udemy subscriptions, premium healthcare, and exciting AI projects." 
      />

      {/* Motivational Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Careers at LearnShiz</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop fixing legacy bugs. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Start building the future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            We are looking for elite engineers, visionary architects, and AI pioneers. When you join us, you don't just get a job—you get extreme ownership over high-impact products, working alongside the top 1% of global talent.
          </p>
          <a 
            href={DEV_FORM_URL} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Apply to Join Our Network
          </a>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Build With Us?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="glass-dark p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-slate-800">
                <div className="text-3xl">{perk.icon}</div>
                <div className="text-slate-200 font-semibold text-sm md:text-base">{perk.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800/50 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Hiring Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Fast, transparent, and respectful of your time. No endless rounds of interviews or take-home assignments.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-800 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center mb-6 shadow-xl relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">0{idx + 1}</span>
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
