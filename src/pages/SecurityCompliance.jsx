import React from "react";
import SEO from "../components/SEO";
import { HiMiniShieldCheck, HiMiniLockClosed, HiMiniServer, HiMiniKey, HiMiniCheckCircle } from "react-icons/hi2";

const complianceStandards = [
  {
    title: "SOC 2 Type II Ready",
    badge: "Security & Availability",
    desc: "Rigorous internal controls monitoring system security, availability, processing integrity, and confidentiality across all client engineering squads.",
    points: ["Role-based access control (RBAC)", "Continuous audit logging & monitoring", "Mandatory multi-factor authentication (MFA)"],
  },
  {
    title: "ISO/IEC 27001 Processes",
    badge: "Information Security",
    desc: "Adherence to international information security management standards (ISMS), ensuring risk assessment and proactive vulnerability mitigation.",
    points: ["Strict asset management protocols", "Annual third-party penetration testing", "Secure developer workstation policies"],
  },
  {
    title: "HIPAA & HITECH Ready",
    badge: "Healthcare & MedTech",
    desc: "Built to support digital health startups and hospital systems. We execute Business Associate Agreements (BAAs) for healthcare products.",
    points: ["Isolated PHI processing environments", "End-to-end encryption (AES-256 / TLS 1.3)", "Strict HIPAA training for assigned engineers"],
  },
  {
    title: "GDPR & CCPA Compliant",
    badge: "Global Data Privacy",
    desc: "Full compliance with European and California data privacy laws. We respect data residency requirements and right-to-erasure mandates.",
    points: ["Zero sale or monetization of user data", "Standard Contractual Clauses (SCCs)", "Transparent data processing agreements (DPA)"],
  },
];

export default function SecurityCompliance() {
  return (
    <main className="pt-24 min-h-screen bg-white text-slate-600">
      <SEO
        title="Security & Enterprise Compliance | Learnshiz Engineering"
        description="Explore Learnshiz Engineering's security posture: SOC 2 Type II readiness, ISO 27001 processes, HIPAA compliance, and NDA-first IP protection."
        path="/security"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider shadow-sm">
            <HiMiniShieldCheck className="w-4 h-4" />
            Trust & Security Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-5">
            Enterprise-Grade{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Security & Compliance
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            When you subscribe to Learnshiz Engineering, your codebase, customer data, and intellectual property are guarded by state-of-the-art compliance frameworks.
          </p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A1622] mb-3">Compliance Frameworks</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">We build and scale software under strict regulatory and security guidelines.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {complianceStandards.map((std) => (
            <div key={std.title} className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-[#00B2A9] transition-all duration-300 shadow-sm">
              <div>
                <div className="inline-block bg-white text-[#00B2A9] font-bold text-xs px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-4">
                  {std.badge}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1622] mb-3">{std.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{std.desc}</p>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-2.5">
                {std.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <HiMiniCheckCircle className="w-4 h-4 text-[#00B2A9] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Security Practices */}
      <section className="py-16 md:py-24 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1622] mb-3">Our Codebase & Infrastructure Protection</h2>
            <p className="text-slate-600 text-sm">How we protect your product during daily engineering sprints.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
              <HiMiniLockClosed className="w-8 h-8 text-[#00B2A9] mx-auto mb-3" />
              <h4 className="text-[#0A1622] font-bold mb-2">NDA-First Policy</h4>
              <p className="text-slate-600 text-xs leading-relaxed">Every engineer signs legally binding confidentiality and invention assignment agreements before accessing your repositories.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
              <HiMiniKey className="w-8 h-8 text-[#00B2A9] mx-auto mb-3" />
              <h4 className="text-[#0A1622] font-bold mb-2">Zero Code Retention</h4>
              <p className="text-slate-600 text-xs leading-relaxed">We develop directly inside your AWS/GCP cloud and GitHub/GitLab repositories. We never store copies of your proprietary source code.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
              <HiMiniServer className="w-8 h-8 text-[#00B2A9] mx-auto mb-3" />
              <h4 className="text-[#0A1622] font-bold mb-2">Automated Security Scans</h4>
              <p className="text-slate-600 text-xs leading-relaxed">Continuous SAST/DAST vulnerability scanning, dependency auditing, and secrets detection integrated into every pull request.</p>
            </div>
          </div>

          {/* VDP / Contact */}
          <div className="mt-14 bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#0A1622] mb-2">Vulnerability Disclosure & Compliance Inquiries</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
              If you are an enterprise security auditor requiring custom DPA documentation, SOC 2 audit letters, or wish to report a security disclosure, contact our security team.
            </p>
            <a
              href="mailto:hello@learnshiz.com?subject=Security%20and%20Compliance%20Inquiry"
              className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#F8485E]/25 uppercase tracking-wider"
            >
              Contact Security Officer →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
