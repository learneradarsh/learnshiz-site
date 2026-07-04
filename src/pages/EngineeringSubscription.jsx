import React from "react";
import EngineeringPlans from "../components/EngineeringPlans";
import SEO from "../components/SEO";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

export default function EngineeringSubscription() {
  return (
    <main className="pt-24">
      <SEO
        title="Engineering Subscription | Learnshiz Engineering"
        description="Subscribe to a complete dedicated engineering team. Builder for MVPs, Growth for scaling startups, Scale for full engineering organizations. Flat monthly pricing."
        path="/engineering-subscription"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Engineering Subscription
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Your Dedicated Team.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              On Subscription.
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-7">
            Stop hiring. Start building. Subscribe to a complete engineering capability that scales with you.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/25 text-sm"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>

      <EngineeringPlans />
    </main>
  );
}
