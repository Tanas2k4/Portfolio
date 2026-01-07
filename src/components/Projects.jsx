import React from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import zeinTeamPlannerImg from "../assets/zein-teamplanner.png";
import zeinIdeImg from "../assets/zein-ide.png";
import hutechIdeImg from "../assets/hutech-ide.png";
import picsocailApi from "../assets/picSocialApi.png"
import { title } from "framer-motion/client";
import { AiFillPicture } from "react-icons/ai";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { theme, language, t } = useApp();

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <ScrollReveal>
      <motion.div
        className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        style={{ fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'inherit' }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all hover:scale-105 md:w-[300px] border border-gray-400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
              {project.title}
            </div>
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
              {project.descriptionKey ? t[project.descriptionKey] : project.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={techVariants}
            initial="hidden"
            whileInView="visible"
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className={`rounded-lg px-3 py-1 text-sm ${theme === 'light'
                    ? 'bg-white text-gray-800'
                    : 'bg-gray-800 text-white'
                  }`}
                variants={techItemVariants}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <Link to={project.link}>
            <motion.button
              className={`flex items-center justify-center w-[180px] text-sm px-4 py-2 rounded-lg transition-all md:w-[200px] md:text-base ${theme === 'light'
                  ? 'text-white bg-gray-800 hover:bg-gray-700'
                  : 'text-black bg-white hover:bg-gray-200'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <BiLinkExternal size={20} />
              {t.viewDetails}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const { theme, language, t } = useApp();

  const projectsData = [
    {
      image: picsocailApi,
      title: "PicSocial API",
      descriptionKey: "apiForPicSocialWebApp",
      technologies: ["ASP.Net Core", "SQL Server", "EF Core", "JWT"],
      link: "https://tanas2k4.github.io/picsocial-api-docs/"
    },
    {
      image: zeinTeamPlannerImg,
      title: "Zein Team Planner",
      descriptionKey: "forStudentTeamWork",
      technologies: [
        "ASP.Net Core",
        "Entity Framework",
        "Bootstrap 5",
        "SQL Server",
        "HTML",
        "SignalR",
      ],
      link: "/home/zein-teamplanner",
    },
    {
      image: zeinIdeImg,
      title: "Zein IDE",
      descriptionKey: "forStudentLearnCode",
      technologies: ["Typescript", "TailwindCSS", "JavaScript", "NodeJs", "Theia Extension", "Electron"],
      link: "/home/zein-ide",
    },
    {
      image: hutechIdeImg,
      title: "HUTECH IDE",
      descriptionKey: "forStudentLearnCode",
      technologies: ["Typescript", "TailwindCSS", "JavaScript", "NodeJs", "Theia Extension", "Electron"],
      link: "/home/hutech-ide",
    }
  ];

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-4 md:px-14 md:py-24"
      style={{ fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'inherit' }}
    >
      <motion.h1
        className={`text-4xl font-light md:text-6xl ${theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t.myProjects}
      </motion.h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
