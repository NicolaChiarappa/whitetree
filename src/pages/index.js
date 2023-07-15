import Image from "next/image";
import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <VStack style='justify-between  px-5 pt-5 h-[70vh] text-white text-[15vw] leading-tight font-extrabold items-center  font-miofont '>
        <p>
          Once upon a time,
          <br></br>
          under the white tree...
        </p>
        <div className='rounded-full bg-white text-black text-center w-fit text-4xl px-4 py-2'>
          <Link href='#collezione' scroll={false}>
            Scopri
          </Link>
        </div>
      </VStack>
      <VStack
        id='collezione'
        style='text-white h-screen pt-40 text-[7vw] px-5 items-center font-miofont'
      >
        <p>La nostra collezione invernale</p>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </VStack>
    </>
  );
};

const Card = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const images = ["/teen.png", "/Front-black.png"];

  return (
    <VStack style=' shadow-black  shadow-xl relative mt-16 items-center w-[80vw] rounded-xl'>
      <EmblaCarousel slides={images}></EmblaCarousel>

      <VStack style='  text-white w-[80vw]  px-3 text-[5vw] justify-between items-start py-3'>
        <p>Titolo maglia</p>
        <HStack style='justify-between  items-center w-full'>
          <p>€ 35</p>
          <Link href='' className='bg-white h-10 text-black px-6 rounded-lg'>
            <HStack style='items-center h-full'>
              <p>Vai allo store</p>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
