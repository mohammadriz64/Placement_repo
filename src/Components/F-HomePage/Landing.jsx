import React from "react";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import FooterSection from "../E-FooterSection/FooterSection";

const Landing = () => {
  return (
    <div>
      <HeaderSection />
      <LeftNevigation />
      <RightNevigation />
      <MainBody />
      <FooterSection />
    </div>
  );
};

export default Landing;
