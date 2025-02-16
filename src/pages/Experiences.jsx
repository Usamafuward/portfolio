import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const Experiences = [
    {
      title: "AI/ML Engineer Intern",
      description:
        "Contributing to transformative projects in AI, machine learning, and automation, leveraging data-driven insights to enhance business operations at Kainovation Technologies.",
      duration: "November 2024 – Present",
      company: "Kainovation Technologies",
    },
    {
      title: "Software Developer",
      description:
        "Worked on the Mediman - Doctor Patient Clinic Online Appointment project, handling both front-end and back-end development. Implemented features for appointment booking, patient management, and real-time communication between doctors and patients, ensuring a seamless user experience.",
      duration: "November 2024 – January 2025",
      company: "Edus Lanka (PVT) LTD",
    },
    {
      title: "Full Stack Developer Intern",
      description:
        "Participated in a learning internship focused on full-stack development, gaining hands-on experience with front-end and back-end technologies. Worked on guided projects, improving proficiency in web development, database management, and API integration while collaborating with mentors to enhance coding best practices",
      duration: "October 2024 – December 2024",
      company: "Unified Mentor India",
    },
    {
      title: "Artificial Intelligence Intern",
      description:
        "Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd. Worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges.",
      duration: "June 2023 – July 2024",
      company: "NoviTech R&D Pvt Ltd",
    },
    {
      title: "Freelance Full Stack Developer",
      description:
        "Designed and developed custom web applications tailored to client requirements, focusing on responsive and user-friendly interfaces. Built scalable backend architectures using Node.js and MongoDB, integrated third-party APIs, and optimized performance for seamless user experiences.",
      duration: "December 2023 – May 2024",
      company: "Self-Employed",
    },
    {
      title: "Research Projects: Data Collector, Annotator",
      description:
        "Collected and annotated data for projects on badminton shot analysis and emotion detection in Tamil texts. Responsibilities included data validation, video editing for ML training, and collaboration with research teams to achieve project goals.",
      duration: "April 2023 – December 2023",
      company: "UCSC",
    },
  ];

  return (
    <section className="min-h-screen" ref={ref}>
      <div className="px-7">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7 mb-5"
        >
          Experiences
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" mx-auto relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-teal-600 dark:bg-teal-400" />

          {Experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-6 md:space-y-2 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } ${index === 0 ? "" : "md:mt-16 mt-6"}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 border-4 border-white dark:border-gray-900" />

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                }`}
              >
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-green-100 dark:bg-gray-700 shadow-xl dark:shadow-[#0c121d] hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400 group"
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                      {experience.duration}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {experience.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
