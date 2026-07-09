import React, { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight, BiLinkExternal } from "react-icons/bi";
import { useApp } from "../context/AppContext";

const ProjectLayout = ({
  title,
  subtitle,
  description,
  technologies = [],
  techColors = {},
  images = [],
  features = [],
  summaryText,
  demoLink,
  sourceLink,
  footerNav, // { to, label, direction: 'left' | 'right' }
}) => {
  const [activeSection, setActiveSection] = useState("overview");
  const { language, t } = useApp();
  const [parent] = useAutoAnimate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "tech-stack", "key-features"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultTechColors = {
    "ASP.Net Core": "bg-purple-700 text-white ring-purple-700 hover:bg-purple-600",
    "ASP.NET Core": "bg-purple-700 text-white ring-purple-700 hover:bg-purple-600",
    "Entity Framework": "bg-blue-700 text-white ring-blue-700 hover:bg-blue-800",
    "Bootstrap 5": "bg-indigo-600 text-white ring-indigo-600 hover:bg-indigo-700",
    "SQL Server": "bg-red-700 text-white ring-red-700 hover:bg-red-800",
    "HTML": "bg-orange-500 text-white ring-orange-500 hover:bg-orange-600",
    "SignalR": "bg-gray-500 text-white ring-gray-500 hover:bg-gray-600",
    "TypeScript": "bg-sky-600 text-white hover:bg-sky-700",
    "TailwindCSS": "bg-cyan-600 text-white hover:bg-cyan-700",
    "JavaScript": "bg-yellow-500 text-white hover:bg-yellow-600",
    "NodeJs": "bg-green-700 text-white hover:bg-green-800",
    "Node.js": "bg-green-700 text-white hover:bg-green-800",
    "Electron": "bg-purple-400 text-white hover:bg-purple-500",
    "Theia Extension": "bg-gray-800 text-white hover:bg-gray-900",
    "Eclipse Theia": "bg-gray-800 text-white hover:bg-gray-900",
  };

  return (
    <div
      className="min-h-screen w-full bg-white text-neutral-850"
      style={{ fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={parent}>
        {/* Hero Section */}
        <div id="overview" className="mb-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl font-light text-neutral-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b mb-12 border-gray-200">
          <nav className="flex gap-8 overflow-x-auto no-scrollbar">
            {[
              { id: "overview", label: t.overview },
              { id: "tech-stack", label: t.techStack },
              { id: "key-features", label: t.keyFeatures },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-4 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === item.id ? "text-gray-900 font-bold" : "text-gray-550 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>

        {/* Technologies used */}
        {technologies.length > 0 && (
          <div id="tech-stack" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-900">
              {t.technologiesUsed}
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {technologies.map((tech) => {
                const colorClass =
                  techColors[tech] ||
                  defaultTechColors[tech] ||
                  "bg-neutral-100 text-neutral-700 ring-neutral-200 hover:bg-neutral-200";
                return (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ring-1 cursor-default ${colorClass}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Images */}
        {images.length > 0 && (
          <div className="space-y-8 mb-12">
            {images.map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt || `${title} screenshot`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        {features.length > 0 && (
          <section
            id="key-features"
            className="rounded-2xl p-6 sm:p-8 mb-12 ring-1 ring-gray-300 bg-neutral-50/50 scroll-mt-32"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-900">
              {t.keyFeatures}
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5 bg-gray-200 text-gray-700">
                    {index + 1}
                  </span>
                  <span className="text-base leading-relaxed text-neutral-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Overall Summary */}
        {summaryText && (
          <section className="scroll-mt-32 mb-12">
            <div className="rounded-2xl p-6 sm:p-8 ring-1 ring-gray-300 bg-neutral-50/50">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900">
                {t.overallSummary}
              </h3>
              <p className="text-base leading-relaxed text-neutral-700">
                {summaryText}
              </p>
            </div>
          </section>
        )}

        {/* Action Buttons */}
        {(demoLink || sourceLink) && (
          <div className="flex flex-wrap gap-4 mb-12">
            {demoLink && (
              <a
                href={demoLink}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800"
              >
                {t.tryLiveDemo}
              </a>
            )}
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 ring-1 ring-gray-400 text-gray-700 hover:bg-gray-100"
              >
                {t.viewSourceCode}
              </a>
            )}
          </div>
        )}

        {/* Navigation Footer */}
        {footerNav && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-8">
            {footerNav.left ? (
              <Link to={footerNav.left.to}>
                <button
                  className="group flex items-center gap-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900 cursor-pointer bg-transparent border-none"
                >
                  <BiChevronLeft
                    className="transition-transform group-hover:-translate-x-1"
                    size={28}
                  />
                  <span>{footerNav.left.label}</span>
                </button>
              </Link>
            ) : (
              <div />
            )}

            {footerNav.right ? (
              <Link to={footerNav.right.to}>
                <button
                  className="group flex items-center gap-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900 cursor-pointer bg-transparent border-none"
                >
                  <span>{footerNav.right.label}</span>
                  <BiChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={28}
                  />
                </button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectLayout;
