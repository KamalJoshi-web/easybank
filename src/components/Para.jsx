import React from "react";

const Para = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`font-PublicSans text-GrayishBlue font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Para;
