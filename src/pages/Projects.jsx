import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Brain,
  Globe,
  Monitor,
  Server,
  Code,
} from "lucide-react";
import one from "@/assets/thumbnails/1.png";
import two from "@/assets/thumbnails/2.png";
import three from "@/assets/thumbnails/3.png";
import four from "@/assets/thumbnails/4.png";
import five from "@/assets/thumbnails/5.png";
import six from "@/assets/thumbnails/6.png";
import seven from "@/assets/thumbnails/7.png";
import eight from "@/assets/thumbnails/8.png";
import nine from "@/assets/thumbnails/9.png";
import ten from "@/assets/thumbnails/10.png";
import PropTypes from "prop-types";

// Enhanced Project Card Component
const FuturisticProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return Brain;
      case "Full-Stack":
        return Globe;
      case "Frontend":
        return Monitor;
      case "Backend":
        return Server;
      default:
        return Code;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-6"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.to}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative overflow-hidden shadow-xl dark:shadow-[#0c121d] hover:shadow-xl transition-all duration-500 border-2 border-white dark:border-gray-500 bg-[#b9f7d7] dark:bg-gray-700 hover:border-teal-600 dark:hover:border-teal-400 rounded-[30px] rounded-tl-none rounded-br-none transform">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          {/* Category badge with icon */}
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              className="flex items-center gap-2 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/50 rounded-full border border-teal-200 dark:border-teal-700"
              animate={
                isHovered
                  ? {
                      boxShadow: "0 0 20px rgba(13,148,136,0.4)",
                    }
                  : {}
              }
            >
              <CategoryIcon
                size={12}
                className="text-teal-600 dark:text-teal-400"
              />
              <span>{project.category}</span>
            </motion.div>
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100"
            animate={isHovered ? { y: [250, 700, 250] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Image section with enhanced effects */}
          <div className="relative bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
              <svg width="100%" height="100%" className="text-teal-400/50">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isHovered
                        ? { pathLength: 1, opacity: 0.3 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                ))}
              </svg>
            </div>

            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Enhanced hover overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20"
              initial={{ scale: 0.8 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
            >
              <motion.div
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300"
                animate={
                  isHovered
                    ? {
                        rotate: [0, 10, -10, 0],
                        scale: [0.75, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.8 }}
              >
                <ExternalLink className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </motion.div>

              {/* Energy rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-teal-400/50"
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.5, 2],
                        opacity: [0.5, 0.2, 0],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Content section */}
          <div className="relative z-10 p-6">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-[30px] rounded-tl-none rounded-br-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-teal-400 rounded-full"
                  style={{
                    left: `${Math.random() * 50}%`,
                    top: `${Math.random() * 50}%`,
                  }}
                  animate={{
                    x: [Math.random() * 200, Math.random() * 200],
                    y: [Math.random() * 150, Math.random() * 150],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            {/* Title with external link icon */}
            <div className="flex justify-between items-start mb-4">
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300"
                animate={
                  isHovered
                    ? {
                        textShadow: "0 0 20px rgba(13,148,136,0.3)",
                      }
                    : {}
                }
              >
                {project.title}
              </motion.h3>

              <motion.div className="w-6 flex-shrink-0 ml-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-gray-400 mt-1" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-700 dark:text-gray-200 mb-4 lg:line-clamp-3 lg:group-hover:line-clamp-none transition-all duration-500"
              animate={isHovered ? {} : {}}
            >
              {project.description}
            </motion.p>

            {/* Technologies with enhanced animations */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300 transition-all duration-300 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + techIndex * 0.05,
                  }}
                  whileHover={{
                    boxShadow: "0 0 15px rgba(13,148,136,0.3)",
                    borderColor: "rgb(13,148,136)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Corner geometric elements */}
          <motion.div
            className="absolute top-4 left-4 opacity-50 group-hover:opacity-100"
            animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-6 h-6">
              <div className="absolute w-full h-0.5 bg-teal-400/70" />
              <div className="absolute h-full w-0.5 bg-teal-400/70" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 opacity-50 group-hover:opacity-100"
            animate={isHovered ? { rotate: -90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-6 h-6">
              <div className="absolute w-full h-0.5 bg-teal-400/70 bottom-0" />
              <div className="absolute h-full w-0.5 bg-teal-400/70 right-0" />
            </div>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

FuturisticProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projects = [
    {
      title: "AI-Powered Multi-Agent Coding Assistant",
      description:
        "An advanced AI-powered coding assistant that leverages multiple AI agents to assist developers in writing, debugging, optimizing, and documenting code. It integrates OpenAI's LLMs with FastAPI to provide real-time assistance, along with GitHub API integration for seamless code management and collaboration.",
      to: "https://github.com/Usamafuward/AI_Powered_Multi_Agent_Coding_Assistant.git",
      technologies: [
        "AutoGen",
        "OpenAI GPT",
        "FastHTML",
        "FastAPI",
        "LangChain",
        "FAISS",
        "GitHub API",
      ],
      thumbnail: one,
      category: "AI/ML",
    },
    {
      title: "NLP Podcast Chatbot",
      description:
        "An NLP-driven chatbot that interacts with podcast transcripts to answer questions, attribute responses to speakers, and provide YouTube links, enhancing user engagement and content access.",
      to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
      technologies: ["Flask", "TF-IDF", "VADER", "NLTK"],
      thumbnail: three,
      category: "AI/ML",
    },
    {
      title: "RAG Pipeline for PDF Analysis (Chatbot)",
      description:
        "This project is a RAG (Retrieval-Augmented Generation) pipeline that extracts and processes text, tables, and images from PDFs, enabling users to query the extracted information through a conversational interface. It combines multi-modal embeddings with a Google Generative AI-powered question-answering system.",
      to: "https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git",
      technologies: [
        "LangChain",
        "Google GEN AI",
        "FIASS",
        "Streamlit",
        "Python",
      ],
      thumbnail: seven,
      category: "AI/ML",
    },
    {
      title: "Travel Point",
      description:
        "A social media platform for travellers to share experiences, itineraries, and book accommodations. It also allows users to create and book all-inclusive travel packages for a seamless travel experience.",
      to: "https://github.com/aamirfazeer/TravelPointMobile.git",
      technologies: [
        "React",
        "ReactNative",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      thumbnail: two,
      category: "Full-Stack",
    },
    {
      title: "Eats Robers",
      description:
        "Eats Robers is a web app using React, Node.js, Express, MongoDB, and Mongoose that helps users find the perfect meal, featuring seamless payment options and exceptional customer service.",
      to: "https://github.com/Usamafuward/eats-robers.git",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
      thumbnail: six,
      category: "Full-Stack",
    },
    {
      title: "Mediman - Doctor Dashboard (sample) Frontend App",
      description:
        "Mediman is a doctor dashboard app that allows doctors to manage patient appointments (Online and Physical), view patient medical records, and prescribe medications, enhancing patient care and treatment outcomes.",
      to: "https://github.com/Usamafuward/sample-mediman-doctor.git",
      technologies: ["React", "Shadcn-UI", "Tailwind CSS"],
      thumbnail: four,
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React that showcases my projects and skills in artificial intelligence, software developing and machine learning, providing an engaging platform for potential employers and collaborators.",
      to: "https://github.com/Usamafuward/portfolio.git",
      technologies: ["React", "Tailwind CSS", "EmailJS"],
      thumbnail: five,
      category: "Frontend",
    },
    {
      title: "Clubhub-Central",
      description:
        "Club-Hub Central is a centralized platform developed with PHP, HTML, CSS, JavaScript, and MariaDB for the University of Colombo School of Computing clubs and societies, facilitating better communication and collaboration among members.",
      to: "https://github.com/terance-edmonds/clubhub-central.git",
      technologies: ["PHP", "HTML", "SCSS", "JavaScript", "MariaDB"],
      thumbnail: nine,
      category: "Full-Stack",
    },
    {
      title: "LangChain for LLM Application Development (coursera)",
      description:
        "The project uses the LangChain framework to build applications with advanced language models (LLMs), focusing on key features like prompts, memory management, creating operation chains, document-based question answering, and developing LLMs as reasoning agents.",
      to: "https://www.coursera.org/learn/langchain-for-llm-application-development-project",
      technologies: ["LangChain", "LLM", "OpenAI", "Python"],
      thumbnail: eight,
      category: "AI/ML",
    },
    {
      title: "Django Blog",
      description:
        "A blog application built with Django for publishing technology-related posts, providing a user-friendly interface for authors to share insights and engage with readers.",
      to: "https://github.com/Usamafuward/Django-blog.git",
      technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
      thumbnail: ten,
      category: "Backend",
    },
  ];

  return (
    <section className="min-h-screen relative" ref={ref}>
      {/* Enhanced Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                textShadow: [
                  "0 0 20px rgba(13,148,136,0.3)",
                  "0 0 30px rgba(13,148,136,0.4)",
                  "0 0 20px rgba(13,148,136,0.3)",
                ],
              }
            : {
                opacity: 0,
                y: 20,
              }
        }
        className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7 mb-5"
      >
        Projects
      </motion.h1>

      {/* Projects Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="px-7 mx-auto justify-between columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 z-10 relative"
      >
        {projects.map((project, index) => (
          <FuturisticProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            animate={{
              x: [
                Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
                Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
              ],
              y: [
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1000),
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1000),
              ],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
