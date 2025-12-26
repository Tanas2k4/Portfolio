import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ZeinTeamPlanner from "./pages/projects/ZeinTeamPlanner";
import ZeinIDE from "./pages/projects/ZeinIDE";
import HutechIDE from "./pages/projects/HutechIDE";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import SpringSecurityBasics from "./pages/blog/SpringSecurityBasics";
import WhyDotnetCoreSpringBoot from "./pages/blog/WhyDotnetCoreSpringBoot";
import DotnetRestApi from "./pages/blog/DotnetRestApi";
import RunnableVsThread from "./pages/blog/RunnableVsThread";
import JsAsyncAwait from "./pages/blog/JsAsyncAwait";
import JsClosures from "./pages/blog/JsClosures";
import DtoMappingSpring from "./pages/blog/DtoMappingSpring";
import JwtSpringBoot from "./pages/blog/JwtSpringBoot";
import RubyRails2025 from "./pages/blog/RubyRails2025";
import JavaDeadlock from "./pages/blog/JavaDeadlock";

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
    <>
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
            <Blog />
            <Contact />
          </main>
        } />
        <Route path="/home" element={
          <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
            <Intro />
            <Tech />
            <Projects />
            <Blog />
            <Contact />           
          </main>
        } />
        <Route path="/home/zein-teamplanner" element={<ZeinTeamPlanner />} />
        <Route path="/home/zein-ide" element={<ZeinIDE />} />
        <Route path="/home/hutech-ide" element={<HutechIDE />} />
        {/* blog pages */}
        <Route path="/blog/WhyDotnetCoreSpringBoot" element={<WhyDotnetCoreSpringBoot />} />
        <Route path="/blog/SpringSecurityBasics" element={<SpringSecurityBasics />} />
        <Route path="/blog/DotnetRestApi" element={<DotnetRestApi />} />
        <Route path="/blog/JavaDeadlock" element={<JavaDeadlock />} />
        <Route path="/blog/RunnableVsThread" element={<RunnableVsThread />} />
        <Route path="/blog/JsAsyncAwait" element={<JsAsyncAwait />} />
        <Route path="/blog/JsClosures" element={<JsClosures />} />
        <Route path="/blog/DtoMappingSpring" element={<DtoMappingSpring />} />
        <Route path="/blog/JwtSpringBoot" element={<JwtSpringBoot />} />
        <Route path="/blog/RubyRails2025" element={<RubyRails2025 />} />
      </Routes>
      <Footer /> 
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router basename={import.meta.env.DEV ? "/" : "/Portfolio"}>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;