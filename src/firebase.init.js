// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdLnMjLOxDSero-lvUY7TFpwKmzMpgirA",
    authDomain: "content-management-e8ff2.firebaseapp.com",
    projectId: "content-management-e8ff2",
    storageBucket: "content-management-e8ff2.appspot.com",
    messagingSenderId: "707517944609",
    appId: "1:707517944609:web:e752c8150693f09694e460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
