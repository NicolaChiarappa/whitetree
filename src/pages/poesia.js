import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import MyImage from "../components/MyImage";
import codici from "../api/codici";
import { useRouter } from "next/router";
const Poesia = () => {
  const [code, setCode] = useState();
  const router = useRouter();
  return (
    <>
      <Navbar></Navbar>
      <VStack style='font-Cocon w-full items-start px-10'>
        <h1 className='text-3xl font-bold'>
          {"Completa l'esperienza WhiteTree"}
          <br></br> ideata per te!
        </h1>
        <h2 className='text-[1.28rem] mt-10'>
          Inserisci il codice nascosto riportato sul tuo prodotto ed accedi ai
          contenuti esclusivi pensati per te
        </h2>
      </VStack>
      <VStack style=' text-black  text-xl text-center items-center   bg-black w-full  mt-10 py-3 font-Cocon px-5'>
        <HStack style='items-center justify-start border  w-full'>
          <div className='relative w-32'>
            <MyImage src={"/logo_back.webp"}></MyImage>
          </div>
          <input
            onChange={(e) => {
              setCode(e.target.value);
            }}
            maxLength={7}
            minLength={7}
            type='tel'
            placeholder='Il tuo codice'
            className='px-5 py-2 rounded-xl text-xl bg-white border  h-fit w-48'
          />
        </HStack>
        <button
          className='bg-white text-black mt-10 px-5 py-2 rounded-xl mb-5 text-2xl'
          onClick={() => {
            console.log(code);
            if (codici.includes(code)) {
              router.push("/sonetto/" + codici.indexOf(code));
            } else {
              alert("Il codice non è corretto");
            }
          }}
        >
          <p>Leggi la poesia</p>
        </button>
      </VStack>
      <VStack style='px-10'>
        <h2 className='text-[1.28rem] mt-10 font-Cocon'>
          Ogni sonetto è originale ed interamente scritto per te ed il tuo
          prodotto, descrive le storie racchiuse nelle grafiche e si propone di
          trasmettere al lettore le emozioni ad esse collegate. Per leggere la
          spiegazione ed il commento dell’autore, inserisci il codice segreto
          qui sotto
        </h2>
      </VStack>
      <VStack style=' text-black  text-xl text-center items-center   bg-black w-full  mt-10 py-3 font-Cocon px-5'>
        <HStack style='items-center justify-start border  w-full'>
          <div className='relative w-32'>
            <MyImage src={"/logo_back.webp"}></MyImage>
          </div>
          <input
            onChange={(e) => {
              setCode(e.target.value);
            }}
            maxLength={7}
            minLength={7}
            type='tel'
            placeholder='Il tuo codice'
            className='px-5 py-2 rounded-xl text-xl bg-white border  h-fit w-48'
          />
        </HStack>
        <button
          className='bg-white text-black mt-10 px-5 py-2 rounded-xl mb-5 text-2xl'
          onClick={() => {
            console.log(code);
            if (codici.includes(code)) {
              router.push("/sonetto/" + codici.indexOf(code));
            } else {
              alert("Il codice non è corretto");
            }
          }}
        >
          <p>Leggi la poesia</p>
        </button>
      </VStack>
      <Footer></Footer>
    </>
  );
};

export default Poesia;
