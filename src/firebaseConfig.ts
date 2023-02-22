import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9tbNkAOpZPeZvrWukb0oTqmc6HYIZI4U",
    authDomain: "instagram-clone-41a55.firebaseapp.com",
    projectId: "instagram-clone-41a55",
    storageBucket: "instagram-clone-41a55.appspot.com",
    messagingSenderId: "557842988297",
    appId: "1:557842988297:web:db4f2238b76be3a65567d8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);