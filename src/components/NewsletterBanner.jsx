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
    <section className="py-16 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F8485E]/5 via-[#FF6B81]/5 to-[#00B2A9]/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 text-left">
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-[#00B2A9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-sm">
                <HiMiniSparkles className="w-3.5 h-3.5" />
                The EaaS Dispatch
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1622] tracking-tight leading-snug mb-2">
                Join 2,500+ Tech Leaders Scaling Without Hiring Bloat.
              </h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0A1622] placeholder-slate-400 focus:outline-none focus:border-[#00B2A9] transition-colors shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#F8485E] hover:bg-[#E8236E] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#F8485E]/25 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    Subscribe Free →
                  </button>
                  <span className="text-[11px] text-slate-500 text-center">
                    No spam ever. Unsubscribe in one click.
                  </span>
                </form>
              ) : (
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in shadow-sm">
                  <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-base mb-1">
                    <HiMiniCheckCircle className="w-5 h-5" />
                    You're on the list!
                  </div>
                  <p className="text-xs text-slate-600">
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
