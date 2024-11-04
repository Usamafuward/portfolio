import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import code from "../assets/code.png";
import design from "../assets/design.png";
import consulting from "../assets/consulting.png";

const Index = () => {
  return (
    <div>
      <section className="text-center p-5 py-5 md:flex md:justify-between">
        <div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-10 md:mt-0 flex items-center justify-center">
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
        <div className="lg:flex gap-10 p-5">
          <Link to="/projects">
            <div className="card experiences-card">
              <div className="text-center shadow-lg dark:shadow-gray-400 p-10 rounded-xl my-10 bg-green-100 flex-1">
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
            </div>
          </Link>
          <Link to="/certifications">
            <div className="card experiences-card">
              <div className="text-center shadow-lg dark:shadow-gray-400 p-10 rounded-xl my-10 bg-green-100 flex-1">
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
            </div>
          </Link>
          <Link to="/experiences">
            <div className="card experiences-card">
              <div className="text-center shadow-lg dark:shadow-gray-400 p-10 rounded-xl my-10 bg-green-100 flex-1">
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
                  Discover my professional journey, with roles that have shaped
                  my skills and approach to problem-solving.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
