import React from "react";

const FreeConsultation = () => {
  return (
    <section className="w-full">
      <div
        className="relative w-full h-40 bg-center bg-cover md:h-48 lg:h-72"
        style={{ backgroundImage: "url('/free.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12 lg:px-24">
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Reliable Manpower.
            <br />
            Trusted Industrial Support.
          </h2>

          <button className="hidden sm:inline-block px-12 py-3 bg-[#FF9934] text-white rounded-md text-base font-bold">
            GET FREE CONSULTATIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
