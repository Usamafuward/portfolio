// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.25 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };
// export const Skills = () => {
//   const skills = [
//     {
//       category: "Front-End Development",
//       progress: 85,
//       techs: [
//         "React",
//         "Next",
//         "React Native",
//         "FastHTML",
//         "SCSS",
//         "Tailwind CSS",
//         "Bootstrap",
//       ],
//     },
//     {
//       category: "Back-End Development",
//       progress: 90,
//       techs: ["FastAPI", "Node.js", "Django", "Express.js"],
//     },
//     {
//       category: "Machine Learning",
//       progress: 75,
//       techs: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
//     },
//     {
//       category: "Database Ops",
//       progress: 90,
//       techs: ["MongoDB", "PostgreSQL", "MySQL"],
//     },
//     {
//       category: "Artificial Intelligence",
//       progress: 85,
//       techs: ["NLP", "Computer Vision", "Deep Learning"],
//     },
//     {
//       category: "DevOps & Containerization",
//       progress: 70,
//       techs: ["Docker"],
//     },
//     {
//       category: "Cloud Platforms",
//       progress: 60,
//       techs: ["Microsoft Azure"],
//     },
//     {
//       category: "Version Control",
//       progress: 85,
//       techs: ["Git", "GitHub"],
//     },
//   ];

//   return (
//     <motion.section>
//       <div className="mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
//             I have a diverse background in various domains of software
//             development and machine learning. My expertise allows me to create
//             visually appealing interfaces, build robust server-side
//             applications, and develop intelligent systems using modern tools and
//             frameworks.
//           </p>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-[#b9f7d7] dark:bg-gray-700 p-6 shadow-xl hover:shadow-xl dark:shadow-[#0c121d] transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400"
//             >
//               <div className="mb-4">
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                   {skill.category}
//                 </h3>
//                 <div className="relative w-full h-2 bg-gray-200 rounded">
//                   <motion.div
//                     className=" h-full bg-gradient-to-r from-teal-700 to-teal-500 rounded transition-all duration-300"
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.progress}%` }}
//                     whileHover={{ width: `${skill.progress}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                   />
//                 </div>
//                 <span className="text-sm text-gray-600 mt-1 inline-block">
//                   {skill.progress}% Proficiency
//                 </span>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {skill.techs.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

import { motion } from "react";
import { useState } from "react";

const ModernSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      category: "Front-End Development",
      progress: 85,
      techs: [
        "React",
        "Next",
        "React Native",
        "FastHTML",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Back-End Development",
      progress: 90,
      techs: ["FastAPI", "Node.js", "Django", "Express.js"],
    },
    {
      category: "Machine Learning",
      progress: 75,
      techs: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      category: "Database Ops",
      progress: 90,
      techs: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "Artificial Intelligence",
      progress: 85,
      techs: ["NLP", "Computer Vision", "Deep Learning"],
    },
    {
      category: "DevOps & Containerization",
      progress: 70,
      techs: ["Docker"],
    },
    {
      category: "Cloud Platforms",
      progress: 60,
      techs: ["Microsoft Azure"],
    },
    {
      category: "Version Control",
      progress: 85,
      techs: ["Git", "GitHub"],
    },
  ];

  return (
    <div className="p-8">
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideLeftVariants : slideRightVariants}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden h-full">
              {/* Background with inverted border radius */}
              <div
                className="
              absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-500
              opacity-10 group-hover:opacity-20 transition-opacity duration-300
              rounded-[30px] rounded-tl-none rounded-br-none "
              />

              {/* Content Container */}
              <div
                className="relative p-6 bg-white dark:bg-gray-800 
                rounded-[30px] rounded-tl-none rounded-br-none
                border-2 border-gray-200 dark:border-gray-700
                group-hover:border-transparent transition-all duration-300
                shadow-lg hover:shadow-xl h-full flex flex-col justify-between"
              >
                {/* Animated border gradient */}
                <div
                  className="
                  absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-500
                  rounded-[30px] rounded-tl-none rounded-br-none
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  -z-10"
                />

                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>

                  {/* Progress bar container */}
                  <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          hoveredIndex === index
                            ? `${skill.progress}%`
                            : `${skill.progress}%`,
                      }}
                      transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        delayChildren: 0.3,
                        staggerChildren: 0.2,
                      }}
                      className="h-full bg-gradient-to-r from-teal-700 to-teal-500 rounded transition-all duration-300"
                    />
                  </div>

                  <span className="text-sm dark:text-gray-400 text-gray-600 mt-1 inline-block">
                    {skill.progress}% Proficiency
                  </span>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ModernSkills;
