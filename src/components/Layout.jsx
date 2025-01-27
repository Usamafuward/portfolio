import { useState, useEffect, useContext } from "react";
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
import { DarkModeContext } from "../context/DarkModeContext";
import SE from "../assets/Resume_SE.pdf";
import ML_AI from "../assets/Resume_ML.pdf";

const Layout = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/experiences", label: "Experiences" },
    { to: "/contact", label: "Contact Me!" },
  ];

  const socialLinks = [
    { href: "https://github.com/Usamafuward", icon: <AiOutlineGithub /> },
    { href: "https://linkedin.com/in/usama-puward", icon: <AiFillLinkedin /> },
    { href: "https://www.x.com/usamafuward", icon: <AiFillTwitterCircle /> },
    {
      href: "https://www.instagram.com/usama._fuward",
      icon: <AiFillInstagram />,
    },
    { href: "mailto:usamafuward2001@gmail.com", icon: <AiFillMail /> },
  ];

  const resumeLinks = [
    {
      href: SE,
      label: "Software Engineering",
      download: "Resume_Software_Engineering.pdf",
    },
    {
      href: ML_AI,
      label: "ML/AI Engineering",
      download: "Resume_ML_AI_Engineering.pdf",
    },
  ];

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
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center justify-center pb-1 text-3xl"
                >
                  <AiOutlineMenu />
                </button>
                {showMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                    {menuItems.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/">
                <h1 className="font-bold font-serif text-2xl cursor-pointer text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
                  Portfolio
                </h1>
              </Link>
            </li>
          </ul>

          <ul className="flex items-center">
            <li className="hidden md:flex gap-5 mr-5">
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 text-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
              />
            </li>
            <li className="relative ml-5">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md flex items-center hover:from-cyan-600 hover:to-teal-600 shadow-lg transition-colors duration-200"
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
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-white py-4 dark:bg-gray-900 md:px-16 lg:px-32 pt-[120px] w-full">
        <Outlet />
      </main>

      <footer className="py-4 text-center bg-white dark:bg-gray-900">
        <div className="social-icon flex justify-center gap-3 lg:gap-14 py-5 text-gray-700 dark:text-gray-300">
          {socialLinks.map((link, index) => (
            <span
              key={index}
              className="dark:hover:text-gray-800 hover:text-white"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </span>
          ))}
        </div>

        <p className="text-md py-2 dark:text-white">
          © 2024 Usama Puward | Computer Science Undergraduate @ UCSC
        </p>
      </footer>
    </div>
  );
};

export default Layout;
