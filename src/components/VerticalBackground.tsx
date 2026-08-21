"use client";

import { motion, Variants } from "framer-motion";

interface VerticalBackgroundProps {
  word: string;
}

const letterContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function VerticalBackground({ word }: VerticalBackgroundProps) {
  const letters = word.toUpperCase().split("");

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterContainerVariants}
        className="flex flex-col items-center justify-start w-full pt-[15vh] gap-0"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-[35vw] md:text-[25vw] font-black leading-[0.8] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] select-none"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
