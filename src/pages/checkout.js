import React, { useEffect, useState } from "react";
import checkout from "../api/checkout";
import { getCart, getUser, setAddressOrder } from "@/app/firebase/database";
import { currentUser } from "@/app/firebase/auth";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import contrylist from "../api/contrylist";
import { addAddress } from "@/app/firebase/database";
import { IoLockClosed, IoCashOutline } from "react-icons/io5";
import { TailSpin } from "react-loader-spinner";
import Footer from "../components/Footer";
const axios = require("axios");
import { addOrder } from "@/app/firebase/database";
import { getSelectedAddress } from "@/app/firebase/database";

const Checkout = () => {
  const [address, setAddress] = useState();
  const [addresses, setAddresses] = useState(null);
  const [cart, setCart] = useState(null);
  const [id, setId] = useState(null);
  const [isGuest, setIsGuest] = useState();
  const [url, setUrl] = useState(null);
  const [user, setUser] = useState();
  const [cash, setCash] = useState(false);

  useEffect(() => {
    currentUser().then((res) => {
      console.log(res.uid);
      setId(res.uid);
      setIsGuest(res.isAnonymous ? true : false);
      getUser(res.uid).then((user) => {
        try {
          axios({
            method: "post",
            url: "https://worried-lime-eel.cyclic.cloud/",
            data: checkout(user["cart"]),
          }).then((res) => {
            setUrl(res.data);
          });
        } catch {
          (e) => {
            console.log(e);
          };
        }

        setUser(user);
        setCart(user["cart"]);

        setAddresses(user["addresses"]);
      });
    });
  }, []);

  return cart != null && addresses != null && id != null ? (
    <VStack style='h-screen justify-between font-Cocon'>
      <VStack style='  items-center mb-10'>
        <h2 className='text-white font-bold text-2xl  text-center mt-10'>
          {"Scegli l'indirizzo e prosegui"}
        </h2>
        <VStack
          style={
            isGuest
              ? "hidden"
              : "h-fit py-10 space-y-8 justify-around w-full items-center"
          }
        >
          {addresses.map((e, index) => {
            return (
              <AddressComponent
                myaddress={e}
                key={index}
                setAddress={setAddress}
                address={address}
              ></AddressComponent>
            );
          })}
        </VStack>
        <ChangeAddress
          id={id}
          guest={isGuest}
          url={url}
          func={() => {
            setCash(true);
          }}
        ></ChangeAddress>

        <button
          className={
            isGuest == true
              ? "hidden"
              : url != null
              ? "bg-white w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 mt-10 "
              : "bg-white opacity-25 w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 mt-10"
          }
          disabled={url != null ? false : true}
          onClick={() => {
            address == null
              ? alert("scegli un indirizzo")
              : setAddressOrder(id, address, () => {
                  window.open(url, "_self");
                });
          }}
        >
          <HStack style='items-center justify-between '>
            Paga con carta
            {url != null ? (
              <IoLockClosed size={25}></IoLockClosed>
            ) : (
              <TailSpin height={30} width={30} color='#000'></TailSpin>
            )}
          </HStack>
        </button>
      </VStack>
      <Cashconfirm isVisible={cash} cart={cart} user={user}></Cashconfirm>
      <Footer></Footer>
    </VStack>
  ) : (
    <></>
  );
};

const AddressComponent = ({ myaddress, address, setAddress }) => {
  return (
    <VStack
      style={
        myaddress == address
          ? "w-[60vw] md:w-1/3 p-1 border rounded-2xl "
          : "w-[60vw] md:w-1/3 p-1  rounded-2xl "
      }
      onClick={() => {
        setAddress(myaddress);
      }}
    >
      <VStack style='h-fit py-5  bg-white   rounded-xl items-center text-black font-bold text-xl justify-center'>
        <p>{myaddress["nome"]}</p>
        <p>{myaddress["via"]}</p>
        <p>{myaddress["citta"] + ", " + myaddress["provincia"]}</p>
        <p>{myaddress["telefono"]}</p>
      </VStack>
    </VStack>
  );
};

const ChangeAddress = ({ fun, id, guest, url, func }) => {
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
      <VStack style='mt-10 px-10 text-xl '>
        <button
          className={guest ? "hidden" : "bg-white rounded-full px-5 py-2"}
          onClick={() => {
            setIsAdd(!isAdd);
          }}
        >
          Aggiungi indirizzo
        </button>
      </VStack>
      <VStack
        style={
          guest
            ? "mt-10 px-10 space-y-7 text-white items-center mb-10"
            : isAdd
            ? "mt-10 px-10 space-y-7 text-white items-center mb-10"
            : "hidden"
        }
      >
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
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 rounded-xl w-full'
        >
          {contrylist.map((e, index) => {
            return <option key={index}>{e}</option>;
          })}
        </select>
        <input
          maxLength={2}
          onChange={(e) => {
            setProvincia(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className={
            "bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 w-full rounded-xl "
          }
          placeholder='Provincia'
        ></input>
        <input
          onChange={(e) => {
            setCitta(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 w-full rounded-xl'
          placeholder='Città'
        ></input>

        <input
          maxLength={5}
          onChange={(e) => {
            setCap(e.target.value);
            console.log(e.target.value);
          }}
          type='number'
          className='bg-transparent text-2xl shadow-black shadow-xl w-full px-5 py-2 rounded-xl '
          placeholder='CAP'
        ></input>
        <input
          onChange={(e) => {
            setVia(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl w-full px-5 py-2 rounded-xl'
          placeholder='Via, numero civico'
        ></input>
        <VStack>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(e.target.value);
            }}
            type='tel'
            className='bg-transparent text-2xl shadow-black shadow-xl w-full px-5 py-2 rounded-xl'
            placeholder='Telefono'
          ></input>
          <p className='text-xs px-5 mt-2'>
            Il numero di telefono verrà fornito al corriere per facilitare la
            consegna
          </p>
        </VStack>
        <button
          className={
            guest
              ? "hidden"
              : "text-black bg-white px-5 py-2 rounded-full w-full text-xl "
          }
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
        <button
          className={
            guest == false
              ? "hidden"
              : url != null
              ? "bg-white w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 "
              : "bg-white opacity-25 w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 "
          }
          disabled={url != null ? false : true}
          onClick={() => {
            name != "" &&
            country != "" &&
            citta != "" &&
            provincia != "" &&
            cap != "" &&
            via != "" &&
            phone != ""
              ? setAddressOrder(
                  id,
                  {
                    "nome": name,
                    "nazione": country,
                    "citta": citta,
                    "provincia": provincia,
                    "cap": cap,
                    "via": via,
                    "telefono": telefono,
                  },
                  () => {
                    window.open("/cashconfirm", "_self");
                  }
                )
              : alert("");
          }}
        >
          <HStack style='items-center justify-between '>
            Paga con carta
            {url != null ? (
              <IoLockClosed size={25}></IoLockClosed>
            ) : (
              <TailSpin height={30} width={30} color='#000'></TailSpin>
            )}
          </HStack>
        </button>

        <p className={error ? "text-red-400 font-bold text-lg" : "hidden"}>
          Compila tutti i campi
        </p>
        <p>oppure</p>
        <button
          className='bg-white w-[60vw] md:w-1/3 h-fit text-black rounded-xl font-bold  px-5 py-3 text-lg'
          onClick={() => {
            func();
            setAddressOrder(id, {
              "nome": name,
              "nazione": country,
              "citta": citta,
              "provincia": provincia,
              "cap": cap,
              "via": via,
              "telefono": telefono,
            });
          }}
        >
          <HStack style='items-center justify-between opacityt '>
            Paga con contrassegno
            <IoCashOutline size={25} color='#000'></IoCashOutline>
          </HStack>
        </button>
      </VStack>
    </>
  );
};

const Cashconfirm = ({ isVisible, cart, tot, user }) => {
  return (
    <VStack
      style={
        isVisible
          ? "absolute top-[50%] self-center z-20 bg-[#191919] h-fit py-24 w-4/5 border rounded-xl text-white px-10"
          : " hidden"
      }
    >
      {cart.map((e, index) => {
        return (
          <VStack key={index} style='items-center mt-10'>
            <p>{e.name}</p>
            <p>{"taglia " + e.size}</p>
            <p>{"€ " + e.price.toFixed(2)}</p>
          </VStack>
        );
      })}
      <p className='text-center mt-10'>
        {" "}
        il contrassegno prevede una spesa aggiuntiva di 2 €
      </p>
      <button
        className='bg-white w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 mt-10'
        onClick={() => {
          getSelectedAddress(user.uid).then((e) => {
            addOrder(cart, e, "contrassegno", user.uid);
          });
        }}
      >
        Conferma ordine
      </button>
    </VStack>
  );
};

export default Checkout;
