// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBejD5uWJ-waC4V0kfZ19EYRsgDBiLgrC0",
  authDomain: "absensi-siswa-e28d3.firebaseapp.com",
  databaseURL: "https://absensi-siswa-e28d3-default-rtdb.firebaseio.com",
  projectId: "absensi-siswa-e28d3",
  storageBucket: "absensi-siswa-e28d3.appspot.com",
  messagingSenderId: "61476094624",
  appId: "1:61476094624:web:e296fba324347132243fc5",
  measurementId: "G-48TZ74C2ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};