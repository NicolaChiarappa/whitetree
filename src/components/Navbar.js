import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoMenuSharp, IoCartOutline } from "react-icons/io5";

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
            <Link href='/cart'>
              <VStack style='justify-center h-full'>
                <IoCartOutline color='#ffffff' size={40}></IoCartOutline>
              </VStack>
            </Link>
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
