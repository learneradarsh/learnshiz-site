import React from "react";
import { Link } from "react-router-dom";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import logo from "../assets/logo.png";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

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
      { label: "Resources & Guides", to: "/resources" },
      { label: "Security & Compliance", to: "/security" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-slate-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Learnshiz Engineering" className="w-9 h-9 rounded-lg object-contain" />
              <div className="flex flex-col">
                <span className="text-[#0A1622] font-bold text-lg tracking-tight leading-none">Learnshiz</span>
                <span className="text-[#00B2A9] text-[10px] uppercase tracking-widest mt-0.5 font-bold">Engineering · EaaS</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed max-w-xs">
              Your dedicated product engineering partner. Complete engineering teams on subscription — ship faster without the hiring overhead.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              <a href="mailto:hello@learnshiz.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0A1622] transition-colors w-fit">
                <HiEnvelope className="w-4 h-4 text-[#00B2A9] shrink-0" />
                hello@learnshiz.com
              </a>
              <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0A1622] transition-colors w-fit">
                <HiPhone className="w-4 h-4 text-[#00B2A9] shrink-0" />
                Book a 30-Min Call
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25"
              >
                Book Discovery Call →
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "Footer" } }))}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#0A1622] text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                Free Assessment
              </button>
            </div>
          </div>

          {/* Nav Groups */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-[#0A1622] font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-slate-200 pb-3">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-slate-600 hover:text-[#0A1622] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Global Offices */}
            <div>
              <h4 className="text-[#0A1622] font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-slate-200 pb-3">
                Global Offices
              </h4>
              <div className="space-y-3.5">
                {[
                  { city: "Bengaluru", country: "India", note: "Headquarters" },
                  { city: "Miami", country: "United States", note: "US Operations" },
                  { city: "Indore", country: "India", note: "Operations" },
                ].map((office) => (
                  <div key={office.city}>
                    <p className="text-[#0A1622] text-sm font-medium leading-none mb-0.5">{office.city}</p>
                    <p className="text-slate-600 text-xs">{office.country} · {office.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-7 text-slate-500 text-xs gap-3">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Learnshiz Engineering (APSS Pvt Ltd). All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-[#0A1622] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#0A1622] transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-[#0A1622] transition-colors">Security & Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
