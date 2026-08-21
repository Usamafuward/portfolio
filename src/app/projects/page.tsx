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

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeCustom },
  },
};

export default function Projects() {
  return (
    <>
      <VerticalBackground word="PROJECTS" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 relative z-[1]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-10 md:mb-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
            // SYS.LOG: PROJECT_REPOSITORY
          </p>
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
            KEY{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              PROJECTS
            </span>
          </h1>
          <div className="mt-4 md:mt-6 w-[60px] h-[4px] bg-primary/80"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-30px)_0,100%_30px,100%_100%,30px_100%,0_calc(100%-30px))] overflow-hidden flex flex-col h-full hover:bg-primary/80 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              <div className="bg-[#0a0c0e]/95 w-full h-full p-6 flex flex-col [clip-path:polygon(0_0,calc(100%-29px)_0,100%_29px,100%_100%,29px_100%,0_calc(100%-29px))] relative z-[2] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[40%] before:h-[2px] before:bg-primary before:shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                <div className="w-full h-[200px] bg-white/5 mb-6 overflow-hidden relative p-[1px] [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))]">
                  <div className="w-full h-full bg-[#0a0c0e] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] relative group">
                    {project.thumbnail &&
                    typeof project.thumbnail === "object" &&
                    project.thumbnail.src ? (
                      <img
                        src={project.thumbnail.src}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : typeof project.thumbnail === "string" ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0c0e] opacity-80"></div>
                  </div>
                </div>

                <span className="block text-primary font-mono text-[0.8rem] tracking-[1px] mb-2 font-bold break-all line-clamp-1">
                  // {project.category.toUpperCase().replace(/\s+/g, "_")}
                </span>
                <h3 className="text-white text-[1.4rem] font-black uppercase mb-3 leading-[1.2]">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-mono text-[0.85rem] leading-[1.6] mb-6 flex-1">
                  &gt; {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[0.75rem] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 [clip-path:polygon(0_0,calc(100%-5px)_0,100%_5px,100%_100%,5px_100%,0_calc(100%-5px))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <motion.a
                    href={project.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[2px] text-[0.85rem] py-3 text-center transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-2"
                  >
                    VIEW_PROJECT
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
