// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDpmjbTApTaIDEUAIs-I9Gtafhx0n8ias4",
	authDomain: "slack-clone-13896.firebaseapp.com",
	projectId: "slack-clone-13896",
	storageBucket: "slack-clone-13896.appspot.com",
	messagingSenderId: "1029680900759",
	appId: "1:1029680900759:web:4181a55e42e1e3b452d7d2",
	measurementId: "G-DFKXED0DXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
