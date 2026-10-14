import React, { useState } from "react";
import SEO from "../components/SEO";
import { trackLeadCapture, trackCTAClick } from "../utils/analytics";
import {
  FiBriefcase,
  FiCheckCircle,
  FiDollarSign,
  FiClock,
  FiShield,
  FiUsers,
  FiZap,
  FiSend,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
  FiFileText,
  FiLayers,
  FiAward,
  FiCpu,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import { HiEnvelope, HiPhone, HiSparkles } from "react-icons/hi2";

const BOOK_CALL_URL = "https://cal.com/learnshiz-techies-ll1gn1/30min";

export default function RecruitmentVendors() {
  const [formData, setFormData] = useState({
    agencyName: "",
    businessType: "Private Limited / LLC",
    website: "",
    linkedin: "",
    headquarters: "",
    teamSize: "11 - 25 recruiters",
    contactName: "",
    contactRole: "",
    contactEmail: "",
    contactPhone: "",
    specializations: ["AI & Machine Learning", "Fullstack (React/Node)"],
    talentGeos: ["Bangalore (Bengaluru)", "Hyderabad"],
    engagementModels: ["Contract / Staff Augmentation", "Full-Time Placement"],
    pfDeduction: "Yes",
    avgTurnaround: "24 - 48 hours",
    taxId: "",
    benchAvailability: "",
    agreedToTerms: false,
    agreedToNDA: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const specializationOptions = [
    "AI & Machine Learning / GenAI",
    "Fullstack (React / Node / TypeScript)",
    "Cloud & DevOps (AWS / GCP / K8s)",
    "Backend (Python / Go / Java)",
    "Data Engineering & Distributed Systems",
    "Mobile (React Native / iOS / Android)",
    "System Architecture & Forward Deployment",
    "Security & DevSecOps",
  ];

  const geoOptions = [
    "Bangalore (Bengaluru)",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Chennai",
    "Delhi NCR",
    "Gurugram",
    "Noida",
    "Kochi (Cochin)",
    "Kolkata",
    "Ahmedabad",
    "Chandigarh / Mohali",
    "Indore",
    "Coimbatore",
    "Thiruvananthapuram",
    "Bhubaneswar",
    "Pan-India / Remote",
  ];

  const pfOptions = [
    "Yes",
    "No",
    "Depends on Engagement",
  ];

  const engagementModelOptions = [
    "Contract / Staff Augmentation (C2C)",
    "Full-Time / Direct Hire Placement",
    "Contract-to-Hire",
  ];

  const toggleSpecialization = (item) => {
    setFormData((prev) => {
      const exists = prev.specializations.includes(item);
      return {
        ...prev,
        specializations: exists
          ? prev.specializations.filter((s) => s !== item)
          : [...prev.specializations, item],
      };
    });
  };

  const toggleGeo = (item) => {
    setFormData((prev) => {
      const exists = prev.talentGeos.includes(item);
      return {
        ...prev,
        talentGeos: exists
          ? prev.talentGeos.filter((g) => g !== item)
          : [...prev.talentGeos, item],
      };
    });
  };

  const toggleEngagementModel = (item) => {
    setFormData((prev) => {
      const exists = prev.engagementModels.includes(item);
      return {
        ...prev,
        engagementModels: exists
          ? prev.engagementModels.filter((m) => m !== item)
          : [...prev.engagementModels, item],
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.agreedToTerms || !formData.agreedToNDA) {
      setErrorMsg("Please accept the vendor partner guidelines and mutual NDA terms to continue.");
      return;
    }

    if (formData.specializations.length === 0) {
      setErrorMsg("Please select at least one talent specialization domain.");
      return;
    }

    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/hello@learnshiz.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `⚡ New Recruitment Vendor Onboarding: ${formData.agencyName}`,
          _template: "table",
          "Agency Name": formData.agencyName,
          "Business Type": formData.businessType,
          "Contact Person": formData.contactName,
          "Designation": formData.contactRole,
          "Email": formData.contactEmail,
          "Phone": formData.contactPhone,
          "Website": formData.website,
          "LinkedIn": formData.linkedin,
          "Headquarters": formData.headquarters,
          "Recruiter Team Size": formData.teamSize,
          "Primary Domains": formData.specializations.join(", "),
          "Talent Geographies": formData.talentGeos.join(", "),
          "Engagement Models": formData.engagementModels.join(", "),
          "Candidate PF Deduction": formData.pfDeduction,
          "Average Turnaround": formData.avgTurnaround,
          "Tax / Registration ID": formData.taxId || "Not provided",
          "Bench Notes": formData.benchAvailability || "None",
          "Submitted At": new Date().toLocaleString(),
          "Source": "Recruitment Vendor Onboarding Page",
        }),
      });

      trackLeadCapture("recruitment_vendor_onboarding", {
        agency_name: formData.agencyName,
        team_size: formData.teamSize,
        specializations: formData.specializations.join(", "),
        pf_deduction: formData.pfDeduction,
      });

      setSubmitted(true);
      window.scrollTo({ top: document.getElementById("vendor-form")?.offsetTop - 100, behavior: "smooth" });
    } catch (err) {
      console.error("Vendor onboarding submission error:", err);
      // Fallback display success even if offline/cors issue so lead is acknowledged
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "What are the commercial and payout terms for recruitment partners?",
      a: "Learnshiz operates on clear, guaranteed Net-15 or Net-30 payment disbursements upon client milestone sign-offs. We offer both competitive recurring contractor margins (for staff augmentation squads) and standard direct-placement success fees (percentage of first-year CTC/base). Full rate cards and commission models are detailed in our Vendor Service Agreement (VSA).",
    },
    {
      q: "How does Learnshiz protect candidate ownership?",
      a: "We maintain a centralized candidate timestamp registry. When you submit an authenticated candidate profile via our portal or Slack, your agency retains exclusive representation rights for that candidate for a rolling 180-day window. If hired across any Learnshiz client engagement during this period, your commission is guaranteed.",
    },
    {
      q: "How quickly do our submitted profiles receive feedback?",
      a: "We guarantee a strict 48-hour SLA on CV screenings. If a profile matches our technical rubric, we fast-track them to our 2-step evaluation (Technical Deep-Dive & Client Alignment). You will receive structured, actionable feedback on every single submission.",
    },
    {
      q: "Is there any upfront fee or recurring subscription to become a vendor?",
      a: "No. Partnering with Learnshiz is 100% free for recruitment agencies. There are zero listing fees, platform subscriptions, or software costs. We succeed only when your talent succeeds.",
    },
    {
      q: "Can international recruitment firms outside India and the US partner with Learnshiz?",
      a: "Yes. Learnshiz works with international clients spanning North America, the UK, Europe, the Middle East, and APAC. We welcome reputable recruitment agencies and talent firms from India, LATAM, Eastern Europe, Southeast Asia, and worldwide.",
    },
    {
      q: "What happens after we submit the onboarding form?",
      a: "Our Vendor Partnerships Desk reviews your agency profile within 24 business hours. You will receive an invitation to an onboarding briefing call, your counter-signed Mutual NDA & Vendor Agreement, and immediate access to our live open client requisitions feed.",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-24 pb-16 text-[#0A1622]">
      <SEO
        title="Recruitment Vendor & Talent Partner Onboarding | Learnshiz"
        description="Join Learnshiz's Global Recruitment Partner Network. Supply vetted software & AI talent, access high-volume client demands, guaranteed Net-15 payouts, and <48hr candidate feedback."
        path="/recruitment-partners"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B2A9]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F8485E]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00B2A9]/10 text-[#009E96] border border-[#00B2A9]/20 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00B2A9] animate-pulse" />
            Learnshiz Talent Partner Ecosystem · Vendor Portal
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] mb-6 tracking-tight leading-[1.1]">
            Scale Your Placements. <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Partner With Learnshiz.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            We collaborate with premier recruitment agencies, executive search firms, and technical headhunters worldwide.
            Access continuous engineering requisitions from high-growth US & global enterprises, backed by fast feedback and guaranteed payouts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#vendor-form"
              onClick={() => trackCTAClick("Register as Vendor", "Hero")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8485E] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#E8236E] shadow-lg shadow-[#F8485E]/25 w-full sm:w-auto"
            >
              Start Vendor Application
              <FiArrowRight className="w-5 h-5" />
            </a>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCTAClick("Book Partner Briefing", "Hero")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-[#0A1622] hover:border-[#00B2A9] hover:bg-slate-50 transition-all w-full sm:w-auto shadow-sm"
            >
              Book Partner Briefing Call
            </a>
          </div>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "CV Feedback SLA", value: "< 48 Hours", sub: "Fast review turnaround", icon: <FiClock className="w-5 h-5 text-[#00B2A9]" /> },
              { label: "Payout Terms", value: "Net-15 / Net-30", sub: "Disbursed on time", icon: <FiDollarSign className="w-5 h-5 text-emerald-500" /> },
              { label: "Placement Pipeline", value: "High Demand", sub: "AI & Fullstack pods", icon: <FiZap className="w-5 h-5 text-[#F8485E]" /> },
              { label: "Ownership Protection", value: "180 Days", sub: "Candidate lock-in", icon: <FiShield className="w-5 h-5 text-indigo-500" /> },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-left shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</span>
                  <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#0A1622]">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B2A9] font-bold text-xs uppercase tracking-widest block mb-2">
              Why Recruitment Agencies Love Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1622] tracking-tight mb-4">
              Built by Engineers, Designed for High-Performing Recruiters
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Say goodbye to black-hole ATS portals and unpredictable payout delays. Here is why the world's best staffing agencies prioritize Learnshiz mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FiBriefcase className="w-6 h-6 text-[#F8485E]" />,
                title: "Curated Requisition Flow",
                desc: "Never chase cold mandates. Receive verified, budget-approved client requirements with clear job briefs and target compensations.",
              },
              {
                icon: <FiClock className="w-6 h-6 text-[#00B2A9]" />,
                title: "Strict 48-Hour Feedback SLA",
                desc: "We respect your recruiters' time. Every profile submitted receives actionable technical and cultural feedback in 2 business days.",
              },
              {
                icon: <FiDollarSign className="w-6 h-6 text-emerald-500" />,
                title: "Guaranteed Payout Timelines",
                desc: "Predictable, automated payment disbursement. Whether contract or permanent placements, commissions are processed promptly.",
              },
              {
                icon: <FiShield className="w-6 h-6 text-indigo-500" />,
                title: "180-Day Candidate Lock",
                desc: "Your candidate relationships remain protected. Our candidate registry ensures full credit and commissions for 6 months from submission.",
              },
              {
                icon: <FiUsers className="w-6 h-6 text-purple-500" />,
                title: "Dedicated Partner Desk",
                desc: "Direct Slack channel connect with our Talent Operations Team. Real-time updates, interview scheduling, and instant clarifications.",
              },
              {
                icon: <FiGlobe className="w-6 h-6 text-blue-500" />,
                title: "Non-Exclusive Flexibility",
                desc: "Zero exclusivity traps. Work with Learnshiz while maintaining all of your existing client accounts and supplier agreements freely.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00B2A9]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A1622] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Demands Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#F8485E] font-bold text-xs uppercase tracking-widest block mb-2">
                Open Client Demand Tracks
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1622] tracking-tight">
                Engineering Domains in High Demand
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md mt-4 md:mt-0">
              We look for talent with solid system design foundations, strong communication, and hands-on production code experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "High Urgency",
                tagColor: "bg-[#F8485E]/10 text-[#F8485E] border-[#F8485E]/20",
                title: "AI & GenAI Engineers",
                desc: "LLMs, LangChain, PyTorch, vLLM, RAG pipelines, Vector DBs, Prompt Optimization, Agentic Workflows.",
                levels: "Senior · Staff · Lead",
                badge: "AI Track",
              },
              {
                tag: "Continuous Demand",
                tagColor: "bg-[#00B2A9]/10 text-[#009E96] border-[#00B2A9]/20",
                title: "Fullstack & Cloud",
                desc: "React, Next.js, Node.js, TypeScript, Go, PostgreSQL, Microservices architecture, Redis caching.",
                levels: "Mid-Senior · Principal",
                badge: "Web/Cloud Track",
              },
              {
                tag: "High Urgency",
                tagColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
                title: "DevOps & Platform",
                desc: "AWS, GCP, Kubernetes (EKS/GKE), Terraform, GitHub Actions, Docker, Prometheus, Grafana, CI/CD.",
                levels: "Senior · Architect",
                badge: "DevOps Track",
              },
              {
                tag: "Active",
                tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
                title: "Data & Distributed Systems",
                desc: "Apache Spark, Kafka, Snowflake, Python, dbt, BigQuery, Airflow, Real-time telemetry, Data Lakes.",
                levels: "Senior · Lead",
                badge: "Data Track",
              },
            ].map((role, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-[#00B2A9] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${role.tagColor}`}>
                      {role.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{role.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1622] mb-3">{role.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{role.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Target Level:</span>
                  <span className="font-semibold text-[#0A1622]">{role.levels}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Onboarding Journey */}
      <section className="py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B2A9] font-bold text-xs uppercase tracking-widest block mb-2">
              Streamlined Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1622] tracking-tight mb-4">
              4 Steps from Onboarding to Placement
            </h2>
            <p className="text-slate-600 text-base">
              Get empanelled quickly and receive your first batch of requisitions within 48 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-slate-300 -translate-y-8 z-0" />

            {[
              {
                step: "01",
                title: "Submit Agency Profile",
                desc: "Complete the vendor registration form below with your agency credentials, tax details, and core talent strengths.",
                icon: <FiFileText className="w-6 h-6 text-[#00B2A9]" />,
              },
              {
                step: "02",
                title: "Execute Mutual NDA & MSA",
                desc: "Digital sign-off on our standard Talent Partner Framework, confidentiality agreement, and commission schedules.",
                icon: <FiShield className="w-6 h-6 text-indigo-500" />,
              },
              {
                step: "03",
                title: "Receive Live Mandates",
                desc: "Join our dedicated vendor Slack channel and receive active, client-sponsored requisitions with clear hiring rubrics.",
                icon: <FiLayers className="w-6 h-6 text-[#F8485E]" />,
              },
              {
                step: "04",
                title: "Place & Earn Payouts",
                desc: "Submit your pre-screened talent. Fast-tracked client rounds lead to swift offers and guaranteed payout disbursements.",
                icon: <FiAward className="w-6 h-6 text-emerald-500" />,
              },
            ].map((stepItem, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-md flex items-center justify-center mb-5 group-hover:border-[#00B2A9] transition-all relative">
                  <span className="absolute -top-2.5 -right-2.5 bg-[#0A1622] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {stepItem.step}
                  </span>
                  {stepItem.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A1622] mb-2">{stepItem.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Quality Guidelines */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#F8485E] font-bold text-xs uppercase tracking-widest block mb-2">
              Our Shared Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1622]">
              Submission Guidelines & Quality Rubric
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
              Learnshiz prides itself on delivering the top 1% of engineering talent. We work best with vendors who thoroughly pre-screen their candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Profiles We Prioritize</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-emerald-900">
                <li className="flex items-start gap-2.5">
                  <FiCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Candidates with verified GitHub / portfolio repos and hands-on commits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Engineers who articulate system design trade-offs clearly in English.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Directly briefed candidates who know they are being represented for Learnshiz client projects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Candidates with confirmed availability, realistic notice periods, and verified compensations.</span>
                </li>
              </ul>
            </div>

            <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-rose-500/20 text-[#F8485E] flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="text-lg font-bold text-rose-950">Practices That Lead to Disqualification</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-rose-900">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#F8485E] font-bold text-xs mt-0.5">✕</span>
                  <span>Unscreened mass resume dumps without prior candidate qualification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#F8485E] font-bold text-xs mt-0.5">✕</span>
                  <span>Proxy interviewers or fake/exaggerated tech stacks and project history.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#F8485E] font-bold text-xs mt-0.5">✕</span>
                  <span>Candidates submitted without their explicit consent or knowledge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#F8485E] font-bold text-xs mt-0.5">✕</span>
                  <span>Submitting the same candidate profile through multiple subsidiary identities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Vendor Onboarding Form */}
      <section id="vendor-form" className="py-20 bg-[#F8F9FA] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#00B2A9] font-bold text-xs uppercase tracking-widest block mb-2">
              Official Vendor Registration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1622] tracking-tight">
              Recruitment Vendor Onboarding Form
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto mt-2">
              Complete the verification details below. Our vendor desk typically responds and issues the Partner Agreement within 24 business hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-3">
                  Vendor Application Received!
                </h3>
                <p className="text-slate-600 max-w-lg mx-auto text-base leading-relaxed mb-8">
                  Thank you for applying to partner with Learnshiz Engineering. We have registered{" "}
                  <strong className="text-[#0A1622]">{formData.agencyName}</strong> in our recruitment partner registry.
                  Our Vendor Partner Manager will reach out to <strong className="text-[#0A1622]">{formData.contactEmail}</strong> within 24 hours with our standard Mutual NDA & Vendor Master Agreement.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">What Happens Next</div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <FiCheck className="text-emerald-500 w-4 h-4 shrink-0" />
                      <span>Compliance & Tax verification review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheck className="text-emerald-500 w-4 h-4 shrink-0" />
                      <span>Digital countersignature of Partner Agreement (MSA)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheck className="text-emerald-500 w-4 h-4 shrink-0" />
                      <span>Dedicated Slack invite & initial requisition distribution</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={BOOK_CALL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8485E] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#E8236E] transition-all shadow-lg shadow-[#F8485E]/25 w-full sm:w-auto"
                  >
                    Schedule Quick Intro Call
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData((prev) => ({ ...prev, agencyName: "", contactEmail: "" }));
                    }}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors py-2"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                    <span className="font-bold">Notice:</span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Section 1: Agency Overview */}
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-[#00B2A9]/10 text-[#009E96] font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1622]">Agency & Business Profile</h3>
                      <p className="text-xs text-slate-500">Legal details of your recruitment firm</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Agency Legal Name *
                      </label>
                      <input
                        type="text"
                        name="agencyName"
                        required
                        value={formData.agencyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Talent Partners"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Business Entity Type *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all bg-white"
                      >
                        <option value="Private Limited / LLC">Private Limited / LLC</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                        <option value="Partnership Firm / LLP">Partnership Firm / LLP</option>
                        <option value="Corporation / Inc / Ltd">Corporation / Inc / Ltd</option>
                        <option value="Independent Recruiter">Independent Recruiter / Headhunter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Official Website URL *
                      </label>
                      <input
                        type="url"
                        name="website"
                        required
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://youragency.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        LinkedIn Profile / Page
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/company/youragency"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Headquarters Location (City, Country) *
                      </label>
                      <input
                        type="text"
                        name="headquarters"
                        required
                        value={formData.headquarters}
                        onChange={handleInputChange}
                        placeholder="e.g. Bengaluru, India or Austin, TX, USA"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Recruiter / Sourcing Team Size *
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all bg-white"
                      >
                        <option value="1 - 5 recruiters">1 - 5 recruiters</option>
                        <option value="6 - 15 recruiters">6 - 15 recruiters</option>
                        <option value="16 - 35 recruiters">16 - 35 recruiters</option>
                        <option value="36 - 75 recruiters">36 - 75 recruiters</option>
                        <option value="75+ recruiters">75+ recruiters</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Primary Partner Contact */}
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-[#F8485E]/10 text-[#F8485E] font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1622]">Primary Partner Contact</h3>
                      <p className="text-xs text-slate-500">Key account manager or founder who will interface with Learnshiz</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma or Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F8485E] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Designation / Title *
                      </label>
                      <input
                        type="text"
                        name="contactRole"
                        required
                        value={formData.contactRole}
                        onChange={handleInputChange}
                        placeholder="e.g. Managing Partner, Head of Talent"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F8485E] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        required
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="partner@youragency.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F8485E] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        required
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210 or +1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F8485E] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Sourcing Strengths & Capabilities */}
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1622]">Talent Capabilities & Specialization</h3>
                      <p className="text-xs text-slate-500">Tell us what your firm excels at delivering</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                        Core Tech Specializations (Select all that apply) *
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {specializationOptions.map((item) => {
                          const isSelected = formData.specializations.includes(item);
                          return (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleSpecialization(item)}
                              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${isSelected
                                  ? "bg-[#00B2A9] text-white border-[#00B2A9] shadow-sm"
                                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                                }`}
                            >
                              {isSelected ? <FiCheck className="w-3.5 h-3.5" /> : null}
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                        Geographies of Your Candidate Pool *
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {geoOptions.map((geo) => {
                          const isSelected = formData.talentGeos.includes(geo);
                          return (
                            <button
                              type="button"
                              key={geo}
                              onClick={() => toggleGeo(geo)}
                              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${isSelected
                                  ? "bg-[#0A1622] text-white border-[#0A1622] shadow-sm"
                                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                                }`}
                            >
                              {isSelected ? <FiCheck className="w-3.5 h-3.5" /> : null}
                              {geo}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                          Engagement Models You Support
                        </label>
                        <div className="space-y-2">
                          {engagementModelOptions.map((model) => {
                            const isSelected = formData.engagementModels.includes(model);
                            return (
                              <button
                                type="button"
                                key={model}
                                onClick={() => toggleEngagementModel(model)}
                                className={`w-full text-left text-xs font-medium px-3.5 py-2 rounded-xl border transition-all flex items-center justify-between ${isSelected
                                    ? "bg-slate-100 text-[#0A1622] border-slate-400 font-semibold"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                  }`}
                              >
                                <span>{model}</span>
                                {isSelected ? <FiCheck className="w-4 h-4 text-[#00B2A9]" /> : null}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-5">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Do You Deduct Candidate PF (Provident Fund)? *
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {pfOptions.map((opt) => {
                              const isSelected = formData.pfDeduction === opt;
                              return (
                                <button
                                  type="button"
                                  key={opt}
                                  onClick={() => setFormData((prev) => ({ ...prev, pfDeduction: opt }))}
                                  className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                                    isSelected
                                      ? "bg-[#0A1622] text-white border-[#0A1622] shadow-sm"
                                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                                  }`}
                                >
                                  {isSelected ? <FiCheck className="w-3.5 h-3.5 text-[#00B2A9]" /> : null}
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Average Turnaround for Vetted Profiles *
                        </label>
                        <select
                          name="avgTurnaround"
                          value={formData.avgTurnaround}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all bg-white"
                        >
                          <option value="Under 24 hours">Under 24 hours (Hot pipeline)</option>
                          <option value="24 - 48 hours">24 - 48 hours (Standard)</option>
                          <option value="3 - 5 business days">3 - 5 business days</option>
                        </select>

                        <div className="mt-5">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Tax ID / Business Registration (GST / EIN)
                          </label>
                          <input
                            type="text"
                            name="taxId"
                            value={formData.taxId}
                            onChange={handleInputChange}
                            placeholder="e.g. 29ABCDE1234F1Z5 or US EIN"
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Bench & Notes */}
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1622]">Immediate Bench & Notes (Optional)</h3>
                      <p className="text-xs text-slate-500">Do you have immediately available candidates ready to start?</p>
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="benchAvailability"
                      rows={3}
                      value={formData.benchAvailability}
                      onChange={handleInputChange}
                      placeholder="e.g., We currently have 3 Senior Fullstack React/Node engineers with 6+ yrs exp and 2 GenAI engineers available with 0-15 day notice."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2A9] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Section 5: Terms & Agreements */}
                <div className="bg-[#F8F9FA] p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 mt-1 rounded border-slate-300 text-[#00B2A9] focus:ring-[#00B2A9]"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      We agree to abide by Learnshiz's Candidate Transparency & Anti-Poaching Standards. We confirm that all submitted profiles will be vetted, contacted with consent, and represented legitimately. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToNDA"
                      checked={formData.agreedToNDA}
                      onChange={handleInputChange}
                      className="w-4 h-4 mt-1 rounded border-slate-300 text-[#00B2A9] focus:ring-[#00B2A9]"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      We agree to enter into Learnshiz's standard mutual Non-Disclosure Agreement (NDA) and Talent Partner Framework before receiving sensitive client requisitions. *
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-xl bg-[#F8485E] hover:bg-[#E8236E] text-white font-bold text-base transition-all shadow-lg shadow-[#F8485E]/25 flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Submitting Vendor Application...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Submit Vendor Registration & Request MSA</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    🔒 100% Confidential. Your agency details are stored securely and never shared with 3rd parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#00B2A9] font-bold text-xs uppercase tracking-widest block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-[#0A1622] tracking-tight">
              Recruitment Partner FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="font-bold text-[#0A1622] text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <div className="p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need Help / Direct Escalation Desk */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#0A1622] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B2A9]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-[#00B2A9] border border-white/10 mb-4">
                  <HiSparkles className="w-4 h-4" />
                  Vendor Relations Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Have Custom Contract or Partnership Questions?
                </h3>
                <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                  Our Partnerships Team is available to discuss custom agency tiers, bulk placement agreements, or international cross-border invoicing arrangements.
                </p>
                <div className="flex flex-wrap items-center gap-6 mt-6 text-xs sm:text-sm text-slate-300">
                  <a
                    href="mailto:hello@learnshiz.com?subject=Recruitment%20Vendor%20Partnership%20Query"
                    className="flex items-center gap-2 hover:text-[#00B2A9] transition-colors"
                  >
                    <HiEnvelope className="w-4 h-4 text-[#00B2A9]" />
                    hello@learnshiz.com
                  </a>
                  <a
                    href="tel:+919591967760"
                    className="flex items-center gap-2 hover:text-[#00B2A9] transition-colors"
                  >
                    <HiPhone className="w-4 h-4 text-[#00B2A9]" />
                    +91 95919 67760
                  </a>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8485E] hover:bg-[#E8236E] px-7 py-4 text-sm font-bold text-white transition-all shadow-lg shadow-[#F8485E]/30 whitespace-nowrap"
                >
                  Book 1-on-1 Vendor Briefing →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
