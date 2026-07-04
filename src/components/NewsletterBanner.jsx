import React, { useState } from "react";
import { trackLeadCapture, trackCTAClick } from "../utils/analytics";
import { HiMiniSparkles, HiMiniCheckCircle } from "react-icons/hi2";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    trackLeadCapture("newsletter", { email_domain: email.split("@")[1] });
    trackCTAClick("Subscribe Newsletter", "Newsletter Banner");
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800/60 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 text-left">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <HiMiniSparkles className="w-3.5 h-3.5" />
                The EaaS Dispatch
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2">
                Join 2,500+ Tech Leaders Scaling Without Hiring Bloat.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Weekly engineering dispatches on AI-native product velocity, offshore vs. time-zone alignment strategies, and building high-output squads without a full-time CTO.
              </p>
            </div>

            <div className="md:col-span-5">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="cto@company.com"
                    className="w-full bg-slate-950/90 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    Subscribe Free →
                  </button>
                  <span className="text-[11px] text-slate-500 text-center">
                    No spam ever. Unsubscribe in one click.
                  </span>
                </form>
              ) : (
                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 text-center animate-fade-in">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-base mb-1">
                    <HiMiniCheckCircle className="w-5 h-5" />
                    You're on the list!
                  </div>
                  <p className="text-xs text-slate-300">
                    Welcome aboard. Check your inbox for our latest engineering guide.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
