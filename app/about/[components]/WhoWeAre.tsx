import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="py-16 mobile:py-10">
      <div className="container px-6 mx-auto mobile:px-4">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-[#FF9934] rounded" />
                <span className="w-10 h-[2px] bg-[#FF9934] rounded" />
              </div>
              <div className="text-sm font-semibold text-orange-400">
                WHO WE ARE
              </div>
            </div>

            <h3 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl mobile:text-2xl">
              Your Trusted Partner In Industrial Growth
            </h3>

            <p className="mb-8 text-gray-600 mobile:text-sm">
              Nal Arabia Contracting Establishment Is Committed To Delivering
              Skilled Manpower, Professional Engineers, And Reliable Support
              Services. With A Reputation Built On Quality And Transparency, We
              Help Clients Complete Projects On Time And Meet Global Standards.
            </p>

            <div className="flex items-center justify-between gap-8 mb-8 mobile:flex-col mobile:items-start mobile:gap-4">
              <div className="flex items-center mobile:flex-col mobile:items-start">
                <div className="text-4xl font-extrabold text-[#131313] ">
                  200+
                </div>
                <div className="text-base font-semibold text-gray-600 mobile:mt-2">
                  Project Completed Last Years
                </div>
              </div>

              <div className="flex items-center mobile:flex-col mobile:items-start">
                <div className="text-4xl font-extrabold text-[#131313]">
                  50+
                </div>
                <div className="text-base font-semibold text-gray-600 mobile:mt-2">
                  Satisfied Clients Across The Kingdom
                </div>
              </div>
            </div>

            <button className="px-12 py-3 border rounded-md text-[#131313]">
              OUR PROJECTS
            </button>
          </div>

          {/* Right image */}
          <div className="mobile:order-first">
            <Image
              src="/whoweare.png"
              alt="team handshake"
              width={636}
              height={520.45}
              className="object-cover w-full h-auto rounded-sm mobile:max-h-[260px] tablet:max-h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
