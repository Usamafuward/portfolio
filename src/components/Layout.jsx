import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { Outlet, Link, useLocation } from "react-router-dom";
import SE from "../assets/resume_software_engineering.pdf";
import ML_AI from "../assets/resume_ml_ai_engineering.pdf";

const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State for toggle menu
  const location = useLocation(); // Get current location

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <nav className="py-10 flex justify-between items-center dark:text-white">
          <ul className="flex items-center gap-5">
            <li>
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
                  className="flex items-center justify-center pb-1 text-3xl"
                >
                  <AiOutlineMenu />
                </button>
                {showMenu && ( // Conditionally render menu items
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
          </ul>

          <ul className="flex items-center">
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
                    download="Usama_Puward_Resume_Software_Engineering.pdf"
                    className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Software Engineering
                  </a>
                  <a
                    href={ML_AI}
                    download="Usama_Puward_Resume_ML_AI_Engineering.pdf"
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

      <main className="bg-white py-5 dark:bg-gray-900 md:px-20 lg:px-40">
        <Outlet />
      </main>

      <footer className="py-5 text-center bg-white dark:bg-gray-900">
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
        <p className="text-md py-2 dark:text-white">
          © 2024 Usama Puward | Computer Science Undergraduate @ UCSC
        </p>
      </footer>
    </div>
  );
};

export default Layout;

