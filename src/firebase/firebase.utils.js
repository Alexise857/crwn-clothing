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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
