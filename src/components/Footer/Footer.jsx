import React from "react";
import Socials from "./Socials";
import Navigation from "./Navigation";
import CopyRight from "./CopyRight";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../animations/variants";

const Footer = () => {
  return (
    <footer className=" min-h-[30vh] bg-DarkBlue flex justify-center items-center">
      <motion.div
        variants={slideInFromBottom}
        initial="initial"
        whileInView="animate"
        className=" w-4/5 flex justify-between  max-lg:flex-col gap-5 py-10 max-lg:py-5 "
      >
        <Socials />
        <Navigation />
        <CopyRight />
      </motion.div>
    </footer>
  );
};

export default Footer;
