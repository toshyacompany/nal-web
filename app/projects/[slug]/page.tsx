import React from "react";
import ProjectSingleContent from "./ProjectSingleContent";
import StayConnected from "@/app/components/StayConnected";
import ProjectSingleHero from "../[components]/ProjectSingleHero";

const Page = () => {
  return (
    <>
      <ProjectSingleHero />
      <ProjectSingleContent />
      <div className="max-w-6xl mx-auto">
        <StayConnected />
      </div>
    </>
  );
};

export default Page;
