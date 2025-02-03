"use client";
import React from "react";
import Container from "./Container";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import AnimatedCharacter from "../../public/AnimatedCharacter.json";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <div
        id="home"
        className="grid md:grid-cols-2 items-center min-h-[90vh] py-12 gap-8"
      >
        <div className="order-2 md:order-1">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex items-center gap-3 text-lg md:text-xl"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-300 ">Hello! I Am</span>
              <span className="text-purple-400 font-medium">Smit Joshi</span>
            </motion.div>

            <div className="space-y-4">
              <motion.p
                variants={fadeInVariants}
                className="text-gray-400 text-xl md:text-2xl"
              >
                A Full Stack Developer who
              </motion.p>

              <motion.h1
                variants={fadeInVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Judges a book by its{" "}
                <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  cover
                </span>
                <span className="text-white">...</span>
              </motion.h1>

              <motion.div
                variants={fadeInVariants}
                className="w-16 h-8 relative"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="absolute text-purple-400 w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path d="M 10,50 Q 50,90 90,50" />
                </svg>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInVariants}
              className="text-gray-400 italic max-w-lg text-balance text-base md:text-lg"
            >
              &quot;Because if the cover does not impress you, what else
              can?&quot;
            </motion.p>

            <motion.div variants={fadeInVariants} className="flex gap-4 mt-8">
              <button
                className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg shadow-purple-500/20"
                onClick={() => router.push("#project")}
              >
                View Projects
              </button>
              <button
                className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full text-lg hover:bg-purple-400/10 transition-colors duration-300"
                onClick={() => router.push("#contact")}
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative max-w-[600px] mx-auto md:max-w-none md:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10" />
          <Player
            autoplay
            loop
            src={AnimatedCharacter}
            className="hover:scale-[1.02] transition-transform duration-300"
            style={{
              height: "100%",
              width: "100%",
              filter: "drop-shadow(0 0 30px rgba(168,85,247,0.15))",
            }}
            speed={1.2}
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
