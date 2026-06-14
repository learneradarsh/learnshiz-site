import React from "react";
import HowItWorks from "../components/HowItWorks";
import SEO from "../components/SEO";

export default function HowItWorksPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24">
      <SEO 
        title="How It Works - Engagement Models | LearnShiz" 
        description="Learn about our two engagement models: Developer Handoff and Managed Delivery, and see our streamlined onboarding process." 
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Flexible Partnership</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Partnering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">LearnShiz</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Choose the engagement model that best fits your operational style and technical needs. Whether you want to drive the project or let us manage the delivery, we integrate seamlessly.
          </p>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-12 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Two Engagement Models</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tailored solutions depending on your internal management bandwidth and project complexity.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Model 1: Staff Augmentation */}
            <div className="glass-dark rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Developer Handoff</h3>
              <div className="text-blue-400 text-sm font-semibold mb-6 tracking-wide uppercase">Staff Augmentation</div>
              <p className="text-slate-400 leading-relaxed mb-8">
                You take our vetted developers and integrate them directly into your workflow. You drive the project management, daily standups, and task delegation from your side.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-300">Direct integration into your Jira & Slack</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-300">You manage daily standups and sprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-300">Ideal for teams with existing technical leadership</span>
                </li>
              </ul>
            </div>

            {/* Model 2: Managed Delivery */}
            <div className="glass-dark rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 shadow-xl border-slate-700/80">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Managed Delivery</h3>
              <div className="text-purple-400 text-sm font-semibold mb-6 tracking-wide uppercase">Technical Consulting</div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our Technical Consultant acts as your dedicated partner. They manage the engineers, handle daily standups, frame the work, and ensure scheduled deliveries so you don't have to worry about the daily hassle.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-300">Dedicated Technical Consultant leading the team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-300">We handle agile processes and delivery schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-300">Ideal for founders focused on business growth</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded How It Works Timeline Component */}
      <div className="pb-12">
        <HowItWorks />
      </div>

    </main>
  );
}
