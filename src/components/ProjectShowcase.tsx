"use client";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Able Freight",
    description:
      "A powerful admin panel for managing global logistics and freight forwarding operations, featuring real-time shipment tracking, inventory management, and seamless communication tools for perishable commodities.",
    image: "/projects/able.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveLink: "https://qc.ablefreight.com",
  },
  {
    title: "Olivar International",
    description:
      "A robust admin panel for managing the production, distribution, and inventory of water purifier components and RO systems, featuring real-time stock updates,  seamless dealer and distributor management, and the ability to generate QR codes for product authentication and traceability.",
    image: "/projects/oliver.webp",
    technologies: ["Angular", "Node.js", "MongoDB", "Bootstrap"],
    liveLink: "https://admin.olivarinternational.com",
  },
  {
    title: "Kaydapothi",
    description:
      "A powerful admin panel for managing and organizing legal acts and laws, allowing efficient updates, content categorization, and streamlined management of legal data. It supports seamless navigation and quick access for administrators to maintain and enhance the legal resource database.",
    image: "/projects/kaydapothi.jpg",
    technologies: ["Angular", ".NET", "SQL", "Bootstrap"],
    liveLink: "https://gujaratikaydo.com",
  },
];

const ProjectShowcase = () => {
  return (
    <section
      id="project"
      className="py-20 bg-gradient-to-b from-gray-900/50 to-black"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center"
        >
          Project Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-60 bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={500}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
