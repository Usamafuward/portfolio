import { Link } from "react-router-dom";

export default function Certifications() {
  const dummyCertifications = [
    {
      title: "React Basics",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the fundamental concepts of React for building user interfaces.",
      to: "https://coursera.org/verify/MXULJQSHCAJP",
      organization: "Meta",
    },
    {
      title: "Introduction to Front-End Development",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on the essential skills and technologies for front-end development, including HTML, CSS, and JavaScript.",
      to: "https://coursera.org/verify/D5H8DFCUNN57",
      organization: "Meta",
    },
    {
      title: "Machine Learning Specialization",
      description:
        "Completed an online specialization covering supervised and unsupervised learning, recommender systems, and reinforcement learning, gaining practical skills for real-world applications in machine learning.",
      to: "https://coursera.org/verify/specialization/1XJIPHSURREJ",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Introduction to Generative AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera, providing foundational knowledge of generative AI concepts, tools, and applications.",
      to: "https://coursera.org/verify/97FEMUSJ16AN",
      organization: "Google Cloud",
    },
    {
      title: "Introduction to Mobile Development",
      description:
        "An online course authorized by Meta and offered through Coursera, providing foundational knowledge and skills in mobile application development using various technologies and frameworks.",
      to: "https://coursera.org/verify/4QU3RKF5QSCH",
      organization: "Meta",
    },
    {
      title: "30 Days MasterClass in Artificial Intelligence",
      description:
        "This certifies successfully completed the 30 Days MasterClass in Artificial Intelligence conducted by NoviTech R&D Private Limited, provided comprehensive training in various aspects of artificial intelligence, equipping participants with the skills to apply AI techniques in real-world applications.",
      to: "https://coursera.org/verify/MXULJQSHCAJP",
      organization: "NoviTech R&D Private Limited",
    },
    {
      title: "Introduction to TenserFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on using TensorFlow to develop models for artificial intelligence, machine learning, and deep learning applications.",
      to: "https://coursera.org/verify/4RPLXS251YLH",
      organization: "DeepLearning.AI",
    },
    {
      title: "Django Web Framework",
      description:
        "An online course authorized by Meta and offered through Coursera, covering the essentials of the Django web framework for building robust and scalable web applications.",
      to: "https://coursera.org/verify/DEUTHXHU3D8O",
      organization: "Meta",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, focusing on supervised learning techniques, specifically regression and classification, to build predictive models in machine learning.",
      to: "https://coursera.org/verify/PU99D2NGLKMN",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering key concepts in unsupervised learning, recommendation systems, and reinforcement learning to build advanced machine learning models",
      to: "https://coursera.org/verify/YWTMGTOVMA3U",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Programming with JavaScript",
      description:
        "An online course authorized by Meta and offered through Coursera, focusing on core JavaScript programming skills essential for web development, including functions, objects, and asynchronous programming.",
      to: "https://coursera.org/verify/6BXW9AAYUX9S",
      organization: "Meta",
    },
    {
      title: "Introduction to Large Language Models",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of large language models (LLMs), their applications, and techniques to enhance their performance.",
      to: "https://coursera.org/verify/WVOQZH3G9WIK",
      organization: "Google Cloud",
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      description:
        "An online course authorized by DeepLearning.AI and offered through Coursera, focusing on building and deploying convolutional neural networks (CNNs) using TensorFlow for image recognition and computer vision applications.",
      to: "https://coursera.org/verify/QCBOIZMZO4QY",
      organization: "DeepLearning.AI",
    },
    {
      title: "Advanced Learning Algorithms",
      description:
        "An online course authorized by DeepLearning.AI and Stanford University, offered through Coursera, covering advanced machine learning algorithms and techniques to enhance model performance and tackle complex data challenges.",
      to: "https://coursera.org/verify/VZ4XLESMVTGF",
      organization: "DeepLearning.AI and Stanford University",
    },
    {
      title: "Introduction to Responsible AI",
      description:
        "An online course authorized by Google Cloud and offered through Coursera. This course provides foundational knowledge of responsible AI practices, emphasizing the importance of ethical considerations and Google's AI principles.",
      to: "https://coursera.org/verify/O43QCWPY75RY",
      organization: "Google Cloud",
    },
  ];

  return (
    <div>
      <section className="min-h-screen">
        <h1 className="text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-8">
          Certifications
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-7">
          {dummyCertifications.map((certification, index) => (
            <Link key={index} to={certification.to} className="flex">
              <div className="group relative flex-1">
                <div className="text-center shadow-lg dark:shadow-gray-400 p-7 rounded-xl border-2 border-white dark:border-gray-500 bg-green-100 dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-center card relative">
                  <h3 className="text-2xl font-bold pb-2">
                    {certification.title}
                  </h3>
                  <p className="font-semibold mt-1">
                    - {certification.organization}
                  </p>
                  <div className="overlay absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center duration-500 ease-in-out opacity-0 w-full group-hover:top-1/2 group-hover:opacity-100">
                    <p className="p-3 text-white">
                      {certification.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
