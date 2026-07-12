import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function OurAim() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-20 text-slate-600">
      <SEO 
        title="Our Mission & The LearnShiz Difference" 
        description="We don't just write code; we solve complex problems. Discover how LearnShiz is building the world's largest elite engineering community for the AI era." 
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#00B2A9]/10 blur-[150px] absolute top-0 left-[-10%]"></div>
          <div className="w-[600px] h-[600px] rounded-full bg-[#F8485E]/10 blur-[150px] absolute bottom-0 right-[-10%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-[#F8F9FA] mb-8 shadow-sm">
            <span className="text-sm font-semibold text-[#00B2A9] tracking-widest uppercase">The LearnShiz Difference</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0A1622] tracking-tight leading-tight mb-8">
            Building the world's most <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">elite engineering community.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            In the upcoming era of AI and unprecedented technological scale, we are on a mission to ensure that SMEs, D2Cs, startups, and massive enterprises get access to the absolute best developers exactly when they need them.
          </p>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-16 relative z-10 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1622] mb-6">We don't just write code. We solve complex problems.</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The traditional outsourcing model is broken. Vendors provide "ticket-takers" who lack product vision, require constant micromanagement, and ultimately drain resources. 
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                At LearnShiz, our vetted engineers and AI specialists operate as true partners. We embed deeply into your culture, understand your business model, and actively architect solutions that add measurable value to your bottom line.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/10 flex items-center justify-center"><span className="text-[#00B2A9] font-bold text-sm">✓</span></div>
                  <div className="text-slate-700 font-medium">True Product Ownership</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/10 flex items-center justify-center"><span className="text-[#00B2A9] font-bold text-sm">✓</span></div>
                  <div className="text-slate-700 font-medium">Architectural Foresight</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00B2A9]/10 flex items-center justify-center"><span className="text-[#00B2A9] font-bold text-sm">✓</span></div>
                  <div className="text-slate-700 font-medium">Measurable Business Impact</div>
                </li>
              </ul>
            </div>

            <div className="grid gap-6">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-[#0A1622] mb-3">For Fast-Moving Startups</h3>
                <p className="text-slate-600">Scale your engineering velocity instantly without sacrificing the high standards required to achieve product-market fit.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transform md:translate-x-8">
                <h3 className="text-2xl font-bold text-[#0A1622] mb-3">For Ambitious SMEs & D2Cs</h3>
                <p className="text-slate-600">Leverage elite AI and software talent to automate operations, improve customer experiences, and outpace the competition.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-[#0A1622] mb-3">For Global Enterprises</h3>
                <p className="text-slate-600">Inject high-velocity Forward Deployed teams into legacy systems to modernize architecture and lead digital transformation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]"></div>
            <h2 className="text-3xl font-bold text-[#0A1622] mb-6 relative z-10">Experience the difference today.</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto relative z-10">
              Stop settling for average talent. Let us match you with a top 1% engineer within the next 48 hours.
            </p>
            <a href="https://cal.com/learnshiz-techies-ll1gn1/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#F8485E] px-10 py-4 text-base font-bold text-white transition-all hover:bg-[#E8236E] shadow-lg shadow-[#F8485E]/25 relative z-10">
              Start Building Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
