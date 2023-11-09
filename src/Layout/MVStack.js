import { forwardRef } from "react";
import { motion } from "framer-motion";

import React from "react";

const MVStack = forwardRef(
  ({ children, stile = "", id = "", onclick = null }, ref) => {
    const string = "flex flex-col " + stile;
    return (
      <div className={string} id={id} onClick={onclick} ref={ref}>
        {children}
      </div>
    );
  }
);

MVStack.displayName = "MVStack";

export default MVStack;
