import { useState } from "react";
import HStack from "../Layout/HStack";
import Navbar from "../components/Navbar";
import {
  IoClose,
  IoMenuSharp,
  IoCartOutline,
  IoHeartOutline,
  IoTelescopeOutline,
} from "react-icons/io5";
import Link from "next/link";
import VStack from "../Layout/VStack";
import Image from "next/image";

const Store = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <VStack>
      <Navbar isStore={true}></Navbar>
      <VStack style='h-[45px] px-10 mt-0  sticky top-[100px] z-20 bg-[#191919] items-end  justify-center'>
        <button
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          {isMenu ? (
            <IoClose color='white' size={30}></IoClose>
          ) : (
            <IoMenuSharp color='white' size={30}></IoMenuSharp>
          )}
        </button>
      </VStack>
      <Menu isVisible={isMenu}></Menu>
      <VStack style={isMenu ? "h-[60vh] overflow-hidden " : ""}>
        <p className='text-white text-5xl '>Sei finito nel mio fottuto store</p>
      </VStack>
    </VStack>
  );
};

const Menu = ({ isVisible }) => {
  const [isMan, setIsMan] = useState(true);
  const [isWoman, setIsWoman] = useState(false);
  const [isKid, setIsKid] = useState(false);
  return (
    <VStack
      style={
        isVisible
          ? " fixed top-0 visible  w-screen backdrop-blur-lg z-10 text-white overflow-y-scroll h-screen pt-44 "
          : "hidden"
      }
    >
      <VStack style='items-center space-y-16 mb-12'>
        <HStack style='w-[75vw] justify-between'>
          <button
            onClick={() => {
              setIsMan(true);
              setIsKid(false);
              setIsWoman(false);
            }}
          >
            <VStack style='space-y-0'>
              <p className={isMan ? "font-semibold" : ""}>Uomo</p>
              <div
                className={
                  isMan
                    ? "border-solid border-[2px] border-white mt-2 rounded-2xl"
                    : "hidden"
                }
              ></div>
            </VStack>
          </button>
          <button
            onClick={() => {
              setIsMan(false);
              setIsKid(false);
              setIsWoman(true);
            }}
          >
            <VStack style='space-y-0'>
              <p className={isWoman ? "font-semibold" : ""}>Donna</p>
              <div
                className={
                  isWoman
                    ? "border-solid border-[2px] border-white mt-2 rounded-2xl"
                    : "hidden"
                }
              ></div>
            </VStack>
          </button>
          <button
            onClick={() => {
              setIsMan(false);
              setIsKid(true);
              setIsWoman(false);
            }}
          >
            <VStack style='space-y-0'>
              <p className={isKid ? "font-semibold" : ""}>Bambino</p>
              <div
                className={
                  isKid
                    ? "border-solid border-[2px] border-white mt-2 rounded-2xl"
                    : "hidden"
                }
              ></div>
            </VStack>
          </button>
        </HStack>
        <VStack style='h-full space-y-16 pb-36 font-bold text-2xl'>
          <Link href='/store'>
            <HStack style='items-center space-x-2'>
              <p>Collezione Nothing</p>
              <Image src='/tree.png' alt='' width={40} height={40}></Image>
            </HStack>
          </Link>
          <Link href='/store'>
            <HStack style='space-x-2 items-center'>
              <p>Collezione Science</p>
              <IoTelescopeOutline size={35} color='white'></IoTelescopeOutline>
            </HStack>
          </Link>
          <Link href='/store'>
            <HStack style='items-center space-x-2'>
              <p>Collezione inLove</p>
              <IoHeartOutline size={35}></IoHeartOutline>
            </HStack>
          </Link>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default Store;
