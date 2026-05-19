import Link from "next/link";
import { BookOpen, GraduationCap, Target, Users, ArrowRight, CheckCircle2, ShieldCheck, Award, Presentation, MessageCircle, Sparkles, TrendingUp, PlayCircle, Star, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StudentSlider from "@/components/StudentSlider";

const programs = [
  { id: "class-9-10", icon: BookOpen, title: "Class 9 – 10", tag: "Foundation", desc: "NCERT mastery, Olympiad prep and test series to build the right habits early.", feats: ["NCERT Coverage", "Olympiad Prep", "Bi-weekly Tests", "Mentor Support"], accent: "#3b82f6" },
  { id: "class-11-12", icon: GraduationCap, title: "Class 11 – 12", tag: "Boards", desc: "Board syllabus with subjective practice and PYQ deep-dives for top percentile.", feats: ["Subjective Tests", "PYQ Analysis", "Revision Notes", "Practical Guide"], accent: "#8b5cf6" },
  { id: "iit-jee", icon: Target, title: "IIT-JEE", tag: "Engineering", desc: "Intensive PCM coaching with DPPs, AITS and mentorship for JEE Main & Advanced.", feats: ["DPPs & AITS", "Rank Booster", "Doubt Counter", "Mock Tests"], accent: "#f97316" },
  { id: "neet", icon: Users, title: "NEET (UG)", tag: "Medical", desc: "NCERT line-by-line with Biology mastery, speed-accuracy drills and OMR practice.", feats: ["NCERT Mastery", "OMR Practice", "Biology Focus", "Speed Drills"], accent: "#10b981" },
];

const advantages = [
  { icon: Presentation, title: "Expert Faculty", desc: "Educators who have produced single-digit AIR consistently for 10+ years.", accent: "#1E3A8A" },
  { icon: BookOpen, title: "Smart Study Material", desc: "Research-backed modules tailored to the latest exam patterns.", accent: "#8b5cf6" },
  { icon: Target, title: "Weekly Mock Tests", desc: "Real-exam simulation with analytics to pinpoint weak zones.", accent: "#f97316" },
  { icon: MessageCircle, title: "24/7 Doubt Solving", desc: "Dedicated offline counters and a premium app for instant resolution.", accent: "#10b981" },
  { icon: ShieldCheck, title: "Personal Mentorship", desc: "1-on-1 sessions to keep students motivated and on track.", accent: "#e11d48" },
  { icon: Award, title: "World-class Campus", desc: "AC classrooms, smart boards and a silent library for deep focus.", accent: "#0891b2" },
];

const plans = [
  { name: "Foundation", price: "₹30k", period: "/year", tag: "Class 9-10", popular: false, feats: ["Classroom Lectures", "Printed Study Material", "Bi-Weekly Tests", "Doubt Support"] },
  { name: "Target Achiever", price: "₹85k", period: "/year", tag: "JEE / NEET", popular: true, feats: ["Premium Classrooms", "AITS Test Series", "Personal Mentor", "Digital Library", "Advanced Modules", "Career Counseling"] },
  { name: "Crash Course", price: "₹15k", period: "/3 months", tag: "Revision", popular: false, feats: ["Intensive Revision", "Past Year Papers", "Major Test Series", "Tips & Tricks"] },
];

const stats = [
  { val: "500+", label: "Top Ranks" },
  { val: "10k+", label: "Students" },
  { val: "50+", label: "Faculty" },
  { val: "4.9★", label: "Rating" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#F8FAFC" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-0 lg:pt-40" style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#f0f9ff 50%,#fefce8 100%)", minHeight: "92vh" }}>
        {/* Blobs */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle,#FACC15 0%,#fde68a 45%,transparent 70%)" }} />
        <div className="absolute top-32 -left-16 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle,#1E3A8A,transparent)" }} />

        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pb-16">

          {/* Left */}
          <AnimatedSection animationType="slide-left" className="flex-1 space-y-7 py-8">
            <div className="section-badge"><Sparkles className="w-3.5 h-3.5" /> Admissions Open 2026-27</div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight" style={{ color: "#111827" }}>
              Your Path to<br />
              <span style={{ color: "#1E3A8A" }}>Top Ranks</span>{" "}
              <span style={{ background: "linear-gradient(135deg,#FACC15,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Starts Here</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-lg" style={{ color: "#4B5563" }}>
              Elite coaching for IIT-JEE, NEET & Board Exams. Proven methodology, expert faculty, and personalised attention — everything your child needs to excel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white shadow-lg hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg,#1E3A8A,#2563eb)" }}>
                Book Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#courses" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 hover:bg-white transition-all" style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}>
                <PlayCircle className="w-4 h-4" /> View Programs
              </Link>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t" style={{ borderColor: "#e5e7eb" }}>
              {stats.map(s => (
                <div key={s.val}>
                  <p className="text-2xl font-black" style={{ color: "#1E3A8A" }}>{s.val}</p>
                  <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — illustration */}
          <AnimatedSection animationType="slide-right" className="flex-1 relative flex justify-center items-end min-h-[380px] lg:min-h-[480px]">
            {/* Yellow blob background */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <svg viewBox="0 0 400 380" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,20 C310,10 390,80 380,200 C370,320 280,370 180,365 C80,360 10,290 20,180 C30,70 90,30 200,20 Z" fill="#FACC15" opacity="0.18" />
                <path d="M200,40 C300,30 370,90 360,200 C350,310 270,355 175,350 C80,345 20,280 30,178 C40,76 100,50 200,40 Z" fill="#1E3A8A" opacity="0.07" />
              </svg>
            </div>

            {/* Student photo */}
            <div className="relative z-10 w-72 h-80 lg:w-80 lg:h-[420px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                alt="Student at PrimeEdge Academy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="glass-card absolute top-8 -left-4 lg:-left-10 px-3 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg z-20">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#dcfce7" }}>
                <TrendingUp className="w-5 h-5" style={{ color: "#16a34a" }} />
              </div>
              <div>
                <p className="text-[11px] font-bold" style={{ color: "#111827" }}>Highest Selection</p>
                <p className="text-[9px]" style={{ color: "#6B7280" }}>Rate in City 2025</p>
              </div>
            </div>

            <div className="glass-card absolute bottom-6 -right-4 lg:-right-10 px-3 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg z-20">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/60?img=${i}`} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" />)}
              </div>
              <div>
                <p className="text-[11px] font-bold" style={{ color: "#111827" }}>10k+ Students</p>
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Wave */}
        <svg className="block w-full" style={{ height: 56, marginBottom: -2 }} viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,28 C480,56 960,0 1440,28 L1440,56 L0,56 Z" fill="#F8FAFC" />
        </svg>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="courses" className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <AnimatedSection animationType="fade-up" className="text-center mb-14">
            <div className="section-badge mx-auto mb-4">Our Programs</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#111827" }}>Expert Coaching Programs</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>Specialised batches built for strong foundations and top ranks.</p>
          </AnimatedSection>

          <AnimatedSection animationType="stagger" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map(p => (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col group/card" style={{ boxShadow: "0 2px 16px rgba(30,58,138,0.06)" }}>
                <div className="h-1" style={{ background: p.accent }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: p.accent + "18" }}>
                    <p.icon className="w-6 h-6" style={{ color: p.accent }} />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest mb-1" style={{ color: p.accent }}>{p.tag}</p>
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: "#111827" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#6B7280" }}>{p.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.feats.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#16a34a" }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/courses/${p.id}`}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold border-2 transition-all hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-white"
                    style={{ borderColor: p.accent, color: p.accent }}>
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <div className="text-center mt-10">
            <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm border-2 transition-all hover:text-white hover:border-[#1E3A8A] hover:bg-[#1E3A8A]" style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}>
              View All 7 Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20" style={{ background: "#EEF2FF" }}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <AnimatedSection animationType="fade-up" className="text-center mb-14">
            <div className="section-badge mx-auto mb-4">Why PrimeEdge</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#111827" }}>The PrimeEdge Advantage</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>We don't just teach — we build toppers.</p>
          </AnimatedSection>
          <AnimatedSection animationType="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex gap-5 border border-gray-100 card-hover" style={{ boxShadow: "0 2px 16px rgba(30,58,138,0.05)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 icon-ring" style={{ background: a.accent + "15" }}>
                  <a.icon className="w-7 h-7" style={{ color: a.accent }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "#111827" }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── TOP STUDENTS ── */}
      <StudentSlider />

      {/* ── PRICING ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <AnimatedSection animationType="fade-up" className="text-center mb-14">
            <div className="section-badge mx-auto mb-4">Pricing</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#111827" }}>Transparent Pricing Plans</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>Quality education with zero hidden costs.</p>
          </AnimatedSection>
          <AnimatedSection animationType="stagger" className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-8 flex flex-col ${plan.popular ? "plan-popular text-white" : "bg-white border border-gray-200"} ${plan.popular ? "lg:scale-105" : ""}`} style={!plan.popular ? { boxShadow: "0 2px 20px rgba(30,58,138,0.06)" } : { boxShadow: "0 24px 60px rgba(30,58,138,0.25)" }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md" style={{ background: "#FACC15", color: "#1E3A8A" }}>
                    ⭐ Most Popular
                  </div>
                )}
                <p className={`text-xs font-bold mb-1 ${plan.popular ? "text-yellow-300" : "text-[#1E3A8A]"}`}>{plan.tag}</p>
                <h3 className={`text-xl font-extrabold mb-4 ${plan.popular ? "text-white" : ""}`} style={!plan.popular ? { color: "#111827" } : {}}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-black ${plan.popular ? "text-white" : ""}`} style={!plan.popular ? { color: "#111827" } : {}}>{plan.price}</span>
                  <span className={`text-sm pb-1 ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.feats.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.popular ? "text-yellow-300" : "text-green-500"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${plan.popular ? "text-[#1E3A8A] hover:bg-yellow-100" : "border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"}`} style={plan.popular ? { background: "#FACC15" } : {}}>
                  {plan.popular ? "Book Admission" : "Enquire Now"}
                </Link>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section className="py-20" style={{ background: "#EEF2FF" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg,#1E3A8A,#1d4ed8)" }}>
            <div className="grid md:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 w-fit text-xs font-bold uppercase tracking-widest" style={{ background: "rgba(255,255,255,0.15)", color: "#fefce8" }}>
                  <Sparkles className="w-3.5 h-3.5" /> Free Counseling
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">Request a Free<br />Demo Class</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-8">Our expert counselors will guide you — completely free.</p>
                {["Free Career Counseling", "Scholarship Info", "Campus Tour"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-white text-sm font-medium mb-3">
                    <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="bg-white p-10 lg:p-12">
                <h3 className="text-lg font-extrabold mb-6" style={{ color: "#111827" }}>Fill in your details</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Student Name" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] transition" style={{ background: "#F8FAFC", color: "#111827" }} />
                  <input type="tel" placeholder="Mobile Number" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] transition" style={{ background: "#F8FAFC", color: "#111827" }} />
                  <select required defaultValue="" className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none appearance-none" style={{ borderColor: "#E5E7EB", background: "#F8FAFC", color: "#6B7280" }}>
                    <option value="" disabled>Select Interested Course</option>
                    <option>Class 9-10 Foundation</option>
                    <option>Class 11-12 Boards</option>
                    <option>IIT-JEE Preparation</option>
                    <option>NEET Preparation</option>
                    <option>Foundation Batch</option>
                    <option>Spoken English</option>
                    <option>Computer Classes</option>
                  </select>
                  <button type="submit" className="w-full py-4 rounded-xl font-bold text-base text-white transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "linear-gradient(135deg,#1E3A8A,#2563eb)" }}>
                    Request Callback Now →
                  </button>
                  <p className="text-center text-xs" style={{ color: "#9CA3AF" }}>🔒 We respect your privacy. No spam, ever.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-16" style={{ background: "#0f1f5c" }}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1E3A8A,#2563eb)" }}>
                  <span className="text-white font-black text-sm">PE</span>
                </div>
                <div>
                  <p className="text-white font-extrabold text-base leading-none">PrimeEdge</p>
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#FACC15" }}>Academy</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#93c5fd" }}>Shaping future doctors, engineers, and leaders since 2015. 500+ top ranks, 10k+ students.</p>
              {[
                { icon: MapPin, text: "123 Education Lane, New Delhi – 110001" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@primeedge.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm" style={{ color: "#93c5fd" }}>
                  <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#FACC15" }} />
                  <span>{text}</span>
                </div>
              ))}
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors" style={{ background: "#FACC15", color: "#1E3A8A" }}>
                Get Directions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden h-64 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923198218!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PrimeEdge Academy Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
