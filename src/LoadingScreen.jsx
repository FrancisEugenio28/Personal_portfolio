import { AnimatePresence, animate, motion as Motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FILL_DURATION = 4.5;

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  // Move the drink from the base of the small, hand-drawn cup to its rim.
  const coffeeHeight = useTransform(progress, [0, 100], [0, 30]);
  const coffeeY = useTransform(progress, [0, 100], [89, 59]);

  useEffect(() => {
    let hideTimer;

    // Reveal the website only after the coffee has filled the cup.
    const fillAnimation = animate(progress, 100, {
      duration: shouldReduceMotion ? 0.2 : FILL_DURATION,
      ease: "easeInOut",
      onComplete: () => {
        hideTimer = window.setTimeout(() => setIsVisible(false), 250);
      },
    });

    return () => {
      fillAnimation.stop();
      window.clearTimeout(hideTimer);
    };
  }, [progress, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-bg px-6 text-x1st-primary"
          aria-live="polite"
          role="status"
        >
          <div className="flex flex-col items-center">
            <Motion.svg
              viewBox="0 0 180 150"
              className="h-[164px] w-[196px] overflow-visible md:h-[180px] md:w-[212px]"
              aria-hidden="true"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <defs>
                {/* Keep the animated drink inside the rounded-bottom cup shape. */}
                <clipPath id="coffee-cup-fill">
                  <path d="M61 50 H114 V63 Q114 88 89 88 H86 Q61 88 61 63 Z" />
                </clipPath>
                <linearGradient id="coffee-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9c7355" />
                  <stop offset="100%" stopColor="#875F43" />
                </linearGradient>
              </defs>

              {/* The coffee-coloured drink rises with a softly wobbling surface. */}
              <g clipPath="url(#coffee-cup-fill)">
                <Motion.rect x="57" width="61" fill="url(#coffee-gradient)" style={{ y: coffeeY, height: coffeeHeight }} />
                <Motion.path
                  d="M56 0 Q68 -5 80 0 T104 0 T128 0"
                  fill="none"
                  stroke="#c9a583"
                  strokeWidth="1.5"
                  style={{ y: coffeeY }}
                  animate={shouldReduceMotion ? undefined : { x: [0, -5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <ellipse cx="96" cy="55" rx="7" ry="3" fill="#d8bda3" opacity="0.35" />
              </g>

              {/* Deliberately simple outline, handle, and saucer-like baseline. */}
              <path d="M61 50 H114 V63 Q114 88 89 88 H86 Q61 88 61 63 Z" fill="none" stroke="var(--x1st-primary)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M114 58 H121 Q127 58 127 63 Q127 68 121 68 H114" fill="none" stroke="var(--x1st-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M57 92 H130" fill="none" stroke="var(--x1st-primary)" strokeWidth="2.5" strokeLinecap="round" />
              <text
                x="90"
                y="121"
                textAnchor="middle"
                fill="var(--x1st-primary)"
                fontSize="15"
                fontWeight="700"
                letterSpacing="-0.5"
              >
                Relax and have a great day!...
              </text>
            </Motion.svg>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};