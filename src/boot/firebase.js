// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgMyTedfSENh2C-2bsFEqQ6eubAGgA8ls",
  authDomain: "smackchat-8abd4.firebaseapp.com",
  databaseURL: "https://smackchat-8abd4.firebaseio.com",
  projectId: "smackchat-8abd4",
  storageBucket: "smackchat-8abd4.appspot.com",
  messagingSenderId: "469548843137",
  appId: "1:469548843137:web:14bec90155fb1c6275cd80"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }