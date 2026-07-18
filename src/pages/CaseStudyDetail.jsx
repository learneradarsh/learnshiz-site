import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  HiMiniArrowTopRightOnSquare, 
  HiMiniCheckCircle, 
  HiMiniUserGroup, 
  HiMiniServerStack, 
  HiMiniCpuChip 
} from "react-icons/hi2";
import { caseStudies } from "../data/caseStudies";
import SEO from "../components/SEO";

export default function CaseStudyDetail() {
  const { id } = useParams();
  
  const study = useMemo(() => {
    return caseStudies.find(s => s.slug === id);
  }, [id]);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <main className="pt-24 pb-20 bg-white text-slate-600 font-sans">
      <SEO
        title={`${study.title} Case Study | Learnshiz Engineering`}
        description={study.description}
        path={`/case-studies/${study.slug}`}
      />

      {/* Hero Section */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,178,169,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Engineering Case Study
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1622] tracking-tight mb-4">
            {study.title}
          </h1>
          <p className="text-[#F8485E] font-semibold text-lg md:text-xl mb-6">
            {study.subtitle}
          </p>
          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            {study.description}
          </p>
          {study.link !== "#" && (
            <a
              href={study.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all shadow-sm text-sm"
            >
              Visit Live Project <HiMiniArrowTopRightOnSquare className="w-4 h-4" />
            </a>
          )}
        </div>
      </section>

      {/* Metrics & Graph Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1622] mb-6">
                Engineering <span className="text-[#00B2A9]">Architecture</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {study.extendedDescription}
              </p>

              <div className="space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <HiMiniUserGroup className="w-5 h-5 text-[#F8485E]" />
                    <h3 className="text-[#0A1622] font-semibold">Engineering Team Deployed</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{study.teamSize}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <HiMiniServerStack className="w-5 h-5 text-[#00B2A9]" />
                    <h3 className="text-[#0A1622] font-semibold">Technology Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.architecture.map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content (Graph & Outcomes) */}
            <div>
              {/* Graph */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 mb-8">
                <h3 className="text-lg font-bold text-[#0A1622] mb-6 text-center">
                  {study.graphTitle}
                </h3>
                <div className="w-full h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={study.graphData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#0A1622', fontWeight: 600 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#F8485E" 
                        strokeWidth={4} 
                        dot={{ fill: '#00B2A9', strokeWidth: 2, r: 6 }} 
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <HiMiniCpuChip className="w-6 h-6 text-[#00B2A9]" />
                  <h3 className="text-xl font-bold text-[#0A1622]">Business Outcomes</h3>
                </div>
                <ul className="space-y-4">
                  {study.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 leading-relaxed">
                      <HiMiniCheckCircle className="w-5 h-5 text-[#F8485E] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0A1622] mb-4">Want similar results for your business?</h2>
        <p className="text-slate-600 mb-8">Deploy a complete, dedicated engineering team without the hiring overhead.</p>
        <a
          href="https://cal.com/learnshiz-techies-ll1gn1/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[#0A1622] hover:bg-[#F8485E] px-8 py-4 text-sm font-bold text-white transition-all shadow-lg hover:shadow-[#F8485E]/25"
        >
          Book a Discovery Call →
        </a>
      </section>

    </main>
  );
}
