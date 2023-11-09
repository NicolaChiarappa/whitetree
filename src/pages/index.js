import Image from "next/image";
import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import { TypeAnimation } from "react-type-animation";

import {
  FaPercent,
  FaShippingFast,
  FaShieldAlt,
  FaCreditCard,
  FaBackspace,
  FaFastBackward,
} from "react-icons/fa";

import { TbTruckReturn } from "react-icons/tb";
import {
  IoArrowDown,
  IoCaretDownCircleOutline,
  IoArrowForward,
  IoCaretUpCircleOutline,
} from "react-icons/io5";
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
import MyImage from "../components/MyImage";
import codici from "../api/codici";
import { easeOut, motion, useInView } from "framer-motion";
import MHStack from "../Layout/MHStack";
import MVStack from "../Layout/MVStack";

const MotionHstack = motion(MHStack);
const MotionVstack = motion(MVStack);

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);
  const images = ["teen.png", "family.jpg"];
  const [element, setElement] = useState();
  const [code, setCode] = useState();
  const router = useRouter();

  const reverse = (array) => {
    array = array.reverse();
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>WhiteTree</title>
        <meta
          name='description'
          content='WhiteTree. Build your freedom. La tua felpa, per raccontare le tue emozioni. Felpe made in Italy stampate a mano'
        />
      </Head>
      <Navbar></Navbar>

      <VStack style=' w-full relative font-Cocon'>
        <motion.div
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className='w-full h-[62vh] relative
         bg-black text-white'
        >
          <Image
            fill
            alt=''
            className='object-cover bottom-20 relative opacity-60'
            src={"/michelahero.png"}
          ></Image>
        </motion.div>
        <VStack style='absolute  justify-end pb-11 z-20 self-end w-full items-center h-[65vh] text-white text-7xl'>
          <motion.p
            animate={{
              opacity: [0, 1],
              transition: {
                delay: 1.2,
              },
            }}
          >
            Novità
          </motion.p>
          <motion.p
            animate={{
              opacity: [0, 1],
              transition: {
                delay: 1.2,
              },
            }}
            className='text-lg'
          >
            Scopri la nuova collezione
          </motion.p>

          <motion.button
            onClick={() => {
              router.push("/store");
            }}
            animate={{
              opacity: [0, 1],
              transition: {
                delay: 1.2,
              },
            }}
            className='text-lg bg-white text-black px-2 rounded-xl'
          >
            Acquista ora
          </motion.button>
        </VStack>
        <VStack style='w-full text-2xl mt-10'>
          <HStack style='w-full h-44 '>
            <Card
              link='/about/#sconto'
              stile='bg-slate-200 w-1/2'
              text='10% di sconto sul primo ordine'
              icon={<FaPercent size={70}></FaPercent>}
            ></Card>

            <Card
              link='/about/#spedizione'
              stile='bg-orange-200 w-1/2'
              text='Spedizione gratuita'
              icon={<FaShippingFast size={70}></FaShippingFast>}
            />
          </HStack>
          <HStack style='w-full justify-center'>
            <Card
              link='/about/#pagamenti'
              stile='bg-blue-200'
              text='Pagamenti sicuri con carta di credito, Apple Pay e Google Pay'
              icon={<FaCreditCard size={70}></FaCreditCard>}
            ></Card>
          </HStack>
          <HStack style='w-full h-44'>
            <Card
              link='/about#spedizione'
              stile='w-1/2 bg-green-300'
              text='Disponibile pagamento alla consegna'
              icon={<FaShieldAlt size={70}></FaShieldAlt>}
            />
            <Card
              link='/about/#reso'
              text='Reso facile e veloce'
              icon={<TbTruckReturn size={70}></TbTruckReturn>}
            ></Card>
          </HStack>
        </VStack>

        <VStack style='mt-20 text-6xl text-center w-full justify-center px-10'>
          <h2>Vesti le tue emozioni</h2>
          <h3 className='text-2xl mt-10'>
            {" "}
            Per ogni emozione una felpa, per ogni felpa una poesia.
          </h3>
        </VStack>
        <VStack
          style='relative w-full mt-14 bg-black'
          onClick={() => {
            localStorage.setItem("type", "Felpe");
            router.push("/store");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/martina.png"}
            ></Image>
          </div>
          <HStack style='absolute top-0 h-full py-8 w-full justify-start text-6xl items-end px-10 text-white'>
            Felpe
          </HStack>
        </VStack>
        <VStack
          style='relative w-full  bg-black'
          onClick={() => {
            localStorage.setItem("type", "Maglie");
            router.push("/store");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/maglie/bacio_m_1.webp"}
            ></Image>
          </div>
          <HStack style='absolute top-0 py-8 h-full w-full justify-start text-6xl items-end px-10 text-white'>
            Maglie
          </HStack>
        </VStack>
        <VStack
          style='relative w-full  bg-black'
          onClick={() => {
            localStorage.setItem("gender", "bambino");
            router.push("/store");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/maglie/chess_k_1.webp"}
            ></Image>
          </div>
          <HStack style='absolute top-0 py-8 h-full w-full justify-start text-6xl items-end px-10 text-white'>
            Kids collection
          </HStack>
        </VStack>
        <VStack style='bg-white mt-10'></VStack>
        {/* <VStack
          style='relative w-full  bg-black'
          onClick={() => {
            router.push("/idea");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/tree_white.jpg"}
            ></Image>
          </div>
          <HStack style='absolute top-0 py-8 h-full w-full justify-start text-6xl items-end px-10 text-white'>
            Chi siamo
          </HStack>
        </VStack> */}
        <VStack
          style='relative w-full  bg-black'
          onClick={() => {
            router.push("/about");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/madeinitaly.png"}
            ></Image>
          </div>
          <HStack style='absolute top-0 py-8 h-full w-full justify-start text-6xl items-end px-10 text-white'>
            Come lavoriamo
          </HStack>
        </VStack>
        <VStack
          style='relative w-full  bg-black'
          onClick={() => {
            router.push("/poesia");
          }}
        >
          <div className='w-full h-[45vh]'>
            <Image
              fill
              alt=''
              className='object-cover bottom-20 relative opacity-60'
              src={"/poesia.jpg"}
            ></Image>
          </div>
          <HStack style='absolute top-0 py-8 h-full w-full justify-start text-6xl items-end px-10 text-white'>
            Poesia
          </HStack>
        </VStack>
      </VStack>
      <Footer></Footer>
    </>
  );
};

const Card = ({ text, icon, stile, link }) => {
  const MotionVstack = motion(MVStack);
  const ref = useRef(null);
  const router = useRouter();

  const inView = useInView(ref, { once: true });

  return (
    <MotionVstack
      onclick={() => {
        router.push(link);
      }}
      stile={
        "  items-center h-full   text-center justify-center  px-5 py-2 " + stile
      }
    >
      <motion.div
        className='flex flex-col items-center h-full'
        initial={{ opacity: 0, x: -100 }}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { duration: 0.2 } }
            : { opacity: 0 }
        }
        ref={ref}
      >
        {icon}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={
            inView
              ? { opacity: 1, x: 0, transition: { duration: 0.2 } }
              : { opacity: 0 }
          }
          ref={ref}
        >
          {text}
        </motion.p>
      </motion.div>
    </MotionVstack>
  );
};

const Question = ({ domanda, risposta }) => {
  const [isopen, setIsopen] = useState();
  return (
    <VStack
      style='w-5/6 border text-xl rounded-xl  py-1 space-y-5 mb-10'
      onClick={() => {
        setIsopen(!isopen);
      }}
    >
      <HStack style='w-full px-2 h-fit items-center text-2xl justify-between '>
        <p>{domanda}</p>
        <button className='mx-5'>
          {isopen ? (
            <IoCaretUpCircleOutline size={30}></IoCaretUpCircleOutline>
          ) : (
            <IoCaretDownCircleOutline size={30}></IoCaretDownCircleOutline>
          )}
        </button>
      </HStack>
      <p className={isopen ? "text-xl px-2" : "hidden"}>{risposta}</p>
    </VStack>
  );
};

export { Card };
export default Home;
