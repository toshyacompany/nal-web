/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";

type Project = {
  id: string;
  img: string;
  categories: string[];
};

const data: Project[] = [
  { id: "p1", img: "/p1.jpg", categories: ["Manpower"] },
  { id: "p2", img: "/p2.jpg", categories: ["Industrial"] },
  { id: "p3", img: "/p3.jpg", categories: ["Rental"] },
  { id: "p4", img: "/p4.jpg", categories: ["Manpower"] },
  { id: "p5", img: "/p5.jpg", categories: ["Industrial"] },
  { id: "p6", img: "/p6.jpg", categories: ["Rental"] },
];

const TABS = ["All", "Manpower", "Industrial", "Rental"] as const;

export default function ProjectsShowcase() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");

  const filtered =
    active === "All" ? data : data.filter((d) => d.categories.includes(active));

  return (
    <section className="py-12">
      <div className="container px-6 mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2 text-sm rounded border ${
                  active === t
                    ? "bg-[#ff9934] text-white border-[#ff9934]"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="overflow-hidden">
              <Link href={`/projects/${p.id}`}>
                <img
                  src={p.img}
                  alt={p.id}
                  className="object-cover w-full h-[416px]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
