import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBx73n5IPoJTAvvMFYDJPQzjIryyCplbt8",
    authDomain: "pokemon-tcg-pocket-app-a81d0.firebaseapp.com",
    projectId: "pokemon-tcg-pocket-app-a81d0",
    storageBucket: "pokemon-tcg-pocket-app-a81d0.appspot.com",
    messagingSenderId: "946839679574",
    appId: "1:946839679574:web:da9f2815b024d004c901f7",
    measurementId: "G-J7SVVP7QN7"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 獲取 Auth 實例
const auth = getAuth(app);

// 獲取 Firestore 實例
const db = getFirestore(app);

// 創建 Google 提供者實例
const googleProvider = new GoogleAuthProvider();

// 配置 Google 提供者
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export { auth, db, googleProvider };