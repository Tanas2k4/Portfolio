import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useEffect, useState } from "react";
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
    <header className="sticky top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
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
  const [activeTab, setActiveTab] = useState("home");
  const { setIsUnlocked } = useApp();

  // Sync tab state from URL hash on load/hashchange
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (["home", "projects", "blog", "contact"].includes(hash)) {
      setActiveTab(hash);
    } else if (hash === "about" || hash === "aboutme") {
      setActiveTab("home");
    } else if (location.pathname === "/" || location.pathname === "/home") {
      if (!hash) {
        setActiveTab("home");
      }
    }
  }, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsUnlocked(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [setIsUnlocked]);

  const isSubPage = location.pathname !== "/" && location.pathname !== "/home";

  return (
    <>
      <ScrollToTop />
      {/* Dynamic Background Radial Gradients */}
      <div className="fixed -z-10 min-h-screen w-full transition-colors duration-300 bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

      {/* Subpage Sticky Header */}
      {isSubPage && <SubPageHeader />}

      {/* Main Content Area */}
      <div className="w-full min-h-screen flex flex-col justify-between transition-all duration-300">
        <Routes>
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