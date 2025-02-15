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
              className="bg-green-100 dark:bg-gray-700 p-6 shadow-xl hover:shadow-xl dark:shadow-[#0c121d] transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400"
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
