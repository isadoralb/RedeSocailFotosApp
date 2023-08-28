import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAukP2Y0Z--76Wf5Tb7c1ttnVXlrQrpVk",
  authDomain: "redesocialfotosapp-9db22.firebaseapp.com",
  projectId: "redesocialfotosapp-9db22",
  storageBucket: "redesocialfotosapp-9db22.appspot.com",
  messagingSenderId: "1011605735527",
  appId: "1:1011605735527:web:6517f185e3a3b73a72ecc2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);