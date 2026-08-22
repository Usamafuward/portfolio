"use client";

import { useState } from "react";
import VerticalBackground from "@/components/VerticalBackground";
import { portfolioData } from "@/constants/portfolioData";
import { motion, Variants } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";

const easeCustom = [0.22, 1, 0.36, 1] as const;

const infoVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeCustom,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeCustom, delay: 0.2 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status !== "idle") setStatus("idle");
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("loading");

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "11479c73-fc36-477a-be21-4ced8caa3ba5";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Usama Puward Portfolio",
          subject: `Portfolio Message from ${formData.name} (${formData.email})`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const getButtonClasses = () => {
    if (status === "success") {
      return "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:bg-green-500 hover:text-black";
    }
    if (status === "error") {
      return "bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:bg-red-500 hover:text-black";
    }
    return "bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]";
  };

  return (
    <>
      <VerticalBackground word="CONTACT" />
      <div className="container mx-auto px-6 md:px-8 pt-24 md:pt-32 relative z-[1] pb-24">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={infoVariants}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative pl-0 lg:pl-5 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-[4px] lg:before:bg-primary lg:before:shadow-[0_0_10px_rgba(0,240,255,0.5)] w-full max-w-[650px] lg:max-w-none"
          >
            <p className="text-primary font-mono text-[0.9rem] md:text-lg tracking-[2px] mb-2 font-bold">
              // SYS.LOG: COMM_LINK_ACTIVE
            </p>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-black text-white leading-[1.1] uppercase font-['Arial_Black',-apple-system,sans-serif] tracking-[-1px] mb-6">
              LET'S WORK <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                TOGETHER
              </span>
            </h1>
            <div className="mb-8 w-[60px] h-[4px] bg-primary/80 block lg:hidden"></div>
            <p className="text-gray-400 leading-[1.6] mb-10 text-[1rem] font-mono max-w-[550px] lg:max-w-none">
              &gt; Have a project in mind or just want to say hi? Feel free to reach out. I'm always
              open to discussing new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="flex flex-col gap-6 w-full items-center lg:items-start">
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-primary font-bold font-mono text-[0.85rem] tracking-[1px] mb-2">
                  // SECURE_EMAIL
                </h4>
                <p className="text-white font-mono text-[1.1rem] px-4 py-1 border-y lg:border-y-0 lg:border-l-2 border-primary/30">
                  {portfolioData.personalInfo.email}
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-primary font-bold font-mono text-[0.85rem] tracking-[1px] mb-2">
                  // DIRECT_LINE
                </h4>
                <p className="text-white font-mono text-[1.1rem] px-4 py-1 border-y lg:border-y-0 lg:border-l-2 border-primary/30">
                  {portfolioData.personalInfo.phone}
                </p>
              </div>

              <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                {portfolioData.socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-primary text-[1.25rem] flex items-center justify-center w-[45px] h-[45px] bg-primary/10 border border-primary/30 transition-colors duration-300 hover:bg-primary hover:text-black [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="flex-[1.2] w-full max-w-[650px] lg:max-w-none mx-auto"
          >
            <div className="relative p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,40px_100%,0_calc(100%-40px))] overflow-hidden transition-colors duration-500 hover:bg-primary hover:shadow-[0_0_35px_rgba(0,240,255,0.3)]">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0a0c0e]/95 w-full h-full p-8 md:p-12 flex flex-col gap-6 relative z-[2] [clip-path:polygon(0_0,calc(100%-39px)_0,100%_39px,100%_100%,39px_100%,0_calc(100%-39px))] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_NAME..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // RETURN_ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_EMAIL..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.85rem] font-bold font-mono text-primary tracking-[1px]">
                    // TRANSMISSION_PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-primary/20 text-white font-mono text-[0.9rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                    placeholder="ENTER_MESSAGE..."
                    rows={5}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full mt-2 border font-mono font-bold tracking-[2px] text-[1rem] py-4 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%-15px))] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${getButtonClasses()}`}
                >
                  {status === "loading" && (
                    <>
                      <FaSpinner className="animate-spin text-[1.1rem]" />
                      TRANSMITTING...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <FaCheckCircle className="text-[1.1rem]" />
                      TRANSMISSION_SUCCESS
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <FaExclamationTriangle className="text-[1.1rem]" />
                      TRANSMISSION_FAILED
                    </>
                  )}
                  {status === "idle" && "INITIATE_TRANSFER"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}


