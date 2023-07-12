import React from "react";

const HStack = ({ children, style = "", id = "" }) => {
  const string = "flex flex-row " + style;
  return (
    <div className={string} id={id}>
      {children}
    </div>
  );
};

export default HStack;
