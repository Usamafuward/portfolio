// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function Experiences() {

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

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

//   const Experiences = [
//     {
//       title: "AI/ML Engineer Intern",
//       description:
//         "Contributing to transformative projects in AI, machine learning, and automation, leveraging data-driven insights to enhance business operations at Kainovation Technologies.",
//       duration: "November 2024 – Present",
//       company: "Kainovation Technologies",
//     },
//     {
//       title: "Full Stack Developer Intern",
//       description:
//         "Contributing to the development and maintenance of full-stack applications, working on both front-end and back-end components to support the company’s digital solutions. Collaborated with senior developers to enhance application functionality and user experience.",
//       duration: "October 2024 – Present",
//       company: "Unified Mentor India",
//     },
//     {
//       title: "Artificial Intelligence Intern",
//       description:
//         "Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd, , I worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges",
//       duration: "June 2023 – July 2024",
//       company: "NoviTech R&D Pvt Ltd",
//     },
//     {
//       title: "Freelance Full Stack Developer",
//       description: "Developed custom websites focusing on responsive design.",
//       duration: "December 2023 – May 2024",
//       company: "Self-Employed",
//     },
//     {
//       title: "Research Projects: Data Collector, Annotator",
//       description:
//         "Collected and annotated data for projects on badminton shot analysis and emotion detection in Tamil texts. Responsibilities included data validation, video editing for ML training, and collaboration with research teams to achieve project goals.",
//       duration: "April 2023 – December 2023",
//       company: "UCSC",
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
//           Experiences
//         </motion.h1>
//         <motion.div
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7"
//         >
//           {Experiences.map((experience, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="group text-center shadow-lg dark:shadow-gray-400 p-7 border-2 border-white dark:border-gray-500 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-center card relative">
//                 <h3 className="text-2xl font-bold pb-2">{experience.title}</h3>
//                 <p className="font-semibold mt-3">{experience.company}</p>
//                 <p className="text-sm font-extralight">
//                   ({experience.duration})
//                 </p>
//                 <div className="overlay absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center duration-500 ease-in-out opacity-0 w-full group-hover:top-1/2 group-hover:opacity-100">
//                   <p className="p-2 text-white">{experience.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }

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
      title: "Full Stack Developer Intern",
      description:
        "Contributing to the development and maintenance of full-stack applications, working on both front-end and back-end components to support the company's digital solutions. Collaborated with senior developers to enhance application functionality and user experience.",
      duration: "October 2024 – Present",
      company: "Unified Mentor India",
    },
    {
      title: "Artificial Intelligence Intern",
      description:
        "Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd, , I worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges",
      duration: "June 2023 – July 2024",
      company: "NoviTech R&D Pvt Ltd",
    },
    {
      title: "Freelance Full Stack Developer",
      description: "Developed custom websites focusing on responsive design.",
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
          className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7 mb-5"
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
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-teal-600 dark:bg-teal-400" />

          {Experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-8 mb-16 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 border-4 border-white dark:border-gray-900" />

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                }`}
              >
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-green-100 dark:bg-gray-700 shadow-xl hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400"
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                      {experience.duration}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
