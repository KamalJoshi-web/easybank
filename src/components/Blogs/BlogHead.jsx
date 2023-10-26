import React from "react";
import { Heading } from "../index";
import { motion } from "framer-motion";
import { scaleFromZero } from "../../animations/variants";

const BlogHead = () => {
  return (
    <motion.div
      variants={scaleFromZero}
      initial="initial"
      whileInView="animate"
    >
      <Heading
        textSize=" text-4xl"
        className=" my-16  text-left max-lg:text-center max-md:text-2xl max-md:my-5 "
      >
        Latest Articles
      </Heading>
    </motion.div>
  );
};

export default BlogHead;
