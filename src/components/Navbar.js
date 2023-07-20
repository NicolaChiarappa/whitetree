import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Link from "next/link";
import Image from "next/image";
import {
  IoClose,
  IoMenuSharp,
  IoCartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

import Menu from "./menu";
import { useState } from "react";
const Navbar = ({ isStore = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <nav className='pt-7 sticky top-0 w-full bg-[#191919] h-[100px] z-50  '>
        <HStack style='w-full justify-between  px-10 h-fit '>
          <Link href='/'>
            <Image
              alt=''
              src='/tree.png'
              width={70}
              height={70}
              priority={true}
            ></Image>
          </Link>

          {isStore ? (
            <HStack style='w-1/3 justify-between items-center space-x-3  '>
              <Link href='/account' className=' '>
                <IoPersonCircleOutline
                  color='white'
                  size={40}
                ></IoPersonCircleOutline>
              </Link>
              <Link
                href='/cart'
                className=' flex flex-row justify-end items-center   w-fit'
              >
                <HStack style='w-fit   items-end justify-end '>
                  <HStack style='  w-10 h-11 relative  '>
                    <IoCartOutline size={40} color='white'></IoCartOutline>
                  </HStack>
                  <HStack style=' relative top-[-30px]  bg-white text-[#191919] text-lg px-3 rounded-full  justify-center items-center w-0 h-6 right-3'>
                    <p className='  text-center'>1</p>
                  </HStack>
                </HStack>
              </Link>
            </HStack>
          ) : (
            <button
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              {isVisible ? (
                <IoClose color='#ffffff' size={40}></IoClose>
              ) : (
                <IoMenuSharp color='#ffffff' size={40}></IoMenuSharp>
              )}
            </button>
          )}
        </HStack>
      </nav>
      <Menu isVisible={isVisible}></Menu>
    </>
  );
};

export default Navbar;
