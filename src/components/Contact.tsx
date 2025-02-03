"use client";
import { motion } from "framer-motion";
import Container from "./Container";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimatedCharacter from "../../public/contact.json";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="text-gray-100 py-20 px-4 md:px-8 lg:px-16">
      <Container>
        <Toaster position="top-center" reverseOrder={false} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center"
          >
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="space-y-8 flex items-center justify-center"
            >
              <Player
                autoplay
                loop
                src={AnimatedCharacter}
                className="hover:scale-[1.02] transition-transform duration-300"
                style={{
                  height: "100%",
                  width: "100%",
                  maxWidth: "500px",
                  filter: "drop-shadow(0 0 30px rgba(168,85,247,0.15))",
                }}
                speed={1.2}
              />
            </motion.div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
