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
import { currentUser } from "@/app/firebase/auth";
import { ospite } from "@/app/firebase/auth";
import { scrollTo } from "next/router";

import catalogo from "../api/catalogo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);
  const images = ["teen.png", "family.jpg"];
  const [element, setElement] = useState();
  useEffect(() => {}, []);

  return (
    <>
      <Navbar></Navbar>
      <VStack style=' max-md:h-[70vh] h-[90vh] relative justify-start  font-Cocon'>
        <div className='  max-md:h-[80vw] h-[60vh] w-full relative   top-0  '>
          <HStack style=' w-full z-0 absolute top-0 justify-center  opacity-95 max-md:h-[70vh] h-[90vh] mt-3 '>
            <Image
              src='/palloncino_modella.png'
              alt=''
              className='max-md:object-cover object-cover grayscale md:hidden'
              fill
              priority
            ></Image>
            <Image
              src='/herodesktop.png'
              alt=''
              className='max-md:hidden object-cover grayscale md:object-cover'
              fill
            ></Image>
          </HStack>
          <div
            className=' ml-10   z-10  relative top-[15vw]  w-[80vw] h-fit    text-white max-md:text-[12vw] text-8xl md:w-4/5  leading-tight font-extrabold '
            id='herotext'
          >
            <p className=' z-10 opacity-50'>
              Once upon a time
              <br></br>under the white tree
            </p>
          </div>
        </div>

        <VStack style=' w-full relative top-16 z-10 mt-10 h-fit items-center '>
          <HStack style='w-full justify-center font-extrabold '>
            <Link href='#collezione' scroll={false}>
              <HStack style='rounded-full justify-center bg-white text-black text-center w-[70vw] md:w-fit text-xl px-4 py-2 md:text-2xl'>
                <HStack style='items-center'>
                  <p>Scopri la nuova collezione</p>
                  <IoArrowDown size={40}></IoArrowDown>
                </HStack>
              </HStack>
            </Link>
          </HStack>
        </VStack>
      </VStack>

      <VStack style='items-center pt-40 font-Cocon' id='collezione'>
        <p className='text-white text-3xl   font-bold mt-10 px-10 md:text-6xl'>
          La nostra collezione invernale
        </p>
        <div className='text-white   max-md:text-[7vw] text-[7vh]  px-5 items-center   mb-14 relative grid-cols-1 grid md:grid-cols-2 '>
          <Card product={catalogo["products"]["hoodies"]["f"][1]}></Card>
          <Card product={catalogo["products"]["maglie"]["f"][3]}></Card>
          <Card product={catalogo["products"]["hoodies"]["m"][2]}></Card>
          <Card product={catalogo["products"]["hoodies"]["bambino"][8]}></Card>
          <Card product={catalogo["products"]["hoodies"]["m"][11]}></Card>
          <Card product={catalogo["products"]["maglie"]["f"][9]}></Card>
        </div>
        <Footer></Footer>
      </VStack>
    </>
  );
};

const Card = ({ product }) => {
  return (
    <VStack style=' shadow-black  shadow-xl relative mt-16 items-center  max-md:w-[80vw] w-[60vh] rounded-xl h-fit basis1/3 md:mx-12 font-bold'>
      <EmblaCarousel slides={product["img"]}></EmblaCarousel>

      <VStack style='  text-white w-[80vw] md:w-[60vh]  px-3 md:text-2xl text-xl justify-between items-start py-3 space-y-3'>
        <p>{product.title}</p>
        <HStack style='justify-between  items-center w-full'>
          <p>{"€ " + product.price.toFixed(2)}</p>
          <Link
            href='/store'
            className='bg-white h-10 text-black px-6 rounded-lg'
          >
            <HStack style='items-center h-full font-bold'>
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
