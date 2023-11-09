import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  IoBulbOutline,
  IoPeopleCircleOutline,
  IoCartOutline,
  IoChatbubbles,
  IoChatbubblesOutline,
  IoClose,
  IoLogoWhatsapp,
} from "react-icons/io5";
import MyImage from "./MyImage";
import { useState } from "react";
const Menu = ({ isVisible, setVisible }) => {
  const stile = isVisible ? " " : " hidden";
  const MotionVstack = motion(VStack);
  const menuvar = {
    open: {
      background: "black",
      height: "100vh",
      color: "white",

      x: 0,
      transition: {
        bounce: 0.2,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: -700,

      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
  };
  const itemvar = {
    open: {
      opacity: 1,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5,
      },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 1 } },
  };
  return (
    // <VStack
    //   style={
    //     "h-screen backdrop-blur-md fixed overflow-y-scroll top-0 w-full z-20 font-Cocon bg-black" +
    //     stile
    //   }
    // >
    //   <HStack style='space-x-8 w-full h-fit items-center justify-center mt-[180px]'>
    //     <Link
    //       href=''
    //       className='bg-transparent border rounded-xl text-white text-xl py-2 px-5'
    //     >
    //       Accedi
    //     </Link>
    //     <p className='text-white'>oppure</p>
    //     <Link href='' className='bg-white border rounded-xl text-xl py-2 px-5'>
    //       Iscriviti
    //     </Link>
    //   </HStack>
    //   <VStack style='mt-5 text-white font-semibold text-4xl items-center justify-between h-[55vh] md:h-[35vh]'>
    //     <Link
    //       href='/store'
    //       onClick={() => [localStorage.setItem("type", "Felpe")]}
    //     >
    //       <HStack style='items-center space-x-3'>
    //         <div className='h-10 w-10 relative'>
    //           <MyImage src='/hoodie-sample.png'></MyImage>
    //         </div>
    //         <p>{"Felpe"}</p>
    //       </HStack>
    //     </Link>
    //     <Link
    //       href='/store'
    //       onClick={() => [localStorage.setItem("type", "Maglie")]}
    //     >
    //       <HStack style='items-center space-x-3'>
    //         <div className='h-10 w-1 relative'>
    //           <MyImage src='/tshirt-sample.png'></MyImage>
    //         </div>

    //         <p>{"Maglie"}</p>
    //       </HStack>
    //     </Link>

    //     <Link href='' className='mt-10'>
    //       <HStack>
    //         <IoChatbubblesOutline></IoChatbubblesOutline>
    //         <p>{"La poesia"}</p>
    //       </HStack>
    //     </Link>
    //     <Link href='/idea'>
    //       <HStack>
    //         <IoBulbOutline></IoBulbOutline>
    //         <p>{"L'idea"}</p>
    //       </HStack>
    //     </Link>
    //     <Link href=''>
    //       <HStack>
    //         <IoChatbubblesOutline></IoChatbubblesOutline>
    //         <p>{"Contatti"}</p>
    //       </HStack>
    //     </Link>
    //   </VStack>
    // </VStack>
    <motion.div
      initial='closed'
      variants={menuvar}
      animate={isVisible ? "open" : "closed"}
      className={
        " top-0 text-white z-[51] h-screen bg-black w-5/6 font-Cocon text-4xl px-10 space-y-12 fixed flex flex-col"
      }
    >
      <HStack style='w-full justify-end px-10 top-12 relative'>
        <button
          onClick={() => {
            setVisible(false);
          }}
          className=''
        >
          <IoClose size={40}></IoClose>
        </button>
      </HStack>

      <motion.div variants={itemvar}>
        <Link href='/store' onClick={() => {}}>
          Felpe
        </Link>
      </motion.div>

      <motion.div variants={itemvar}>
        <Link href='/store' onClick={() => {}}>
          Maglie
        </Link>
      </motion.div>

      <motion.div variants={itemvar}>
        <Link href='/store' onClick={() => {}}>
          Poesia
        </Link>
      </motion.div>

      <motion.div variants={itemvar}>
        <Link href='/store' onClick={() => {}}>
          Idea
        </Link>
      </motion.div>

      <motion.div variants={itemvar}>
        <Link href='/store' onClick={() => {}}>
          Contatti
        </Link>
      </motion.div>

      <motion.div variants={itemvar}>
        <VStack style='justify-end h-max text-xl items-end space-y-3'>
          <Link href='/account'>Accedi</Link>
          <Link href='/register '>Crea account</Link>
        </VStack>
      </motion.div>
      <motion.div variants={itemvar}>
        <VStack style='justify-end h-max text-xl items-end space-y-3'>
          <button>
            <IoLogoWhatsapp size={60}></IoLogoWhatsapp>
          </button>
        </VStack>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
