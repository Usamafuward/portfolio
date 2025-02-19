// eslint-disable-next-line react/prop-types
const AnimatedProfile = ({ imageSrc }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center">
      {/* Outer rotating ring */}
      <div className="absolute w-[310px] h-[310px] sm:w-[400px] sm:h-[400px]">
        <div
          className="w-full h-full rounded-full border-4 border-dashed border-teal-600 dark:border-teal-400 opacity-50"
          style={{
            animation: "rotate 15s linear infinite",
          }}
        />
      </div>

      {/* Inner static container */}
      <div className="relative">
        {/* Decorative circles */}
        <div
          className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-teal-600 dark:bg-teal-400 opacity-40"
          style={{
            animation: "pulsate 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-teal-600 dark:bg-teal-400 opacity-40"
          style={{
            animation: "pulsate 3s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />

        {/* Main image container */}
        <div className="relative rounded-full overflow-hidden h-[270px] w-[270px] sm:h-[360px] sm:w-[360px] shadow-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 to-transparent rounded-full" />

          {/* Image */}
          <img
            src={imageSrc}
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-full"
          />

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-400/20 to-transparent rounded-full" />
        </div>
      </div>

      {/* Floating dots */}
      <div
        className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 opacity-70"
        style={{
          animation: "float_1 3s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 opacity-70"
        style={{
          animation: "float_1 3s ease-in-out infinite",
          animationDelay: "0.15s",
        }}
      />
    </div>
  );
};

export default AnimatedProfile;
