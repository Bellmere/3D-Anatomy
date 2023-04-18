import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9R23nmjdRMXZ6G3rYlCsodI91qkBTQqo",
  authDomain: "app-antomy-test.firebaseapp.com",
  projectId: "app-antomy-test",
  storageBucket: "app-antomy-test.appspot.com",
  messagingSenderId: "431353057514",
  appId: "1:431353057514:web:2873a38aa99a00bd738793"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


