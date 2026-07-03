import React from "react";
import { Link } from "react-router-dom";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
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
    <footer className="bg-slate-950 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Learnshiz Engineering" className="w-9 h-9 rounded-lg object-contain" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none">Learnshiz</span>
                <span className="text-blue-400 text-[10px] uppercase tracking-widest mt-0.5 font-bold">Engineering · EaaS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-xs">
              Your dedicated product engineering partner. Complete engineering teams on subscription — ship faster without the hiring overhead.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              <a href="mailto:hello@learnshiz.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-fit">
                <HiEnvelope className="w-4 h-4 text-blue-400 shrink-0" />
                hello@learnshiz.com
              </a>
              <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-fit">
                <HiPhone className="w-4 h-4 text-emerald-400 shrink-0" />
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
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-slate-800 pb-3">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Global Offices */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-slate-800 pb-3">
                Global Offices
              </h4>
              <div className="space-y-3.5">
                {[
                  { city: "Bengaluru", country: "India", note: "Headquarters" },
                  { city: "Miami", country: "United States", note: "US Operations" },
                  { city: "Indore", country: "India", note: "Operations" },
                ].map((office) => (
                  <div key={office.city}>
                    <p className="text-white text-sm font-medium leading-none mb-0.5">{office.city}</p>
                    <p className="text-slate-500 text-xs">{office.country} · {office.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800/50 pt-7 text-slate-500 text-xs gap-3">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Learnshiz Engineering (APSS Pvt Ltd). All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
