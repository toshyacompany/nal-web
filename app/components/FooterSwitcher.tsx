"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Footer2 from "./Footer2";

export default function FooterSwitcher() {
  const pathname = usePathname() || "/";

  // Show main Footer only on the home page
  if (pathname === "/") return <Footer />;

  // All other pages use Footer2
  return <Footer2 />;
}
