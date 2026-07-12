import React from "react";
import SEO from "../components/SEO";
import { HiMiniDocumentText, HiMiniShieldCheck, HiMiniScale } from "react-icons/hi2";

export default function TermsOfService() {
  return (
    <main className="pt-24 min-h-screen bg-white text-slate-600">
      <SEO
        title="Terms of Service & EaaS SLA | Learnshiz Engineering"
        description="Review our Terms of Service covering subscription engineering rules, 100% client IP ownership, NDA-first engagement, and our 2-week replacement guarantee."
        path="/terms-of-service"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            <HiMiniScale className="w-4 h-4" />
            Enterprise EaaS Terms
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Effective Date: July 1, 2026 · Governing Law: International B2B Standards
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F9FA] border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-12 space-y-8 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">1.</span> Engineering Subscription Agreement
            </h2>
            <p className="text-slate-600">
              By subscribing to Learnshiz Engineering (an offering of APSS Pvt Ltd) ("Learnshiz," "we," or "us"), the client organization ("Client") agrees to these Terms of Service. Learnshiz operates on an <strong className="text-[#0A1622]">Engineering-as-a-Service (EaaS)</strong> model, providing dedicated, embedded engineering squads under flat monthly subscription pricing.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">2.</span> 100% Client Intellectual Property (IP) Ownership
            </h2>
            <p className="text-slate-600 mb-3">
              We operate under an absolute <strong className="text-[#00B2A9]">100% Client IP Ownership Guarantee</strong> designed to satisfy venture capital due diligence and enterprise M&A audits:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>All source code, algorithms, AI models, architecture schematics, and documentation authored by Learnshiz engineers during the subscription period are the exclusive property of the Client from Line 1 of code.</li>
              <li>Learnshiz retains zero residual rights, licenses, or liens over Client deliverables.</li>
              <li>All engineers assigned to Client squads are bound by rigorous, legally enforceable Non-Disclosure Agreements (NDAs) and Invention Assignment Agreements prior to onboarding.</li>
            </ul>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">3.</span> Rolling Monthly Billing & Cancellation
            </h2>
            <p className="text-slate-600">
              Unlike traditional staffing agencies that enforce rigid multi-year vendor lock-in, Learnshiz subscriptions operate on flexible monthly cycles:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-2 text-slate-600">
              <li><strong className="text-[#0A1622]">Predictable Flat Billing:</strong> Subscription fees (Builder, Growth, or Scale Plan) are billed monthly in advance. There are no hourly overage fees, recruitment commissions, or hidden administrative charges.</li>
              <li><strong className="text-[#0A1622]">30-Day Notice Cancellation:</strong> Clients may pause, downgrade, or cancel their engineering subscription at any time with a standard 30-day written notice to <code className="text-[#00B2A9] font-mono">hello@learnshiz.com</code>.</li>
              <li><strong className="text-[#0A1622]">Seamless Offboarding:</strong> Upon cancellation, Learnshiz ensures a complete, documented knowledge transfer and clean codebase handover at no extra cost.</li>
            </ul>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">4.</span> 2-Week Free Replacement Guarantee (SLA)
            </h2>
            <p className="text-slate-600">
              We stand behind the technical caliber and cultural alignment of our forward-deployed engineers. If the Client determines that any assigned engineer is not performing to expectations within the first 14 business days of onboarding, Learnshiz will replace the engineer within <strong className="text-[#0A1622]">10 business days at zero additional cost</strong> or credit the billing period accordingly.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">5.</span> Time-Zone Alignment & Synchronous Collaboration
            </h2>
            <p className="text-slate-600">
              Learnshiz guarantees that dedicated squads assigned to US (EST/PST), UK (BST), or European (CET) clients will maintain synchronous overlap during Client's core business hours for daily standups, sprint planning, pair programming, and architectural huddles.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">6.</span> Limitation of Liability & Warranties
            </h2>
            <p className="text-slate-600">
              Learnshiz warrants that all engineering services will be performed in a professional, workmanlike manner adhering to industry best practices (e.g., OWASP security standards, clean code principles). In no event shall either party be liable for indirect, incidental, special, or consequential damages. Total cumulative liability under any subscription shall not exceed the subscription fees paid by Client in the preceding three (3) months.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">7.</span> Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-600">
              These Terms shall be governed by and construed in accordance with standard international commercial arbitration rules. For US-based clients, formal engagements are governed under applicable laws of our US operational jurisdiction (Miami, Florida), or as mutually executed in the Master Services Agreement (MSA).
            </p>
            <div className="mt-4 bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-xs sm:text-sm">
              <p><strong className="text-[#0A1622]">Legal & Contracting Inquiries:</strong></p>
              <p className="text-slate-600 mt-1">Email: <a href="mailto:hello@learnshiz.com" className="text-[#00B2A9] underline">hello@learnshiz.com</a></p>
              <p className="text-slate-600">APSS Pvt Ltd · Bengaluru · Indore · Miami</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
