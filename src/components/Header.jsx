import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/engineering-subscription", label: "Subscription" },
  { to: "/forward-deployment", label: "Forward Deployment" },
  { to: "/services", label: "Capabilities" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/resources", label: "Resources" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
    window.dispatchEvent(new CustomEvent("mobileMenuToggle", { detail: { open: mobileMenuOpen } }));
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? "bg-slate-900/95 backdrop-blur-md border-slate-800 py-3 shadow-lg"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group relative z-50">
          <img src={logo} alt="Learnshiz Engineering Logo" className="w-10 h-10 rounded-lg object-contain" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none">Learnshiz</span>
            <span className="text-blue-400 text-[10px] uppercase tracking-widest mt-0.5 font-bold">Engineering · EaaS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "Header" } }))}
            className="text-xs font-bold text-indigo-300 hover:text-white bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 transition-colors px-3.5 py-2 rounded-lg"
          >
            Free Assessment
          </button>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20"
          >
            Book Discovery Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden relative z-50 p-2 text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950 z-40 transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto h-[100dvh] w-screen ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 my-auto py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-3.5 rounded-xl text-lg font-semibold transition-colors ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col gap-3 mt-auto border-t border-slate-800/80 pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "MobileHeader" } }));
            }}
            className="inline-flex items-center justify-center rounded-xl border border-indigo-500/40 bg-indigo-950/40 px-6 py-3.5 text-base font-bold text-indigo-300 w-full hover:bg-indigo-900/50 transition-colors"
          >
            Get Free Assessment Blueprint
          </button>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-4 text-base font-bold text-white w-full shadow-lg shadow-blue-600/30 transition-all"
          >
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </header>
  );
}
