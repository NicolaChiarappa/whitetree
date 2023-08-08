import VStack from "../Layout/VStack";
import EmblaCarousel from "src/components/EmblaCarousel";
import Navbar from "../components/Navbar";
import HStack from "../Layout/HStack";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const Product = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const images = ["/teen.png", "/Front-black.png"];
  return (
    <>
      <Navbar isStore={true}></Navbar>
      <VStack style='text-white items-center mt-10 mb-96'>
        <h1 className='font-bold text-4xl md:hidden mb-10'>Titolo maglia</h1>
        <HStack style='justify-between space-x- w-full px-10  '>
          <HStack
            style='shadow-xl shadow-black rounded-xl 
            '
          >
            <EmblaCarousel slides={images}></EmblaCarousel>
          </HStack>
          <VStack style=' justify-center space-y-10 w-full  items-center'>
            <h1 className='font-bold text-8xl max-md:hidden'>Titolo maglia</h1>
            <SizeStack
              stile={"max-md:hidden w-1/2 px-10   "}
              size={size}
              setSize={setSize}
            ></SizeStack>
            <HStack style='text-white text-2xl relative max-md:hidden w-1/3 justify-between items-center'>
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

            <HStack style='w-full  h-20 px-10 justify-center mt-6 max-md:hidden'>
              <button
                className='bg-white text-black w-3/4 rounded-xl shadow-xl shadow-black font-bold'
                onClick={
                  size == ""
                    ? () => {}
                    : () => {
                        alert(size);
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
          stile={"md:hidden w-[80vw]"}
        ></SizeStack>
        <HStack style='text-white w-[60vw] justify-center relative md:hidden items-center'>
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

        <HStack style='w-full  h-20 px-10 justify-center mt-6 md:hidden'>
          <button
            className='bg-white text-black w-3/4 rounded-xl shadow-xl shadow-black font-bold'
            onClick={
              size == ""
                ? () => {}
                : () => {
                    alert(size);
                  }
            }
          >
            <p>Aggiungi al carrello</p>
          </button>
        </HStack>
        <HStack style='mt-5 justify-start w-full px-10 font-bold text-lg'>
          <h3>Descrizione prodotto</h3>
        </HStack>
        <VStack style='w-full items-start px-10 mt-3'>
          100%cotone bla bla bla
        </VStack>
      </VStack>
    </>
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
  const style = " justify-start   flex-wrap items-start  " + stile;
  return (
    <>
      <HStack style={style}>
        <SizeSelector
          size={"XS"}
          available={false}
          selected={size == "XS" ? true : false}
          fun={setSize}
        />
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
