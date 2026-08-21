"use client";

import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { FaAward } from "react-icons/fa";
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

export default function Certifications() {
  return (
    <>
      <VerticalBackground word="CERTIFICATIONS" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-24 relative z-[1]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-10 md:mb-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
            // SYS.LOG: CREDENTIALS_DATABASE
          </p>
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
            VERIFIED{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              CERTIFICATIONS
            </span>
          </h1>
          <div className="mt-4 md:mt-6 w-[60px] h-[4px] bg-primary/80"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
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
                    <img
                      src={cert.logo}
                      alt={cert.organization}
                      className="w-[55px] h-[55px] object-contain rounded drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                    />
                  ) : (
                    <FaAward
                      size={50}
                      color="var(--primary)"
                      className="drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                    />
                  )}
                </motion.div>

                <div className="text-center mb-5 w-full px-2">
                  <h3 className="text-[1.2rem] font-black mb-2 text-white uppercase tracking-wide leading-tight">
                    {cert.title}
                  </h3>
                  <span className="text-[0.8rem] text-primary font-mono font-bold tracking-[1px] block break-all">
                    // {cert.organization.toUpperCase().replace(/\s+/g, "_")}
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
                    className="inline-block text-center bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[1px] text-[0.85rem] px-6 py-3 transition-colors duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] w-full"
                  >
                    VERIFY_CREDENTIAL
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
