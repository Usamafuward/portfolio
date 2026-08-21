"use client";

import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { motion, Variants } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const leftSideVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

const rightSideVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeCustom },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Experiences() {
  return (
    <>
      <VerticalBackground word="EXPERIENCES" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 relative z-[1] overflow-x-clip">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-10 md:mb-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
            // SYS.LOG: CAREER_JOURNEY
          </p>
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
            WORK{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              EXPERIENCES
            </span>
          </h1>
          <div className="mt-4 md:mt-6 w-[60px] h-[4px] bg-primary/80"></div>
        </motion.div>

        <div className="flex flex-col gap-12 relative w-full lg:before:content-[''] lg:before:absolute lg:before:top-3 lg:before:left-[200px] lg:before:w-[2px] lg:before:h-full lg:before:bg-white/10">
          {portfolioData.experiences.map((exp, i) => {
            const themeVars = {
              "--node-color": "#00f0ff",
              "--node-glow": "rgba(0, 240, 255, 0.1)",
              "--box-border": "rgba(0, 240, 255, 0.3)",
              "--box-header": "#00f0ff",
            };
            const indexString = (i + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={rowVariants}
                className="relative flex items-stretch min-h-[150px]"
                style={themeVars as any}
              >
                {/* Left Side: Duration (desktop lg+ only) */}
                <motion.div
                  variants={leftSideVariants}
                  className="hidden lg:flex w-[200px] pr-10 pt-5 justify-start"
                >
                  <div className="border-l border-t border-b border-white/30 p-[10px_15px] flex flex-col items-start text-gray-300 font-mono text-[0.85rem] tracking-[1px]">
                    <span className="text-[var(--node-color)] font-bold mb-[5px]">DURATION</span>
                    <span className="leading-[1.4] whitespace-pre-wrap max-w-[140px] text-gray-400">
                      {exp.duration}
                    </span>
                  </div>
                </motion.div>

                {/* Center Node (desktop lg+ only) */}
                <motion.div
                  variants={nodeVariants}
                  className="hidden lg:flex absolute top-[30px] left-[192px] -translate-x-1/2 items-center justify-center w-[30px] h-[30px] z-[2]"
                >
                  <div className="absolute w-[24px] h-[24px] rounded-full border-2 opacity-80 border-[var(--node-color)]"></div>
                  <div className="absolute w-[12px] h-[12px] rounded-full bg-[var(--node-color)] shadow-[0_0_15px_var(--node-glow)]"></div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                  variants={rightSideVariants}
                  className="flex-1 flex relative pl-0"
                >
                  {/* Horizontal connector line (desktop lg+ only) */}
                  <div className="hidden lg:block absolute top-[45px] left-0 w-[30px] h-[1px] bg-[var(--node-color)] opacity-80"></div>

                  <div className="flex flex-col w-full md:flex-row md:gap-6 lg:pl-10 ">
                    <div className="flex flex-col mb-8 md:w-[250px] md:shrink-0 md:mb-0">
                      <div className="text-[5rem] font-black leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] font-['Arial_Black',-apple-system,sans-serif] tracking-[-2px] mb-2">
                        {indexString}
                      </div>
                      <h3 className="text-[1.4rem] font-extrabold text-white leading-[1.2] uppercase">
                        {exp.title.toUpperCase()}
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="flex-1 relative p-[1px] bg-[var(--box-border)] [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] transition-all duration-300 hover:bg-primary/70 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-default"
                    >
                      <div className="bg-[#0a0c0e]/95 p-6 h-full flex flex-col [clip-path:polygon(0_0,calc(100%-19px)_0,100%_19px,100%_100%,19px_100%,0_calc(100%-19px))] transition-colors duration-300 hover:bg-[#0a0c0e]/90">
                        <div className="text-[var(--box-header)] font-mono font-bold text-[0.9rem] tracking-[1px] mb-4">
                          // {exp.company.toUpperCase()}
                        </div>
                        <span className="block lg:hidden text-[var(--node-color)] font-mono text-[0.85rem] mb-4">
                          // {exp.duration.toUpperCase()}
                        </span>
                        <div className="flex flex-col gap-3">
                          {exp.description.split(". ").map((sentence, idx) => {
                            const trimmed = sentence.trim();
                            if (!trimmed) return null;
                            return (
                              <p
                                key={idx}
                                className="text-gray-400 font-mono text-[0.9rem] leading-[1.6] flex"
                              >
                                &gt; {trimmed}
                                {!trimmed.endsWith(".") ? "." : ""}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
