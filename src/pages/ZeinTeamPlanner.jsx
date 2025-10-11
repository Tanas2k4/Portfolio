import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ZeinTeamPlanner = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 md:px-8 lg:px-16 py-24">
      <motion.div
        className="w-full max-w-[1000px] flex flex-col gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Back Button */}
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

        {/* Project Image */}
        <motion.img
          src="/public/zein-teamplanner.png"
          alt="Zein Team Planner"
          className="w-full rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Technologies */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
        </motion.div>

        {/* Project Description */}
        <motion.div
          className="flex flex-col gap-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
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

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Technical Highlights</h2>
            <p className="leading-relaxed">
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
      </motion.div>
    </div>
  );
};

export default ZeinTeamPlanner;