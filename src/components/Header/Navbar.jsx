import React from "react";
import { Button, Logo } from "../index";
import NavigationLinks from "./NavigationLinks";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../animations/variants";

const Navbar = () => {
  return (
    <motion.nav
      variants={slideInFromLeft}
      initial="initial"
      animate="animate"
      className=" relative z-50 bg-White flex items-center justify-around py-0 max-md:py-5  "
    >
      <Logo />
      <NavigationLinks />
      <Button className=" block max-md:hidden">Request Invite</Button>
    </motion.nav>
  );
};

export default Navbar;
