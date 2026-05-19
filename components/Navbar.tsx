"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const TICKER_TEXT = "🎓 Admissions Open 2026-27  ·  Free Demo Classes  ·  IIT-JEE  ·  NEET  ·  Board Exams  ·  Weekly Tests  ·  24/7 Doubt Support  ·  Expert Faculty  ·  500+ Top Ranks  ·  ";

const courseLinks = [
  { name: "Class 9-10",       desc: "Foundation & NTSE",     href: "/courses/class-9-10",      emoji: "📚" },
  { name: "Class 11-12",      desc: "Boards Excellence",      href: "/courses/class-11-12",     emoji: "🎓" },
  { name: "IIT-JEE",          desc: "Main + Advanced",        href: "/courses/iit-jee",          emoji: "⚗️" },
  { name: "NEET",             desc: "Medical Entrance",       href: "/courses/neet",             emoji: "🩺" },
  { name: "Foundation Batch", desc: "Class 7-8 Early Prep",  href: "/courses/foundation",       emoji: "🌱" },
  { name: "Spoken English",   desc: "Fluency & Personality", href: "/courses/spoken-english",   emoji: "🗣️" },
  { name: "Computer Classes", desc: "IT & Programming",      href: "/courses/computer-classes", emoji: "💻" },
];

const navLinks = [
  { name: "Home",    href: "/" },
  { name: "About",   href: "/about" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

/* Social SVGs — inline to avoid lucide missing exports */
const SocialFB = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0"/>
  </svg>
);
const SocialIG = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333 2.175 8.741 2.163 12 2.163M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324M12 16a4 4 0 110-8 4 4 0 010 8m6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881"/>
  </svg>
);
const SocialYT = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"/>
  </svg>
);
const SocialWA = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socials = [
  { Icon: SocialFB, href: "#", label: "Facebook" },
  { Icon: SocialIG, href: "#", label: "Instagram" },
  { Icon: SocialYT, href: "#", label: "YouTube" },
  { Icon: SocialWA, href: "https://wa.me/919876543210", label: "WhatsApp" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [mobileCourses, setMobileCourses] = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [dropOpen, setDropOpen]           = useState(false);
  const pathname                          = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 10;
      setScrolled(past);
      setTopBarVisible(!past);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMobileCourses(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">

      {/* ═══════════════════════════════════════
          TOP INFORMATION BAR
      ═══════════════════════════════════════ */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: topBarVisible ? "68px" : "0px", opacity: topBarVisible ? 1 : 0 }}
      >
        <div className="text-white h-17" style={{ background: "#0f1f5c", height: "68px" }}>
          <div className="max-w-screen-xl mx-auto h-full px-4 lg:px-8 flex items-center gap-4">

            {/* ── Static left text ── */}
            <div className="shrink-0 hidden md:flex flex-col leading-tight pr-4 border-r border-blue-700">
              <span className="text-[11px] font-extrabold text-yellow-300 uppercase tracking-wider whitespace-nowrap">
                Welcome to PrimeEdge Academy
              </span>
              <span className="text-[10px] text-blue-300 whitespace-nowrap">Best Coaching for Your Future</span>
            </div>

            {/* ── Seamless infinite ticker ── */}
            <div className="ticker-wrap flex-1 min-w-0" style={{ height: "20px" }}>
              <span className="ticker-track text-[11px] text-blue-200">
                {TICKER_TEXT}{TICKER_TEXT}
              </span>
            </div>

            {/* ── Right: contact card + social circles ── */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              {/* Contact card */}
              <div
                className="flex flex-col gap-1 rounded-xl px-3.5 py-2 border"
                style={{ background: "rgba(255,255,255,0.09)", borderColor: "rgba(255,255,255,0.18)" }}
              >
                <a href="tel:+919876543210"
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-yellow-300 transition-colors whitespace-nowrap">
                  <Phone className="w-3 h-3 text-yellow-400 shrink-0" />
                  +91 98765 43210
                </a>
                <a href="mailto:info@primeedge.com"
                  className="flex items-center gap-1.5 text-[11px] text-blue-300 hover:text-yellow-300 transition-colors whitespace-nowrap">
                  <Mail className="w-3 h-3 text-yellow-400 shrink-0" />
                  info@primeedge.com
                </a>
              </div>

              {/* Social icon circles */}
              <div className="flex items-center gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="flex items-center justify-center w-7 h-7 rounded-full text-white transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(250,204,21,0.35)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile: only show phone icon */}
            <div className="md:hidden ml-auto flex items-center gap-3">
              <a href="tel:+919876543210"
                className="flex items-center gap-1.5 text-[11px] font-semibold text-yellow-300">
                <Phone className="w-3.5 h-3.5" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAIN NAVBAR
      ═══════════════════════════════════════ */}
      <div className={`glass-nav transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md shrink-0"
                style={{ background: "linear-gradient(135deg,#1E3A8A,#2563eb)" }}>
                <span className="text-white font-black text-sm">PE</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-black text-[17px] tracking-tight" style={{ color: "#1E3A8A" }}>PrimeEdge</span>
                <span className="font-semibold text-sm" style={{ color: "#d97706" }}>Academy</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.slice(0, 2).map(l => (
                <Link key={l.name} href={l.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#1E3A8A] ${pathname === l.href ? "text-[#1E3A8A]" : "text-gray-600"}`}>
                  {l.name}
                </Link>
              ))}

              {/* Courses dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#1E3A8A] ${pathname.startsWith("/courses") ? "text-[#1E3A8A]" : "text-gray-600"}`}>
                  Courses
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Invisible bridge — prevents gap-triggered close */}
                {dropOpen && <div className="absolute top-full left-0 w-full h-3 bg-transparent" />}

                {dropOpen && (
                  <div className="dropdown-enter absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 z-50">
                    <div className="flex">
                      <div className="w-44 shrink-0 p-6 flex flex-col gap-4"
                        style={{ background: "linear-gradient(160deg,#1E3A8A,#1d4ed8)" }}>
                        <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm leading-snug">Expert Coaching Programs</p>
                          <p className="text-blue-200 text-xs mt-1.5 leading-relaxed">Top ranks. Proven results.</p>
                        </div>
                        <Link href="/courses" onClick={() => setDropOpen(false)}
                          className="mt-auto flex items-center gap-1.5 text-yellow-300 text-xs font-bold hover:text-yellow-200 transition-colors">
                          View All <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <div className="flex-1 p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Select Program</p>
                        <div className="grid grid-cols-2 gap-1">
                          {courseLinks.map(c => (
                            <Link key={c.name} href={c.href} onClick={() => setDropOpen(false)}
                              className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#EEF2FF] transition-colors group">
                              <span className="text-base shrink-0 mt-0.5">{c.emoji}</span>
                              <div>
                                <p className="text-gray-800 font-semibold text-xs group-hover:text-[#1E3A8A] transition-colors">{c.name}</p>
                                <p className="text-gray-400 text-[10px] mt-0.5">{c.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(2).map(l => (
                <Link key={l.name} href={l.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#1E3A8A] ${pathname === l.href ? "text-[#1E3A8A]" : "text-gray-600"}`}>
                  {l.name}
                </Link>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone circle */}
              <a href="tel:+919876543210" aria-label="Call us"
                className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-200 text-gray-500 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-blue-50 transition-all duration-200">
                <Phone className="w-4 h-4" />
              </a>

              {/* Book Demo — premium outlined */}
              <Link href="/contact"
                className="text-sm font-bold px-5 py-2.5 rounded-full border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-200">
                Book Demo
              </Link>

              {/* Free Class — yellow fill */}
              <Link href="/contact"
                className="text-sm font-bold px-5 py-2.5 rounded-full text-[#1E3A8A] shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                style={{ background: "linear-gradient(135deg,#FACC15,#f59e0b)" }}>
                Free Class →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div style={{ maxHeight: menuOpen ? "640px" : "0", overflow: "hidden", transition: "max-height .3s ease" }}>
          <div className="border-t border-gray-100 px-4 py-4 max-w-screen-xl mx-auto space-y-1">
            {navLinks.slice(0, 2).map(l => (
              <Link key={l.name} href={l.href} onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${pathname === l.href ? "text-[#1E3A8A] bg-[#EEF2FF]" : "text-gray-700 hover:bg-gray-50"}`}>
                {l.name}
              </Link>
            ))}

            <div>
              <button onClick={() => setMobileCourses(v => !v)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                Courses
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCourses ? "rotate-180 text-[#1E3A8A]" : ""}`} />
              </button>
              <div style={{ maxHeight: mobileCourses ? "400px" : "0", overflow: "hidden", transition: "max-height .3s ease" }}>
                <div className="grid grid-cols-2 gap-1.5 px-2 pb-3 pt-1">
                  {courseLinks.map(c => (
                    <Link key={c.name} href={c.href} onClick={() => setMenuOpen(false)}
                      className="flex flex-col p-3 rounded-xl bg-[#EEF2FF] hover:bg-blue-100 transition-colors">
                      <span className="text-base mb-1">{c.emoji}</span>
                      <span className="text-xs font-bold text-gray-800">{c.name}</span>
                      <span className="text-[10px] text-gray-500">{c.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map(l => (
              <Link key={l.name} href={l.href} onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${pathname === l.href ? "text-[#1E3A8A] bg-[#EEF2FF]" : "text-gray-700 hover:bg-gray-50"}`}>
                {l.name}
              </Link>
            ))}

            {/* Mobile contact row */}
            <div className="flex items-center gap-3 px-4 py-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <div className="flex items-center gap-2 ml-auto">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-all"
                    style={{ background: "#1E3A8A" }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-3 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold text-sm hover:bg-[#1E3A8A] hover:text-white transition-all">
                Book Demo
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-3 rounded-xl font-bold text-sm shadow-md text-[#1E3A8A]"
                style={{ background: "#FACC15" }}>
                Free Class →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
