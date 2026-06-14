import React from "react";
import logo from "../assets/logo.png";

const DEV_FORM_URL = "https://forms.gle/dxaLoQkrhn7JcDiX8";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="LearnShiz Logo" className="w-8 h-8 rounded-md object-contain" />
              <span className="text-white font-bold text-xl tracking-tight">LearnShiz</span>
            </div>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm">
              A global, developer-first staffing partner for modern engineering & AI teams. Operating with excellence since 2015.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <a href="mailto:hello@learnshiz.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors w-fit">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@learnshiz.com
              </a>
              <a href="https://wa.me/919591967760" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors w-fit">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 95919 67760 (WhatsApp)
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium pt-4 border-t border-slate-800">
              <a href={DEV_FORM_URL} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Apply as Developer &rarr;</a>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h4 className="text-slate-200 font-semibold text-xs mb-6 tracking-[0.15em] uppercase border-b border-slate-800 pb-3">Global Offices</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              
              <div className="flex flex-col">
                <span className="text-white font-medium mb-1">Bengaluru</span>
                <span className="text-slate-500 text-xs">India</span>
                <span className="text-blue-400 font-semibold text-xs mt-2">Headquarters</span>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-medium mb-1">Miami</span>
                <span className="text-slate-500 text-xs">United States</span>
                <span className="text-slate-600 text-xs mt-2">US Operations</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white font-medium mb-1">Indore</span>
                <span className="text-slate-500 text-xs">India</span>
                <span className="text-slate-600 text-xs mt-2">Operations Center</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white font-medium mb-1">Lucknow</span>
                <span className="text-slate-500 text-xs">India</span>
                <span className="text-slate-600 text-xs mt-2">Talent Acquisition</span>
              </div>

            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800/50 pt-8 text-slate-500 text-xs sm:text-sm">
          <div className="mb-4 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} APSS Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
