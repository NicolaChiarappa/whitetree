import Link from "next/link";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import {
  IoArrowBackCircleSharp,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoTrashBinSharp,
  IoTrashBinOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  getCart,
  changeCart,
  deleteCartItem,
  getAllUsers,
} from "@/app/firebase/database";

import axios from "axios";
import { currentUser } from "@/app/firebase/auth";
import checkout from "../api/checkout";
import Footer from "../components/Footer";

const Cart = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    currentUser().then((res) => setUser(res));
  }, []);

  return user != null ? (
    <CartComponent id={user.uid}></CartComponent>
  ) : (
    <VStack style='items-start justify-center'>
      <Link href='/store' className='h-fit w-fit  flex-col justify-center flex'>
        <HStack style='items-center h-fit text-white w-fit mt-6 '>
          <IoArrowBackCircleSharp
            color='#ffffff'
            size={30}
          ></IoArrowBackCircleSharp>
          <p>Torna allo store</p>
        </HStack>
      </Link>
    </VStack>
  );
};

const CartComponent = ({ id }) => {
  const [cart, setCart] = useState(null);
  let totale = 0;
  const [tot, setTot] = useState();

  useEffect(() => {
    currentUser().then((res) => {
      console.log(res);
    });
    getCart(id).then((res) => {
      if (res == []) {
        setCart(null);
      } else {
        setCart(res);
        res.map((e, index) => {
          totale = totale + e.price * e.quantity;
        });
        setTot(totale);
      }
    });
  }, []);
  return cart != null && cart.length > 0 ? (
    <VStack style='justify-between h-screen font-Cocon'>
      <VStack style='px-5 md:px-24 '>
        <Link
          href='/store'
          className='h-fit w-fit  flex-col justify-center flex'
        >
          <HStack style='items-center h-fit text-white w-fit mt-6 '>
            <IoArrowBackCircleSharp
              color='#ffffff'
              size={30}
            ></IoArrowBackCircleSharp>
            <p>Torna allo store</p>
          </HStack>
        </Link>
        <VStack style='mt-10 '>
          <HStack style='text-white w-full md:w-3/4 justify-between  self-center md:text-2xl '>
            <p>Prodotto</p>
            <p>Prezzo</p>
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
                  dec={() => {
                    setTot(tot - e.price);
                  }}
                  inc={() => {
                    setTot(tot + e.price);
                  }}
                ></CardCart>
              );
            })}
          </VStack>
          <div className='border-solid border-[0.5px] border-white mt-10'></div>
          <HStack style='text-white font-bold text-xl w-[75vw] mt-5 justify-between mb-10 md:text-3xl'>
            <p>Totale</p>
            <p>{"€" + tot.toFixed(2)}</p>
          </HStack>
        </VStack>
        <button
          className='text-black font-bold rounded-xl py-3  text-xl bg-white mb-10 md:text-2xl'
          onClick={() => {
            throw new Error("error");
          }}
        >
          Prosegui
        </button>
      </VStack>
      <Footer></Footer>
    </VStack>
  ) : cart != null && cart.length == 0 ? (
    <VStack style='justify-between h-screen'>
      <VStack style='items-center text-white text-3xl  justify-center h-full pb-32  space-y-8 '>
        <h3>Il tuo carrello è vuoto</h3>
        <button
          className='bg-white rounded-full text-black px-5 py-2 font-bold'
          onClick={() => {
            location.replace("/store");
          }}
        >
          Torna allo store
        </button>
      </VStack>
      <Footer></Footer>
    </VStack>
  ) : (
    <VStack style='items-center justify-center'>
      <Link href='/store' className='h-fit w-fit  flex-col justify-center flex'>
        <HStack style='items-center h-fit text-white w-fit mt-6 '>
          <IoArrowBackCircleSharp
            color='#ffffff'
            size={30}
          ></IoArrowBackCircleSharp>
          <p>Torna allo store</p>
        </HStack>
      </Link>
    </VStack>
  );
};

const CardCart = ({ product, index, id, dec, inc }) => {
  const [item, setItem] = useState(product.quantity);
  const initialprice = product.price * item;
  const [price, setPrice] = useState(initialprice);
  const [isDisable, setIsDisable] = useState();
  useEffect(() => {
    setPrice((product.price * item).toFixed(2));
  }, [item]);

  return (
    <VStack style='md:items-center'>
      <HStack style='w-full h-fit  py-2 md:h-[32vh] text-white mt-16 space-x-5  shadow-black  shadow-xl rounded-xl md:w-3/4'>
        <VStack style=' relative w-[25vw] h-[25vw] md:w-[30vh] md:h-[30vh] '>
          <Image
            alt=''
            src={product.image}
            fill
            className='object-cover'
          ></Image>
        </VStack>
        <VStack style=' justify-between md:py-10 py-4'>
          <VStack style='w-[36vw] h-[22vw] md:h-[15vh]  font-bold text-lg md:text-2xl '>
            <p>{product.type + " " + product.name} </p>
            <HStack style='space-x-3 font-normal text-sm'>
              <p>
                {product.gender == "m"
                  ? "Uomo,"
                  : product.gender == "f"
                  ? "Donna,"
                  : "Bambino,"}
              </p>
              <p>{"taglia " + product.size} </p>
            </HStack>
          </VStack>
          <HStack style='w-3/4 justify-between items-center text-lg md:text-2xl md:w-1/4 '>
            <button
              disabled={item == 1 || isDisable ? true : false}
              onClick={() => {
                setIsDisable(true);
                changeCart(id, index, "-", 1, () => {
                  dec();
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
                  inc();
                  setIsDisable(false);
                  setItem(item + 1);
                });
              }}
            >
              <IoAddCircleOutline size={30}></IoAddCircleOutline>
            </button>
          </HStack>
        </VStack>
        <VStack style=' justify-between items-center md:py-10 py-4'>
          <p className='text-base font-bold md:text-2xl '>{"€ " + price}</p>
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
    </VStack>
  );
};

export default Cart;
