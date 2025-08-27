import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import IndustrialSuccess from "./components/IndustrialSuccess";
import Clients from "./components/Clients";
import Serve from "./components/Serve";
import Blogs from "./components/Blogs";

export default function Page() {
  return (
    <div className="site-root">
      <main>
        <Hero />
        <About />
        <Services />
        <IndustrialSuccess />
        <Clients />
        <Serve />
        <Blogs />
      </main>
    </div>
  );
}
