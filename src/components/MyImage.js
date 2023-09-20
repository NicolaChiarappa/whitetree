import React, { useState } from "react";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";
import HStack from "../Layout/HStack";

const MyImage = ({ src }) => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <HStack
        style={
          load ? "hidden" : "justify-center  self-center h-full  items-center"
        }
      >
        <TailSpin height={75} width={75} color='#fff'></TailSpin>
      </HStack>
      <Image
        onLoadingComplete={() => {
          setLoad(true);
        }}
        className={"relative object-cover"}
        layout='responsive'
        src={src}
        alt=''
        width={0}
        height={0}
        quality={50}
        sizes={"(min-width: 768px) 75vw,  60vh"}
      ></Image>
    </div>
  );
};

export default MyImage;
