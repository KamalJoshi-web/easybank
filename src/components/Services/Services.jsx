import React from "react";
import ServiceIntro from "./ServiceIntro";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <section className=" relative z-30 bg-LightGrayishBlue min-h-screen flex flex-col justify-center items-center  mt-0 max-lg:mt-20 ">
      <div className=" w-4/5 ">
        <ServiceIntro />
        <ServiceCards />
      </div>
    </section>
  );
};

export default Services;
