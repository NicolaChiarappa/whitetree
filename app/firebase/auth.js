import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  signInAnonymously,
} from "firebase/auth";
import { addUser } from "./database";

import app from "./index";
import { useRouter } from "next/router";

const auth = getAuth(app);

const currentUser = async () => {
  await setPersistence(auth, browserLocalPersistence);

  return auth.currentUser;
};

const login = async (email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  return signInWithEmailAndPassword(auth, email, password).then(() => {});
};

const register = async (email, password, nome, router) => {
  let done = null;
  let message = "";

  if (nome == "") {
    return { done: false, message: "nome non valido" };
  }
  await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      currentUser().then((res) => {
        updateProfile(res, { displayName: nome }).then(() => {
          addUser(res.displayName, res.email, res.uid).then(() => {
            router.push("/account");
          });
        });
      });
      done = true;
    })

    .catch((e) => {
      done = false;
      message = e.message;
    });
  return {
    done: done,
    message: message,
  };
};

const logout = async () => {
  signOut(auth);
};

const sendVerification = async (current) => {
  sendEmailVerification(current);
};

const googleaccess = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      await addUser(user.displayName, user.email, user.uid).then(() => {
        location.replace("/store");
      });
    })

    .catch((e) => {});
};

const ospite = async () => {
  setPersistence(auth, browserLocalPersistence);

  const user = (await signInAnonymously(auth)).user;
  addUser("Ospite", "", user.uid);

  console.log(user);
  return user;
};

export {
  login,
  currentUser,
  register,
  logout,
  googleaccess,
  auth,
  sendVerification,
  ospite,
};
