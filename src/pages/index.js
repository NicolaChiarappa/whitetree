import Image from "next/image";
import HStack from "../Layout/HStack";
import { IoMenuSharp } from "react-icons/io5";
import VStack from "../Layout/VStack";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav className='pt-7 sticky top-0 w-full bg-[#191919] h-fit '>
        <HStack style='w-full justify-between  px-10 h-fit '>
          <Link href='/'>
            <Image alt='' src='/tree.png' width={70} height={70}></Image>
          </Link>

          <button
            onClick={() => {
              alert("menu");
            }}
          >
            <IoMenuSharp color='#ffffff' size={40}></IoMenuSharp>
          </button>
        </HStack>
      </nav>
      <VStack style='justify-between  px-5 pt-5 h-[70vh] text-white text-[15vw] leading-tight font-extrabold items-center   '>
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
        style='text-white h-screen pt-40 text-[7vw] px-5 items-center'
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
  return (
    <VStack style='mt-16 items-center border-[1px] border-white w-[80vw] rounded-xl'>
      <div className='relative w-[79vw] h-[80vw] '>
        <Image alt='' src='/teen.png' className='rounded-t-xl' fill></Image>
      </div>
      <HStack style='space-x-5'>
        <p>•</p>
        <p>•</p>
        <p>•</p>
        <p>•</p>
        <p>•</p>
      </HStack>
      <VStack style='bg-[#d7d7d7] text-black w-[80vw] rounded-b-xl px-3 text-lg'>
        <p>Titolo maglia</p>
        <p>€ 35</p>
      </VStack>
    </VStack>
  );
};

export default Home;
