import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp ({
  apiKey: "AIzaSyAyBYVmlxKDUf0jDVHuvBX0dM4C9uT5aug",
  authDomain: "rafiki-capital.firebaseapp.com",
  databaseURL: "https://rafiki-capital-default-rtdb.firebaseio.com",
  projectId: "rafiki-capital",
  storageBucket: "rafiki-capital.appspot.com",
  messagingSenderId: "591328488033",
  appId: "1:591328488033:web:ca3815f32799772e1a9820",
  measurementId: "G-TDDLNRMVF1"
});

export const auth = app.auth()
export default app