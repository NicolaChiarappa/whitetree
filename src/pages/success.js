import { getCart } from "@/app/firebase/database";
import { currentUser } from "@/app/firebase/auth";
import axios from "axios";
import { useState } from "react";

const Success = () => {
  return axios.get("https://nice-pear-dalmatian-garb.cyclic.app/success");
};

export default Success;
