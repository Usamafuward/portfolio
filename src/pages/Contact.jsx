import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_eejd23f";
    const templateID = "template_oahayaf";
    const publicKey = "jGzKqXLa-LoIaRfLd";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Oops! Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "usamapuward2001@gmail.com",
      link: "mailto:usamapuward2001@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 (76) 6260507",
      link: "tel:+94766260507",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="mx-auto px-7"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-4 pt-7">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start space-y-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            className="space-y-8"
          >
            <div className="prose dark:prose-invert">
              <h2 className="text-3xl font-semibold mb-6 text-teal-600 dark:text-teal-400">
                Let’s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            className="border-2 border-white dark:border-gray-500 bg-green-100 dark:bg-gray-700 shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-colors border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-colors border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 transition-colors border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
