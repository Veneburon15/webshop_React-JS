import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNWqKUz3xrQ0D8YHtMLdlShpJZCMVcpwU",
  authDomain: "eclat-cafe-165a5.firebaseapp.com",
  projectId: "eclat-cafe-165a5",
  storageBucket: "eclat-cafe-165a5.appspot.com",
  messagingSenderId: "400329079199",
  appId: "1:400329079199:web:39d2597249a70a846065aa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
