import React from "react";
import SEO from "../components/SEO";
import { HiMiniShieldCheck, HiMiniLockClosed, HiMiniDocumentText } from "react-icons/hi2";

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 min-h-screen bg-white text-slate-600">
      <SEO
        title="Privacy Policy | Learnshiz Engineering (EaaS)"
        description="Read our comprehensive Privacy Policy covering GDPR, CCPA, and HIPAA compliance, data handling, analytics tracking, and enterprise data protection."
        path="/privacy-policy"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            <HiMiniShieldCheck className="w-4 h-4" />
            GDPR · CCPA · HIPAA Compliant
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Effective Date: July 1, 2026 · Last Updated: July 5, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F9FA] border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-12 space-y-8 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">1.</span> Introduction & Commitment to Privacy
            </h2>
            <p className="text-slate-600">
              Learnshiz Engineering (operated by APSS Pvt Ltd, with operations in Bengaluru, Indore, and Miami, USA) ("we," "our," or "us") is committed to protecting the privacy and security of your personal data and enterprise IP. This Privacy Policy details how we collect, process, store, and safeguard information when you visit our website (<strong className="text-[#0A1622]">learnshiz.com</strong>), use our Engineering-as-a-Service (EaaS) offerings, or submit technical assessment requests.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">2.</span> Information We Collect
            </h2>
            <p className="text-slate-600 mb-3">We collect information across three primary categories:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>
                <strong className="text-[#0A1622]">Directly Provided Lead Data:</strong> When you book a discovery call or request a Free Technical Assessment Blueprint, we collect your Name, Work Email Address, Company/Product Name, Team Structure requirements, and project scope details.
              </li>
              <li>
                <strong className="text-[#0A1622]">Automated Usage & Analytics (GA4):</strong> We use Google Analytics 4 (Property ID <code className="text-[#00B2A9] bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-xs">G-2YTB1NETG4</code>) to collect anonymized telemetry, including IP addresses, browser types, device categories, referring URLs, and user interactions across conversion funnels.
              </li>
              <li>
                <strong className="text-[#0A1622]">Client Project & Codebase Data:</strong> For active EaaS clients, technical documentation, API specs, and source code are handled under strict NDA-first protocols and isolated within client-controlled repositories.
              </li>
            </ul>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">3.</span> How We Use Your Information
            </h2>
            <p className="text-slate-600 mb-3">We process your information strictly for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Delivering custom engineering team blueprints and technical architecture assessments.</li>
              <li>Communicating regarding discovery calls, onboarding timelines, and project scoping.</li>
              <li>Analyzing website conversion bottlenecks and optimizing user experience.</li>
              <li>Complying with legal obligations, dispute resolution, and regulatory enforcement.</li>
            </ul>
            <p className="text-[#00B2A9] font-semibold mt-3">
              We never sell, rent, or trade your personal data or email lists to third parties or advertising brokers.
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">4.</span> GDPR & CCPA User Rights
            </h2>
            <p className="text-slate-600 mb-3">
              Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), visitors and clients residing in the European Economic Area (EEA), UK, or California hold the following rights:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li><strong className="text-[#0A1622]">Right to Access & Portability:</strong> Request a copy of all personal data we hold about you in a structured, machine-readable format.</li>
              <li><strong className="text-[#0A1622]">Right to Rectification:</strong> Request correction of inaccurate or incomplete contact details.</li>
              <li><strong className="text-[#0A1622]">Right to Erasure ("Right to be Forgotten"):</strong> Request immediate deletion of your lead data and assessment records from our CRM and email servers.</li>
              <li><strong className="text-[#0A1622]">Right to Restrict Processing:</strong> Opt out of remarketing tracking or non-essential data processing at any time.</li>
            </ul>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">5.</span> HIPAA & Healthcare Data Compliance
            </h2>
            <p className="text-slate-600">
              For healthcare, digital health, and MedTech clients utilizing our AI Engineering or Forward Deployment services, Learnshiz operates under strict HIPAA-ready workflows. We enter into formal <strong className="text-[#0A1622]">Business Associate Agreements (BAAs)</strong> upon onboarding. All Protected Health Information (PHI) is processed within isolated, HIPAA-compliant cloud infrastructure with end-to-end encryption (AES-256 at rest, TLS 1.3 in transit) and strict role-based access controls (RBAC).
            </p>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">6.</span> Third-Party Processors & Cookies
            </h2>
            <p className="text-slate-600">
              We utilize trusted enterprise processors to operate our web application:
            </p>
            <ul className="list-disc ml-6 space-y-1 mt-2 text-slate-600">
              <li><strong className="text-[#0A1622]">Google Analytics 4:</strong> Web traffic and event attribution.</li>
              <li><strong className="text-[#0A1622]">Cal.com:</strong> Secure 30-minute discovery call scheduling.</li>
              <li><strong className="text-[#0A1622]">FormSubmit / Web3Forms:</strong> Zero-storage email transmission of technical assessment forms directly to <code className="text-[#00B2A9] font-mono">hello@learnshiz.com</code>.</li>
            </ul>
          </div>

          <div className="h-px bg-slate-200" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1622] mb-3 flex items-center gap-2">
              <span className="text-[#00B2A9]">7.</span> Contact Our Data Protection Officer (DPO)
            </h2>
            <p className="text-slate-600">
              To exercise your GDPR/CCPA rights, request data deletion, or report privacy concerns, contact our privacy team directly:
            </p>
            <div className="mt-4 bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-xs sm:text-sm">
              <p><strong className="text-[#0A1622]">Learnshiz Engineering (APSS Pvt Ltd)</strong></p>
              <p className="text-slate-600 mt-1">Email: <a href="mailto:hello@learnshiz.com" className="text-[#00B2A9] underline">hello@learnshiz.com</a></p>
              <p className="text-slate-600">Headquarters: Bengaluru, India · US Operations: Miami, Florida, USA</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
