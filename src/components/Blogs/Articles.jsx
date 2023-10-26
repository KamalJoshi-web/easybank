import React from "react";
import { articles } from "./ArticleContent";
import { Heading, Para } from "../index";
import { motion } from "framer-motion";
import { staggerdropFromTop } from "../../animations/variants";

const Articles = () => {
  return (
    <div className=" flex gap-5 max-xl:flex-wrap max-xl:justify-center">
      {articles.map((item, index) => (
        <motion.div
          variants={staggerdropFromTop}
          initial="initial"
          whileInView="animate"
          custom={index}
          key={index}
          className=" bg-White   max-w-xs rounded-lg shadow-sm"
        >
          <img
            src={item.icon}
            alt="image"
            className=" h-48 w-full rounded-t-lg"
          />
          <div className=" p-3 flex gap-2 flex-col">
            <Para className=" mt-2">{item.author}</Para>
            <Heading textSize="text-xl">{item.title}</Heading>
            <Para>{item.desc}</Para>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Articles;
