import { forwardRef } from "react";
import { motion } from "framer-motion";

import React from "react";

const MHStack = forwardRef(
  ({ children, stile = "", id = "", onclick = null }, ref) => {
    const string = "flex flex-row " + stile;
    return (
      <div className={string} id={id} onClick={onclick} ref={ref}>
        {children}
      </div>
    );
  }
);

MHStack.displayName = "MHStack";

export default MHStack;
