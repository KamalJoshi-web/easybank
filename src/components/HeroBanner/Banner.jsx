import React from "react";
import Info from "./Info";
import InfoGraphics from "./InfoGraphics";

const Banner = () => {
  return (
    <section
      className="  bg-VeryLightGray max-lg:bg-White  z-40 relative max-h-screen gap-0 flex justify-between items-center   overflow-x-clip 
    max-xl:flex-col-reverse max-xl:gap-10 max-md:gap-1 "
    >
      <Info />
      <InfoGraphics />
    </section>
  );
};

export default Banner;
