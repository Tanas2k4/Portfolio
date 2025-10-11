import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ZeinTeamPlanner from "./pages/ZeinTeamPlanner";
import ZeinIDE from "./pages/ZeinIDE";
import HutechIDE from "./pages/HutechIDE";
import Footer from "./components/Footer";
import { AppProvider, useApp } from "./context/AppContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { theme } = useApp();

  return (
    <Router>
      <ScrollToTop />
      <div className={`fixed -z-10 min-h-screen w-full ${
        theme === 'light' 
          ? 'bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]'
          : 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
      }`}></div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
            <Intro />
            <Tech />
            <Projects />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/home" element={
          <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
            <Intro />
            <Tech />
            <Projects />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/home/zein-teamplanner" element={<ZeinTeamPlanner />} />
        <Route path="/home/zein-ide" element={<ZeinIDE />} />
        <Route path="/home/hutech-ide" element={<HutechIDE />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;