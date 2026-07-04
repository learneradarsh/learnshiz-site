import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function OurAim() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-20">
      <SEO 
        title="Our Mission & The LearnShiz Difference" 
        description="We don't just write code; we solve complex problems. Discover how LearnShiz is building the world's largest elite engineering community for the AI era." 
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen absolute top-0 left-[-10%]"></div>
          <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen absolute bottom-0 right-[-10%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 shadow-sm">
            <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">The LearnShiz Difference</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Building the world's most <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">elite engineering community.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            In the upcoming era of AI and unprecedented technological scale, we are on a mission to ensure that SMEs, D2Cs, startups, and massive enterprises get access to the absolute best developers exactly when they need them.
          </p>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-16 relative z-10 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We don't just write code. We solve complex problems.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                The traditional outsourcing model is broken. Vendors provide "ticket-takers" who lack product vision, require constant micromanagement, and ultimately drain resources. 
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                At LearnShiz, our vetted engineers and AI specialists operate as true partners. We embed deeply into your culture, understand your business model, and actively architect solutions that add measurable value to your bottom line.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><span className="text-emerald-400 text-sm">✓</span></div>
                  <div className="text-slate-300 font-medium">True Product Ownership</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><span className="text-emerald-400 text-sm">✓</span></div>
                  <div className="text-slate-300 font-medium">Architectural Foresight</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><span className="text-emerald-400 text-sm">✓</span></div>
                  <div className="text-slate-300 font-medium">Measurable Business Impact</div>
                </li>
              </ul>
            </div>

            <div className="grid gap-6">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-3">For Fast-Moving Startups</h3>
                <p className="text-slate-400">Scale your engineering velocity instantly without sacrificing the high standards required to achieve product-market fit.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl transform md:translate-x-8">
                <h3 className="text-2xl font-bold text-white mb-3">For Ambitious SMEs & D2Cs</h3>
                <p className="text-slate-400">Leverage elite AI and software talent to automate operations, improve customer experiences, and outpace the competition.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-3">For Global Enterprises</h3>
                <p className="text-slate-400">Inject high-velocity Forward Deployed teams into legacy systems to modernize architecture and lead digital transformation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Experience the difference today.</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
              Stop settling for average talent. Let us match you with a top 1% engineer within the next 48 hours.
            </p>
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-base font-bold text-white transition-all hover:bg-blue-500 shadow-lg relative z-10">
              Start Building Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
