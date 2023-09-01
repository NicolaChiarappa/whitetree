import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import sonetti from "@/src/api/sonetti";
import VStack from "@/src/Layout/VStack";

const Sonetto = () => {
  const router = useRouter();
  const [isLoad, setIsLoad] = useState();
  const [sonetto, setSonetto] = useState();
  useEffect(() => {
    if (router.isReady == true) {
      console.log("ciao");
      setSonetto(sonetti[router.query.id]);
    } else {
      console.log(router.isReady);
    }
  }, [router.isReady]);

  return sonetto != null ? (
    <VStack style='items-center text-white  mt-10 px-10 mb-7'>
      <h1 className='text-2xl font-bold'>{sonetto["title"]}</h1>
      <pre className='text-left  font-sans text-lg leading-8 italic mt-9 '>
        {sonetto["testo"]}
      </pre>
    </VStack>
  ) : (
    <p>nada</p>
  );
};

export default Sonetto;
