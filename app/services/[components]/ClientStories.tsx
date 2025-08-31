/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialCard: React.FC<{
  avatar: string;
  name: string;
  role: string;
  text: string;
}> = ({ avatar, name, role, text }) => (
  <article className="p-8 border border-gray-200">
    <div className="flex items-center gap-4 mb-6">
      <img
        src={avatar}
        alt={name}
        className="object-cover rounded-full w-14 h-14"
      />
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>

    <p className="leading-relaxed text-gray-700">{text}</p>
  </article>
);

const ClientStories: React.FC = () => {
  const items = [
    {
      avatar: "/avatar.jpg",
      name: "Sara Albert",
      role: "Web Designer",
      text: "Aenean A Felis Consequat, Varius Orci Ut, Varius Metus. Donec laculis Leo Turpis, Vitae Sagittis Massa Luctus Feugiat.",
    },
    {
      avatar: "/avatar.jpg",
      name: "James Millard",
      role: "Ui/Ux Designer",
      text: "Aenean A Felis Consequat, Varius Orci Ut, Varius Metus. Donec laculis Leo Turpis, Vitae Sagittis Massa Luctus Feugiat.",
    },
    {
      avatar: "/avatar.jpg",
      name: "Mariah Carey",
      role: "Customizer",
      text: "Aenean A Felis Consequat, Varius Orci Ut, Varius Metus. Donec laculis Leo Turpis, Vitae Sagittis Massa Luctus Feugiat.",
    },
    {
      avatar: "/avatar.jpg",
      name: "Richerd William",
      role: "Developer",
      text: "Aenean A Felis Consequat, Varius Orci Ut, Varius Metus. Donec laculis Leo Turpis, Vitae Sagittis Massa Luctus Feugiat.",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
              </div>

              <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
                Real Client Stories
              </span>
            </div>
            <h2 className="text-5xl font-extrabold leading-tight text-[#131313]">
              Customer Experiences
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="previous"
              className="w-10 h-10 bg-white border border-gray-200"
            >
              <span className="block transform rotate-180">›</span>
            </button>
            <button
              aria-label="next"
              className="w-10 h-10 bg-white border border-gray-200"
            >
              <span className="block">›</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <TestimonialCard key={it.name} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
