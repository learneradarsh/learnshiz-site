import React from "react";
import {
  HiMiniSquares2X2,
  HiMiniCpuChip,
  HiCloud,
  HiMiniCircleStack,
  HiMiniWrenchScrewdriver,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

const capabilities = [
  {
    title: "Product Engineering",
    Icon: HiMiniSquares2X2,
    color: "blue",
    items: ["SaaS Platforms", "Enterprise Applications", "Marketplace Development", "CRM & ERP Systems", "Workflow Automation"],
  },
  {
    title: "AI Engineering",
    Icon: HiMiniCpuChip,
    color: "purple",
    items: ["LLM Applications", "AI Agents & RAG Systems", "MCP Integrations", "AI Automation", "Enterprise AI Solutions"],
  },
  {
    title: "Cloud Engineering",
    Icon: HiCloud,
    color: "cyan",
    items: ["AWS · Azure · GCP", "Serverless Architecture", "Kubernetes & Docker", "Terraform & IaC", "Cost Optimization"],
  },
  {
    title: "Data Engineering",
    Icon: HiMiniCircleStack,
    color: "emerald",
    items: ["ETL Pipelines", "Data Lakes & Warehousing", "Analytics Platforms", "Apache Spark & Kafka", "Airflow Orchestration"],
  },
  {
    title: "DevOps",
    Icon: HiMiniWrenchScrewdriver,
    color: "orange",
    items: ["CI/CD Pipelines", "Monitoring & Observability", "Kubernetes Operations", "GitHub Actions & Jenkins", "Security & Compliance"],
  },
  {
    title: "Mobile Engineering",
    Icon: HiDevicePhoneMobile,
    color: "pink",
    items: ["Flutter", "React Native", "Native Android", "Native iOS"],
  },
];

const colorClasses = {
  blue:    { icon: "text-blue-400",    iconBg: "bg-blue-500/10 border-blue-500/20",    dot: "bg-blue-400/70" },
  purple:  { icon: "text-purple-400",  iconBg: "bg-purple-500/10 border-purple-500/20",  dot: "bg-purple-400/70" },
  cyan:    { icon: "text-cyan-400",    iconBg: "bg-cyan-500/10 border-cyan-500/20",    dot: "bg-cyan-400/70" },
  emerald: { icon: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", dot: "bg-emerald-400/70" },
  orange:  { icon: "text-orange-400",  iconBg: "bg-orange-500/10 border-orange-500/20",  dot: "bg-orange-400/70" },
  pink:    { icon: "text-pink-400",    iconBg: "bg-pink-500/10 border-pink-500/20",    dot: "bg-pink-400/70" },
};

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Engineering Expertise
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Your team covers every layer — from product to cloud to AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap) => {
            const c = colorClasses[cap.color];
            return (
              <div
                key={cap.title}
                className="group bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${c.iconBg} ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                  <cap.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-4">{cap.title}</h3>
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
