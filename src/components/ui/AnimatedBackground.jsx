import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

const AnimatedBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const shapes = Array.from({ length: 15 });

  const containerStyle = darkMode ? "bg-gray-900" : "bg-white";
  const shapeColor = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgb(153 246 228)";

  const getRandomShape = () => {
    const shapes = ["circle", "triangle", "square"];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  const getShapeStyles = (shape) => {
    if (shape === "triangle") {
      return {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      };
    }
    if (shape === "circle") {
      return {
        borderRadius: "50%",
      };
    }
    return {};
  };

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 m-0 p-0 ${containerStyle} overflow-hidden -z-10`}
    >
      <ul className="m-0 p-0">
        {shapes.map((_, index) => {
          const shape = getRandomShape();
          const size = 80 + Math.random() * 100;
          const styles = {
            position: "absolute",
            display: "block",
            listStyle: "none",
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 90}%`,
            bottom: `-200px`,
            background: shapeColor,
            animation: `float-${index} ${
              15 + Math.random() * 10
            }s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            ...getShapeStyles(shape),
          };

          return <li key={index} style={styles} />;
        })}
      </ul>
      <style>
        {shapes
          .map(
            (_, index) => `
          @keyframes float-${index} {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
            }
            100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
            }
          }
        `
          )
          .join("\n")}
      </style>
    </div>
  );
};

export default AnimatedBackground;


// import { useContext } from "react";
// import { DarkModeContext } from "@/context/DarkModeContext";

// const AnimatedBackground = () => {
//   const { darkMode } = useContext(DarkModeContext);
//   const gradients = Array.from({ length: 4 });

//   const containerStyle = darkMode ? "bg-gray-900" : "bg-white";

//   const getGradientColors = (index) => {
//     if (darkMode) {
//       switch (index) {
//         case 0:
//           return "from-purple-900/30 via-blue-900/30 to-transparent";
//         case 1:
//           return "from-blue-900/30 via-cyan-900/30 to-transparent";
//         case 2:
//           return "from-indigo-900/30 via-violet-900/30 to-transparent";
//         default:
//           return "from-violet-900/30 via-purple-900/30 to-transparent";
//       }
//     } else {
//       // Enhanced light mode colors with higher opacity and more saturated colors
//       switch (index) {
//         case 0:
//           return "from-purple-400/50 via-blue-400/50 to-transparent";
//         case 1:
//           return "from-blue-400/50 via-cyan-500/50 to-transparent";
//         case 2:
//           return "from-indigo-400/50 via-violet-500/50 to-transparent";
//         default:
//           return "from-violet-400/50 via-purple-500/50 to-transparent";
//       }
//     }
//   };

//   return (
//     <div
//       className={`fixed w-full h-full top-0 left-0 m-0 p-0 ${containerStyle} overflow-hidden -z-10`}
//     >
//       {gradients.map((_, index) => (
//         <div
//           key={index}
//           className={`
//             absolute w-2/3 h-2/3 bg-gradient-to-t rounded-full 
//             ${getGradientColors(index)}
//             blur-2xl
//             animate-gradient-${index}
//           `}
//         />
//       ))}
//       <style>
//         {`
//           @keyframes gradient-0 {
//             0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
//             25% { transform: translate(75%, 0%) rotate(90deg); }
//             50% { transform: translate(75%, 75%) rotate(180deg); }
//             75% { transform: translate(0%, 75%) rotate(270deg); }
//           }
//           @keyframes gradient-1 {
//             0%, 100% { transform: translate(75%, 0%) rotate(0deg); }
//             25% { transform: translate(75%, 75%) rotate(90deg); }
//             50% { transform: translate(0%, 75%) rotate(180deg); }
//             75% { transform: translate(0%, 0%) rotate(270deg); }
//           }
//           @keyframes gradient-2 {
//             0%, 100% { transform: translate(75%, 75%) rotate(0deg); }
//             25% { transform: translate(0%, 75%) rotate(90deg); }
//             50% { transform: translate(0%, 0%) rotate(180deg); }
//             75% { transform: translate(75%, 0%) rotate(270deg); }
//           }
//           @keyframes gradient-3 {
//             0%, 100% { transform: translate(0%, 75%) rotate(0deg); }
//             25% { transform: translate(0%, 0%) rotate(90deg); }
//             50% { transform: translate(75%, 0%) rotate(180deg); }
//             75% { transform: translate(75%, 75%) rotate(270deg); }
//           }
//           .animate-gradient-0 { animation: gradient-0 30s infinite; }
//           .animate-gradient-1 { animation: gradient-1 30s infinite; }
//           .animate-gradient-2 { animation: gradient-2 30s infinite; }
//           .animate-gradient-3 { animation: gradient-3 30s infinite; }
//         `}
//       </style>
//     </div>
//   );
// };

// export default AnimatedBackground;