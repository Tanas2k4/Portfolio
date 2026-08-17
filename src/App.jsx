import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { AppProvider, useApp } from "./context/AppContext";
import HomeTabbedLayout from "./components/HomeTabbedLayout";
import ZeinTeamPlanner from "./projects/ZeinTeamPlanner";
import ZeinIDE from "./projects/ZeinIDE";
import HutechIDE from "./projects/HutechIDE";
import { BiArrowBack } from "react-icons/bi";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SubPageHeader() {
  const { language, toggleLanguage } = useApp();
  return (
    <header className="sticky top-0 left-0 right-0 h-16 bg-[#f6f4ee]/90 backdrop-blur-md z-50 border-b border-neutral-300/60 transition-all duration-300">
      <div className="max-w-5xl mx-auto w-full h-full flex items-center justify-between px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition-colors"
        >
          <BiArrowBack size={18} />
          <span>
            {language === "en" ? "Back to Portfolio" : "Quay lại Portfolio"}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-4 w-px bg-neutral-200" />
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold font-mono border border-neutral-350 px-2.5 py-1 rounded-none text-neutral-700 hover:border-black cursor-pointer"
          >
            {language === "en" ? "VI" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}

function AppContent() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [activeTab, setActiveTab] = useState("home");
  const curtainRef = useRef(null);
  const isFirstRender = useRef(true);

  // Sync tab state from URL hash on load/hashchange based on displayLocation
  useEffect(() => {
    const hash = displayLocation.hash.replace("#", "");
    if (["home", "projects", "blog", "contact"].includes(hash)) {
      setActiveTab(hash);
    } else if (hash === "about" || hash === "aboutme") {
      setActiveTab("home");
    } else if (displayLocation.pathname === "/" || displayLocation.pathname === "/home") {
      if (!hash) {
        setActiveTab("home");
      }
    }
  }, [displayLocation]);

  const getRouteIndex = (path) => {
    if (path === "/" || path === "/home") return 0;
    if (path.includes("zein-teamplanner")) return 1;
    if (path.includes("zein-ide")) return 2;
    if (path.includes("hutech-ide")) return 3;
    return 1;
  };

  // Synchronized GSAP Black Screen Curtain Wipe: changes DOM only when screen is 100% covered
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      const prevIdx = getRouteIndex(displayLocation.pathname);
      const currIdx = getRouteIndex(location.pathname);
      // Direction: 1 = forward (wipe in from right), -1 = backward (wipe in from left)
      const direction = currIdx >= prevIdx ? 1 : -1;

      if (curtainRef.current) {
        gsap.killTweensOf(curtainRef.current);
        const tl = gsap.timeline();

        // Step 1: Black curtain slides in and fully covers the old page
        tl.fromTo(
          curtainRef.current,
          {
            x: direction === 1 ? "100%" : "-100%",
            display: "block",
          },
          {
            x: "0%",
            duration: 0.32,
            ease: "power2.inOut",
            onComplete: () => {
              // Switch the rendered page and reset scroll ONLY when viewport is 100% black
              setDisplayLocation(location);
              window.scrollTo(0, 0);
            },
          }
        )
        // Step 2: Black curtain sweeps away to reveal the new page smoothly
        .to(curtainRef.current, {
          x: direction === 1 ? "-100%" : "100%",
          duration: 0.32,
          ease: "power2.inOut",
          delay: 0.04,
          onComplete: () => {
            gsap.set(curtainRef.current, { display: "none" });
          },
        });
      } else {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
      }
    }
  }, [location, displayLocation.pathname]);

  const isSubPage = displayLocation.pathname !== "/" && displayLocation.pathname !== "/home";

  return (
    <>
      <ScrollToTop />
      {/* Dynamic Background Radial Gradients */}
      <div className="fixed -z-10 min-h-screen w-full transition-colors duration-300 bg-[#f6f4ee] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(246,244,238,0))]"></div>

      {/* Fullscreen Black Curtain Overlay for GSAP Page Transition */}
      <div
        ref={curtainRef}
        className="fixed inset-0 bg-black z-[99999] pointer-events-none hidden"
      />

      {/* Subpage Sticky Header */}
      {isSubPage && <SubPageHeader />}

      {/* Main Content Area */}
      <div className="w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
        <div className="w-full flex-1 flex flex-col">
          <Routes location={displayLocation}>
            <Route
              path="/"
              element={
                <HomeTabbedLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              }
            />
            <Route
              path="/home"
              element={
                <HomeTabbedLayout
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              }
            />

            {/* Projects Detail Pages */}
            <Route path="/home/zein-teamplanner" element={<ZeinTeamPlanner />} />
            <Route path="/home/zein-ide" element={<ZeinIDE />} />
            <Route path="/home/hutech-ide" element={<HutechIDE />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;