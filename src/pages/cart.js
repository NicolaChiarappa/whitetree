import Link from "next/link";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import {
  IoArrowBackCircleSharp,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoTrashBinSharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { getCart, changeCart, deleteCartItem } from "@/app/firebase/database";

import axios from "axios";
import { currentUser } from "@/app/firebase/auth";

const Cart = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    currentUser().then((res) => setUser(res));
  }, []);

  return user != null ? <CartComponent id={user.uid}></CartComponent> : <></>;
};

const CartComponent = ({ id }) => {
  const [cart, setCart] = useState(null);
  const [totale, setTotale] = useState(0);
  useEffect(() => {
    currentUser().then((res) => {
      console.log(res);
    });
    getCart(id).then((res) => {
      if (res == []) {
        setCart(null);
      } else {
        setCart(res);
        res.map((e) => {
          setTotale(totale + e.price * e.quantity);
          console.log(e);
        });
      }
    });
  }, []);
  return cart != null && cart.length > 0 ? (
    <VStack style='px-5'>
      <Link href='/store' className='h-fit w-fit  flex-col justify-center flex'>
        <HStack style='items-center h-fit text-white w-fit mt-6 '>
          <IoArrowBackCircleSharp
            color='#ffffff'
            size={30}
          ></IoArrowBackCircleSharp>
          <p>Torna allo store</p>
        </HStack>
      </Link>
      <VStack style='mt-10'>
        <HStack style='text-white w-full justify-between px-3'>
          <p>Prodotto</p>
          <p>Totale</p>
        </HStack>
        <div className='border-solid border-[0.5px] border-white'></div>
        <VStack>
          {cart.map((e, index) => {
            return (
              <CardCart
                product={e}
                key={index}
                index={index}
                id={id}
              ></CardCart>
            );
          })}
        </VStack>
        <div className='border-solid border-[0.5px] border-white mt-10'></div>
        <HStack style='text-white font-bold text-xl w-[75vw] mt-5 justify-between mb-10'>
          <p>Totale</p>
          <p>{"€" + totale}</p>
        </HStack>
      </VStack>
    </VStack>
  ) : cart != null && cart.length == 0 ? (
    <VStack style='items-center text-white text-3xl  justify-center h-screen pb-32  space-y-8'>
      <h3>Il tuo carrello è vuoto</h3>
      <button
        className='bg-white rounded-full text-black px-5 py-2'
        onClick={() => {
          location.replace("/store");
        }}
      >
        Torna allo store
      </button>
    </VStack>
  ) : (
    <></>
  );
};

const CardCart = ({ product, index, id }) => {
  const [item, setItem] = useState(product.quantity);
  const initialprice = product.price * item;
  const [price, setPrice] = useState(initialprice);
  const [isDisable, setIsDisable] = useState();
  useEffect(() => {
    setPrice((product.price * item).toFixed(2));
  }, [item]);

  return (
    <>
      <HStack style='w-full h-[30vw] text-white mt-16 space-x-5  shadow-black  shadow-xl rounded-xl '>
        <VStack style=' relative w-[25vw] h-[25vw] '>
          <Image alt='' src={product.image} fill></Image>
        </VStack>
        <VStack style=''>
          <VStack style='w-[36vw] h-[20vw]  font-bold text-lg '>
            <p>{product.name} </p>
            <p>{product.size} </p>
          </VStack>
          <HStack style='w-3/4 justify-between items-center text-lg '>
            <button
              disabled={item == 1 || isDisable ? true : false}
              onClick={() => {
                setIsDisable(true);
                changeCart(id, index, "-", 1, () => {
                  setItem(item - 1);
                  setIsDisable(false);
                });
              }}
            >
              <IoRemoveCircleOutline
                size={30}
                color={item == 1 ? "gray" : "white"}
              ></IoRemoveCircleOutline>
            </button>
            <p>{item}</p>
            <button
              disabled={isDisable ? true : false}
              onClick={() => {
                setIsDisable(true);
                changeCart(id, index, "+", 1, () => {
                  setIsDisable(false);
                  setItem(item + 1);
                });
              }}
            >
              <IoAddCircleOutline size={30}></IoAddCircleOutline>
            </button>
          </HStack>
        </VStack>
        <VStack style=' justify-around items-center'>
          <p className='text-base font-bold'>{"€ " + price}</p>
          <button
            onClick={() => {
              deleteCartItem(id, index, () => {
                location.reload();
              });
            }}
          >
            <IoTrashBinSharp size={30}></IoTrashBinSharp>
          </button>
        </VStack>
      </HStack>
      <div className='border-solid border-[0.5px] border-white mt-2 '></div>
    </>
  );
};

export default Cart;
