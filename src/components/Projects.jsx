import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiLinkExternal, BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import zeinTeamPlannerImg from "../assets/zein-teamplanner.png";
import zeinIdeImg from "../assets/zein-ide.png";
import hutechIdeImg from "../assets/hutech-ide.png";
import picsocailApi from "../assets/picSocialApi.png";

const getTechStyle = (tech) => {
  const norm = tech.toLowerCase().trim();
  if (norm.includes("asp.net") || norm === ".net") {
    return "bg-purple-50 text-purple-800 border-purple-200 font-semibold";
  }
  if (norm.includes("sql server")) {
    return "bg-blue-50 text-blue-800 border-blue-250 font-semibold";
  }
  if (norm === "ef core" || norm.includes("entity framework")) {
    return "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200 font-semibold";
  }
  if (norm.includes("jwt")) {
    return "bg-amber-50 text-amber-900 border-amber-250 font-semibold";
  }
  if (norm.includes("bootstrap")) {
    return "bg-indigo-50 text-indigo-850 border-indigo-250 font-semibold";
  }
  if (norm.includes("signalr")) {
    return "bg-rose-50 text-rose-800 border-rose-250 font-semibold";
  }
  if (norm.includes("typescript") || norm === "ts") {
    return "bg-sky-50 text-sky-850 border-sky-250 font-semibold";
  }
  if (norm.includes("tailwindcss") || norm === "tailwind") {
    return "bg-teal-50 text-teal-850 border-teal-250 font-semibold";
  }
  if (norm.includes("node")) {
    return "bg-emerald-50 text-emerald-850 border-emerald-250 font-semibold";
  }
  if (norm.includes("theia")) {
    return "bg-orange-50 text-orange-850 border-orange-250 font-semibold";
  }
  if (norm.includes("electron")) {
    return "bg-cyan-50 text-cyan-850 border-cyan-250 font-semibold";
  }
  return "bg-neutral-50 text-neutral-850 border-neutral-200 font-semibold";
};

const Projects = () => {
  const { language, t, isUnlocked, setIsUnlocked } = useApp();
  const [parent] = useAutoAnimate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === "@Warmdrobe") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError(
        language === "en" ? "Incorrect password!" : "Sai mật khẩu rồi! =))",
      );
    }
  };

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

  if (!isUnlocked) {
    return (
      <section
        id="projects"
        className="w-full py-4 flex flex-col items-center justify-center "
        style={{
          fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
        }}
      >
        <div className="w-full max-w-sm border border-neutral-500 p-8 bg-white/50 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-3 tracking-tight text-center text-neutral-900">
            {language === "en" ? "I'm keeping it here for now" : "Tạm thời tui đang cất"}
          </h2>
          <p
            onClick={() => window.dispatchEvent(new CustomEvent("trigger-password-hint"))}
            className="text-xs text-neutral-500 mb-6 text-center leading-relaxed cursor-pointer hover:text-black transition-colors select-none"
            title={language === "en" ? "Click to get a hint!" : "Click để xem gợi ý!"}
          >
            {language === "en"
              ? "If you'd like to take a look, I've left the password above."
              : "Bạn muốn xem thì tôi có để mật khẩu ở trên."}
          </p>
          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder={
                  language === "en" ? "Enter password" : "Nhập mật khẩu..."
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-350 rounded-none text-xs focus:outline-none focus:border-black font-mono text-center"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-[11px] text-red-500 text-center font-medium font-mono">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer rounded-none"
            >
              {language === "en" ? "Unlock" : "Mở khóa"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full py-4 bg-white"
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
                className="group flex flex-col md:flex-row gap-6 p-4 border border-neutral-200/60 bg-white transition-all duration-350 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Thumbnail Box */}
                <div className="relative w-full md:w-48 aspect-video md:aspect-auto md:h-28 overflow-hidden bg-neutral-105 border border-neutral-200 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-none text-[9px] font-semibold uppercase tracking-wider text-white">
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
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:underline"
                        >
                          <span>{t.viewDetails}</span>
                          <BiLinkExternal />
                        </a>
                      ) : (
                        <Link
                          to={project.link}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:underline"
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
