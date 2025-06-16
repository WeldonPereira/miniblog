import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA00P6Sk7RoPpNyje15mxJXIvXj7z3L1_A",
  authDomain: "miniblog-25692.firebaseapp.com",
  projectId: "miniblog-25692",
  storageBucket: "miniblog-25692.firebasestorage.app",
  messagingSenderId: "946071892624",
  appId: "1:946071892624:web:85205e2400d6ce9da85e15",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
