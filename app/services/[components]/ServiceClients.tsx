import Image from "next/image";
import React from "react";

const ServiceClients = () => {
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
        <div className="flex items-center justify-center gap-6 mb-8">
          <h2 className="text-5xl font-bold leading-tight text-[#131313]">
            Our Clients
          </h2>
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

export default ServiceClients;
