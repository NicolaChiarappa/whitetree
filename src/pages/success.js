import { getCart } from "@/app/firebase/database";
import { currentUser } from "@/app/firebase/auth";
import axios from "axios";
import { useState } from "react";

const Success = () => {
  const [res, setRes] = useState(null);
  axios
    .get("https://nice-pear-dalmatian-garb.cyclic.app/success")
    .then((res) => {
      setRes(res);
    });
  return res == null ? (
    <></>
  ) : res == "good" ? (
    <div className='text-white'>Good</div>
  ) : (
    <div className='text-white'>Not good</div>
  );
};

export default Success;
