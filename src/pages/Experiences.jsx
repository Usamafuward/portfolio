export default function Experiences() {
  const Experiences = [
    {
      title: "AI/ML Engineer Intern",
      description:
        "Contributing to transformative projects in AI, machine learning, and automation, leveraging data-driven insights to enhance business operations at Kainovation Technologies.",
      duration: "November 2024 – Present",
      company: "Kainovation Technologies",
    },
    {
      title: "Full Stack Developer Intern",
      description:
        "Contributing to the development and maintenance of full-stack applications, working on both front-end and back-end components to support the company’s digital solutions. Collaborated with senior developers to enhance application functionality and user experience.",
      duration: "October 2024 – Present",
      company: "Unified Mentor India",
    },
    {
      title: "Artificial Intelligence Intern",
      description:
        "Completed a one-month internship in Artificial Intelligence at NoviTech R&D Pvt Ltd, , I worked on several AI projects, contributing to the development and implementation of machine learning models and AI solutions aimed at solving real-world challenges",
      duration: "June 2023 – July 2024",
      company: "NoviTech R&D Pvt Ltd",
    },
    {
      title: "Freelance Full Stack Developer",
      description: "Developed custom websites focusing on responsive design.",
      duration: "December 2023 – May 2024",
      company: "Self-Employed",
    },
    {
      title: "Research Projects: Data Collector, Annotator",
      description:
        "Collected and annotated data for projects on badminton shot analysis and emotion detection in Tamil texts. Responsibilities included data validation, video editing for ML training, and collaboration with research teams to achieve project goals.",
      duration: "April 2023 – December 2023",
      company: "UCSC",
    },
  ];

  return (
    <div>
      <section className="min-h-screen">
        <h1 className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-8">
          Experiences
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7">
          {Experiences.map((experience, index) => (
            <div
              key={index}
              className="text-center shadow-lg dark:shadow-gray-400 p-7 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex-1 flex flex-col justify-center card"
            >
              <h3 className="text-2xl font-bold pb-2">{experience.title}</h3>
              <p className="font-semibold mt-3">{experience.company}</p>
              <p className="text-sm font-extralight">({experience.duration})</p>
              <div className="overlay">
                <p className="p-2 text-white">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
