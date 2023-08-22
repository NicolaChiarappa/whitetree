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
} from "@/app/firebase/auth";
import { addUser } from "@/app/firebase/database";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <VStack style='px-5 mt-10 space-y-8 items-center text-white w-full'>
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
              await register(email, password, name).then(async (res) => {
                console.log(res);
                res.done == true
                  ? () => {
                      addUser(name, email, auth.currentUser.uid);
                      location.replace("/account");
                    }
                  : setError(res.message);
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
          <IoLogoGoogle color='white ' size={30}></IoLogoGoogle>
        </button>
      </HStack>
    </>
  );
};
export default Register;
