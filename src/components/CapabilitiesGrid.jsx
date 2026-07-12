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
    title: "AI Pods (Dedicated AI Teams)",
    Icon: HiMiniCpuChip,
    color: "blue",
    items: ["Turnkey AI/ML Engineering Squads", "LLM Applications & RAG Systems", "AI Agents & MCP Integrations", "Fine-Tuning & Evaluation Pipelines", "Enterprise GenAI Production Deployment"],
  },
  {
    title: "Product Engineering",
    Icon: HiMiniSquares2X2,
    color: "sky",
    items: ["SaaS Platforms & Web Apps", "Enterprise Mission-Critical Systems", "Marketplace Development", "CRM & ERP Custom Systems", "Complex Workflow Automation"],
  },
  {
    title: "Cloud Architecture & Infrastructure",
    Icon: HiCloud,
    color: "cyan",
    items: ["AWS · Azure · Google Cloud", "Serverless & Microservices", "Kubernetes & Docker Clusters", "Terraform & IaC Automation", "Performance & Cost Optimization"],
  },
  {
    title: "Data Engineering & Analytics",
    Icon: HiMiniCircleStack,
    color: "indigo",
    items: ["High-Throughput ETL Pipelines", "Data Lakes & Warehousing", "Real-time Analytics Platforms", "Apache Spark & Kafka Streams", "Airflow Orchestration"],
  },
  {
    title: "DevOps & Platform Engineering",
    Icon: HiMiniWrenchScrewdriver,
    color: "slate",
    items: ["Automated CI/CD Pipelines", "Comprehensive Observability", "Zero-Downtime Deployments", "GitHub Actions & Jenkins", "SOC2 & Enterprise Security"],
  },
  {
    title: "Mobile Engineering",
    Icon: HiDevicePhoneMobile,
    color: "zinc",
    items: ["Cross-Platform Mobile Apps", "Flutter & React Native", "Native Android Development", "Native iOS Development", "Enterprise Mobile Strategy"],
  },
];

const colorClasses = {
  blue:   { icon: "text-[#F8485E] font-bold", iconBg: "bg-[#F8485E]/15 border-[#F8485E]/30", dot: "bg-[#F8485E]" },
  sky:    { icon: "text-[#00B2A9] font-bold", iconBg: "bg-[#00B2A9]/15 border-[#00B2A9]/30", dot: "bg-[#00B2A9]" },
  cyan:   { icon: "text-[#F8485E] font-bold", iconBg: "bg-[#F8485E]/15 border-[#F8485E]/30", dot: "bg-[#F8485E]" },
  indigo: { icon: "text-[#00B2A9] font-bold", iconBg: "bg-[#00B2A9]/15 border-[#00B2A9]/30", dot: "bg-[#00B2A9]" },
  slate:  { icon: "text-[#F8485E] font-bold", iconBg: "bg-[#F8485E]/15 border-[#F8485E]/30", dot: "bg-[#F8485E]" },
  zinc:   { icon: "text-[#00B2A9] font-bold", iconBg: "bg-[#00B2A9]/15 border-[#00B2A9]/30", dot: "bg-[#00B2A9]" },
};

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Engineering Capabilities & Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-4 tracking-tight">
            Full-Spectrum{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Enterprise Expertise
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-normal">
            Dedicated cross-functional teams covering every layer — from AI Pods to cloud infrastructure and core product engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const c = colorClasses[cap.color];
            return (
              <div
                key={cap.title}
                className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-[#00B2A9] hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${c.iconBg} ${c.icon} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <cap.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1622] mb-4 group-hover:text-[#00B2A9] transition-colors">{cap.title}</h3>
                <ul className="space-y-2.5 flex-1">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600 font-normal">
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
