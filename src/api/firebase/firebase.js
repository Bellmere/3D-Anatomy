import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYucVOAHZmVbDSZFjLvKM6dAO4CBfH_Uo",
  authDomain: "anatomyappcp1.clinicalphysio.com",
  databaseURL: "https://anatomyappcp1.clinicalphysio.com/",
  projectId: "anatomi-412f1",
  storageBucket: "anatomi-412f1.appspot.com",
  messagingSenderId: "809001845026",
  appId: "1:809001845026:web:b29acecd884e1ea952257b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
