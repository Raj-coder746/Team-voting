import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAk1PhkqI0zNFrLP1HLYRYk-W7Z8oyC1iY",
  
    authDomain: "class-test-5575c.firebaseapp.com",
  
    projectId: "class-test-5575c",
  
    storageBucket: "class-test-5575c.appspot.com",
  
    messagingSenderId: "787917374422",
  
    appId: "1:787917374422:web:0673df7e682e9b16ff5a77"
  
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();