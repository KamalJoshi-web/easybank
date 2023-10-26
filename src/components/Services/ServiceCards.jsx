import React from "react";
import { Heading, Para } from "../index";
import { services } from "./ServiceInfo";
import { motion } from "framer-motion";
import { staggerAnimationLeft } from "../../animations/variants";

const ServiceCards = () => {
  return (
    <div className=" flex justify-center gap-5 max-lg:flex-col">
      {services.map((item, index) => (
        <motion.div
          key={index}
          variants={staggerAnimationLeft}
          initial="initial"
          whileInView="animate"
          custom={index}
        >
          <img
            src={item.icon}
            alt={`Image of ${item.name}`}
            className=" mb-10 block max-lg:mx-auto"
          />
          <Heading
            textSize=" text-xl"
            className=" mb-5 text-left max-lg:text-center"
          >
            {item.name}
          </Heading>
          <Para className="text-left max-lg:text-center">{item.detail}</Para>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
