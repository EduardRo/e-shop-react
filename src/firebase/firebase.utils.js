import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLkmmIPIFG5Rq__bzqgox80az5pBFaxb0',
  authDomain: 'e-shop-react-57f4d.firebaseapp.com',
  projectId: 'e-shop-react-57f4d',
  storageBucket: 'e-shop-react-57f4d.appspot.com',
  messagingSenderId: '628525899291',
  appId: '1:628525899291:web:f4db4d7ed420329bae22be',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
