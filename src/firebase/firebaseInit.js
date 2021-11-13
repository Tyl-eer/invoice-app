import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQsrEwH1VZDDlIBESxp31Kvn-BLd0w2zI",
  authDomain: "invoice-yt.firebaseapp.com",
  projectId: "invoice-yt",
  storageBucket: "invoice-yt.appspot.com",
  messagingSenderId: "699227740771",
  appId: "1:699227740771:web:32a980cf010b18e3e63656"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
