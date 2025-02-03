"use client";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Container from "./Container";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900/50"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Full Stack Developer
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              As a passionate{" "}
              <span className="text-purple-400">Full Stack Developer</span>{" "}
              specializing in <span className="text-pink-400">MERN stack</span>{" "}
              and <span className="text-purple-400">Next.js</span>, I bridge the
              gap between elegant design and robust functionality. With{" "}
              {new Date().getFullYear() - 2024}+ years of crafting digital
              experiences, I thrive in transforming complex problems into
              intuitive, high-performance solutions.
            </p>
            <div className="grid grid-cols-2  gap-4">
              <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-400/30 transition-colors">
                <span className="text-3xl font-bold text-purple-400">
                  {new Date().getFullYear() - 2024}+
                </span>
                <p className="text-gray-400 text-base md:text-lg">
                  Years Experience
                </p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-400/30 transition-colors">
                <span className="text-3xl font-bold text-pink-400">10+</span>
                <p className="text-gray-400 text-base md:text-lg">
                  Projects Completed
                </p>
              </div>
            </div>
            <div className="flex text-base md:text-lg items-center gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-400/30 transition-colors">
              <SparklesIcon className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <p className="text-gray-400">
                &quot;Every great project begins with understanding the
                <span className="text-purple-400"> human story </span>
                behind it.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative group p-10 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-400/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-2xl font-bold text-white mb-4">
                Development Philosophy
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I believe in{" "}
                <span className="text-purple-400">clean architecture</span> that
                stands the test of time, where{" "}
                <span className="text-pink-400">performance</span> and{" "}
                <span className="text-purple-400">maintainability</span>
                go hand-in-hand. My approach combines:
              </p>

              <ul className="mt-4 space-y-3 text-gray-400 text-base md:text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Modular, component-driven development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span>User-centric design principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Progressive enhancement strategies</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-r text-base md:text-lg from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
              <p className="text-gray-300 italic">
                &quot;True mastery lies in making complexity feel
                <span className="text-purple-400"> simple</span>, not in making
                simplicity feel
                <span className="text-pink-400"> complex</span>.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
