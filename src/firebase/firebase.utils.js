import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBZ2mxRR3_d0ubLIz4uUGcd52o8RObAjSI",
    authDomain: "final-db-7b4ac.firebaseapp.com",
    databaseURL: "https://final-db-7b4ac-default-rtdb.firebaseio.com",
    projectId: "final-db-7b4ac",
    storageBucket: "final-db-7b4ac.appspot.com",
    messagingSenderId: "282723767039",
    appId: "1:282723767039:web:7f3ab2b88be0cd3b7672ca",
    measurementId: "G-YTECG5L59D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
