import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen, Clock, Calendar, Users, Target, ShieldCheck,
  Sparkles, CheckCircle2, Phone, MessageCircle, ChevronRight,
  GraduationCap, Award, BookMarked, IndianRupee
} from "lucide-react";

const courseData: Record<string, {
  title: string; tag: string; tagColor: string; accent: string;
  shortDesc: string; desc: string;
  duration: string; frequency: string; batchSize: string; mode: string;
  timing: string[];
  subjects: string[];
  teachers: { name: string; exp: string; subject: string }[];
  books: string[];
  fees: { label: string; amount: string }[];
  learn: string[];
}> = {
  "class-9-10": {
    title: "Class 9 – 10 Foundation",
    tag: "Foundation",
    tagColor: "#3b82f6",
    accent: "#3b82f6",
    shortDesc: "NCERT mastery, Olympiad prep and test series to build the right habits early.",
    desc: "Our Foundation program for Class 9 and 10 is meticulously designed to build strong concepts in Mathematics and Science, ensuring students excel in school exams while laying the groundwork for NTSE, Olympiads, and future JEE/NEET prep.",
    duration: "1 or 2 Years",
    frequency: "4 Days / Week",
    batchSize: "Max 30 Students",
    mode: "Offline Classroom",
    timing: ["Morning Batch: 7:00 AM – 9:00 AM", "Evening Batch: 5:00 PM – 7:00 PM"],
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Mental Ability"],
    teachers: [
      { name: "Mr. Rajesh Kumar", exp: "12 Years Exp.", subject: "Mathematics" },
      { name: "Mrs. Priya Sharma", exp: "9 Years Exp.", subject: "Science" },
    ],
    books: ["NCERT Textbooks (All Subjects)", "PrimeEdge Foundation Modules", "Olympiad Workbook", "Bi-weekly Test Papers"],
    fees: [
      { label: "1-Year Program", amount: "₹30,000" },
      { label: "2-Year Program", amount: "₹55,000" },
    ],
    learn: [
      "In-depth NCERT coverage with advanced problem-solving",
      "Mental Ability and Logical Reasoning training",
      "Early exposure to competitive exam patterns",
      "Bi-weekly assessments with performance analytics",
    ],
  },
  "class-11-12": {
    title: "Class 11 – 12 Boards Excellence",
    tag: "Boards",
    tagColor: "#8b5cf6",
    accent: "#8b5cf6",
    shortDesc: "Board syllabus with subjective practice and PYQ deep-dives for top percentile.",
    desc: "Focused primarily on CBSE and State Board examinations, this course provides detailed subjective learning, practical guidance, and rigorous writing practice to ensure students score top percentiles in their board exams.",
    duration: "1 or 2 Years",
    frequency: "5 Days / Week",
    batchSize: "Max 40 Students",
    mode: "Offline Classroom",
    timing: ["Morning Batch: 7:00 AM – 9:00 AM", "Afternoon Batch: 2:00 PM – 4:00 PM"],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    teachers: [
      { name: "Mr. Anil Verma", exp: "15 Years Exp.", subject: "Physics" },
      { name: "Dr. Sunita Jain", exp: "11 Years Exp.", subject: "Chemistry" },
    ],
    books: ["NCERT Textbooks", "PrimeEdge Board Notes", "PYQ Compilation (10 Years)", "Subjective Test Booklets"],
    fees: [
      { label: "1-Year Program", amount: "₹35,000" },
      { label: "2-Year Program", amount: "₹65,000" },
    ],
    learn: [
      "Line-by-line NCERT theory and subjective question practice",
      "Previous year question paper analysis",
      "Practical exam guidance and viva prep",
      "Time management and answer presentation skills",
    ],
  },
  "iit-jee": {
    title: "IIT-JEE (Main + Advanced)",
    tag: "Engineering",
    tagColor: "#f97316",
    accent: "#f97316",
    shortDesc: "Intensive PCM coaching with DPPs, AITS and mentorship for JEE Main & Advanced.",
    desc: "The ultimate preparation program for engineering aspirants. With highly experienced faculty, intensive practice, and competitive peer groups, we prepare students to conquer one of the toughest exams in the world.",
    duration: "1, 2 or 3 Years",
    frequency: "6 Days / Week",
    batchSize: "Max 35 Students",
    mode: "Offline + Digital",
    timing: ["Morning Batch: 6:30 AM – 9:30 AM", "Evening Batch: 4:00 PM – 7:00 PM"],
    subjects: ["Physics", "Chemistry", "Mathematics"],
    teachers: [
      { name: "Mr. Vikram Singh", exp: "18 Years Exp., IIT Alumni", subject: "Mathematics" },
      { name: "Dr. Meena Gupta", exp: "14 Years Exp.", subject: "Chemistry" },
      { name: "Mr. Rohit Agarwal", exp: "10 Years Exp.", subject: "Physics" },
    ],
    books: ["PrimeEdge JEE Modules (3 Volumes)", "DPP Sheets (Daily)", "AITS Full Tests", "Previous Year JEE Papers"],
    fees: [
      { label: "1-Year Program", amount: "₹85,000" },
      { label: "2-Year Program", amount: "₹1,50,000" },
      { label: "3-Year Program", amount: "₹2,10,000" },
    ],
    learn: [
      "Advanced conceptual clarity in Physics, Chemistry, and Math",
      "Shortcut techniques and speed-building strategies",
      "Extensive exposure to multi-concept questions",
      "Stress management and exam temperament",
    ],
  },
  "neet": {
    title: "NEET (UG) Target Course",
    tag: "Medical",
    tagColor: "#10b981",
    accent: "#10b981",
    shortDesc: "NCERT line-by-line with Biology mastery, speed-accuracy drills and OMR practice.",
    desc: "A specialized program focusing heavily on Biology (Botany & Zoology) along with Physics and Chemistry. We ensure absolute mastery over NCERT and speed-accuracy balance required for NEET.",
    duration: "1, 2 or 3 Years",
    frequency: "6 Days / Week",
    batchSize: "Max 40 Students",
    mode: "Offline Classroom",
    timing: ["Morning Batch: 6:30 AM – 9:30 AM", "Evening Batch: 5:00 PM – 8:00 PM"],
    subjects: ["Biology (Botany & Zoology)", "Physics", "Chemistry"],
    teachers: [
      { name: "Dr. Anjali Mishra", exp: "16 Years Exp.", subject: "Biology" },
      { name: "Mr. Sanjay Patel", exp: "12 Years Exp.", subject: "Physics" },
    ],
    books: ["NCERT Biology (Class 11 & 12)", "PrimeEdge NEET Modules", "OMR Practice Sheets", "Mock Test Papers"],
    fees: [
      { label: "1-Year Program", amount: "₹80,000" },
      { label: "2-Year Program", amount: "₹1,45,000" },
    ],
    learn: [
      "NCERT mastery with emphasis on diagrams and exceptions",
      "Assertion-Reason and Match-the-following practice",
      "Memory retention techniques for Biology",
      "High-yield topic prioritization",
    ],
  },
  "foundation": {
    title: "Early Foundation Batch",
    tag: "Pre-Foundation",
    tagColor: "#6366f1",
    accent: "#6366f1",
    shortDesc: "Start early, stay ahead. Specialized grooming for Class 7-8 young minds.",
    desc: "A unique program for Class 7 and 8 students to develop logical thinking, mathematical aptitude, and scientific curiosity before they enter the high-pressure competitive environment.",
    duration: "1 Year",
    frequency: "3 Days / Week",
    batchSize: "Max 25 Students",
    mode: "Offline Classroom",
    timing: ["Evening Batch: 5:00 PM – 7:00 PM", "Weekend Batch: 9:00 AM – 12:00 PM"],
    subjects: ["Mathematics", "Science", "Mental Ability", "General Awareness"],
    teachers: [
      { name: "Ms. Kavita Rao", exp: "8 Years Exp.", subject: "Mathematics & Science" },
    ],
    books: ["Foundation Math Workbook", "Science Explorer Book", "Mental Ability Practice Pack"],
    fees: [
      { label: "1-Year Program", amount: "₹18,000" },
    ],
    learn: [
      "Basic mathematical and scientific concepts",
      "Analytical thinking and puzzle solving",
      "Communication and presentation skills",
      "General awareness and Olympiad basics",
    ],
  },
  "spoken-english": {
    title: "Spoken English & Personality",
    tag: "Skill Development",
    tagColor: "#ec4899",
    accent: "#ec4899",
    shortDesc: "Speak with confidence, communicate with impact. Fluency & personality building.",
    desc: "Designed for students and professionals looking to improve their fluency, vocabulary, and public speaking skills. Overcome hesitation and build a strong personality for interviews and group discussions.",
    duration: "3 Months",
    frequency: "5 Days / Week",
    batchSize: "Max 20 Students",
    mode: "Interactive Sessions",
    timing: ["Morning Batch: 8:00 AM – 9:30 AM", "Evening Batch: 6:00 PM – 7:30 PM"],
    subjects: ["Grammar", "Pronunciation", "Vocabulary", "Public Speaking", "Body Language"],
    teachers: [
      { name: "Ms. Nisha Thomas", exp: "10 Years Exp., Certified Trainer", subject: "English Communication" },
    ],
    books: ["PrimeEdge English Fluency Guide", "Vocabulary Builder (500 Words)", "Mock Interview Scripts"],
    fees: [
      { label: "3-Month Course", amount: "₹8,000" },
    ],
    learn: [
      "Grammar essentials and vocabulary building",
      "Pronunciation and accent neutralization",
      "Group discussions and debate practice",
      "Interview preparation and body language",
    ],
  },
  "computer-classes": {
    title: "Computer & IT Classes",
    tag: "Technical Skills",
    tagColor: "#475569",
    accent: "#475569",
    shortDesc: "Master digital skills — from MS Office to Web Development and Python basics.",
    desc: "From basic computer literacy to advanced coding logic. We offer comprehensive courses covering MS Office, Web Development basics, and introductory programming languages like Python and C++.",
    duration: "3 to 6 Months",
    frequency: "4 Days / Week",
    batchSize: "Max 15 Students",
    mode: "Computer Lab",
    timing: ["Morning Batch: 9:00 AM – 11:00 AM", "Evening Batch: 5:00 PM – 7:00 PM"],
    subjects: ["MS Office", "Web Development (HTML/CSS)", "Python Basics", "Internet & Networking"],
    teachers: [
      { name: "Mr. Deepak Mehta", exp: "7 Years Exp., MCA", subject: "Computer Science" },
    ],
    books: ["Computer Fundamentals Guide", "MS Office Workbook", "Python for Beginners", "HTML & CSS Starter Pack"],
    fees: [
      { label: "3-Month Course", amount: "₹10,000" },
      { label: "6-Month Course", amount: "₹18,000" },
    ],
    learn: [
      "Fundamentals of Computers and OS",
      "Proficiency in Word, Excel, and PowerPoint",
      "Logic building and algorithm design",
      "Basic programming in Python / HTML-CSS",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(courseData).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courseData[id];
  return {
    title: course ? `${course.title} | PrimeEdge Academy` : "Course Not Found",
    description: course?.shortDesc,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courseData[id];
  if (!course) notFound();

  const accent = course.accent;

  return (
    <div className="min-h-screen" style={{ background: "#F8FAFC" }}>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: `linear-gradient(135deg, #EEF2FF 0%, #f0f9ff 60%, #fefce8 100%)` }}>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${accent}22, transparent 70%)` }} />
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm mb-8" style={{ color: "#6B7280" }}>
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/courses" className="hover:text-[#1E3A8A] transition-colors font-medium">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: accent }} className="font-semibold">{course.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-extrabold uppercase tracking-widest" style={{ background: accent + "18", color: accent, border: `1px solid ${accent}33` }}>
                <Sparkles className="w-3.5 h-3.5" />
                {course.tag} Program
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#111827" }}>{course.title}</h1>
              <p className="text-lg leading-relaxed mb-6 max-w-xl" style={{ color: "#4B5563" }}>{course.shortDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all" style={{ background: `linear-gradient(135deg, #1E3A8A, #2563eb)` }}>
                  Enquire / Admit Now <ChevronRight className="w-4 h-4" />
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all" style={{ background: "#25D366" }}>
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="w-full lg:w-80 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
              <div className="p-1" style={{ background: `linear-gradient(135deg, ${accent}, #1E3A8A)` }} />
              <div className="p-6 space-y-4">
                {[
                  { icon: Clock, label: "Duration", value: course.duration },
                  { icon: Calendar, label: "Frequency", value: course.frequency },
                  { icon: Users, label: "Batch Size", value: course.batchSize },
                  { icon: BookOpen, label: "Mode", value: course.mode },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: accent + "15" }}>
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: "#9CA3AF" }}>{label}</p>
                      <p className="text-sm font-bold" style={{ color: "#111827" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left col */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold mb-4 flex items-center gap-3" style={{ color: "#111827" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + "15" }}>
                  <BookOpen className="w-5 h-5" style={{ color: accent }} />
                </div>
                Course Overview
              </h2>
              <p className="leading-relaxed" style={{ color: "#4B5563" }}>{course.desc}</p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3" style={{ color: "#111827" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + "15" }}>
                  <Target className="w-5 h-5" style={{ color: accent }} />
                </div>
                What Students Will Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.learn.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3" style={{ color: "#111827" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + "15" }}>
                  <GraduationCap className="w-5 h-5" style={{ color: accent }} />
                </div>
                Subjects Covered
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.subjects.map((s, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ background: accent + "10", color: accent, borderColor: accent + "30" }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Faculty */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3" style={{ color: "#111827" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + "15" }}>
                  <Award className="w-5 h-5" style={{ color: accent }} />
                </div>
                Expert Faculty
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.teachers.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: "#E5E7EB", background: "#F8FAFC" }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0" style={{ background: `linear-gradient(135deg, #1E3A8A, ${accent})` }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#111827" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: accent }}>{t.subject}</p>
                      <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Books */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3" style={{ color: "#111827" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + "15" }}>
                  <BookMarked className="w-5 h-5" style={{ color: accent }} />
                </div>
                Books & Study Material
              </h2>
              <ul className="space-y-2.5">
                {course.books.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            {/* Batch Timing */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold mb-4 flex items-center gap-2" style={{ color: "#111827" }}>
                <Calendar className="w-4 h-4" style={{ color: accent }} /> Batch Timings
              </h3>
              <div className="space-y-2">
                {course.timing.map((t, i) => (
                  <div key={i} className="p-3 rounded-xl text-sm font-medium" style={{ background: accent + "10", color: accent }}>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Fees */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold mb-4 flex items-center gap-2" style={{ color: "#111827" }}>
                <IndianRupee className="w-4 h-4" style={{ color: accent }} /> Fee Structure
              </h3>
              <div className="space-y-2">
                {course.fees.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl border" style={{ borderColor: "#E5E7EB" }}>
                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{f.label}</span>
                    <span className="text-sm font-extrabold" style={{ color: "#1E3A8A" }}>{f.amount}</span>
                  </div>
                ))}
                <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>* EMI options & scholarships available. Contact us for details.</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="rounded-2xl p-6 text-white" style={{ background: `linear-gradient(135deg, #1E3A8A, #1d4ed8)` }}>
              <h3 className="font-extrabold mb-4 flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-yellow-300" /> Program Highlights
              </h3>
              <ul className="space-y-2.5">
                {["Expert Faculty (10+ Yrs)", "Printed Study Modules", "Weekly Mock Tests", "Doubt Clearing Sessions", "Parent Progress Reports", "Personal Mentorship"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white text-center">
              <p className="text-sm font-bold mb-1" style={{ color: "#111827" }}>New Batch Starting Soon</p>
              <p className="text-xs mb-5" style={{ color: "#9CA3AF" }}>Limited seats available. Enroll now to secure your spot.</p>
              <Link href="/contact" className="block w-full py-3.5 rounded-xl font-bold text-white mb-3 text-sm hover:-translate-y-0.5 transition-all shadow-md" style={{ background: `linear-gradient(135deg, #1E3A8A, #2563eb)` }}>
                Book Free Demo Class
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 transition-all shadow-md" style={{ background: "#25D366" }}>
                <Phone className="w-4 h-4" /> Call / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
