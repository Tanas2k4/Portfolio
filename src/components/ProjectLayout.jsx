import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiChevronLeft, BiChevronRight, BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import { getTechStyle } from "../utils/techStyles";
import Button from "./ui/Button";

const ProjectLayout = ({
  title,
  subtitle,
  description,
  technologies = [],
  images = [],
  features = [],
  summaryText,
  demoLink,
  sourceLink,
  footerNav,
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
      const sections = ["overview", "tech-stack", "key-features", "screenshots"];
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

  const navItems = [
    { id: "overview", label: t.overview || "Overview" },
    { id: "tech-stack", label: t.techStack || "Tech Stack" },
    ...(features.length > 0 ? [{ id: "key-features", label: t.keyFeatures || "Key Features" }] : []),
    ...(images.length > 0 ? [{ id: "screenshots", label: language === "en" ? "Screenshots" : "Hình ảnh" }] : []),
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#f6f4ee] text-neutral-850"
      style={{ fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit" }}
    >
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12" ref={parent}>
        {/* Project Header with Subtle Bottom Border */}
        <div className="pb-6 mb-8 border-b border-neutral-300/60">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm sm:text-base text-neutral-500 font-normal leading-relaxed mt-2 max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Action Buttons with Black Background & Ripple Effect */}
            {((demoLink && demoLink !== "#") || (sourceLink && sourceLink !== "#")) && (
              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                {demoLink && demoLink !== "#" && (
                  <Button
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <BiLinkExternal size={14} />
                    <span>{t.tryLiveDemo || "Live Demo"}</span>
                  </Button>
                )}
                {sourceLink && sourceLink !== "#" && (
                  <Button
                    href={sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <BsGithub size={14} />
                    <span>{t.viewSourceCode || "Source Code"}</span>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs with Subtle Underline Border */}
        <div className="mb-10 border-b border-neutral-200/80">
          <nav className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 text-xs md:text-sm font-medium tracking-wide transition-all cursor-pointer select-none relative border-none bg-transparent ${
                  activeSection === item.id
                    ? "text-black font-semibold"
                    : "text-neutral-500 font-normal hover:text-neutral-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12 scroll-mt-28">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-neutral-500 font-semibold">
              {language === "en" ? "01 / Overview" : "01 / Tổng quan"}
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
            {description}
          </p>

          {/* Overall Summary with Elegant Left Border Accent */}
          {summaryText && (
            <div className="mt-6 pl-4 border-l-2 border-neutral-800 py-1 bg-white/40 border border-neutral-200/40 p-4">
              <h3 className="text-xs font-mono font-semibold text-neutral-900 mb-1.5">
                {t.overallSummary || "Overall Summary"}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                {summaryText}
              </p>
            </div>
          )}
        </section>

        {/* Tech Stack Section */}
        {technologies.length > 0 && (
          <section id="tech-stack" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 font-semibold">
                {language === "en" ? "02 / Tech Stack" : "02 / Công nghệ"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-mono tracking-tight border rounded-none ${getTechStyle(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Key Features Section with Subtle Left Accent & Item Dividers */}
        {features.length > 0 && (
          <section id="key-features" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 font-semibold">
                {language === "en" ? "03 / Key Features" : "03 / Tính năng chính"}
              </span>
            </div>
            <div className="border-l border-neutral-300/80 pl-4 sm:pl-5 space-y-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 py-2.5 border-b border-neutral-200/40 last:border-b-0 hover:bg-white/30 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-neutral-400 mt-0.5 w-5 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots / Images Section with Clean Subtle Image Frame Border */}
        {images.length > 0 && (
          <section id="screenshots" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 font-semibold">
                {language === "en" ? "04 / Screenshots" : "04 / Hình ảnh"}
              </span>
            </div>
            <div className="space-y-6">
              {images.map((img, idx) => (
                <div key={idx} className="group">
                  <div className="overflow-hidden border border-neutral-300/70 p-1 bg-white/60">
                    <img
                      src={img.src}
                      alt={img.alt || `${title} screenshot`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                  {img.alt && (
                    <p className="text-[11px] font-mono text-neutral-400 mt-2 text-center sm:text-left">
                      {img.alt}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Navigation between Projects */}
        {footerNav && (footerNav.left || footerNav.right) && (
          <div className="border-t border-neutral-300/60 pt-8 mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {footerNav.left ? (
              <Button
                href={footerNav.left.to}
                variant="primary"
                size="sm"
                className="gap-2 px-4 py-2.5 self-start"
              >
                <BiChevronLeft size={18} />
                <span>{footerNav.left.label}</span>
              </Button>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}

            {footerNav.right ? (
              <Button
                href={footerNav.right.to}
                variant="primary"
                size="sm"
                className="gap-2 px-4 py-2.5 self-end sm:ml-auto"
              >
                <span>{footerNav.right.label}</span>
                <BiChevronRight size={18} />
              </Button>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectLayout;
