import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

const AnimatedBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const shapes = Array.from({ length: 20 });

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
