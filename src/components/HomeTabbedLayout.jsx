import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PiBuildingsFill } from "react-icons/pi";

import Intro from "./Intro";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

import avatarIntro from "../assets/avt.jpg";
import portfolioBanner from "../assets/background.jpg";

function HomeTabbedLayout({ activeTab, setActiveTab }) {
  const { language, toggleLanguage, t } = useApp();
  const [parent] = useAutoAnimate();
  const [navParent] = useAutoAnimate();
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 1800); // 6 blinks of 0.3s = 1.8s
    };
    window.addEventListener("trigger-password-hint", handleBlink);
    return () => window.removeEventListener("trigger-password-hint", handleBlink);
  }, []);

  const navLinks = [
    { key: "home", label: t.home },
    { key: "blog", label: t.blog },
    { key: "contact", label: t.contact },
  ];

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    window.history.pushState(null, "", `#${tabKey}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col transition-all duration-300">
      {/* Full-width Banner Image spanning 100% of viewport */}
      <div className="w-full h-52 relative overflow-hidden">
        <img
          src={portfolioBanner}
          alt="Banner"
          className="w-full h-full object-cover select-none"
        />
        {/* Floating Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-none bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white hover:bg-white/35 transition-all cursor-pointer font-mono"
        >
          {language === "en" ? "VI" : "EN"}
        </button>
      </div>

      {/* Centered Content Wrapper (Cozy centering like the image) */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex-1 flex flex-col">
        {/* Header section with Avatar, Name, Title, and Navigation Tabs */}
        <div className="w-full relative pb-6 border-b border-neutral-100 bg-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pt-2">
            <div>
              <div className="flex items-end gap-4">
                <div className="-mt-14 relative z-10 flex-shrink-0 flex flex-col items-center gap-1">
                  <img
                    src={avatarIntro}
                    alt="Avatar Tran Tan"
                    className="w-28 h-28 rounded-none object-cover border border-gray-500 bg-white select-none"
                  />
                </div>
                <div className="b-1">
                  <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {t.myname}
                  </h2>
                  <p className="text-sm text-neutral-500 font-medium tracking-wide font-mono mt-0.5">
                    {language === "en" ? "Software Engineer" : "Kỹ sư Phần mềm"}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <PiBuildingsFill className="text-gray-400" />
                    <a
                      href="https://www.github.com/warmdrobe"
                      target="_blank"
                      rel="noreferrer"
                      className={`text-[13px] text-emerald-600 font-medium transition-colors ${isBlinking ? "animate-blink-hint" : ""}`}
                    >
                      @Warmdrobe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Tabs with Underline Active Style */}
            <nav
              className="flex flex-wrap gap-2 no-scrollbar pb-1"
              ref={navParent}
            >
              {navLinks.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-2 mx-2  py-1 text-sm font-light tracking-wider transition-all cursor-pointer select-none relative ${
                    activeTab === tab.key
                      ? "text-black"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  <span className="relative z-10 mb-1.5 block">
                    {tab.label}
                  </span>
                  {activeTab === tab.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Active Component Render Area */}
        <div className="py-3 flex-1 bg-white" ref={parent}>
          {activeTab === "home" && (
            <div className="space-y-2">
              <Intro setActiveTab={setActiveTab} />
            </div>
          )}
          {activeTab === "projects" && <Projects />}
          {activeTab === "blog" && <Blog />}
          {activeTab === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default HomeTabbedLayout;
