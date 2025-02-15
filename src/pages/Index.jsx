import { useState, useEffect, useContext, useRef } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineUp,
  AiOutlineDownload,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import profile from "@/assets/Usama.jpg";
import SplitText from "@/components/ui/SplitText";
import LogoWall from "@/components/ui/LogoWall";
import TrueFocus from "@/components/ui/TrueFocus";
import AnimatedText from "@/components/ui/AnimatedText";
import PortfolioCard from "@/components/ui/PortfolioCard";
import logoSvg from "@/assets/logo_svg";
import flatIcon from "@/assets/flat_icon";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import SE from "../assets/Resume_SE.pdf";
import ML_AI from "../assets/Resume_ML.pdf";

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

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Index = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowDropdown(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-button")) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cards = [
    {
      title: "Projects",
      image: !darkMode ? flatIcon.project_full : flatIcon.project_white,
      description:
        "Explore a showcase of my innovative projects, demonstrating technical expertise and problem-solving skills.",
      link: "/projects",
    },
    {
      title: "Certifications",
      image: !darkMode ? flatIcon.certificate_full : flatIcon.certificate_white,
      description:
        "Browse my certifications, highlighting my dedication to continuous learning and professional growth.",
      link: "/certifications",
    },
    {
      title: "Experiences",
      image: !darkMode ? flatIcon.quality_full : flatIcon.quality_white,
      description:
        "Discover my professional journey, including key roles and experiences that have shaped my expertise and skills.",
      link: "/experiences",
    },
  ];

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

  const logoImgs = [
    { imgUrl: logoSvg.bootstrap, altText: "Bootstrap Logo" },
    { imgUrl: logoSvg.docker, altText: "Docker Logo" },
    { imgUrl: logoSvg.github, altText: "GitHub Logo" },
    { imgUrl: logoSvg.javascript, altText: "JavaScript Logo" },
    { imgUrl: logoSvg.mongodb, altText: "MongoDB Logo" },
    { imgUrl: logoSvg.nodedotjs, altText: "Node.js Logo" },
    { imgUrl: logoSvg.python, altText: "Python Logo" },
    { imgUrl: logoSvg.react, altText: "React Logo" },
    { imgUrl: logoSvg.tensorflow, altText: "TensorFlow Logo" },
    { imgUrl: logoSvg.postgresql, altText: "PostgreSQL Logo" },
    { imgUrl: logoSvg.tailwindcss, altText: "Tailwind CSS Logo" },
    { imgUrl: logoSvg.bootstrap, altText: "Bootstrap Logo" },
    { imgUrl: logoSvg.sass, altText: "SCSS Logo" },
    { imgUrl: logoSvg.fastapi, altText: "FastAPI Logo" },
    { imgUrl: logoSvg.express, altText: "Express Logo" },
    { imgUrl: logoSvg.mysql, altText: "MySQL Logo" },
    { imgUrl: logoSvg.pandas, altText: "Pandas Logo" },
    { imgUrl: logoSvg.numpy, altText: "NumPy Logo" },
    { imgUrl: logoSvg.scikitlearn, altText: "scikit-learn Logo" },
    { imgUrl: logoSvg.cplusplus, altText: "C++ Logo" },
    { imgUrl: logoSvg.git, altText: "Git Logo" },
    { imgUrl: logoSvg.django, altText: "Django Logo" },
    { imgUrl: logoSvg.reactnative, altText: "React Native Logo" },
  ];

  const socials = [
    {
      icon: FaGithubSquare,
      link: "https://github.com/Usamafuward",
    },
    {
      icon: AiFillLinkedin,
      link: "https://linkedin.com/in/usama-puward",
    },
    {
      icon: FaSquareXTwitter,
      link: "https://www.x.com/usamafuward",
    },
    {
      icon: AiFillInstagram,
      link: "https://www.instagram.com/usama._fuward",
    },
    {
      icon: IoMail,
      link: "mailto:usamafuward2001@gmail.com",
    },
  ];

  const educationData = [
    {
      icon: FaGraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Colombo School of Computing",
      year: "2022 - present(2025)",
      description:
        "Currently pursuing a degree in Computer Science, with a focus on software development, machine learning, and artificial intelligence.",
    },
    {
      icon: FaSchool,
      degree: "Secondary School Education",
      institution: "Zahira College Mawanella",
      year: "2012 - 2020",
      description:
        "Completed GCE Ordinary Level and GCE Advanced Level in Physical Science Stream.",
    },
  ];

  const resumeLinks = [
    {
      href: SE,
      label: "Software Engineering",
      download: "Resume_Software_Engineering.pdf",
    },
    {
      href: ML_AI,
      label: "AI/ML Engineering",
      download: "Resume_ML_AI_Engineering.pdf",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={ref}>
        <div className=" p-7 flex flex-col xl:flex-row md:justify-between w-full xl:gap-16">
          <div className="z-0 inline-block xl:border-l-4 border-teal-400 dark:border-teal-400 justify-between order-2 xl:order-none relative py-5">
            {/* Gradient overlay - Visible only on xl devices */}
            <div className="hidden xl:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-teal-400/30 to-transparent pointer-events-none" />

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={
                window.innerWidth > 1280 ? slideLeftVariants : slideUpVariants
              }
              transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              className="text-center xl:text-left items-center justify-between mx-auto mt-6 xl:mt-0 xl:ps-28 relative z-10"
            >
              <AnimatedText texts={["AI/ML Engineer", "Software Developer"]} />
              <h1 className="text-[40px] sm:text-5xl px-2 xl:px-0 sm:py-2 :py-1 text-gray-800 dark:text-white md:text-6xl">
                Hello I’m
              </h1>
              <SplitText
                text="Usama Puward"
                className="text-[40px] sm:text-5xl px-2 xl:px-0 sm:py-2 py-1 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
              <p className="text-center xl:text-left text-md py-2 sm:py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl xl:mx-0 mx-auto md:text-xl">
                Computer Science Undergraduate and current AI/ML Engineer
                Intern, with a strong passion for Software Developing, Machine
                Learning, and Artificial Intelligence. Skilled in developing
                efficient and innovative solutions for real-world projects and
                building high-quality applications. Eager to tackle complex
                challenges in software development and drive innovation within
                the fields of AI and ML.
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:gap-8 py-4 space-y-8 xl:space-y-0">
                <div className="relative group xl:mb-0 order-none xl:order-2">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="shadow-xl dark:shadow-[#0c121d] font-bold text-gray-700 dark:text-white rounded-full xl:rounded-none xl:rounded-r-full border-dashed border-2 hover:text-teal-600 hover:dark:text-teal-400 border-gray-700 hover:border-teal-600 dark:border-white hover:dark:border-teal-400 py-4 px-6 relative transition-all duration-300 ease-in-out dropdown-button"
                  >
                    <div className="flex items-center transition-transform duration-300 hover:scale-[1.03] gap-3">
                      <span className="text-lg">Download CV</span>
                      {showDropdown ? (
                        <AiOutlineUp className="h-[26px] w-[26px] font-bold" />
                      ) : (
                        <AiOutlineDownload className="h-[26px] w-[26px] font-bold" />
                      )}
                    </div>
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 left-0 mt-2 w-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-[#0c121d]">
                      {resumeLinks.map((resume) => (
                        <a
                          key={resume.label}
                          href={resume.href}
                          download={resume.download}
                          className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          {resume.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative z-0 flex justify-center xl:justify-left gap-[9px] sm:gap-9 xl:gap-5 text-gray-700 dark:text-gray-300 xl:mb-0 order-none xl:order-2">
                  {socials.map((social, index) => (
                    <div key={index} className="relative group">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full
                     relative overflow-hidden shadow-xl dark:shadow-[#0c121d]
                     border-2 border-teal-600 font-medium dark:border-teal-400 hover:border-black/50 hover:dark:border-white/50
                     bg-gray-100/10 dark:bg-gray-700/20
                     transition-colors duration-300"
                      >
                        {/* Hover overlay */}
                        <div
                          className="absolute inset-0 bg-gray-800 dark:bg-white 
                          scale-0 group-hover:scale-100 
                          rounded-full transition-transform duration-300 ease-in-out"
                        />

                        {/* Icon */}
                        <social.icon
                          className="w-9 h-9 relative z-10
                                  text-gray-700 dark:text-gray-300
                                  group-hover:text-white dark:group-hover:text-gray-800
                                  transition-colors duration-300 rounded-[15px]"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="relative mx-auto flex justify-center items-center animate-updown order-1 xl:order-none mt-3 xl:mt-0">
            <motion.img
              src={profile}
              alt="Usama Puward"
              className="rounded-full h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] animate-zoomIn"
            />
            <motion.svg
              className="absolute xl:-inset-x-[15px] xl:-inset-y-[-74px] h-[305px] w-[305px] sm:h-[390px] sm:w-[390px]"
              fill="transparent"
              viewBox="0 0 390 390"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="195"
                cy="195"
                r="191"
                stroke={darkMode ? "#2DD4BF" : "#0d9488"}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-7"
      >
        <div className="text-center pt-8 sm:pt-16 xl:pb-0 px-7 mb-10">
          <TrueFocus
            sentence="Welcome to My Portfolio"
            manualMode={false}
            blurAmount={0}
            borderColor="#0d9488"
            textColor="#0d9488"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 my-8"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PortfolioCard card={card} darkMode={darkMode} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Skills
        </motion.h2>
        <motion.div className="mx-auto my-6">
          <motion.div variants={slideUpVariants} className="text-center mb-12">
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
              I have a diverse background in various domains of software
              development and machine learning. My expertise allows me to create
              visually appealing interfaces, build robust server-side
              applications, and develop intelligent systems using modern tools
              and frameworks.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={
                  index % 2 === 0 ? slideLeftVariants : slideRightVariants
                }
                className="bg-green-100 dark:bg-gray-700 p-6 shadow-xl hover:shadow-xl dark:shadow-[#0c121d] transition-shadow duration-300 border-2 border-white dark:border-gray-500 hover:border-teal-600 dark:hover:border-teal-400"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                  <div className="relative w-full h-2 bg-gray-200 rounded">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal-700 to-teal-500 rounded transition-all duration-300"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        delayChildren: 0.3,
                        staggerChildren: 0.2,
                      }}
                    />
                  </div>
                  <span
                    className="text-sm dark:text-gray-400 text-gray-6
                  00 mt-1 inline-block"
                  >
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
        </motion.div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className="h-auto w-full relative my-6 shadow-xl dark:shadow-[#0c121d] border-x-4 border-teal-400 bg-green-100 dark:bg-gray-700 dark:text-gray-200"
        >
          <LogoWall
            items={logoImgs}
            direction="horizontal"
            size="clamp(8rem, 1rem + 28vmin, 25rem)"
            duration="60s"
            bgAccentColor="#2DD4BF"
          />
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Education
        </motion.h2>
        <motion.div variants={containerVariants} className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 shadow-xl dark:shadow-[#0c121d] bg-green-100 dark:bg-gray-700 dark:text-gray-200 border-2 border-white dark:border-gray-500 hover:border-2 hover:border-teal-400 hover:dark:border-teal-400"
            >
              <div className="flex items-center space-x-4">
                <edu.icon size={32} className="text-blue-400 w-1/6 sm:w-1/12" />
                <div className="flex flex-col w-5/6 sm:w-11/12">
                  <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {edu.institution} |{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      {edu.year}
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-3 dark:text-white">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
