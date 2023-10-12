import VStack from "../../../../Layout/VStack";
import EmblaCarousel from "src/components/EmblaCarousel";
import Navbar from "../../../../components/Navbar";
import HStack from "../../../../Layout/HStack";
import { useEffect, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import catalogo from "@/src/api/catalogo";
import { currentUser } from "@/app/firebase/auth";
import { addCart } from "@/app/firebase/database";
import Image from "next/image";
import { ospite } from "@/app/firebase/auth";
import { GiAirplaneDeparture } from "react-icons/gi";

const Product = () => {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [productId, setProductId] = useState(0);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const images = router.isReady
    ? catalogo["products"][router.asPath.slice(11, 17)]["bambino"][productId][
        "img"
      ]
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
      <Navbar isStore={true}></Navbar>
      <VStack style='text-white items-center mt-10 mb-96 font-Cocon'>
        <h1 className='font-bold text-4xl md:hidden mb-10'>
          {router.isReady
            ? catalogo["products"][router.asPath.slice(11, 17)]["bambino"][
                productId
              ]["title"]
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
                ? catalogo["products"][router.asPath.slice(11, 17)]["bambino"][
                    productId
                  ]["title"]
                : ""}
            </h1>
            <SizeStack
              stile={"max-md:hidden w-1/2    "}
              size={size}
              setSize={setSize}
            ></SizeStack>
            <HStack style='text-white text-2xl relative max-md:hidden w-1/3 space-x-5  justify-start  items-center'>
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
                  color={quantity == 0 ? "gray" : "white"}
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
                  catalogo["products"]["maglie"]["bambino"][productId][
                    "price"
                  ] * quantity
                ).toFixed(2)}
            </HStack>

            <HStack style='w-full  h-20 px-10 justify-center mt-6 max-md:hidden'>
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
                          type: "Maglia",
                          gender: "k",
                          price:
                            catalogo["products"]["maglie"]["bambino"][
                              productId
                            ]["price"],
                          image:
                            catalogo["products"]["maglie"]["bambino"][
                              productId
                            ]["img"][1],
                          name: catalogo["products"]["maglie"]["bambino"][
                            productId
                          ]["title"],
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
        <HStack style='text-white w-full px-10 mt-5 justify-center space-x-5 relative md:hidden items-center text-2xl '>
          <button
            disabled={quantity == 0 ? true : false}
            className='w-10 h-10 '
            onClick={
              quantity > 0
                ? () => {
                    setQuantity(quantity - 1);
                  }
                : null
            }
          >
            <IoRemoveCircleOutline
              size={40}
              color={quantity == 0 ? "gray" : "white"}
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
        <HStack style=' w-full justify-start px-10 mt-10 mb-5 h-10 md:hidden text-4xl font-bold '>
          {"€" +
            (
              catalogo["products"]["maglie"]["bambino"][productId]["price"] *
              quantity
            ).toFixed(2)}
        </HStack>

        <HStack style='w-full  h-20 px-10 justify-center mt-6 md:hidden'>
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
                      type: "Maglia",
                      gender: "k",
                      price:
                        catalogo["products"]["maglie"]["bambino"][productId][
                          "price"
                        ],
                      image:
                        catalogo["products"]["maglie"]["bambino"][productId][
                          "img"
                        ][1],
                      name: catalogo["products"]["maglie"]["bambino"][
                        productId
                      ]["title"],
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
        <HStack style=' w-full  px-10 max-md:px-5 h-fit mt-10 justify-between text-xs '>
          <VStack style='  justify-start space-y-3 items-center text-center w-fit  '>
            <HStack style='h-[6vh]  w-full relative justify-center'>
              <GiAirplaneDeparture
                size={50}
                color='white'
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
          <pre className='font-Cocon'>{"Composizione:  100% cotone"}</pre>
          <p className='font-bold'>
            {
              "Si consiglia di lavare la felpa con la stampa rivolta verso l'interno a 30 gradi"
            }
          </p>
        </VStack>
      </VStack>
    </>
  ) : (
    <></>
  );
};

const SizeSelector = ({ size, available, selected, fun }) => {
  const stile = available == true ? "bg-white" : "bg-gray-700";
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
            ? "justify-center items-center border rounded-full w-max h-max p-1"
            : "justify-center items-center  rounded-full w-max h-max p-1"
        }
      >
        <HStack
          style={
            "w-8 h-8  rounded-full items-center justify-center text-black font-extrabold text-lg p-5 " +
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
