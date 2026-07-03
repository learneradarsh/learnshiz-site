import React, { useState } from "react";

const capabilities = [
  {
    title: "Product Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    color: "blue",
    items: ["SaaS Platforms", "Enterprise Applications", "Marketplace Development", "CRM Systems", "ERP Platforms", "Workflow Automation"],
  },
  {
    title: "AI Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "purple",
    items: ["LLM Applications", "AI Agents", "RAG Systems", "MCP Integrations", "Prompt Engineering", "AI Automation", "Knowledge Assistants", "Enterprise AI"],
  },
  {
    title: "Cloud Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "cyan",
    items: ["AWS · Azure · GCP", "Serverless Architecture", "Kubernetes", "Terraform & IaC", "Auto Scaling", "Cost Optimization"],
  },
  {
    title: "Data Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    color: "emerald",
    items: ["ETL Pipelines", "Data Lakes", "Data Warehousing", "Analytics Platforms", "Apache Spark", "Kafka · Airflow"],
  },
  {
    title: "DevOps",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "orange",
    items: ["CI/CD Pipelines", "Monitoring & Logging", "Kubernetes", "GitHub Actions", "Jenkins", "Observability & Security"],
  },
  {
    title: "Mobile Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "pink",
    items: ["Flutter", "React Native", "Native Android", "Native iOS"],
  },
];

const colorClasses = {
  blue:    { icon: "text-blue-400",    iconBg: "bg-blue-500/10 border-blue-500/20",    dot: "bg-blue-400" },
  purple:  { icon: "text-purple-400",  iconBg: "bg-purple-500/10 border-purple-500/20",  dot: "bg-purple-400" },
  cyan:    { icon: "text-cyan-400",    iconBg: "bg-cyan-500/10 border-cyan-500/20",    dot: "bg-cyan-400" },
  emerald: { icon: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", dot: "bg-emerald-400" },
  orange:  { icon: "text-orange-400",  iconBg: "bg-orange-500/10 border-orange-500/20",  dot: "bg-orange-400" },
  pink:    { icon: "text-pink-400",    iconBg: "bg-pink-500/10 border-pink-500/20",    dot: "bg-pink-400" },
};

export default function CapabilitiesGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="capabilities" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Engineering Expertise
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From product strategy to cloud infrastructure — your engineering team covers every layer of the stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap, i) => {
            const c = colorClasses[cap.color];
            return (
              <div
                key={cap.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${c.iconBg} ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                  {cap.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-4">{cap.title}</h3>

                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
