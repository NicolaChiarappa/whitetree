import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Link from "next/link";
import Image from "next/image";
import { FaPercent } from "react-icons/fa";

import {
  IoClose,
  IoMenuSharp,
  IoCartOutline,
  IoPersonCircleOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";

import { useRouter } from "next/router";

import Menu from "./menu";
import { useEffect, useState } from "react";
import { auth, currentUser, logout } from "@/app/firebase/auth";
import { getCart } from "@/app/firebase/database";
import { motion } from "framer-motion";
import MHStack from "../Layout/MHStack";

const MotionHstack = motion(MHStack);

const Navbar = ({ isStore = false }) => {
  const [isLoad, setIsLoad] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState();
  const [coupon, setCoupon] = useState();
  useEffect(() => {
    currentUser().then((res) => {
      if (res == null) {
      } else {
        if (isStore == true) {
          getCart(res.uid).then((res) => {
            if (res != null) {
              setIsLoad(true);
              setCart(res);
            }
          });
        }
      }
    });
  }, []);

  const router = useRouter();
  return (
    <>
      <nav className=' sticky w-full  h-fit pb-3 z-50 font-Cocon text-gray-600'>
        <VStack>
          <HStack style='w-full justify-center pt-10 px-2 pr-4 h-fit py-2 bg-black'>
            <Link href='/' className=' '>
              <MotionHstack
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                stile='items-center  w-full text-white space-x-5 text-5xl overflow-hidden'
              >
                <Image
                  alt=''
                  src='/logo-redesign.webp'
                  width={70}
                  height={70}
                  priority={true}
                ></Image>
                <VStack style='items-center -space-y-2'>
                  <h1>WhiteTree</h1>
                  <h2 className='text-lg '>Build your freedom</h2>
                </VStack>
              </MotionHstack>
            </Link>
          </HStack>
          <HStack style='px-10 py-3 text-lg justify-between'>
            <button
              onClick={() => {
                setIsVisible(true);
              }}
            >
              <VStack style='items-center'>
                <IoMenuSharp color='black' size={30}></IoMenuSharp>
                <p>Menu</p>
              </VStack>
            </button>
            <Link href='/account'>
              <VStack style='items-center'>
                <IoPersonCircleOutline
                  color='black'
                  size={30}
                ></IoPersonCircleOutline>
                <p>Accedi</p>
              </VStack>
            </Link>
            <Link href='/cart'>
              <VStack style='items-center relative'>
                <HStack style='absolute -top-2 -right-1  bg-black rounded-full w-7 h-5  items-center justify-center text-white'>
                  <div className='w-4 h-4 text-white text-center leading-5'>
                    {isLoad ? cart.length : "0"}
                  </div>
                </HStack>
                <IoCartOutline color='black' size={30}></IoCartOutline>
                <p>Carrello</p>
              </VStack>
            </Link>
          </HStack>
        </VStack>
      </nav>
      <Menu isVisible={isVisible} setVisible={setIsVisible}></Menu>
      <VStack style='fixed top-72 -right-2 z-[99]'>
        <div className='bg-green-500 rounded-xl p-2'>
          <Link href='https://wa.me/3924818843'>
            <IoLogoWhatsapp size={55} color='white'></IoLogoWhatsapp>
          </Link>
        </div>
        <div className='bg-red-500 rounded-xl p-2 mt-4'>
          <button
            onClick={() => {
              setCoupon(!coupon);
            }}
          >
            <FaPercent size={55}></FaPercent>
          </button>
        </div>
      </VStack>
      <Coupon isVisible={coupon} setIsVisible={setCoupon}></Coupon>
    </>
  );
};

const Coupon = ({ isVisible, setIsVisible }) => {
  return (
    <VStack
      style={
        isVisible
          ? "w-full h-screen bg-red-400/50 self-center items-start text-white font-Cocon px-10 z-50 fixed top-0 backdrop-blur-xl"
          : "hidden"
      }
    >
      <HStack style='w-full justify-end  pt-5'>
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <IoClose size={40} color='white'></IoClose>
        </button>
      </HStack>
      <h1 className='text-3xl mt-10 '>Ricevi un buono sconto</h1>
      <h2 className='text-2xl mt-10'>
        Crea un account e ricevi un <br></br>
        buono
        <span className='ml-2 font-bold text-[1.7rem] text-black'>
          sconto del 10%
        </span>
      </h2>
      <button className='mt-24 text-3xl bg-white text-black px-5 py-2 rounded-xl '>
        Registrati
      </button>
    </VStack>
  );
};

export default Navbar;
