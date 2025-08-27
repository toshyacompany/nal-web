import React from "react";
import Image from "next/image";

const OurCompany = () => {
  return (
    <section className="py-16">
      <div className="container px-6 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: images with overlay stat */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image
                  src="/compnay1.png"
                  alt="team"
                  width={350}
                  height={421}
                  className="object-cover w-full h-[421px] rounded-sm"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-4">
                <Image
                  src="/compnay2.png"
                  alt="site"
                  width={300}
                  height={330}
                  className="object-cover w-full h-[330px] rounded-sm"
                />
              </div>
            </div>

            {/* orange stat badge */}
            <div className="absolute transform -translate-y-1/2 left-56 -bottom-32">
              <div className="w-40 h-40 bg-[#FF9934] flex flex-col items-center justify-center text-white shadow-lg">
                <div className="text-3xl font-bold">180+</div>
                <div className="mt-1 text-lg font-medium text-center">
                  Major Projects Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
              </div>
              <div className="text-sm font-semibold text-orange-400">
                OUR COMPANY
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
              Find Out More About Our Industrial Support
            </h2>

            <p className="mb-8 text-gray-600">
              From Manpower Supply To Equipment And Materials, Nal Arabia
              Ensures Reliability, Safety, And Efficiency For Every Project. We
              Support Industries Including Oil &amp; Gas, Petrochemicals,
              Construction, And Infrastructure.
            </p>

            <button className="px-12 py-3 bg-[#FF9934] text-white rounded-md font-semibold">
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
