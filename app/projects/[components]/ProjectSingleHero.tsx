import React from "react";

const ProjectSingleHero = () => {
  return (
    <section className="w-full">
      <div
        className="relative w-full h-56 md:h-80 lg:h-[420px] bg-center bg-cover mobile:h-40 tablet:h-56"
        style={{ backgroundImage: "url('/aboutHero.png')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container relative z-10 flex flex-col justify-center h-full px-6 mx-auto mobile:px-4">
          <nav className="mb-3 text-sm text-white/80 mobile:text-xs">
            <span>Home</span>
            <span className="mx-3">|</span>
            <span>Projects</span>
            <span className="mx-3">|</span>
            <span>Project 1</span>
          </nav>

          <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-7xl mobile:text-2xl tablet:text-3xl">
            Industrial Manpower & Support for NEOM Green Hydrogen Project
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectSingleHero;
