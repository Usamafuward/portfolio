"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaSearch, FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeCustom },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25 },
  },
};

const CATEGORIES = ["ALL", "AI/ML", "FULL-STACK", "BACKEND", "FRONTEND"] as const;

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        project.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: portfolioData.projects.length };
    portfolioData.projects.forEach((p) => {
      const cat = p.category.toUpperCase();
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      <VerticalBackground word="PROJECTS" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 relative z-[1]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-8 md:mb-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
            {"// SYS.LOG: PROJECT_REPOSITORY"}
          </p>
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
            KEY{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              PROJECTS
            </span>
          </h1>
          <div className="mt-4 md:mt-6 w-[60px] h-[4px] bg-primary/80"></div>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 p-4 bg-[#0a0c0e]/90 border border-primary/20 [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              const count = categoryCounts[cat] ?? 0;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 font-mono text-[0.8rem] font-bold tracking-[1px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-primary text-[#080a0b] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/40 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[0.7rem] px-1.5 py-0.2 rounded font-mono ${
                      isSelected ? "bg-[#080a0b]/30 text-[#080a0b]" : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/60 text-xs pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, name, or domain..."
              className="w-full bg-[#080a0b] border border-primary/30 text-white font-mono text-[0.85rem] pl-9 pr-9 py-2.5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] placeholder:text-gray-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-1"
                aria-label="Clear search"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 text-gray-400 font-mono text-xs">
          <span>
            {"// QUERY_STATUS: "}
            <strong className="text-primary">{filteredProjects.length}</strong>
            {" ARCHIVES LOCATED"}
          </span>
          {searchQuery && (
            <span className="text-gray-500">
              FILTER: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-30px)_0,100%_30px,100%_100%,30px_100%,0_calc(100%-30px))] overflow-hidden flex flex-col h-full hover:bg-primary/80 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                <div className="bg-[#0a0c0e]/95 w-full h-full p-6 flex flex-col [clip-path:polygon(0_0,calc(100%-29px)_0,100%_29px,100%_100%,29px_100%,0_calc(100%-29px))] relative z-[2] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[40%] before:h-[2px] before:bg-primary before:shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                  {/* Thumbnail */}
                  <div className="w-full h-[200px] bg-white/5 mb-6 overflow-hidden relative p-[1px] [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))]">
                    <div className="w-full h-full bg-[#0a0c0e] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] relative group">
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} - Project preview thumbnail`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                          <FaCode size={40} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0c0e] opacity-80 pointer-events-none"></div>
                    </div>
                  </div>

                  <span className="block text-primary font-mono text-[0.8rem] tracking-[1px] mb-2 font-bold break-all line-clamp-1">
                    {"// "}{project.category.toUpperCase().replace(/\s+/g, "_")}
                  </span>
                  <h2 className="text-white text-[1.35rem] font-black uppercase mb-3 leading-[1.2]">
                    {project.title}
                  </h2>
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
                      aria-label={`View source code and details for ${project.title}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-full bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[2px] text-[0.85rem] py-3 text-center transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-2"
                    >
                      <span>VIEW_PROJECT</span>
                      <FaExternalLinkAlt size={11} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 border border-primary/20 bg-primary/5 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]"
          >
            <p className="text-primary font-mono text-lg font-bold mb-2">
              {"// SYS.WARN: NO_MATCHING_SECTOR_DATA"}
            </p>
            <p className="text-gray-400 font-mono text-sm mb-6">
              No projects matched the search &ldquo;{searchQuery}&rdquo; within category &ldquo;{activeCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("ALL");
                setSearchQuery("");
              }}
              className="cyan-outline-button text-xs py-2 px-6"
            >
              RESET_FILTERS
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}
