import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const FooterAlt = () => {
  return (
    <footer className="w-full bg-[#111111] text-white">
      <div className="py-16">
        <div className="container relative px-6 mx-auto">
          <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-4">
            {/* Left - logo + description + social icons */}
            <div className="col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="NAL Arabia"
                  width={160}
                  height={64}
                />
              </div>

              <p className="mb-6 text-base text-gray-300">
                Providing Reliable Industrial Support, Skilled Manpower And
                Quality Solutions For Sustainable Growth And Success.
              </p>

              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-[#222222]">
                  <Facebook />
                </div>
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-[#222222]">
                  <Linkedin />
                </div>
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-sm bg-[#222222]">
                  <Instagram />
                </div>
              </div>
            </div>

            {/* Services column */}
            <div className="col-span-1 pl-8 md:pl-10">
              <h4 className="mb-4 text-2xl font-semibold text-white">
                Our Services
              </h4>
              <ul className="space-y-3 text-base text-gray-300">
                <li>Industrial Support</li>
                <li>Equipments</li>
                <li>Materials</li>
                <li>Manpower</li>
              </ul>
            </div>

            {/* Offices column */}
            <div className="col-span-1 pl-8 md:pl-10">
              <h4 className="mb-4 text-2xl font-semibold text-white">
                Head Office
              </h4>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 border border-[#2B2B2B]">
                  <MapPin className="text-white" />
                </div>
                <div className="text-base font-medium text-gray-300">
                  Al Madina Rd, King Fahad, Jubail 35514
                </div>
              </div>

              <h4 className="mb-4 text-2xl font-semibold text-white">
                Branch Office
              </h4>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 border border-[#2B2B2B]">
                  <MapPin className="text-white" />
                </div>
                <div className="text-base font-medium text-gray-300">
                  Al Madina Rd, King Fahad, Jubail 35514
                </div>
              </div>
            </div>

            {/* Subscribe column */}
            <div className="col-span-1 pl-8 md:pl-10">
              <h4 className="mb-4 text-2xl font-semibold text-white">
                Subscribe
              </h4>
              <p className="mb-6 text-base text-orange-400">
                Get Our Latest Updates &amp; Offers !
              </p>

              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 text-sm border rounded border-white/10 bg-transparent placeholder:text-gray-400 text-white"
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
          Copyright 2025 <span className="font-semibold">NAL Arabia</span> - All
          Rights Reserved By <span className="underline">Multixion</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterAlt;
