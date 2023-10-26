import React from "react";

const Button = ({
  type = "button",
  children,
  borderRadius = "rounded-3xl",
  opacity = "hover:opacity-70",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={` font-PublicSans  font-medium  text-White  px-4 py-2 
      bg-gradient-to-r  from-LimeGreen to-BrightCyan ${opacity}
       ${borderRadius}  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
