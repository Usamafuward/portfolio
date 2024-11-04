import React from "react";
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

const Index = () => {
  return (
    <div>
      <section className="text-center p-5 lg:flex md:justify-between">
        <div>
          <h2 className="text-5xl py-3 pb-5 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Usama Puward
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Software Engineer | ML / AI Engineer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Computer Science Undergraduate with a strong passion for Machine
            Learning, AI, and Software Engineering. Skilled in developing
            efficient and innovative solutions for real-world projects and
            building high-quality applications. Eager to tackle real-world
            challenges in software development and innovate within the field of
            ML and AI.
          </p>
          <div className="text-5xl flex justify-center gap-3 lg:gap-14 py-5 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/Usamafuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://linkedin.com/in/usama-puward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/usama._fuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.x.com/usamafuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="mailto:usamafuward2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail />
            </a>
          </div>
          <Link to="/contact">
            <div>
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mt-3 border-none rounded-md flex items-center mx-auto">
                Contact Me!
              </button>
            </div>
          </Link>
        </div>
        <div className="relative mx-auto mt-10 md:mt-0 flex items-center justify-center pt-7 md:pt-0">
          <div className="relative rounded-full w-80 h-80 md:w-96 md:h-96 overflow-hidden shadow-lg">
            <img
              src={profile}
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-5xl font-bold text-center pt-20 text-teal-600 dark:text-teal-400 mb-10">
          Welcome to My Portfolio
        </h1>
        <div className="lg:flex gap-10 p-7">
          <Link to="/projects">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-normal card">
              <img
                src={design}
                alt="Projects"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h5 className="text-lg font-medium font-bold pt-8 pb-2">
                Projects
              </h5>
              <p className="py-2">
                Explore my portfolio, showcasing innovative solutions and
                technical expertise across various applications.
              </p>
            </div>
          </Link>
          <Link to="/certifications">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-normal card">
              <img
                src={code}
                alt="Certifications"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h5 className="text-lg font-medium font-bold pt-8 pb-2 ">
                Certifications
              </h5>
              <p className="py-2">
                A collection of certifications that reflect my commitment to
                skill-building and mastery of essential tools.
              </p>
            </div>
          </Link>
          <Link to="/experiences">
            <div className="text-center shadow-lg dark:shadow-gray-400 dark:bg-gray-700 dark:text-gray-200 p-10 rounded-xl my-10 bg-green-100 flex-1 flex flex-col justify-normal card">
              <img
                src={consulting}
                alt="Experiences"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h5 className="text-lg font-medium font-bold pt-8 pb-2 ">
                Experiences
              </h5>
              <p className="py-2">
                Discover my professional journey, with roles that have shaped my
                skills and approach to problem-solving.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="px-5 py-2">
        <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-14">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Languages
            </h3>
            <p>JavaScript, Python, Java, C++</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              ML Tools & Libraries
            </h3>
            <p>scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              DevOps & Containerization
            </h3>
            <p>Docker</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Cloud Platforms
            </h3>
            <p>Microsoft Azure</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Version Control
            </h3>
            <p>Git, GitHub</p>
          </div>
          <div className="text-center shadow-lg p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Frontend Libraries/Frameworks
            </h3>
            <p>React, React Native, SCSS, Tailwind CSS, Bootstrap</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Backend Frameworks
            </h3>
            <p>Node.js, Express.js, Spring Boot, Python FastAPI, Django</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Databases
            </h3>
            <p>MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div className="text-center shadow-lg  p-10 m-2 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Other Skills
            </h3>
            <p>
              Team Work, Problem Solving, Analytical Thinking, Adaptability,
              Communication (English, Sinhala, Tamil)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
