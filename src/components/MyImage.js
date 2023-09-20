import React, { useState } from "react";
import Image from "next/image";
import { RotatingLines } from "react-loader-spinner";
import HStack from "../Layout/HStack";

const MyImage = ({ src }) => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <HStack style={load ? "hidden" : "justify-center  self-center h-full"}>
        <RotatingLines
          strokeColor='white'
          strokeWidth='2'
          animationDuration='0.75'
          width='90'
          visible={load ? false : true}
        />
      </HStack>
      <Image
        onLoadingComplete={() => {
          setLoad(true);
        }}
        className='  relative object-cover'
        layout='responsive'
        src={src}
        alt=''
        width={0}
        height={0}
        quality={50}
        sizes={load ? "(min-width: 768px) 75vw,  60vh" : "0px"}
      ></Image>
    </div>
  );
};

export default MyImage;
