import { motion } from "framer-motion";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { BsTrophy, BsAward, BsCodeSlash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { SiDotnet, SiSpringboot, SiRuby } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
} from "react-icons/bi";
import cc1 from "../../public/cv/cc1.pdf";
import cc2 from "../../public/cv/cc2.pdf";
import cc3 from "../../public/cv/cc3.pdf";
import aw from "../assets/aw.png";
import aw1 from "../assets/aw1.png";

const About = () => {
  const { theme, language, t } = useApp();
  const [clickedStat, setClickedStat] = useState(null);

  const stats = [
    {
      id: "projects",
      icon: <BsCodeSlash size={24} />,
      value: "3+",
      label: t.abProjects,
    },
    {
      id: "awards",
      icon: <BsTrophy size={24} />,
      value: "2+",
      label: t.abAwards,
      preview: [
        {
          name: "Database design champion 2024",
          date: "2024",
          image: aw,
        },
        {
          name: "HDBank Hackathon 2024",
          date: "2023",
          image: aw1,
        },
      ],
    },
    {
      id: "certificates",
      icon: <BsAward size={24} />,
      value: "3+",
      label: t.abCertificates,
      preview: [
        {
          name: "JavaScript Essentials 1",
          image: cc1,
        },
        {
          name: "JavaScript Essentials 2",
          image: cc2,
        },
        {
          name: "Networking Basics",
          image: cc3,
        },
      ],
    },
  ];

  const skills = [
    {
      name: ".NET",
      icon: <SiDotnet size={36} />,
      level: 94,
      color: theme === "light" ? "#512BD4" : "#8B5CF6",
    },
    {
      name: "Spring Boot",
      icon: <BiLogoSpringBoot size={35} />,
      level: 63,
      color: theme === "light" ? "#6DB33F" : "#84CC16",
    },
    {
      name: "Ruby",
      icon: <SiRuby size={29} />,
      level: 25,
      color: theme === "light" ? "#CC342D" : "#EF4444",
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss size={36} />,
      level: 49,
      color: theme === "light" ? "#60b5ffff" : "#82d5ffff",
    },
    {
      name: "JavaScript",
      icon: <BiLogoJavascript size={36} />,
      level: 36,
      color: theme === "light" ? "#ffbf00ff" : "#fff307ff",
    },
  ];

  return (
    <div
      id="aboutme"
      className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="container mx-auto max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          className={`text-4xl font-light md:text-6xl mb-12 text-center ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.aboutMe}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Row 1: Intro Description and Achievements */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Background decoration */}
              <div
                className={`absolute -inset-4 rounded-2xl blur-2xl opacity-10 ${
                  theme === "light"
                    ? "bg-gradient-to-br from-gray-400 to-gray-600"
                    : "bg-gradient-to-br from-gray-500 to-gray-700"
                }`}
              />

              {/* Content Container */}
              <div
                className={`relative p-8 rounded-2xl text-lg ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                }`}
              >
                {t.introDescription}
              </div>
            </div>
          </motion.div>

          {/* Achievements Stats Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full space-y-6 p-8"
            >
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                  onClick={() => stat.preview && setClickedStat(stat.id)}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-all
                      ${
                        theme === "light"
                          ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                      }
                      ${clickedStat === stat.id ? "scale-110 bg-gray-300 text-gray-900" : ""}
                    `}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div
                    className={`text-2xl font-bold ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className={`text-xs ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {stat.label}
                  </div>

                  {/* Preview modal */}
                  {stat.preview && clickedStat === stat.id && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setClickedStat(null)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
                      />

                      {/* Modal */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`fixed z-50
                          top-24 sm:top-1/2 left-1/2
                          -translate-x-1/2 sm:-translate-y-1/2
                          w-[95vw] sm:w-[90vw] lg:w-[900px]
                          max-h-[80vh] overflow-y-auto
                          rounded-xl shadow-2xl
                          ${
                            theme === "light"
                              ? "bg-white"
                              : "bg-black/70 "
                          }
                          p-4 sm:p-6 pt-12
                        `}
                      >
                        {/* Close button */}
                        <button
                          onClick={() => setClickedStat(null)}
                          className={`absolute top-4 right-4 p-2 rounded-full transition
                            ${
                              theme === "light"
                                ? "hover:bg-gray-100 text-gray-600"
                                : "hover:bg-gray-800 text-gray-300"
                            }
                          `}
                        >
                          <IoClose size={22} />
                        </button>

                        {/* Title */}
                        <h3
                          className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
                            theme === "light" ? "text-gray-900" : "text-white"
                          }`}
                        >
                          {stat.label}
                        </h3>

                        {/*  Content Grid (Responsive)  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                          {stat.preview.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="pb-4"
                            >
                              {/* Preview box */}
                              <div className="rounded-lg overflow-hidden bg-white h-72 sm:h-80 flex items-center justify-center">
                                {typeof item.image === "string" &&
                                item.image.includes(".pdf") ? (
                                  <>
                                    {/* Desktop PDF */}
                                    <iframe
                                      src={item.image}
                                      className="hidden sm:block w-full h-full border-0"
                                      title={item.name}
                                    />

                                    {/* Mobile PDF */}
                                    <a
                                      href={item.image}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="sm:hidden flex flex-col items-center justify-center gap-2 text-blue-600 text-sm"
                                    >
                                      View PDF
                                      <span className="text-xs text-gray-500">
                                        Open in new tab
                                      </span>
                                    </a>
                                  </>
                                ) : (
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                  />
                                )}
                              </div>

                              {/* Name */}
                              <div
                                className={`mt-3 text-sm font-semibold text-center ${
                                  theme === "light"
                                    ? "text-gray-900"
                                    : "text-gray-100"
                                }`}
                              >
                                {item.name}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Row 2: Skills Progress Bars (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div style={{ color: skill.color }}>{skill.icon}</div>
                      <span
                        className={`font-medium ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        theme === "light" ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className={`h-2 rounded-full overflow-hidden ${
                      theme === "light" ? "bg-gray-300" : "bg-gray-800"
                    }`}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.9 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;