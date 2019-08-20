import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBMcuhJi0xNL02ErvGQkfuYJTt1sg0kuiM",
  authDomain: "personalsite-8baaf.firebaseapp.com",
  databaseURL: "https://personalsite-8baaf.firebaseio.com",
  projectId: "personalsite-8baaf",
  storageBucket: "",
  messagingSenderId: "663159526375",
  appId: "1:663159526375:web:efa2a883c7d6cf63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;