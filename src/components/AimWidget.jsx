import React from "react";
import { Link } from "react-router-dom";

export default function AimWidget() {
  return (
    <section className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00B2A9]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 md:w-2/3">
            <div className="text-[#00B2A9] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">Our Aim & Difference</div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0A1622] mb-4 leading-tight">
              We don't just write code. <br className="hidden md:block" /> We drive business value.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              LearnShiz is on a mission to build the world's most elite community of vetted developers for SMEs, D2Cs, startups, and enterprises in the AI era. 
            </p>
          </div>
          
          <div className="relative z-10 md:w-1/3 flex md:justify-end w-full">
            <Link 
              to="/our-aim" 
              className="inline-flex items-center justify-center rounded-xl bg-[#F8485E] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#E8236E] shadow-lg shadow-[#F8485E]/25 w-full md:w-auto text-center"
            >
              See Our Mission &rarr;
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
