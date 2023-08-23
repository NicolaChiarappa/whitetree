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
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
  } else {
    await setDoc(doc(db, "users", id), {
      name: name,
      email: email,
      phone: null,
      cart: [],
      orders: [],
      addresses: [],
      payment: [],
    }).then(() => {});
  }
};

const getUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
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
  getCart(id).then((res) => {
    let trovato = false;

    for (let i = 0; i < res.length; i++) {
      if (res[i].id == product.id && res[i].size == product.size) {
        trovato = true;
        changeCart(id, i, "+", product.quantity, () => {});
      }
    }
    if (trovato == false) {
      console.log("nuovo");
      updateDoc(docRef, {
        cart: arrayUnion(product),
      });
    }
  });
};

const changeCart = async (id, index, operazione, quantity = 1, func) => {
  let cart = null;

  const docRef = doc(db, "users", id);
  getCart(id).then(async (res) => {
    cart = res;

    if (operazione == "+") {
      cart[index]["quantity"] = cart[index]["quantity"] + quantity;
    } else {
      cart[index]["quantity"] = cart[index]["quantity"] - quantity;
    }
    await updateDoc(docRef, {
      cart: cart,
    }).then(() => {
      func();
    });
  });
};

const deleteCartItem = (id, index, func) => {
  let cart = null;

  const docRef = doc(db, "users", id);
  getCart(id).then(async (res) => {
    cart = res;
    cart.splice(index, 1);

    await updateDoc(docRef, { cart: cart }).then(() => {
      func();
    });
  });
};

export {
  addUser,
  getCart,
  getUser,
  addAddress,
  addCart,
  changeCart,
  deleteCartItem,
};
