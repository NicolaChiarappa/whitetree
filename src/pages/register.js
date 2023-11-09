import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import Input from "../components/Input";
import {
  IoMailOutline,
  IoKeyOutline,
  IoLogoApple,
  IoLogoGoogle,
  IoPersonCircleOutline,
  IoArrowForward,
} from "react-icons/io5";
import { useState } from "react";
import {
  register,
  googleaccess,
  auth,
  sendVerification,
  currentUser,
  logout,
} from "@/app/firebase/auth";
import { addUser } from "@/app/firebase/database";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const router = useRouter;
  return (
    <>
      <VStack style='px-5 mt-10 space-y-8 items-center text-black w-full font-Cocon'>
        <h1 className='font-bold text-4xl'>Registrati</h1>
        <Input
          placeholder='Nome e cognome'
          type='text'
          icon={<IoPersonCircleOutline size={25}></IoPersonCircleOutline>}
          set={setName}
        ></Input>
        <Input
          placeholder='Email'
          type='email'
          icon={<IoMailOutline size={25}></IoMailOutline>}
          set={setEmail}
        ></Input>
        <Input
          placeholder='Password'
          type='password'
          icon={<IoKeyOutline size={25}></IoKeyOutline>}
          set={setPassword}
        ></Input>
        <p className={"text-red-800 "}>{error}</p>
        <HStack style='items-center justify-between w-36 shadow-xl shadow-black px-4 py-2 text-xl font-bold rounded-lg'>
          <button
            onClick={async () => {
              logout().then(() => {
                register(email, password, name, router);
              });
            }}
          >
            <p>Registrati</p>
          </button>
          <IoArrowForward></IoArrowForward>
        </HStack>

        <p>Oppure registrati con</p>
      </VStack>
      <HStack style='mt-3 justify-center space-x-10 mb-8'>
        <button
          onClick={() => {
            googleaccess();
          }}
          className='shadow-black shadow-xl p-4 rounded-full'
        >
          <IoLogoGoogle size={30}></IoLogoGoogle>
        </button>
      </HStack>
      <Footer></Footer>
    </>
  );
};
export default Register;
