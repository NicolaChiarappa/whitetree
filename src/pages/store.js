import { useState } from "react";
import HStack from "../Layout/HStack";
import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import useEmblaCarousel from "embla-carousel-react";
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
import catalogo from "../api/catalogo";

const Store = () => {
  const [isMenu, setIsMenu] = useState(false);
  const felpe = catalogo["products"]["felpe"];

  return (
    <VStack>
      <Navbar isStore={true}></Navbar>
      <VStack style='h-[45px] px-10 mt-0  sticky top-[100px] z-20 bg-[#191919] items-end  justify-center '>
        <button
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          {isMenu ? (
            <IoClose color='white' size={30} />
          ) : (
            <IoMenuSharp color='white' size={30} />
          )}
        </button>
      </VStack>
      <Menu isVisible={isMenu} fun={setIsMenu}></Menu>
      <VStack>
        <div className='grid-cols-2 grid  mt-6 md:grid-cols-3 md:mx-10'>
          {felpe.map((e, index) => {
            return (
              <CardDrawer
                pos={index}
                key={e.title}
                img={e.img[0]}
                title={e.title}
                price={e.price}
              ></CardDrawer>
            );
          })}
        </div>
      </VStack>
    </VStack>
  );
};

const CardDrawer = ({ img, title, price, pos }) => {
  return (
    <Link href={"/product/" + pos}>
      <VStack style=' shadow-black  shadow-xl relative  items-center w-[45vw] rounded-xl mx-2 mb-10 md:w-[30vw]'>
        <div className='w-[45vw] h-[45vw] md:w-[30vw] md:h-[30vw] relative'>
          <Image src={img} alt='' fill />
        </div>
        <VStack style='  text-white w-[45vw] md:w-[30vw] px-3 text-xl justify-between items-center py-3 '>
          <p>{title}</p>
          <HStack style='justify-center w-full font-bold'>
            <p>{"€ " + price}</p>
          </HStack>
        </VStack>
      </VStack>
    </Link>
  );
};

const Menu = ({ isVisible, fun }) => {
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
        <HStack style='w-[75vw] justify-between md:w-[60vw]'>
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
        <VStack style='h-full space-y-16 pb-36 font-bold text-2xl justify-center'>
          <button
            onClick={() => {
              fun(false);
            }}
          >
            <HStack style='items-center space-x-2  justify-center'>
              <p>Felpe</p>
              <Image
                src='/hoodie-sample.png'
                alt=''
                width={40}
                height={40}
              ></Image>
            </HStack>
          </button>
          <Link href='/store'>
            <HStack style='space-x-2 items-center justify-center'>
              <p>T-Shirt</p>
              <Image
                src='/tshirt-sample.png'
                alt=''
                width={40}
                height={40}
              ></Image>
            </HStack>
          </Link>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default Store;
