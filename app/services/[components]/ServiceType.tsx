import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceType = () => {
  const cards = [
    {
      title: "Industrial\nSupport",
      subtitle: "End-to-end support for oil, gas, and construction projects.",
      img: "/service1.png",
      slug: "industrial-support",
    },
    {
      title: "Equipment\nSupport",
      subtitle: "Reliable equipment for every industrial need.",
      img: "/service2.png",
      slug: "equipment-support",
    },
    {
      title: "Material\nSupport",
      subtitle: "Quality materials delivered on time.",
      img: "/service3.png",
      slug: "material-support",
    },
    {
      title: "Manpower\nSupport",
      subtitle: "Skilled and unskilled workforce for all sectors.",
      img: "/service4.png",
      slug: "manpower-support",
    },
  ];
  return (
    <div className="py-10 px-14 md:px-20">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={`/services/${c.slug}`}
            className="block relative overflow-hidden h-[549px] w-[315px]"
          >
            <Image src={c.img} alt={c.title} fill className="object-cover" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 152, 0.4) 100%)",
              }}
            />
            <div className="absolute text-white bottom-6 left-6">
              <h3 className="text-2xl font-semibold whitespace-pre-line">
                {c.title}
              </h3>
              <p className="max-w-[16rem] mt-2 text-base font-semibold">
                {c.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceType;
