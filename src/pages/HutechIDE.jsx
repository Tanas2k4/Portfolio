import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronLeft } from "react-icons/bi";
import { useApp } from "../context/AppContext";
import hutechIdeImg from "../assets/hutech-ide.png";
import hutechIdeContr from "../assets/hutechIDEcontr.png";

const HutechIDE = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { theme, t } = useApp();

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techColors = {
    "TypeScript": {
      light: "bg-sky-600 text-white hover:bg-sky-700",
      dark: "bg-sky-600 text-black hover:bg-sky-500",
    },
    "TailwindCSS": {
      light: "bg-cyan-600 text-white hover:bg-cyan-700",
      dark: "bg-cyan-500 text-black hover:bg-cyan-400",
    },
    "JavaScript": {
      light: "bg-yellow-500 text-white hover:bg-yellow-600",
      dark: "bg-yellow-500 text-black hover:bg-yellow-400",
    },
    "NodeJs": {
      light: "bg-green-700 text-white hover:bg-green-800",
      dark: "bg-green-700 text-black hover:bg-green-600",
    },
    "Electron": {
      light: "bg-purple-400 text-white hover:bg-purple-500",
      dark: "bg-purple-300 text-black hover:bg-purple-200",
    },
    "Theia Extension":{
      light: "bg-gray-800 text-white hover:bg-gray-900",
      dark: "bg-gray-200 text-black hover:bg-gray-100",
    }
  }; 


  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen w-full">
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
              HUTECH IDE
            </h1>
            <p className={`text-lg sm:text-xl font-light ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t.hutechIDESubtitle}
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
            {t.hutechIDEDesc}
          </p>
        </motion.div>

        {/* Technologies used */}
        <motion.div
          id="tech-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t.technologiesUsed}
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {["TypeScript", "TailwindCSS", "JavaScript", "NodeJs", "Electron", "Theia Extension"].map((tech) => (
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

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-8 mb-12"
        >
          <div className={`relative rounded-2xl overflow-hidden ring-1 ${
            isDark ? 'ring-gray-800' : 'ring-gray-200'
          }`}>
            <img
              src={hutechIdeImg}
              alt="HUTECH IDE Interface"
              className="w-full h-auto"
            />
          </div>
          
          <div className={`relative rounded-2xl overflow-hidden ring-1 ${
            isDark ? 'ring-gray-800' : 'ring-gray-200'
          }`}>
            <img
              src={hutechIdeContr}
              alt="HUTECH IDE Controller"
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
              t.zeinIDEFeature1,
              t.zeinIDEFeature2,
              t.zeinIDEFeature3,
              t.zeinIDEFeature4,
              t.zeinIDEFeature5
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

        {/* Tech Stack */}
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
              {t.hutechIDESummary}
            </p>
          </div>
        </motion.section>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`flex items-center border-t pt-8 ${
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
              whileHover={{ x: -4 }}
            >
              <BiChevronLeft 
                className="transition-transform group-hover:-translate-x-1" 
                size={28} 
              />
              <span>Zein IDE</span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HutechIDE;