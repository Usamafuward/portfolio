import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";

import { DarkModeContext } from "@/context/DarkModeContext";

const FuturisticCyberBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [particles, setParticles] = useState([]);
  const [, setGridLines] = useState([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme-based color schemes
  const theme = darkMode
    ? {
        background: "from-gray-900 via-gray-800 to-black",
        gridColors: {
          primary: "rgba(13,148,136,0.3)",
          secondary: "rgba(34,211,238,0.2)",
          tertiary: "rgba(59,130,246,0.3)",
        },
        particleColors: {
          primary: "rgba(13,148,136,0.8)",
          primaryLight: "rgba(13,148,136,0.2)",
          secondary: "rgba(34,211,238,1)",
          secondaryLight: "rgba(34,211,238,0.3)",
        },
        shapeOpacity: "20",
        borderOpacity: "40",
        ambientGlow: "from-teal-500/5 via-transparent to-cyan-500/5",
      }
    : {
        background: "from-blue-50 via-cyan-50 to-teal-50",
        gridColors: {
          primary: "rgba(13,148,136,0.4)",
          secondary: "rgba(34,211,238,0.3)",
          tertiary: "rgba(59,130,246,0.4)",
        },
        particleColors: {
          primary: "rgba(13,148,136,0.9)",
          primaryLight: "rgba(13,148,136,0.3)",
          secondary: "rgba(34,211,238,1)",
          secondaryLight: "rgba(34,211,238,0.4)",
        },
        shapeOpacity: "30",
        borderOpacity: "60",
        ambientGlow: "from-teal-200/10 via-transparent to-cyan-200/10",
      };

  // Initialize particles and grid lines
  useEffect(() => {
    const initializeParticles = () => {
      const newParticles = [];
      const particleCount = window.innerWidth < 640 ? 25 : 50;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          type: Math.random() > 0.7 ? "node" : "particle",
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      setParticles(newParticles);
    };

    const initializeGrid = () => {
      const newGridLines = [];
      const spacing = 80;

      // Vertical lines
      for (let x = 0; x < window.innerWidth; x += spacing) {
        newGridLines.push({
          type: "vertical",
          position: x,
          opacity: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * 0.05,
        });
      }

      // Horizontal lines
      for (let y = 0; y < window.innerHeight; y += spacing) {
        newGridLines.push({
          type: "horizontal",
          position: y,
          opacity: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * 0.05,
        });
      }

      setGridLines(newGridLines);
    };

    // Initialize particles and grid lines
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    initializeParticles();
    initializeGrid();

    const handleResize = () => {
      initializeParticles();
      initializeGrid();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Wrap around screen edges
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
            pulsePhase: particle.pulsePhase + 0.02,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Floating geometric shapes data
  // const floatingShapes = Array.from({ length: window.innerWidth < 640 ? 8 : 15 }, (_, i) => ({
  //   id: i,
  //   size: 20 + Math.random() * 40,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   rotation: Math.random() * 360,
  //   duration: 20 + Math.random() * 20,
  //   delay: Math.random() * 5,
  //   shape: ['hexagon', 'triangle', 'diamond', 'circuit'][Math.floor(Math.random() * 4)],
  // }));

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br ${theme.background}`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          className={darkMode ? "opacity-20" : "opacity-30"}
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient
              id="gridGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={theme.gridColors.primary} />
              <stop offset="50%" stopColor={theme.gridColors.secondary} />
              <stop offset="100%" stopColor={theme.gridColors.tertiary} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Circuit Pattern Overlay */}
      <div
        className={`absolute inset-0 ${darkMode ? "opacity-10" : "opacity-15"}`}
      >
        <svg width="100%" height="100%">
          {Array.from({ length: 20 }, (_, i) => {
            const x = (i % 4) * 25;
            const y = Math.floor(i / 4) * 20;
            return (
              <g key={i}>
                <motion.path
                  d={`M${x}% ${y}% L${x + 10}% ${y}% L${x + 10}% ${y + 5}% L${
                    x + 15
                  }% ${y + 5}%`}
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, darkMode ? 0.5 : 0.7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx={`${x + 15}%`}
                  cy={`${y + 5}%`}
                  r="2"
                  fill={
                    darkMode ? "rgba(13,148,136,0.6)" : "rgba(13,148,136,0.8)"
                  }
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </g>
            );
          })}
          <defs>
            <linearGradient id="circuitGradient">
              <stop offset="0%" stopColor={theme.particleColors.primary} />
              <stop offset="100%" stopColor={theme.particleColors.secondary} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      {/* {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-20, -window.innerHeight - 20],
            rotate: [0, shape.rotation + 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {shape.shape === 'hexagon' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-teal-400/20 to-cyan-400/20 border-teal-400/40' : 'from-teal-500/30 to-cyan-500/30 border-teal-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              }}
            />
          )}
          {shape.shape === 'triangle' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-cyan-400/20 to-blue-400/20 border-cyan-400/40' : 'from-cyan-500/30 to-blue-500/30 border-cyan-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
          {shape.shape === 'diamond' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-blue-400/20 to-purple-400/20 border-blue-400/40' : 'from-blue-500/30 to-purple-500/30 border-blue-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
          )}
          {shape.shape === 'circuit' && (
            <div className="relative" style={{ width: `${shape.size}px`, height: `${shape.size}px` }}>
              <div className={`absolute inset-0 ${darkMode ? 'border-teal-400/30 bg-teal-400/10' : 'border-teal-500/50 bg-teal-500/15'} border`}>
                <div className={`absolute top-1/2 left-0 w-full h-0.5 ${darkMode ? 'bg-teal-400/50' : 'bg-teal-500/70'}`} />
                <div className={`absolute left-1/2 top-0 h-full w-0.5 ${darkMode ? 'bg-teal-400/50' : 'bg-teal-500/70'}`} />
                <div className={`absolute top-1 left-1 w-2 h-2 ${darkMode ? 'bg-teal-400/60' : 'bg-teal-500/80'} rounded-full`} />
                <div className={`absolute bottom-1 right-1 w-2 h-2 ${darkMode ? 'bg-cyan-400/60' : 'bg-cyan-500/80'} rounded-full`} />
              </div>
            </div>
          )}
        </motion.div>
      ))} */}

      {/* Animated Particles with Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="particleGradient">
            <stop offset="0%" stopColor={theme.particleColors.primary} />
            <stop offset="100%" stopColor={theme.particleColors.primaryLight} />
          </radialGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor={theme.particleColors.secondary} />
            <stop
              offset="100%"
              stopColor={theme.particleColors.secondaryLight}
            />
          </radialGradient>
        </defs>

        {/* Connection Lines */}
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 150) {
              const opacity = ((150 - distance) / 150) * (darkMode ? 0.3 : 0.4);
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  opacity={opacity}
                  animate={{
                    opacity: [opacity * 0.5, opacity, opacity * 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            }
            return null;
          })
        )}

        {/* Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={
              particle.type === "node"
                ? "url(#nodeGradient)"
                : "url(#particleGradient)"
            }
            animate={{
              r: [particle.size, particle.size * 1.5, particle.size],
              opacity: [
                particle.opacity,
                particle.opacity * 1.5,
                particle.opacity,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}

        <defs>
          <linearGradient id="connectionGradient">
            <stop
              offset="0%"
              stopColor={
                darkMode ? "rgba(13,148,136,0.6)" : "rgba(13,148,136,0.8)"
              }
            />
            <stop
              offset="50%"
              stopColor={
                darkMode ? "rgba(34,211,238,0.4)" : "rgba(34,211,238,0.6)"
              }
            />
            <stop
              offset="100%"
              stopColor={
                darkMode ? "rgba(59,130,246,0.6)" : "rgba(59,130,246,0.8)"
              }
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Holographic Scan Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 98%, ${
            darkMode ? "rgba(13,148,136,0.1)" : "rgba(13,148,136,0.15)"
          } 100%)`,
          backgroundSize: "20px 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Data Stream Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-0.5 w-full bg-gradient-to-r from-transparent ${
              darkMode ? "via-teal-400/40" : "via-teal-500/60"
            } to-transparent`}
            style={{ top: `${20 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner UI Elements */}
      {!isScrolled && (
        <>
          <div className="absolute top-4 left-4 w-16 h-16 pointer-events-none">
            <motion.div
              className={`absolute inset-0 border-l-2 border-t-2 ${
                darkMode ? "border-teal-400/50" : "border-teal-500/70"
              }`}
              animate={{
                borderColor: darkMode
                  ? [
                      "rgba(13,148,136,0.5)",
                      "rgba(34,211,238,0.8)",
                      "rgba(13,148,136,0.5)",
                    ]
                  : [
                      "rgba(13,148,136,0.7)",
                      "rgba(34,211,238,1)",
                      "rgba(13,148,136,0.7)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className={`absolute top-2 left-2 w-2 h-2 ${
                darkMode ? "bg-teal-400" : "bg-teal-500"
              } rounded-full`}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none">
            <motion.div
              className={`absolute inset-0 border-r-2 border-t-2 ${
                darkMode ? "border-cyan-400/50" : "border-cyan-500/70"
              }`}
              animate={{
                borderColor: darkMode
                  ? [
                      "rgba(34,211,238,0.5)",
                      "rgba(59,130,246,0.8)",
                      "rgba(34,211,238,0.5)",
                    ]
                  : [
                      "rgba(34,211,238,0.7)",
                      "rgba(59,130,246,1)",
                      "rgba(34,211,238,0.7)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </>
      )}

      <div className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-l-2 border-b-2 ${
            darkMode ? "border-blue-400/50" : "border-blue-500/70"
          }`}
          animate={{
            borderColor: darkMode
              ? [
                  "rgba(59,130,246,0.5)",
                  "rgba(147,51,234,0.8)",
                  "rgba(59,130,246,0.5)",
                ]
              : [
                  "rgba(59,130,246,0.7)",
                  "rgba(147,51,234,1)",
                  "rgba(59,130,246,0.7)",
                ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-r-2 border-b-2 ${
            darkMode ? "border-purple-400/50" : "border-purple-500/70"
          }`}
          animate={{
            borderColor: darkMode
              ? [
                  "rgba(147,51,234,0.5)",
                  "rgba(13,148,136,0.8)",
                  "rgba(147,51,234,0.5)",
                ]
              : [
                  "rgba(147,51,234,0.7)",
                  "rgba(13,148,136,1)",
                  "rgba(147,51,234,0.7)",
                ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Central Holographic Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className={`w-96 h-96 rounded-full border ${
            darkMode ? "border-teal-400/20" : "border-teal-500/30"
          }`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: darkMode ? [0.2, 0.4, 0.2] : [0.3, 0.5, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute inset-8 rounded-full border ${
            darkMode ? "border-cyan-400/30" : "border-cyan-500/40"
          }`}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: darkMode ? [0.3, 0.5, 0.3] : [0.4, 0.6, 0.4],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Ambient glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${theme.ambientGlow} pointer-events-none`}
      />
    </div>
  );
};

export default FuturisticCyberBackground;
