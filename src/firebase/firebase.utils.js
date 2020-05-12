import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCbzXuH9p0a-whbmnH6-ABTyBVKYMLiP4U',
  authDomain: 'ecom-78591.firebaseapp.com',
  databaseURL: 'https://ecom-78591.firebaseio.com',
  projectId: 'ecom-78591',
  storageBucket: 'ecom-78591.appspot.com',
  messagingSenderId: '439595051994',
  appId: '1:439595051994:web:2644ffebe76f2a21932ee3',
  measurementId: 'G-BFJV1YNCZT',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select-account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);
console.log(provider);

export default firebase;
