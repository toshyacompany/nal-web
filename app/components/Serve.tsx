import React from "react";
import Image from "next/image";

const Serve = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden ">
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
      <div className="absolute top-0 right-0 h-[781.97px] w-[186px] bg-[#000098] transform origin-top-right rotate-[30deg] -translate-x-[120px] z-20" />
      {/* Content placed at the start of the second half */}{" "}
      <div className="relative z-30 grid items-center h-full max-w-6xl grid-cols-2 mx-auto">
        <div />{" "}
        <div className="text-white ">
          {" "}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
            We Serving 30% Of <br />
            Global 600 <br />
            Companies{" "}
          </h1>{" "}
          <p className="max-w-xl mt-6 text-base font-normal text-gray-200">
            Aenean a felis consequat, varius orci ut, varius metus. Donec
            iaculis leo turpis, vitae sagittis massa luctus feugiat. Donec vel
            sodales dui.{" "}
          </p>{" "}
          <div className="flex items-center gap-0 mt-10">
            {" "}
            <div className="flex items-center gap-4">
              <div className="w-[70px] h-[70px] border border-[#FEDBD6]" />{" "}
              <div>
                <div className="text-sm text-white/40">Call Us Now</div>{" "}
                <div className="text-[22px] font-bold text-white/40">
                  +966 013 123 3443
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4">
              <div className="w-[70px] h-[70px]  border border-[#FEDBD6]" />{" "}
              <div>
                <div className="text-sm text-white/40">Email Drop Us</div>{" "}
                <div className="text-[22px] font-bold text-white/40">
                  info@nalarabia.com
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Serve;
