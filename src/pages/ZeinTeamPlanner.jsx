import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { useApp } from "../context/AppContext";

const ZeinTeamPlanner = () => {
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
        {/* Back to Home Button */}
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
            <BiArrowBack size={18} />
            <span>Home</span>
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
          <h1 className={`text-4xl md:text-6xl font-light ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Zein Team Planner
          </h1>
          <p className={`text-xl ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            A comprehensive team management tool for student collaboration
          </p>
        </motion.div>

        {/* Mini Navbar */}
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
          Zein Team Planner is a project management platform designed
          specifically for student teams. It streamlines team collaboration,
          task management, and project tracking to help students work more
          efficiently together.
        </p>

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
              <li>Manage task lists (Tasks) and event schedules (Events)</li>
              <li>Assign users/responsible persons to each task</li>
              <li>
                Categorize and display task status (Todo, In Progress, Done)
              </li>
              <li>Manage deadlines and creation dates</li>
              <li>Calendar view to track Tasks and Events</li>
              <li>Integrated Dashboard with charts and detailed insights</li>
              <li>Notifications for each activity or user action</li>
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
          <h2 className={`text-2xl font-semibold ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "ASP.Net Core",
              "Entity Framework",
              "Bootstrap 5",
              "SQL Server",
            ].map((tech, index) => (
              <span
                key={index}
                className={`rounded-lg px-4 py-2 ${
                  theme === 'light'
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-gray-800 text-white'
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
              The project is a task and event management web application built
              with ASP.NET Core, Entity Framework, SQL Server, and Bootstrap 5.
              It provides essential features such as task and event tracking,
              user assignment, status management, calendar integration,
              dashboard visualization, and real-time notifications.
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
            className={`px-6 py-3 rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            View Live Demo
          </a>
          <a
            href="#"
            className={`border px-6 py-3 rounded-lg transition-colors ${
              theme === 'light'
                ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            View Source Code
          </a>
        </motion.div>

        {/* Navigation to Next Project */}
        <div className={`flex justify-end border-t pt-8 mt-8 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-600'
        }`}>
          <Link to="/home/zein-ide">
            <motion.button
              className={`flex items-center gap-2 transition-colors text-lg ${
                theme === 'light'
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>Zein IDE</span>
              <BiChevronRight size={28} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ZeinTeamPlanner;