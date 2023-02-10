import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//Firebase configuration + Firebase libraries
const firebaseConfig = {
  apiKey: "AIzaSyDY18BVdO7dNJSAED4SIKSAF0GCKvxyIGw",
  authDomain: "seeahead-app.firebaseapp.com",
  projectId: "seeahead-app",
  storageBucket: "seeahead-app.appspot.com",
  messagingSenderId: "574595046116",
  appId: "1:574595046116:web:fed082990ff6b442866af1",
  measurementId: "G-6Q3G1ZDJBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//TODO: Set up analytics later
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app, auth}