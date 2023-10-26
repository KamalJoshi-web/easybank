import React, { useState } from "react";
import Menu from "./Menu";

const NavigationLinks = () => {
  const [isOpen, setIsOpen] = useState(true);
  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Careers", path: "#" },
  ];

  const responsiveStyles =
    "max-md:flex-col max-md:absolute  max-md:gap-1  max-md:text-center max-md:rounded-lg";

  return (
    <>
      <ul
        className={`flex flex-row gap-6 items-cente pt-5 
               duration-200  ${responsiveStyles} ${
          !isOpen
            ? " max-md:visible max-md:bg-White max-md:w-64  max-md:top-20 max-md:opacity-100 max-md:shadow-3xl"
            : " max-md:-top-20 max-md:opacity-0 max-md:w-1 max-md:invisible "
        } `}
      >
        {links.map((item, index) => (
          <li
            key={index}
            className=" font-PublicSans text-GrayishBlue 
            font-medium pb-5   hover:text-DarkBlue duration-300 border-b-White border-b-[4px]
          hover:border-b-[4px] hover:border-b-LimeGreen max-md:border-b-0 max-md:hover:border-b-White"
          >
            <a href={item.path} target="blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavigationLinks;
