import React from "react";
import { Heading, Para } from "../index";
import { motion } from "framer-motion";
import { scaleFromZero } from "../../animations/variants";

const ServiceIntro = () => {
  return (
    <motion.div
      variants={scaleFromZero}
      initial="initial"
      whileInView="animate"
      className=" mb-20 mt-0 max-lg:mt-5"
    >
      <Heading
        textSize="text-4xl"
        className=" mb-5 text-left max-lg:text-center"
      >
        Why choose Easybank?
      </Heading>
      <Para className="text-left max-lg:text-center">
        We leverage Open Banking to turn your bank account into your financial
        hub. <br /> Control your finances like never before.
      </Para>
    </motion.div>
  );
};

export default ServiceIntro;
