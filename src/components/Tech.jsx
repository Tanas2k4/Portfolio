import React from "react";
import { BiLogoFlutter, BiLogoJavascript, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import "./Tech.css";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="tech" className="tech-container">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="tech-title"
      >
        Technologies
      </motion.h1>
      <div className="tech-icons">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoTypescript className="tech-icon typescript" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoJavascript className="tech-icon javascript" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="dotnet-container"
        >
          <SiDotnet className="tech-icon dotnet" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoSpringBoot className="tech-icon springboot" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoFlutter className="tech-icon flutter" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoTailwindCss className="tech-icon tailwind" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;