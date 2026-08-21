"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

type Project = {
  title: string;
  description: string;
  to: string;
  technologies: string[];
  thumbnail: StaticImageData;
  category: string;
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
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
  }, [projects.length]);

  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    
    // Wrap around for continuous loop (handle both next and prev)
    const half = Math.floor(projects.length / 2);
    if (diff > half) diff -= projects.length;
    if (diff < -half) diff += projects.length;

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
      if (dDiff < -2) dDiff += projects.length;
      if (dDiff > projects.length - 3) dDiff -= projects.length;

      const shift1 = 180;
      const shift2 = 320;
      const shiftOut = -100;

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
      className="flex flex-col lg:flex-row items-stretch gap-14 min-h-[500px]"
    >
      {/* Left Side: Info */}
      <motion.div
        variants={leftVariants}
        className="flex-1 flex flex-col justify-center max-w-full lg:max-w-[460px] text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-6 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-[80%] lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
      >
        <p className="text-primary font-mono text-[0.9rem] tracking-[2px] mb-2 font-bold">// SYS.LOG: PORTFOLIO_PROJECTS</p>
        <h2 className="text-[2rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px] mb-2">
          FEATURED <br /> <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">PROJECTS</span>
        </h2>
        <div className="mt-4 mb-6 w-[60px] h-[4px] bg-primary/80"></div>
        <p className="text-gray-400 leading-[1.6] font-mono text-[0.95rem] md:text-[1.1rem] mb-8">
          &gt; From AI-powered coding assistants to full-stack scalable platforms, dive into the case studies of my most impactful work. Discover the technologies and strategies used to bring these ideas to life.
        </p>
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }} 
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/projects" className="cyan-button" style={{ marginTop: '1rem' }}>
            View All Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side: Stacked Cards */}
      <motion.div
        variants={rightVariants}
        className="flex-[1.2] relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,40px_100%,0_calc(100%-40px))] overflow-hidden"
      >
        <div className="bg-[#0a0c0e]/95 w-full h-full p-4 pt-12 pb-20 lg:p-12 min-h-[400px] lg:min-h-[500px] relative flex items-center justify-center lg:justify-start shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] [clip-path:polygon(0_0,calc(100%-39px)_0,100%_39px,100%_100%,39px_100%,0_calc(100%-39px))]">
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20 lg:bottom-auto lg:top-8 lg:right-8 lg:left-auto">
            <motion.button 
              whileHover={{ scale: 1.15 }} 
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={handlePrev} 
              className="bg-primary/10 border border-primary/30 text-primary w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]" 
              aria-label="Previous Project"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.15 }} 
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={handleNext} 
              className="bg-primary/10 border border-primary/30 text-primary w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]" 
              aria-label="Next Project"
            >
              <FaChevronRight />
            </motion.button>
          </div>
          
          <div className="relative w-full max-w-[300px] lg:max-w-none h-[300px] sm:h-[340px] lg:h-[380px]">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="absolute top-0 left-0 right-0 mx-auto lg:mx-0 lg:right-auto w-[240px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[340px] lg:h-[380px] bg-primary/60 p-[1px] [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col lg:origin-left origin-center"
                style={getCardStyle(idx)}
              >
                <div className="w-full h-full bg-[#0a0c0e] flex flex-col [clip-path:polygon(0_0,calc(100%-19px)_0,100%_19px,100%_100%,19px_100%,0_calc(100%-19px))] overflow-hidden">
                  <div className="relative w-full flex-1">
                    <Image 
                      src={project.thumbnail} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#0a0c0e] to-100%"></div>
                  </div>
                  <div className="p-5 md:p-6 bg-[#0a0c0e] relative z-[2] flex flex-col border-t border-primary/20">
                    <span className="block md:hidden text-primary font-mono text-[0.8rem] mb-1 break-all line-clamp-1">// {project.category.toUpperCase().replace(/\s+/g, '_')}</span>
                    <h3 className="text-[1rem] md:text-[1.1rem] font-black mb-1 md:mb-2 text-white uppercase tracking-wide line-clamp-2 leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-4 text-[0.9rem]">
                      <span className="hidden md:inline-block text-primary font-bold font-mono tracking-[1px] text-[0.8rem] break-all line-clamp-1">// {project.category.toUpperCase().replace(/\s+/g, '_')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 z-20 lg:top-auto lg:bottom-8 lg:right-12 lg:left-auto">
            {projects.slice(0, 5).map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[4px] transition-all duration-300 ${idx === activeIndex % 5 ? 'bg-primary w-[20px] shadow-[0_0_10px_var(--primary)]' : 'bg-white/20 w-[8px]'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
