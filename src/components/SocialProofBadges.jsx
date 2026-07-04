import React from "react";
import { HiMiniStar, HiMiniCheckBadge } from "react-icons/hi2";

export default function SocialProofBadges() {
  const platforms = [
    {
      name: "GoodFirms",
      rating: "5.0",
      stars: 5,
      badge: "Top EaaS & Custom Dev Company",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
      verifiedText: "Verified Client Reviews",
    },
    {
      name: "Clutch",
      rating: "4.9",
      stars: 5,
      badge: "Top Software Developers 2025",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
      verifiedText: "Enterprise Leader",
    },
    {
      name: "G2",
      rating: "4.9",
      stars: 5,
      badge: "High Performer Spring 2026",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400",
      verifiedText: "Engineering-as-a-Service",
    },
  ];

  return (
    <section className="py-8 bg-slate-950/80 border-b border-slate-800/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-center lg:text-left shrink-0">
            <HiMiniCheckBadge className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                3rd-Party Validated
              </span>
              <span className="text-[11px] text-slate-400">
                Recognized across global tech directories
              </span>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`flex items-center gap-3 bg-gradient-to-r ${p.color} border rounded-2xl px-4 py-3 backdrop-blur-sm shadow-sm hover:scale-[1.02] transition-transform`}
              >
                <div className="flex flex-col items-center justify-center bg-slate-950/80 rounded-xl px-2.5 py-1.5 border border-slate-800 shrink-0">
                  <span className="text-base font-extrabold text-white leading-none">
                    {p.rating}
                  </span>
                  <div className="flex text-amber-400 text-[9px] mt-0.5">
                    {[...Array(p.stars)].map((_, i) => (
                      <HiMiniStar key={i} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white truncate">{p.name}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-medium">
                      {p.verifiedText}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium truncate mt-0.5">
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
