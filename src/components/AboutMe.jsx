import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { BsTrophy, BsAward, BsCodeSlash } from "react-icons/bs";
import { SiDotnet, SiSpringboot, SiRuby } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
  const { theme, language, t } = useApp();

  const stats = [
    {
      icon: <BsCodeSlash size={24} />,
      value: "10+",
      label: t.abProjects,
    },
    {
      icon: <BsTrophy size={24} />,
      value: "5+",
      label: t.abAwards,
    },
    {
      icon: <BsAward size={24} />,
      value: "3+",
      label: t.abCertificates,
    },
  ];

  const skills = [
    {
      name: ".NET",
      icon: <SiDotnet size={28} />,
      level: 94,
      color: theme === "light" ? "#512BD4" : "#8B5CF6",
    },
    {
      name: "Spring Boot",
      icon: <BiLogoSpringBoot size={28} />,
      level: 63,
      color: theme === "light" ? "#6DB33F" : "#84CC16",
    },
    {
      name: "Ruby",
      icon: <SiRuby size={28} />,
      level: 25,
      color: theme === "light" ? "#CC342D" : "#EF4444",
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss size={28} />,
      level: 49,
      color: theme === "light" ? "#60b5ffff" : "#82d5ffff",
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
          {language === "vi" ? "Về Mình" : "About Me"}
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
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        theme === "light"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-gray-800 text-gray-200"
                      }`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl font-bold ${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs ${
                        theme === "light" ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {stat.label}
                    </div>
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
