import { useState, useEffect, useContext, useMemo, useRef } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import {
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import profile from "@/assets/Usama.jpg";
import { Skills } from "@/components/Skills";
// import TrackVisibility from "react-on-screen";
import SplitText from "@/components/ui/SplitText";
import LogoWall from "@/components/ui/LogoWall";
// import TiltedCard from "@/components/ui/TitleCard";
import TrueFocus from "@/components/ui/TrueFocus";
// import PixelTransition from "@/components/ui/PixelTransition";
import logoSvg from "@/assets/logo_svg";
import flatIcon from "@/assets/flat_icon";
import { MdOutlineHandshake } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

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

// const slideRightVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

const slideLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Index = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(
    () => ["AI / ML Engineer", "Software Developer"],
    []
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, isDeleting, text, delta, period, toRotate]);

  const cards = [
    {
      title: "Projects",
      image: !darkMode ? flatIcon.project_full : flatIcon.project_white,
      description:
        "Explore my portfolio, showcasing innovative solutions and technical expertise across various applications.",
      link: "/projects",
    },
    {
      title: "Certifications",
      image: !darkMode ? flatIcon.certificate_2 : flatIcon.certificate_2_white,
      description:
        "A collection of certifications that reflect my commitment to skill-building and mastery of essential tools.",
      link: "/certifications",
    },
    {
      title: "Experiences",
      image: !darkMode ? flatIcon.quality_full : flatIcon.quality_white,
      description:
        "Discover my professional journey, with roles that have shaped my skills and approach to problem-solving.",
      link: "/experiences",
    },
  ];

  const technologies = [
    { title: "Languages", items: ["JavaScript", "Python", "C++"] },
    {
      title: "ML Tools & Libraries",
      items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    },
    { title: "DevOps & Containerization", items: ["Docker"] },
    { title: "Cloud Platforms", items: ["Microsoft Azure"] },
    { title: "Version Control", items: ["Git", "GitHub"] },
    {
      title: "Frontend Libraries/Frameworks",
      items: ["React", "React Native", "SCSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Frameworks",
      items: ["Node.js", "Express.js", "Python FastAPI", "Django"],
    },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
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
      description: "Completed GCE Ordinary Level and GCE Advanced Level in Physical Science Stream.",
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
              <h3 className="text-xl sm:sm:py-2 py-1 font-medium text-gray-800 dark:text-gray-200 md:text-2xl">
                {` `}
                <span className="txt-rotate" data-period="1000">
                  {text}
                </span>
                {` !!`}
              </h3>
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
                the fields of ML and AI.
              </p>
              <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-10">
                <div className="relative z-0 flex justify-center xl:justify-left gap-[9px] sm:gap-9 xl:gap-5 sm:py-4 py-2 text-gray-700 dark:text-gray-300 mb-7 xl:mb-0 order-none xl:order-2">
                  {socials.map((social, index) => (
                    <div key={index} className="relative group">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full
                     relative overflow-hidden
                     border border-black/50 dark:border-white/50
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
                <HashLink to="/contact">
                  <button className="flex items-center font-bold text-black dark:text-white border-2 border-black dark:border-white py-4 px-6 relative transition-all duration-300 ease-in-out mt-15 hover:bg-gradient-to-r from-cyan-600 to-teal-500 order-none xl:order-1 gap-3">
                    <span className="text-lg">Let’s Connect</span>
                    <MdOutlineHandshake className=" h-[26px] w-[26px] font-bold" />
                  </button>
                </HashLink>
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
              className="absolute xl:-inset-x-[15px] xl:-inset-y-[-75px] h-[320px] w-[320px] sm:h-[390px] sm:w-[390px]"
              fill="transparent"
              viewBox="0 0 390 390"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="195"
                cy="195"
                r="192"
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
      >
        <div className="text-center pt-8 sm:pt-16 pb-5 xl:pb-0 px-7">
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
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <HashLink
                key={index}
                to={card.link}
                className="group text-center p-10 my-5 border-2 border-white dark:border-gray-500 dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 bg-green-100 flex-1 flex flex-col justify-center relative overflow-hidden h-[360px]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className=" mx-auto h-32 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="text-2xl font-medium pt-8 pb-2">{card.title}</h3>
                <div className=" absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center p-5 -translate-y-full group-hover:translate-y-0">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h5 className="text-xl font-bold pb-2 text-white">
                      {card.title}
                    </h5>
                    <p className="p-3 text-white text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </HashLink>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-7"
      >
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Skills
        </motion.h2>
        <Skills />
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="p-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className="h-auto w-full relative my-6 shadow-lg border-x-4 border-teal-400 bg-green-100 dark:bg-gray-700 dark:text-gray-200"
        >
          <LogoWall
            items={logoImgs}
            direction="horizontal"
            size="clamp(8rem, 1rem + 28vmin, 25rem)"
            duration="60s"
            bgAccentColor="#2DD4BF"
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center shadow-lg p-10 bg-green-100 dark:bg-gray-700 dark:text-gray-200 border-2  border-white dark:border-gray-500 hover:border-2 hover:border-teal-400 hover:dark:border-teal-400"
            >
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {tech.title}
              </h3>
              <p>{tech.items.join(", ")}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="p-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Education
        </motion.h2>
        <motion.div variants={containerVariants} className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 shadow-lg bg-green-100 dark:bg-gray-700 dark:text-gray-200 border-2 border-white dark:border-gray-500 hover:border-2 hover:border-teal-400 hover:dark:border-teal-400"
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
