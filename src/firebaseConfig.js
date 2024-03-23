import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDWsNBEgV1_2dLcBV-lwrnqV1x4IJeuU0c",
  authDomain: "proyecto-final-react-a0659.firebaseapp.com",
  projectId: "proyecto-final-react-a0659",
  storageBucket: "proyecto-final-react-a0659.appspot.com",
  messagingSenderId: "1025826671847",
  appId: "1:1025826671847:web:c253861141759e753fa642"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)