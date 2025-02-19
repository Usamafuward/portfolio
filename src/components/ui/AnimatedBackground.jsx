import { DarkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";

const AnimatedBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const squares = Array.from({ length: 15 });
  const containerStyle = darkMode ? "bg-gray-900" : "bg-white";
  const squareColor = darkMode
    ? "rgba(255, 255, 255, 0.2)"
    : "rgb(153 246 228)";

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 m-0 p-0 ${containerStyle} overflow-hidden -z-10`}
    >
      <ul className="m-0 p-0">
        {squares.map((_, index) => {
          const styles = {
            position: "absolute",
            display: "block",
            listStyle: "none",
            width: `${120 + Math.random() * 80}px`,
            height: `${120 + Math.random() * 80}px`,
            left: `${Math.random() * 90}%`,
            bottom: `-200px`,
            background: squareColor,
            animation: "float 19s linear infinite",
            animationDelay: `${Math.random() * 20}s`,
          };

          return <li key={index} style={styles} />;
        })}
      </ul>
      <style>{`
            @keyframes float {
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
        `}</style>
    </div>
  );
};

export default AnimatedBackground;
