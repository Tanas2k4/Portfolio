import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronLeft } from "react-icons/bi";
import { useApp } from "../context/AppContext";
import hutechIdeImg from "../assets/hutech-ide.png";

const HutechIDE = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { theme, t } = useApp();

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
            <span>{t.backToHome}</span>
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
            HUTECH IDE
          </h1>
          <p className={`text-xl ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            {t.hutechIDESubtitle}
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
                {t.overview}
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
                {t.techStack}
              </button>
            </li>
          </ul>
        </div>

        <p className={`leading-relaxed ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {t.hutechIDEDesc}
        </p>

        <motion.img
          src={hutechIdeImg}
          alt="HUTECH IDE"
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
              {t.keyFeatures}
            </h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>{t.zeinIDEFeature1}</li>
              <li>{t.zeinIDEFeature2}</li>
              <li>{t.zeinIDEFeature3}</li>
              <li>{t.zeinIDEFeature4}</li>
              <li>{t.zeinIDEFeature5}</li>
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
            {t.technologiesUsed}
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Typescript", "TailwindCSS", "JavaScript"].map((tech, index) => (
              <span
                key={index}
                className={`rounded-lg px-4 py-2 ${
                  theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
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
              {t.overallSummary}
            </h3>
            <p className={`leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              {t.hutechIDESummary}
            </p>
          </div>
        </motion.div>

        <div className={`flex justify-start items-center border-t pt-8 mt-8 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-600'
        }`}>
          <Link to="/home/zein-ide">
            <motion.button
              className={`flex items-center gap-2 transition-colors text-lg ${
                theme === 'light' ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >             
              <BiChevronLeft size={28} />
              <span>Zein IDE</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HutechIDE;