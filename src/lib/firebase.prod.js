import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCCjnctasfb1acsp_qLLKSqgMJ6BVWzNzo",
  authDomain: "netflixclone-941c7.firebaseapp.com",
  databaseURL: 'https://netflixclone-941c7-default-rtdb.firebaseio.com',
  projectId: "netflixclone-941c7",
  storageBucket: "netflixclone-941c7.appspot.com",
  messagingSenderId: "37831772575",
  appId: "1:37831772575:web:c1626f993553944b3015aa",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
