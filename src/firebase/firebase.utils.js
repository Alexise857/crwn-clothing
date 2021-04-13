import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBaYGo5BPA5TwvLNgzkwItRIJLL_9FO1NM",
    authDomain: "crwn-zero-to-hero.firebaseapp.com",
    projectId: "crwn-zero-to-hero",
    storageBucket: "crwn-zero-to-hero.appspot.com",
    messagingSenderId: "313598830562",
    appId: "1:313598830562:web:ed5d2a47a4ed90d5b0bbbb"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
