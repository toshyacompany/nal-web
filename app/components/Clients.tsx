import React from "react";
import Image from "next/image";

const Clients = () => {
  // Replace these paths with real logo files under /public/clients/
  const logos = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
  ];

  return (
    <section className="container px-6 py-16 mx-auto mobile:px-4 tablet:px-6">
      <div className="max-w-full">
        <div className="flex items-center justify-between gap-6 mb-8 mobile:flex-col mobile:items-start mobile:gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
              </div>

              <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
                Success Projects
              </span>
            </div>
            <h2 className="text-5xl font-extrabold leading-tight text-[#131313] mobile:text-3x">
              Our Clients
            </h2>
          </div>

          <div className="mobile:w-full mobile:flex mobile:justify-center">
            <button className="inline-block px-12 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-300 rounded-md hover:bg-gray-50 mobile:px-4 mobile:py-2">
              Our Projects
            </button>
          </div>
        </div>

        {/* Carousel - autoplay infinite loop (no buttons) */}
        {/* Marquee on larger screens; stacked grid on mobile for accessibility */}
        <div className="overflow-hidden">
          <div
            className="items-center hidden mobile:grid mobile:grid-cols-2 mobile:gap-6 mobile:place-items-center tablet:flex marquee"
            style={{ gap: "3.5rem", alignItems: "center" }}
            aria-hidden={false}
          >
            {[0, 1].map((rep) => (
              <React.Fragment key={rep}>
                {logos.map((src, i) => (
                  <div key={rep + "-" + i} className="flex items-center">
                    <Image
                      src={src}
                      alt={`client-${i}`}
                      width={180}
                      height={64}
                      className="object-contain max-h-16 mobile:max-h-12"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Inline styles for marquee animation - pauses on hover */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 18s linear infinite;
            will-change: transform;
          }
          .marquee:hover { animation-play-state: paused; }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;
