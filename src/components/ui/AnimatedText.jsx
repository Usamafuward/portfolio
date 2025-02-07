/* eslint-disable react/prop-types */

const AnimatedText = ({ texts = ["AI/ML Engineer", "Software Developer"] }) => {
  return (
    <div className="relative h-[38px] overflow-hidden">
      {texts.map((text, index) => (
        <div
          key={text}
          className="absolute w-full text-2xl md:text-3xl font-medium"
          style={{
            color: "transparent",
            WebkitTextStroke: "0.7px #2dd4bf",
            animation: `displayText 8s linear infinite`,
            animationDelay: `calc(-4s * ${index})`,
          }}
        >
          <span className="relative inline-block">
            {text}
            <span
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap border-r-2 border-teal-400"
              style={{
                color: "#2dd4bf",
                width: 0,
                animation: "fillText 4s linear infinite",
                animationDelay: `calc(-4s * ${index})`,
              }}
            >
              {text}
            </span>
          </span>
        </div>
      ))}

      <style>{`
        @keyframes displayText {
          0%,
          50% {
            display: inline-block;
          }
          50.1%,
          100% {
            display: none;
          }
        }

        @keyframes fillText {
          0%,
          10% {
            width: 0;
          }
          70%,
          90% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
