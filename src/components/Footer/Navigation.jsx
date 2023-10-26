import React from "react";

const Navigation = () => {
  const links = [
    { name: "About Us", path: "#" },
    { name: "Contact", path: "#" },
    { name: "Blog", path: "#" },
  ];
  const links2 = [
    { name: "Careers", path: "#" },
    { name: "Support", path: "#" },
    { name: "Privacy Policy", path: "#" },
  ];

  return (
    <div className=" flex justify-between gap-44  max-lg:flex-col max-lg:gap-0 max-lg:items-center">
      {/* First List */}
      <ul>
        {links.map((item, index) => (
          <li
            key={index}
            className=" text-White font-PublicSans hover:text-LimeGreen duration-200 my-2 text-left max-lg:text-center"
          >
            <a href={item.path} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Second List */}
      <ul>
        {links2.map((item, index) => (
          <li
            key={index}
            className=" text-White font-PublicSans hover:text-LimeGreen duration-200 my-2 text-left max-lg:text-center"
          >
            <a href={item.path} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
