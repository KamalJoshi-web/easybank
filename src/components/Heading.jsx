import React from "react";

const Heading = ({
  children,
  textSize = "text-5xl",
  className = "",
  ...props
}) => {
  return (
    <h1
      className={`${textSize} font-light text-DarkBlue font-PublicSans ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
