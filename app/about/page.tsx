import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, BookOpen, Award, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | PrimeEdge Academy",
  description: "Learn more about PrimeEdge Academy, our mission, vision, and the expert faculty behind our students' success.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-indigo-50 text-primary font-bold text-sm border border-indigo-100 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-secondary" />
            Empowering Minds Since 2010
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">About <span className="text-gradient">PrimeEdge Academy</span></h1>
          <p className="text-xl text-slate-600">
            Dedicated to empowering students with the knowledge, skills, and confidence needed to excel in competitive exams and academic pursuits.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animationType="slide-left" className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </AnimatedSection>
          <AnimatedSection animationType="slide-right">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              To provide high-quality education through innovative teaching methodologies, personalized attention, and a supportive learning environment that fosters academic excellence and holistic development.
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be the most trusted and premier educational institution, shaping the future leaders and professionals of tomorrow by nurturing their talent today.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection animationType="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Expert Faculty", desc: "Top educators from premium institutes.", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
            { title: "Proven Track Record", desc: "Consistent top ranks every year.", icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
            { title: "Focused Approach", desc: "Targeted study materials and tests.", icon: Target, color: "text-rose-500", bg: "bg-rose-50" },
            { title: "Comprehensive Study", desc: "Well-researched curriculum design.", icon: BookOpen, color: "text-emerald-500", bg: "bg-emerald-50" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className={`${item.bg} w-20 h-20 rounded-2xl flex items-center justify-center ${item.color} mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}
