"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm">
      <div className="container">
        <header className="flex items-center justify-between h-[100px]">
          <div className="flex items-center gap-32">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="NAC Logo" width={140} height={60} />
            </div>

            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-800">
              <Link href="#" className="hover:text-[#ff9934]">
                HOME
              </Link>
              <Link href="#" className="hover:text-[#ff9934]">
                ABOUT
              </Link>
              <Link href="#" className="hover:text-[#ff9934]">
                SERVICES
              </Link>
              <Link href="#" className="hover:text-[#ff9934]">
                PROJECTS
              </Link>
              <Link href="#" className="hover:text-[#ff9934]">
                CONTACT
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-block bg-[#ff9934] hover:bg-orange-600 text-white font-semibold rounded-md py-3 px-12 cursor-pointer">
              REQUEST QUOTE
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen(true)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "block" : "hidden"}`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden
        />

        <aside className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <Image src="/logo.png" alt="NAC Logo" width={120} height={48} />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-gray-800 font-semibold">
            <Link href="#" onClick={() => setOpen(false)} className="py-2">
              HOME
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="py-2">
              ABOUT
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="py-2">
              SERVICES
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="py-2">
              PROJECTS
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="py-2">
              CONTACT
            </Link>
          </nav>

          <div className="mt-6">
            <button className="w-full bg-[#ff9934] hover:bg-orange-600 text-white font-semibold rounded-md py-3">
              REQUEST QUOTE
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Header;
