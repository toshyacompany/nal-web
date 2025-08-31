import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const cards = [
    {
      title: "Industrial\nSupport",
      subtitle: "End-to-end support for oil, gas, and construction projects.",
      img: "/service1.png",
    },
    {
      title: "Equipment\nSupport",
      subtitle: "Reliable equipment for every industrial need.",
      img: "/service2.png",
    },
    {
      title: "Material\nSupport",
      subtitle: "Quality materials delivered on time.",
      img: "/service3.png",
    },
    {
      title: "Manpower\nSupport",
      subtitle: "Skilled and unskilled workforce for all sectors.",
      img: "/service4.png",
    },
  ];

  return (
    <section className="container px-6 py-16 mx-auto mobile:px-4 tablet:px-6">
      <div className="flex items-start justify-between mb-8 mobile:flex-col mobile:items-center mobile:gap-6 tablet:items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex flex-col gap-2">
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
              <span className="w-10 h-[2px] bg-orange-400 rounded" />
            </div>

            <span className="text-base font-semibold tracking-wide text-orange-400 uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl font-extrabold leading-tight text-[#131313]">
            Professional Services
          </h2>
          <p className="max-w-[44rem] mt-3 text-gray-600 text-[22px] font-afacad">
            We provide reliable manpower, equipment, and material support to
            empower industries and deliver projects safely, on time, and with
            quality.
          </p>
        </div>

        <div className="mobile:w-full mobile:flex mobile:justify-center">
          <button className="bg-[#ff9934] text-white font-semibold px-14 py-4 rounded shadow mobile:px-6 mobile:py-2 mobile:text-sm">
            ALL SERVICES
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 lap-sm:grid-cols-3 lg-desktop:grid-cols-4 font-afacad">
        {cards.map((c) => {
          const slug = c.title
            .split("\n")[0]
            .toLowerCase()
            .replace(/\s+/g, "-");
          return (
            <Link key={c.title} href={`/services/${slug}`} className="block">
              <div className="relative overflow-hidden rounded h-80 mobile:h-[220px] tablet:h-64 lap-sm:h-72">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 152, 0.4) 100%)",
                  }}
                />
                <div className="absolute text-white bottom-6 left-6">
                  <h3 className="text-3xl font-bold whitespace-pre-line mobile:text-2xl tablet:text-2xl font-afacad">
                    {c.title}
                  </h3>
                  <p className="max-w-xs mt-2 text-xl mobile:text-base">
                    {c.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
