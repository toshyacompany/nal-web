import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full font-manrope">
      <div
        className="w-full py-16"
        style={{
          background:
            "linear-gradient(90deg, #FFFFFF 32.66%, #BFBFE5 46.71%, #9F9FD8 57.64%, #8080CC 68.3%, #000098 100%)",
        }}
      >
        <div className="container relative px-6 mx-auto">
          <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-4">
            {/* Left - logo + description + social icons */}
            <div className="col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="NAL Arabia"
                  width={140}
                  height={60}
                />
              </div>
              <p className="mb-6 text-base text-[#000098] font-normal">
                Providing Reliable Industrial Support, Skilled Manpower And
                Quality Solutions For Sustainable Growth And Success.
              </p>

              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-black/80">
                  <Facebook />
                </div>
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-black/80">
                  <Linkedin />
                </div>
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-black/80">
                  <Instagram />
                </div>
              </div>
            </div>

            {/* Services column */}
            <div className="col-span-1 pl-8 md:pl-5">
              <h4 className="mb-4 text-2xl font-bold text-[#000098]">
                Our Services
              </h4>
              <ul className="space-y-3 text-base font-normal text-[#000098]">
                <li>Industrial Support</li>
                <li>Equipments</li>
                <li>Materials</li>
                <li>Manpower</li>
              </ul>
            </div>

            {/* Offices column */}
            <div className="col-span-1 pl-8 md:pl-5">
              <h4 className="mb-4 text-2xl font-bold text-white">
                Head Office
              </h4>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 border border-[#2B2B2B] ">
                  <MapPin className="text-white" />
                </div>
                <div className="text-base font-semibold text-white/90">
                  Al Madina Rd, King Fahad, Jubail 35514
                </div>
              </div>

              <h4 className="mb-4 text-2xl font-bold text-white">
                Branch Office
              </h4>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 border border-[#2B2B2B] ">
                  <MapPin className="text-white" />
                </div>
                <div className="text-base font-semibold text-white/90">
                  Al Madina Rd, King Fahad, Jubail 35514
                </div>
              </div>
            </div>

            {/* Subscribe column */}
            <div className="col-span-1 pl-8 md:pl-5">
              <h4 className="mb-4 text-2xl font-bold text-white">Subscribe</h4>
              <p className="mb-6 text-base font-medium text-[#FF9934]">
                Get Our Latest Updates &amp; Offers !
              </p>

              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 text-sm border rounded border-white/40 bg-white/10 placeholder:text-white/60"
                />
                <button className="w-12 h-12 bg-[#FF9934] rounded-md" />
              </div>
            </div>
          </div>

          {/* vertical separators between columns (equal full height) */}
          <div className="hidden md:block">
            <div className="absolute top-6 bottom-6 left-1/4 w-px bg-[#2B2B2B]" />
            <div className="absolute top-6 bottom-6 left-1/2 w-px bg-[#2B2B2B]" />
            <div className="absolute top-6 bottom-6 left-3/4 w-px bg-[#2B2B2B]" />
          </div>
        </div>
      </div>

      {/* bottom copyright bar */}
      <div className="w-full bg-[#FF9934] py-4">
        <div className="container px-6 mx-auto text-sm text-center text-white">
          Copyright 2025{" "}
          <span className="font-normal text-black underline">NAL Arabia</span> -
          All Rights Reserved By{" "}
          <span className="font-normal text-black underline">Multixion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
