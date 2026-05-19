"use client";

import { Phone } from "lucide-react";

export default function FloatingButton() {
  return (
    <a
      href="tel:+919876543210"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-primary text-white p-4 rounded-full shadow-[0_8px_30px_rgba(79,70,229,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(79,70,229,0.5)] z-50 flex items-center justify-center animate-[bounce_3s_infinite]"
      aria-label="Call us now"
    >
      <Phone size={26} className="fill-white" />
    </a>
  );
}
