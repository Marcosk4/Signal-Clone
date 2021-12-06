import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUnUMWxQzIzqMSrXeK658QGRM1LOmhMB8",
    authDomain: "signal-clone-fe900.firebaseapp.com",
    projectId: "signal-clone-fe900",
    storageBucket: "signal-clone-fe900.appspot.com",
    messagingSenderId: "280772705611",
    appId: "1:280772705611:web:6d4a325c38462ce5f97cce"
};


let app; 

if(firebase.apps.length === 0) {
    app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };