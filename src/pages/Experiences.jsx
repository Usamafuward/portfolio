export default function Experiences() {
  const Experiences = [
    {
      title: "Full Stack Developer Intern",
      description:
        "Contributed to the development and maintenance of full-stack applications, working on both front-end and back-end components to support the company’s digital solutions. Collaborated with senior developers to enhance application functionality and user experience.",
      duration: "October 2024 – Present",
      company: "Unified Mentor India",
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
      <section>
        <h1 className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-16">
          Experiences
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7">
          {Experiences.map((experience, index) => (
            <div
              key={index}
              className="text-center shadow-lg dark:shadow-gray-400 p-10 rounded-xl bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex-1 flex flex-col justify-normal card"
            >
              <h3 className="text-2xl font-bold pt-5 pb-2">
                {experience.title}
              </h3>
              <p className="py-2">{experience.description}</p>
              <p className="font-semibold mt-3">{experience.company}</p>
              <p className="text-sm font-extralight">({experience.duration})</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
