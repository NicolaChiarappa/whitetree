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
} from "firebase/auth";
import { addUser } from "./database";

import app from "./index";

const auth = getAuth(app);

const currentUser = async () => {
  await setPersistence(auth, browserLocalPersistence);

  return auth.currentUser;
};

const login = async (email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  return signInWithEmailAndPassword(auth, email, password).then(() => {});
};

const register = async (email, password, nome) => {
  let done = null;
  let message = "";
  if (nome == "") {
    return { done: false, message: "nome non valido" };
  }
  await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      currentUser().then((res) => {
        updateProfile(res, { displayName: nome });
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
        location.replace("/account");
      });
    })

    .catch((e) => {});
};

export {
  login,
  currentUser,
  register,
  logout,
  googleaccess,
  auth,
  sendVerification,
};
