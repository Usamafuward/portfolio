import { useState, useEffect, useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineUp,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { Outlet, Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

const Layout = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
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

  useEffect(() => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowMenu(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-button")) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
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
            ? "bg-green-100/80 dark:bg-gray-700/80 shadow-xl"
            : "bg-white/80 dark:bg-gray-900/80"
        }`}
      >
        <nav
          className={`flex justify-between items-center dark:text-white ${
            isScrolled ? "py-[14px]" : "py-6"
          } transition-all duration-300`}
        >
          <ul className="flex items-center justify-between gap-4 sm:gap-5">
            <li className="lg:hidden">
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center justify-center text-3xl menu-button"
                >
                  <AiOutlineMenu className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
                {showMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 menu-button backdrop-filter backdrop-blur-md">
                    {menuItems.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
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
                <h1 className="font-bold font-playfair text-2xl sm:text-3xl cursor-pointer text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
                  Portfolio
                </h1>
              </Link>
            </li>
          </ul>

          <ul className="flex items-center">
            <li className="hidden lg:flex md:gap-5 md:mr-5 ">
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`hover:text-teal-500 dark:hover:text-teal-400 text-lg font-medium ${
                    isActive(item.to)
                      ? "border-b-[2.5px] border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 transform -translate-y-1"
                      : "text-gray-800 dark:text-white"
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
            <li className="relative ml-4 sm:ml-5">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-cyan-700 to-teal-500 text-white p-2 border-2 border-white flex items-center hover:from-cyan-600 hover:to-teal-600 shadow-xl transition-colors duration-200">
                  <span className="hidden xl:inline font-medium">
                    Let&apos;s Connect
                  </span>
                  <span className="xl:hidden font-medium">Connect</span>
                  <MdOutlineHandshake className="ml-1 sm:ml-[6px] h-6 w-6 font-bold" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-white py-4 dark:bg-gray-900 md:px-16 lg:px-32 pt-[100px] w-full transition-all duration-300">
        <Outlet />
      </main>

      <footer className="py-4 text-center bg-white dark:bg-gray-900 transition-all duration-300">
        <div className="flex justify-center gap-[9px] sm:gap-10 py-5 text-gray-700 dark:text-gray-300">
          {socialLinks.map((link, index) => (
            <div key={index} className="relative group">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full
                       relative overflow-hidden shadow-xl
                       border-2 border-teal-600 font-medium dark:border-teal-400 hover:border-black/50 hover:dark:border-white/50
                       bg-gray-100/10 dark:bg-gray-700/20
                       text-gray-700 dark:text-gray-300
                       hover:text-white dark:hover:text-gray-800
                       transition-all duration-300 z-0"
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-gray-800 dark:bg-white 
                            scale-0 group-hover:scale-100 
                            rounded-full transition-transform duration-300 ease-in-out"
                />

                {/* Icon wrapper */}
                <link.icon
                  className="w-9 h-9 sm:w-10 sm:h-10 relative z-10
                                  text-gray-700 dark:text-gray-300
                                  group-hover:text-white dark:group-hover:text-gray-800
                                  transition-colors duration-300 [15px]"
                />
              </a>
            </div>
          ))}
        </div>

        <p className="text-md py-2 dark:text-white">
          © 2024 Usama Puward | Computer Science Undergraduate @ UCSC
        </p>
      </footer>
      {isScrolled ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 lg:right-28 bg-teal-600 text-white p-3 rounded-full shadow-xl hover:bg-teal-600 transition-colors backdrop-blur-lg backdrop-filter bg-opacity-30"
        >
          <AiOutlineUp />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;