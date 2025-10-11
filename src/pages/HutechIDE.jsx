import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronLeft } from "react-icons/bi";

const HutechIDE = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 md:px-8 lg:px-16 py-24">
      <motion.div
        className="w-full max-w-[1000px] flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back to Home Button */}
        <Link to="/home">
          <motion.button
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BiArrowBack size={24} />
            <span>Back to Home</span>
          </motion.button>
        </Link>

        {/* Project Header */}
        <motion.div
          id="overview"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-white">
            HUTECH IDE
          </h1>
          <p className="text-xl text-gray-300">
            A specialized IDE platform for HUTECH students to practice coding
          </p>
        </motion.div>

        {/* Mini Navbar */}
        <div className="border-b border-gray-600 pb-2">
          <ul className="flex gap-6 overflow-x-auto">
            <li>
              <button
                onClick={() => scrollToSection("overview")}
                className={`text-sm whitespace-nowrap transition-colors ${
                  activeSection === "overview"
                    ? "text-white font-semibold border-b-2 border-white pb-2"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tech-stack")}
                className={`text-sm whitespace-nowrap transition-colors ${
                  activeSection === "tech-stack"
                    ? "text-white font-semibold border-b-2 border-white pb-2"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Tech Stack
              </button>
            </li>
          </ul>
        </div>

        {/* Project Image */}
        <motion.img
          src="/public/hutech-ide.png"
          alt="HUTECH IDE"
          className="w-full rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Project Description - Overview */}
        <motion.div
          className="flex flex-col gap-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <p className="leading-relaxed">
              HUTECH IDE is a custom-built online coding platform tailored specifically 
              for HUTECH University students. It provides an integrated learning environment 
              where students can practice programming, complete assignments, and improve 
              their coding skills with instant feedback.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Multi-language support (C, C++, Java, Python, JavaScript)</li>
              <li>Real-time code compilation and execution</li>
              <li>Integrated assignment submission system</li>
              <li>Code quality analysis and suggestions</li>
              <li>Progress tracking and performance analytics</li>
              <li>Collaborative coding features</li>
              <li>Practice problems and coding challenges</li>
              <li>Instructor feedback and grading system</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Impact</h2>
            <p className="leading-relaxed">
              HUTECH IDE has transformed the way students at HUTECH University learn programming, 
              providing them with a professional-grade tool that eliminates setup barriers and 
              allows them to focus on what matters most: learning to code effectively.
            </p>
          </div>
        </motion.div>

        {/* Technologies - Tech Stack */}
        <motion.div
          id="tech-stack"
          className="flex flex-col gap-4 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {["Typescript", "TailwindCSS", "JavaScript"].map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-gray-800 px-4 py-2 text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white mb-3">Technical Highlights</h3>
            <p className="leading-relaxed text-gray-300">
              Developed with TypeScript for robust type checking and better code maintainability. 
              The sleek, modern UI is powered by TailwindCSS, ensuring a responsive design 
              that works perfectly on any device. Advanced JavaScript features enable smooth 
              code execution and real-time collaboration capabilities.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Try Live Demo
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            View Source Code
          </a>
        </motion.div>

        {/* Navigation to Previous Project */}
        <div className="flex justify-start border-t border-gray-600 pt-8 mt-8">
          <Link to="/home/zein-ide">
            <motion.button
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <BiChevronLeft size={28} />
              <span>Previous: Zein IDE</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HutechIDE;