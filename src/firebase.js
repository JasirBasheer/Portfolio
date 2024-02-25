import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAU0_91-P_1bRn0DXmRpKTvQLvReGj9Npc',
  authDomain: "portfolio-5cc81.firebaseapp.com",
  projectId: "portfolio-5cc81",
  storageBucket: "portfolio-5cc81.appspot.com",
  messagingSenderId: "773434280223",
  appId: "1:773434280223:web:cc534835f74b0e3fab082a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}