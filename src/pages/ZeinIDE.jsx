import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useApp } from "../context/AppContext";

const ZeinIDE = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useApp();

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
        <Link to="/home">
          <motion.button
            className={`flex items-center gap-2 transition-colors ${
              theme === 'light' 
                ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-gray-300'
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <BiArrowBack size={19} />
            <span>Home</span>
          </motion.button>
        </Link>

        <motion.div
          id="overview"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className={`text-4xl md:text-6xl font-light ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Zein IDE
          </h1>
          <p className={`text-xl ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            code editor for programming beginners
          </p>
        </motion.div>

        <div className={`border-b pb-2 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-600'
        }`}>
          <ul className="flex gap-6 overflow-x-auto">
            <li>
              <button
                onClick={() => scrollToSection("overview")}
                className={`text-sm whitespace-nowrap transition-colors ${
                  activeSection === "overview"
                    ? theme === 'light'
                      ? "text-gray-800 font-semibold border-b-2 border-gray-800 pb-2"
                      : "text-white font-semibold border-b-2 border-white pb-2"
                    : theme === 'light'
                      ? "text-gray-500 hover:text-gray-700"
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
                    ? theme === 'light'
                      ? "text-gray-800 font-semibold border-b-2 border-gray-800 pb-2"
                      : "text-white font-semibold border-b-2 border-white pb-2"
                    : theme === 'light'
                      ? "text-gray-500 hover:text-gray-700"
                      : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Tech Stack
              </button>
            </li>
          </ul>
        </div>

        <p className={`leading-relaxed ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          Zein IDE is an IDE built using the Eclipse Theia framework that runs
          on both browser and desktop. It offers a modular and customizable
          coding environment and serves as the foundation for projects like
          HUTECH IDE, which are tailored for student learning and practice.
        </p>

        <motion.img
          src="/public/zein-ide.png"
          alt="Zein IDE"
          className="w-full rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.div
          className={`flex flex-col gap-6 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h2 className={`text-2xl font-semibold mb-4 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Code editing with syntax highlighting and basic code suggestions</li>
              <li>Supports multiple programming languages: C/C++, Java, and Python</li>
              <li>Displays error messages and basic debugging tools for troubleshooting</li>
              <li>Runs seamlessly on both browser and desktop application versions</li>
              <li>Multiple theme options including dark and light modes</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          id="tech-stack"
          className="flex flex-col gap-4 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={`text-2xl font-semibold ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Typescript", "TailwindCSS", "JavaScript"].map((tech, index) => (
              <span
                key={index}
                className={`rounded-lg px-4 py-2 ${
                  theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <h3 className={`text-2xl font-semibold mb-3 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Overall Summary
            </h3>
            <p className={`leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              HUTECH IDE is a customized fork of Zein IDE, built on Eclipse
              Theia. It runs on both browser and desktop, supports C/C++, Java,
              and Python, and includes syntax highlighting, error display,
              debugging, and theme options. The platform is tailored for HUTECH
              University students to make coding and learning more convenient.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className={`px-6 py-3 rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Live Demo
          </a>
          <a
            href="#"
            className={`border px-6 py-3 rounded-lg transition-colors ${
              theme === 'light'
                ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </motion.div>

        <div className={`flex justify-between items-center border-t pt-8 mt-8 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-600'
        }`}>
          <Link to="/home/zein-teamplanner">
            <motion.button
              className={`flex items-center gap-2 transition-colors text-lg ${
                theme === 'light' ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <BiChevronLeft size={28} />
              <span>Zein Team Planner</span>
            </motion.button>
          </Link>

          <Link to="/home/hutech-ide">
            <motion.button
              className={`flex items-center gap-2 transition-colors text-lg ${
                theme === 'light' ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>HUTECH IDE</span>
              <BiChevronRight size={28} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ZeinIDE;