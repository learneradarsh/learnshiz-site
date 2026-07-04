import React, { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    const onMenuToggle = (e) => {
      setMenuOpen(Boolean(e.detail?.open || document.body.classList.contains("mobile-menu-open")));
    };

    // Check initial state
    setMenuOpen(document.body.classList.contains("mobile-menu-open"));

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mobileMenuToggle", onMenuToggle);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mobileMenuToggle", onMenuToggle);
    };
  }, []);

  if (!visible || menuOpen) return null;

  return (
    <a
      href="https://cal.com/learnshiz-techies-ll1gn1/30min"
      target="_blank"
      rel="noreferrer"
      id="floating-discovery-call-cta"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/60"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Book a Discovery Call
    </a>
  );
}
