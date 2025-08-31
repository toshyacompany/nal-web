"use client";
import React from "react";
import ContactHero from "./[components]/ContactHero";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  lines: React.ReactNode;
}> = ({ icon, title, lines }) => (
  <div className="flex flex-col items-start text-left">
    <div className="w-12 h-12 mb-4 bg-[#FF9934] text-white flex items-center justify-center rounded-sm">
      {icon}
    </div>
    <h4 className="mb-2 font-semibold text-[#131313]">{title}</h4>
    <div className="text-sm text-gray-600">{lines}</div>
  </div>
);

const Page: React.FC = () => {
  return (
    <>
      <ContactHero />

      {/* Contact info cards */}
      <section className="py-12">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 px-20 mb-12 md:grid-cols-3">
            <ContactInfoCard
              icon={
                <span className="text-xl">
                  <MapPin />
                </span>
              }
              title="Office Location"
              lines={
                <>
                  <div>You Are Most Welcome To Visit Office.</div>
                  <div className="mt-2 text-sm text-gray-500">
                    alamain st, king faisal, jeddah 31546, saudi arabia
                  </div>
                </>
              }
            />

            <ContactInfoCard
              icon={
                <span className="text-xl">
                  <Phone />
                </span>
              }
              title="Tell With Us"
              lines={
                <>
                  <div>Keeping You Always Better Connected.</div>
                  <div className="mt-2 text-sm text-gray-500">
                    +966 (013) 123 456
                    <br />
                    +966 (013) 452 645
                  </div>
                </>
              }
            />

            <ContactInfoCard
              icon={
                <span className="text-xl">
                  <Mail />
                </span>
              }
              title="Quick Email"
              lines={
                <>
                  <div>Drop Us A Mail We Will Answer You Asap.</div>
                  <div className="mt-2 text-sm text-gray-500">
                    info@nalarabia.com
                    <br />
                    bd@nalarabia.com
                  </div>
                </>
              }
            />
          </div>

          {/* Contact form centered card */}
          <div className="flex justify-center mt-12">
            <div className="relative z-20 w-full max-w-6xl p-10 py-20 mx-auto -mb-24 bg-white rounded shadow-lg">
              <div className="flex flex-col gap-4 mb-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="flex flex-col gap-2">
                    <span className="w-10 h-[2px] bg-orange-400 rounded" />
                    <span className="w-10 h-[2px] bg-orange-400 rounded" />
                  </div>

                  <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
                    Get In Touch
                  </span>
                </div>
                <h3 className="text-5xl font-bold text-[#131313] max-w-xl  mx-auto">
                  We Are Always Ready For Your Solution
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const fd = new FormData(form);
                  const data = Object.fromEntries(fd.entries());
                  console.log("Contact form submitted:", data);
                  form.reset();
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <input
                  name="name"
                  className="px-4 py-3 border border-gray-200"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  className="px-4 py-3 border border-gray-200"
                  placeholder="Email Address"
                />
                <input
                  name="subject"
                  className="col-span-1 px-4 py-3 border border-gray-200 md:col-span-2"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  className="col-span-1 px-4 py-3 border border-gray-200 md:col-span-2 h-36"
                  placeholder="Message"
                />

                <div className="col-span-1 mt-4 text-center md:col-span-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#ff9934] text-white rounded"
                  >
                    SUBMIT MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* end container */}
        </div>
      </section>

      {/* Full-width map (full-bleed) */}
      <div className="w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7048249839883!2d-73.91215168459319!3d40.72321157932809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1c6d6b3c0f%3A0x7d1a7646a1b1b0e7!2sQueens%20Plaza%20Park%2C%20Queens%2C%20NY%2011163!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          className="block w-full border-0 h-[50rem]"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Page;
