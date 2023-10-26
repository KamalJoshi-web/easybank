import React, { useState } from "react";
import HamIcon from "../../assets/icon-hamburger.svg";
import CrossIcon from "../../assets/icon-close.svg";

const Menu = ({ isOpen, setIsOpen, classname = "" }) => {
  return (
    <div
      className={` w-5 hidden max-md:block duration-200 ${classname}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <img src={HamIcon} alt="menu-icon" />
      ) : (
        <img src={CrossIcon} alt="close-icon" />
      )}
    </div>
  );
};

export default Menu;
