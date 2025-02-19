import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

const PortfolioCard = ({ card, darkMode }) => {
  return (
    <div
      className="card-container relative group"
      style={{
        "--gradient-start": darkMode ? "#0f766e" : "#0f766e",
        "--gradient-middle": darkMode ? "#14b8a6" : "#14b8a6",
        "--gradient-end": darkMode ? "#5eead4" : "#5eead4",
        "--border-width": "7px",
        "--bg-color": darkMode ? "#1f2937" : "#ffffff",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <HashLink
        to={card.link}
        className="card bg-white dark:bg-gray-800 dark:text-gray-200 flex flex-col justify-center h-[360px] text-center shadow-lg p-10 relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform opacity-100 group-hover:opacity-0 group-hover:-translate-y-60">
          <img
            src={card.image}
            alt={card.title}
            className="mx-auto flex h-32 lg:h-28 xl:h-32 w-auto"
          />
          <h3 className="text-2xl font-medium pt-8 pb-2 text-gray-800 dark:text-gray-200">
            {card.title}
          </h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-teal-400 dark:from-teal-600 to-transparent translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="p-4 sm:p-8 md:p-8 lg:p-2 xl:p-8 dark:text-white text-gray-800">
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto flex h-24 sm:h-32 lg:h-20 xl:h-28 w-auto"
            />
            <h5 className="text-2xl font-bold mt-4">{card.title}</h5>
            <p className="text-lg font-medium leading-relaxed mt-2">
              {card.description}
            </p>
          </div>
        </div>
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
        }

        .card {
          position: relative;
          z-index: 2;
          backdrop-filter: blur(8px);
        }

        @keyframes shimmer {
          to {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
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
