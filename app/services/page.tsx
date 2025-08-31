import React from "react";
import ServicesHero from "./[components]/ServicesHero";
import ServiceType from "./[components]/ServiceType";
import FreeQuote from "./[components]/FreeQuote";
import AdvanceSolution from "./[components]/AdvanceSolution";
import ServiceClients from "./[components]/ServiceClients";
import StayConnected from "../components/StayConnected";
import ClientStories from "./[components]/ClientStories";

const Page = () => {
  return (
    <>
      <ServicesHero />
      <ServiceType />
      <FreeQuote />
      <AdvanceSolution />
      <ServiceClients />
      <ClientStories />
      <StayConnected />
    </>
  );
};

export default Page;
