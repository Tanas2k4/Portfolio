import React from "react";
import {
  BiLogoFlutter,
  BiLogoJavascript,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiRuby, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

const Tech = () => {
  const { theme, language, t } = useApp();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const techList = [
    {
      Icon: BiLogoTypescript,
      dark: "text-sky-400",
      light: "text-sky-600",
    },
    {
      Icon: BiLogoJavascript,
      dark: "text-yellow-400",
      light: "text-yellow-500",
    },
    {
      Icon: SiDotnet,
      dark: "text-fuchsia-500",
      light: "text-fuchsia-700",
    },
    {
      Icon: BiLogoSpringBoot,
      dark: "text-green-500",
      light: "text-green-600",
    },
    {
      Icon: SiRuby,
      dark: "text-[#CC342D] scale-80",
      light: "text-[#CC342D] scale-80",
    },
    {
      Icon: BiLogoTailwindCss,
      dark: "text-cyan-400",
      light: "text-cyan-500",
    },
  ];

  return (
    <div
      id="tech"
      className="flex flex-col items-center justify-center min-h-screen w-screen gap-12 p-8 box-border md:gap-16"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className={`text-4xl font-light text-center md:text-6xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        {t.technologies}
      </motion.h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-10 p-6 max-w-[1200px] w-full justify-items-center">
        {techList.map(({ Icon, dark, light }, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:brightness-125"
          >
            <Icon
              className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] ${
                theme === "light" ? light : dark
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
