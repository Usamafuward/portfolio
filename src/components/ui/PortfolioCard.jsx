import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PortfolioCard = ({ card, darkMode = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="card-container relative group shadow-xl dark:shadow-[#0c121d] rounded-[40px] rounded-tl-none rounded-br-none cursor-pointer"
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        "--gradient-start": darkMode ? "#0f766e" : "#0f766e",
        "--gradient-middle": darkMode ? "#14b8a6" : "#14b8a6",
        "--gradient-end": darkMode ? "#5eead4" : "#5eead4",
        "--border-width": "7px",
        "--bg-color": darkMode ? "#1f2937" : "#ffffff",
        position: "relative",
        isolation: "isolate",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Holographic glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-[40px] rounded-tl-none rounded-br-none bg-gradient-to-r from-teal-400/20 via-emerald-400/20 to-teal-300/20 blur-lg opacity-0 group-hover:opacity-100"
        animate={isHovered ? { 
          scale: [1, 1.05, 1],
          opacity: [0, 1, 1]
        } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Floating particles around card */}
      <div className="absolute inset-0 overflow-hidden rounded-[40px] rounded-tl-none rounded-br-none pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            animate={isHovered ? {
              x: [Math.random() * 300, Math.random() * 300],
              y: [Math.random() * 300, Math.random() * 300],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            } : { opacity: 0 }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <HashLink
        to={card.link}
        className="bg-[#b9f7d7] dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-center h-[360px] text-center shadow-lg p-10 relative overflow-hidden rounded-[36px] rounded-tl-none rounded-br-none block"
      >
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="text-teal-500">
            {[...Array(4)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${20 + i * 80},20 L${60 + i * 80},20 L${60 + i * 80},60 L${100 + i * 80},60`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={`circle-${i}`}
                cx={50 + i * 100}
                cy={50 + i * 50}
                r="2"
                fill="currentColor"
                animate={isHovered ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                } : { opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </svg>
        </div>

        {/* Data stream lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
          animate={isHovered ? { x: ["-100%", "100%"] } : { x: "-100%" }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          animate={isHovered ? { x: ["100%", "-100%"] } : { x: "100%" }}
          transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0, delay: 0.5, ease: "linear" }}
        />

        {/* Default state content */}
        <motion.div 
          className="flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform opacity-100 group-hover:opacity-0 group-hover:-translate-y-60"
          animate={isHovered ? { 
            filter: "drop-shadow(0 0 10px rgba(13, 148, 136, 0.5))",
            y: -360,
            opacity: 0
          } : {
            filter: "drop-shadow(0 0 0px rgba(13, 148, 136, 0))",
            y: 0,
            opacity: 1
          }}
          transition={{ ease: "easeInOut" }}
        >
          {/* Image with holographic border */}
          <motion.div
            className="relative mb-14"
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {/* Rotating ring around image */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-teal-400/50"
              animate={!isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 4, repeat: !isHovered ? Infinity : 0, ease: "linear" }}
              style={{ scale: 1.3 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-emerald-400/30"
              animate={!isHovered ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 6, repeat: !isHovered ? Infinity : 0, ease: "linear" }}
              style={{ scale: 1.5 }}
            />
            
            <div className="relative z-10 p-2">
              <img
                src={card.image}
                alt={card.title}
                className="mx-auto flex h-32 lg:h-28 xl:h-32 w-auto relative z-10"
              />
            </div>
          </motion.div>
          
          {/* Title with glow effect */}
          <motion.h3 
            className="text-2xl font-medium pb-2 text-gray-800 dark:text-gray-200"
            animate={isHovered ? { 
              textShadow: "0 0 15px rgba(13, 148, 136, 0.8)",
              scale: 1.05
            } : {
              textShadow: "0 0 0px rgba(13, 148, 136, 0)",
              scale: 1
            }}
            transition={{ duration: 0.3 }}
          >
            {card.title}
          </motion.h3>

          {/* Corner accent lights */}
          <motion.div
            className="absolute -bottom-12 -right-7 w-10 h-10"
            animate={!isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-0.5 bg-teal-400/80 absolute bottom-0 left-0"
              animate={!isHovered ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
              transition={{ duration: 1.5, repeat: !isHovered ? Infinity : 0 }}
            />
            <motion.div
              className="w-0.5 h-full bg-teal-400/80 absolute top-0 right-0"
              animate={!isHovered ? { scaleY: [0, 1, 0] } : { scaleY: 0 }}
              transition={{ duration: 1.5, repeat: !isHovered ? Infinity : 0, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="absolute -top-12 -left-7 w-10 h-10"
            animate={!isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-0.5 bg-teal-400/80 absolute top-0 left-0"
              animate={!isHovered ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
              transition={{ duration: 1.5, repeat: !isHovered ? Infinity : 0, delay: 0.8 }}
            />
            <motion.div
              className="w-0.5 h-full bg-teal-400/80 absolute bottom-0 left-0"
              animate={!isHovered ? { scaleY: [0, 1, 0] } : { scaleY: 0 }}
              transition={{ duration: 1.5, repeat: !isHovered ? Infinity : 0, delay: 1.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Hover state content */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-teal-600 dark:from-teal-400 to-transparent"
          style={{ backdropFilter: "blur(10px)" }}
          initial={{ y: "100%", opacity: 0 }}
          animate={isHovered ? { 
            y: 0, 
            opacity: 1 
          } : { 
            y: "100%", 
            opacity: 0 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Matrix-style background effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-teal-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  height: "100%"
                }}
                animate={isHovered ? {
                  opacity: [0, 0.8, 0],
                  scaleY: [0, 1, 0]
                } : { opacity: 0 }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="p-4 sm:p-8 md:p-8 lg:p-2 xl:p-8 dark:text-white text-gray-800 relative z-10">
            {/* Animated image with scan lines */}
            <motion.div
              className="relative mx-auto mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="mx-auto flex h-24 sm:h-32 lg:h-20 xl:h-28 w-auto"
              />
              {/* Scanning line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/30 to-transparent h-1"
                animate={isHovered ? { y: [0, 150, 0] } : { y: 0 }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
              />
            </motion.div>
            
            {/* Animated title */}
            <motion.h5 
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { 
                opacity: 1, 
                y: 0,
              } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {card.title}
            </motion.h5>
            
            {/* Animated description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg font-medium leading-relaxed mt-2">
                {card.description}
              </p>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-white/50"
                    animate={isHovered ? {
                      backgroundColor: ["rgba(255,255,255,0.5)", "rgba(255,255,255,1)", "rgba(255,255,255,0.5)"],
                      scale: [1, 1.2, 1]
                    } : {
                      backgroundColor: "rgba(255,255,255,0.5)",
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      repeat: isHovered ? Infinity : 0
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner accent lights */}
          <motion.div
            className="absolute top-4 left-4 w-10 h-10"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-0.5 bg-white/50 absolute top-0 left-0"
              animate={isHovered ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            />
            <motion.div
              className="w-0.5 h-full bg-white/50 absolute top-0 right-10"
              animate={isHovered ? { scaleY: [0, 1, 0] } : { scaleY: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 w-10 h-10"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-0.5 bg-white/50 absolute top-10 left-0"
              animate={isHovered ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 0.8 }}
            />
            <motion.div
              className="w-0.5 h-full bg-white/50 absolute bottom-0 left-10"
              animate={isHovered ? { scaleY: [0, 1, 0] } : { scaleY: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 1.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Energy pulse effect on borders */}
        <motion.div
          className="absolute inset-0 rounded-[36px] rounded-tl-none rounded-br-none border border-teal-400/50"
          animate={isHovered ? {
            borderColor: ["rgba(13, 148, 136, 0.5)", "rgba(13, 148, 136, 1)", "rgba(13, 148, 136, 0.5)"]
          } : {
            borderColor: "rgba(13, 148, 136, 0.5)"
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
      </HashLink>

      <style>{`
        .card-container {
          background: var(--bg-color);
          padding: var(--border-width);
        }

        .card-container::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            var(--gradient-start),
            var(--gradient-middle),
            var(--gradient-end),
            var(--gradient-middle),
            var(--gradient-start)
          );
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
          border-radius: inherit;
        }

        @keyframes shimmer {
          to {
            background-position: -200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

PortfolioCard.propTypes = {
  card: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default PortfolioCard;