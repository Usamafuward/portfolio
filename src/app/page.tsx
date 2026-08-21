"use client";

import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import Image from "next/image";
import profileImg from "@/assets/usama_neon.jpg";
import ProjectCarousel from "@/components/ProjectCarousel";
import CertificateCarousel from "@/components/CertificateCarousel";
import { motion, Variants } from "framer-motion";

import {
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaDatabase,
  FaBrain,
  FaDocker,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeCustom },
  },
};

const eduCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export default function Home() {
  const skillIcons = [
    FaLaptopCode,
    FaServer,
    FaRobot,
    FaDatabase,
    FaBrain,
    FaDocker,
    FaCloud,
    FaCodeBranch,
  ];

  return (
    <>
      <VerticalBackground word="USAMA PUWARD" />
      <div className="container mx-auto px-8 pt-12 md:pt-28 relative z-[1] flex flex-col gap-24 pb-24">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left mt-10 md:mt-0">
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-xl font-mono font-semibold tracking-[2px] text-primary mb-4 block"
            >
              // SYS.INIT: USER_LOGIN
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-[3rem] md:text-[4.5rem] leading-[1.1] font-black mb-6 text-white uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {portfolioData.personalInfo.name}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-[0.95rem] md:text-[1.1rem] text-gray-400 max-w-[600px] mx-auto lg:mx-0 leading-[1.8] mb-10 font-mono"
            >
              &gt; {portfolioData.personalInfo.bio}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <motion.a
                href="/resume.pdf"
                download="Usama_Puward_Resume.pdf"
                target="_blank"
                className="cyan-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Download CV
              </motion.a>
              <div className="flex gap-4 justify-center lg:justify-start">
                {portfolioData.socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-[45px] h-[45px] border border-primary/30 bg-primary/5 text-primary transition-colors duration-300 hover:bg-primary hover:text-[#080a0b] hover:shadow-[0_5px_15px_rgba(0,240,255,0.4)] [clip-path:polygon(20%_0,100%_0,100%_80%,80%_100%,0_100%,0_20%)]"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeCustom, delay: 0.3 }}
          >
            <motion.div
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] p-[2px] bg-primary/60 [clip-path:polygon(30%_0,100%_0,100%_70%,70%_100%,0_100%,0_30%)] relative shadow-[0_0_40px_rgba(0,240,255,0.2)] flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] hover:bg-primary"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-[#0a0c0e] [clip-path:polygon(30%_0,100%_0,100%_70%,70%_100%,0_100%,0_30%)] p-2">
                <Image
                  src={profileImg}
                  alt="Usama Puward"
                  className="w-full h-full object-cover [clip-path:polygon(30%_0,100%_0,100%_70%,70%_100%,0_100%,0_30%)] grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects Carousel Section */}
        <section className="overflow-x-clip">
          <ProjectCarousel projects={portfolioData.projects} />
        </section>

        {/* Certifications Carousel Section */}
        <section className="overflow-x-clip">
          <CertificateCarousel certificates={portfolioData.certifications} />
        </section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          >
            <p className="text-primary font-mono text-[0.9rem] tracking-[2px] mb-2 font-bold">
              // SYS.LOG: SKILLS_MATRIX
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
              TECHNICAL{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                SKILLS
              </span>
            </h2>
            <div className="mt-6 w-[60px] h-[4px] bg-primary/80"></div>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-[800px] mx-auto lg:mx-0 text-center lg:text-left mb-12 leading-[1.6] font-mono text-[0.95rem] md:text-[1.1rem]"
          >
            &gt; I have a diverse background in various domains of software development and machine
            learning. My expertise allows me to create visually appealing interfaces, build robust
            server-side applications, and develop intelligent systems using modern tools and
            frameworks.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skill, i) => {
              const Icon = skillIcons[i % skillIcons.length];
              return (
                <motion.div
                  key={i}
                  variants={skillCardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] transition-colors duration-300 hover:bg-primary hover:shadow-[0_10px_30px_rgba(0,240,255,0.25)]"
                >
                  <div className="bg-[#0a0c0e]/95 p-8 flex flex-col h-full [clip-path:polygon(0_0,calc(100%-19px)_0,100%_19px,100%_100%,19px_100%,0_calc(100%-19px))] transition-colors duration-300 hover:bg-[#0a0c0e]/90">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
                      <Icon className="text-[2.5rem] text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                      <span className="text-[0.8rem] font-mono text-primary/70">
                        // {skill.category.toUpperCase().replace(/\s+/g, "_")}
                      </span>
                    </div>

                    <div className="text-gray-300 text-[0.95rem] font-mono leading-[1.7] flex-grow mb-8">
                      {skill.techs.join(" • ")}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[1.1rem] font-bold text-white uppercase">
                          {skill.category}
                        </span>
                        <span className="text-primary font-mono font-bold text-[0.9rem]">
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="w-full h-[4px] bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-primary shadow-[0_0_10px_var(--primary)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.2 + i * 0.05,
                            ease: easeCustom,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: easeCustom }}
        >
          <div className="mb-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            <p className="text-primary font-mono text-[0.9rem] tracking-[2px] mb-2 font-bold">
              // SYS.LOG: TECH_STACK
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
              CORE{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                TECHNOLOGIES
              </span>
            </h2>
            <div className="mt-6 w-[60px] h-[4px] bg-primary/80"></div>
          </div>
          <div className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-30px)_0,100%_30px,100%_100%,30px_100%,0_calc(100%-30px))] shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:bg-primary">
            <div className="bg-[#0a0c0e]/95 px-8 md:px-12 overflow-hidden [clip-path:polygon(0_0,calc(100%-29px)_0,100%_29px,100%_100%,29px_100%,0_calc(100%-29px))]">
              <div className="flex w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group py-16 md:py-20">
                <div className="flex shrink-0 gap-16 md:gap-20 pr-16 md:pr-20 items-center animate-scrollLeft group-hover:[animation-play-state:paused]">
                  {portfolioData.technologies.map((tech, i) => {
                    const src = typeof tech.imgUrl === "string" ? tech.imgUrl : (tech.imgUrl as any)?.src || "";
                    return (
                      <motion.div
                        key={`tech1-${i}`}
                        className="w-[85px] h-[85px] md:w-[95px] md:h-[95px] opacity-80 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] cursor-pointer"
                        whileHover={{
                          scale: 1.25,
                          opacity: 1,
                          filter: "drop-shadow(0 0 25px rgba(0,240,255,1))",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                      >
                        <div
                          className="w-full h-full bg-primary"
                          style={{
                            WebkitMaskImage: `url(${src})`,
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskImage: `url(${src})`,
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
                <div className="flex shrink-0 gap-16 md:gap-20 pr-16 md:pr-20 items-center animate-scrollLeft group-hover:[animation-play-state:paused]">
                  {portfolioData.technologies.map((tech, i) => {
                    const src = typeof tech.imgUrl === "string" ? tech.imgUrl : (tech.imgUrl as any)?.src || "";
                    return (
                      <motion.div
                        key={`tech2-${i}`}
                        className="w-[85px] h-[85px] md:w-[95px] md:h-[95px] opacity-80 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] cursor-pointer"
                        whileHover={{
                          scale: 1.25,
                          opacity: 1,
                          filter: "drop-shadow(0 0 25px rgba(0,240,255,1))",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                      >
                        <div
                          className="w-full h-full bg-primary"
                          style={{
                            WebkitMaskImage: `url(${src})`,
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskImage: `url(${src})`,
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          >
            <p className="text-primary font-mono text-[0.9rem] tracking-[2px] mb-2 font-bold">
              // SYS.LOG: ACADEMIC_RECORD
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px]">
              FORMAL{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                EDUCATION
              </span>
            </h2>
            <div className="mt-6 w-[60px] h-[4px] bg-primary/80"></div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {portfolioData.educations.map((edu, i) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={i}
                  variants={eduCardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] transition-colors duration-300 hover:bg-primary hover:shadow-[0_10px_30px_rgba(0,240,255,0.25)]"
                >
                  <div className="bg-[#0a0c0e]/95 flex flex-col md:flex-row gap-6 md:gap-8 p-10 h-full [clip-path:polygon(0_0,calc(100%-19px)_0,100%_19px,100%_100%,19px_100%,0_calc(100%-19px))] transition-all duration-300">
                    <motion.div
                      className="w-[60px] h-[60px] rounded-sm border border-primary/30 bg-primary/10 text-primary flex items-center justify-center text-[1.5rem] shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon />
                    </motion.div>
                    <div className="flex-1">
                      <span className="block md:hidden text-primary font-mono text-[0.85rem] mb-2">
                        // {edu.year}
                      </span>
                      <h3 className="text-[1.25rem] font-black mb-2 text-white uppercase">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-start md:items-center gap-3 md:gap-4 mb-4 text-[0.9rem]">
                        <span className="text-primary font-bold font-mono tracking-[1px]">
                          {edu.institution.toUpperCase()}
                        </span>
                        <span className="hidden md:inline-block shrink-0 whitespace-nowrap border border-primary/30 px-3 py-1 bg-primary/5 text-primary text-[0.8rem] font-mono shadow-[inset_0_0_10px_rgba(0,240,255,0.1)]">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-[1.6] text-[0.9rem] font-mono">
                        &gt; {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </>
  );
}
