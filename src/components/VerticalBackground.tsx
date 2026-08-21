"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

interface VerticalBackgroundProps {
  word: string;
}

const letterContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function VerticalBackground({ word }: VerticalBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const singleMeasureRef = useRef<HTMLDivElement>(null);
  // Default to 8 repetitions for immediate full-page coverage during SSR
  const [repeatCount, setRepeatCount] = useState<number>(8);

  useEffect(() => {
    const calculateRepeats = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement || containerRef.current;
      const totalHeight = Math.max(
        parent.scrollHeight,
        parent.clientHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      // Measure single cycle height if available, or calculate based on viewport
      let singleCycleHeight = singleMeasureRef.current?.getBoundingClientRect().height;
      if (!singleCycleHeight || singleCycleHeight === 0) {
        const vw = window.innerWidth;
        const letterSize = vw >= 768 ? vw * 0.25 : vw * 0.35;
        const letterHeight = letterSize * 0.8;
        const normalizedWord = word.trim() + " ";
        singleCycleHeight = normalizedWord.length * letterHeight;
      }

      if (singleCycleHeight > 0) {
        // Calculate needed repeats to cover down past the footer + 1 extra buffer
        const needed = Math.ceil(totalHeight / singleCycleHeight) + 1;
        setRepeatCount(Math.max(needed, 4));
      }
    };

    calculateRepeats();

    // Re-calculate on resize and when content size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateRepeats();
    });

    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }
    resizeObserver.observe(document.body);

    window.addEventListener("resize", calculateRepeats);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateRepeats);
    };
  }, [word]);

  // Cleanly format word with trailing space for continuous looping
  const cleanWord = word.trim() + " ";
  const singleCycleLetters = cleanWord.toUpperCase().split("");

  // Create array of repeated letters
  const repeatedLetters: string[] = [];
  for (let i = 0; i < repeatCount; i++) {
    repeatedLetters.push(...singleCycleLetters);
  }

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center"
      aria-hidden="true"
    >
      {/* Hidden single cycle for accurate height measurement */}
      <div
        ref={singleMeasureRef}
        className="absolute opacity-0 pointer-events-none flex flex-col items-center select-none"
        aria-hidden="true"
      >
        {singleCycleLetters.map((letter, index) => (
          <span
            key={`measure-${index}`}
            className="text-[35vw] md:text-[25vw] font-black leading-[0.8] select-none"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterContainerVariants}
        className="flex flex-col items-center justify-start w-full pt-[15vh] gap-0"
      >
        {repeatedLetters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-[35vw] md:text-[25vw] font-black leading-[0.8] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] select-none"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

