import Image from "next/image";
import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import { TypeAnimation } from "react-type-animation";
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

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);
  const images = ["teen.png", "family.jpg"];
  const [element, setElement] = useState();
  const [code, setCode] = useState();
  const router = useRouter();

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
      <VStack style=' max-md:h-[55vh] h-[90vh] relative justify-start  font-Cocon '>
        <HStack style=' w-full z-0 absolute top-0 justify-center  opacity-100 max-md:h-[55vh]  h-[90vh]    '>
          <div className='w-full h-full md:hidden'>
            <Image
              src='/hero1.png'
              alt=''
              fill
              quality={100}
              className='object-cover grayscale-[0%]  md:hidden relative '
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
            src='/hero1.png'
            className='max-md:hidden grayscale-[%]  md:object-cover relative'
          ></Image>
        </HStack>
        <VStack style='h-fit justify-evenly relative text-white'>
          <HStack style='z-10   w-full   justify-evenly px-10 mt-14 space-x-8  items-center max-md:hidden '>
            <VStack style=' '>
              <h1 className=' z-10  text-4xl md:text-8xl text-white'>
                Vesti le tue emozioni
              </h1>
            </VStack>
          </HStack>
          <VStack style='relative bottom-14 h-[55vh]  justify-center'>
            <VStack style='z-10   w-full   justify-between items-center md:hidden  '>
              <h1 className=' z-10  text-5xl  text-white  font-bold'>
                Vesti <br></br>le tue emozioni
              </h1>
            </VStack>
            <VStack style='mx-10 text-xl top-24 relative italic'>
              <p>
                Per ogni emozione una felpa, <br></br>per ogni felpa una poesia.
              </p>
              <Link href='/store'>
                <HStack style='items-center border justify-between rounded-xl px-5 py-2 w-fit mt-5'>
                  <p className='font-bold text-[1.7rem]'>E tu quale scegli?</p>
                </HStack>
              </Link>
            </VStack>
          </VStack>
          {/* <VStack style=' w-full  z-10  h-fit items-center md:mt-20 '>
              <HStack style='w-full justify-center font-extrabold '>
                <Link href='/store' scroll={false}>
                  <HStack style='rounded-full justify-center bg-white text-black text-center w-[70vw] md:w-fit text-xl px-4 py-2 md:text-2xl'>
                    <HStack style='items-center'>
                      <p>Scopri la nuova collezione</p>
                      <IoArrowForward size={40}></IoArrowForward>
                    </HStack>
                  </HStack>
                </Link>
              </HStack>
            </VStack> */}
        </VStack>
      </VStack>

      <VStack
        style='items-center pt-5 font-Cocon justify-start h-full '
        id='collezione'
      >
        <p className='text-white text-3xl  text-center   font-bold mt-10 px-10 md:text-6xl'>
          Le emozioni più indossate
        </p>
        <div className='text-white   max-md:text-[7vw] text-[7vh]  px-0 items-center   mb-14 relative grid-cols-1 grid md:grid-cols-2 '>
          <Card
            image='/martina.png'
            title={"Ricordo d'infanzia"}
            link={"/product/f/hoodies/3"}
          ></Card>

          <Card
            image='/martino.png'
            title={"Viaggio a levante"}
            link={"/product/m/hoodies/2"}
          ></Card>
          {/* <Card
            product={catalogo["products"]["hoodies"]["f"][1]}
            link={"/product/f/hoodies/1"}
          ></Card>
          <Card
            product={catalogo["products"]["hoodies"]["m"][2]}
            link={"/product/m/hoodies/2"}
          ></Card>
          <Card
            product={catalogo["products"]["hoodies"]["f"][3]}
            link={"/product/f/hoodies/3"}
          ></Card> */}
        </div>
        <VStack style='text-white text-2xl h-full w-full items-center'>
          <h3>Domande frequenti</h3>
          <Question
            domanda={"I pagamenti sono sicuri?"}
            risposta={"Si i pagamenti sono sicuri, sono processati da Stripe."}
          ></Question>
          <Question
            domanda={"Posso pagare alla consegna?"}
            risposta={
              "Si è sempre possibile pagare alla consegna, con un costo aggiuntivo di € 2"
            }
          ></Question>
          <Question
            domanda={"Posso fare un reso?"}
            risposta='Si è sempre possibile fare un reso. Basterà contattarci sui nostri canali.'
          ></Question>
          <Question
            domanda={"Quali sono i vostri contatti?"}
            risposta='Puoi contattarci su Whatsapp, via mail oppure sulla nostra pagina Instagram. Trovi tutti i link infondo alla pagina.'
          ></Question>
        </VStack>
        <VStack style=' text-white mb-10 text-xl text-center items-center w-5/6 rounded-xl shadow-lg shadow-black mx-2 px-5 '>
          <p>Inserisci il codice riportato sul retro della felpa.</p>
          <HStack style='items-center justify-around w-full'>
            <div className='relative w-36'>
              <MyImage src={"/logo_back.png"}></MyImage>
            </div>
            <input
              onChange={(e) => {
                setCode(e.target.value);
              }}
              maxLength={7}
              minLength={7}
              type='tel'
              placeholder='Il tuo codice'
              className='px-5 py-2 rounded-xl text-xl bg-black  h-fit w-48'
            />
          </HStack>
          <button
            className='bg-white text-black px-5 py-2 rounded-xl mb-5'
            onClick={() => {
              console.log(code);
              if (codici.includes(code)) {
                router.push("/sonetto/" + codici.indexOf(code));
              }
            }}
          >
            <p>Leggi la poesia</p>
          </button>
        </VStack>
        <Footer></Footer>
      </VStack>
    </>
  );
};

const Below = () => {
  return <VStack style=' relative border w-10 h-screen z-40 bg-white'></VStack>;
};

const Card = ({ title, image, link }) => {
  const router = useRouter();
  return (
    // <VStack style=' shadow-black  shadow-xl relative mt-16 items-center  max-md:w-[80vw] w-[60vh] rounded-xl h-fit basis1/3 md:mx-12 font-bold'>
    //   <EmblaCarousel slides={product["img"]}></EmblaCarousel>

    //   <VStack style='  text-white w-[80vw] md:w-[60vh]  px-3 md:text-2xl text-xl justify-between items-start py-3 space-y-3'>
    //     <p>{product.title}</p>
    //     <HStack style='justify-between  items-center w-full'>
    //       <VStack>
    //         <p className='line-through font-extralight opacity-40'>€50.00</p>
    //         <p>{"€ " + product.price.toFixed(2)}</p>
    //       </VStack>
    //       <Link
    //         href={link}
    //         className='bg-white h-10 text-black px-6 rounded-lg'
    //       >
    //         <HStack style='items-center h-full font-bold'>
    //           <p>Scopri</p>
    //         </HStack>
    //       </Link>
    //     </HStack>
    //   </VStack>
    // </VStack>
    <HStack
      style='justify-between w-full items-center mt-10'
      onclick={() => {
        router.push(link);
      }}
    >
      <VStack style='h-fit w-screen  mb-20 relative '>
        <HStack style=' absolute z-10 w-[90vw]  self-center   justify-center items-center -bottom-16 py-3 bg-[#191919] rounded-xl text-2xl text-white shadow-xl shadow-black  px-5 space-x-3'>
          <p>{title}</p>
          <button className='bg-transparent border  rounded-xl text-lg px-5 py-2 w-1/3'>
            Scopri
          </button>
        </HStack>
        <MyImage src={image}></MyImage>
      </VStack>
    </HStack>
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
