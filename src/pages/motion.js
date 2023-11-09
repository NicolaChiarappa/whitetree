import MHStack from "../Layout/MHStack";
import { motion } from "framer-motion";

import React from "react";

const MotionStack = motion(MHStack);
const Motion = () => {
  return (
    <MotionStack stile='bg-black text-white  justify-between'>
      <motion.p
        animate={{
          x: [-1000, 0],
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Ciao
      </motion.p>
      <motion.p
        animate={{
          x: [-180, 0],
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Ciao
      </motion.p>
      <motion.p
        animate={{
          x: [-260, 0],
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Ciao
      </motion.p>
      <motion.p
        animate={{
          x: [-340, 0],
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Ciao
      </motion.p>
    </MotionStack>
  );
};

export default Motion;
