import React from "react";

const VStack = ({ children, style, id = "", onClick = () => {} }) => {
  const string = "flex flex-col " + style;

  return (
    <div className={string} id={id} onClick={onClick}>
      {children}
    </div>
  );
};

export default VStack;
