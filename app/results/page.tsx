import AnimatedSection from "@/components/AnimatedSection";
import { Award, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "Results & Achievements | PrimeEdge Academy",
  description: "See the outstanding results achieved by PrimeEdge Academy students in IIT-JEE, NEET, and Board exams.",
};

const results = [
  { rank: "AIR 15", name: "Rahul Kumar", exam: "IIT-JEE Advanced", year: "2025", score: "99.98 %ile", img: "11" },
  { rank: "AIR 42", name: "Sneha Sharma", exam: "NEET (UG)", year: "2025", score: "710/720", img: "44" },
  { rank: "AIR 89", name: "Aman Gupta", exam: "IIT-JEE Main", year: "2025", score: "99.91 %ile", img: "33" },
  { rank: "State Rank 1", name: "Priya Singh", exam: "Class 12 Boards", year: "2025", score: "98.8%", img: "22" },
  { rank: "AIR 156", name: "Vikash Reddy", exam: "IIT-JEE Advanced", year: "2024", score: "99.85 %ile", img: "15" },
  { rank: "AIR 204", name: "Ananya Patel", exam: "NEET (UG)", year: "2024", score: "695/720", img: "26" },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-indigo-50 text-primary font-bold text-sm border border-indigo-100 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-secondary" />
            A Legacy of Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Our <span className="text-gradient">Hall of Fame</span></h1>
          <p className="text-xl text-slate-600">
            Consistent performance year after year. We are proud of our students who have set new benchmarks of success.
          </p>
        </AnimatedSection>

        <div className="mb-24">
          <AnimatedSection animationType="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-orange-400 text-white font-bold px-5 py-2 rounded-bl-2xl text-sm z-10 flex items-center shadow-md">
                  <Award className="h-4 w-4 mr-2" />
                  {result.rank}
                </div>
                
                <div className="flex flex-col items-center text-center mt-6">
                  <div className="w-28 h-28 bg-slate-200 rounded-full overflow-hidden border-[6px] border-indigo-50 shadow-lg mb-5 relative z-0 group-hover:scale-110 transition-transform">
                    <img src={`https://i.pravatar.cc/150?img=${result.img}`} alt={result.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{result.name}</h3>
                  <p className="text-primary font-bold text-sm mb-4">{result.exam} ({result.year})</p>
                  <div className="bg-slate-50 w-full py-4 rounded-2xl border border-slate-100 group-hover:border-primary/20 transition-colors">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Score Achieved</p>
                    <p className="text-xl font-black text-slate-800">{result.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection animationType="fade-up" className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Will You Be Next?</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Join the league of top scorers. Enroll in our upcoming batches and start your success story with PrimeEdge Academy.
          </p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-primary text-white px-10 py-5 rounded-full font-bold transition-all relative z-10 shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] transform hover:-translate-y-1 text-lg">
            Start Your Journey Today
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
