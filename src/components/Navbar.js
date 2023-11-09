import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Link from "next/link";
import Image from "next/image";
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
              <VStack style='items-center'>
                <IoCartOutline color='black' size={30}></IoCartOutline>
                <p>Carrello</p>
              </VStack>
            </Link>
          </HStack>
        </VStack>
      </nav>
      <Menu isVisible={isVisible} setVisible={setIsVisible}></Menu>
      <div className='fixed top-56 -right-2 justify-end w-full flex flex-row z-[99]'>
        <div className='bg-green-500 rounded-xl p-2'>
          <Link href='https://wa.me/3924818843'>
            <IoLogoWhatsapp size={65} color='white'></IoLogoWhatsapp>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
