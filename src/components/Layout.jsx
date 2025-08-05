import { useState, useEffect, useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
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
import AnimatedBackground from "./ui/AnimatedBackground";
import { motion } from "framer-motion";

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

  const footerLinks = {
    columnOne: menuItems.slice(0, Math.ceil(menuItems.length / 2)),
    columnTwo: menuItems.slice(Math.ceil(menuItems.length / 2)),
  };

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
      <AnimatedBackground />
      <header
        className={`px-7 md:px-[92px] lg:px-[156px] fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#b9f7d7]/80 dark:bg-gray-700/80 backdrop-filter backdrop-blur-[8px] shadow-xl"
            : "bg-transparent dark:bg-transparent shadow-none"
        }`}
      >
        <nav
          className={`flex justify-between items-center dark:text-white ${
            isScrolled ? "py-[14px]" : "py-6"
          } transition-all duration-300`}
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="lg:hidden">
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center justify-center text-3xl menu-button"
                >
                  <AiOutlineMenu className="w-6 h-6 sm:w-7 sm:h-7 hover:text-teal-500" />
                </button>
                {showMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl dark:shadow-[#0c121d] transition-all duration-300 menu-button backdrop-filter backdrop-blur-md">
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
            </div>
            <Link to="/">
              <motion.div
                className="relative inline-block group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h1
                  className="font-playfair text-2xl sm:text-3xl font-bold dark:bg-white bg-gray-800
                  lg:bg-gradient-to-r from-teal-600 to-teal-400
                  bg-clip-text text-transparent
                  transition-all duration-300
                  hover:bg-gradient-to-r mb-[2px]"
                >
                  Portfolio
                </h1>
                <span
                  className="hidden lg:block absolute -bottom-1 left-0 w-0 h-0.5
                  bg-gradient-to-r from-teal-600 to-teal-400
                  group-hover:w-full transition-all duration-300"
                ></span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {menuItems.slice(0, -1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-teal-500 dark:hover:text-teal-400 text-lg font-medium transition-all duration-200 ${
                  isActive(item.to)
                    ? "border-b-[2.5px] border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 transform -translate-y-1"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <motion.div
              whileHover={{ rotate: 35 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {darkMode ? (
                <MdLightMode
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl w-7 h-7 text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl w-7 h-7 text-gray-700 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                />
              )}
            </motion.div>
            <Link to="/contact">
              <button className="glowing-button flex items-center px-2 py-1 sm:py-2 border-2 border-white text-white bg-gradient-to-r from-cyan-700 to-teal-500 shadow-xl transition-all duration-300">
                <span className="hidden xl:inline font-medium">
                  Let&apos;s Connect
                </span>
                <span className="xl:hidden font-medium">Connect</span>
                <MdOutlineHandshake className="ml-1 sm:ml-[6px] h-[22px] w-[22px] font-bold" />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="bg-transparent pb-8 dark:bg-transparent md:px-16 lg:px-32 pt-[100px] w-full transition-all duration-300 z-10">
        <Outlet />
      </main>

      <footer className="py-4 space-y-4 px-7 md:px-[92px] lg:px-[156px] bg-transparent dark:bg-transparent transition-all duration-300 z-10">
        <div className="mx-auto md:flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* About Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white">
                About Me
              </h3>
              <p className="text-center flex items-start text-gray-700 dark:text-gray-300">
                Computer Science Undergraduate @ UCSC passionate about creating
                innovative solutions and exploring new technologies.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white">
                Quick Links
              </h3>
              <div className="space-y-2">
                <ul className="flex flex-wrap mx-auto gap-3 xl:gap-5 justify-center">
                  {footerLinks.columnOne.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.to}
                        className="text-gray-700 flex justify-center dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <ul className="flex flex-wrap mx-auto gap-3 xl:gap-5 justify-center">
                  {footerLinks.columnTwo.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.to}
                        className="text-gray-700 flex justify-center dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {socialLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <motion.a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full
                       relative overflow-hidden shadow-xl dark:shadow-[#0c121d]
                       border-2 border-teal-600 dark:border-teal-400 hover:border-black/50 hover:dark:border-white/50
                       bg-gray-100/10 dark:bg-gray-700/20
                       text-gray-700 dark:text-gray-300
                       hover:text-white dark:hover:text-gray-800
                       transition-all duration-300 z-0"
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="absolute inset-0 bg-gray-800 dark:bg-white 
                            scale-0 group-hover:scale-100 
                            rounded-full transition-transform duration-300 ease-in-out"
                      />
                      <link.icon
                        className="w-7 h-7 sm:w-7 sm:h-7 relative z-10
                                  text-gray-700 dark:text-gray-300
                                  group-hover:text-white dark:group-hover:text-gray-800
                                  transition-colors duration-300"
                      />
                    </motion.a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <p className="text-md text-gray-800 dark:text-gray-200 text-center py-4">
          © 2024 Usama Puward | Computer Science Undergraduate @ UCSC
        </p>
      </footer>
      {isScrolled ? (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 lg:right-28 bg-teal-600 text-white p-3 rounded-full shadow-xl hover:bg-teal-600 transition-colors backdrop-blur-lg backdrop-filter bg-opacity-30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineUp />
        </motion.button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
