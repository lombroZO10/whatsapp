import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqPOzlAO-KIUGxPufJhz_e5XaBcMuIO4Q",
    authDomain: "whatsappweb-34ccb.firebaseapp.com",
    projectId: "whatsappweb-34ccb",
    storageBucket: "whatsappweb-34ccb.appspot.com",
    messagingSenderId: "540399546737",
    appId: "1:540399546737:web:ff62942a2e52b29cb8c6d0",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };