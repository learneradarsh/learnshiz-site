import React from "react";
import { HiMiniStar, HiMiniCheckBadge } from "react-icons/hi2";

export default function SocialProofBadges() {
  const platforms = [
    {
      name: "GoodFirms",
      rating: "5.0",
      stars: 5,
      badge: "Top EaaS & Custom Dev Company",
      color: "from-[#F8485E]/10 to-white border-[#F8485E]/30 text-[#F8485E]",
      verifiedText: "Verified Client Reviews",
    },
    {
      name: "Clutch",
      rating: "4.9",
      stars: 5,
      badge: "Top Software Developers 2025",
      color: "from-[#00B2A9]/10 to-white border-[#00B2A9]/30 text-[#00B2A9]",
      verifiedText: "Enterprise Leader",
    },
    {
      name: "G2",
      rating: "4.9",
      stars: 5,
      badge: "High Performer Spring 2026",
      color: "from-slate-50 to-white border-slate-300 text-slate-700",
      verifiedText: "Engineering-as-a-Service",
    },
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-center lg:text-left shrink-0">
            <HiMiniCheckBadge className="w-5 h-5 text-[#F8485E] shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0A1622] uppercase tracking-wider block">
                3rd-Party Validated
              </span>
              <span className="text-[11px] text-slate-600">
                Recognized across global tech directories
              </span>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`flex items-center gap-3 bg-gradient-to-r ${p.color} border rounded-2xl px-4 py-3 shadow-sm hover:scale-[1.02] transition-transform`}
              >
                <div className="flex flex-col items-center justify-center bg-[#F8F9FA] rounded-xl px-2.5 py-1.5 border border-slate-200 shrink-0 shadow-sm">
                  <span className="text-base font-extrabold text-[#0A1622] leading-none">
                    {p.rating}
                  </span>
                  <div className="flex text-[#F8485E] text-[9px] mt-0.5">
                    {[...Array(p.stars)].map((_, i) => (
                      <HiMiniStar key={i} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[#0A1622] truncate">{p.name}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded font-medium">
                      {p.verifiedText}
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 font-medium truncate mt-0.5">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
