import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
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

export const signUp = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate(-1);
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate(-1);
    })

    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  signOut(auth);
};
