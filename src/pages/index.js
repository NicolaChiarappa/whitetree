import Image from "next/image";
import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";

import Navbar from "../components/Navbar";

const Home = () => {
  const images = [
    "/tree.png",
    "/teen.png",
    "/giorgio.png",
    "/newton.png",
    "/palloncino.png",
    "/ragazza che legge.png",
    "/scacchi.png",
  ];
  const [image, setImage] = useState(0);

  const loop = () => {
    if (image < images.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
    console.log(images[image]);
  };

  useEffect(() => {
    setTimeout(loop, 1500);
  }, [image]);
  return (
    <>
      <Navbar></Navbar>
      <Image alt='' width={700} height={700} src={images[image]}></Image>
      <div className='relative '>
        <div className='z-[-5] w-full h-[85vh] absolute top-0 opacity-20 '>
          {/* <Image
            src='/family.jpg'
            alt=''
            fill
            className='grayscale w-full relative '
          ></Image> */}
        </div>
        <VStack style=' w-full relative top-0 z-10'>
          <VStack style='justify-between  px-5 pt-5 h-[65vh]  text-white max-md:text-[10vw] text-8xl md:w-4/5  leading-tight font-extrabold items-center  font-miofont overflow-hidden'>
            <p className=''>
              Once upon a time,
              <br></br>
              under the white tree...
            </p>
          </VStack>
          <HStack style='w-full justify-center font-extrabold font-miofont'>
            <div className='rounded-full bg-white text-black text-center w-fit text-4xl px-4 py-2'>
              <Link href='#collezione' scroll={false}>
                Scopri
              </Link>
            </div>
          </HStack>
        </VStack>
      </div>

      <VStack style='items-center pt-40 ' id='collezione'>
        <p className='text-white text-3xl font-miofont font-bold mt-10 px-10'>
          La nostra collezione invernale
        </p>
        <div className='text-white   max-md:text-[7vw] text-[7vh]  px-5 items-center font-miofont mb-14 relative grid-cols-1 grid md:grid-cols-2 '>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </VStack>
    </>
  );
};

const Card = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const images = ["/teen.png", "/Front-black.png"];

  return (
    <VStack style=' shadow-black  shadow-xl relative mt-16 items-center  max-md:w-[80vw] w-[60vh] rounded-xl h-fit basis1/3 md:mx-12'>
      <EmblaCarousel slides={images}></EmblaCarousel>

      <VStack style='  text-white w-[80vw] md:w-[60vh]  px-3 text-lg justify-between items-start py-3 '>
        <p>Titolo maglia</p>
        <HStack style='justify-between  items-center w-full'>
          <p>€ 35</p>
          <Link href='' className='bg-white h-10 text-black px-6 rounded-lg'>
            <HStack style='items-center h-full font-medium'>
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
