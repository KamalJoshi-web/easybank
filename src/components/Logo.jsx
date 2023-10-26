import React from "react";
import LogoIcon from "../assets/logo.svg";
import LogoWhiteIcon from "../assets/logo-white.svg";

const Logo = ({ white }) => {
  return <img src={white ? LogoWhiteIcon : LogoIcon} alt="logo" />;
};

export default Logo;
