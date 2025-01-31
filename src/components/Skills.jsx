// import { motion } from "framer-motion";
// import SkillCard from "./ui/progress.jsx";

// export const Skills = () => {
//   const skills = [
//     { title: "Front-End Development", percentage: 90, icon: "🎨" },
//     { title: "Back-End Development", percentage: 85, icon: "⚙️" },
//     { title: "Machine Learning", percentage: 75, icon: "🤖" },
//     { title: "Database Ops", percentage: 85, icon: "💾" },
//     { title: "Artificial Intelligence", percentage: 75, icon: "🧠" },
//   ];

//   return (
//     <section id="skills" className="py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
//           <p className="max-w-2xl mx-auto text-lg opacity-80">
//             I have a diverse background in various domains of software
//             development and machine learning. My expertise allows me to create
//             visually appealing interfaces, build robust server-side
//             applications, and develop intelligent systems.
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <SkillCard {...skill} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export const Skills = () => {
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
    <motion.section>
      <div className="  mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
            I have a diverse background in various domains of software
            development and machine learning. My expertise allows me to create
            visually appealing interfaces, build robust server-side
            applications, and develop intelligent systems using modern tools and
            frameworks.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-green-100 dark:bg-gray-700 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    className=" h-full bg-gradient-to-r from-teal-700 to-teal-500 rounded transition-all duration-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-1 inline-block">
                  {skill.progress}% Proficiency
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};


// import meter1 from "../assets/meter1.svg";
// import meter2 from "../assets/meter2.svg";
// import meter3 from "../assets/meter3.svg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <section className="skill" id="skills">
//       <div className="container relative z-0">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn bg-green-100 dark:bg-gray-700 shadow-lg border-2 border-white dark:border-gray-500">
//               <p className="dark:text-white">
//                 I have a diverse background in various domains of software
//                 development and machine learning. My expertise allows me to
//                 create visually appealing interfaces, build robust server-side
//                 applications, and develop intelligent systems using modern tools
//                 and frameworks.
//               </p>
//               <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 className="owl-carousel owl-theme skill-slider"
//               >
//                 <div className="item">
//                   <img src={meter2} alt="meter_1" />
//                   <h5 className="dark:text-white">Front-End Development</h5>
//                 </div>
//                 <div className="item">
//                   <img src={meter1} alt="meter_2" />
//                   <h5 className="dark:text-white">Back-End Development</h5>
//                 </div>
//                 <div className="item">
//                   <img src={meter3} alt="meter_3" />
//                   <h5 className="dark:text-white">Machine Learning</h5>
//                 </div>
//                 <div className="item">
//                   <img src={meter1} alt="meter_4" />
//                   <h5 className="dark:text-white">Database Ops</h5>
//                 </div>
//                 <div className="item">
//                   <img src={meter3} alt="meter_5" />
//                   <h5 className="dark:text-white">Artificial Intelligence</h5>
//                 </div>
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };