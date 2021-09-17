import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyB90jQs665prkSnu9rUsga14KqWjZu_n-Y",
    authDomain: "crwn-db-2ac46.firebaseapp.com",
    projectId: "crwn-db-2ac46",
    storageBucket: "crwn-db-2ac46.appspot.com",
    messagingSenderId: "384788236310",
    appId: "1:384788236310:web:1d9e1f8bef0fbff8ce0d37",
    measurementId: "G-VS83CCZH61"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user',error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;