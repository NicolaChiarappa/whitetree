import Link from "next/link";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import {
  IoArrowBackCircleSharp,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import { useState } from "react";

const Cart = () => {
  return (
    <VStack style='px-5'>
      <Link href='/store'>
        <HStack style='items-center h-[10vh] text-white'>
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
          <CardCart></CardCart>
        </VStack>
        <div className='border-solid border-[0.5px] border-white mt-10'></div>
        <HStack style='text-white font-bold text-xl w-[75vw] mt-5 justify-between mb-10'>
          <p>Totale</p>
          <p>€ 125</p>
        </HStack>
      </VStack>
    </VStack>
  );
};

const CardCart = () => {
  const [item, setItem] = useState(1);
  return (
    <>
      <HStack style='w-full h-[30vw] text-white mt-16 space-x-5  shadow-black  shadow-xl rounded-lg'>
        <VStack style=' relative w-[25vw] h-[25vw] '>
          <Image alt='' src='/teen.png' fill></Image>
        </VStack>
        <VStack>
          <HStack style='w-[36vw] h-[20vw]  '>
            <p>Descrizione del prodotto </p>
          </HStack>
          <HStack style='w-[30vw] justify-between items-center text-lg'>
            <button
              disabled={item == 0 ? true : false}
              onClick={() => {
                setItem(item - 1);
              }}
            >
              <IoRemoveCircleOutline
                size={30}
                color={item == 0 ? "gray" : "white"}
              ></IoRemoveCircleOutline>
            </button>
            <p>{item}</p>
            <button
              onClick={() => {
                setItem(item + 1);
              }}
            >
              <IoAddCircleOutline size={30}></IoAddCircleOutline>
            </button>
          </HStack>
        </VStack>
        <p className=''>{"€ " + Number((item * 34.9).toFixed(1))}</p>
      </HStack>
      {/* <div className='border-solid border-[0.5px] border-white mt-2 '></div> */}
    </>
  );
};

export default Cart;
