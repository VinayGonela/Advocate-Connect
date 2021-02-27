import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDYslYrZ2pkim9ek9SCVx6M5Sc47qVR5UA",
    authDomain: "connect-1e8b2.firebaseapp.com",
    projectId: "connect-1e8b2",
    storageBucket: "connect-1e8b2.appspot.com",
    messagingSenderId: "181016035145",
    appId: "1:181016035145:web:ab537c882dbfa2629c6498"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;