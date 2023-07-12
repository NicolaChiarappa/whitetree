import Image from "next/image";
import HStack from "../Layout/HStack";
import { IoMenuSharp } from "react-icons/io5";
import VStack from "../Layout/VStack";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav className='pt-7 sticky top-0 w-full bg-black h-fit '>
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
      <VStack id='collezione' style='text-white h-screen pt-40'>
        <p>Ciao</p>
      </VStack>
    </>
  );
};
export default Home;
