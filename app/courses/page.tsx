import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Courses | PrimeEdge Academy",
  description: "Explore our comprehensive coaching programs for Class 9-12, IIT-JEE, and NEET preparation.",
};

const courses = [
  {
    id: "class-9-10",
    title: "Class 9th & 10th Foundation",
    duration: "1 or 2 Years",
    target: "Board Exams & NTSE",
    features: ["NCERT Coverage", "Olympiad Prep", "Regular Tests", "Mental Ability"],
    color: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-700"
  },
  {
    id: "class-11-12",
    title: "Class 11th & 12th Boards",
    duration: "1 or 2 Years",
    target: "CBSE / State Boards",
    features: ["Subjective Test Series", "Practical Guidance", "Revision Notes", "Past Year Papers"],
    color: "bg-violet-500",
    badgeColor: "bg-violet-100 text-violet-700"
  },
  {
    id: "iit-jee",
    title: "IIT-JEE (Main + Advanced)",
    duration: "1, 2 or 3 Years",
    target: "Engineering Entrance",
    features: ["Advanced Problem Solving", "All India Test Series", "DPPs", "Doubt Counters"],
    color: "bg-orange-500",
    badgeColor: "bg-orange-100 text-orange-700"
  },
  {
    id: "neet",
    title: "NEET (UG)",
    duration: "1, 2 or 3 Years",
    target: "Medical Entrance",
    features: ["NCERT Line-by-Line", "Botany & Zoology Focus", "Mock Tests", "Speed & Accuracy Prep"],
    color: "bg-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-700"
  },
  {
    id: "foundation",
    title: "Early Foundation Batch",
    duration: "1 Year",
    target: "Pre-Foundation",
    features: ["Logical Thinking", "Basic Math & Science", "Interactive Learning", "Fun Experiments"],
    color: "bg-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-700"
  },
  {
    id: "spoken-english",
    title: "Spoken English & Personality",
    duration: "3 Months",
    target: "Skill Development",
    features: ["Fluency Building", "Public Speaking", "Interview Prep", "Body Language"],
    color: "bg-pink-500",
    badgeColor: "bg-pink-100 text-pink-700"
  },
  {
    id: "computer-classes",
    title: "Computer & IT Classes",
    duration: "3 to 6 Months",
    target: "Technical Skills",
    features: ["MS Office Basics", "Web Development", "Python Intro", "Practical Labs"],
    color: "bg-slate-700",
    badgeColor: "bg-slate-200 text-slate-800"
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-indigo-50 text-primary font-bold text-sm border border-indigo-100 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-secondary" />
            Premium Coaching Programs
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Explore Our <span className="text-gradient">Courses</span></h1>
          <p className="text-xl text-slate-600">
            Scientifically designed curriculum to cater to the specific needs of students aiming for excellence in various examinations.
          </p>
        </AnimatedSection>

        <AnimatedSection animationType="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} id={course.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all relative overflow-hidden group hover:-translate-y-1 flex flex-col">
              <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider ${course.badgeColor}`}>
                {course.target}
              </div>
              
              <div className="mt-4 mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-slate-900">{course.title}</h2>
              </div>
              <p className="text-slate-500 text-xs mb-6 flex items-center">
                <span className="font-bold text-slate-700 mr-2">Duration:</span> {course.duration}
              </p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={`/courses/${course.id}`} className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}
