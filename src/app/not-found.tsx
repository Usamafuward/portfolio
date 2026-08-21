"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import VerticalBackground from "@/components/VerticalBackground";
import { FaExclamationTriangle, FaHome, FaCompass } from "react-icons/fa";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export default function NotFound() {
  return (
    <>
      <VerticalBackground word="404 ERROR" />
      <div className="container mx-auto px-6 md:px-8 min-h-[85vh] flex items-center justify-center relative z-[1] pt-28 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center max-w-[800px] w-full"
        >
          {/* System Warning Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 border border-primary/40 bg-primary/10 text-primary font-mono text-[0.85rem] tracking-[2px] mb-6 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
          >
            <FaExclamationTriangle className="text-primary animate-pulse" />
            <span>// SYS.ERR: 404_SECTOR_NOT_FOUND</span>
          </motion.div>

          {/* Giant Cyberpunk 404 Display */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <h1 className="text-[6rem] sm:text-[9rem] md:text-[11rem] font-black leading-none text-transparent [-webkit-text-stroke:3px_var(--primary)] select-none font-['Arial_Black',-apple-system,sans-serif] tracking-[-3px] drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/10 text-[6rem] sm:text-[9rem] md:text-[11rem] font-black leading-none font-['Arial_Black',-apple-system,sans-serif] tracking-[-3px] blur-[1px]">
                404
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] font-black text-white uppercase font-display tracking-[-1px] mb-4"
          >
            SIGNAL <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">LOST</span> IN THE MATRIX
          </motion.h2>

          {/* Terminal Diagnostics Box */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[620px] mb-10 p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]"
          >
            <div className="bg-[#0a0c0e]/95 p-6 md:p-8 text-left font-mono text-[0.85rem] md:text-[0.95rem] [clip-path:polygon(0_0,calc(100%-19px)_0,100%_19px,100%_100%,19px_100%,0_calc(100%-19px))] flex flex-col gap-2">
              <p className="text-gray-400">
                <span className="text-primary font-bold">&gt; STATUS:</span> 404_RESOURCE_UNAVAILABLE
              </p>
              <p className="text-gray-400">
                <span className="text-primary font-bold">&gt; DIAGNOSTIC:</span> The target pathway or file was corrupted, relocated, or purged from memory banks.
              </p>
              <p className="text-gray-400">
                <span className="text-primary font-bold">&gt; PROTOCOL:</span> Reroute navigation back to operational sectors.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/"
                className="cyan-button flex items-center gap-3 no-underline py-4 px-8"
              >
                <FaHome size={18} />
                <span>RETURN TO BASE</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-transparent text-primary border border-primary/50 py-4 px-8 font-mono font-bold text-[0.95rem] tracking-[2px] transition-colors duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] no-underline"
              >
                <FaCompass size={18} />
                <span>EXPLORE PROJECTS</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
