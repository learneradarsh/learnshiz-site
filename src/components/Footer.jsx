import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const BOOK_CALL_URL = "https://wa.me/919591967760";

const navGroups = [
  {
    title: "Services",
    links: [
      { label: "Engineering Subscription", to: "/engineering-subscription" },
      { label: "Forward Deployment", to: "/forward-deployment" },
      { label: "AI Engineering", to: "/services" },
      { label: "Cloud Engineering", to: "/services" },
      { label: "DevOps", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Industries", to: "/industries" },
      { label: "Pricing", to: "/pricing" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Learnshiz Engineering Logo" className="w-9 h-9 rounded-lg object-contain" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none">Learnshiz</span>
                <span className="text-blue-400 text-[10px] uppercase tracking-widest mt-0.5 font-bold">Engineering · EaaS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-sm">
              Your dedicated product engineering partner. We build complete engineering organizations
              that help startups ship faster without the complexity of hiring.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3 mb-6">
              <a href="mailto:hello@learnshiz.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-fit">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@learnshiz.com
              </a>
              <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-fit">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 95919 67760 (WhatsApp)
              </a>
            </div>

            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              Book a Discovery Call →
            </a>
          </div>

          {/* Nav Groups */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-10">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5 border-b border-slate-800 pb-3">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Global Offices */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5 border-b border-slate-800 pb-3">
                Global Offices
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-sm font-medium">Bengaluru</p>
                  <p className="text-slate-500 text-xs">India — Headquarters</p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Miami</p>
                  <p className="text-slate-500 text-xs">United States — US Operations</p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Indore</p>
                  <p className="text-slate-500 text-xs">India — Operations Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800/50 pt-8 text-slate-500 text-xs sm:text-sm gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Learnshiz Engineering (APSS Pvt Ltd). All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
