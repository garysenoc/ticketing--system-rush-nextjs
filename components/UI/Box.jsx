import React from "react";

const Box = ({ children, className = "" }) => {
  return (
    <div className={` ${className} bg-primary-500 py-10 px-12 rounded-md`}>
      {children}
    </div>
  );
};

export default Box;
