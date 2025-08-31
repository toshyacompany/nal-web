import React from "react";
import AboutHero from "./[components]/AboutHero";
import OurCompany from "./[components]/OurCompany";
import WhoWeAre from "./[components]/WhoWeAre";
import FreeConsultation from "./[components]/FreeConsultation";
import Team from "./[components]/Team";
import Services from "../components/Services";
import StayConnected from "../components/StayConnected";

const Page = () => {
  return (
    <>
      <AboutHero />
      <OurCompany />
      <WhoWeAre />
      <FreeConsultation />
      <Team />
      <Services />
      <StayConnected />
    </>
  );
};

export default Page;
