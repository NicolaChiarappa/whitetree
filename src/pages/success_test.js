import React, { useEffect, useState } from "react";
import { currentUser } from "@/app/firebase/auth";
import { getCart } from "@/app/firebase/database";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

const Success_test = () => {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    currentUser().then((res) => {
      getCart(res.uid).then((res) => {
        setCart(res);
      });
    });
  }, []);

  return cart != null ? (
    <VStack>
      {cart.map((e, index) => {
        return (
          <div key={index} className='text-white'>
            {e.name}
          </div>
        );
      })}
    </VStack>
  ) : (
    <></>
  );
};

export default Success_test;
