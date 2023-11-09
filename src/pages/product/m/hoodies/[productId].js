import VStack from "../../../../Layout/VStack";
import EmblaCarousel from "src/components/EmblaCarousel";
import Navbar from "../../../../components/Navbar";
import HStack from "../../../../Layout/HStack";
import { useEffect, useState } from "react";
import {
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoAirplane,
  IoHandLeftOutline,
  IoCartOutline,
} from "react-icons/io5";

import { motion } from "framer-motion";

import { GiAirplaneDeparture } from "react-icons/gi";
import { useRouter } from "next/router";
import catalogo from "@/src/api/catalogo";
import { currentUser, ospite } from "@/app/firebase/auth";
import { addCart } from "@/app/firebase/database";
import Image from "next/image";
import Head from "next/head";
import MyImage from "@/src/components/MyImage";
import ReactPlayer from "react-player";
import Footer from "@/src/components/Footer";

const Product = () => {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [productId, setProductId] = useState(0);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const images = router.isReady
    ? catalogo["products"][router.asPath.slice(11, 18)]["m"][productId]["img"]
    : [];
  const [user, setUser] = useState();
  useEffect(() => {
    currentUser().then((res) => {
      if (res == null) {
        console.log("nessun account");
        ospite().then((res) => {
          setUser(res);
        });
      } else {
        setUser(res);
      }
    });
  }, []);

  useEffect(() => {
    if (router.isReady) {
      setProductId(router.query.productId);
      console.log(router.asPath);
    }
  }, [router.isReady]);

  return user != null ? (
    <>
      <Head>
        <title>
          {"WhiteTree-" +
            catalogo["products"][router.asPath.slice(11, 18)][router.asPath[9]][
              productId
            ]["title"]}
        </title>
      </Head>
      <Navbar isStore={true}></Navbar>
      <VStack style='text-black items-center mt-10 mb-96 font-Cocon'>
        <h1 className='font-bold text-4xl md:hidden mb-10'>
          {router.isReady
            ? catalogo["products"][router.asPath.slice(11, 18)][
                router.asPath[9]
              ][productId]["title"]
            : ""}
        </h1>
        <HStack style='justify-between space-x- w-full px-10  '>
          <HStack
            style='shadow-xl shadow-black rounded-xl 
            '
          >
            <EmblaCarousel slides={images}></EmblaCarousel>
          </HStack>
          <VStack style=' justify-center space-y-10 w-full  items-start ml-14'>
            <h1 className='font-bold text-8xl max-md:hidden'>
              {router.isReady
                ? catalogo["products"][router.asPath.slice(11, 18)][
                    router.asPath[9]
                  ][productId]["title"]
                : ""}
            </h1>
            <SizeStack
              stile={"max-md:hidden w-1/2    "}
              size={size}
              setSize={setSize}
            ></SizeStack>
            <HStack style='text-black text-2xl relative max-md:hidden w-1/3 space-x-5  justify-start  items-center'>
              <button
                className='w-10 h-10 '
                onClick={
                  quantity > 0
                    ? () => {
                        setQuantity(quantity - 1);
                      }
                    : () => {}
                }
              >
                <IoRemoveCircleOutline
                  size={40}
                  color={quantity == 0 ? "gray" : "black"}
                ></IoRemoveCircleOutline>
              </button>
              <p>{quantity}</p>
              <button
                className='w-10 h-10  '
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <IoAddCircleOutline size={40}></IoAddCircleOutline>
              </button>
            </HStack>
            <HStack style=' w-10 h-10 max-md:hidden text-4xl font-bold'>
              {"€" +
                (
                  catalogo["products"]["hoodies"]["m"][productId]["price"] *
                  quantity
                ).toFixed(2)}
            </HStack>

            <HStack style='w-full  h-20 px-10 justify-center mt-6 max-md:hidden '>
              <button
                className={
                  added
                    ? "bg-gray-400 text-black w-3/4 rounded-xl shadow-xl shadow-black font-bold"
                    : "bg-white text-black w-3/4 rounded-xl shadow-xl shadow-black font-bold"
                }
                onClick={
                  size == ""
                    ? () => {
                        alert("Selezionare una taglia");
                      }
                    : () => {
                        addCart(user.uid, {
                          type: "Felpa",
                          gender: "m",
                          price:
                            catalogo["products"]["hoodies"]["m"][productId][
                              "price"
                            ],
                          image:
                            catalogo["products"]["hoodies"]["m"][productId][
                              "img"
                            ][1],
                          name: catalogo["products"]["hoodies"]["m"][productId][
                            "title"
                          ],
                          id: productId,
                          size: size,
                          quantity: quantity,
                        }).then(() => {
                          setAdded(true);
                          setTimeout(() => {
                            setAdded(false);
                          }, 500);
                        });
                      }
                }
              >
                <p>Aggiungi al carrello</p>
              </button>
            </HStack>
          </VStack>
        </HStack>
        <SizeStack
          size={size}
          setSize={setSize}
          stile={"md:hidden w-[80vw] "}
        ></SizeStack>
        <HStack style='text-black w-full px-10 mt-5 justify-center space-x-5 relative md:hidden items-center text-2xl '>
          <button
            disabled={quantity == 1 ? true : false}
            className='w-10 h-10 '
            onClick={
              quantity > 1
                ? () => {
                    setQuantity(quantity - 1);
                  }
                : null
            }
          >
            <IoRemoveCircleOutline
              size={40}
              color={quantity == 1 ? "gray" : "black"}
            ></IoRemoveCircleOutline>
          </button>
          <p>{quantity}</p>
          <button
            className='w-10 h-10  '
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <IoAddCircleOutline size={40}></IoAddCircleOutline>
          </button>
        </HStack>
        <HStack style=' w-full px-10 mt-10 mb-5 h-10 md:hidden text-4xl font-bold justify-center'>
          {"€" +
            (
              catalogo["products"]["hoodies"]["m"][productId]["price"] *
              quantity
            ).toFixed(2)}
        </HStack>
        <HStack style='w-full  h-20 px-10 justify-center mt-6 md:hidden'>
          <button
            className={
              added
                ? "bg-gray-400 text-black w-3/4 rounded-xl shadow-xl shadow-black font-bold text-xl"
                : "bg-orange-500 text-white w-3/4 rounded-xl shadow-xl shadow-black font-bold text-xl"
            }
            onClick={
              size == ""
                ? () => {
                    alert("Selezionare una taglia");
                  }
                : () => {
                    addCart(user.uid, {
                      type: "Felpa",
                      gender: "m",
                      price:
                        catalogo["products"]["hoodies"]["m"][productId][
                          "price"
                        ],
                      image:
                        catalogo["products"]["hoodies"]["m"][productId][
                          "img"
                        ][1],
                      name: catalogo["products"]["hoodies"]["m"][productId][
                        "title"
                      ],
                      id: productId,
                      size: size,
                      quantity: quantity,
                    }).then(() => {
                      setAdded(true);
                      setTimeout(() => {
                        setAdded(false);
                      }, 500);
                    });
                  }
            }
          >
            <p>Aggiungi al carrello</p>
          </button>
        </HStack>
        <HStack style=' w-full  px-10 max-md:px-5 h-fit mt-10 justify-between text-lg'>
          <VStack style='  justify-start space-y-3 items-center text-center w-fit  '>
            <HStack style='h-[6vh]  w-full relative justify-center'>
              <GiAirplaneDeparture
                size={50}
                color='black'
              ></GiAirplaneDeparture>
            </HStack>
            <p>
              Spedizione gratuita <br></br>in 24/48h
            </p>
          </VStack>
          <VStack style=' w-fit   justify-start items-center text-center space-y-3 '>
            <HStack style='h-[6vh]  w-full relative justify-center'>
              <Image
                fill
                src='/bandieraitalia.webp'
                alt=''
                className='relative object-contain'
              />
            </HStack>
            <p>Made in Italy</p>
          </VStack>
          <VStack style='  justify-start items-center text-center w-fit space-y-3'>
            <HStack style='h-[6vh]  w-full relative justify-center'>
              <Image
                src={"/handicon.webp"}
                alt=''
                width={60}
                height={0}
                className=' mb-4 object-contain self-center'
              ></Image>
            </HStack>
            <p>Realizzato a mano</p>
          </VStack>
        </HStack>
        <HStack style='mt-5 justify-start w-full px-10 font-bold text-lg'>
          <h3>Descrizione prodotto</h3>
        </HStack>
        <VStack style='w-full items-start px-10 mt-3 font-Cocon text-left space-y-5 text-lg '>
          <pre className='font-Cocon'>
            {"Composizione:  70% cotone  30% poliestere"}
          </pre>
          <p className='font-bold'>
            {
              "Si consiglia di lavare la felpa con la stampa rivolta verso l'interno a 30 gradi con centrifuga breve"
            }
          </p>
        </VStack>
      </VStack>
      {/* <HStack style='fixed bottom-0 w-full h-20 z-50 bg-black text-white items-center justify-between text-3xl font-Cocon px-5'>
        <p>€50</p>
        <button className='w-3/4 bg-white text-black rounded-lg text-xl py-2 px-5'>
          <HStack style='items-center justify-center w-full'>
            Acquista
            <IoCartOutline size={50}></IoCartOutline>
          </HStack>
        </button>
      </HStack>
      <VStack style='relative'>
        <VStack style='absolute h-[50vh] herotext top-0 z-40 text-white text-5xl justify-end font-Cocon  px-3 font-bold text-start'>
          <p>
            Ricordo <br></br>
            {"d'infanzia"}
          </p>
        </VStack>
        <div className=' relative w-screen overflow-hidden h-[50vh] bg-gray-800 '>
          <Image
            fill
            src='/martina.png'
            alt=''
            className=' overflow-hidden object-cover opacity-70 '
          />
        </div>
        <VStack style=' relative  h-[50vh]'>
          <VStack style='absolute top-0 h-full justify-start px-5 py-3 z-10  font-bold text-white font-Cocon'>
            <h2 className=' relative text-6xl  '>Un palloncino...</h2>

            <p className='text-3xl mt-16'>
              {"Ricordi quando bastava un palloncino per essere felici?"}
            </p>
          </VStack>
          <div className='absolute top-0 h-[50vh] w-full bg-black'>
            <Image
              alt=''
              fill
              src='/video.gif'
              objectFit='cover'
              className='opacity-70'
            ></Image>
          </div>
        </VStack>
        <VStack style=' relative  h-[50vh]'>
          <VStack style='absolute top-0 h-full justify-start px-5 py-3 z-10  font-bold text-white font-Cocon'>
            <h2 className=' relative text-6xl  '>...che vola via.</h2>

            <p className='text-4xl mt-16'>
              {"Poi leggeri quei giorni sono volati via."}
            </p>
          </VStack>
          <div className='absolute top-0 h-[50vh] w-full bg-black'>
            <Image
              alt=''
              fill
              src='/felpe/palloncino.webp'
              objectFit='cover'
              className='opacity-50'
            ></Image>
          </div>
        </VStack>
        <VStack style=' relative  h-[90vh]'>
          <VStack style='absolute top-0 pb-28 h-full justify-end px-5 py-3 z-10   text-white font-Cocon font-bold'>
            <h2 className=' relative text-6xl  '>Risveglia quel ricordo</h2>

            <p className='text-3xl mt-16'>
              Questa felpa è un invito a portare la memoria a quei giorni.
              <br></br> Qual è il ricordo più bello che hai?
            </p>
          </VStack>
          <div className='absolute top-0 h-[80vh] w-full bg-black'>
            <Image
              alt=''
              fill
              src='/giorgia.png'
              objectFit='cover'
              className='opacity-70'
            ></Image>
          </div>
        </VStack>
      </VStack> */}
      <Footer></Footer>
    </>
  ) : (
    <></>
  );
};

const SizeSelector = ({ size, available, selected, fun }) => {
  const stile = available == true ? "bg-black" : "bg-gray-700";
  return (
    <button
      className='mt-10 basis-1/5 '
      onClick={() => {
        available == true ? fun(size) : () => {};
      }}
    >
      <HStack
        style={
          selected == true
            ? "justify-center items-center border-black border-solid border-4 rounded-full w-max h-max p-1"
            : "justify-center items-center  rounded-full w-max h-max p-1"
        }
      >
        <HStack
          style={
            "w-8 h-8  rounded-full items-center justify-center text-white font-extrabold text-lg p-5 " +
            stile
          }
        >
          <p>{size}</p>
        </HStack>
      </HStack>
    </button>
  );
};

const SizeStack = ({ size, setSize, stile }) => {
  const style =
    " justify-start max-md:justify-between  flex-wrap items-start   " + stile;
  return (
    <>
      <HStack style={style}>
        <SizeSelector
          size='S'
          available={true}
          selected={size == "S" ? true : false}
          fun={setSize}
        />
        <SizeSelector
          size='M'
          available={true}
          selected={size == "M" ? true : false}
          fun={setSize}
        />
        <SizeSelector
          size='L'
          available={true}
          selected={size == "L" ? true : false}
          fun={setSize}
        />
        <SizeSelector
          size='XL'
          available={true}
          selected={size == "XL" ? true : false}
          fun={setSize}
        />
      </HStack>
    </>
  );
};

export default Product;
