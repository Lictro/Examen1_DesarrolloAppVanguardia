import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvidn8kC_zjxojJUn7ErKd7KoGrSc98CE",
  authDomain: "examen1appvang.firebaseapp.com",
  databaseURL: "https://examen1appvang.firebaseio.com",
  projectId: "examen1appvang",
  storageBucket: "",
  messagingSenderId: "467640995707"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase
  .auth
  .GoogleAuthProvider();
