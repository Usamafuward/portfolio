"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { FaAward, FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

const ORG_FILTERS = [
  "ALL",
  "META",
  "DEEPLEARNING.AI",
  "GOOGLE CLOUD",
  "IBM",
  "MICROSOFT",
] as const;

export default function CertificationsClient() {
  const [activeOrg, setActiveOrg] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCerts = useMemo(() => {
    return portfolioData.certifications.filter((cert) => {
      const certOrgUpper = cert.organization.toUpperCase();
      const matchesOrg =
        activeOrg === "ALL" ||
        (activeOrg === "DEEPLEARNING.AI"
          ? certOrgUpper.includes("DEEPLEARNING") || certOrgUpper.includes("STANFORD")
          : certOrgUpper.includes(activeOrg));

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesOrg;

      const matchesSearch =
        cert.title.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.organization.toLowerCase().includes(query);

      return matchesOrg && matchesSearch;
    });
  }, [activeOrg, searchQuery]);

  return (
    <>
      <VerticalBackground word="CERTIFICATIONS" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 relative z-[1]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-8 md:mb-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
            {"// SYS.LOG: CREDENTIALS_DATABASE"}
          </p>
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
            VERIFIED{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              CERTIFICATIONS
            </span>
          </h1>
          <div className="mt-4 md:mt-6 w-[60px] h-[4px] bg-primary/80"></div>
        </motion.div>

        {/* Filter Controls & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 p-4 bg-[#0a0c0e]/90 border border-primary/20 [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Org Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {ORG_FILTERS.map((org) => {
              const isSelected = activeOrg === org;
              return (
                <button
                  key={org}
                  onClick={() => setActiveOrg(org)}
                  className={`px-3.5 py-2 font-mono text-[0.8rem] font-bold tracking-[1px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] cursor-pointer ${
                    isSelected
                      ? "bg-primary text-[#080a0b] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/40 hover:text-white"
                  }`}
                >
                  {org}
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
              placeholder="Search credential title or topics..."
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
            {"// VERIFIED_ENTRIES: "}
            <strong className="text-primary">{filteredCerts.length}</strong>
            {" / "}{portfolioData.certifications.length}
          </span>
          {searchQuery && (
            <span className="text-gray-500">
              QUERY: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-30px)_0,100%_30px,100%_100%,30px_100%,0_calc(100%-30px))] overflow-hidden flex flex-col h-full hover:bg-primary/80 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                <div className="bg-[#0a0c0e]/95 w-full h-full p-6 flex flex-col [clip-path:polygon(0_0,calc(100%-29px)_0,100%_29px,100%_100%,29px_100%,0_calc(100%-29px))] relative z-[2] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[40%] before:h-[2px] before:bg-primary before:shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex-none flex items-center justify-center mb-6 w-[80px] h-[80px] mx-auto bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,transparent_70%)]"
                  >
                    {cert.logo ? (
                      <div className="w-[55px] h-[55px] relative">
                        <Image
                          src={cert.logo}
                          alt={`${cert.organization} logo`}
                          fill
                          unoptimized
                          sizes="55px"
                          className="object-contain rounded drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                        />
                      </div>
                    ) : (
                      <FaAward
                        size={50}
                        color="var(--primary)"
                        className="drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                      />
                    )}
                  </motion.div>

                  <div className="text-center mb-5 w-full px-2">
                    <h2 className="text-[1.2rem] font-black mb-2 text-white uppercase tracking-wide leading-tight">
                      {cert.title}
                    </h2>
                    <span className="text-[0.8rem] text-primary font-mono font-bold tracking-[1px] block break-all">
                      {"// "}{cert.organization.toUpperCase().replace(/\s+/g, "_")}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-[1.6] font-mono text-[0.85rem] flex-grow mb-6 text-center px-2">
                    &gt; {cert.description}
                  </p>

                  <div className="w-full mt-auto">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      href={cert.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify credential for ${cert.title} issued by ${cert.organization}`}
                      className="inline-flex items-center justify-center gap-2 text-center bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[1px] text-[0.85rem] px-6 py-3 transition-colors duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] w-full"
                    >
                      <span>VERIFY_CREDENTIAL</span>
                      <FaExternalLinkAlt size={11} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 border border-primary/20 bg-primary/5 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]"
          >
            <p className="text-primary font-mono text-lg font-bold mb-2">
              {"// SYS.WARN: NO_MATCHING_CREDENTIALS"}
            </p>
            <p className="text-gray-400 font-mono text-sm mb-6">
              No certifications found matching &ldquo;{searchQuery}&rdquo; under &ldquo;{activeOrg}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveOrg("ALL");
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
