import React from "react";
import MockupImgs from "../../assets/image-mockups.png";
import { motion } from "framer-motion";
import { dropFromTop } from "../../animations/variants";

const InfoGraphics = () => {
  return (
    <aside className=" relative ">
      <div
        className=" w-full  before:rounded-lg before:-right-3/4 before:-top-40  before:bg-no-repeat   
        before:absolute before:bg-deskGraphics before:w-screen  before:h-full before:-z-10
         max-xl:before:-top-3  
         max-lg:before:-top-5 max-lg:before:-right-5
        max-md:before:bg-mobGraphics max-md:before:bg-cover max-md:before:right-0 max-md:before:top-0  max-md:before:w-full"
      ></div>
      <motion.img
        src={MockupImgs}
        alt="MockupImgs"
        className=" w-full"
        variants={dropFromTop}
        initial="initial"
        animate="animate"
      />
    </aside>
  );
};

export default InfoGraphics;
