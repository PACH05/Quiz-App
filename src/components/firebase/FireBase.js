import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

//Config of Firebase Realtime database
const firebaseConfig = {
    apiKey: "AIzaSyAcQDOMDfrYxytA_XBHroz8ANcVly6DybA",
    authDomain: "quiz-app-28f17.firebaseapp.com",
    projectId: "quiz-app-28f17",
    storageBucket: "quiz-app-28f17.appspot.com",
    messagingSenderId: "944801125381",
    appId: "1:944801125381:web:554e177c1af2254573b86c"
  };

  //Initialization of the database and exporting the database for further use
  firebase.initializeApp(firebaseConfig);
  export const data = firebase.database();
  export default firebase;