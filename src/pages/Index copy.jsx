import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "@/context/DarkModeContext";

const FuturisticCyberBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hexagons, setHexagons] = useState([]);
  const [dataStreams, setDataStreams] = useState([]);

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
        neon: {
          teal: "rgba(13,148,136,0.8)",
          cyan: "rgba(34,211,238,0.8)",
          blue: "rgba(59,130,246,0.8)",
        },
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
        neon: {
          teal: "rgba(13,148,136,1)",
          cyan: "rgba(34,211,238,1)",
          blue: "rgba(59,130,246,1)",
        },
        ambientGlow: "from-teal-200/10 via-transparent to-cyan-200/10",
      };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const initializeParticles = () => {
      const newParticles = [];
      let particleCount = dimensions.width < 480 ? 20 : dimensions.width < 768 ? 30 : 60;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.5 + 0.3,
          type: Math.random() > 0.6 ? "node" : "particle",
        });
      }
      setParticles(newParticles);
    };

    const initializeHexagons = () => {
      const newHexagons = [];
      const count = dimensions.width < 768 ? 8 : 15;
      for (let i = 0; i < count; i++) {
        newHexagons.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 30,
          rotation: Math.random() * 360,
          speed: Math.random() * 0.2 + 0.1,
        });
      }
      setHexagons(newHexagons);
    };

    const initializeDataStreams = () => {
      const newStreams = [];
      const count = dimensions.width < 768 ? 4 : 8;
      for (let i = 0; i < count; i++) {
        newStreams.push({
          id: i,
          x: Math.random() * 100,
          isVertical: Math.random() > 0.5,
          speed: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setDataStreams(newStreams);
    };

    initializeParticles();
    initializeHexagons();
    initializeDataStreams();
  }, [dimensions]);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          if (newY < 0) newY = dimensions.height;
          if (newY > dimensions.height) newY = 0;

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [dimensions]);

  const getConnectionDistance = () => {
    if (dimensions.width < 480) return 100;
    if (dimensions.width < 768) return 120;
    return 150;
  };

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br ${theme.background}`}>
      {/* Isometric Grid */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className={darkMode ? "opacity-15" : "opacity-25"}>
          <defs>
            <pattern id="isoGrid" width="60" height="35" patternUnits="userSpaceOnUse" patternTransform="skewY(-30)">
              <path d="M 0 0 L 60 0 L 60 35 L 0 35 Z" fill="none" stroke={theme.gridColors.primary} strokeWidth="0.5"/>
              <path d="M 0 0 L 30 17.5 L 60 0" fill="none" stroke={theme.gridColors.secondary} strokeWidth="0.3"/>
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#isoGrid)"/>
        </svg>
      </div>

      {/* Floating Hexagons */}
      <div className="absolute inset-0 overflow-hidden">
        {hexagons.map((hex) => (
          <motion.div
            key={hex.id}
            className="absolute"
            style={{ left: `${hex.x}%`, top: `${hex.y}%` }}
            animate={{
              y: [0, -30, 0],
              rotate: [hex.rotation, hex.rotation + 360],
              opacity: darkMode ? [0.1, 0.3, 0.1] : [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 15 / hex.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: hex.id * 0.5,
            }}
          >
            <svg width={hex.size} height={hex.size} viewBox="0 0 100 100">
              <polygon
                points="50 3, 95 25, 95 75, 50 97, 5 75, 5 25"
                fill="none"
                stroke={theme.neon.cyan}
                strokeWidth="2"
                filter="url(#glow)"
              />
              <polygon
                points="50 15, 80 30, 80 70, 50 85, 20 70, 20 30"
                fill="none"
                stroke={theme.neon.teal}
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Digital Rain / Data Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="absolute"
            style={
              stream.isVertical
                ? { left: `${stream.x}%`, top: 0, width: "2px", height: "100%" }
                : { top: `${stream.x}%`, left: 0, width: "100%", height: "2px" }
            }
            animate={
              stream.isVertical
                ? { y: ["-100%", "200%"] }
                : { x: ["-100%", "200%"] }
            }
            transition={{
              duration: stream.speed,
              repeat: Infinity,
              delay: stream.delay,
              ease: "linear",
            }}
          >
            <div
              className={`w-full h-full bg-gradient-to-${stream.isVertical ? "b" : "r"} from-transparent ${
                darkMode ? "via-cyan-400/40" : "via-cyan-500/60"
              } to-transparent`}
              style={{
                boxShadow: darkMode
                  ? "0 0 10px rgba(34,211,238,0.5)"
                  : "0 0 10px rgba(34,211,238,0.7)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Glitch Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute left-0 right-0 h-px ${
              darkMode ? "bg-teal-400/60" : "bg-teal-500/80"
            }`}
            style={{
              top: `${30 + i * 25}%`,
              boxShadow: darkMode
                ? "0 0 8px rgba(13,148,136,0.6)"
                : "0 0 8px rgba(13,148,136,0.8)",
            }}
            animate={{
              scaleX: [0, 1, 0],
              x: ["-100%", "0%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 5 + i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <div className={`absolute inset-0 ${darkMode ? "opacity-20" : "opacity-30"}`}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: dimensions.width < 768 ? 15 : 25 }, (_, i) => {
            const cols = dimensions.width < 768 ? 3 : 5;
            const x = (i % cols) * (100 / cols);
            const y = Math.floor(i / cols) * 20;
            return (
              <g key={i}>
                <motion.path
                  d={`M${x} ${y} L${x + 8} ${y} L${x + 8} ${y + 3} L${x + 15} ${y + 3}`}
                  stroke={theme.neon.cyan}
                  strokeWidth="0.5"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx={x + 15}
                  cy={y + 3}
                  r="1"
                  fill={theme.neon.teal}
                  filter="url(#glow)"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
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
        </svg>
      </div>

      {/* Particle Network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="particleGrad">
            <stop offset="0%" stopColor={theme.particleColors.primary} />
            <stop offset="100%" stopColor={theme.particleColors.primaryLight} />
          </radialGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor={theme.particleColors.secondary} />
            <stop offset="100%" stopColor={theme.particleColors.secondaryLight} />
          </radialGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle, i) =>
          particles.slice(i + 1).map((other, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
            );
            const connectionDistance = getConnectionDistance();
            if (distance < connectionDistance) {
              const opacity = ((connectionDistance - distance) / connectionDistance) * (darkMode ? 0.4 : 0.5);
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={other.x}
                  y2={other.y}
                  stroke={theme.neon.cyan}
                  strokeWidth="1"
                  opacity={opacity}
                  filter="url(#neonGlow)"
                  animate={{ opacity: [opacity * 0.5, opacity, opacity * 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              );
            }
            return null;
          })
        )}

        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.type === "node" ? "url(#nodeGrad)" : "url(#particleGrad)"}
            filter="url(#neonGlow)"
            animate={{
              r: [particle.size, particle.size * 1.8, particle.size],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </svg>

      {/* Holographic Scan Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 98%, ${
            darkMode ? "rgba(13,148,136,0.15)" : "rgba(13,148,136,0.2)"
          } 100%)`,
          backgroundSize: `${dimensions.width < 768 ? "10px" : "15px"} 100%`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner HUD Elements */}
      <div className="hidden sm:block absolute top-4 left-4 w-20 h-20 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-l-2 border-t-2 ${
            darkMode ? "border-teal-400/60" : "border-teal-500/80"
          }`}
          style={{
            boxShadow: darkMode
              ? "0 0 10px rgba(13,148,136,0.5)"
              : "0 0 10px rgba(13,148,136,0.7)",
          }}
          animate={{
            borderColor: [theme.neon.teal, theme.neon.cyan, theme.neon.teal],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className={`absolute top-2 left-2 w-2 h-2 ${
            darkMode ? "bg-cyan-400" : "bg-cyan-500"
          } rounded-full`}
          style={{
            boxShadow: darkMode
              ? "0 0 10px rgba(34,211,238,0.8)"
              : "0 0 10px rgba(34,211,238,1)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className={`absolute top-5 left-0 w-8 h-px ${darkMode ? "bg-teal-400/60" : "bg-teal-500/80"}`} />
        <div className={`absolute top-0 left-5 w-px h-8 ${darkMode ? "bg-teal-400/60" : "bg-teal-500/80"}`} />
      </div>

      <div className="hidden sm:block absolute top-4 right-4 w-20 h-20 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-r-2 border-t-2 ${
            darkMode ? "border-cyan-400/60" : "border-cyan-500/80"
          }`}
          style={{
            boxShadow: darkMode
              ? "0 0 10px rgba(34,211,238,0.5)"
              : "0 0 10px rgba(34,211,238,0.7)",
          }}
          animate={{
            borderColor: [theme.neon.cyan, theme.neon.blue, theme.neon.cyan],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="hidden sm:block absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-l-2 border-b-2 ${
            darkMode ? "border-blue-400/60" : "border-blue-500/80"
          }`}
          style={{
            boxShadow: darkMode
              ? "0 0 10px rgba(59,130,246,0.5)"
              : "0 0 10px rgba(59,130,246,0.7)",
          }}
          animate={{
            borderColor: [theme.neon.blue, theme.neon.teal, theme.neon.blue],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="hidden sm:block absolute bottom-4 right-4 w-20 h-20 pointer-events-none">
        <motion.div
          className={`absolute inset-0 border-r-2 border-b-2 ${
            darkMode ? "border-teal-400/60" : "border-teal-500/80"
          }`}
          style={{
            boxShadow: darkMode
              ? "0 0 10px rgba(13,148,136,0.5)"
              : "0 0 10px rgba(13,148,136,0.7)",
          }}
          animate={{
            borderColor: [theme.neon.teal, theme.neon.cyan, theme.neon.teal],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Central Holographic Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className={`${
            dimensions.width < 768 ? "w-80 h-80" : "w-96 h-96"
          } rounded-full border-2 ${
            darkMode ? "border-teal-400/20" : "border-teal-500/30"
          }`}
          style={{
            boxShadow: darkMode
              ? "0 0 30px rgba(13,148,136,0.3), inset 0 0 30px rgba(13,148,136,0.1)"
              : "0 0 30px rgba(13,148,136,0.4), inset 0 0 30px rgba(13,148,136,0.2)",
          }}
          animate={{
            scale: [1, 1.05, 1],
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
            scale: [1.05, 1, 1.05],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute inset-16 rounded-full border ${
            darkMode ? "border-blue-400/20" : "border-blue-500/30"
          }`}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.ambientGlow} pointer-events-none`} />
    </div>
  );
};

export default FuturisticCyberBackground;