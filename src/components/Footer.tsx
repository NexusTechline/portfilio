"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
} from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/SmitJoshi04",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/smit-joshi-4764b426b",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      href: "https://www.instagram.com/smitjoshi__.__ ",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "TechStack", href: "#techstack" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 relative">
      <Container>
        <div className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={footerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* Branding Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                  Smit Joshi Portfolio
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Crafting digital experiences that merge innovation with purpose.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-purple-400 text-xl font-semibold mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center group text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <span className=" bg-gray-400 hover:bg-purple-500 opacity-100 hover:opacity-100 transition-opacity mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-purple-400 text-xl font-semibold mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-800 hover:bg-purple-900/20 transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-purple-400 text-xl font-semibold mb-4">
                Reach Out
              </h3>
              <div className="space-y-3 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <FiMail className="text-purple-500 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:dev.smitjoshi@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors bg-gradient-to-r from-purple-500/0 to-purple-500/0 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px]"
                  >
                    dev.smitjoshi@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="text-purple-500 mt-1 flex-shrink-0" />
                  <a
                    href="tel:+9978130964"
                    className="text-gray-400 hover:text-purple-400 transition-colors bg-gradient-to-r from-purple-500/0 to-purple-500/0 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px]"
                  >
                    +91 99781 30964
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright & Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-500 text-lg text-center">
              © {new Date().getFullYear()} Smit Joshi Portfolio. All rights
              reserved.
            </p>

            <motion.a
              href="#"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm">Back to Top</span>
              <div className="p-2 rounded-full bg-gray-800 group-hover:bg-purple-900/20 transition-colors">
                <FiArrowUp className="text-lg" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
