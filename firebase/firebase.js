import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB-xMQkKMxdHTpqqVOpa3G0SRZ4a_anUdw",
    authDomain: "promociones-realva-induvet.firebaseapp.com",
    projectId: "promociones-realva-induvet",
    storageBucket: "promociones-realva-induvet.appspot.com",
    messagingSenderId: "643737917036",
    appId: "1:643737917036:web:2c57b76d535eaaa75d2a49",
    measurementId: "G-TS74SMKBL2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore();