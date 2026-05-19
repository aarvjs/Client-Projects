"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "stagger";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const element = sectionRef.current;
      const childElements = element.children;

      const baseConfig = {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
        delay: delay,
      };

      if (animationType === "fade-up") {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          { ...baseConfig, opacity: 1, y: 0 }
        );
      } else if (animationType === "fade-in") {
        gsap.fromTo(
          element,
          { opacity: 0 },
          { ...baseConfig, opacity: 1 }
        );
      } else if (animationType === "slide-left") {
        gsap.fromTo(
          element,
          { opacity: 0, x: -50 },
          { ...baseConfig, opacity: 1, x: 0 }
        );
      } else if (animationType === "slide-right") {
        gsap.fromTo(
          element,
          { opacity: 0, x: 50 },
          { ...baseConfig, opacity: 1, x: 0 }
        );
      } else if (animationType === "stagger") {
        gsap.fromTo(
          childElements,
          { opacity: 0, y: 30 },
          {
            ...baseConfig,
            opacity: 1,
            y: 0,
            stagger: 0.15,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [animationType, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
