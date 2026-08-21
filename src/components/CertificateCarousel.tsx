"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type Certificate = {
  title: string;
  description: string;
  to: string;
  organization: string;
  logo?: string;
};

export default function CertificateCarousel({ certificates }: { certificates: Certificate[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Auto-rotate every 2 seconds

    return () => clearInterval(interval);
  }, [certificates.length]);

  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    
    // Wrap around for continuous loop (handle both next and prev)
    const half = Math.floor(certificates.length / 2);
    if (diff > half) diff -= certificates.length;
    if (diff < -half) diff += certificates.length;

    if (isMobile || isTablet) {
      // Cover-flow style for Mobile/Tablet
      const absDiff = Math.abs(diff);
      const direction = Math.sign(diff); // 1 for right, -1 for left
      
      const shift1 = isMobile ? 70 : 140;
      const shift2 = isMobile ? 120 : 240;
      
      const shiftX = absDiff === 1 ? direction * shift1 : (absDiff === 2 ? direction * shift2 : 0);
      const scale = absDiff === 0 ? 1 : (absDiff === 1 ? 0.85 : 0.7);
      const zIndex = 10 - absDiff;
      const blur = absDiff === 0 ? 0 : (absDiff === 1 ? 0 : 2);
      const opacity = absDiff === 0 ? 1 : (absDiff === 1 ? 0.8 : 0.5);

      if (absDiff <= (isMobile ? 1 : 2)) {
        return { 
          transform: `translateX(${shiftX}px) scale(${scale})`, 
          opacity, 
          zIndex,
          filter: `blur(${blur}px)`
        };
      } else {
        return { 
          transform: `translateX(${direction * (isMobile ? shift1 + 50 : shift2 + 50)}px) scale(0.6)`, 
          opacity: 0, 
          zIndex: 5, 
          pointerEvents: 'none' as const 
        };
      }
    } else {
      // Stack style for Desktop (lg)
      let dDiff = index - activeIndex;
      if (dDiff < -2) dDiff += certificates.length;
      if (dDiff > certificates.length - 3) dDiff -= certificates.length;

      const shift1 = -180;
      const shift2 = -320;
      const shiftOut = 100;

      if (dDiff === 0) {
        return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10, filter: 'blur(0px)' };
      } else if (dDiff === 1) {
        return { transform: `translateX(${shift1}px) scale(0.85)`, opacity: 0.8, zIndex: 9, filter: 'blur(0px)' };
      } else if (dDiff === 2) {
        return { transform: `translateX(${shift2}px) scale(0.7)`, opacity: 0.6, zIndex: 8, filter: 'blur(1px)' };
      } else {
        return { transform: `translateX(${shiftOut}px) scale(0.8)`, opacity: 0, zIndex: 5, pointerEvents: 'none' as const };
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="flex flex-col-reverse lg:flex-row items-stretch gap-14 min-h-[500px]"
    >
      
      {/* Left Side: Stacked Cards (animates from left to right) */}
      <motion.div
        variants={leftVariants}
        className="flex-[1.2] relative p-[1px] bg-primary/40 [clip-path:polygon(0_40px,40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] overflow-hidden"
      >
        <div className="bg-[#0a0c0e]/95 w-full h-full p-4 pt-12 pb-20 lg:p-12 min-h-[400px] lg:min-h-[500px] relative flex items-center justify-center lg:justify-start shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] [clip-path:polygon(0_39px,39px_0,100%_0,100%_calc(100%-39px),calc(100%-39px)_100%,0_100%)]">
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20 lg:bottom-auto lg:top-8 lg:left-8 lg:right-auto">
            <motion.button 
              whileHover={{ scale: 1.15 }} 
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={handlePrev} 
              className="bg-primary/10 border border-primary/30 text-primary w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]" 
              aria-label="Previous"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.15 }} 
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={handleNext} 
              className="bg-primary/10 border border-primary/30 text-primary w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]" 
              aria-label="Next"
            >
              <FaChevronRight />
            </motion.button>
          </div>
          
          <div className="relative w-full max-w-[300px] lg:max-w-none h-[300px] sm:h-[340px] lg:h-[380px]">
            {certificates.map((cert, idx) => (
              <div 
                key={idx} 
                className="absolute top-0 left-0 right-0 mx-auto lg:mx-0 lg:left-auto lg:right-0 w-[240px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[340px] lg:h-[380px] bg-primary/60 p-[1px] [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col lg:origin-right origin-center" 
                style={getCardStyle(idx)}
              >
                <div className="w-full h-full bg-[#0a0c0e] flex flex-col [clip-path:polygon(0_19px,19px_0,100%_0,100%_calc(100%-19px),calc(100%-19px)_100%,0_100%)] overflow-hidden pt-8 md:pt-10 px-5 md:px-6 pb-5 md:pb-6 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[40%] before:h-[2px] before:bg-primary before:shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                  <div className="flex-1 flex items-center justify-center mb-3 md:mb-4 bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_60%)]">
                    {cert.logo ? (
                      <img src={cert.logo} alt={cert.organization} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain rounded drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                    ) : (
                      <FaAward size={50} className="md:w-[60px] md:h-[60px]" color="var(--primary)" style={{ filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.5))' }} />
                    )}
                  </div>
                  <div className="text-center mb-4 md:mb-6 w-full px-2">
                    <h3 className="text-[1rem] md:text-[1.1rem] font-black mb-1 md:mb-2 text-white uppercase tracking-wide line-clamp-3 leading-tight">{cert.title}</h3>
                    <span className="text-[0.75rem] md:text-[0.8rem] text-primary font-mono font-bold tracking-[1px] block break-all line-clamp-2">// {cert.organization.toUpperCase().replace(/\s+/g, '_')}</span>
                  </div>
                  <div className="text-center mt-auto">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      href={cert.to} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block text-primary text-[0.8rem] md:text-[0.85rem] font-bold font-mono tracking-[1px] px-4 md:px-6 py-2 border border-primary/40 transition-colors duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                    >
                      VERIFY_CREDENTIAL
                    </motion.a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 z-20 lg:top-auto lg:bottom-8 lg:left-12 lg:right-auto">
            {certificates.slice(0, 5).map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[4px] transition-all duration-300 ${idx === activeIndex % 5 ? 'bg-primary w-[20px] shadow-[0_0_10px_var(--primary)]' : 'bg-white/20 w-[8px]'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Side: Info */}
      <motion.div
        variants={rightVariants}
        className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[460px] text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-6 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-[80%] lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
      >
        <p className="text-primary font-mono text-[0.9rem] tracking-[2px] mb-2 font-bold">// SYS.LOG: CREDENTIALS</p>
        <h2 className="text-[2rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px] mb-2 break-all">
          CREDENTIALS <br /> <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] ">SPOTLIGHT</span>
        </h2>
        <div className="mt-4 mb-6 w-[60px] h-[4px] bg-primary/80"></div>
        <p className="text-gray-400 leading-[1.6] font-mono text-[0.95rem] md:text-[1.1rem] mb-8">
          &gt; A showcase of my continuous learning journey. Earning certifications from industry leaders like Meta, DeepLearning.AI, and Google Cloud, I stay at the cutting edge of AI, full-stack development, and cloud computing.
        </p>
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }} 
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/certifications" className="cyan-button" style={{ marginTop: '1rem' }}>
            View All Certifications
          </Link>
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
