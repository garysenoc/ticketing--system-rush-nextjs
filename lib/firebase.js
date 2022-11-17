import { initializeApp, getApps } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from '@firebase/storage';

//Production
// let url = window.location.href;
// let url = "https://matcha-jobs.com/";
// url = url.split("/");

// console.log(url);
// console.log(url[2].split(".")[0]);

//production
const firebaseConfig = {
  apiKey: 'AIzaSyBFiIyFvRMPEW-2L_CVNaSndk8wp0A4l20',
  authDomain: 'fir-15045.firebaseapp.com',
  databaseURL: 'https://fir-15045.firebaseio.com',
  projectId: 'fir-15045',
  storageBucket: 'fir-15045.appspot.com',
  messagingSenderId: '421994152556',
  appId: '1:421994152556:web:2de5e3f11f253511b14e49',
};

//Staging
// const firebaseConfig = {
//   apiKey: "AIzaSyASiTmg0WRI0yYSYdIcjsZd_DGc9PaZAJw",
//   authDomain: "sample-bfce0.firebaseapp.com",
//   projectId: "sample-bfce0",
//   storageBucket: "sample-bfce0.appspot.com",
//   messagingSenderId: "652920267611",
//   appId: "1:652920267611:web:12738eaba635eca814f07e",
//   measurementId: "G-PCYCS01GMZ"
// };

// matcha-6262b.firebaseapp.com

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps();

export const storage = getStorage();

