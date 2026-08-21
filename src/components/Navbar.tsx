"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeCustom }}
      className="fixed top-0 left-0 w-full py-4 bg-[#080a0b]/85 backdrop-blur-md z-[100] border-b border-primary/20 shadow-[0_5px_20px_rgba(0,240,255,0.05)]"
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center gap-8">
        <div className="flex justify-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/"
              className="text-xl md:text-2xl font-black tracking-[3px] text-white font-display flex items-center no-underline z-20"
            >
              USAMA<span className="text-primary animate-blink ml-[2px]">_</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center gap-10 py-2 px-8 flex-1">
          <Link href="/" className="cyber-link">
            HOME
          </Link>
          <Link href="/projects" className="cyber-link">
            PROJECTS
          </Link>
          <Link href="/certifications" className="cyber-link">
            CERTIFICATIONS
          </Link>
          <Link href="/experiences" className="cyber-link">
            EXPERIENCES
          </Link>
        </div>

        <div className="hidden lg:flex justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/contact" className="cyber-button">
              [ LET'S CONNECT ]
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-primary text-2xl z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeCustom }}
            className="overflow-hidden absolute top-full left-0 w-full bg-[#0a0c0e]/95 backdrop-blur-md border-b border-primary/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] lg:hidden flex flex-col items-center py-8 gap-6"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="cyber-link text-lg">
              HOME
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="cyber-link text-lg">
              PROJECTS
            </Link>
            <Link
              href="/certifications"
              onClick={() => setIsOpen(false)}
              className="cyber-link text-lg"
            >
              CERTIFICATIONS
            </Link>
            <Link
              href="/experiences"
              onClick={() => setIsOpen(false)}
              className="cyber-link text-lg"
            >
              EXPERIENCES
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="cyber-button mt-4">
                [ LET'S CONNECT ]
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
