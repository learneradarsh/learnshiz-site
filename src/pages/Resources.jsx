import React, { useState } from "react";
import SEO from "../components/SEO";
import NewsletterBanner from "../components/NewsletterBanner";
import { HiMiniBookOpen, HiMiniSparkles, HiMiniClock, HiMiniArrowRight, HiMiniXMark, HiMiniCheckCircle } from "react-icons/hi2";

const articles = [
  {
    id: "without-cto",
    title: "How to Build an Engineering Team Without a CTO: A Founder's Guide to EaaS",
    category: "Founder Strategy",
    readTime: "7 min read",
    date: "July 2026",
    summary: "Why hiring a full-time $350k+ CTO too early can kill your Seed-stage runway — and how subscription engineering gives you turnkey technical governance from Day 1.",
    content: `
### The Early-Stage CTO Trap

For most non-technical or solo technical founders at the Seed and Series A stages, the conventional wisdom has always been: **"Hire a VP of Engineering or CTO immediately."**

However, in 2026, this advice is actively destroying startup runways. A senior CTO in the US or UK commands $350,000+ in base salary, plus significant equity (2-5%), and typically takes **4 to 6 months to recruit**. During those 6 months, your product velocity is zero, while competitors ship features every week.

### What is Engineering-as-a-Service (EaaS)?

Engineering-as-a-Service replaces the slow, expensive executive hiring cycle with a turnkey, subscription-based engineering organization. Instead of spending months interviewing or managing disjointed freelancers, you subscribe to an embedded team that includes:
* **Dedicated Full-Stack & AI Engineers** (working in your exact US/UK business hours)
* **Embedded Technical Leadership & Architect Guidance**
* **Automated CI/CD & Production QA Pipelines**

### 3 Rules for Scaling Without an In-House CTO

1. **Own Your Architecture & IP from Line One**: Never allow an agency or outsourced vendor to hold your codebase hostage. Insist on 100% IP ownership and NDA-first engagement.
2. **Demand 100% Time-Zone Alignment**: If your engineers are 12 hours away, simple bug fixes take 3 days of asynchronous Slack ping-pong. True product velocity requires synchronous collaboration during your working day.
3. **Embed AI-Native Workflows**: Modern EaaS teams leverage AI code generation, automated test scaffolding, and continuous security scanning to deliver **3–4× the output** of legacy development teams.
    `,
  },
  {
    id: "offshore-vs-aligned",
    title: "Offshore vs. Time-Zone Aligned Dev Teams: The Real Cost of 12-Hour Lags",
    category: "Product Velocity",
    readTime: "6 min read",
    date: "June 2026",
    summary: "Why traditional $20/hr offshore outsourcing ends up costing 3x more in refactoring, delayed feature releases, and asynchronous communication churn.",
    content: `
### The Hidden Cost of Asynchronous Development

When CFOs compare engineering models, they often make a fatal spreadsheet error: comparing hourly rates ($25/hr offshore vs. dedicated subscription engineering) without calculating **communication latency**.

In traditional offshore outsourcing (e.g., US/UK teams working with unmanaged contractors 10.5 to 12.5 hours ahead), the feedback loop is fundamentally broken:
* **Day 1 (9:00 AM EST)**: Product manager writes a Jira ticket or Slack message.
* **Day 1 (9:00 PM EST / Day 2 6:30 AM IST)**: Offshore developer starts working, hits an ambiguity in the API spec, and leaves a question on Slack.
* **Day 2 (9:00 AM EST)**: Product manager wakes up and clarifies the question.
* **Day 2 (9:00 PM EST)**: Developer resumes work.

A simple 30-minute clarification just consumed **48 hours of calendar time**.

### Why 100% Time-Zone Alignment Changes Everything

At Learnshiz Engineering, our dedicated squads are engineered specifically to eliminate this latency. By working in your exact business hours (EST, PST, BST, or CET):
* Engineers participate in your daily standups and sprint planning.
* Pair programming and real-time architectural discussions happen instantly via video or Slack huddles.
* Zero handover delays: when your product team ends the day, tested code is already merged and deployed to staging.
    `,
  },
  {
    id: "eaas-vs-outsourcing",
    title: "EaaS vs. Traditional Outsourcing: Why Subscription Engineering is Replacing Staff Augmentation",
    category: "Industry Trends",
    readTime: "8 min read",
    date: "May 2026",
    summary: "Discover why VC-backed scale-ups are abandoning hourly billing and staffing agencies in favor of integrated, AI-accelerated engineering subscriptions.",
    content: `
### The Flaws of Staff Augmentation

Traditional IT outsourcing and staff augmentation agencies operate on a misaligned business model: **they sell hours, not outcomes**. The longer a project takes, the more money the agency makes. This leads to common enterprise frustrations:
* **Bait and Switch**: Senior architects pitch you during discovery, but junior developers are assigned to write your production code.
* **Context Switching**: Contractors juggle 3 or 4 different client projects simultaneously.
* **No Product Ownership**: Developers simply execute tickets without challenging assumptions or suggesting better user experiences.

### The EaaS Subscription Advantage

Engineering-as-a-Service (EaaS) aligns incentives completely around product success and velocity:
1. **Predictable Monthly Subscription**: You pay a flat, transparent monthly fee. There are no hourly overage bills or surprise invoices.
2. **Dedicated, Embedded Squads**: Your engineers work exclusively on your product. They attend your demos, understand your users, and celebrate your milestones.
3. **Rolling Contract Flexibility**: As your startup scales or shifts focus, you can upgrade from Builder to Growth or scale down with a simple 30-day notice — zero multi-year vendor lock-in.
    `,
  },
];

export default function Resources() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <main className="pt-24 min-h-screen bg-white text-slate-600">
      <SEO
        title="Engineering Resources & Founder Guides | Learnshiz Engineering"
        description="Explore expert dispatches on EaaS, AI engineering velocity, time-zone alignment, and scaling startup product teams without hiring bloat."
        path="/resources"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider shadow-sm">
            <HiMiniBookOpen className="w-4 h-4" />
            The Engineering Dispatch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-5">
            Insights for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Modern Tech Leaders
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Proven strategies on EaaS subscription models, AI-native product velocity, and eliminating offshore communication delays.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-[#F8F9FA] border border-slate-200 rounded-3xl p-7 flex flex-col justify-between hover:border-[#00B2A9] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-4">
                  <span className="bg-white text-[#00B2A9] font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiMiniClock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1622] mb-3 group-hover:text-[#00B2A9] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#00B2A9] group-hover:text-[#008E87]">
                <span>Read Full Guide</span>
                <HiMiniArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Lead Capture Banner inside Resources */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1622] mb-3">
              Want We To Evaluate Your Product Architecture?
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Get a free 24-hour dedicated team blueprint and technical assessment from our Principal Architects — tailored to your exact roadmap.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "ResourcesPage" } }))}
              className="inline-flex items-center gap-2 bg-[#F8485E] hover:bg-[#E8236E] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#F8485E]/25 transition-all text-sm uppercase tracking-wider"
            >
              Get Free Assessment Blueprint →
            </button>
          </div>
        </div>
      </section>

      <NewsletterBanner />

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#0A1622]/60 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedArticle(null)}
          />
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col animate-scale-up">
            
            <div className="p-6 sm:p-8 border-b border-slate-200 flex items-center justify-between bg-white/90 sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#F8F9FA] text-[#00B2A9] font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-500">{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-full bg-[#F8F9FA] hover:bg-slate-200 flex items-center justify-center text-[#0A1622] transition-colors"
              >
                <HiMiniXMark className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1622] leading-tight">
                {selectedArticle.title}
              </h2>
              <div
                className="prose max-w-none space-y-4 prose-headings:text-[#0A1622] prose-headings:font-bold prose-a:text-[#00B2A9]"
                dangerouslySetInnerHTML={{
                  __html: selectedArticle.content
                    .replace(/### (.*)/g, '<h3 className="text-xl font-bold text-[#0A1622] mt-6 mb-3">$1</h3>')
                    .replace(/\* \*\*(.*?)\*\*: (.*)/g, '<li className="ml-4 list-disc mb-2"><strong className="text-[#00B2A9]">$1</strong>: $2</li>')
                    .replace(/1\. \*\*(.*?)\*\*: (.*)/g, '<li className="ml-4 list-decimal mb-2"><strong className="text-[#0A1622]">$1</strong>: $2</li>')
                    .replace(/\n\n/g, '<br />')
                }}
              />

              <div className="mt-10 pt-8 border-t border-slate-200 bg-[#F8F9FA] p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-[#0A1622] mb-2">Ready to put these EaaS principles into practice?</h4>
                <p className="text-xs text-slate-600 mb-4">Speak directly with our engineering leadership or get your custom team blueprint today.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      window.dispatchEvent(new CustomEvent("openTechnicalAssessment", { detail: { source: "ArticleModal" } }));
                    }}
                    className="bg-[#F8485E] hover:bg-[#E8236E] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-[#F8485E]/25"
                  >
                    Request Free Assessment →
                  </button>
                  <a
                    href="https://cal.com/learnshiz-techies-ll1gn1/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white hover:bg-slate-100 text-[#0A1622] font-semibold py-3 px-6 rounded-xl text-xs text-center border border-slate-200 shadow-sm transition-colors"
                  >
                    Book 30-Min Discovery Call
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
