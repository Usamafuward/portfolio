"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import VerticalBackground from "@/components/VerticalBackground";
import { 
  portfolioData, 
  getProjectLinks, 
  categorizeProjectLinks, 
  ProjectLink 
} from "@/constants/portfolioData";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  FaSearch, 
  FaTimes, 
  FaExternalLinkAlt, 
  FaCode, 
  FaGithub, 
  FaGlobe, 
  FaServer, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaUser,
  FaChevronDown,
  FaMobileAlt
} from "react-icons/fa";

function getLinkIcon(link: ProjectLink) {
  const type = (link.type || "").toLowerCase();
  const label = link.label.toLowerCase();
  const url = link.url.toLowerCase();

  // All repository buttons -> specific sub-icons or GitHub logo
  if (
    type === "frontend-repo" ||
    type === "backend-repo" ||
    type === "user-repo" ||
    type === "admin-repo" ||
    type === "mobile-repo" ||
    type === "github" ||
    label.includes("repo") ||
    label.includes("git") ||
    url.includes("github.com") ||
    url.includes("gitlab.com")
  ) {
    if (label.includes("mobile") || type === "mobile-repo" || type === "mobile") {
      return <FaMobileAlt size={12} className="shrink-0" />;
    }
    if (label.includes("backend") || type === "backend-repo" || type === "backend") {
      return <FaServer size={12} className="shrink-0" />;
    }
    if (label.includes("admin") || type === "admin-repo") {
      return <FaShieldAlt size={12} className="shrink-0" />;
    }
    if (label.includes("user") || type === "user-repo") {
      return <FaUser size={12} className="shrink-0" />;
    }
    if (label.includes("frontend") || type === "frontend-repo" || type === "frontend" || label.includes("web")) {
      return <FaLaptopCode size={12} className="shrink-0" />;
    }
    return <FaGithub size={13} className="shrink-0" />;
  }

  // Admin Site
  if (type === "admin-site" || type === "admin" || label.includes("admin")) {
    return <FaShieldAlt size={12} className="shrink-0" />;
  }
  // User Site
  if (type === "user-site" || type === "user" || label.includes("user")) {
    return <FaUser size={12} className="shrink-0" />;
  }
  // Hosted Backend URL (not a repo)
  if (type === "backend" || label.includes("backend") || label.includes("api") || label.includes("server")) {
    return <FaServer size={12} className="shrink-0" />;
  }
  // Live Site / Demo / Web App
  if (type === "live-site" || type === "live" || type === "demo" || label.includes("live") || label.includes("site") || label.includes("web") || label.includes("app")) {
    return <FaGlobe size={12} className="shrink-0" />;
  }
  return <FaCode size={12} className="shrink-0" />;
}

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
  const [openMenu, setOpenMenu] = useState<{
    projectTitle: string;
    type: "hosted" | "code";
  } | null>(null);

  useEffect(() => {
    if (!openMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-project-links-menu]")) {
        setOpenMenu(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

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

                  <div className="relative mt-auto" data-project-links-menu>
                    {(() => {
                      const allLinks = getProjectLinks(project);
                      const { hosted, code } = categorizeProjectLinks(allLinks);

                      const isHostedMenuOpen =
                        openMenu?.projectTitle === project.title && openMenu?.type === "hosted";
                      const isCodeMenuOpen =
                        openMenu?.projectTitle === project.title && openMenu?.type === "code";

                      return (
                        <>
                          {/* Dropdown Popover Menu (when multiple live sites or multiple github repos exist) */}
                          <AnimatePresence>
                            {isHostedMenuOpen && hosted.length > 1 && (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="absolute bottom-full mb-2.5 left-0 right-0 z-30 bg-[#0a0d11]/98 border border-primary/50 backdrop-blur-xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(0,240,255,0.25)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                              >
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-primary/20 px-1">
                                  <span className="text-[0.7rem] font-mono font-bold text-primary tracking-[1px] uppercase flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    {"// SELECT LIVE SITE"}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setOpenMenu(null)}
                                    className="text-gray-400 hover:text-white p-1 transition-colors"
                                    aria-label="Close menu"
                                  >
                                    <FaTimes size={10} />
                                  </button>
                                </div>
                                <div className="space-y-1.5">
                                  {hosted.map((item, idx) => (
                                    <a
                                      key={idx}
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setOpenMenu(null)}
                                      className="flex items-center justify-between gap-3 px-3 py-2 bg-primary/10 hover:bg-primary border border-primary/30 text-primary hover:text-black font-mono font-bold text-[0.8rem] transition-all duration-200 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))] group/item cursor-pointer"
                                    >
                                      <span className="flex items-center gap-2 truncate">
                                        {getLinkIcon(item)}
                                        <span className="truncate uppercase">{item.label}</span>
                                      </span>
                                      <FaExternalLinkAlt size={10} className="shrink-0 opacity-70 group-hover/item:opacity-100" />
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {isCodeMenuOpen && code.length > 1 && (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="absolute bottom-full mb-2.5 left-0 right-0 z-30 bg-[#0a0d11]/98 border border-primary/50 backdrop-blur-xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(0,240,255,0.25)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                              >
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-primary/20 px-1">
                                  <span className="text-[0.7rem] font-mono font-bold text-primary tracking-[1px] uppercase flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    {"// SELECT REPOSITORY"}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setOpenMenu(null)}
                                    className="text-gray-400 hover:text-white p-1 transition-colors"
                                    aria-label="Close menu"
                                  >
                                    <FaTimes size={10} />
                                  </button>
                                </div>
                                <div className="space-y-1.5">
                                  {code.map((item, idx) => (
                                    <a
                                      key={idx}
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setOpenMenu(null)}
                                      className="flex items-center justify-between gap-3 px-3 py-2 bg-primary/10 hover:bg-primary border border-primary/30 text-primary hover:text-black font-mono font-bold text-[0.8rem] transition-all duration-200 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))] group/item cursor-pointer"
                                    >
                                      <span className="flex items-center gap-2 truncate">
                                        {getLinkIcon(item)}
                                        <span className="truncate uppercase">{item.label}</span>
                                      </span>
                                      <FaExternalLinkAlt size={10} className="shrink-0 opacity-70 group-hover/item:opacity-100" />
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* 2 Main Buttons Grid: LIVE SITE and GITHUB */}
                          <div className="grid grid-cols-2 gap-2.5">
                            {/* 1. LIVE SITE BUTTON */}
                            {hosted.length === 0 ? (
                              <div
                                className="w-full bg-white/[0.03] border border-white/10 text-gray-500 font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 cursor-not-allowed select-none opacity-40"
                                title="No live site deployment available"
                              >
                                <FaGlobe size={12} className="shrink-0" />
                                <span className="uppercase">LIVE SITE</span>
                              </div>
                            ) : hosted.length === 1 ? (
                              <motion.a
                                href={hosted[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open live site for ${project.title}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="w-full bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 group cursor-pointer"
                              >
                                <FaGlobe size={12} className="shrink-0" />
                                <span className="uppercase">LIVE SITE</span>
                                <FaExternalLinkAlt size={10} className="shrink-0" />
                              </motion.a>
                            ) : (
                              <motion.button
                                type="button"
                                onClick={() =>
                                  setOpenMenu(
                                    isHostedMenuOpen
                                      ? null
                                      : { projectTitle: project.title, type: "hosted" }
                                  )
                                }
                                aria-label={`Select live site for ${project.title} (${hosted.length} options)`}
                                aria-expanded={isHostedMenuOpen}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className={`w-full font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center transition-colors duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 group cursor-pointer ${
                                  isHostedMenuOpen
                                    ? "bg-primary text-black border border-primary shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                    : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black"
                                }`}
                              >
                                <FaGlobe size={12} className="shrink-0" />
                                <span className="uppercase">LIVE SITE</span>
                                <span
                                  className={`text-[0.65rem] px-1 py-0.2 rounded font-mono ${
                                    isHostedMenuOpen
                                      ? "bg-black text-primary font-bold"
                                      : "bg-primary/20 text-primary group-hover:bg-black/20 group-hover:text-black"
                                  }`}
                                >
                                  {hosted.length}
                                </span>
                                <FaChevronDown
                                  size={10}
                                  className={`shrink-0 transition-transform duration-200 ${
                                    isHostedMenuOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </motion.button>
                            )}

                            {/* 2. GITHUB BUTTON */}
                            {code.length === 0 ? (
                              <div
                                className="w-full bg-white/[0.03] border border-white/10 text-gray-500 font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 cursor-not-allowed select-none opacity-40"
                                title="No public repository available"
                              >
                                <FaGithub size={13} className="shrink-0" />
                                <span className="uppercase">GITHUB</span>
                              </div>
                            ) : code.length === 1 ? (
                              <motion.a
                                href={code[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open repository for ${project.title}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="w-full bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 group cursor-pointer"
                              >
                                <FaGithub size={13} className="shrink-0" />
                                <span className="uppercase">GITHUB</span>
                                <FaExternalLinkAlt size={10} className="shrink-0" />
                              </motion.a>
                            ) : (
                              <motion.button
                                type="button"
                                onClick={() =>
                                  setOpenMenu(
                                    isCodeMenuOpen
                                      ? null
                                      : { projectTitle: project.title, type: "code" }
                                  )
                                }
                                aria-label={`Select repository for ${project.title} (${code.length} options)`}
                                aria-expanded={isCodeMenuOpen}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className={`w-full font-mono font-bold tracking-[1.5px] text-[0.8rem] py-3 text-center transition-colors duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] flex items-center justify-center gap-1.5 group cursor-pointer ${
                                  isCodeMenuOpen
                                    ? "bg-primary text-black border border-primary shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                    : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black"
                                }`}
                              >
                                <FaGithub size={13} className="shrink-0" />
                                <span className="uppercase">GITHUB</span>
                                <span
                                  className={`text-[0.65rem] px-1 py-0.2 rounded font-mono ${
                                    isCodeMenuOpen
                                      ? "bg-black text-primary font-bold"
                                      : "bg-primary/20 text-primary group-hover:bg-black/20 group-hover:text-black"
                                  }`}
                                >
                                  {code.length}
                                </span>
                                <FaChevronDown
                                  size={10}
                                  className={`shrink-0 transition-transform duration-200 ${
                                    isCodeMenuOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </motion.button>
                            )}
                          </div>
                        </>
                      );
                    })()}
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
