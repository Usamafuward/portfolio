import { Link } from "react-router-dom";

export default function Projects() {
  const dummyProjects = [
    {
      title: "Travel Point",
      description:
        "A social media platform for travellers to share experiences, itineraries, and book accommodations. It also allows users to create and book all-inclusive travel packages for a seamless travel experience.",
      to: "https://github.com/aamirfazeer/TravelPointMobile.git",
    },
    {
      title: "NLP Podcast Chatbot",
      description:
        "An NLP-driven chatbot that interacts with podcast transcripts to answer questions, attribute responses to speakers, and provide YouTube links, enhancing user engagement and content access.",
      to: "https://github.com/Usamafuward/nlp-podcast-chatbot.git",
    },
    {
      title: "Eats Robers",
      description:
        "Eats Robers is a web app using React, Node.js, Express, MongoDB, and Mongoose that helps users find the perfect meal, featuring seamless payment options and exceptional customer service.",
      to: "https://github.com/Usamafuward/eats-robers.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React that showcases my projects and skills in software engineering and machine learning, providing an engaging platform for potential employers and collaborators.",
      to: "https://github.com/Usamafuward/portfolio.git",
    },
    {
      title: "Clubhub-Central",
      description:
        "Club-Hub Central is a centralized platform developed with PHP, HTML, CSS, JavaScript, and MariaDB for the University of Colombo School of Computing clubs and societies, facilitating better communication and collaboration among members.",
      to: "https://github.com/terance-edmonds/clubhub-central.git",
    },
    {
      title: "Django Blog",
      description:
        "A blog application built with Django for publishing technology-related posts, providing a user-friendly interface for authors to share insights and engage with readers.",
      to: "https://github.com/Usamafuward/Django-blog.git",
    },
  ];

  return (
    <div>
      <section>
        <h1 className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-16">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-5">
          {dummyProjects.map((project, index) => (
            <Link key={index} to={project.to} className="flex">
              <div className="text-center shadow-lg dark:shadow-gray-400 p-10 rounded-xl bg-green-100 flex-1 flex flex-col justify-normal card">
                <h3 className="text-2xl font-bold pt-5 pb-2">
                  {project.title}
                </h3>
                <p className="py-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}