import React from "react";
import { Bell } from "lucide-react";

const StayConnected = () => {
  return (
    <section className="py-12">
      <div className="container px-6 mx-auto">
        <div
          className="relative overflow-hidden bg-center bg-cover rounded-sm"
          style={{ backgroundImage: "url('/free.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-24 py-16 mobile:px-6 mobile:py-8 tablet:px-12">
            <div className="flex items-center justify-between mobile:flex-col mobile:items-center mobile:gap-6">
              {/* Left: title + small line */}
              <div className="text-white">
                <h3 className="mb-2 text-3xl font-extrabold md:text-4xl mobile:text-2xl text-center-mobile">
                  Stay Connected
                </h3>
                <div className="flex items-center gap-3 text-sm text-white/90 mobile:justify-center">
                  <span>Get Notified</span>
                  <Bell className="w-4 h-4" />
                </div>
              </div>

              {/* Right: pill input + button */}
              <div className="flex justify-end flex-1 mobile:w-full mobile:mt-2">
                <div className="flex items-center w-full max-w-xl overflow-hidden bg-white rounded-full shadow-sm mobile:max-w-full">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-6 py-5 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none mobile:px-4 mobile:py-3 mobile:text-sm"
                  />
                  <button className="px-6 py-5 bg-[#FF9934] text-white font-semibold rounded-full mobile:px-4 mobile:py-3 mobile:text-xs">
                    SUBSCRIBE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
