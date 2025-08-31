import React from "react";
import Image from "next/image";

const members = [
  {
    name: "Ali Mubarak Al Fateeh",
    role: "General Manager",
    img: "/team1.png",
  },
  { name: "Abdelrahman Sherif", role: "Executive Manager", img: "/team2.png" },
  {
    name: "Md Mozammil Khan",
    role: "HR & Marketing Manager",
    img: "/team3.png",
  },
  { name: "Abu Hashim Ansari", role: "Admin Manager", img: "/team4.png" },
];

const Team = () => {
  return (
    <section className="py-16">
      <div className="container px-6 mx-auto text-center">
        <h3 className="mb-2 text-2xl font-semibold text-[#0D0E1D] md:text-3xl lg:text-[56px] leading-[63.84px]">
          Meet the team behind
        </h3>
        <h2 className="mb-12 text-3xl font-semibold tracking-wider md:text-4xl lg:text-[56px] leading-[63.84px] text-[#0D0E1D]">
          NAL ARABIA
        </h2>

        <div className="grid items-start grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-left">
              <div className="mb-6">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={360}
                  height={360}
                  className="object-cover w-full h-[360px] rounded-sm"
                />
              </div>
              <div className="text-[26px] font-semibold text-[#0D0E1D]">
                {m.name}
              </div>
              <div className="text-xl font-normal text-[#0D0E1D]">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
