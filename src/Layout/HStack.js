import React from "react";

const HStack = ({ children, style = "", id = "", onclick = null }) => {
  const string = "flex flex-row " + style;
  return (
    <div className={string} id={id} onClick={onclick}>
      {children}
    </div>
  );
};

export default HStack;
