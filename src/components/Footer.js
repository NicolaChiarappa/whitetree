import React from "react";
import HStack from "../Layout/HStack";
import Image from "next/image";
import VStack from "../Layout/VStack";
import { IoLogoWhatsapp, IoMail, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <HStack style='h-fit w-full py-2 px-10 bg-black relative  text-base text-white items-center justify-between font-bold font-Cocon'>
      <VStack style='justify-between space-y-2 items-center'>
        <Image
          width={35}
          height={30}
          src='/logo-redesign.webp'
          alt=''
          className=' w-fit'
        ></Image>
        <p className=''>WhiteTree</p>
      </VStack>
      <VStack style='items-center w-full'>
        <HStack style=' w-3/4 justify-around'>
          <a href='mailto: nicolachiarappa2001@gmail.com'>
            <IoMail size={25}></IoMail>
          </a>

          <a href='https://wa.me/3924818843'>
            <IoLogoWhatsapp size={25}></IoLogoWhatsapp>
          </a>
          <a href='https://www.instagram.com/whitetree.dress/'>
            <IoLogoInstagram size={25}></IoLogoInstagram>
          </a>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;
