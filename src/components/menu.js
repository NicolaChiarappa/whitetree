import HStack from "../Layout/HStack";

import VStack from "../Layout/VStack";
import Link from "next/link";

import {
  IoBulbOutline,
  IoPeopleCircleOutline,
  IoCartOutline,
} from "react-icons/io5";
const Menu = ({ isVisible }) => {
  const stile = isVisible ? "" : "hidden";
  return (
    <VStack
      style={"h-screen backdrop-blur-md fixed top-0 w-full z-20 " + stile}
    >
      <VStack style='mt-[150px] text-white font-semibold text-4xl items-center justify-between h-[65vw]'>
        <Link href='/idea'>
          <HStack>
            <IoBulbOutline></IoBulbOutline>
            <p>{"L'idea"}</p>
          </HStack>
        </Link>
        <Link href='/about'>
          <HStack>
            <IoPeopleCircleOutline></IoPeopleCircleOutline>
            <p>{"Chi siamo"}</p>
          </HStack>
        </Link>

        <Link href='/store'>
          <HStack>
            <IoCartOutline></IoCartOutline>
            <p>{"Vai allo store"}</p>
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Menu;
