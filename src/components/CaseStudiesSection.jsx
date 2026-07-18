import React from "react";
import { HiMiniArrowTopRightOnSquare, HiMiniCheckCircle, HiMiniCpuChip, HiMiniServerStack } from "react-icons/hi2";

import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#00B2A9] text-xs font-semibold px-4 py-2 rounded-full mb-5 shadow-sm">
            Proven Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1622] mb-5 tracking-tight">
            Engineering that drives{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8485E] via-[#FF6B81] to-[#00B2A9]">
              Business Outcomes
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just write code — we architect scalable solutions that solve complex domain problems. Explore how our engineering translates to measurable impact.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.title} 
              to={`/case-studies/${study.slug}`}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 hover:border-[#00B2A9] hover:shadow-xl transition-all duration-300 group flex flex-col block"
            >
              {/* Title & Link */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A1622] mb-2 group-hover:text-[#00B2A9] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#F8485E] font-semibold text-sm">
                    {study.subtitle}
                  </p>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-[#00B2A9] group-hover:bg-[#00B2A9]/10 transition-colors">
                  <HiMiniArrowTopRightOnSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
                {study.description}
              </p>

              <div className="mt-auto grid sm:grid-cols-2 gap-8">
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiMiniServerStack className="w-4 h-4 text-[#00B2A9]" />
                    <h4 className="text-[#0A1622] font-semibold text-sm uppercase tracking-wide">
                      Architecture
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.architecture.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiMiniCpuChip className="w-4 h-4 text-[#F8485E]" />
                    <h4 className="text-[#0A1622] font-semibold text-sm uppercase tracking-wide">
                      Business Outcomes
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {study.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <HiMiniCheckCircle className="w-4 h-4 text-[#00B2A9] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Ready to architect your next big outcome?
          </p>
          <a
            href="https://cal.com/learnshiz-techies-ll1gn1/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A1622] hover:bg-[#F8485E] px-8 py-4 text-sm font-bold text-white transition-all shadow-lg hover:shadow-[#F8485E]/25"
          >
            Discuss Your Engineering Needs →
          </a>
        </div>

      </div>
    </section>
  );
}
