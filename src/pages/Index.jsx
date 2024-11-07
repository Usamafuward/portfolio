import React, { useState, useEffect, useMemo } from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import code from "../assets/code.png";
import design from "../assets/design.png";
import consulting from "../assets/consulting.png";
import { Skills } from "../components/Skills";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Index = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = useMemo(() => ["Software Engineer", "ML / AI Engineer"], []);
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
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, isDeleting, text, delta, period, index, toRotate]);
  return (
    <div>
      <section>
        <div className="text-center p-5 lg:flex md:justify-between">
          <div className="lg:w-7/12">
            <h2 className="text-5xl py-3 pb-5 text-teal-600 font-medium dark:text-teal-400 md:text-6xl border-gray-600 dark:border-gray-400 border-4 mx-32">
              Usama Puward
            </h2>
            <h3 className="text-2xl py-2 pt-7 font-medium dark:text-white md:text-4xl">
              {` `}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Software Engineer", "ML / AI Engineer" ]'
              >
                {text}
              </span>
              {` !!`}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Computer Science Undergraduate with a strong passion for Software Engineering, Machine
              Learning and AI. Skilled in developing
              efficient and innovative solutions for real-world projects and
              building high-quality applications. Eager to tackle real-world
              challenges in software development and innovate within the field
              of ML and AI.
            </p>
            <div className="social-icon flex justify-center gap-3 lg:gap-14 py-5 text-gray-500">
              <span>
                <a
                  href="https://github.com/Usamafuward"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://linkedin.com/in/usama-puward"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </span>
              <span>
                <a
                  href="https://www.x.com/usamafuward"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/usama._fuward"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </span>
              <span>
                <a
                  href="mailto:usamafuward2001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillMail />
                </a>
              </span>
            </div>
            <Link to="/contact">
              <div>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mt-3 border-none rounded-md flex items-center mx-auto">
                  Contact Me!
                </button>
              </div>
            </Link>
          </div>
          <div className="relative mx-auto mt-10 lg:mt-0 flex items-center justify-center pt-7 md:pt-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="relative rounded-full w-80 h-80 md:w-96 md:h-96 overflow-hidden shadow-xl profile">
                    <img src={profile} alt="profile" className="rounded-full" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-5xl font-bold text-center pt-20 text-teal-600 dark:text-teal-400 mb-10">
          Welcome to My Portfolio
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7">
          <Link to="/projects">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-center card-index">
              <img
                src={design}
                alt="Projects"
                width={125}
                height={125}
                className="mx-auto"
              />
              <h3 className="text-2xl font-medium font-bold pt-8 pb-2">
                Projects
              </h3>
              <div className="overlay">
                <h5 className="text-xl font-medium font-bold pb-2 text-white">
                  Projects
                </h5>
                <p className="p-3 text-white">
                  Explore my portfolio, showcasing innovative solutions and
                  technical expertise across various applications.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/certifications">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-center card-index">
              <img
                src={code}
                alt="Certifications"
                width={125}
                height={125}
                className="mx-auto"
              />
              <h3 className="text-2xl font-medium font-bold pt-8 pb-2 ">
                Certifications
              </h3>
              <div className="overlay">
                <h5 className="text-xl font-medium font-bold pb-2 text-white">
                  Certifications
                </h5>
                <p className="p-3 text-white">
                  A collection of certifications that reflect my commitment to
                  skill-building and mastery of essential tools.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/experiences">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-center card-index">
              <img
                src={consulting}
                alt="Experiences"
                width={125}
                height={125}
                className="mx-auto"
              />
              <h3 className="text-2xl font-medium font-bold pt-8 pb-2 ">
                Experiences
              </h3>
              <div className="overlay">
                <h5 className="text-xl font-medium font-bold pb-2 text-white">
                  Experiences
                </h5>
                <p className="p-3 text-white">
                  Discover my professional journey, with roles that have shaped
                  my skills and approach to problem-solving.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="p-7 my-7">
        <Skills />
      </section>
      <section className="p-7">
        <h2 className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-16">
          Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Languages
            </h3>
            <p>JavaScript, Python, Java, C++</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              ML Tools & Libraries
            </h3>
            <p>scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              DevOps & Containerization
            </h3>
            <p>Docker</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Cloud Platforms
            </h3>
            <p>Microsoft Azure</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Version Control
            </h3>
            <p>Git, GitHub</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Frontend Libraries/Frameworks
            </h3>
            <p>React, React Native, SCSS, Tailwind CSS, Bootstrap</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Backend Frameworks
            </h3>
            <p>Node.js, Express.js, Spring Boot, Python FastAPI, Django</p>
          </div>
          <div className="text-center shadow-lg  p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Databases
            </h3>
            <p>MySQL, PostgreSQL, MongoDB</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
