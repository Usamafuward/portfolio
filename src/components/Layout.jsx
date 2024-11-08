import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillMail,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { Outlet, Link, useLocation } from "react-router-dom";
import SE from "../assets/Resume_SE.pdf";
import ML_AI from "../assets/Resume_ML.pdf";

const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set `isScrolled` based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header
        className={`px-8 md:px-16 lg:px-40 fixed top-0 w-full z-10 transition-colors duration-300 ${
          isScrolled
            ? "bg-green-100 dark:bg-gray-700 shadow-lg"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <nav
          className={`flex justify-between items-center dark:text-white ${
            isScrolled ? "py-4" : "py-7"
          }`}
        >
          <ul className="flex items-center gap-5">
            <li className="md:hidden">
              {" "}
              {/* Menu button for mobile only */}
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center justify-center pb-1 text-3xl"
                >
                  <AiOutlineMenu />
                </button>
                {showMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/certifications"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Certifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/experiences"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Experiences
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Contact Me!
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/">
                <h1 className="font-burtons text-xl cursor-pointer">
                  Portfolio
                </h1>
              </Link>
            </li>
            {/* Inline links for medium-sized screens and up */}
          </ul>

          <ul className="flex items-center">
            <li className="hidden md:flex gap-5 mr-6">
              <Link
                to="/"
                className="text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
              >
                Projects
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
              >
                Certifications
              </Link>
              <Link
                to="/experiences"
                className="text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
              >
                Experiences
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li className="relative ml-8">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md flex items-center"
              >
                Resume{" "}
                {showDropdown ? (
                  <AiOutlineUp className="ml-2" />
                ) : (
                  <AiOutlineDown className="ml-2" />
                )}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                  <a
                    href={SE}
                    download="Resume_Software_Engineering.pdf"
                    className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Software Engineering
                  </a>
                  <a
                    href={ML_AI}
                    download="Resume_ML_AI_Engineering.pdf"
                    className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    ML/AI Engineering
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-white py-4 dark:bg-gray-900 md:px-16 lg:px-32 pt-[120px]">
        <Outlet />
      </main>

      <footer className="py-4 text-center bg-white dark:bg-gray-900">
        <div className="social-icon flex justify-center gap-3 lg:gap-14 py-5 text-gray-700 dark:text-gray-300">
          <span className="dark:hover:text-gray-800 hover:text-white">
            <a
              href="https://github.com/Usamafuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </span>
          <span className="dark:hover:text-gray-800 hover:text-white">
            <a
              href="https://linkedin.com/in/usama-puward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </span>
          <span className="dark:hover:text-gray-800 hover:text-white">
            <a
              href="https://www.x.com/usamafuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </span>
          <span className="dark:hover:text-gray-800 hover:text-white">
            <a
              href="https://www.instagram.com/usama._fuward"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </span>
          <span className="dark:hover:text-gray-800 hover:text-white">
            <a
              href="mailto:usamafuward2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail />
            </a>
          </span>
        </div>

        <p className="text-md py-2 dark:text-white">
          © 2024 Usama Puward | Computer Science Undergraduate @ UCSC
        </p>
      </footer>
    </div>
  );
};

export default Layout;
