import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";
import {getAnalytics} from "@firebase/analytics";

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

const firebaseConfigFront={
  apiKey: "AIzaSyBXtWY5qQlUvTKzD2AFY4q7l67mGzMAbgQ",
  authDomain: "hairbook-1605515794372.firebaseapp.com",
  projectId: "hairbook-1605515794372",
  storageBucket: "hairbook-1605515794372.appspot.com",
  messagingSenderId: "842670915786",
  appId: "1:842670915786:web:e8711db5387019a1b67433",
  measurementId: "G-5F0LR7JYQM"
}

//app front is a wep app
const appFront = initializeApp(firebaseConfigFront);
const analytics = getAnalytics(appFront);


