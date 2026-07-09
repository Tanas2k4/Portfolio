import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import { useApp } from "../context/AppContext";
import zeinTeamPlannerImg from "../assets/zein-teamplanner.png";

const ZeinTeamPlanner = () => {
  const { t } = useApp();

  return (
    <ProjectLayout
      title="Zein Team Planner"
      subtitle={t.zeinTeamPlannerSubtitle}
      description={t.zeinTeamPlannerDesc}
      technologies={["ASP.Net Core", "Entity Framework", "Bootstrap 5", "SQL Server", "HTML", "SignalR"]}
      images={[{ src: zeinTeamPlannerImg, alt: "Zein Team Planner Interface" }]}
      features={[
        t.zeinTeamPlannerFeature1,
        t.zeinTeamPlannerFeature2,
        t.zeinTeamPlannerFeature3,
        t.zeinTeamPlannerFeature4,
        t.zeinTeamPlannerFeature5,
        t.zeinTeamPlannerFeature6,
        t.zeinTeamPlannerFeature7,
      ]}
      summaryText={t.zeinTeamPlannerSummary}
      demoLink="#"
      sourceLink="https://github.com/Tanas2k4/ZEIN_TeamPlanner"
      footerNav={{
        right: { to: "/home/zein-ide", label: "Zein IDE" }
      }}
    />
  );
};

export default ZeinTeamPlanner;