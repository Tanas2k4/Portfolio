import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { useApp } from "../../context/AppContext";
import zeinTeamPlannerImg from "../../assets/zein-teamplanner.png";

const ZeinTeamPlanner = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { theme, language, t } = useApp();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "tech-stack", "key-features"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

  // Connect scroll event
  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techColors = {
    "ASP.Net Core": {
      light: "bg-purple-700 text-white ring-purple-700 hover:bg-purple-600",
      dark: "bg-purple-700 text-black ring-purple-700 hover:bg-purple-600 ",
    },
    "Entity Framework": {
      light: "bg-blue-700 text-white ring-blue-700 hover:bg-blue-800",
      dark: "bg-blue-600 text-black ring-blue-600 hover:bg-blue-500",
    },
    "Bootstrap 5": {
      light: "bg-indigo-600 text-white ring-indigo-600 hover:bg-indigo-700",
      dark: "bg-indigo-600 text-black ring-indigo-600 hover:bg-indigo-500",
    },
    "SQL Server": {
      light: "bg-red-700 text-white ring-red-700 hover:bg-red-800",
      dark: "bg-red-700 text-black ring-red-700 hover:bg-red-600",
    },
    "HTML":{
      light: "bg-orange-500 text-white ring-orange-500 hover:bg-orange-600",
      dark: "bg-orange-400 text-black ring-orange-400 hover:bg-orange-300",
    },
    "SignalR":{
      light: "bg-gray-500 text-white ring-gray-500 hover:bg-gray-600",
      dark: "bg-gray-400 text-black ring-gray-400 hover:bg-gray-300",
    }
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className="min-h-screen w-full"
      style={{ fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'inherit' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* Hero Section */}
        <motion.div
          id="overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-4">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight ${
              isDark 
                ? 'text-white' 
                : 'text-gray-900'
            }`}>
              Zein Team Planner
            </h1>
            <p className={`text-lg sm:text-xl font-light ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t.zeinTeamPlannerSubtitle}
            </p>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`border-b mb-12 ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <nav className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: t.overview },
              { id: "tech-stack", label: t.techStack },
              { id: "key-features", label: t.keyFeatures }             
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDark ? 'bg-white' : 'bg-gray-900'
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.zeinTeamPlannerDesc}
          </p>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          id="tech-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-12"
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t.technologiesUsed}
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {["ASP.Net Core", "Entity Framework", "Bootstrap 5", "SQL Server", "HTML", "SignalR"].map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ring-1 ${
                  isDark
                    ? techColors[tech].dark
                    : techColors[tech].light
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
          
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12"
        >
          <div className={`relative rounded-2xl overflow-hidden ring-1 ${
            isDark ? 'ring-gray-800' : 'ring-gray-200'
          }`}>
            <img
              src={zeinTeamPlannerImg}
              alt="Zein Team Planner Interface"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.section
          id="key-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`rounded-2xl p-6 sm:p-8 mb-12 ring-1 scroll-mt-32 ${
            isDark ? 'ring-gray-800' : 'ring-gray-400'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t.keyFeatures}
          </h2>
          <ul className="space-y-4">
            {[
              t.zeinTeamPlannerFeature1,
              t.zeinTeamPlannerFeature2,
              t.zeinTeamPlannerFeature3,
              t.zeinTeamPlannerFeature4,
              t.zeinTeamPlannerFeature5,
              t.zeinTeamPlannerFeature6,
              t.zeinTeamPlannerFeature7
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5 ${
                  isDark 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {index + 1}
                </span>
                <span className={`text-base leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Overall Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="scroll-mt-32 mb-12"
        >
          <div className={`rounded-2xl p-6 sm:p-8 ring-1 ${
            isDark ? 'ring-gray-800' : 'ring-gray-400'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t.overallSummary}
            </h3>
            <p className={`text-base leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t.zeinTeamPlannerSummary}
            </p>
          </div>
        </motion.section>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isDark
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {t.tryLiveDemo}
          </a>
          <a
            href="https://github.com/Tanas2k4/ZEIN_TeamPlanner"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ring-1 ${
              isDark
                ? 'ring-gray-700 text-gray-300 hover:bg-gray-800'
                : 'ring-gray-400 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t.viewSourceCode}
          </a>
        </motion.div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`flex items-center justify-end border-t pt-8 ${
            isDark ? 'border-gray-800' : 'border-gray-400'
          }`}
        >
          <Link to="/home/zein-ide">
            <motion.button
              className={`group flex items-center gap-2 text-base font-medium transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ x: 4 }}
            >
              <span>Zein IDE</span>
              <BiChevronRight 
                className="transition-transform group-hover:translate-x-1" 
                size={28} 
              />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ZeinTeamPlanner;