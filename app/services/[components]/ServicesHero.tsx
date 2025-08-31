import React from "react";

const ServicesHero = () => {
  return (
    <section className="w-full">
      <div
        className="relative w-full h-56 md:h-80 lg:h-[420px] bg-center bg-cover"
        style={{ backgroundImage: "url('/aboutHero.png')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container relative z-10 flex flex-col justify-center h-full px-6 mx-auto">
          <nav className="mb-3 text-sm text-white/80">
            <span>Home</span>
            <span className="mx-3">|</span>
            <span>Services</span>
          </nav>

          <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Our Services
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
