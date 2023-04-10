import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDumgOcN6Vv-w_jd-ZUfvK3DBgHGeaDrdQ',
  authDomain: 'd-anatomy-test.firebaseapp.com',
  projectId: 'd-anatomy-test',
  storageBucket: 'd-anatomy-test.appspot.com',
  messagingSenderId: '583358589832',
  appId: '1:583358589832:web:8fcf0d9e05d8388fb6283d',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



// databaseURL:
// 'https://d-anatomy-test-default-rtdb.europe-west1.firebasedatabase.app/',
