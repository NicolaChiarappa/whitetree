import VStack from "../Layout/VStack";
import { googleaccess } from "@/app/firebase/auth";
const Loginerror = () => {
  return (
    <VStack style='text-white font-medium text-4xl h-screen justify-center items-center space-y-5'>
      <p className='text-center'>Ops, qualcosa è andato storto</p>
      <button
        className='shadow-xl shadow-black px-4 py-2 rounded-xl'
        onClick={() => {
          googleaccess();
        }}
      >
        <p className='font-bold'>Riprova</p>
      </button>
    </VStack>
  );
};

export default Loginerror;
