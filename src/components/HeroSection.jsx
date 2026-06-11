import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/919591967760";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
      
      {/* Professional Enterprise Aurora/Mesh Background */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Subtle grid base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        {/* Animated Aurora Orbs - Centered and scaled for mobile */}
        <div className="absolute w-[400px] h-[400px] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-600/20 blur-[100px] md:blur-[120px] mix-blend-screen animate-[pulse-glow_10s_ease-in-out_infinite_alternate] transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute w-[350px] h-[350px] md:w-[40vw] md:h-[40vw] rounded-full bg-indigo-600/20 blur-[90px] md:blur-[100px] mix-blend-screen animate-[pulse-glow_12s_ease-in-out_infinite_alternate_reverse] transform translate-x-1/4 translate-y-1/8"></div>
        <div className="absolute w-[450px] h-[300px] md:w-[60vw] md:h-[40vw] rounded-full bg-purple-600/10 blur-[110px] md:blur-[130px] mix-blend-screen animate-[pulse-glow_15s_ease-in-out_infinite_alternate] transform -translate-y-1/3"></div>
      </div>
      
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-10 md:mt-16">
      

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 px-2">
          Expedite your <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 pb-2">product delivery.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-2 sm:px-0">
          We provide elite Forward Deployed Engineers, Product Development Teams, and Technical Consultants. Get vetted developers onboarded in 48 hours, matched perfectly to your requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-sm w-full sm:w-auto">
            Hire Engineers
          </a>
          <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white w-full sm:w-auto">
            Explore Services
          </Link>
        </div>
        
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 sm:gap-4 md:gap-16 border-t border-slate-800/50 pt-8 md:pt-10 px-2 sm:px-4">
          <div className="flex flex-col items-center justify-center gap-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 md:bg-transparent md:border-none md:p-0 md:rounded-none">
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">2015</span>
            <span className="text-center text-slate-500 text-xs sm:text-sm font-medium">Operating Since</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 md:bg-transparent md:border-none md:p-0 md:rounded-none">
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">48h</span>
            <span className="text-center text-slate-500 text-xs sm:text-sm font-medium">Avg. Onboarding</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 md:bg-transparent md:border-none md:p-0 md:rounded-none">
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">100+</span>
            <span className="text-center text-slate-500 text-xs sm:text-sm font-medium">Vetted Developers</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 md:bg-transparent md:border-none md:p-0 md:rounded-none">
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">98%</span>
            <span className="text-center text-slate-500 text-xs sm:text-sm font-medium">Retention Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
