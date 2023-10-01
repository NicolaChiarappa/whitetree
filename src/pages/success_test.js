import React, { useEffect, useState } from "react";
import { currentUser } from "@/app/firebase/auth";
import { addOrder, getCart, getSelectedAddress } from "@/app/firebase/database";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

const Success_test = () => {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const data = new Date();
    let month = data.getUTCMonth() + 1;
    let year = data.getFullYear();
    let day = data.getDate();
    const datastringa = day + "-" + month + "-" + year;
    currentUser().then((res) => {
      getCart(res.uid).then((cart) => {
        getSelectedAddress(res.uid).then((address) => {
          addOrder(cart, address, datastringa, res.uid);
        });
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
