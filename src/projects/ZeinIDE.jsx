import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import { useApp } from "../context/AppContext";
import zeinIdeImg from "../assets/zein-ide.png";
import zeidideai from "../assets/zeinideai.jpg";

const ZeinIDE = () => {
  const { t } = useApp();

  return (
    <ProjectLayout
      title="Zein IDE"
      subtitle={t.zeinIDESubtitle}
      description={t.zeinIDEDesc}
      technologies={["TypeScript", "TailwindCSS", "JavaScript", "Node.js", "Electron", "Eclipse Theia"]}
      images={[
        { src: zeinIdeImg, alt: "Zein IDE Interface" },
        { src: zeidideai, alt: "Zein IDE AI" }
      ]}
      features={[
        t.zeinIDEFeature1,
        t.zeinIDEFeature2,
        t.zeinIDEFeature3,
        t.zeinIDEFeature4,
        t.zeinIDEFeature5,
        t.zeinIDEFeature6,
      ]}
      summaryText={t.zeinIDESummary}
      demoLink="https://www.youtube.com/watch?v=SQ1TVDpBqGw&t=5s"
      footerNav={{
        left: { to: "/home/zein-teamplanner", label: "Zein Team Planner" },
        right: { to: "/home/hutech-ide", label: "Hutech IDE" }
      }}
    />
  );
};

export default ZeinIDE;