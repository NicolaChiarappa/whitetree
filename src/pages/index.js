import Image from "next/image";
import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import { TypeAnimation } from "react-type-animation";
import { IoArrowDown } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Navbar from "../components/Navbar";

const Home = () => {
  const images = ["teen.png", "family.jpg"];

  return (
    <>
      <Navbar></Navbar>
      {/* <VStack style='justify-between  px-5 pt-5   text-white max-md:text-[8vw] text-8xl md:w-4/5  leading-tight font-extrabold items-center  font-miofont overflow-hidden   relative'>
        <div className='relative top-0   w-[80vw] h-[80vw]  '>
          <Image
            src={"/tree.png"}
            alt=''
            fill
            className='z-0 relative top-0'
          ></Image>
          <Image
            alt=''
            fill
            src={images[image]}
            className='z-10 absolute top-0 '
          ></Image>
        </div>
        <p className=' z-10'>
          <TypeAnimation
            sequence={["Once upon a time, under the white tree..."]}
            speed={1}
          ></TypeAnimation>
        </p>
      </VStack> */}
      <div className='  h-[80vw] w-full relative   top-0  '>
        <HStack style=' z-0 absolute top-0 justify-center  opacity-25 h-[70vh] mt-3'>
          <Image src='/family.jpg' alt='' className='object-cover'></Image>
        </HStack>
        <div
          className=' ml-10   z-10  relative top-[15vw]  w-[80vw] h-fit   font-miofont text-white max-md:text-[12vw] text-8xl md:w-4/5  leading-tight font-extrabold '
          id='herotext'
        >
          <p className=' z-10'>
            <TypeAnimation
              sequence={["Once upon a time, under the white tree..."]}
              speed={1}
            ></TypeAnimation>
          </p>
        </div>
      </div>
      <HStack style='relative justify-center w-full h-fit'></HStack>

      <VStack style=' w-full relative top-0 z-10 mt-10 h-fit'>
        <HStack style='w-full justify-center font-extrabold font-miofont'>
          <div className='rounded-full bg-white text-black text-center w-[70vw] text-xl px-4 py-2'>
            <Link href='#collezione' scroll={false}>
              <HStack style='items-center'>
                <p>Scopri la nuova collezione</p>
                <IoArrowDown size={40}></IoArrowDown>
              </HStack>
            </Link>
          </div>
        </HStack>
      </VStack>

      <VStack style='items-center pt-40 ' id='collezione'>
        <p className='text-white text-3xl font-miofont font-bold mt-10 px-10'>
          La nostra collezione invernale
        </p>
        <div className='text-white   max-md:text-[7vw] text-[7vh]  px-5 items-center font-miofont mb-14 relative grid-cols-1 grid md:grid-cols-2 '>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </VStack>
    </>
  );
};

const Card = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const images = ["/teen.png", "/Front-black.png"];

  return (
    <VStack style=' shadow-black  shadow-xl relative mt-16 items-center  max-md:w-[80vw] w-[60vh] rounded-xl h-fit basis1/3 md:mx-12'>
      <EmblaCarousel slides={images}></EmblaCarousel>

      <VStack style='  text-white w-[80vw] md:w-[60vh]  px-3 text-lg justify-between items-start py-3 '>
        <p>Titolo maglia</p>
        <HStack style='justify-between  items-center w-full'>
          <p>€ 35</p>
          <Link href='' className='bg-white h-10 text-black px-6 rounded-lg'>
            <HStack style='items-center h-full font-medium'>
              <p>Vai allo store</p>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export { Card };
export default Home;
