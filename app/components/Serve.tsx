import React from "react";
import Image from "next/image";

const Serve = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden mobile:h-[360px] tablet:h-[440px]">
      {/* Background image */}
      <Image
        src="/serve.jpg"
        alt="business background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 bg-black/60" />
      {/* Diagonal blue stripe on right - matches the image exactly */}
      <div className="absolute top-0 right-0 h-[781.97px] w-[186px] bg-[#000098] transform origin-top-right rotate-[30deg] -translate-x-[120px] z-20 mobile:hidden" />
      {/* Content placed at the start of the second half */}{" "}
      <div className="relative z-30 grid items-center h-full max-w-6xl grid-cols-2 mx-auto mobile:grid-cols-1 mobile:px-4">
        <div className="mobile:hidden" />
        <div className="text-white mobile:mx-auto mobile:text-center">
          {" "}
          <h1 className="text-4xl font-bold leading-tight font-urbanist md:text-5xl lg:text-5xl mobile:text-2xl tablet:text-3xl">
            We Serving 30% Of <br />
            Global 600 <br />
            Companies
          </h1>
          <p className="max-w-xl mt-6 text-base font-normal text-gray-200 font-manrope mobile:text-sm">
            Aenean a felis consequat, varius orci ut, varius metus. Donec
            iaculis leo turpis, vitae sagittis massa luctus feugiat. Donec vel
            sodales dui.{" "}
          </p>{" "}
          <div className="flex items-center gap-6 mt-10 mobile:flex-col mobile:items-center font-urbanist">
            <div className="flex items-center gap-4">
              <div className="w-[70px] h-[70px] border border-[#FEDBD6] mobile:w-12 mobile:h-12" />
              <div className="mobile:text-center">
                <div className="text-sm text-white/40">Call Us Now</div>
                <div className="text-[22px] font-bold text-white/40 mobile:text-lg">
                  +966 013 123 3443
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[70px] h-[70px]  border border-[#FEDBD6] mobile:w-12 mobile:h-12" />
              <div className="mobile:text-center">
                <div className="text-sm text-white/40">Email Drop Us</div>
                <div className="text-[22px] font-bold text-white/40 mobile:text-lg">
                  info@nalarabia.com
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Serve;
