// import React, { useEffect, useState } from "react";
// import { currentUser } from "@/app/firebase/auth";
// import { addOrder, getCart, getSelectedAddress } from "@/app/firebase/database";
// import HStack from "../Layout/HStack";
// import VStack from "../Layout/VStack";
// import Link from "next/link";
// import Image from "next/image";
// import Footer from "../components/Footer";

// const Success_test = () => {
//   const [cart, setCart] = useState(null);
//   useEffect(() => {
//     // const data = new Date();
//     // let month = data.getUTCMonth() + 1;
//     // let year = data.getFullYear();
//     // let day = data.getDate();
//     // const datastringa = day + "-" + month + "-" + year;
//     // currentUser().then((res) => {
//     //   getCart(res.uid).then((cart) => {
//     //     getSelectedAddress(res.uid).then((address) => {
//     //       addOrder(cart, address, datastringa, res.uid);
//     //     });
//     //   });
//     // });
//   }, []);

//   return (
//     <>
//       <VStack style='font-Cocon items-center text-white text-3xl px-10 text-center justify-center mt-16 h-screen space-y-5'>
//         <Image
//           className={"relative object-cover"}
//           src={"/logo-redesign.webp"}
//           alt=''
//           width={200}
//           height={0}
//           sizes='50vh'
//           quality={50}
//           priority
//         ></Image>
//         <h1>Ottimo acquisto, speriamo di rivederti presto</h1>
//         <Link
//           href='/'
//           className='mt-10 bg-white text-black px-5 py-2 rounded-full'
//         >
//           Torna alla home
//         </Link>
//       </VStack>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Success_test;
