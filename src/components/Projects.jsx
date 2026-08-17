import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiLinkExternal, BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import zeinTeamPlannerImg from "../assets/zein-teamplanner.png";
import zeinIdeImg from "../assets/zein-ide.png";
import hutechIdeImg from "../assets/hutech-ide.png";
import picsocailApi from "../assets/picSocialApi.png";

import { getTechStyle } from "../utils/techStyles";

const Projects = () => {
  const { language, t } = useApp();
  const [parent] = useAutoAnimate();

  const projectsData = [
    {
      image: picsocailApi,
      title: "PicSocial API",
      category: "backend",
      categoryLabel: "Backend",
      descriptionKey: "apiForPicSocialWebApp",
      description: "API for PicSocial web app",
      technologies: ["ASP.NET Core", "SQL Server", "EF Core", "JWT"],
      link: "https://tanas2k4.github.io/picsocial-api-docs/",
      isExternal: true,
    },
    {
      image: zeinTeamPlannerImg,
      title: "Zein Team Planner",
      category: "backend",
      categoryLabel: "Backend",
      descriptionKey: "forStudentTeamWork",
      description: "For student team work",
      technologies: [
        "ASP.NET Core",
        "Entity Framework",
        "Bootstrap 5",
        "SQL Server",
        "SignalR",
      ],
      link: "/home/zein-teamplanner",
      isExternal: false,
    },
    {
      image: zeinIdeImg,
      title: "Zein IDE",
      category: "ide",
      categoryLabel: "Desktop / IDE",
      descriptionKey: "forStudentLearnCode",
      description: "For student learn code",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Eclipse Theia",
        "Electron",
      ],
      link: "/home/zein-ide",
      isExternal: false,
    },
    {
      image: hutechIdeImg,
      title: "HUTECH IDE",
      category: "ide",
      categoryLabel: "Desktop / IDE",
      descriptionKey: "forStudentLearnCode",
      description: "For student learn code",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Eclipse Theia",
        "Electron",
      ],
      link: "/home/hutech-ide",
      isExternal: false,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-4 bg-transparent"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="w-full">
        {/* Projects List (Row format) */}
        <div className="min-h-[30rem]" ref={parent}>
          <div className="flex flex-col gap-6">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col md:flex-row gap-6 p-4 border border-neutral-200/60 bg-white transition-all duration-350 hover:border-neutral-400"
              >
                {/* Thumbnail Box */}
                <div className="relative w-full md:w-48 aspect-video md:aspect-auto md:h-28 overflow-hidden bg-neutral-105 border border-neutral-200 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-none text-[10px] font-medium text-white">
                    {project.categoryLabel}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.isExternal ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white text-black rounded-none hover:scale-110 transition-transform"
                      >
                        <BiLinkExternal size={16} />
                      </a>
                    ) : (
                      <Link
                        to={project.link}
                        className="p-2 bg-white text-black rounded-none hover:scale-110 transition-transform"
                      >
                        <BiCodeAlt size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content Info */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h3 className="text-lg font-bold mb-1 tracking-tight group-hover:opacity-85 transition-opacity text-neutral-900">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed text-neutral-600 max-w-2xl">
                      {project.descriptionKey
                        ? t[project.descriptionKey]
                        : project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 text-[10px] font-mono tracking-tighter rounded-none border ${getTechStyle(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <div>
                      {project.isExternal ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-800 hover:text-black hover:underline"
                        >
                          <span>{t.viewDetails}</span>
                          <BiLinkExternal />
                        </a>
                      ) : (
                        <Link
                          to={project.link}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-800 hover:text-black hover:underline"
                        >
                          <span>{t.viewDetails}</span>
                          <BiLinkExternal />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
