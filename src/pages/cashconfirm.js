import Link from "next/link";
import VStack from "../Layout/VStack";

const Cashconfirm = () => {
  return (
    <VStack style='text-white font-Cocon text-3xl items-center h-screen justify-center'>
      <p>Il tuo ordine è confermato</p>
      <p className='px-10 text-xl mt-10 text-center'>
        {
          "Riceverai una email per tracciare lo stato dell'ordine nelle prossime 24 ore"
        }
      </p>
      <Link href='/' className='bg-white text-black rounded-xl px-5 py-2 mt-10'>
        Torna alla homepage
      </Link>
    </VStack>
  );
};
export default Cashconfirm;
