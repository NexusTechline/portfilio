"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-20 bg-gradient-to-b from-gray-900/50 to-black min-h-[90vh] flex items-center justify-center"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I leverage the latest technologies to build scalable,
            high-performance applications, stack includes modern front-end,
            back-end, and cloud tools that ensure optimal performance and
            maintainability.
          </motion.p>

          <motion.div
            className="relative"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />

            <Image
              src="/Skills.png"
              alt="skill"
              width={800}
              height={600}
              className="relative z-10 mx-auto object-contain hover:scale-[1.02] transition-transform"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
