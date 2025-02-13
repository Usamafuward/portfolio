import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, ExternalLink } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("All");

  const certifications = [
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
    {
      title: "Artificial Intelligence on Microsoft Azure",
      description:
        "An online course authorized by Microsoft, offered through Coursera, covering AI implementation on Microsoft Azure, including cloud-based machine learning, cognitive services, and AI model deployment.",
      to: "https://coursera.org/verify/JOQ04JJROD5F",
      organization: "Microsoft",
    },
  ];

  const organizations = [
    "All",
    ...new Set(certifications.map((cert) => cert.organization)),
  ];

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedOrg === "All" || cert.organization === selectedOrg)
  );

  const groupedCertifications = filteredCertifications.reduce((acc, cert) => {
    if (!acc[cert.organization]) {
      acc[cert.organization] = [];
    }
    acc[cert.organization].push(cert);
    return acc;
  }, {});

  return (
    <section className="min-h-screen" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="mx-auto px-7"
      >
        <h1 className=" flex items-center justify-center py-7 mb-5 text-[42px] md:text-5xl font-bold text-teal-600 dark:text-teal-400">
          Certifications
        </h1>

        <div className="mb-10 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 transition-colors border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {organizations.map((org) => (
              <button
                key={org}
                onClick={() => setSelectedOrg(org)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedOrg === org
                    ? "bg-teal-600 dark:bg-teal-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {org}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(groupedCertifications).map(([org, certs]) => (
          <motion.div
            key={org}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=""
          >
            <h2 className="text-2xl font-bold my-8 text-gray-800 dark:text-gray-200">
              {org}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="shadow-xl space-y-10"
                >
                  <Link to={cert.to} className="block group h-full">
                    <div className="h-full p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-white dark:border-gray-500 bg-green-100 dark:bg-gray-700 hover:border-teal-600 dark:hover:border-teal-400">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                          {cert.title}
                        </h3>
                        <div className="w-6">
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 mt-1" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {cert.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}