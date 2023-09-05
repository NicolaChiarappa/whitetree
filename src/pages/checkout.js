import React, { useEffect, useState } from "react";
import checkout from "../api/checkout";
import { getCart, getUser } from "@/app/firebase/database";
import { currentUser } from "@/app/firebase/auth";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import contrylist from "../api/contrylist";
import { addAddress } from "@/app/firebase/database";
import { IoLockClosed } from "react-icons/io5";
const axios = require("axios");

const Checkout = () => {
  const [address, setAddress] = useState();
  const [addresses, setAddresses] = useState(null);
  const [cart, setCart] = useState(null);
  const [id, setId] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    currentUser().then((res) => {
      setId(res.uid);
      getUser(res.uid).then((user) => {
        try {
          axios({
            method: "post",
            url: "https://nice-pear-dalmatian-garb.cyclic.app/",
            data: checkout(user["cart"]),
          }).then((res) => {
            setUrl(res.data);
          });
        } catch {
          (e) => {
            console.log(e);
          };
        }

        setCart(user["cart"]);
        setAddresses(user["addresses"]);
      });
    });
  }, []);

  return cart != null && addresses != null && id != null ? (
    <VStack style='h-screen  items-center'>
      <h2 className='text-white font-bold text-2xl  text-center mt-10'>
        {"Scegli l'indirizzo e prosegui"}
      </h2>
      <VStack style='h-fit py-10 space-y-8 justify-around w-full items-center'>
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
        <ChangeAddress id={id}></ChangeAddress>
      </VStack>

      <button
        className={
          url != null && address != null
            ? "bg-white w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 "
            : "bg-gray-500 w-[60vw] md:w-1/3 h-12 text-black rounded-xl font-bold text-lg px-5 py-3 "
        }
        disabled={url != null && address != null ? false : true}
        onClick={() => {
          window.open(url, "_self");
        }}
      >
        <HStack style='items-center justify-between'>
          Vai al pagamento
          <IoLockClosed size={25}></IoLockClosed>
        </HStack>
      </button>
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
        <p>Nicola Chiarappa</p>
        <p>{myaddress["via"]}</p>
        <p>{myaddress["citta"] + ", " + myaddress["provincia"]}</p>
        <p>{myaddress["telefono"]}</p>
      </VStack>
    </VStack>
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
  const [isProvincia, setIsProvincia] = useState(false);

  return (
    <>
      <VStack style='mt-10 px-10 text-xl '>
        <button
          className='bg-white rounded-full px-5 py-2'
          onClick={() => {
            setIsAdd(!isAdd);
          }}
        >
          Aggiungi indirizzo
        </button>
      </VStack>
      <VStack
        style={
          isAdd == true
            ? "mt-10 px-10 space-y-7 text-white items-center"
            : "hidden"
        }
      >
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
          onChange={(e) => {
            setCitta(e.target.value);
            console.log(e.target.value);
          }}
          type='text'
          className='bg-transparent text-2xl shadow-black shadow-xl px-5 py-2 w-full rounded-xl'
          placeholder='Città'
        ></input>
        <input
          maxLength={2}
          onClick={() => {
            setIsProvincia(true);
          }}
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
        <input
          onChange={(e) => {
            setPhone(e.target.value);
            console.log(e.target.value);
          }}
          type='tel'
          className='bg-transparent text-2xl shadow-black shadow-xl w-full px-5 py-2 rounded-xl'
          placeholder='Telefono'
        ></input>
        <button
          className='text-black bg-white px-5 py-2 rounded-full w-full text-xl'
          onClick={() => {
            addAddress(id, country, citta, provincia, cap, via, phone).then(
              () => {
                location.reload();
              }
            );
          }}
        >
          Aggiungi
        </button>
      </VStack>
    </>
  );
};

export default Checkout;
