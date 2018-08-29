import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsh3xDB0hTu2k2MP_E2C8aPGVngJJFPzQ",
    authDomain: "blog-10563.firebaseapp.com",
    databaseURL: "https://blog-10563.firebaseio.com",
    projectId: "blog-10563",
    storageBucket: "blog-10563.appspot.com",
    messagingSenderId: "1016611632445"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};