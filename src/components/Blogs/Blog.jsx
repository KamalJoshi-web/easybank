import React from "react";
import BlogHead from "./BlogHead";
import Articles from "./Articles";

const Blog = () => {
  return (
    <section className=" relative z-20 min-h-screen bg-VeryLightGray flex flex-col justify-center items-center gap-10">
      <div className=" w-4/5">
        <BlogHead />
        <Articles />
      </div>
    </section>
  );
};

export default Blog;
