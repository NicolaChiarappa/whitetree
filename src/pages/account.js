import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import {
  IoKeyOutline,
  IoMailOutline,
  IoLogoApple,
  IoLogoGoogle,
  IoArrowForward,
  IoExitOutline,
  IoPencilSharp,
} from "react-icons/io5";
import {
  login,
  currentUser,
  logout,
  googleaccess,
  sendVerification,
  auth,
  ospite,
} from "@/app/firebase/auth";
import { getUser, addAddress, addUser } from "@/app/firebase/database";
import contrylist from "../api/contrylist";

import Input from "../components/Input";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Account = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    currentUser()
      .then((res) => {
        console.log(res);
        setUser(res);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  return isLoading == true ? (
    <>
      <Head>
        <title>WhiteTree-Account</title>
      </Head>
    </>
  ) : user == null ? (
    <>
      <Head>
        <title>WhiteTree-Account</title>
      </Head>
      <LoginPage></LoginPage>
    </>
  ) : (
    <>
      <Head>
        <title>WhiteTree-Account</title>
      </Head>
      <Manage
        nome={user.displayName}
        verified={user.emailVerified}
        email={user.email}
        id={user.uid}
        anonymous={user.isAnonymous}
      ></Manage>
    </>
  );
};

const Manage = ({ nome, verified, email, id, anonymous }) => {
  return verified ? (
    <VStack style='justify-between h-screen font-Cocon'>
      <IsVerified id={id}></IsVerified>
      <Footer></Footer>
    </VStack>
  ) : anonymous ? (
    <VStack style='justify-between h-screen'>
      <LoginPage></LoginPage>
      <Footer></Footer>
    </VStack>
  ) : (
    <VStack style='h-screen border justify-between'>
      <NotVerified nome={nome}></NotVerified>
      <Footer></Footer>
    </VStack>
  );
};

const IsVerified = ({ id }) => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState(false);
  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, []);
  return user != null && addresses == false ? (
    <VStack style='mt-10 px-3 text-black text-xl space-y-5'>
      <HStack style='w-full justify-end '>
        <button
          className='text-red-500 w-full'
          onClick={() => {
            logout().then(() => {
              location.replace("/account");
            });
          }}
        >
          <HStack style='items-center text-2xl   w-full justify-end space-x-2'>
            <p>Esci</p>
            <IoExitOutline color='red' size={40}></IoExitOutline>
          </HStack>
        </button>
      </HStack>
      <HStack style=' justify-center font-bold text-3xl '>
        <p>{user.name}</p>
      </HStack>
      <VStack style='w-full   items-center space-y-10 '>
        <DataViewer data={user.email} type='Email'></DataViewer>
        <DataViewer
          type='Indirizzi'
          data={user.addresses}
          fun={() => {
            setAddresses(true);
            console.log(addresses);
          }}
        ></DataViewer>
        <DataViewer type='I miei ordini' data={user.orders}></DataViewer>
      </VStack>
    </VStack>
  ) : user != null && addresses == true ? (
    <ChangeAddress
      id={id}
      fun={() => {
        setAddresses(false);
      }}
    ></ChangeAddress>
  ) : (
    <button
      onClick={() => {
        logout().then(() => {
          location.replace("/account");
        });
      }}
    >
      esci
    </button>
  );
};

const ChangeAddress = ({ fun, id }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [citta, setCitta] = useState("");
  const [provincia, setProvincia] = useState("");
  const [cap, setCap] = useState("");
  const [phone, setPhone] = useState("");
  const [via, setVia] = useState("");
  const [country, setCountry] = useState("Italy");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <VStack style='mt-10 px-10 text-xl font-Cocon'>
        <button
          className='bg-white rounded-full px-5 py-2'
          onClick={() => {
            setIsAdd(true);
          }}
        >
          Aggiungi indirizzo
        </button>
      </VStack>
      <VStack
        style={
          isAdd == true
            ? "mt-10 px-10 space-y-7 text-black font-Cocons"
            : "hidden"
        }
      >
        <HStack style='text-black'>
          <button
            onClick={() => {
              fun();
            }}
          >
            <p>Chiudi</p>
          </button>
        </HStack>
        <input
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 w-full rounded-xl'
          placeholder='Nome e cognome'
        ></input>
        <select
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          name=''
          id=''
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl'
        >
          {contrylist.map((e, index) => {
            return <option key={index}>{e}</option>;
          })}
        </select>
        <input
          onChange={(e) => {
            setCitta(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2  rounded-xl'
          placeholder='Città'
        ></input>
        <input
          maxLength={2}
          onChange={(e) => {
            setProvincia(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className={
            "bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl "
          }
          placeholder='Provincia'
        ></input>
        <input
          maxLength={5}
          onChange={(e) => {
            setCap(e.target.value);
            console.log(e.target.value);
          }}
          type='number'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl '
          placeholder='CAP'
        ></input>
        <input
          onChange={(e) => {
            setVia(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl'
          placeholder='Via, numero civico'
        ></input>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
            console.log(e.target.value);
          }}
          type='tel'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl'
          placeholder='Telefono'
        ></input>
        <button
          className='text-black bg-white px-5 py-2 rounded-full text-xl'
          onClick={
            name != "" &&
            country != "" &&
            citta != "" &&
            provincia != "" &&
            cap != "" &&
            via != "" &&
            phone != ""
              ? () => {
                  addAddress(
                    id,
                    name,
                    country,
                    citta,
                    provincia,
                    cap,
                    via,
                    phone
                  ).then(() => {
                    location.reload();
                  });
                }
              : () => setError(true)
          }
        >
          Aggiungi
        </button>
        <p className={error ? "text-red-400 font-bold text-lg" : "hidden"}>
          Compila tutti i campi
        </p>
      </VStack>
    </>
  );
};

const NotVerified = ({ nome }) => {
  return (
    <VStack style='text-red-400  text-2xl items-center justify-between h-[15vh] pt-12  px-10 font-Cocon'>
      <HStack style='w-full items-center justify-end space-x-2'>
        <button
          className='text-black'
          onClick={() => {
            logout().then(() => {
              location.replace("/account");
            });
          }}
        >
          Esci
        </button>
        <IoExitOutline color='white' size={30}></IoExitOutline>
      </HStack>
      <h1 className='text-black mt-2'>{nome}</h1>
      <p className='text-center font-bold mt-10'>
        la tua email non è verificata
      </p>
      <p className='text-black mt-2'>controlla la casella di posta</p>
      <p className='mt-2 text-black'>oppure</p>
      <HStack style='text-2xl font-extrabold text-black mt-4 '>
        <button
          className='bg-white rounded-full px-6'
          onClick={() => {
            sendVerification(auth.currentUser);
          }}
        >
          {"ricevi email di verifica"}
        </button>
      </HStack>
    </VStack>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <VStack style='text-black items-center w-full  justify-center  mt-10 font-bold text-4xl  h-max font-Cocon'>
        <h1>Accedi</h1>
        <h2 className='text-base font-light text-center mt-3'>
          Non hai un account?
        </h2>
        <Link href='/register' className='bg-transparent text-lg font-semibold'>
          <p>Registrati</p>
        </Link>
      </VStack>

      <VStack style='px-5 text-black mt-10 space-y-8 w-full   text-base items-center font-Cocon'>
        <Input
          icon={<IoMailOutline size={25}></IoMailOutline>}
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
              logout().then(() => {
                login(email, password).then(() => {
                  location.replace("/account");
                });
              });
            }}
          >
            <p>Accedi</p>
          </button>
          <IoArrowForward></IoArrowForward>
        </HStack>
      </VStack>

      <HStack style='text-black justify-center mt-[5vh] font-Cocon'>
        <p>Oppure accedi con</p>
      </HStack>
      <HStack style='mt-3 justify-center space-x-10 mb-8'>
        <button
          onClick={async () => {
            logout().then(() => {
              googleaccess();
            });
          }}
          className='shadow-black shadow-xl p-4 rounded-full'
        >
          <IoLogoGoogle size={30}></IoLogoGoogle>
        </button>
      </HStack>
    </>
  );
};

const DataViewer = ({ data, type, fun = null }) => {
  return (
    <VStack style='shadow-xl shadow-black rounded-xl md:w-1/2 px-6 py-3 w-full'>
      <HStack style='items-center space-x-4'>
        <p className='font-bold'>{type}</p>
        <button
          onClick={() => {
            fun();
          }}
        >
          {type != "I miei ordini" ? <IoPencilSharp></IoPencilSharp> : <></>}
        </button>
      </HStack>
      {type == "Indirizzi" ? (
        data.map((e, index) => {
          return (
            <VStack key={index} style=' mb-4 text-base'>
              <p>{e.citta + ", " + e.provincia}</p>
              <p>{e.cap}</p>
              <p>{e.via}</p>
              <div className='h-[0.5px] border-white border-[1px] rounded-full'></div>
            </VStack>
          );
        })
      ) : (
        <p>{data}</p>
      )}
    </VStack>
  );
};

export default Account;
