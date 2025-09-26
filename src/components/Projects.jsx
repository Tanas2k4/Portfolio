import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: "/public/1.jpg",
    title: "Zein IDE",
    description: "for student learn code",
    technologies: ["Typescript", "TailwindCSS", "JavaScript"],
  },
  {
    image: "/public/2.jpg",
    title: "Zein Team Planner",
    description: "for student team work",
    technologies: [
      "ASP.Net Core",
      "Entity Framework",
      "Bootstrap 5",
      "SQL Server",
    ],
  },
  {
    image: "/public/3.jpg",
    title: "Zein PicSocial",
    description: "for photographers",
    technologies: ["ASP.Net Core", "Entity Framework", "ReactTS", "SQL Server"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
