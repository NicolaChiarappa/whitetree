import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  IoKeyOutline,
  IoMailOutline,
  IoLogoApple,
  IoLogoGoogle,
  IoArrowForward,
} from "react-icons/io5";
import { login, currentUser, logout, googleaccess } from "@/app/firebase/auth";

import { getAuth, signOut } from "firebase/auth";

import Input from "../components/Input";
import { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    currentUser().then((res) => {
      console.log(res);
      setUser(res);
      setIsLoading(false);
    });
  }, []);

  return isLoading == true ? (
    <></>
  ) : user == null ? (
    <LoginPage></LoginPage>
  ) : (
    <Manage nome={user.email} verified={user.emailVerified}></Manage>
  );
};

const Manage = ({ nome, verified }) => {
  return verified ? (
    <>
      <div className='border text-white'>Io sono {nome}</div>
      <button
        className='text-white'
        onClick={() => {
          logout().then(() => {
            location.replace("/account");
          });
        }}
      >
        Esci
      </button>
    </>
  ) : (
    <VStack style='text-red-400  text-3xl items-center justify-between h-[15vh] pt-12 font-semibold'>
      <h1 className='text-white'>{nome}</h1>
      <p>Profilo non verificato</p>
      <HStack style='text-xl text-white font-normal'>
        <button>{"ricevi email di verifica"}</button>
      </HStack>
    </VStack>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <VStack style='text-white items-center w-full  justify-center  mt-10 font-bold text-4xl  h-max'>
        <h1>Accedi</h1>
        <h2 className='text-base font-light text-center mt-3'>
          Non hai un account?
        </h2>
        <Link href='/register' className='bg-transparent text-lg font-semibold'>
          <p>Registrati</p>
        </Link>
      </VStack>

      <VStack style='px-5 text-white mt-10 space-y-8 w-full   text-base items-center'>
        <Input
          icon={<IoMailOutline color='white' size={25}></IoMailOutline>}
          placeholder='Email'
          type='email'
          set={setEmail}
        ></Input>
        <Input
          icon={<IoKeyOutline size={25}></IoKeyOutline>}
          placeholder='Password'
          type='password'
          set={setPassword}
        ></Input>
        <HStack style='items-center justify-between w-32 shadow-xl shadow-black px-4 py-2 text-xl font-bold rounded-lg'>
          <button
            onClick={() => {
              login(email, password).then(() => {
                location.replace("/account");
              });
            }}
          >
            <p>Accedi</p>
          </button>
          <IoArrowForward></IoArrowForward>
        </HStack>
      </VStack>
      <HStack style='w-full justify-center mt-[5vh]'>
        <button
          className='text-white font-semibold  '
          onClick={() => {
            location.replace("/store");
          }}
        >
          Continua come ospite
        </button>
      </HStack>
      <HStack style='text-white justify-center mt-[5vh]'>
        <p>Oppure accedi con</p>
      </HStack>
      <HStack style='mt-3 justify-center space-x-10 mb-8'>
        <button
          onClick={async () => {
            googleaccess();
          }}
          className='shadow-black shadow-xl p-4 rounded-full'
        >
          <IoLogoGoogle color='white ' size={30}></IoLogoGoogle>
        </button>
      </HStack>
    </>
  );
};

export default Account;
