import React from "react";
import {
  BiLogoFlutter,
  BiLogoJavascript,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex flex-col items-center justify-center min-h-screen w-screen gap-12 p-8 box-border md:gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white text-center md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-10 p-6 max-w-[1200px] w-full justify-items-center">
        {[
          { Icon: BiLogoTypescript, className: "text-sky-400" },
          { Icon: BiLogoJavascript, className: "text-yellow-500" },
          { Icon: SiDotnet, className: "text-fuchsia-600" },
          { Icon: BiLogoSpringBoot, className: "text-green-600" },
          { Icon: BiLogoFlutter, className: "text-blue-700" },
          { Icon: BiLogoTailwindCss, className: "text-cyan-500" },
        ].map(({ Icon, className }, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:brightness-125"
          >
            <Icon
              className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] ${className}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;