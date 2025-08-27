import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[75vh] bg-[url('/herobg.png')] bg-cover bg-center bg-fixed flex items-center">
      {/* stronger gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/50 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl text-white pl-2 md:pl-6 lg:pl-12">
          <p className="text-xl uppercase font-semibold tracking-wider text-white mb-4">
            Welcome to NAL Arabia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-bold leading-tight mb-6 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] text-white">
            Powering Industry with
            <br />
            People, Equipment & Trust.
          </h1>
          <p className="text-base md:text-xl font-normal text-white max-w-4xl mb-10">
            Nal Arabia Contracting Establishment delivers manpower, equipment,
            and material support to major industrial, oil & gas, and
            construction projects across Saudi Arabia. We ensure safety,
            reliability, and timely execution for every client.
          </p>
          <button className="inline-block bg-[#ff9934] hover:bg-orange-600 text-white font-semibold py-3 px-6  shadow-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
