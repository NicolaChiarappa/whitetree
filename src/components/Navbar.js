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

import { useRouter } from "next/router";

import Menu from "./menu";
import { useEffect, useState } from "react";
import { auth, currentUser, logout } from "@/app/firebase/auth";
import { getCart } from "@/app/firebase/database";

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
      <nav className='pt-7 sticky top-0 w-full bg-[#191919] h-[100px] z-50 font-Cocon '>
        <HStack style='w-full justify-between  px-10 h-fit '>
          <Link href='/'>
            <Image
              alt=''
              src='/logo-redesign.webp'
              width={70}
              height={70}
              priority={true}
            ></Image>
          </Link>

          {isStore ? (
            <HStack style='w-1/3 justify-between items-center space-x-3  md:w-1/6 '>
              <Link href='/account'>
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
                    <p className='  text-center'>
                      {isLoad ? cart.length : "0"}
                    </p>
                  </HStack>
                </HStack>
              </Link>
            </HStack>
          ) : (
            <HStack style='w-1/3 justify-between items-center space-x-3  md:w-1/6 '>
              <div
                onClick={() => {
                  if (
                    auth.currentUser != null &&
                    auth.currentUser.isAnonymous == true
                  ) {
                    logout().then(() => {
                      router.push("/account");
                    });
                  } else {
                    router.push("/account");
                  }
                }}
              >
                <IoPersonCircleOutline
                  color='white'
                  size={40}
                ></IoPersonCircleOutline>
              </div>
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
          )}
        </HStack>
      </nav>
      <Menu isVisible={isVisible}></Menu>
    </>
  );
};

export default Navbar;
