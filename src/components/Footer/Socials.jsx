import React from "react";
import { Logo } from "../index";
import IconYoutube from "../../assets/icon-youtube.svg";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconInstagram from "../../assets/icon-instagram.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconPinterest from "../../assets/icon-pinterest.svg";

const Socials = () => {
  const socialIcons = [
    { icon: IconFacebook, path: "#" },
    { icon: IconYoutube, path: "#" },
    { icon: IconTwitter, path: "#" },
    { icon: IconPinterest, path: "#" },
    { icon: IconInstagram, path: "#" },
  ];

  return (
    <>
      <div className=" flex flex-col justify-between  gap-5 items-center">
        <Logo white={"white"} />
        <ul className=" flex gap-3 justify-center items-center">
          {socialIcons.map((item, index) => (
            <li key={index}>
              <a href={item.path} target="_blank">
                <img
                  src={item.icon}
                  alt="logo"
                  className=" duration-200  hover:invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;
