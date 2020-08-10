import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyATWXtvt7I6KmJ7BbKiw0food6LqXA-Q7A',
  authDomain: 'commerce-db-1e28f.firebaseapp.com',
  databaseURL: 'https://commerce-db-1e28f.firebaseio.com',
  projectId: 'commerce-db-1e28f',
  storageBucket: 'commerce-db-1e28f.appspot.com',
  messagingSenderId: '375037008240',
  appId: '1:375037008240:web:717214b67a2fe68a1197b5',
  measurementId: 'G-Y0B5EBR3EM',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
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
        ...addtionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
