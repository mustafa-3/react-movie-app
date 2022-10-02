import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS91OWqVVw1TztPbO7HsnBlH2uh9zpLkU",
  authDomain: "movie-app-9b9dc.firebaseapp.com",
  projectId: "movie-app-9b9dc",
  storageBucket: "movie-app-9b9dc.appspot.com",
  messagingSenderId: "295330405186",
  appId: "1:295330405186:web:8f431801450c90d69d06db",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signUp = (auth, email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log(userCredential);
      navigate("(/");
    }
  );
};

export const login = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const userObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => {
  signOut(auth);
};
