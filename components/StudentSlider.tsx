"use client";

import { useEffect, useRef } from "react";
import { Award, Star } from "lucide-react";

const topStudents = [
  { name: "Rahul Kumar", rank: "AIR 15", exam: "JEE Advanced 2025", image: "11", score: "99.98 %ile" },
  { name: "Sneha Sharma", rank: "AIR 42", exam: "NEET 2025", image: "44", score: "710 / 720" },
  { name: "Aman Gupta", rank: "AIR 89", exam: "JEE Main 2025", image: "33", score: "99.91 %ile" },
  { name: "Priya Singh", rank: "State 1st", exam: "Class 12 Boards", image: "22", score: "98.8%" },
  { name: "Vikash Reddy", rank: "AIR 156", exam: "JEE Advanced 2024", image: "15", score: "99.85 %ile" },
  { name: "Ananya Patel", rank: "AIR 204", exam: "NEET 2024", image: "26", score: "695 / 720" },
  { name: "Karan Mehta", rank: "State 3rd", exam: "Class 10 Boards", image: "59", score: "99.2%" },
  { name: "Neha Bhatia", rank: "AIR 312", exam: "JEE Main 2024", image: "47", score: "99.6 %ile" },
];

const examColors: Record<string, string> = {
  "JEE": "from-orange-500 to-red-500",
  "NEET": "from-emerald-500 to-teal-500",
  "Class": "from-violet-500 to-fuchsia-500",
};

function getColor(exam: string) {
  const key = Object.keys(examColors).find(k => exam.includes(k));
  return key ? examColors[key] : "from-indigo-500 to-violet-500";
}

export default function StudentSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;
    const step = () => {
      pos += 0.6;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const display = [...topStudents, ...topStudents];

  return (
    <section className="py-16 overflow-hidden relative" style={{ background: "#F8FAFC" }}>
      <div className="absolute inset-y-0 left-0 w-20 lg:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 lg:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-10 px-4">
        <div className="section-badge mx-auto mb-3">Proven Results</div>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-2" style={{ color: "#111827" }}>Our Shining Stars</h2>
        <p className="text-base" style={{ color: "#6B7280" }}>Consistent top ranks across all major examinations — year after year.</p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-hidden whitespace-nowrap px-6 py-4 hide-scrollbar select-none"
      >
        {display.map((s, i) => (
          <div
            key={i}
            className="inline-flex flex-col w-64 bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100 overflow-hidden flex-shrink-0 hover:-translate-y-1.5 transition-transform duration-200"
          >
            {/* rank banner */}
            <div className={`bg-gradient-to-r ${getColor(s.exam)} px-4 py-2 flex items-center justify-between`}>
              <div className="flex items-center gap-1.5 text-white">
                <Award className="w-3.5 h-3.5" />
                <span className="text-xs font-extrabold uppercase tracking-wide">{s.rank}</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-2.5 h-2.5 fill-white/80 text-white/80" />)}
              </div>
            </div>

            {/* body */}
            <div className="p-4 flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/120?img=${s.image}`}
                alt={s.name}
                className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 truncate">{s.name}</h4>
                <p className="text-xs text-indigo-600 font-semibold truncate">{s.exam}</p>
                <div className="mt-1 inline-flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full px-2 py-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span className="text-[10px] font-bold text-slate-700">{s.score}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
