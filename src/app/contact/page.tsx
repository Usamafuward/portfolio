"use client";

import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { motion, Variants } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const infoVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeCustom,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeCustom, delay: 0.2 },
  },
};

export default function Contact() {
  return (
    <>
      <VerticalBackground word="CONTACT" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 relative z-[1] pb-24">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={infoVariants}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)] w-full max-w-[650px] lg:max-w-none"
          >
            <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
              // SYS.LOG: COMM_LINK_ACTIVE
            </p>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px] mb-6">
              LET'S WORK <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                TOGETHER
              </span>
            </h1>
            <div className="mb-8 w-[60px] h-[4px] bg-primary/80 block lg:hidden"></div>
            <p className="text-gray-400 leading-[1.6] mb-10 text-[1rem] font-mono max-w-[550px] lg:max-w-none">
              &gt; Have a project in mind or just want to say hi? Feel free to reach out. I'm always
              open to discussing new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="flex flex-col gap-6 w-full items-center lg:items-start">
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-primary font-bold font-mono text-[0.85rem] tracking-[1px] mb-2">
                  // SECURE_EMAIL
                </h4>
                <p className="text-white font-mono text-[1.1rem] px-4 py-1 border-y lg:border-y-0 lg:border-l-2 border-primary/30">
                  {portfolioData.personalInfo.email}
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-primary font-bold font-mono text-[0.85rem] tracking-[1px] mb-2">
                  // DIRECT_LINE
                </h4>
                <p className="text-white font-mono text-[1.1rem] px-4 py-1 border-y lg:border-y-0 lg:border-l-2 border-primary/30">
                  {portfolioData.personalInfo.phone}
                </p>
              </div>

              <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                {portfolioData.socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-primary text-[1.25rem] flex items-center justify-center w-[45px] h-[45px] bg-primary/10 border border-primary/30 transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="flex-[1.2] w-full max-w-[650px] lg:max-w-none mx-auto"
          >
            <div className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,40px_100%,0_calc(100%-40px))] overflow-hidden">
              <form className="bg-[#0a0c0e]/95 w-full h-full p-8 md:p-12 flex flex-col gap-6 relative z-[2] [clip-path:polygon(0_0,calc(100%-39px)_0,100%_39px,100%_100%,39px_100%,0_calc(100%-39px))] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_NAME..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // RETURN_ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_EMAIL..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // TRANSMISSION_PAYLOAD
                  </label>
                  <textarea
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_MESSAGE..."
                    rows={5}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  type="button"
                  className="w-full mt-4 bg-primary/10 border border-primary/30 text-primary font-mono font-bold tracking-[2px] text-[1rem] py-4 transition-colors duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))] cursor-pointer"
                >
                  INITIATE_TRANSFER
                </motion.button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
