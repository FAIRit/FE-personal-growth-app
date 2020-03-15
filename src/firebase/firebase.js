import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyAG_PdK75FfF8S8eUA7rgRx-RURrGWDAfo",
    authDomain: "personal-growth-app.firebaseapp.com",
    databaseURL: "https://personal-growth-app.firebaseio.com",
    projectId: "personal-growth-app",
    storageBucket: "personal-growth-app.appspot.com",
    messagingSenderId: "458731510450",
    appId: "1:458731510450:web:d9a0631eb9d225968c07ab"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
