import { useState, useEffect, useContext, useMemo, useRef } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import profile from "@/assets/Usama.jpg";
import { Skills } from "@/components/Skills";
import TrackVisibility from "react-on-screen";
import SplitText from "@/components/ui/SplitText";
import LogoWall from "@/components/ui/LogoWall";
import TiltedCard from "@/components/ui/TitleCard";
import TrueFocus from "@/components/ui/TrueFocus";
import PixelTransition from "@/components/ui/PixelTransition";
import logoSvg from "@/assets/logo_svg";
import flatIcon from "@/assets/flat_icon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

const Index = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(() => ["AI / ML Engineer", "Software Engineer"], []);
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
      items: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
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
      items: [
        "Node.js",
        "Express.js",
        "Python FastAPI",
        "Django",
      ],
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

  return (
    <div>
      {/* Hero Section */}
      <section ref={ref}>
        <div className="text-center p-5 xl:flex md:justify-between space-y-20">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="items-center justify-center mx-auto"
          >
            <SplitText
              text="Usama Puward"
              className="text-5xl px-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <h3 className="text-4xl py-2 pt-7 font-medium dark:text-white md:text-4xl">
              {` `}
              <span className="txt-rotate" data-period="1000">
                {text}
              </span>
              {` !!`}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Computer Science Undergraduate and current AI/ML Engineer Intern,
              with a strong passion for Software Engineering, Machine Learning,
              and Artificial Intelligence. Skilled in developing efficient and
              innovative solutions for real-world projects and building
              high-quality applications. Eager to tackle complex challenges in
              software development and drive innovation within the fields of ML
              and AI.
            </p>

            <div className="social-icon flex justify-center gap-3 lg:gap-14 py-5 text-gray-700 dark:text-gray-300 mb-7 md:mb-0">
              {[
                {
                  icon: AiOutlineGithub,
                  link: "https://github.com/Usamafuward",
                },
                {
                  icon: AiFillLinkedin,
                  link: "https://linkedin.com/in/usama-puward",
                },
                {
                  icon: AiFillTwitterCircle,
                  link: "https://www.x.com/usamafuward",
                },
                {
                  icon: AiFillInstagram,
                  link: "https://www.instagram.com/usama._fuward",
                },
                { icon: AiFillMail, link: "mailto:usamafuward2001@gmail.com" },
              ].map((social, index) => (
                <span
                  key={index}
                  className="dark:hover:text-gray-800 hover:text-white"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:hover:text-gray-800 hover:text-white transition-colors duration-300"
                  >
                    <social.icon className="w-16 h-16" />
                  </a>
                </span>
              ))}
            </div>
            <HashLink to="/contact">
              <button className="font-bold text-black dark:text-white border-2 border-black  dark:border-white py-4 px-8 relative transition-all duration-300 ease-in-out mt-15 hover:bg-gradient-to-r from-blue-600 to-teal-500">
                Let’s Connect
              </button>
            </HashLink>
          </motion.div>
          <motion.div className="relative mx-auto my-auto flex items-top justify-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate-zoomIn" : ""}>
                  <div className="relative rounded-full animate-updown">
                    <TiltedCard
                      imageSrc={profile}
                      altText="Usama Puward"
                      captionText="Usama Puward"
                      containerHeight="325px"
                      containerWidth="325px"
                      imageHeight="325px"
                      imageWidth="325px"
                      rotateAmplitude={12}
                      scaleOnHover={1.1}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
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
            // <HashLink
            //   key={index}
            //   to={card.link}
            //   className="group text-center p-10 rounded-xl my-5 border-2 border-white dark:border-gray-500 dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 bg-green-100 flex-1 flex flex-col justify-center relative overflow-hidden card-index"
            // >
            //   <img
            //     src={card.image}
            //     alt={card.title}
            //     className="mx-auto h-[125px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
            //   />
            //   <h3 className="text-2xl font-medium pt-8 pb-2">{card.title}</h3>
            //   {/* Overlay */}
            //   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center p-5 rounded-xl transform translate-y-[-100%] group-hover:translate-y-0">
            //     {/* Description */}
            //     <div className="transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            //       <h5 className="text-xl font-bold pb-2 text-white">
            //         {card.title}
            //       </h5>
            //       <p className="p-3 text-white text-center">
            //         {card.description}
            //       </p>
            //     </div>
            //   </div>
            // </HashLink>
            <motion.div key={index} variants={itemVariants}>
              <HashLink
                key={index}
                to={card.link}
                className="group text-center flex-1 flex flex-col justify-center relative my-5"
              >
                <PixelTransition
                  firstContent={
                    <div className="flex flex-col h-full items-center justify-center p-4 rounded-xl border-2 border-white dark:border-gray-500 dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 bg-green-100 ">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="mx-auto h-[125px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 "
                      />
                      <h3 className="text-2xl text-black dark:text-white font-medium pt-8 pb-2 text-">
                        {card.title}
                      </h3>
                    </div>
                  }
                  secondContent={
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center p-5 rounded-xl transform translate-y-[-100%] group-hover:translate-y-0 border-2 border-white dark:border-gray-500">
                      <div className="transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <h5 className="text-xl font-bold pb-2 text-white">
                          {card.title}
                        </h5>
                        <p className="p-3 text-white text-center">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.3}
                  className="custom-pixel-card"
                />
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
        className="p-7 my-7"
      >
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
          className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12"
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className="h-auto w-full relative my-6 shadow-lg border-x-4 border-teal-400 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-10"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center shadow-lg p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200 border-2  border-white dark:border-gray-500 hover:border-2 hover:border-teal-400 hover:dark:border-teal-400"
            >
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {tech.title}
              </h3>
              <p>{tech.items.join(", ")}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
