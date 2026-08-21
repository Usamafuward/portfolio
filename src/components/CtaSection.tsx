"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

export default function CtaSection() {
  return (
    <section className="container mx-auto px-8 mt-24 pt-0 pb-16 flex flex-col gap-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: easeCustom }}
        className="relative p-[1px] bg-primary/60 [clip-path:polygon(0_0,calc(100%-30px)_0,100%_30px,100%_100%,30px_100%,0_calc(100%-30px))]"
      >
        <div className="bg-[#0a0c0e]/95 p-6 md:p-12 flex flex-col [clip-path:polygon(0_0,calc(100%-29px)_0,100%_29px,100%_100%,29px_100%,0_calc(100%-29px))]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-primary font-mono font-bold text-[0.9rem] tracking-[2px] mb-4"
              >
                // SYS.REQ: CONNECTION_ESTABLISHMENT
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[1.8rem] md:text-[2.5rem] font-black text-white leading-[1.2] font-display uppercase tracking-[-1px] mb-4"
              >
                DO YOU HAVE ANY <span className="text-primary drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">QUESTIONS?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 leading-[1.6] text-[1.1rem] font-mono mb-0"
              >
                &gt; Feel free to send me your questions or discuss a potential project collaboration.
              </motion.p>
            </div>
            <div className="flex justify-start lg:justify-end min-w-[200px] mt-4 lg:mt-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-transparent text-primary border-2 border-primary py-4 px-8 font-mono font-bold text-[1.1rem] tracking-[2px] no-underline transition-all duration-300 relative overflow-hidden shadow-[0_0_10px_rgba(0,240,255,0.2),inset_0_0_10px_rgba(0,240,255,0.1)] hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6),inset_0_0_10px_rgba(255,255,255,0.5)]"
                >
                  [ CONTACT ME ]<span className="animate-blink">_</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeCustom }}
        className="flex justify-center w-full"
      >
        <motion.h1
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10.25vw] font-black text-transparent [-webkit-text-stroke:2px_var(--primary)] m-0 leading-[0.9] whitespace-nowrap tracking-[2px] select-none drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] animate-pulse"
        >
          GET IN TOUCH
        </motion.h1>
      </motion.div>
    </section>
  );
}
