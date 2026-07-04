import React, { useState, useEffect } from "react";
import { trackLeadCapture, trackCTAClick, trackFunnelStep } from "../utils/analytics";
import { HiMiniXMark, HiMiniCheckCircle, HiMiniSparkles, HiMiniShieldCheck, HiMiniCalendar } from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

export default function TechnicalAssessmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "Growth Plan (Dedicated Squad)",
    challenge: "",
  });

  useEffect(() => {
    const handleOpen = (e) => {
      setSource(e.detail?.source || "general");
      setIsOpen(true);
      setSubmitted(false);
      trackFunnelStep("open_assessment_modal");
      if (e.detail?.source) {
        trackCTAClick("Get Free Assessment", e.detail.source);
      }
    };

    window.addEventListener("openTechnicalAssessment", handleOpen);
    return () => window.removeEventListener("openTechnicalAssessment", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // FormSubmit.co API (100% Free, Zero API Key required, sends directly to hello@learnshiz.com)
      // Note: On the FIRST submission ever, FormSubmit will send a verification email to hello@learnshiz.com.
      // Once you click "Activate Form" in that email, all future submissions arrive directly in your inbox!
      await fetch("https://formsubmit.co/ajax/hello@learnshiz.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `⚡ New EaaS Assessment Lead: ${formData.company}`,
          _template: "table",
          Name: formData.name,
          Email: formData.email,
          Company: formData.company,
          "Team Structure Needed": formData.teamSize,
          "Roadmap Challenge": formData.challenge,
          Source: source,
          SubmittedAt: new Date().toLocaleString(),
        }),
      });
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setLoading(false);
      setSubmitted(true);
      trackLeadCapture("technical_assessment", {
        team_size: formData.teamSize,
        source: source,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden z-10 animate-scale-up my-auto">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 p-6 sm:p-7 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <HiMiniXMark className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HiMiniSparkles className="w-3.5 h-3.5 text-blue-200" />
            Lower Commitment · Fast Turnaround
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Free Technical Assessment
          </h3>
          <p className="text-blue-100 text-sm mt-1 max-w-md">
            Tell us about your product roadmap. We'll analyze your tech stack and provide a custom dedicated team blueprint within 24 hours.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Company / Product *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme AI / Next.js SaaS"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Team Structure Needed
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Builder Plan (1-2 Engineers)">Builder Plan (1-2 Engineers)</option>
                    <option value="Growth Plan (Dedicated Squad)">Growth Plan (Dedicated Squad)</option>
                    <option value="Scale Plan (Complete Org)">Scale Plan (Complete Org)</option>
                    <option value="Unsure / Need Guidance">Unsure / Need Guidance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  What are you building or scaling right now? *
                </label>
                <textarea
                  name="challenge"
                  required
                  rows={3}
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="e.g., We need to accelerate our AI feature releases, refactor a Python backend, and need engineers working in EST hours..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Trust badges inside form */}
              <div className="flex items-center gap-4 py-2 border-t border-slate-800/60 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <HiMiniShieldCheck className="w-4 h-4 text-emerald-400" />
                  100% IP Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  NDA-Protected
                </span>
                <span className="flex items-center gap-1.5 ml-auto text-slate-500">
                  No Spam Guarantee
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing Scope...
                  </>
                ) : (
                  <>
                    Request Free Assessment Blueprint →
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Screen */
            <div className="text-center py-6 px-2 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-lg shadow-emerald-500/10">
                <HiMiniCheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Assessment Request Received!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our Principal Engineering Architect is reviewing <span className="text-blue-400 font-medium">{formData.company}</span>'s requirements. We will deliver your custom team structure & delivery timeline within 24 hours.
              </p>

              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 mb-6 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  <HiMiniCalendar className="w-4 h-4" />
                  Want to skip the wait?
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  You can lock in your Q3 onboarding slot immediately by speaking with our engineering leadership directly today.
                </p>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCTAClick("Book Call From Assessment Success", "Modal")}
                  className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3 rounded-xl border border-slate-700 transition-colors"
                >
                  Book 30-Min Discovery Call Now →
                </a>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-400 text-xs font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
