import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

const PortfolioCard = ({ card, darkMode }) => {
  return (
    <div
      className="card-container relative group"
      style={{
        "--gradient-start": darkMode ? "#5eead4" : "#0d9488",
        "--gradient-middle": darkMode ? "#2dd4bf" : "#2dd4bf",
        "--gradient-end": darkMode ? "#14b8a6" : "#0d9488",
        "--border-width": "8px",
        "--bg-color": darkMode ? "#1f2937" : "#ffffff",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <HashLink
        to={card.link}
        className="card bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-center h-[360px] text-center shadow-xl p-10 relative overflow-hidden"
      >
        <img
          src={card.image}
          alt={card.title}
          className="mx-auto h-32 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <h3 className="text-2xl font-medium pt-8 pb-2">{card.title}</h3>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center p-5 -translate-y-full group-hover:translate-y-0">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <h5 className="text-xl font-bold pb-2 text-white">{card.title}</h5>
            <p className="p-3 text-white text-center">{card.description}</p>
          </div>
        </div>
      </HashLink>
      <style>{`
        .card-container {
          border-radius: 0.5rem;
          background: var(--bg-color);
        }

        .card-container::before {
          content: "";
          position: absolute;
          inset: calc(-1 * var(--border-width));
          z-index: -1;
          background: conic-gradient(
            from var(--angle),
            var(--gradient-start),
            var(--gradient-middle),
            var(--gradient-end)
          );
          animation: 3s spin linear infinite;
        }

        .card-container::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: var(--bg-color);
        }

        .card {
          position: relative;
          z-index: 2;
        }

        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
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
