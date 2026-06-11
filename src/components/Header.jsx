import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const DEV_FORM_URL = "https://forms.gle/dxaLoQkrhn7JcDiX8";
const WHATSAPP_URL = "https://wa.me/919591967760";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-slate-800 py-3 shadow-sm"
          : "bg-slate-950 border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo and Trust Marker */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-lg bg-blue-600 p-[1px] group-hover:bg-blue-500 transition-colors">
            <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight leading-none">LearnShiz</span>
            <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1 font-semibold">Global Partner</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="/our-aim" 
            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Our Aim
          </NavLink>
          <NavLink 
            to="/careers" 
            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Careers
          </NavLink>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={DEV_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Join Network
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 shadow-sm">
            Hire Engineers
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
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

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col pt-24 px-6 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col gap-6 text-xl font-medium mb-12">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `block transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="/our-aim" 
            className={({ isActive }) => `block transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Our Aim
          </NavLink>
          <NavLink 
            to="/careers" 
            className={({ isActive }) => `block transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}
          >
            Careers
          </NavLink>
        </nav>
        <div className="flex flex-col gap-4 mt-auto mb-10">
          <a
            href={DEV_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-6 py-4 text-base font-semibold text-slate-300 w-full"
          >
            Join Network
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-4 text-base font-semibold text-white w-full">
            Hire Engineers
          </a>
        </div>
      </div>
    </header>
  );
}
