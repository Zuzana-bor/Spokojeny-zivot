import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrIoxiyJRudM1ethWEghXKtKV96GqG_so',
  authDomain: 'receptar-b6d27.firebaseapp.com',
  projectId: 'receptar-b6d27',
  storageBucket: 'receptar-b6d27.appspot.com',
  messagingSenderId: '210125251281',
  appId: '1:210125251281:web:e7804de3689fe1359d9bf0',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
