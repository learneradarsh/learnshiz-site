import React from "react";

const techStack = [
  {
    category: "Frontend",
    color: "blue",
    techs: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
  },
  {
    category: "Backend",
    color: "emerald",
    techs: ["Java", "Spring Boot", "Node.js", "Python", "Go"],
  },
  {
    category: "AI / ML",
    color: "purple",
    techs: ["OpenAI", "Claude", "Gemini", "LangChain", "CrewAI", "AutoGen", "MCP", "Vector DBs"],
  },
  {
    category: "Cloud",
    color: "cyan",
    techs: ["AWS", "Azure", "Google Cloud"],
  },
  {
    category: "Infrastructure",
    color: "orange",
    techs: ["Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions"],
  },
  {
    category: "Database",
    color: "pink",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch"],
  },
];

const colorPill = {
  blue:    "bg-blue-500/10 border-blue-500/20 text-blue-300",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  purple:  "bg-purple-500/10 border-purple-500/20 text-purple-300",
  cyan:    "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  orange:  "bg-orange-500/10 border-orange-500/20 text-orange-300",
  pink:    "bg-pink-500/10 border-pink-500/20 text-pink-300",
};

const colorHeader = {
  blue:    "text-blue-400",
  emerald: "text-emerald-400",
  purple:  "text-purple-400",
  cyan:    "text-cyan-400",
  orange:  "text-orange-400",
  pink:    "text-pink-400",
};

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Modern Stack.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Production-Ready.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Our engineers are proficient across every layer of the modern software stack —
            from frontend frameworks to AI models and cloud infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {techStack.map((group) => {
            const pillClass = colorPill[group.color];
            const headerClass = colorHeader[group.color];
            return (
              <div
                key={group.category}
                className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300"
              >
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${headerClass}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${pillClass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
