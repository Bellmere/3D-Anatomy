import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYucVOAHZmVbDSZFjLvKM6dAO4CBfH_Uo",
  authDomain: "anatomi-412f1.firebaseapp.com",
  databaseURL: "https://anatomi-412f1.firebaseio.com",
  projectId: "anatomi-412f1",
  storageBucket: "anatomi-412f1.appspot.com",
  messagingSenderId: "809001845026",
  appId: "1:809001845026:web:b29acecd884e1ea952257b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
