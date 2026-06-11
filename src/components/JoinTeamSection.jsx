import React from "react";

const DEV_FORM_URL = "https://forms.gle/dxaLoQkrhn7JcDiX8";

export default function JoinTeamSection() {
  return (
    <section className="py-32 bg-slate-950 relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">
            Are you a top-tier developer?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Join our elite team of Forward Deployed and Product Development Engineers. Work on high-impact products, enjoy transparent payouts, and accelerate your career.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-300 text-sm max-w-3xl mx-auto mb-12 relative z-10">
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> 100% Remote Work
            </div>
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> Udemy Subscriptions
            </div>
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> Flexible Leaves
            </div>
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> Global Exposure
            </div>
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> Medical Insurance
            </div>
            <div className="flex items-center justify-center gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm font-medium">
              <span className="text-emerald-400 font-bold">✓</span> Top 1% Network
            </div>
          </div>

          <div className="relative z-10">
            <a 
              href={DEV_FORM_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-base font-bold text-white transition-all hover:bg-blue-500 shadow-lg"
            >
              Apply to Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
