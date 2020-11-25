import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCWDCJdCYfN8Tn1vNCzYlMjIwaQ41h1Iss",
    authDomain: "react-native-cru-firebase.firebaseapp.com",
    databaseURL: "https://react-native-cru-firebase.firebaseio.com",
    projectId: "react-native-cru-firebase",
    storageBucket: "react-native-cru-firebase.appspot.com",
    messagingSenderId: "409663648022",
    appId: "1:409663648022:web:f2cceefd8c491fb52ee037"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }