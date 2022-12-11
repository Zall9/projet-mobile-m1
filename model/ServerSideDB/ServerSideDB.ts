import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";
import { getAnalytics } from "@firebase/analytics";

const firebase = require("/model/ServerSideDB/config.json");

const firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  databaseURL: firebase.dbURL,
  projectId: firebase.projectId,
  storageBucket: firebase.bucket,
  messagingSenderId: firebase.senderId,
  appId: firebase.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
//
// const firebaseConfigFront={
//   apiKey: "AIzaSyDK0dJw7_eizeBdsopEKf-IWPtlqjRKH-E",
//   authDomain: "projet-mobile-m1-22222.firebaseapp.com",
//   databaseURL: "https://projet-mobile-m1-22222-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "projet-mobile-m1-22222",
//   storageBucket: "projet-mobile-m1-22222.appspot.com",
//   messagingSenderId: "95370679054",
//   appId: "1:95370679054:web:8c0496c1560d84e40e7d5f"
// }

//app front is a wep app
// const appFront = initializeApp(firebaseConfigFront, "appFront" );
//const analytics = getAnalytics(appFront);
