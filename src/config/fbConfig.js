import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnCC0vQhgc1z1c_W-_U6fJQ0xR9d6Utg4",
    authDomain: "react-posts-82d77.firebaseapp.com",
    databaseURL: "https://react-posts-82d77.firebaseio.com",
    projectId: "react-posts-82d77",
    storageBucket: "react-posts-82d77.appspot.com",
    messagingSenderId: "910292572061"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;