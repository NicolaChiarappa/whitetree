import React from "react";

const VStack = ({ children, style, id = "" }) => {
  const string = "flex flex-col " + style;

  return (
    <div className={string} id={id}>
      {children}
    </div>
  );
};

export default VStack;
