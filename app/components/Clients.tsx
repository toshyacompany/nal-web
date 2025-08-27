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
    <section className="container px-6 py-16 mx-auto">
      <div className="max-w-full">
        <div className="flex items-center justify-between gap-6 mb-8">
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
            <h2 className="text-5xl font-extrabold leading-tight">
              Our Clients
            </h2>
          </div>

          <div>
            <button className="inline-block px-12 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-300 rounded-md hover:bg-gray-50">
              Our Projects
            </button>
          </div>
        </div>

        {/* Carousel - autoplay infinite loop (no buttons) */}
        <div className="overflow-hidden">
          <div
            className="flex items-center marquee"
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
                      width={220}
                      height={80}
                      className="object-contain max-h-20"
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
