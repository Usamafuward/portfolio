"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/constants/portfolioData";
import CtaSection from "./CtaSection";
import { motion, Variants } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCustom,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeCustom },
  },
};

export default function Footer() {
  const pathname = usePathname();
  const showCta = pathname !== "/contact";

  return (
    <>
      {showCta && <CtaSection />}
      <footer className="bg-[#0a0c0e]/95 border-t border-primary mt-8 pt-16 md:pt-20 pb-8 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.5),inset_0_2px_20px_rgba(0,240,255,0.05)] before:content-[''] before:absolute before:top-0 before:left-1/2 md:before:left-[12.5%] before:-translate-x-1/2 md:before:translate-x-0 before:w-[100px] before:h-[3px] before:bg-white before:shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={footerVariants}
          className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between gap-12 md:gap-8 flex-wrap"
        >
          <motion.div variants={columnVariants} className="w-full md:flex-1 text-center md:text-left">
            <h3 className="text-base font-mono font-bold tracking-[2px] mb-4 md:mb-6 text-primary">
              // ABOUT_ME
            </h3>
            <p className="text-gray-400 text-[0.95rem] leading-[1.6] tracking-[2px] font-mono font-bold uppercase mx-auto md:mx-0 max-w-[400px] md:max-w-none">
              {">"} A Computer Science Graduate, passionate about building intelligent systems and scalable software.
            </p>
          </motion.div>

          <motion.div variants={columnVariants} className="w-full md:flex-1 text-center md:text-left">
            <h3 className="text-base font-mono font-bold tracking-[2px] mb-4 md:mb-6 text-primary">
              // QUICK_LINKS
            </h3>
            <ul className="list-none p-0 grid grid-cols-2 gap-y-2 gap-x-4 max-w-[300px] mx-auto md:mx-0 md:justify-start">
              <li className="flex items-center justify-center md:justify-start">
                <Link href="/" className="cyber-link ">
                  HOME
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Link href="/experiences" className="cyber-link">
                  EXPERIENCES
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Link href="/projects" className="cyber-link">
                  PROJECTS
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Link href="/contact" className="cyber-link">
                  CONTACT
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start col-span-2 md:col-span-1">
                <Link href="/certifications" className="cyber-link">
                  CERTIFICATIONS
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={columnVariants} className="w-full md:flex-1 text-center md:text-left">
            <h3 className="text-base font-mono font-bold tracking-[2px] mb-4 md:mb-6 text-primary">
              // CONNECT
            </h3>
            <div className="flex gap-4 justify-between flex-wrap max-w-[300px] mx-auto md:mx-0 md:max-w-none">
              {portfolioData.socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center justify-center w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-primary/5 border border-primary/30 text-primary transition-colors duration-300 [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)] hover:bg-primary/20 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:border-primary"
                  >
                    <Icon size={22} className="md:w-[25px] md:h-[25px]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={columnVariants}
            className="w-full mt-6 md:mt-8 pt-6 md:pt-8 border-t border-dashed border-white/10 text-gray-500 text-[0.85rem] font-mono flex justify-center md:justify-between items-center flex-col md:flex-row gap-4"
          >
            <span className="text-gray-500 text-center md:text-left">
              {">"} SYS.LOG: (c) {new Date().getFullYear()} USAMA PUWARD
            </span>
            <span className="text-gray-500 text-center md:text-right">
              [ END OF TRANSMISSION ]
            </span>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
