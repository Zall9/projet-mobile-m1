import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";

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
