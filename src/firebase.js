
import { getFirestore } from "firebase/firestore";
// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore" 
import {collection, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app';





const firebaseConfig = {
    apiKey: "AIzaSyBimb314mfGdCU1RGvfY5gRcIj_FahY9lI",
    authDomain: "https://disney-plus-clone-tau-sandy.vercel.app/",
    projectId: "disney-clone-903e5",
    storageBucket: "disney-clone-903e5.appspot.com",
    messagingSenderId: "397136573834",
    appId: "1:397136573834:web:c3d6e324ae71d727230473"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore();
// const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = getStorage();
// const signInWithPopup();

// const colRef = collection(db, 'movies')

export  {auth, provider};
export default db;

// export const signInWithGoogle = ()=>{
//     signInWithPopup(auth, provider).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// };
 



