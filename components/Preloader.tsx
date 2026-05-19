'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── tiny SVG icons ─────────────────────────────────────────────── */
const BookIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="8" y="6" width="36" height="46" rx="3" fill="#1E3A8A" stroke="#FACC15" strokeWidth="2.5" />
    <rect x="14" y="12" width="24" height="3" rx="1.5" fill="#FACC15" opacity="0.9" />
    <rect x="14" y="20" width="20" height="2.5" rx="1.25" fill="white" opacity="0.5" />
    <rect x="14" y="27" width="18" height="2.5" rx="1.25" fill="white" opacity="0.5" />
    <rect x="14" y="34" width="22" height="2.5" rx="1.25" fill="white" opacity="0.5" />
    {/* pencil */}
    <rect x="38" y="28" width="8" height="22" rx="2" transform="rotate(-30 38 28)" fill="#FACC15" />
    <polygon points="41,47 44,47 42.5,53" fill="#f97316" />
    <rect x="38" y="28" width="8" height="4" rx="1" transform="rotate(-30 38 28)" fill="#d97706" />
  </svg>
);

/* ─── Main Preloader ─────────────────────────────────────────────── */
export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Setting mounted to true on client avoids SSR hydration mismatches
    setMounted(true);

    // Animate progress 0 → 100 over ~1.4 s
    const step = 100 / 70; // 70 ticks × 20ms ≈ 1.4s
    let current = 0;
    const timer = setInterval(() => {
      // It's safe to use Math.random() here because this runs purely client-side
      current = Math.min(current + step + Math.random() * 0.5, 100);
      setProgress(Math.round(current));
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 300); // slight hold at 100%
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Prevent SSR rendering entirely to eliminate hydration errors completely
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="preloader-root"
          aria-hidden="true"
        >
          {/* Subtle background glow */}
          <div className="preloader-glow" />

          <motion.div
            className="preloader-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Minimal Icon */}
            <div className="preloader-icon-wrapper">
              <div className="preloader-icon">
                <BookIcon />
              </div>
              {/* Pulsing ring */}
              <motion.div
                className="preloader-pulse-ring"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Brand text */}
            <div className="preloader-text-wrapper">
              <h1 className="preloader-brand">
                Prime<span>Edge</span> Academy
              </h1>
              <p className="preloader-tagline">Excellence in Every Lesson</p>
            </div>

            {/* Minimal progress bar */}
            <div className="preloader-progress-container">
              <div className="preloader-bar-track">
                <motion.div
                  className="preloader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="preloader-percent">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
