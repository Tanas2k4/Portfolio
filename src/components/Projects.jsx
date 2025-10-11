import React from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";

const projectsData = [
  {
    image: "/public/zein-ide.png",
    title: "Zein IDE",
    description: "for student learn code",
    technologies: ["Typescript", "TailwindCSS", "JavaScript"],
    link: "#",
  },
  {
    image: "/public/2.png",
    title: "HUTECH IDE",
    description: "for student learn code",
    technologies: ["Typescript", "TailwindCSS", "JavaScript"],
    link: "#",
  },
  {
    image: "/public/zein-teamplanner.png",
    title: "Zein Team Planner",
    description: "for student team work",
    technologies: [
      "ASP.Net Core",
      "Entity Framework",
      "Bootstrap 5",
      "SQL Server",
    ],
    link: "#",
  },
  {
    image: "/public/3.png",
    title: "Zein PicSocial",
    description: "for photographers",
    technologies: ["ASP.Net Core", "Entity Framework", "ReactTS", "SQL Server"],
    link: "#",
  },
];

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
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all hover:scale-105 md:w-[300px]"
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
            <div className="text-xl font-semibold text-white">{project.title}</div>
            <p className="text-gray-300">{project.description}</p>
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
                className="rounded-lg bg-gray-800 px-3 py-1 text-sm text-white"
                variants={techItemVariants}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href={project.link}
            className="flex items-center justify-center w-[180px] text-sm text-black bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all md:w-[200px] md:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <BiLinkExternal size={20} />
             View Details
          </motion.a>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        className="text-4xl font-light text-white md:text-6xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-20 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;