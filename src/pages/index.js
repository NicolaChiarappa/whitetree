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
import { scrollTo, useRouter } from "next/router";

import catalogo from "../api/catalogo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import TagManager from "react-gtm-module";

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);
  const images = ["teen.png", "family.jpg"];
  const [element, setElement] = useState();
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>WhiteTree</title>
      </Head>
      <Navbar></Navbar>
      <VStack style=' max-md:h-[50vh] h-[90vh] relative justify-start  font-Cocon '>
        <div className='  max-md:h-[80vw] h-[60vh] w-full relative   top-0  '>
          <HStack style=' w-full z-0 absolute top-0 justify-center  opacity-100 max-md:h-[70vh]  h-[90vh]    '>
            <div className='w-full h-full md:hidden'>
              <Image
                src='/fogliesecche.webp'
                alt=''
                fill
                quality={100}
                className='object-cover  grayscale md:hidden relative '
                priority
              ></Image>
            </div>

            <Image
              layout='responsive'
              alt=''
              width={0}
              height={0}
              quality={100}
              sizes='(min-width: 768px) 75vw,  60vh'
              src='/fogliesecche.webp'
              className='max-md:hidden  grayscale md:object-cover relative'
            ></Image>
          </HStack>
          <VStack style='h-[70vh] justify-evenly relative text-white'>
            <HStack style='z-10   w-full   justify-evenly px-10 mt-14 space-x-8  items-center max-md:hidden '>
              <div className='w-[25vw] h-fit '>
                <Image
                  layout='responsive'
                  className={"relative object-cover"}
                  src={"/logo-redesign.webp"}
                  alt=''
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  quality={50}
                  priority
                ></Image>
              </div>
              <VStack style=' '>
                <h1 className='text-7xl md:text-9xl'>WhiteTree</h1>

                <h2 className=' z-10  text-4xl md:text-6xl text-white'>
                  Build your freedom
                </h2>
              </VStack>
            </HStack>

            <VStack style='z-10   w-full   justify-between items-center md:hidden '>
              <div className='max-md:w-[50vw]  '>
                <Image
                  layout='responsive'
                  className={"relative object-cover"}
                  src={"/logo-redesign.webp"}
                  alt=''
                  width={0}
                  height={0}
                  sizes={"100vw"}
                ></Image>
              </div>
              <h1 className='text-7xl md:text-9xl'>WhiteTree</h1>

              <h2 className=' z-10  text-4xl md:text-6xl text-white'>
                Build your freedom
              </h2>
            </VStack>
            <VStack style=' w-full  z-10  h-fit items-center md:mt-20 '>
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
        </div>
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
