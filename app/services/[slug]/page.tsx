import StayConnected from "@/app/components/StayConnected";
import React from "react";
import SingleServiceHero from "../[components]/SingleServiceHero";
import SingleServiceContent from "./SingleServiceContent";

const Page = () => {
  return (
    <>
      <SingleServiceHero />
      <SingleServiceContent />
      <StayConnected />
    </>
  );
};

export default Page;
