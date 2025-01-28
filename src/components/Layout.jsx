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
    setShowMenu(false); // Close the menu on location change
    window.scrollTo(0, 0); // Scroll to the top of the page on navigation
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set `isScrolled` based on scroll position
      setShowDropdown(false); // Close dropdown on scroll
      setShowMenu(false); // Close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={darkMode ? "dark" : ""}>
      <header
        className={`px-7 md:px-[92px] lg:px-[156px] fixed top-0 w-full z-10 transition-colors duration-300 backdrop-filter backdrop-blur-md ${
          isScrolled
            ? "bg-green-100/80 dark:bg-gray-700/80 shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80"
        }`}
      >
        <nav
          className={`flex justify-between items-center dark:text-white ${
            isScrolled ? "py-5" : "py-7"
          } transition-all duration-300`}
        >
          <ul className="flex items-center gap-5">
            <li className="lg:hidden">
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center justify-center pb-1 text-3xl"
                >
                  <AiOutlineMenu />
                </button>
                {showMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-[5px] shadow-lg transition-all duration-300">
                    {menuItems.map((item, index) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            index === 0
                              ? "rounded-t-[5px]"
                              : index === menuItems.length - 1
                              ? "rounded-b-[5px]"
                              : ""
                          } ${
                            isActive(item.to)
                              ? "border-s-4 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400"
                              : "text-gray-700 dark:text-white"
                          }`}
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
            <li className="hidden lg:flex gap-5 mr-6">
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`hover:text-teal-500 dark:hover:text-teal-400 text-lg font-medium transition-colors duration-300 ${
                    isActive(item.to)
                      ? "border-b-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400"
                      : "text-gray-700 dark:text-white"
                  }`}
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
            <li className="relative ml-8">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-[5px] flex items-center hover:from-cyan-600 hover:to-teal-600 shadow-lg transition-colors duration-200"
              >
                Resume{" "}
                {showDropdown ? (
                  <AiOutlineUp className="ml-2" />
                ) : (
                  <AiOutlineDown className="ml-2" />
                )}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-[5px] w-48 bg-white dark:bg-gray-800 rounded-[5px] shadow-lg transition-all duration-300">
                  {resumeLinks.map((resume, index) => (
                    <a
                      key={resume.label}
                      href={resume.href}
                      download={resume.download}
                      className={`block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                        index === 0
                          ? "rounded-t-[5px]"
                          : index === resumeLinks.length - 1
                          ? "rounded-b-[5px]"
                          : ""
                      }`}
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

      <main className="bg-white py-4 dark:bg-gray-900 md:px-16 lg:px-32 pt-[120px] w-full transition-all duration-300">
        <Outlet />
      </main>

      <footer className="py-4 text-center bg-white dark:bg-gray-900 transition-all duration-300">
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
      {isScrolled ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 lg:right-28 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors backdrop-blur-lg backdrop-filter bg-opacity-30"
        >
          ↑
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
