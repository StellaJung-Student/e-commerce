export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId,
};

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_apiKey.length - 2
//   ),
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_authDomain.length - 2
//   ),
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_databaseURL.length - 2
//   ),
//   projectId: process.env.REACT_APP_FIREBASE_projectId.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_projectId.length - 2
//   ),
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_storageBucket.length - 2
//   ),
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_messagingSenderId.length - 2
//   ),
//   appId: process.env.REACT_APP_FIREBASE_appId.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_appId.length - 2
//   ),
//   measurementId: process.env.REACT_APP_FIREBASE_measurementId.substring(
//     1,
//     process.env.REACT_APP_FIREBASE_measurementId.length - 2
//   ),
// };

export const publishableKey = process.env.REACT_APP_STRIPE_apiKey;
