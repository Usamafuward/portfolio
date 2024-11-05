import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or save to database)
    console.log("Form data:", formData);
  };

  return (
    <section className="text-center px-7">
      <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-10">
        Contact Me
      </h1>
      <p className="text-3xl leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-10">
        Thanks for taking the time to reach out.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-green-100 dark:bg-gray-700 p-10 m-10 rounded-lg shadow-lg"
      >
        <div className="md:flex mb-6 justify-between grid grid-cols-1 md:grid-cols-2">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-800 dark:text-gray-200 text-left mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-72 lg:w-96 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-800 dark:text-gray-200 text-left mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-72 lg:w-96 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:border-teal-500"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block text-gray-800 dark:text-gray-200 text-left mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:border-teal-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
