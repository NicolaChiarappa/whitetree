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
} from "firebase/auth";

import app from "./index";

const auth = getAuth();

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
    (done = false), (message = "Nome non valido");
  }
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      done = true;
    })
    .then(
      updateProfile(auth.currentUser, {
        displayName: nome,
      })
    )
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

const googleaccess = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      location.replace("/account");
    })

    .catch((e) => {});
};

export { login, currentUser, register, logout, googleaccess };
