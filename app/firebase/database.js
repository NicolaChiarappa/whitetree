import app from "./index";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { currentUser } from "@/app/firebase/auth";

const db = getFirestore(app);

const addUser = async (name, email, id) => {
  await setDoc(doc(db, "users", id), {
    name: name,
    email: email,
    phone: null,
    cart: {},
    orders: [],
    addresses: [],
    payment: [],
  }).then(console.log("ciao"));
};

const getUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  }
  return docSnap.data();
};

const getCart = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data()["cart"];
  } else {
    console.log("problema");
  }
};

const addAddress = async (id, country, city, province, zip, street, phone) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, {
    addresses: arrayUnion({
      nazione: country,
      citta: city,
      provincia: province.toUpperCase(),
      cap: zip,
      via: street,
      telefono: phone,
    }),
  });
};

const addCart = async (id, product) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, {
    cart: arrayUnion(product),
  });
};

const changeCart = async (id, index, operazione) => {
  let cart = null;
  const docRef = doc(db, "users", id);
  getCart(id).then(async (res) => {
    cart = res;
    console.log(cart[index]);
    if (operazione == "+") {
      cart[index]["quantity"] = cart[index]["quantity"] + 1;
    } else {
      cart[index]["quantity"] = cart[index]["quantity"] - 1;
    }
    await updateDoc(docRef, {
      cart: cart,
    });
  });
};

export { addUser, getCart, getUser, addAddress, addCart, changeCart };
