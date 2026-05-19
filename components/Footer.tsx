import Link from "next/link";
import { Globe, MessageCircle, Video, Users, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-slate-300 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center">
              <span className="bg-primary text-white rounded-lg p-1.5 mr-2 shadow-sm text-lg">PE</span>
              Prime<span className="text-primary">Edge</span>
            </Link>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed pr-4">
              Empowering students to achieve their dreams with expert guidance, 
              comprehensive study materials, and personalized mentorship.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Globe size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Video size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <MessageCircle size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Users size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Student Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Our Courses</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/courses#foundation" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Class 9th & 10th Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses#boards" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Class 11th & 12th Boards
                </Link>
              </li>
              <li>
                <Link href="/courses#jee" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  IIT-JEE Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses#neet" className="hover:text-primary transition-colors flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  NEET Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Contact Us</h3>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">123 Education Hub, Knowledge Park, City Center, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary shrink-0" />
                <span>info@primeedge.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PrimeEdge Academy. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50">
            Designed & Developed by <span className="text-white font-semibold">A Cube Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
