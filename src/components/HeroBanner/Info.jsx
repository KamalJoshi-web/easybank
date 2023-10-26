import React from "react";
import { Heading, Para, Button } from "../index";
import { motion } from "framer-motion";
import { slideInFromLeftNoBounce } from "../../animations/variants";

const Info = () => {
  return (
    <motion.aside
      variants={slideInFromLeftNoBounce}
      initial="initial"
      animate="animate"
      className=" m-auto"
    >
      <Heading className=" leading-tight text-start max-xl:text-center max-[281px]:text-3xl  ">
        Next generation <br /> digital banking
      </Heading>
      <Para className=" mb-8 mt-4 text-start max-xl:text-center max-md:text-sm">
        Take your financial life online. Your Easybank account <br /> will be a
        one-stop-shop for spending, saving, <br /> budgeting, investing, and
        much more.
      </Para>
      <Button className="block m-0 max-lg:m-auto">Request Invite</Button>
    </motion.aside>
  );
};

export default Info;
