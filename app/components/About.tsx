/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="container px-6 py-16 mx-auto">
      <div className="flex items-center justify-between w-full gap-12 mobile:flex-col mobile:items-start mobile:gap-6 tablet:gap-10 lap-sm:gap-12">
        {/* Left: team image + stats */}
        <div className="flex items-center w-1/2 gap-5 mobile:w-full mobile:flex-col mobile:gap-4 tablet:gap-5">
          <div>
            <div className="h-[400px] overflow-hidden mobile:h-[220px] tablet:h-[320px]">
              <Image
                src="/about1.png"
                alt="Team"
                width={280}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex gap-6 mt-3 mobile:flex-col mobile:gap-3">
              <div className="flex-1 px-4 py-6 text-center text-white bg-black">
                <div className="text-3xl font-bold">150+</div>
                <div className="mt-1 text-sm">Expert Team Members</div>
              </div>
              <div className="flex-1 px-4 py-6 text-center text-white bg-black">
                <div className="text-3xl font-bold">200+</div>
                <div className="mt-1 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Middle: large full-height industry image */}

          <div className="h-[540px] overflow-hidden mobile:h-[260px] tablet:h-[380px]">
            <Image
              src="/about2.png"
              alt="Industry"
              width={350}
              height={540}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: About content */}
        <div className="w-1/2 mobile:w-full mobile:mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-2">
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
            </div>

            <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase font-urbanist">
              ABOUT COMPANY
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-black font-urbanist tablet:text-5xl mobile:text-3xl">
            Our Skilled Team <br /> Builds Your Success.
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-600 font-manrope mobile:text-sm">
            At Nal Arabia, We Provide End-To-End Industrial Support—Supplying
            Manpower, Equipment, And Materials That Keep Projects Running
            Smoothly. From Unskilled Labor To Professional Engineers, Our Team
            Is Committed To Delivering Quality And Efficiency Across All
            Sectors.
          </p>

          {/* Button + GM */}
          <div className="flex items-center justify-between gap-6 mb-8 mobile:flex-col mobile:items-start mobile:gap-4">
            <button className="bg-[#ff9934] font-urbanist hover:bg-orange-600 text-white font-semibold rounded-md px-24 py-4 text-lg shadow-md transition-colors mobile:px-6 mobile:py-3 mobile:text-base">
              KNOW MORE
            </button>

            <div className="flex items-center gap-4 mobile:mt-3">
              <div className="overflow-hidden border border-gray-200 rounded-full w-14 h-14 mobile:w-12 mobile:h-12">
                <Image
                  src="/avatar.jpg"
                  alt="Ali Mubarak Al Fateeh"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Ali Mubarak Al Fateeh
                </div>
                <div className="text-sm text-gray-500">General Manager</div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 border-2 border-orange-400"></div>
              <span className="text-gray-700">
                200+ Projects Completed Successfully
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 border-2 border-orange-400"></div>
              <span className="text-gray-700">
                Trusted By Leading Clients In Oil, Gas &amp; Construction
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 border-2 border-orange-400"></div>
              <span className="text-gray-700">
                Skilled Workforce Across All Levels
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
