import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import Menu from "./menu";
import { useState } from "react";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <nav className='pt-7 sticky top-0 w-full bg-[#191919] h-[100px] z-50'>
        <HStack style='w-full justify-between  px-10 h-fit '>
          <Link href='/'>
            <Image alt='' src='/tree.png' width={70} height={70}></Image>
          </Link>

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
        </HStack>
      </nav>
      <Menu isVisible={isVisible}></Menu>
    </>
  );
};

export default Navbar;
