import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="relative bg-[#191919] text-white">
      {/* yellow band that overlaps into the container */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-[38px] bg-[#ff9934]"
        style={{ width: "calc((100vw - 1280px) / 2 + 320px)" }}
      />

      <div className="container mx-auto px-6 h-[38px] flex items-center justify-between relative z-10">
        <div className="bg-[#ff9934] px-6 h-full flex items-center text-white font-medium text-sm">
          Al Madina Rd, King Fahad, Jubail 35514
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span>info@nalarabia.com</span>
          <span className="mx-2">|</span>
          <Link
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-[#ff9934]"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
            </svg>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-[#ff9934]"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
