import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import { useApp } from "../context/AppContext";
import hutechIdeImg from "../assets/hutech-ide.png";
import hutechIdeContr from "../assets/hutechIDEcontr.png";

const HutechIDE = () => {
  const { t } = useApp();

  return (
    <ProjectLayout
      title="HUTECH IDE"
      subtitle={t.hutechIDESubtitle}
      description={t.hutechIDEDesc}
      technologies={["TypeScript", "TailwindCSS", "JavaScript", "Node.js", "Electron", "Eclipse Theia"]}
      images={[
        { src: hutechIdeImg, alt: "HUTECH IDE Interface" },
        { src: hutechIdeContr, alt: "HUTECH IDE Controller" }
      ]}
      features={[
        t.zeinIDEFeature1,
        t.zeinIDEFeature2,
        t.zeinIDEFeature3,
        t.zeinIDEFeature4,
        t.zeinIDEFeature5
      ]}
      summaryText={t.hutechIDESummary}
      footerNav={{
        left: { to: "/home/zein-ide", label: "Zein IDE" }
      }}
    />
  );
};

export default HutechIDE;