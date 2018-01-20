import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDG6Jk-W3IEJnW2W-18iE3S0AezDu_SiT0",
    authDomain: "expensify-84cfa.firebaseapp.com",
    databaseURL: "https://expensify-84cfa.firebaseio.com",
    projectId: "expensify-84cfa",
    storageBucket: "expensify-84cfa.appspot.com",
    messagingSenderId: "458787099094"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };