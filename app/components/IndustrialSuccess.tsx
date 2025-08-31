import React from "react";
import Image from "next/image";

const IndustrialSuccess = () => {
  return (
    <section className="container px-6 py-16 mx-auto mobile:px-4 tablet:px-6">
      <div className="flex items-center justify-between w-full gap-10 mobile:flex-col mobile:items-start mobile:gap-6">
        {/* Left content */}
        <div className="w-1/2 mobile:w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
            </div>

            <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
              Industrial Success
            </span>
          </div>

          <h2 className="text-[56px] md:text-5xl leading-tight font-extrabold text-black max-w-3xl mobile:text-3xl tablet:text-4xl">
            Empowering Projects
            <br />
            With Skilled Workforce
          </h2>

          <p className="max-w-2xl mt-6 text-base text-gray-600 mobile:text-sm font-manrope">
            Nal Arabia provides professional manpower solutions across oil, gas,
            petrochemical, and construction sectors. From unskilled labor to
            engineers and supervisors, our workforce ensures safety, efficiency,
            and timely project completion.
          </p>

          <div className="mt-6 text-base font-bold ">
            <h3 className="mb-3 ">Core Strengths:</h3>
            <ul className="space-y-2 text-gray-800 font-urbanist ">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1 bg-black rounded-full" />
                <span>Skilled &amp; Unskilled Manpower</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1 bg-black rounded-full" />
                <span>Professional Engineers &amp; Supervisors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1 bg-black rounded-full" />
                <span>Quick Workforce Mobilization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1 bg-black rounded-full" />
                <span>Safety-Trained Staff</span>
              </li>
            </ul>

            <button className="inline-block px-8 py-3 text-[#131313] mt-8 text-sm font-semibold tracking-wide uppercase border border-gray-300 rounded-md hover:bg-gray-50 mobile:px-4 mobile:py-2">
              Get Support
            </button>
          </div>
        </div>

        {/* Right images */}
        <div className="flex items-start justify-end w-1/2 mobile:w-full mobile:justify-center mobile:gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/sucess1.png"
              alt="site workers reviewing plans"
              width={293}
              height={360}
              className="w-[293px] h-[360px] object-cover rounded shadow-lg mobile:w-[160px] mobile:h-[200px] tablet:w-[220px] tablet:h-[300px]"
            />
          </div>

          <div className="flex-shrink-0 ml-6 translate-y-8 md:ml-7 md:translate-y-12 mobile:ml-0 mobile:translate-y-0">
            <Image
              src="/success2.png"
              alt="industrial plant and supervisors"
              width={313}
              height={360}
              className="w-[313px] h-[360px] object-cover rounded shadow-lg mobile:w-[160px] mobile:h-[200px] tablet:w-[220px] tablet:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSuccess;
