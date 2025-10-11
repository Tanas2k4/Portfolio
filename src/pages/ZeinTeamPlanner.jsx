import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";

const ZeinTeamPlanner = () => {
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
            Zein Team Planner
          </h1>
          <p className="text-xl text-gray-300">
            A comprehensive team management tool for student collaboration
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
          src="/public/zein-teamplanner.png"
          alt="Zein Team Planner"
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
              Zein Team Planner is a powerful project management platform designed specifically 
              for student teams. It streamlines team collaboration, task management, and project 
              tracking to help students work more efficiently together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Real-time task assignment and tracking</li>
              <li>Team member management and role allocation</li>
              <li>Project timeline visualization</li>
              <li>File sharing and document management</li>
              <li>Progress reporting and analytics</li>
              <li>Integration with academic calendars</li>
            </ul>
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
            {["ASP.Net Core", "Entity Framework", "Bootstrap 5", "SQL Server"].map((tech, index) => (
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
              Built with ASP.NET Core for robust backend performance and Entity Framework 
              for efficient database operations. The application uses SQL Server for reliable 
              data storage and Bootstrap 5 for a responsive, modern user interface that works 
              seamlessly across all devices.
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
            View Live Demo
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            View Source Code
          </a>
        </motion.div>

        {/* Navigation to Next Project */}
        <div className="flex justify-end border-t border-gray-600 pt-8 mt-8">
          <Link to="/home/zein-ide">
            <motion.button
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>Next: Zein IDE</span>
              <BiChevronRight size={28} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ZeinTeamPlanner;