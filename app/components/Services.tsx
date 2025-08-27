import Image from "next/image";

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
    <section className="container px-6 py-16 mx-auto">
      <div className="flex items-start justify-between mb-8">
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
          <h2 className="text-5xl font-extrabold leading-tight">
            Professional Services
          </h2>
          <p className="max-w-[44rem] mt-3 text-gray-600 text-[22px]">
            We provide reliable manpower, equipment, and material support to
            empower industries and deliver projects safely, on time, and with
            quality.
          </p>
        </div>

        <div>
          <button className="bg-[#ff9934] text-white font-semibold px-14 py-4 rounded shadow">
            ALL SERVICES
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="relative overflow-hidden rounded h-80">
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
              <h3 className="text-3xl font-bold whitespace-pre-line">
                {c.title}
              </h3>
              <p className="max-w-xs mt-2 text-xl">{c.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
