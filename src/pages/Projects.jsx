import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const projects = [
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
    },
    {
      title: "NLP Podcast Chatbot",
      description:
        "An NLP-driven chatbot that interacts with podcast transcripts to answer questions, attribute responses to speakers, and provide YouTube links, enhancing user engagement and content access.",
      to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
      technologies: ["Flask", "TF-IDF", "VADER", "NLTK"],
    },
    {
      title: "Eats Robers",
      description:
        "Eats Robers is a web app using React, Node.js, Express, MongoDB, and Mongoose that helps users find the perfect meal, featuring seamless payment options and exceptional customer service.",
      to: "https://github.com/Usamafuward/eats-robers.git",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
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
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React that showcases my projects and skills in software engineering and machine learning, providing an engaging platform for potential employers and collaborators.",
      to: "https://github.com/Usamafuward/portfolio.git",
      technologies: ["React", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Clubhub-Central",
      description:
        "Club-Hub Central is a centralized platform developed with PHP, HTML, CSS, JavaScript, and MariaDB for the University of Colombo School of Computing clubs and societies, facilitating better communication and collaboration among members.",
      to: "https://github.com/terance-edmonds/clubhub-central.git",
      technologies: ["PHP", "HTML", "SCSS", "JavaScript", "MariaDB"],
    },
    {
      title: "Django Blog",
      description:
        "A blog application built with Django for publishing technology-related posts, providing a user-friendly interface for authors to share insights and engage with readers.",
      to: "https://github.com/Usamafuward/Django-blog.git",
      technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
    },
    {
      title: "LangChain for LLM Application Development (coursera)",
      description:
        "The project uses the LangChain framework to build applications with advanced language models (LLMs), focusing on key features like prompts, memory management, creating operation chains, document-based question answering, and developing LLMs as reasoning agents.",
      to: "https://www.coursera.org/learn/langchain-for-llm-application-development-project",
      technologies: ["LangChain", "LLM", "OpenAI", "Python"],
    },
  ];

  return (
    <section className="min-h-screen" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7 mb-5"
      >
        Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="px-7 mx-auto justify-between columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="break-inside-avoid"
          >
            <Link to={project.to} className="block group">
              <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300 border-2 border-white dark:border-gray-500 bg-green-100 dark:bg-gray-700 hover:border-teal-600 dark:hover:border-teal-400">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-6">
                      <ExternalLink className="w-5 h-5 al text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 mt-1" />
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function Projects() {

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const slideUpVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const dummyProjects = [
//     {
//       title: "Travel Point",
//       description:
//         "A social media platform for travellers to share experiences, itineraries, and book accommodations. It also allows users to create and book all-inclusive travel packages for a seamless travel experience.",
//       to: "https://github.com/aamirfazeer/TravelPointMobile.git",
//       technologies: [
//         "React",
//         "ReactNative",
//         "FastAPI",
//         "PostgreSQL",
//         "Tailwind CSS",
//       ],
//     },
//     {
//       title: "NLP Podcast Chatbot",
//       description:
//         "An NLP-driven chatbot that interacts with podcast transcripts to answer questions, attribute responses to speakers, and provide YouTube links, enhancing user engagement and content access.",
//       to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
//       technologies: ["Flask", "TF-IDF", "VADER", "NLTK"],
//     },
//     {
//       title: "Eats Robers",
//       description:
//         "Eats Robers is a web app using React, Node.js, Express, MongoDB, and Mongoose that helps users find the perfect meal, featuring seamless payment options and exceptional customer service.",
//       to: "https://github.com/Usamafuward/eats-robers.git",
//       technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
//     },
//     {
//       title: "RAG Pipeline for PDF Analysis (Chatbot)",
//       description:
//         "This project is a RAG (Retrieval-Augmented Generation) pipeline that extracts and processes text, tables, and images from PDFs, enabling users to query the extracted information through a conversational interface. It combines multi-modal embeddings with a Google Generative AI-powered question-answering system.",
//       to: "https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git",
//       technologies: [
//         "LangChain",
//         "Google GEN AI",
//         "FIASS",
//         "Streamlit",
//         "Python",
//       ],
//     },
//     {
//       title: "Portfolio Website",
//       description:
//         "A personal portfolio built with React that showcases my projects and skills in software engineering and machine learning, providing an engaging platform for potential employers and collaborators.",
//       to: "https://github.com/Usamafuward/portfolio.git",
//       technologies: ["React", "Tailwind CSS", "Firebase"],
//     },
//     {
//       title: "Clubhub-Central",
//       description:
//         "Club-Hub Central is a centralized platform developed with PHP, HTML, CSS, JavaScript, and MariaDB for the University of Colombo School of Computing clubs and societies, facilitating better communication and collaboration among members.",
//       to: "https://github.com/terance-edmonds/clubhub-central.git",
//       technologies: ["PHP", "HTML", "SCSS", "JavaScript", "MariaDB"],
//     },
//     {
//       title: "Django Blog",
//       description:
//         "A blog application built with Django for publishing technology-related posts, providing a user-friendly interface for authors to share insights and engage with readers.",
//       to: "https://github.com/Usamafuward/Django-blog.git",
//       technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
//     },
//     {
//       title: "LangChain for LLM Application Development (coursera)",
//       description:
//         "The project uses the LangChain framework to build applications with advanced language models (LLMs), focusing on key features like prompts, memory management, creating operation chains, document-based question answering, and developing LLMs as reasoning agents.",
//       to: "https://www.coursera.org/learn/langchain-for-llm-application-development-project",
//       technologies: ["LangChain", "LLM", "OpenAI", "Python"],
//     },
//   ];

//   return (
//     <div>
//       <section className="min-h-screen" ref={ref}>
//         <motion.h1
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={slideUpVariants}
//           className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7"
//         >
//           Projects
//         </motion.h1>
//         <motion.div
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7"
//         >
//           {dummyProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//             <Link key={index} to={project.to} className="flex-1 group relative">
//               <div className="text-center shadow-xl dark:shadow-gray-400 p-7 rounded-xl border-2 border-white dark:border-gray-500 bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex-1 flex flex-col justify-center card">
//                 <h5 className="text-2xl font-bold pb-2">{project.title}</h5>
//                 <p className="py-2" style={{ fontStyle: "italic" }}>
//                   Tech Stack : {project.technologies.join(", ")}
//                 </p>
//                 <div className="overlay absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center duration-500 ease-in-out opacity-0 w-full group-hover:top-1/2 group-hover:opacity-100 p-3">
//                   <h5 className="font-bold text-white text-lg">
//                     {project.title}
//                   </h5>
//                   <p className="text-white">{project.description}</p>
//                 </div>
//               </div>
//             </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }
