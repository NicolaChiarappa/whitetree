import { useEffect, useState } from "react";
import HStack from "../Layout/HStack";
import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoClose,
  IoMenuSharp,
  IoOptionsOutline,
  IoCartOutline,
  IoHeartOutline,
  IoTelescopeOutline,
} from "react-icons/io5";
import Link from "next/link";
import VStack from "../Layout/VStack";
import Image from "next/image";
import catalogo from "../api/catalogo";
import { auth, currentUser } from "@/app/firebase/auth";
import { ospite } from "@/app/firebase/auth";
import Head from "next/head";
import { getCart } from "@/app/firebase/database";

const Store = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [product, setProduct] = useState("Felpe");
  const [sesso, setSesso] = useState();

  const felpe = catalogo["products"]["hoodies"];
  useEffect(() => {
    currentUser().then((res) => {
      if (res == null) {
        ospite().then(() => {
          setSesso(
            localStorage.getItem("gender") != null
              ? localStorage.getItem("gender")
              : "uomo"
          );
          setIsLoad(true);
        });
      } else {
        setSesso(
          localStorage.getItem("gender") != null
            ? localStorage.getItem("gender")
            : "uomo"
        );
        setIsLoad(true);

        console.log("sono gia dentro");
      }
    });
  }, []);

  return isLoad ? (
    <>
      <Head>
        <link rel='preconnect' href='https://whitetree-a8d34.firebaseapp.com' />
      </Head>
      <VStack>
        <Navbar isStore={true}></Navbar>
        <HStack style=' text-white max-md:text-2xl md:text-4xl mt-10 w-full justify-center space-x-10 font-extrabold z-20'>
          <h2>{product + " da " + sesso}</h2>
          <button
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          >
            {isMenu ? (
              <IoClose color='white' size={30} />
            ) : (
              <IoOptionsOutline color='white' size={30} />
            )}
          </button>
        </HStack>

        <Menu
          sesso={sesso}
          isVisible={isMenu}
          fun={setIsMenu}
          setGender={setSesso}
          setType={setProduct}
          type={product}
          close={() => {
            setIsMenu(false);
          }}
        ></Menu>
        <VStack>
          <div className='grid-cols-2 grid  mt-6 md:grid-cols-3 md:mx-10'>
            {felpe[
              sesso == "uomo" ? "m" : sesso == "donna" ? "f" : "bambino"
            ].map((e, index) => {
              return (
                <CardDrawer
                  pos={index}
                  key={e.title}
                  img={e.img[0]}
                  title={e.title}
                  price={e.price}
                  gender={sesso == "uomo" ? "m" : sesso == "donna" ? "f" : "k"}
                  type={product == "Felpe" ? "hoodies" : "maglie"}
                ></CardDrawer>
              );
            })}
          </div>
        </VStack>
      </VStack>
    </>
  ) : (
    <></>
  );
};

const CardDrawer = ({ img, title, price, pos, gender, type }) => {
  return (
    <Link href={"/product/" + gender + "/" + type + "/" + pos}>
      <VStack style=' shadow-black  shadow-xl relative  items-center w-[45vw] rounded-xl mx-2 mb-10 md:w-[30vw]'>
        <div className='w-[45vw] h-[45vw] md:w-[30vw] md:h-[30vw] relative'>
          <Image
            src={img}
            alt=''
            fill
            className='object-cover'
            priority
            quality={50}
          />
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

const Menu = ({ isVisible, fun, setGender, setType, type, close, sesso }) => {
  const [isMan, setIsMan] = useState(sesso == "uomo" ? true : false);
  const [isWoman, setIsWoman] = useState(sesso == "donna" ? true : false);
  const [isKid, setIsKid] = useState(sesso == "bambino" ? true : false);
  useEffect(() => {
    console.log(localStorage.getItem("gender"));
  }, []);
  return (
    <VStack
      onClick={() => {
        close();
      }}
      style={
        isVisible
          ? " fixed top-5 visible  w-screen backdrop-blur-lg z-10 text-white overflow-y-scroll h-screen pt-44 "
          : "hidden"
      }
    >
      <VStack style='items-center space-y-16 mb-12  '>
        <HStack style='w-[75vw] justify-between md:w-[60vw] z-20 relative'>
          <button
            onClick={() => {
              setIsMan(true);
              setIsKid(false);
              setIsWoman(false);
              setGender("uomo");
              localStorage.setItem("gender", "uomo");
            }}
          >
            <VStack style='space-y-0 '>
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
              setGender("donna");
              localStorage.setItem("gender", "donna");
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
              setGender("bambino");
              localStorage.setItem("gender", "bambino");
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
            className='z-20'
            onClick={() => {
              setType("Felpe");
              fun(false);
            }}
          >
            <VStack style=' '>
              <HStack style='items-center space-x-2  justify-center'>
                <p>Felpe</p>
                <Image
                  src='/hoodie-sample.webp'
                  alt=''
                  width={40}
                  height={40}
                ></Image>
              </HStack>
              <div
                className={
                  type == "Felpe"
                    ? "border-solid border-[2px] border-white mt-2 rounded-2xl"
                    : "hidden"
                }
              ></div>
            </VStack>
          </button>

          <button
            className='z-20'
            onClick={() => {
              setType("Maglie");
              fun(false);
            }}
          >
            <VStack>
              <HStack style='items-center space-x-2  justify-center'>
                <p>Maglie</p>
                <Image
                  src='/tshirt-sample.webp'
                  alt=''
                  width={40}
                  height={40}
                ></Image>
              </HStack>
              <div
                className={
                  type == "Maglie"
                    ? "border-solid border-[2px] border-white mt-2 rounded-2xl"
                    : "hidden"
                }
              ></div>
            </VStack>
          </button>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default Store;
