import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDphODWCrYcUlYyvQXwNTGJtZ0SZtUWlxA",
  authDomain: "subscription-app-a096e.firebaseapp.com",
  projectId: "subscription-app-a096e",
  storageBucket: "subscription-app-a096e.appspot.com",
  messagingSenderId: "62206073606",
  appId: "1:62206073606:web:dbc27eb04919fffe7cdc87"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
